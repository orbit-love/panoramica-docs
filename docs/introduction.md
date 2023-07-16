---
sidebar_position: 1
---

# Introduction

Panoramica is an open-source project that makes it easier to handle, understand, and collaborate on conversational data with the help of AI.

**Conversational data** encapsulates any data representing an exchange of messages between individuals. It is one of the most prevalent formats on the internet, evident in email, chat, SMS, messaging platforms, forums, social networks, and online communities. Even on GitHub, conversational data emerges in issues, pull requests, reviews, and GitHub Discussions.

The emergence of Large Language Models and chat-specific adaptations like ChatGPT have revolutionized our ability to analyze, understand, and facilitate conversations. The implications of improved conversations are extensive, benefiting individuals, businesses, and communities that create a context for these conversations.

Panoramica's mission is to supercharge conversations, from monitoring and analyzing them to crafting replies. The primary challenge today lies in extracting conversational data from the systems where the conversations occur and making it available to developers and users. This is where Panoramica steps in.

## How Panoramica Works

Panoramica revolves around three main operations:

1. **Ingesting** conversational data
2. **Transforming** data for use by the UI and AI
3. **Serving** experiences to users

## Ingesting Data

The first supported data source for Panoramica is [Orbit](https://orbit.love/). Orbit is a tool for managing distributed communities, integrating with many common conversational platforms. These integrations ingest data as activities and members, available in full resolution through the [Orbit API](https://api.orbit.love/).

The Orbit API has introduced several new features that enable conversation processing:

- Providing all text content needed to reproduce messages
- Providing parent information for activities that are replies
- Fetching parent activities for replies when they don't exist

:::info

Panoramica is created and maintained by the Orbit team. While Orbit remains a supported data source, we intend to expand support to other conversational data sources, tools, and platforms. If you're interested in adding a data source, please open an issue or PR on GitHub. All contributors are welcome! :pray:

:::

All data is stored in a single table named `Activity`, which includes about a dozen fields. This design choice is intentional to avoid unnecessary complexity and ease integration. All information related to the activity, including references like the actor, is stored alongside the activity. They are later transformed into additional entities. The `Activity` table stores everything necessary to analyze and reproduce threaded conversations.

## Transforming Data

Panoramica fetches data from the APIs of data sources and stores it in PostgreSQL, employing the [Prisma](https://prisma.io/) ORM as an adapter. Subsequently, data is processed and stored in a graph format for use by the UI and AI. The open-source [Memgraph](https://memgraph.com/) database is used as the graph database.

A graph database is useful because threaded conversations are inherently tree-like and can be easily represented in a graph format, with a node for each message and an edge from replies to parents. This setup eliminates the need for joins to reconstitute conversations, no matter their depth. A graph database also conveniently attaches additional nodes to each message or conversation, such as the actor.

With a graph database, we can quickly craft performant queries to answer questions like:

- Which activities represent the start of a conversation? A reply? An isolated message?
- Which conversation has the most replies?
- Which conversation has the largest depth?
- Which conversation involves the most unique actors?
- Which actor has participated in the most conversations? As an originator? As a replier?

We can also tap into the power of graph algorithms to answer questions like:

- What's the shortest introduction path between two members?
- What are the sub-communities within the community? Who are the bridges between them?
- Who has the most reach or influence? (e.g. with Pagerank)

All these queries, and many more, are straightforward and efficient, answering questions about individual conversations and the panorama of conversations stretching across a community.

An additional advantage of property graph databases is their schemaless nature. This feature benefits Panoramica by allowing developers to add new properties or labels to parts of the graph without writing any migrations or schema code. Developers can also add entirely new types of nodes with minimal overhead.

## Serving Experiences

Once the data is present in the graph database, it's ready to be displayed in the UI. It can also be used to create embeddings that can be uploaded to a vector store and queried by an LLM.

### User Interface

The Panoramica user interface is built upon the [Dockview](https://dockview.dev/) open source project. Dockview provides a lightweight window and tab management layer. It supports horizontal and vertical splitting, tab groups, and drag and drop. Additionally, it facilitates the serialization of the exact state of the interface, allowing us to persist changes across page views.

The Panoramica UI serves several main purposes:

- Assisting users in monitoring channels and discovering new or relevant conversations
- Collaborating on those conversations with an AI assistant
- Helping users explore historical trends, patterns, and related data

:::info

The AI assistant isn't confined to the context of a single conversation. It also includes a general prompt that can search across all community data via a vector store, or a filtered set like a specific data source or channel. However, this is an ongoing area of development, and the results may not be fully optimized yet.

:::

The Panoramica application is developed using [Next.js](https://nextjs.org/) and [React](https://reactjs.org/). It includes both server-side and client-side components.

### AI and LLMs

Panoramica employs the [LangChain](https://langchain.com/) open source project to provide a wrapper around LLM-related functionality. LangChain facilitates easy integration of different components into the technology chain needed to provide AI experiences to users.

Currently, Panoramica supports [OpenAI](https://openai.com/) for LLMs and [Pinecone](https://www.pinecone.io/) as a vector store out of the box. We aim to expand support for other models and stores over time using LangChain. Contributions are welcome!

## Next Step: Get Started!

Now that you understand what Panoramica is, continue on to learn how you can start analyzing your first conversations in just a few minutes.
