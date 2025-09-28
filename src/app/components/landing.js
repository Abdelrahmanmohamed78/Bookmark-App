import React from 'react'
import styles from "./landing.module.css"
import Image from 'next/image';
import landing from "../../../assets/illustration-hero.svg"
import Link from 'next/link';
import MainBtn from './main-btn';

function Landing() {
  return (
    <section className={styles.landing}>
      <div className={`container ${styles.holder}`}>
        <div className={styles.text}>
          <h3>A Simple Bookmark Manager</h3>
          <p>
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load intantly. Try it for free
          </p>
          <div className={styles.btns}>
            <MainBtn href={"#"}>Get it on Chrome</MainBtn>
            <Link href={"#"}>Get it on Firefox</Link>
          </div>
        </div>
        <Image src={landing} alt='landing image'></Image>
      </div>
    </section>
  )
}

export default Landing;