import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Flexible UI",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Panoramica uses <a href="https://dockview.dev/">Dockview</a> to provide
        a lightweight, flexible windowing experience, letting you lay out and
        work on conversations as you like. Conversations are rendered and sorted
        to bring out the most relevant information.
      </>
    ),
  },
  {
    title: "Context-Aware AI",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Write prompts as simple as "What is happening here?" and the AI will
        respond accurately based on the context the user is in - a single
        message, a conversation, a user, a channel, or a whole community.
      </>
    ),
  },
  {
    title: "Open Source",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Extend Panoramica to pull in conversational data from any source. Theme
        to your liking. Plug in different vector stores and LLMs. Create your
        own UI widgets. Use Panoramica's graph data model and AI to power other
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
