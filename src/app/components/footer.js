import home from "../styles/css/home.module.css";
import { FaYoutube, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className={home.footer}>
      <div className={home.footerContent}>
        <div className="contact-info">
          <h4>Contact Us</h4>
          <p>Email: contact@example.com</p>
        </div>
        <div className="social-media-links">
          <h4>Follow Us</h4>
          <ul>
            <li><a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">< FaYoutube /> YouTube</a></li>
            <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">< FaXTwitter /> Twitter</a></li>
            <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">< FaLinkedin /> LinkedIn</a></li>
          </ul>
        </div>
        <div className="legal-links">
          <h4>Legal</h4>
          <ul>
            <li><a href="/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
            <li><a href="/terms-of-service" target="_blank" rel="noopener noreferrer">Terms of Service</a></li>
            <li><a href="/explore" target="_blank" rel="noopener noreferrer" className={home.footerContentExploreMore}>Explore more →</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Braincells.io. All rights reserved.</p>
      </div>
    </footer>
  );
}
