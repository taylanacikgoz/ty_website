import Header from "@/Components/Header/Header";
import React from "react";
import Footer from "../../Components/Footer/Footer";
import ContactPage from "@/Components/ContactPage/contact";
import styles from "../../Components/ContactPage/contact.module.css";

const Contact = () => {
  return (
    <main className={styles.main}>
      <Header />
      <div className="flex flex-col items-center justify-center gap-5">
        <ContactPage />
      </div>

      <Footer />
    </main>
  );
};

export default Contact;
