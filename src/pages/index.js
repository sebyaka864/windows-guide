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
          <p className={styles.eyebrow}>windows optimization, explained simply.</p>
          <h1>the windows guide</h1>
          <p className={styles.lede}>
            a simple guide to a cleaner, quicker, more dependable pc.
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
