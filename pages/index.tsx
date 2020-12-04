import { gsap } from "gsap";
import { TextPlugin } from "gsap/dist/TextPlugin";
import Head from "next/head";
import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import { HelloTekiterWorld, HelloTekiterWorldRef } from "../components/intro";
import styles from "../styles/Home.module.scss";

gsap.registerPlugin(TextPlugin);

export default function Home() {
  const titleRef = useRef<HelloTekiterWorldRef>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.add(titleRef.current.timeline());
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Tekiter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <HelloTekiterWorld ref={titleRef} />
      </main>
    </div>
  );
}
