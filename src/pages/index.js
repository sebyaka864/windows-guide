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
        <div className={styles.grid} />
        <section className={styles.heroContent}>
          <p className={styles.eyebrow}>less clutter. more control.</p>
          <h1>the windows guide</h1>
          <p className={styles.lede}>
            make your pc feel fresh again — clean setup, useful updates, and changes that actually matter.
          </p>
          <div className={styles.buttons}>
            <Link className="button button--primary button--lg" to="/intro">
              begin here
            </Link>
            <Link className="button button--outline button--secondary button--lg" to="/guide/maintenance">
              maintenance checklist
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
