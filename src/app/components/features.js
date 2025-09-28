"use client"
import React, { useState } from 'react'
import styles from "./features.module.css";
import MainHeader from './main-header';
import Link from 'next/link';
import Booking from './booking';
import Searching from './searching';
import Sharing from './sharing';

function Features() {
  let [activeLink, setActiveLink] = useState("bookmarking");

  function handleClick(e) {
    setActiveLink(e.target.id);
  }

  return (
    <section className={styles.features}>
      <div className='container'>
        <MainHeader>
          <h3>Features</h3>
          <p>
            Our aim is to make it quick and easy for you access your favourite websites.
            Your bookmarks sync between your devices so you can access them on the go.
          </p>
        </MainHeader>
        <ul className={styles.links}>
          <li>
            <button onClick={(e) => handleClick(e)} className={activeLink === "bookmarking" ? styles.active : ""} id='bookmarking'>Simple Bookmarking</button>
          </li>
          <li>
            <button onClick={(e) => handleClick(e)} className={activeLink === "searching" ? styles.active : ""} id='searching'>Speedy Searching</button>
          </li>
          <li>
            <button onClick={(e) => handleClick(e)} className={activeLink === "sharing" ? styles.active : ""} id='sharing'>Easy Sharing</button>
          </li>
        </ul>
        {
          activeLink === "bookmarking" && <Booking></Booking>
        }
        {
          activeLink === "searching" && <Searching></Searching>
        }
        {
          activeLink === "sharing" && <Sharing></Sharing>
        }
      </div>
    </section>
  )
}

export default Features;