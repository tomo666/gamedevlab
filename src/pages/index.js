import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

import Translate, {translate} from '@docusaurus/Translate';

/*
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          <img src="img/Hero_Image.png" />
        </Heading>
        <p className="hero__subtitle">
          <Translate id="pages.index.head.tagline" description="Title page tagline">
            Dr. Dotton & Bitton's Game Dev Lab EX
          </Translate>
        </p>
      </div>
    </header>
  );
}*/

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <p className="hero__subtitle">
          <Translate id="pages.index.head.tagline" description="Title page tagline">
            Dr. Dotton & Bitton's
          </Translate>
        </p>
        <Heading as="h1" className="hero__title">
          <Translate id="pages.index.head.title" description="Title page title">
            Game Dev Lab EX
          </Translate>
        </Heading>
      </div>
    </header>
  );
}

/*
title: translate({
  id: "website.title",
  message: "Game Dev Laboratory",
  description: "Website Title"
}),
tagline: translate({
  id: "website.tagline",
  message: "Dr. Dotton & Bitton's",
  description: "Website Title"
}),
*/
/*
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}
*/
export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      //title={`${siteConfig.title}`}
      description={`${siteConfig.tagline}`}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
