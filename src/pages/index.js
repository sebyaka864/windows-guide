import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

export default function Home() {
  const matrixColumns = [
    '01 10 11 00 10 01 11 00 01 10 11 00 10 01',
    '10 01 00 11 01 10 00 11 10 01 00 11 01 10',
    '11 00 10 01 00 11 10 01 11 00 10 01 00 11',
    '00 11 01 10 11 00 01 10 00 11 01 10 11 00',
    '01 01 10 00 11 10 01 00 10 11 00 01 10 11',
    '10 11 00 01 00 10 11 01 01 00 10 11 00 01',
    '00 10 11 01 10 00 01 11 00 10 11 01 10 00',
    '11 01 00 10 01 11 00 10 11 01 00 10 01 11',
    '10 00 01 11 11 00 10 01 00 11 10 01 11 00',
    '01 11 10 00 10 01 11 00 01 10 11 00 10 01',
    '00 01 11 10 01 00 10 11 10 01 00 11 01 10',
    '11 10 01 00 00 11 10 01 11 00 10 01 00 11',
    '1A 0F 10 01 7C 11 00 1B 10 01 0A 11 00 10',
    'A1 10 0C 11 01 10 00 1F 10 01 00 11 10 01',
    '10 11 00 5E 00 10 11 01 01 10 00 11 01 10',
    '00 10 11 01 10 00 7F 11 00 10 11 01 10 00',
    '11 01 00 10 01 11 00 10 11 01 4D 10 01 11',
    '10 00 01 11 11 00 10 01 00 11 10 01 11 00',
  ];

  return (
    <Layout
      title="the windows guide"
      description="a calm, practical windows optimization guide">
      <main className={styles.heroBanner}>
        <div className={styles.matrixRain} aria-hidden="true">
          {matrixColumns.map((column, index) => (
            <span key={index} style={{ '--matrix-delay': `${index * -1.7}s`, '--matrix-duration': `${12 + (index % 4) * 3}s` }}>
              {column}
            </span>
          ))}
        </div>
        <div className={styles.grid} />
        <section className={styles.heroContent}>
          <h1>the windows guide</h1>
          <Link className={`button button--primary button--lg ${styles.beginButton}`} to="/introduction">
            start
          </Link>
        </section>
      </main>
    </Layout>
  );
}
