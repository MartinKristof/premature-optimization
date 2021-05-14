import Head from 'next/head';
import { MemoizedApp } from '../components/App';
import styles from '../styles/Home.module.css';

export default function Memoized() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Memoized</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <MemoizedApp />
            </main>

            <footer className={styles.footer} />
        </div>
    );
}
