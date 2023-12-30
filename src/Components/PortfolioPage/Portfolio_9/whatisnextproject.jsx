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

const WhatIsTheNextProject = ({ isOpen, onOpenChange }) => {
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
                Next Project
              </ModalHeader>
              <ModalBody>
                <p className="text-white font-content">
                  Still on progress...
                  <Link
                    href={"/contact"}
                    className="text-red-400 font-bold animate-pulse"
                  >
                    Any advice?
                  </Link>
                </p>
                <p>
                  <span className="font-bold font-specific">Tech Stack</span>
                  <ul className="font-content"></ul>
                </p>
              </ModalBody>
              <ModalFooter className="flex flex-row gap-5">
                <Link
                  href="/blog"
                  className="text-white font-bold font-content"
                >
                  Website
                </Link>
                <Link
                  href="/blog"
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
export default WhatIsTheNextProject;
