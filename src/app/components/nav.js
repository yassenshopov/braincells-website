import home from "../styles/css/home.module.css";
import Image from "next/image";

export default function Nav(props) {
  return (
    <nav className={home.nav}>
      <div className={home.navLeft}>
        <a href="/">
          <Image src="/logo.svg" alt="logo" width={60} height={60} />
          <span>braincells.io</span>
        </a>
      </div>
      <div className={home.navRight}>
        <a href="/browse">Explore automations</a>
        <a href="/about">About</a>
        <a href="/pricing">Pricing</a>
        <a href={props.preLaunch ? "#join-waitlist" : "/login"}
        className={home.login}>
          {props.preLaunch ? "Join waitlist" : "Login"} <span className={home.navLoginArrow}>&rarr;</span>
        </a>
      </div>
    </nav>
  );
}
