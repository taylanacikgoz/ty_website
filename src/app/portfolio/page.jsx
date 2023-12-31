import React from "react";
import PortfolioPage from "@/Components/PortfolioPage/portfoliopage";
import Header from "@/components/Header/header";
import { Footer } from "@/components/Footer/footer";
import styles from "../../Components/PortfolioPage/portfolio.module.css";

const Portfolio = () => {
  return (
    <main className={styles.main}>
      <Header />
      <PortfolioPage />
      <Footer />
    </main>
  );
};

export default Portfolio;
