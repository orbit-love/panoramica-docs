import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

export const SubHead = [
  {
    title: "Build AI-powered experiences for conversational data",
  },
];

const FeatureList = [
  {
    title: "1. Ingests Conversations",
    description: (
      <>
        Panoramica pulls in messages from sources like Discord, GitHub,
        Discourse, and Twitter. Important metadata like actors, mentions,
        replies, and parent/reply relationships are included.
      </>
    ),
  },
  {
    title: "2. Updates the Graph",
    description: (
      <>
        Nodes are created for every message and actor. Conversation trees are
        built by creating edges that join parents with replies. In this format,
        we can do basic graph queries and more advanced algorithms.
      </>
    ),
  },
  {
    title: "3. Constructs Smart Prompts",
    description: (
      <>
        Panoramica finds and formats the data so that an AI assistant can
        correctly assist users with a wide variety of questions and tasks. Based
        on the user's request, the right data is retrieved from vector and graph
        databases.
      </>
    ),
  },
];

function Subhead({ title }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">&nbsp;</div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col")}>
      <div className="text--center">&nbsp;</div>
      <div className="text--center padding--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
