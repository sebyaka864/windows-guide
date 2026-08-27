import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

const paths = [
  {
    title: 'set up safely',
    description: 'Back up first, make a recovery plan, and use official installation media.',
    to: '/guide/before-you-begin',
  },
  {
    title: 'fix the fundamentals',
    description: 'Use Windows Update and hardware-maker downloads before changing anything else.',
    to: '/guide/drivers-and-updates',
  },
  {
    title: 'keep it dependable',
    description: 'Make small, reversible improvements instead of chasing risky “tweaks.”',
    to: '/guide/optimization',
  },
];

export default function Home() {
  return (
    <Layout
      title="the windows guide"
      description="a calm, practical windows optimization guide">
      <main className={styles.heroBanner}>
        <div className={styles.matrixRain} aria-hidden="true">
          {['01 10 11 00 10 01 11 00 01 10 11 00', '10 01 00 11 01 10 00 11 10 01 00 11', '11 00 10 01 00 11 10 01 11 00 10 01', '00 11 01 10 11 00 01 10 00 11 01 10', '01 01 10 00 11 10 01 00 10 11 00 01', '10 11 00 01 00 10 11 01 01 00 10 11', '00 10 11 01 10 00 01 11 00 10 11 01', '11 01 00 10 01 11 00 10 11 01 00 10', '10 00 01 11 11 00 10 01 00 11 10 01', '01 11 10 00 10 01 11 00 01 10 11 00', '00 01 11 10 01 00 10 11 10 01 00 11', '11 10 01 00 00 11 10 01 11 00 10 01'].map((column, index) => (
            <span key={index} style={{ '--matrix-delay': `${index * -1.7}s`, '--matrix-duration': `${12 + (index % 4) * 3}s` }}>
              {column}
            </span>
          ))}
        </div>
        <div className={styles.grid} />
        <section className={styles.heroContent}>
          <h1>the windows guide</h1>
          <p className={styles.lede}>
            make your pc feel fresh again — clean setup, useful updates, and changes that actually matter.
          </p>
          <div className={styles.buttons}>
            <Link className="button button--primary button--lg" to="/intro">
              begin here
            </Link>
          </div>

          <section className={styles.pathGrid} aria-label="Choose a starting point">
            {paths.map((path) => (
              <Link className={styles.pathCard} key={path.to} to={path.to}>
                <h2>{path.title}</h2>
                <p>{path.description}</p>
                <span aria-hidden="true">read guide →</span>
              </Link>
            ))}
          </section>
        </section>
      </main>
    </Layout>
  );
}
