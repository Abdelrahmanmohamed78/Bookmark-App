import React from 'react';
import Link from 'next/link';
import styles from "./main-btn.module.css"


function MainBtn({ children, href }) {
  return (
    <Link className={styles["main-btn"]} href={"/"}>{ children }</Link>
  )
}

export default MainBtn