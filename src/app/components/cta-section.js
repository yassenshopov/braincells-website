import home from "../styles/css/home.module.css";

export default function CTASection() {
  return (
    <section id="join-waitlist" className={home["cta-section"]}>
      <iframe
        // width="540"
        height="605"
        src="https://6b46b024.sibforms.com/serve/MUIFANLLLyaj4ndNu4lZqBoKZe3WyB26VKATFDbLcywPwmoAOusbsNo98F8QXJA02jKbT2JmexzgaN9gLbKSDEJC4-8nTyc4KN8t6JLyuGmq4QfEcYcUrkEy2OVVlFg-HfFyqv-xq4M-vgJm8J4cVnsfUHpJWl9dCC-HAR1JxQce-Z0rhu1e3-lZYu5ugIFJBR919HbUaB2faivb"
        frameBorder="0"
        allowFullScreen
        style={{display: "block", marginLeft: "auto", marginRight: "auto", width: "100%"}}
      ></iframe>
    </section>
  );
}
