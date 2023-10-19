"use client";

import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import React, { useState } from "react";
import "./styles.css";
import Image from "next/image";
import Nodejs from "../../../public/Images/Nodejs.png";
import Reactjs from "../../../public/Images/Reactjs.jpg";
import sql from "../../../public/Images/sql.jpg";
import mssql from "../../../public/Images/mssql.jpg";
import Mongodb from "../../../public/Images/Mongodb.png";
import Figma from "../../../public/Images/Figma.jpg";
import Framer from "../../../public/Images/Framer.png";
import Github from "../../../public/Images/Github.png";
import Javascript from "../../../public/Images/Javascript.png";
import Matrix from "../../../public/Images/Matrix.jpeg";
import Nextjs from "../../../public/Images/Nextjs.jpg";
import { Skills } from "@/Components/SkillsCard/Skills";

export default function About() {
  const [showSkills, setShowSkills] = useState(false);

  const handleShowSkills = () => {
    setShowSkills(true);
    setTimeout(() => {
      setShowSkills(false);
    }, 10000);
  };

  return (
    <main
      className="bg-[url('../../public/Images/sam2.jpg')] flex flex-col gap-24 bg-cover bg-center
    object-cover bg-no-repeat h-screen"
    >
      <Header />
      <section className="flex flex-col gap-24 items-center">
        <p className="font-content text-center align-top p-5 w-full lg:w-3/5 text-white text-xl leading-10">
          Taylan, a coding prodigy from Turkey, is harnessing the power of
          futuristic creativity to craft stellar web experiences. Get ready to
          explore the cosmos of web development!{" "}
        </p>

        <section className="flex flex-col">
          <span className="text-white font-specific"></span>

          <div className={`sun ${showSkills ? "deneme" : ""}`}>
            {showSkills ? (
              <Skills />
            ) : (
              <>
                <Image
                  src={Matrix}
                  alt=""
                  fill
                  className="border border-solid rounded-full object-cover"
                  onClick={handleShowSkills}
                />

                <div className="nodejs">
                  <Image
                    src={Nodejs}
                    alt=""
                    fill
                    className="border border-solid rounded-full object-cover"
                  />
                </div>
                <div className="reactjs">
                  <Image
                    src={Reactjs}
                    alt=""
                    fill
                    className="border border-solid border-black rounded-full object-cover"
                  />
                </div>
                <div className="sql">
                  <Image
                    src={sql}
                    alt=""
                    fill
                    className="border border-solid border-black rounded-full object-cover"
                  />
                </div>
                <div className="mssql">
                  <Image
                    src={mssql}
                    alt=""
                    fill
                    className="border border-solid border-black rounded-full object-cover"
                  />
                </div>
                <div className="mongodb">
                  <Image
                    src={Mongodb}
                    alt=""
                    fill
                    className="border border-solid border-black rounded-full object-cover"
                  />
                </div>
                <div className="figma">
                  <Image
                    src={Figma}
                    alt=""
                    fill
                    className="border border-solid border-black rounded-full object-cover"
                  />
                </div>
                <div className="framer">
                  <Image
                    src={Framer}
                    alt=""
                    fill
                    className="border border-solid border-black rounded-full object-cover"
                  />
                </div>
                <div className="github">
                  <Image
                    src={Github}
                    alt=""
                    fill
                    className="border border-solid border-black rounded-full object-cover"
                  />
                </div>
                <div className="javascript">
                  <Image
                    src={Javascript}
                    alt=""
                    fill
                    className="border border-solid border-black rounded-full object-cover"
                  />
                </div>
                <div className="nextjs">
                  <Image
                    src={Nextjs}
                    alt=""
                    fill
                    className="border border-solid border-black rounded-full object-cover"
                  />
                </div>
              </>
            )}
          </div>
        </section>
      </section>

      <Footer />
    </main>
  );
}
