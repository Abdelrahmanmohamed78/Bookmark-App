"use client"
import React, { useState } from "react";
import Image from "next/image";
import styles from "./contact.module.css";
import errorImg from "../../../assets/icon-error.svg";

function Contact() {

  let [errorEmail, setErrorEmail] = useState(false);
  let [emailText, setEmailText] = useState("");
  let reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ig;

  function handleEmail() {
    if(emailText.match(reg)) {
      setErrorEmail(false);
    } else {
      setErrorEmail(true);
    }
  }

  return (
    <section className={styles.contact}>
      <div className="container">
        <div className={styles.holder}>
          <p className={styles.joined}>35,000+ Already Joined</p>
          <p className={styles.text}>Stay up-to-date with what we're doing</p>
          <div className={styles.emailHolder}>
            <div className={`${styles.inputHolder} ${errorEmail && styles.error}`}>
              <input type="email" placeholder="Enter your email address" onChange={(e) => setEmailText(e.target.value)}></input>
              <Image src={errorImg} alt="error image"></Image>
              <span className={styles.errorText}>Whoops, make sure it's an email</span>
            </div>
            <button type="submit" className={styles.submit} onClick={(e) => handleEmail(e)}>Contact Us</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
