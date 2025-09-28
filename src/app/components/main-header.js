import React from 'react'
import styles from "./main-header.module.css";
function MainHeader({ children }) {
  return (
    <div className={styles["main-text"]}>
      { children }
    </div>
  )
}

export default MainHeader