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
          <div class="row">
            <div class="col col--12 center">
            <picture>
              <source
                srcset="/img/ss-demo-dark.svg"
                media="(prefers-color-scheme: dark)"
              />
              <img
                src="/img/ss-demo.svg"
                alt="Screenshot of the Panoramica application UI"
              />
            </picture>
              
            </div>
          </div>

          <HomepageFeaturesGeneral />
          <h2 className="subhead">🧰 Build with Panoramica</h2>
          <HomepageFeaturesDev />
          <div class="row">
            <div class="col col--12 center">
              <Link
                className="button button--primary button--lg"
                to="/docs/introduction"
              >
                Read the docs
              </Link>
            </div>
          </div>

          <div class="row margin-top--xl margin-bottom--xl">
            <div className="col col--8 col--offset-2 center form-box shadow--md">
              <h2 className="subhead">Sign up for the hosted version</h2>
              <h3 className="padding--md">If you'd like to try Panormica with your existing Orbit workspace, fill out this form and we'll reach out to enable it for you.</h3>
              <form action='https://app.orbit.love/submissions/59d63df6-a7a0-4770-81fe-0f6f2b43deba' method='POST'>
                <label name='email'>✉️ Your email address</label>
                <input type='text' id='application-email' name='email' />
                <button className="button button--secondary button--lg" type="submit">Signup</button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}