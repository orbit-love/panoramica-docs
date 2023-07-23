import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const SubHead = [
  {
    title: "Build with Panoramica"
  }
 ]

const FeatureList = [
  {
    title: "Adaptive UI",
    description: (
      <>
        Panoramica uses <a href="https://dockview.dev/">Dockview</a> to create a
        nimble, customizable work environment. Navigate through conversations
        with ease, prioritizing key information.
      </>
    ),
  },
  {
    title: "Context-Driven AI",
    description: (
      <>
        With simple prompts like "What's happening here?", our AI responds
        intelligently, adapting its analysis to a single message, a
        conversation, a user, a channel, or even an entire community.
      </>
    ),
  },
  {
    title: "Versatile Data + Models",
    description: (
      <>
        As an open-source solution, Panoramica offers flexibility. Integrate
        data from various sources, choose from different vector stores and LLMs
        via <a href="https://langchain.com/">LangChain</a>, craft your own UI
        widgets, or use our graph data model and AI to enhance other
        experiences.
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
      <div className="text--center padding--md shadow--lw">
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
