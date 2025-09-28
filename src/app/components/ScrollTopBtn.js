"use client";
import React, { useEffect, useRef, useState } from "react";
import classes from "./ScrollTopBtn.module.css";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ScrollTopBtn() {
  const progressBarElement = useRef();

  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    window.onscroll = () => {
      progressBarElement.current.style.width = `${
        (document.documentElement.scrollTop /
          (document.documentElement.scrollHeight -
            document.documentElement.clientHeight)) *
        100
      }%`;
      window.scrollY >= 300 ? setIsShow(true) : setIsShow(false);
    };
  }, [isShow]);

  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className={classes.progressBar} ref={progressBarElement}></div>
      <button
        className={`${classes.scrollTopBtn} ${isShow && classes.show}`}
        onClick={handleScroll}
      >
        <FontAwesomeIcon icon={faArrowUp}></FontAwesomeIcon>
      </button>
    </>
  );
}

export default ScrollTopBtn;
