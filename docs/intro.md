---
sidebar_position: 1
---

# Introduction

Panoramica is an open source project with the mission to make conversational
data easier to manage, analyze, and collaborate on with AI.

What is **conversational data**? Generally it's any data that represents an
exchange of messages between one or more people. Conversational data is one of the
most common formats on the internet. Email, chat, SMS, messaging, forums, social networks, and online
communities all have different shades of conversational data. Even on GitHub,
conversational data exists in the form of issues, pull requests, reviews, and GitHub Discussions.

With the growing popularity of Large Language Models and chat-specific adaptations like ChatGPT, it's now
possible to analyze, understand, and facilitate conversations at a whole new level.
The implications of better conversations are limitless, both for the individuals conversing
and the businesses and communities who create the context for conversations to happen in.

Panoramica's mission is to help anyone add superpowers to their conversations, from monitoring
and analyzing them all the way to writing replies. The main blocker
to this today is getting conversational data out of the systems where it is happening and into
an area where the developer / user can work with it. That's where Panoramica starts.

## How Panoramica works

Panoramica has three main parts:

1. **Ingesting** conversational data
1. **Preparing** for use by the UI and AI
1. **Serving** experiences to users

## Ingesting data

The first supported data source for Panoramica is [Orbit](https://orbit.love/). Orbit is a
tool for managing distributed communities and it has integrations to many of the most common
places that conversations happen. These integrations ingest data in the form of activities and
members. This data can then be fetched in full resolution via the [Orbit API](https://api.orbit.love/).

The Orbit API has recently added several new features that make conversation processing possible:

- Returning all of the text content needed to reproduce messages
- Returning parent/child references for messaging threads
- Ingesting and returning parent activities so that full threads can be rendered

:::info

Panoramica is created and maintained by the Orbit team. Our intention is to support Orbit
as a data source while adding support for other conversational data sources, tools, and platforms. If you're interested
in adding a data source, please open an issue or PR on GitHub. We welcome all contributors! :pray:

:::

All data goes into a single table called `Activity` with around a dozen fields.
This is intentional to keep out complexity and
simplify integration. All information related to the activity, including references like the actor, are stored alongside the activity. Only later are they turned into additional entities. The `Activity` table stores
everything necessary to analyze and reproduce threaded conversations.

## Preparing data

Panoramica fetches data from the APIs of data sources and then stores it in PostgreSQL, using the
[Prisma](https://prisma.io/) ORM as an adapter. From there, data is processed and stored into a graph format for use
by the UI and the AI. The graph database we are using is the open source [Memgraph](https://memgraph.com/)
database.

Why use a graph database? Threaded conversations are inherently tree-like and easily represented in graph format, with a node
for each message and an edge pointing from replies to parents. No joins are required to reconstitute
conversations, no matter what depth was reached. A graph database also makes it convenient to attach
additional nodes to each message or each conversation, such as the actor.

With a graph database, we can quickly write performant queries to answer questions like:

- Which activities represent the start of a conversation? A reply? An island?
- Which conversation has the most total replies?
- Which conversation has the largest depth?
- Which conversation has the most unique actors?
- Which actor has participated in the most conversations? As an OP? As a replier?

All of these queries, and many more, can be written in a straightforward way to answer questions
about conversations, both individual conversations and the panorama of conversations that stretch across a community.

Another element of property graph databases is that they are schemaless. Favorably for Panoramica, that means
that developers can add new properties or labels to parts of the graph without writing any migrations
or schema code. They can also add entirely new types of nodes without much overhead.

## Serving experiences

Once data is present in the graph database, it is ready to be displayed in the UI. It is also
ready to be used to create embeddings that can be uploaded to a vector store and queried by an LLM.

### User interface

The Panoramica user interface is based on the [Dockview](https://dockview.dev/) open source project.
Dockview provides a lightweight window and tab management layer. It supports horizontal and vertical
splitting, tab groups, and drag and drop. It also supports serializing the exact state of the interface
and loading it back, so that changes persist across pageviews.

The Panoramica UI has several main purposes:

- Help users monitor channels and find new or relevant conversations
- Work on those conversations with an AI assistant
- Help users explore historical trends, patterns, and related data

:::info

The AI assistant isn't limited to working in the context of one conversation. There is also
a general prompt that can search across all of the community data via a vector store. Or a filtered
set like a specific data source or channel. That said, this is an ongoing area of development and
the results are not likely to be as good yet.

:::

The Panoramica application is built with [Next.js](https://nextjs.org/) and [React](https://reactjs.org/).
This includes both server-side and client-side components.

### AI and LLMs

Panoramica uses the [LangChain](https://langchain.com/) open source project to provide a wrapper
around LLM-related functionality. LangChain makes it easy to plug in different pieces to each part
of the chain of technologies needed to provide AI experiences to users.

Currently, out-of-the-box Panoramica supports [OpenAI](https://openai.com/) for LLMs
and [Pinecone](https://www.pinecone.io/) as a vector store. The intentional is to add support
for other models and stores over time leveraging LangChain. Contributions are welcome!

## Next step: Get Started!

Now that you have some background on what Panoramica is, continue on and see how you can
be analyzing your first conversations in a matter of minutes.
