"use client";

import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";
import Link from "next/link";

const PersonalWebPage = ({ isOpen, onOpenChange }) => {
  return (
    <div>
      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
        classNames={{
          backdrop:
            "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
        }}
      >
        <ModalContent
          style={{
            backgroundColor: "#59347B",
          }}
        >
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 font-specific">
                Portfolio & Resume
              </ModalHeader>
              <ModalBody>
                <p className="text-white font-content">
                  That is one of the simplest portfolio example for personal use
                  to be hired. It includes, education, skills, portfolio. At the
                  bottom part of the page, use the 'click to see form' event and
                  you are free to contact with the person who had this page via
                  form. Form is directed to your personal email address.
                </p>
                <p>
                  <span className="font-bold font-specific">Tech Stack</span>
                  <ul className="font-content">
                    <li>Javascript</li>
                    <li>Reactjs</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Tailwindcss</li>
                    <li>emailjs-com</li>
                    <li>react-hook-form</li>
                  </ul>
                </p>
              </ModalBody>
              <ModalFooter className="flex flex-row gap-5">
                <Link
                  href="https://taylan-webpage.vercel.app/"
                  className="text-white font-bold font-content"
                >
                  Website
                </Link>
                <Link
                  href="https://github.com/taylanacikgoz/FSWeb-Frontend-Challenge"
                  className="text-white font-bold font-content"
                >
                  Github
                </Link>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};
export default PersonalWebPage;
