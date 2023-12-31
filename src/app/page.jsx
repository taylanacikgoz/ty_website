"use client";

import Image from "next/image";
import "./globals.css";
import Header from "@/components/Header/header";
import { Footer } from "@/components/Footer/footer";
import Explore_Arrow from "../../public/Images/Explore_Arrow.png";
import Post_Img from "../../public/Images/Post_Img.png";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex flex-col gap-20 bg-cover bg-center bg-[url('../../public/Images/sam3.jpg')] object-cover bg-no-repeat">
      <Header />
      <section className="flex flex-col items-center gap-20">
        <div className="flex flex-col gap-1 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="font-content text-center align-top p-5 w-full lg:w-3/5 text-white text-xl leading-10"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque condimentum ullamcorper nisl non pellentesque. Nunc
            imperdiet imperdiet velit non porttitor. Nullam tincidunt commodo
            velit vitae pretium. Maecenas vitae quam tempor, scelerisque enim
            tempus, faucibus mi. Pellentesque condimentum ullamcorper nisl non
            pellentesque. Nunc imperdiet imperdiet velit non porttitor. Nullam
            tincidunt commodo velit vitae pretium. Maecenas vitae quam tempor,
            scelerisque enim tempus, faucibus mi.
          </motion.div>
          <div className="flex flex-row gap-3 cursor-pointer">
            <span className="font-specific text-3xl text-white hover:animate-pulse">
              Explore
            </span>
            <Image
              src={Explore_Arrow}
              alt=""
              quality={100}
              width={90}
              height={30}
              className="animate-bounce object-cover"
            />
          </div>
        </div>

        <section className="flex flex-col gap-10 items-center mt-6">
          <div className="rounded-full animate-spin-slow hover:animate-none">
            <Image src={Post_Img} alt="" className="" />
          </div>
          <div className="flex flex-row gap-10 text-white font-content items-center">
            <IoIosArrowBack className="w-8 h-16" />
            <div className="flex flex-col items-center gap-3">
              <h2 className="font-bold text-2xl">
                Journey to Mars: A Web Development Odyssey
              </h2>
              <span>July 15, 2023</span>
            </div>
            <IoIosArrowForward className="w-8 h-16" />
          </div>
        </section>
      </section>
      <Footer />
    </main>
  );
}
