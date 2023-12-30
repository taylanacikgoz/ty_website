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

const Calculator = ({ isOpen, onOpenChange }) => {
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
                Simple Calculator
              </ModalHeader>
              <ModalBody>
                <p className="text-white font-content">
                  Simple calculator calculates basic math operations like sum,
                  subtraction, division, multiplication. Also as a sample for
                  uses of redux, reducer.
                </p>
                <p>
                  <span className="font-bold font-specific">Tech Stack</span>
                  <ul className="font-content">
                    <li>Javascript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>React</li>
                    <li>Redux</li>
                  </ul>
                </p>
              </ModalBody>
              <ModalFooter className="flex flex-row gap-5">
                <Link
                  href="https://fsweb-s10g1-reducer-calculator-one.vercel.app/"
                  className="text-white font-bold font-content"
                >
                  Website
                </Link>
                <Link
                  href="https://github.com/taylanacikgoz/fsweb-s10g1-reducer-calculator"
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
export default Calculator;
