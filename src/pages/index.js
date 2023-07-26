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
        <h1 className="hero__title">{siteConfig.tagline}</h1>
        <p className="hero__subtitle margin-bottom--lg">
          Built with{" "}
          <a target="_blank" href="https://nextjs.org/">
            Next.js
          </a>
          ,{" "}
          <a target="_blank" href="https://langchain.com/">
            LangChain
          </a>
          ,{" "}
          <a target="_blank" href="https://memgraph.com/">
            Memgraph
          </a>
          , and{" "}
          <a target="_blank" href="https://orbit.love/">
            Orbit
          </a>
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg margin-horiz--md"
            to="/docs/introduction"
          >
            Read the docs
          </Link>
          {/* <Link
            className="button button--secondary button--lg margin-horiz--md"
            to="https://demo.panoramica.ai/"
          >
            Try the demo
          </Link> */}
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
      <div className="container">
        <main>
          <div className="margin-top--xl">
            <h1 className="text-xl center">🧰 What does Panoramica do?</h1>
            <div className="col col--8 col--offset-2 center">
              <p className="center">
                Panoramica helps developers{" "}
                <strong>
                  build AI-powered experiences on top of conversational data
                </strong>
                , from data ingestion to graph construction to interfacing with
                end users and AI.
              </p>
            </div>
          </div>
          <HomepageFeaturesDev />
          <div className="row">
            <div className="col col--12 center">
              <Link
                className="button button--primary button--lg"
                to="/docs/introduction"
              >
                🧰 Learn more
              </Link>
            </div>
          </div>

          <div className="margin-top--lg">&nbsp;</div>
          <div className="margin-top--xl">
            <h1 className="center">
              💁 Panoramica is also a full-stack application
            </h1>
            <div className="col col--8 col--offset-2 center">
              <p className="center">
                Before you can analyze or get help with a conversation, you need
                to know it exists. In noisy places like large communities, this
                is its own challenge. To help, Panoramica includes a flexible,
                end-user-ready interface for{" "}
                <strong>
                  monitoring conversations, bookmarking important ones, and
                  getting help from AI assistants.
                </strong>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col col--12 center">
              <picture>
                <source
                  srcSet="/img/ss-demo-dark.svg"
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
          <div className="row">
            <div className="col col--12 center">
              {/* <Link
                className="button button--primary button--lg"
                to="https://demo.panoramica.ai/"
              >
                💁 Try the demo
              </Link> */}
              <span>&nbsp;&nbsp;</span>
              <Link
                className="button button--secondary button--lg"
                to="/docs/category/user-guides"
              >
                📖 Read user guides
              </Link>
            </div>
          </div>

          <div className="margin-top--lg">&nbsp;</div>
          <div className="margin-top--xl">&nbsp;</div>
          <div id="request-access" className="row">
            <div className="card col col--6 col--offset-3 center shadow--md padding--lg">
              <div className="card__header">
                <h2>Orbit User? Try a Hosted Version</h2>
              </div>
              <div className="card__body">
                <p>
                  If you'd like to try Panormica with your existing Orbit
                  workspace, fill out this form and we'll enable it for you.
                </p>
                <form
                  className="form"
                  action="https://app.orbit.love/submissions/59d63df6-a7a0-4770-81fe-0f6f2b43deba"
                  method="POST"
                >
                  <label name="email">✉️ Your email address</label>
                  <input type="text" id="application-email" name="email" />
                  <button
                    className="button button--secondary button--lg"
                    type="submit"
                  >
                    Email me
                  </button>
                </form>
              </div>
              <div className="margin-top--lg">&nbsp;</div>
            </div>
            <div className="margin-top--lg">&nbsp;</div>
          </div>
          <div className="margin-top--xl">&nbsp;</div>
        </main>
      </div>
    </Layout>
  );
}
