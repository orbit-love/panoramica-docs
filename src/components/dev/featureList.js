import React from "react";

const featureList = [
  {
    title: "1. Ingest Conversations",
    description: (
      <>
        Panoramica pulls in messages from sources like Discord, GitHub,
        Discourse, and Twitter. Important metadata like actors, mentions,
        replies, and parent/reply relationships are included.
      </>
    ),
    imageLight: "/img/conversation-text-light.png",
    imageDark: "/img/conversation-text-dark.png",
  },
  {
    title: "2. Update the Graph",
    description: (
      <>
        Nodes are created for every message and actor. Conversation trees are
        built by creating edges that join parents with replies. In this format,
        we can do basic graph queries as well as more advanced graph algorithms
        like Pagerank, shortest path, and community detection.
      </>
    ),
    imageLight: "/img/conversation-graph-light.png",
    imageDark: "/img/conversation-graph-dark.png",
  },
  {
    title: "3. Equip an AI Assistant",
    description: (
      <>
        Panoramica finds and formats the data so that an AI assistant can
        correctly assist users with a wide variety of questions and tasks. Based
        on the user&#39;s request, the right data is retrieved from vector and
        graph databases.
      </>
    ),
    imageLight: "/img/conversation-ai-chat-light.png",
    imageDark: "/img/conversation-ai-chat-dark.png",
  },
];

export default featureList;
