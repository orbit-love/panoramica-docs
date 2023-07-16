---
sidebar_position: 1
---

# Core Concepts

An overview of how data is stored in Panoramica and how we deal with
various concerns and requirements related to conversational data.

## Projects

Projects are isolated data containers within Panoramica. Members, activities,
and any other data in a project are fully separate from another. Each project
also has independent settings. A user can create as many projects as they like.
Right now, only one user can be connected to a project.

Project settings include the name, Orbit workspace and API key, OpenAI model
name and API Key, and Pinecone environment, API key, and index name. To enable AI
features the OpenAI and Pinecone information must be provided.

## Activity Stream

Send in a stream of activities. An activity is a message in a conversation.
For now this is the only type.
Everything is built from the activity stream, without a need to pull data from
other places. Each activity
should contain all the information needed to re-render it. The core fields of
an activity are:

- `actor`
- `timestamp`
- `sourceId`
- `sourceParentId`
- `source`
- `channel`

The `actor` property is a string representing a unique username or other identifier
of the message sender. The value is local to the source platform - e.g. if an activity's
source is "twitter" the value should be the Twitter user's username.

The `timestamp` is when the message was sent.

The `source` is the platform the message was sent on, e.g. Discord or GitHub.

The `channel` is a context within the source where the message was sent. In chat communities,
this maps to the chat channel. On GitHub it maps to the repository. On Discourse it maps to the category.

The `sourceId` is the identitier for the message from the source system, e.g. a Discord or
Twitter message id.

The `sourceParentId` is the source system's identitier for the message that this message is
a reply to. If the message is not a reply, this field should be blank. `sourceId` and `sourceParentId`
are used to construct conversation trees.

Additional fields that can be supplied are:

- `actorName`
- `globalActorName`
- `globalActor`
- `properties`

Graph nodes `(:Activity)` are created for each activity and contain all of its properties.
Nodes are given additional labels based on their role in a conversation. These labels are
`(:Conversation)` for conversation starters, `(:Reply)` for replies, and `(:Island)` for
activity with no parent and no children.

Edges are created between pairs of activity where one is a reply to the other. This looks like
`(reply)-[:REPLIES_TO]->(parent)`.

## Members

Members represent the participants in conversations. They are called Members to avoid confusion
with Users. Members are created from the actor information coming from the activity stream.

Graph nodes `(:Member)` are created for each member. Only one node can be created for the same `actor`
within a project.

Edges are created that connect activities with the member who did them. These edges look like
`(member:Member)-[:DID]->(activity:Activity)`

### Local-Global Actor Mapping

Panoramica supports analyzing conversational data across multiple source at a time. Since
member identifiers change across sources, we need a way to a way to map different local
actors to the same member in a Panoramica project. If we do not, widgets like the Member List
will have multiple members for the same person, and each member will only have a partial view
of that person's history. It is possible to use Panoramica without a local-to-global identity
mapping, but for those reasons we recommend having a mapping when connecting 2 or more data
sources.

Todo - explain how the mapping is done

## Mentions

In most source platforms it is possible to mention other people within messages, e.g. an
@-mention on Twitter. Like replies, this information can be used to infer connections
between members. When data is being imported, mentions are extracted from the text of each
activity and added to the graph.

A mention looks like `(a:Activity)-[:MENTIONS]->(m:Member)`. Whereas an activity can only have
1 `[:REPLIES_TO]` edge, it can have any number of `[:MENTIONS]`.

:::info

Currently, Panoramica only creates `[:MENTIONS]` edges where the member mentioned has themselves
done an activity and therefore has a `(:Member)` node. With that, we are erring on the side of reducing
noise. However, in some cases it may be desirable to create the node and the edge even if the
mentioned person has no activity. For example, to produce a list of people mentioned by community
members who have not sent any messages. We envision a project setting in the future that could
toggle this behavior.

:::info

## Connections

Using the `(:Activity)` and `(:Member)` nodes, along with the `[:DID]`, `[:REPLIES_TO]`, and `[:MENTIONS]` edges, we can
determine how members are connected. Two members are connected if one has replied to or mentioned the other.

The connection can flow from member a to member b, from b to a, or in both directions if each member
has replied to or mentioned the other. In the latter case, we call it a mutual connection.

### Connection strength

Connection strength or weight is a measure of how closely members are connected. The weight
can be helpful for ranking a member's connections and for input into various graph algorithms.
A simple but practical way of computing the weight is looking at the number of activities
that connect the members, i.e. the number of times they have replied to or mentioned each other.
More advanced ways also exist. Paranomica doesn't do much with weight but it is a future
area of development.