"use client"
import classes from "./header.module.css";
import Link from "next/link";
import Image from "next/image";
import burgerIcon from "../../../assets/icon-hamburger.svg"
import Overlay from "./overlay";
import { useState } from "react";
import Logo from "./logo";


function Header() {

    let [showOverlay, setShowOverlay] = useState(false);

  return (
    <header className={classes.header}>
      <Overlay showOverlay={showOverlay} setShowOverlay={setShowOverlay}></Overlay>
      <div className={`${classes.container} container`}>
        <Logo theme={"dark"}></Logo>
        <nav>
          <ul>
            <li>
              <Link href={"/"}>features</Link>
            </li>
            <li>
              <Link href={"/pricing"}>Pricing</Link>
            </li>
            <li>
              <Link href={"/contact"}>Contact</Link>
            </li>
            <li>
              <Link className={classes.login} href={"/login"}>Login</Link>
            </li>
          </ul>
          <Image onClick={() => {
            setShowOverlay(true);
            document.body.classList.add("hide");
          }} className={classes.burgerIcon} src={burgerIcon} alt="burger Icon"></Image>
        </nav>
      </div>
    </header>
  );
}

export default Header;
