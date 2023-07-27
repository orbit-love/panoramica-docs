import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Monitor All The Channels",
    description: (
      <>
        Set up tabs to monitor all the channels you care about. Popular data
        sources are available like GitHub, Discord, Discourse, and Twitter.
      </>
    ),
  },
  {
    title: "Save Important Conversations",
    description: (
      <>
        Save important conversations for followup so no conversation slips
        through the cracks.
      </>
    ),
  },
  {
    title: "Ask the AI Assistant",
    description: (
      <>
        Bring an AI assistant into any conversation. Ask the assistant to
        summarize, find similar threads, or help brainstorm the perfect reply.
      </>
    ),
  },
];

function Feature({ title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center padding-horiz--md">
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
