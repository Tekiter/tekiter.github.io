import { gsap } from "gsap";
import { TextPlugin } from "gsap/dist/TextPlugin";
import Head from "next/head";
import { useEffect, useRef } from "react";
import styles from "../styles/Home.module.scss";

gsap.registerPlugin(TextPlugin);

function HelloTekiterWorld() {
  const tekiterRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(titleRef.current, { y: "+=300", autoAlpha: 0, duration: 1 });
    tl.to(
      tekiterRef.current,
      {
        duration: 0.5,
        text: " Tekiter",
        ease: "none",
      },
      ">0.5"
    );
  }, []);

  return (
    <h1 className={styles.title} ref={titleRef}>
      <span>Hello,</span>
      <span ref={tekiterRef} className={styles["title-tekiter"]}></span>
      <span> world!</span>
    </h1>
  );
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tekiter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <HelloTekiterWorld />
      </main>
    </div>
  );
}
