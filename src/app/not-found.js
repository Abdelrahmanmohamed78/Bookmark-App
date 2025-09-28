"use client";
import React, { useState } from "react";
import classes from "./not-found.module.css";
import Link from "next/link";

function NotFound() {
  const [isEntered, setIsEntered] = useState(false);

  return (
    <section className={classes["not-found"]}>
      <div className={`container ${classes.holder}`}>
        <div className={classes.eyesHolder}>
          <div className={`${classes.eye} ${isEntered && classes.enter}`}></div>
          <div className={`${classes.eye} ${isEntered && classes.enter}`}></div>
        </div>
        <div className={classes.errorText}>
          <p>
            4<span>0</span>4
          </p>
          <p>Page Not Found</p>
        </div>
        <Link
          onMouseEnter={() => setIsEntered(true)}
          onMouseLeave={() => setIsEntered(false)}
          className={classes.homeBtn}
          href={"/"}
        >
          Go to Home
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
