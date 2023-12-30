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
import MongoDb from "../../../public/Images/MongoDb.png";
import Figma from "../../../public/Images/Figma.jpg";
import Framer from "../../../public/Images/framer.png";
import GitHub from "../../../public/Images/GitHub.png";
import Javascript from "../../../public/Images/Javascript.png";
import Matrix from "../../../public/Images/Matrix.jpeg";
import Nextjs from "../../../public/Images/Nextjs.jpg";
import { Skills } from "@/Components/SkillsCard/Skills";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

export default function About() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleShowSkills = () => {
    onOpen();
  };

  return (
    <main
      className="bg-[url('../../public/Images/sam2.jpg')] flex flex-col gap-20 bg-cover bg-center
    object-cover bg-no-repeat "
    >
      <Header />
      <section className="flex flex-col items-center">
        <p className="font-content text-center p-5 w-full lg:w-3/5 text-white text-xl leading-10">
          Taylan, a coding prodigy from Turkey, is harnessing the power of
          futuristic creativity to craft stellar web experiences. Get ready to
          explore the cosmos of web development!{" "}
        </p>

        <section className="flex flex-col">
          <Modal
            placement="center"
            backdrop="opaque"
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            radius="2xl"
            classNames={{
              body: "py-6",
              backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
              base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
              header: "border-b-[1px] border-[#292f46] font-content",
              footer: "border-t-[1px] border-[#292f46]",
              closeButton: "hover:bg-red-400/5 active:bg-white/10",
            }}
          >
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader>Skills</ModalHeader>
                  <ModalBody>
                    <Skills />
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      color="danger"
                      variant="light"
                      onPress={onClose}
                      className="font-bold"
                    >
                      Close
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>

          <div className="sun" onClick={handleShowSkills}>
            <Image
              src={Matrix}
              alt=""
              fill
              className="border border-solid rounded-full object-cover"
            />
            <div className="max-sm:hidden">
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
                  src={MongoDb}
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
                  src={GitHub}
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
            </div>
          </div>
        </section>
      </section>

      <Footer />
    </main>
  );
}
