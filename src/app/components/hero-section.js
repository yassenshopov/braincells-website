import home from "../styles/css/home.module.css";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className={home.hero + " " + home.darkBg}>
      <div className={home.heroLeft}>
        <h1>Make Notion work for you - with automation</h1>
        <ul>
          <li>Enhance your productivity with smart workflows</li>
          <li>Less manual work, more time for creative tasks</li>
          <li>Create a workspace that works while you sleep</li>
          <li>Real-time changes to your Notion database</li>
        </ul>
        <form>
          <input type="email" placeholder="Enter your email..." />
          <button>Join the waitlist</button>
        </form>
        <h4>Join 1,300+ people who are already on the email list!</h4>
      </div>
      <div className={home.heroRight}>
        <Image src="/hero.png" alt="Hero image" width={500} height={500} />
      </div>
    </section>
  );
}
