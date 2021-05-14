import Head from 'next/head';
import Results from '../components/Results';
import styles from '../styles/Home.module.css';

const ResultsPage = () => (
    <div className={styles.container}>
        <Head>
            <title>Results</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
            <Results />
        </main>

        <footer className={styles.footer} />
    </div>
);

export default ResultsPage;
