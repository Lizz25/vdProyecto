import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Herramienta',
    
    Svg: require('@site/static/img/logo_vertical_color_light.svg').default,
    description: (
      <>
        Cavebot Rescue fue desarrollado en Godot.
      </>
    ),
  },
  {
    title: 'Trailer',
    Svg: require('@site/static/img/botR.svg').default,
    description: (
      <>
        Conoce la historia detras de Cavebot Rescue. 
      </>
    ),
  },
  {
    title: 'Demo',
    Svg: require('@site/static/img/botcute.svg').default,
    description: (
      <>
        Conoce nuestro juego y diviertete con Cavebot Rescue. 
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
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
