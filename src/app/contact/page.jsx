import React from "react";
import Header from "@/components/Header/header";
import { Footer } from "@/components/Footer/footer";
import ContactPage from "@/components/ContactPage/contact";
import styles from "../../components/ContactPage/contact.module.css";

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
