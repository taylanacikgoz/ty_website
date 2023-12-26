import React from "react";
import PortfolioPage from "@/Components/PortfolioPage/portfoliopage";
import Header from "@/Components/Header/Header";
import styles from "../../Components/PortfolioPage/portfolio.module.css";

const Portfolio = () => {
  return (
    <main className={styles.main}>
      <Header />
      <PortfolioPage />
    </main>
  );
};

export default Portfolio;
