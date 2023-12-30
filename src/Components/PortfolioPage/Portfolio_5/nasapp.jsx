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

const NasaApp = ({ isOpen, onOpenChange }) => {
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
                Nasa API
              </ModalHeader>
              <ModalBody>
                <p className="text-white font-content">
                  App is using for taking daily photos from NASA with public
                  API.
                </p>
                <p>
                  <span className="font-bold font-specific">Tech Stack</span>
                  <ul className="font-content">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>Reactjs</li>
                    <li>Web API</li>
                    <li>styled component</li>
                  </ul>
                </p>
              </ModalBody>
              <ModalFooter className="flex flex-row gap-5">
                <Link
                  href="https://nasa-daily-photo-pearl.vercel.app/"
                  className="text-white font-bold font-content"
                >
                  Website
                </Link>
                <Link
                  href="https://github.com/taylanacikgoz/FSWeb-S6G3-Nasa"
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
export default NasaApp;
