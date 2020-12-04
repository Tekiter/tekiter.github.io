import { gsap } from "gsap";
import { TextPlugin } from "gsap/dist/TextPlugin";
import Head from "next/head";
import { useEffect, useRef } from "react";
import {
  HelloTekiterWorld,
  HelloTekiterWorldRef,
  TekiterLinks,
} from "../components/intro";
import styles from "../styles/Home.module.scss";

gsap.registerPlugin(TextPlugin);

export default function Home() {
  const titleRef = useRef<HelloTekiterWorldRef>(null);
  const linkRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.add(titleRef.current.timeline());
    tl.add(linkRef.current.timeline(), ">0.5");
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Tekiter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <HelloTekiterWorld ref={titleRef} />
        <TekiterLinks ref={linkRef} />
      </main>
    </div>
  );
}
