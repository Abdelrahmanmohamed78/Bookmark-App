import Image from 'next/image';
import React from 'react';
import MainHeader from './main-header';
import styles from "./features.module.css";
import styles2 from "./booking.module.css"
import MainBtn from './main-btn';
import booking from "../../../assets/illustration-features-tab-1.svg";

function Booking() {
  return (
    <div className={styles.tabStyles}>
      <Image className={styles2.booking} src={booking} alt="booking image"></Image>
      <div className={styles.mainHeader}>
        <MainHeader>
          <h3>Bookmark in one click</h3>
          <p>
            Organize your bookmarks however you like.
            Our simple drag and drop interface gives you complete control over how you manage your favourite sites.
          </p>
          <MainBtn>More Info</MainBtn>
        </MainHeader>
      </div>
    </div>
  )
}

export default Booking;