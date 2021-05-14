import Head from 'next/head';
import React, { Profiler } from 'react';
import { App } from '../components/App';
import styles from '../styles/Home.module.css';

const callback = (id, phase, actualDuration, baseDuration, startTime, commitTime) => {
    console.log(`${id}'s ${phase} phase:`);
    console.log(`Actual duration: ${actualDuration}`);
    console.log(`Base duration: ${baseDuration}`);
    console.log(`Start time: ${startTime}`);
    console.log(`Commit time: ${commitTime}`);
};

export default function Basic() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Basic - without memoization</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <Profiler id="App" onRender={callback}>
                    <App />
                </Profiler>
            </main>

            <footer className={styles.footer} />
        </div>
    );
}
