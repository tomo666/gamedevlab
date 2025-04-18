import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

import Translate, {translate} from '@docusaurus/Translate';

const FeatureList = [
  {
    title: translate({
      id: "components.HomepageFeatures.feature1",
      message: "Tomo",
      description: "Title for feature #1"
    }),
    imgSrc: require('@site/static/img/Tomo_Skull_x4.png').default,
    description: (
      <Translate id="components.HomepageFeatures.feature1_desc" description="Feature #1 Description">
        The creator of this site. He translates GB Studio 4 into Japanese and also develops plugins for it. He believes that this world is merely a virtual reality. G&apos;day, mate! (yup, he&apos;s from Australia)
      </Translate>
    ),
  },
  {
    title: translate({
      id: "components.HomepageFeatures.feature2",
      message: "Dr. Dotton",
      description: "Title for feature #2"
    }),
    imgSrc: require('@site/static/img/DrDotton_Stand_x4.png').default,
    description: (
      <Translate id="components.HomepageFeatures.feature2_desc" description="Feature #2 Description">
        Dr. Dotton is a fictional character living on Planet Retro. He locks himself in his research lab, making games. The cup on his head has a hole in the bottom and delivers caffeine directly to his brain. Do robots need caffeine?
      </Translate>
    ),
  },
  {
    title: translate({
      id: "components.HomepageFeatures.feature3",
      message: "Bitton",
      description: "Title for feature #3"
    }),
    imgSrc: require('@site/static/img/Bitton_Sit_x4.png').default,
    description: (
      <Translate id="components.HomepageFeatures.feature3_desc" description="Feature #3 Description">
        A protist that has lived on Planet Retro since time immemorial. Bitton enjoys rainy days and playing games. Also aspires to develop original games but always ends up leaving it unfinished.
      </Translate>
    ),
  },
];

function Feature({imgSrc, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={imgSrc} className={styles.featureImg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="siteDescriptionCopy">
          <Translate id="pages.index.head.tagline.description" description="Title page tagline description">Game Dev central for GB Studio tutorials, custom plugins, resources and documentations.</Translate>
          <br/><br/><br/>
          <div className={styles.buttons}>
            <Link className="button button--secondary button--lg" to="/category/gb-studio-チュートリアル">
              <Translate id="pages.index.head.banner.tutorials" description="Title page banner linking to the tutorial page">GB Studio Tutorials (Japanese)</Translate>
            </Link>
            &nbsp;&nbsp;&nbsp;
            <Link className="button button--secondary button--lg" to="/gbs_plugins/intro">
              <Translate id="pages.index.head.banner.plugins" description="Title page banner linking to the plugin page">GB Studio Custom Plugins</Translate>
            </Link>
            &nbsp;&nbsp;&nbsp;
            <Link className="button button--secondary button--lg" to="/category/gb-studio-resources">
              <Translate id="pages.index.head.banner.resources" description="Title page banner linking to the resources page">GB Studio Resource Downloads</Translate>
            </Link>
          </div>
        </div>
        <br/>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
