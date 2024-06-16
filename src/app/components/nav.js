import home from "../styles/css/home.module.css";

export default function Nav() {
  return (
    <nav className={home.nav + " " + home.darkBg}>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
    </nav>
  );
}
