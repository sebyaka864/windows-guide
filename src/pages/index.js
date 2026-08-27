import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

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
          </div>
        </section>
      </main>
    </Layout>
  );
}
