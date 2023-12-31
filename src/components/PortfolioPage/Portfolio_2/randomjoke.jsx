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

const RandomJoke = ({ isOpen, onOpenChange }) => {
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
                Random Joke
              </ModalHeader>
              <ModalBody>
                <p className="text-white font-content">
                  This project is a project where we can get data from an API
                  with a redux thunk and an asynchronous action creator, and
                  showcase knowledges about redux, localStorage and
                  react-toastify.
                </p>
                <p>
                  <span className="font-bold font-specific">Tech Stack</span>
                  <ul className="font-content">
                    <li>Javascript</li>
                    <li>Reactjs</li>
                    <li>Redux</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>react-toastify</li>
                    <li>Tailwindcss</li>
                  </ul>
                </p>
              </ModalBody>
              <ModalFooter className="flex flex-row gap-5">
                <Link
                  href="https://thunk-and-apis-xi.vercel.app/"
                  className="text-white font-bold font-content"
                >
                  Website
                </Link>
                <Link
                  href="https://github.com/taylanacikgoz/fsweb-s10g4-thunk-and-apis"
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
export default RandomJoke;
