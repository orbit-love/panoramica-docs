import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeaturesGeneral from "@site/src/components/HomepageFeaturesGeneral";
import HomepageFeaturesDev from "@site/src/components/HomepageFeaturesDev";

import styles from "./index.module.css";
import SignupForm from "../components/SignupForm";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle margin-bottom--xs">{siteConfig.tagline}</p>
        <p>
          powered by{" "}
          <a classnName="tertiary" href="#">
            Orbit
          </a>
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg margin-horiz--md"
            to="/docs/introduction"
          >
            Try the demo
          </Link>        
          <Link
            className="button button--secondary button--lg margin-horiz--md"
            to="/docs/introduction"
          >
            Get access
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
          <h2 className="subhead">🧰 Build with Panoramica</h2>
          <HomepageFeaturesDev />
          <div class="row">
            <div class="col col--12 center">
              <Link
                className="button button--secondary button--lg"
                to="/docs/introduction"
              >
                Read the docs
              </Link>
            </div>
          </div>

          <div class="row margin-top--xl margin-bottom--xl">
            
              <SignupForm />

          </div>
        </main>
      </div>
    </Layout>
  );
}
