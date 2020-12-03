import { gsap } from "gsap";
import { TextPlugin } from "gsap/dist/TextPlugin";
import Head from "next/head";
import { useEffect, useRef } from "react";
import styles from "../styles/Home.module.scss";

gsap.registerPlugin(TextPlugin);

function MainText() {
  const ref = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(ref.current, {y: "+=300", autoAlpha: 0, duration: 1});
    tl.to(ref.current, {duration:1, text: "Hello,", ease: "none"});
    tl.to(ref.current, {duration:1, text: "Hello, Tekiter world!", ease: "none"});
  }, []);

  return <h1 ref={ref} className={styles.title}>Hello, world!</h1>;
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tekiter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <MainText />
        <div className={styles.grid}></div>
      </main>
    </div>
  );
}
