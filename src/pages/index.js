import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeaturesGeneral from "@site/src/components/HomepageFeaturesGeneral";
import HomepageFeaturesDev from "@site/src/components/HomepageFeaturesDev";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle margin-bottom--xs">{siteConfig.tagline}</p>
        <p>
          powered by{" "}
          <a classnName="tertiary" href="https://orbit.love">
            Orbit
          </a>
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/introduction"
          >
            Read the introduction
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Docs`}
      description={`Website and documentation of the ${siteConfig.title} project`}
    >
      <HomepageHeader />
      <div class="container">
        <main>
          <HomepageFeaturesGeneral />
          <section>
            <h2 className="subhead">🧰 Build with Panoramica</h2>
          </section>
          <HomepageFeaturesDev />
          <div class="row margin-bottom--xl">
            <div class="col col--12 center">
              <Link
                className="button button--secondary button--lg"
                to="/docs/introduction"
              >
                Read the docs
              </Link>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}
