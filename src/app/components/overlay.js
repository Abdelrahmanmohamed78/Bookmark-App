import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import classes from "./overlay.module.css"
import overlayLogo from "../../../assets/logo-bookmark.svg";
import closeIcon from "../../../assets/icon-close.svg";
import facebook from "../../../assets/icon-facebook.svg";
import twitter from "../../../assets/icon-twitter.svg";
import Logo from './logo';

function Overlay({ showOverlay, setShowOverlay }) {


  return (
    <div className={`${classes.overlay} ${showOverlay ? classes.show : ""}`}>
        <div className={classes.overlayHeader}>
          <Logo theme={"light"}></Logo>
          <Image onClick={() => {
            setShowOverlay(false);
            document.body.classList.remove("hide");
          }} src={closeIcon} className={classes.close} alt="close icon"></Image>
        </div>
        <ul>
          <li>
            <Link onClick={() => setShowOverlay(false)} href={"/"}>features</Link>
          </li>
          <li>
            <Link onClick={() => setShowOverlay(false)} href={"/"}>pricing</Link>
          </li>
          <li>
            <Link onClick={() => setShowOverlay(false)} href={"/"}>contact</Link>
          </li>
          <li>
            <Link onClick={() => setShowOverlay(false)} className={classes.login} href={"/"}>login</Link>
          </li>
        </ul>
        <div className={classes.overlaySocial}>
          <Image src={facebook} alt="Facebook Icon"></Image>
          <Image src={twitter} alt="twitter Icon"></Image>
        </div>
      </div>
  )
}

export default Overlay;