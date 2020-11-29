import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tekiter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hello, Tekiter world!
        </h1>

        <div className={styles.grid}>
          
        </div>
      </main>
    </div>
  );
}
