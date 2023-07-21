import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Your inbox, your views",
    Svg: require('@site/static/img/thumb-inbox.svg').default,
    description: (
      <>
        Follow channels, keywords, or entire channels across GitHub, Discord, and Twitter.
      </>
    ),
  },
  {
    title: "Simple conversation management",
    Svg: require('@site/static/img/thumb-inbox.svg').default,
    description: (
      <>
        Save and bookmark conversations for followup so no converation slips thru the
      </>
    ),
  },
  {
    title: "Looks great on mobile",
    Svg: require('@site/static/img/thumb-mobile.svg').default,
    description: (
      <>
        Follow important threads while on the go (or while on the couch), and save key conversations for later. 
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
