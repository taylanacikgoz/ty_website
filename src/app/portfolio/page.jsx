import React from "react";
import PortfolioPage from "@/Components/PortfolioPage/portfoliopage";
import Header from "@/Components/Header/Header";
import styles from "../../Components/PortfolioPage/portfolio.module.css";
import Footer from "../../Components/Footer/Footer";

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
