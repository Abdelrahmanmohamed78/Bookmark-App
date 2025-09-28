import React from "react";
import styles from "./features.module.css";
import styles2 from "./searching.module.css";
import MainHeader from "./main-header";
import MainBtn from "./main-btn";
import searching from "../../../assets/illustration-features-tab-2.svg";
import Image from "next/image";

function Searching() {
  return (
    <div className={styles.tabStyles}>
      <Image className={styles2.searching} src={searching} alt={"searching image"}></Image>
      <div className={styles.mainHeader}>
        <MainHeader>
          <h3>Intelligent search</h3>
          <p>
            Our powerful search  fearure will help you find saved sites in no time at all./
            No need to trawl through all of your bookmarks.
          </p>
          <MainBtn>More Info</MainBtn>
        </MainHeader>
      </div>
    </div>
  );
}

export default Searching;
