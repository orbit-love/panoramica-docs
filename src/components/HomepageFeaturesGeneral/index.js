import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Monitor All The Channels",
    Svg: require("@site/static/img/thumb-inbox.svg").default,
    description: (
      <>
        Set up tabs to monitor all the channels you care about. Popular data
        sources are available like GitHub, Discord, Discourse, and Twitter.
      </>
    ),
  },
  {
    title: "Save Important Conversations",
    Svg: require("@site/static/img/thumb-inbox.svg").default,
    description: (
      <>
        Save important conversations for followup so no conversation slips
        through the cracks.
      </>
    ),
  },
  {
    title: "Ask the AI Assistant",
    Svg: require("@site/static/img/thumb-mobile.svg").default,
    description: (
      <>
        Bring an AI assistant into any conversation. Ask the assistant to
        summarize the conversation, find similar conversations, or help
        brainstorm the perfect reply.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="margin-bottom--md text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
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
