import styles from "../page.module.css";
import home from "../styles/css/home.module.css";
import Nav from "../components/nav";
import PriceSection from "../components/price-section";
import Footer from "../components/footer";

export default function Home() {
  return (
    <main className={home.main}>
      <Nav />
      <PriceSection />
      <Footer />
    </main>
  );
}
