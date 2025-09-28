import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'
import styles from "./logo.module.css";

function Logo({ theme }) {
  return (
    <Link href={"/"} className={styles.logo}>
      <span className={styles.logoIcon}><FontAwesomeIcon icon={faBookmark}></FontAwesomeIcon></span>
      <span className={`${styles.logoText} ${theme === "dark" ? styles.dark : styles.light}`}>Bookmark</span>
    </Link>
  )
}

export default Logo