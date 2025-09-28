import React from "react";
import styles from "./download.module.css";
import MainHeader from "./main-header";
import Image from "next/image";
import chrome from "../../../assets/logo-chrome.svg";
import firefox from "../../../assets/logo-firefox.svg";
import opera from "../../../assets/logo-opera.svg";
import dottedBg from "../../../assets/bg-dots.svg";
import MainBtn from "./main-btn";

function Download() {
  return (
    <section className={styles.download}>
      <div className="container">
        <MainHeader>
          <h3 className={styles.title}>Download the extension</h3>
          <p>
            We've got more browsers in the pipeline. Please do let us know if
            you've got a favourite you'd like us to prioritize.
          </p>
        </MainHeader>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.extensionBox}>
              <Image src={chrome} alt="chrome logo"></Image>
              <h3>Add to chrome</h3>
              <p>Minimum version 62</p>
            </div>
            <Image src={dottedBg} alt="dotted background"></Image>
            <MainBtn href={"/"}>Add & install extension</MainBtn>
          </div>
          <div className={styles.card}>
            <div className={styles.extensionBox}>
              <Image src={firefox} alt="firefox logo"></Image>
              <h3>Add to firefox</h3>
              <p>Minimum version 55</p>
            </div>
            <Image src={dottedBg} alt="dotted background"></Image>
            <MainBtn href={"/"}>Add & install extension</MainBtn>
          </div>
          <div className={styles.card}>
            <div className={styles.extensionBox}>
              <Image src={opera} alt="opera logo"></Image>
              <h3>Add to opera</h3>
              <p>Minimum version 46</p>
            </div>
            <Image src={dottedBg} alt="dotted background"></Image>
            <MainBtn href={"/"}>Add & install extension</MainBtn>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Download;
