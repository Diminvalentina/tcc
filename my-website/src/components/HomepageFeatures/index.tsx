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
    title: 'Fácil de usar',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
         O AcionaGo! é um website intuitivo que possibilita o uso prático e fácil da plataforma.
     
      </>
    ),
  },
  {
    title: 'Auxilia na aula prática',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Durante as aulas práticas o AcionaGo! pode ser utilizado para tirar 
        eventuais dúvidas dos <code>discentes</code> e ferramenta pedagógica para <code>docente</code>. 
        
        </>
    ),
  },
  {
    title: 'Textos, imagens e vídeos',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
         Dentro desta ferramente você encontrará <code>textos</code> de fácil compreensão,
        <code>imagens</code> para melhor explicação e <code>vídeos</code> exclusivos para 
        o ensino de como utilizar os equipamentos.
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
