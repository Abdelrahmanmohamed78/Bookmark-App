import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import logo from "../../../assets/logo-bookmark.svg";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Logo from "./logo";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.holder}>
          <nav className={styles.footerNav}>
            <Logo theme={"light"}></Logo>
            <ul className={styles.links}>
              <li>
                <Link href={"/"}>Features</Link>
              </li>
              <li>
                <Link href={"/"}>Pricing</Link>
              </li>
              <li>
                <Link href={"/"}>Contact</Link>
              </li>
            </ul>
          </nav>
          <ul className={styles.socialLinks}>
            <li>
              <Link href={"/"}>
                <FontAwesomeIcon icon={faFacebookSquare}></FontAwesomeIcon>
              </Link>
            </li>
            <li>
              <Link href={"/"}>
                <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
