import clsx from 'clsx';
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
        A protist that has lived on Planet Retro since time immemorial. She enjoys rainy days and playing games. She aspires to develop her own game but always ends up leaving it unfinished.
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
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
