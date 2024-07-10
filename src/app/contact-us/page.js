"use client";

import home from "../styles/css/home.module.css";
import Nav from "../components/nav";
import Footer from "../components/footer";
import { useState } from "react";
import { metadata } from "../meta/contact-us";
import Head from "next/head";
import catImg from "../images/contact-us/catImg.png";

export default function ContactUs() {
  const [mailto, setMailto] = useState("mailto:yassenshopov00@gmail.com");
  const [subject, setSubject] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <main className={home.main}>
        <Nav preLaunch={true} />
        <section className={home.contactUsSection + " " + home.darkBg}>
          <h2>Contact Us</h2>
          <div className={home.contactUsWrapper}>
            <div className={home.contactUsDisclaimer}>
              <p>
                We are here to help you with any questions you might have. Feel
                free to contact us at any time.
              </p>
              <img src={catImg.src} />
            </div>
            <form>
              <select
                id="subject"
                name="subject"
                required
                onChange={(e) => setSubject(e.target.value)}
                defaultValue=""
              >
                <option value="" disabled>
                  Select a subject
                </option>
                <option value="General">General</option>
                <option value="Support">Support</option>
                <option value="Sales">Sales</option>
              </select>
              <div className={home.contactUsInfo}>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Message"
                rows="10"
                cols="50"
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <a
                href={
                  mailto +
                  "?subject=" +
                  subject +
                  "&body=Subject: " +
                  subject +
                  "%0D%0AName: " +
                  name +
                  "%0D%0AEmail: " +
                  email +
                  "%0D%0A%0D%0A" +
                  message
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                Send message now
              </a>
            </form>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
