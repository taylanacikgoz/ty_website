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

const ToDoApp = ({ isOpen, onOpenChange }) => {
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
                ToDo-Gratitude
              </ModalHeader>
              <ModalBody>
                <p className="text-white font-content">
                  In this project, you can make a request to an API thanks to
                  redux-thunk, and thanks to localStorage, you can use the data
                  you added to your application without losing it. Also, it's a
                  great example of CRUD operations.
                </p>
                <p>
                  <span className="font-bold font-specific">Tech Stack</span>
                  <ul className="font-content">
                    <li>Javascript</li>
                    <li>Reactjs</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Tailwindcss</li>
                    <li>date-fns</li>
                    <li>Redux</li>
                    <li>Redux-Thunk</li>
                    <li>react-toastify</li>
                  </ul>
                </p>
              </ModalBody>
              <ModalFooter className="flex flex-row gap-5">
                <Link
                  href="https://gratitude-eight.vercel.app/"
                  className="text-white font-bold font-content"
                >
                  Website
                </Link>
                <Link
                  href="https://github.com/taylanacikgoz/fsweb-s10-challenge"
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
export default ToDoApp;
