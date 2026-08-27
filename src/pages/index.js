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
          <p className={styles.eyebrow}>windows, without the noise</p>
          <h1>the windows guide</h1>
          <p className={styles.lede}>
            a practical path to a clean, fast, and dependable pc — with every change explained and easy to undo.
          </p>
          <div className={styles.buttons}>
            <Link className="button button--primary button--lg" to="/intro">
              start the guide
            </Link>
            <Link className="button button--outline button--secondary button--lg" to="/guide/before-you-begin">
              before you begin
            </Link>
          </div>
          <div className={styles.steps}>
            <span>01 · prepare</span>
            <span>02 · install</span>
            <span>03 · tune</span>
            <span>04 · maintain</span>
          </div>
        </section>
      </main>
    </Layout>
  );
}
