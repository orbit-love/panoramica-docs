import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Adaptive UI",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
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
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
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
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
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

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
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
