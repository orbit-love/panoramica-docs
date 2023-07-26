---
slug: introducing-panoramica
title: Introducing Panoramica
authors: [dzello, steeve]
tags: [panoramica]
---

Today we are very excited to share a new project with you called
Panoramica. Panoramica makes it easy for developers to
work with conversational data, one of the most prevalent kinds on
the internet. In particular, Panoramica helps leverage AI and Large Language Models (LLMs) in the context of single conversations,
groups, or large panoramas like online communities or social networks.

## Why did we build Panoramica?

**Josh**: At Orbit, most of the data we work with is conversational.
Our most popular integrations are to community platforms and social networks.
Both varieties of community platform—chat and forum—are conversational in nature.
Even GitHub is conversational - conversations happen on issues, pull requests, pull
request reviews, and of course GitHub Discussions. Not all community data is
conversational, but most of it is.

As community builders, we know how important conversations are. They are the conduit through which connections are made, information is shared, and work is done. Back in April, I
started to explore ways that Orbit could bring more insights to users by looking
at the conversation level vs. single activities. At the same time, I started looking
at how Orbit could help our users leverage AI and the rapid advancement of LLMs in
the context of community building. Since many LLMs are optimized for conversations _with
humans_, I thought they might also be very good at analyzing conversations _between humans_.

Together, these two investigations led to Panoramica. As I got underway with "conversationalizing"
Orbit's data, I saw first-hand how tricky it could be. Orbit has integrations to dozens
of conversational platforms and each one works a different way. Some platforms have threads,
others have multiple levels of replies. Some platforms have channels, others have categories,
others have more unique conversational boundaries, such as single issues or PRs on GitHub.
Email is its own animal. There is no standard to work off of.

Making it harder, when conversationalizing the data I wanted to account for a variety of
things that I felt were important to understanding the whole conversation. These include:

- The full **Parent/Reply Tree**
- **Mentions** of people in messages
- **Entities** used in messages (hashtags, keywords, extractable topics, etc.)
- **Reactions** to messages in the thread
- **Actors** who wrote the messages

One of the first choices I needed to make was about how to store all of this information.
I reached for a graph database because of how relationship-oriented the data is, and
also how common certain kinds of traversals are for analyzing the data.
For example, to find all descendants
of an original post or all members or entities anywhere in a thread. Or
who is connected to who, which is very useful in the community context.
It turns out that conversations get much easier to work
with when you have a graph data model.

The graph query language I learned, called [CYPHER](<https://en.wikipedia.org/wiki/Cypher_(query_language)>), is very short and expressive. Here's a portion of a query from Panoramica that finds all descendants of
each activity in a project and yields a list of nodes that then can be looped over.

```cypher
MATCH (p:Project)-[:OWNS]->(a:Activity)
WITH DISTINCT a
  MATCH path = (a)<-[:REPLIES_TO*0..]-()
WITH a, path
  UNWIND nodes(path) as node
```

This makes it really easy to get all members, entities, mentions, replies, etc. from across an entire thread. And the performance is very fast, even over large datasets.

I could go on about graph queries for hours, so let me get back to the big picture.
I did the work to transform Orbit activities into this kind of a conversation
graph. Everything except reactions, which was too much scope for now. The result was
really compelling. Being able to see the visual graph of conversations in a community
helped me see all kinds of patterns about the Orbit community I hadn't noticed before.
I knew I wanted to get this in the hands of our users and customers soon.

Of course, staring at a screenful of nodes and edges isn't for everyone, so at this
point I started to look at how AI could allow end users to get these insights
without actually knowing or caring that there's a graph involved. At this point, one of Orbit's
most senior engineers, Steeve Bete, got involved in the project. Steeve had been
doing some AI explorations of his own and had ideas about how to engineer prompts that would
allow end users to ask simple questions and still get the right answers. Questions like:

- Who in our community knows the most about Python?
- What are the most popular websites that our members share?
- What was the most common problem reported in our support channel this month?
- How many members have had a conversation with Paula? What about?
- Who is our most influential community member?

For the last month, Steeve and I have been working to bring the first version
of Panoramica to you. It is certainly not complete, and not yet capable of answering
every question you might have regarding your universe of conversations. But we think
it's a decent start and that it could already help developers start to build
AI experiences with conversational data.

## Why is Panoramica open source?

In building Panoramica, the question came up many times: should we deliver this
to users from within our existing (closed source) application or should we do something
different? From early on, I felt like we were creating something of value that
could be relevant for many new kinds of developers and end users,
beyond the boundaries of who we serve today, and yet still create tons of new opportunities
for our core audience - the community builders that are the reason we exist.

For an open source project to make sense, in comparison to a closed-source option, it
needs to have the potential to be much larger because it is open source. I see that
potential with Panoramica because conversations are everywhere and everyone—community builder or not—finds themselves in tens if not hundreds of them every day. There's no doubt in my mind that
better tools, and in particular LLMs, could help people have better conversations
that also consume less time and effort. I can't think of how much time I could have saved
over the years, or better outcomes I could have created, by having an AI assistant in my
chats that doesn't get tired, cranky, hangry, and also has, you know, knowledge of everything on the internet :D

It's now obvious that much of what many developers will be building in the coming years
are ways to bring the power of AI into different contexts where it can benefit
us humans. As conversations are one of the most important and most universal
contexts, it just felt right to put Panoramica out in the open where it can be
improved, extended, and forked in order to create conversational AI experiences
fast for a huge number of use cases that we can't predict today.

## What happens next?
