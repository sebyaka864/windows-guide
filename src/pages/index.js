import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout
      title="Windows Guide"
      description="All-in-one Windows optimization guide">
      <main className={styles.heroBanner}>
        <h1>Windows Guide</h1>
        <p>Your all-in-one Windows optimization guide.</p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/guide/clean-install">
            Start Guide
          </Link>
        </div>
      </main>
    </Layout>
  );
}