import React from "react";
import MainHeader from "./main-header";
import MainBtn from "./main-btn";
import styles from "./features.module.css";
import styles2 from "./sharing.module.css";
import Image from "next/image";
import sharing from "../../../assets/illustration-features-tab-3.svg";

function Sharing() {
  return (
    <div className={styles.tabStyles}>
      <Image className={styles2.sharing} src={sharing} alt={"sharing image"}></Image>
      <MainHeader>
        <h3>Share your bookmarks</h3>
        <p>
          Easily share your bookmarks and collections with others.
          Create a shareable link that you can send at the click of a button.
        </p>
        <MainBtn>More Info</MainBtn>
      </MainHeader>
    </div>
  );
}

export default Sharing;
