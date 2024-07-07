import home from "../styles/css/home.module.css";
import Nav from "../components/nav";
import Footer from "../components/footer";

export default function ContactUs() {
  return (
    <main className={home.main}>
      <Nav preLaunch={true} />
      <Footer />
    </main>
  );
}
