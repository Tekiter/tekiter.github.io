import { gsap } from "gsap";
import { TextPlugin } from "gsap/dist/TextPlugin";
import Head from "next/head";
import { useEffect, useRef } from "react";
import {
  HelloTekiterWorld,
  HelloTekiterWorldRef,
} from "../components/Helloworld";
import { TekiterLinks } from "../components/TekiterLinks";
import { Spacer } from "../components/utils";
import styles from "../styles/IndexPage.module.scss";

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
        <Spacer size="8rem" />
        <TekiterLinks ref={linkRef} />
      </main>
    </div>
  );
}
