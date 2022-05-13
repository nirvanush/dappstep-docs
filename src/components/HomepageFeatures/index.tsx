import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Learn',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        <strong>Dappstep Docs</strong> include many practical examples that will help you to understand to implement different
        aspects of dapp functionality on Ergo Platform
      </>
    ),
  },
  {
    title: 'Bootstrap your project',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        <strong>Dappstep Play</strong> built as stand alone mini dApp, easily adjustable for your own need.
        Edit it to get closer to functionality you need and copy to your own project.
      </>
    ),
  },
  {
    title: 'Built on web technologies',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        We use <strong>Javascript</strong> exclusively to allow wide audience of web developers jump into dApp development on Ergo Platform.
        Most things can be built with FE javascript + serverless lambda with nodejs runtime
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
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

export default function HomepageFeatures(): JSX.Element {
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
