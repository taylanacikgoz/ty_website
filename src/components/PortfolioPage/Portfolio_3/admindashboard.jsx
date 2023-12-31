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

const AdminDashboard = ({ isOpen, onOpenChange }) => {
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
                Admin Dashboard with Authentication
              </ModalHeader>
              <ModalBody>
                <p className="text-white font-content">
                  This app is to manage users/employees, products or analytics
                  about your company. You have to login to take authorization
                  and to redirect yourself to the dashboard successfully. The
                  app built with React framework Nextjs.
                </p>
                <p>
                  <span className="font-bold font-specific">Tech Stack</span>
                  <ul className="font-content">
                    <li>Javascript</li>
                    <li>Reactjs</li>
                    <li>Nextjs 14</li>
                    <li>MongoDb</li>
                    <li>Framer</li>
                    <li>Figma</li>
                    <li>Tailwindcss</li>
                  </ul>
                </p>
              </ModalBody>
              <ModalFooter className="flex flex-row gap-5">
                <Link
                  href="https://nextjsadmindashboard.vercel.app/"
                  className="text-white font-bold font-content"
                >
                  Website
                </Link>
                <Link
                  href="https://github.com/taylanacikgoz/nextjsadmindashboard"
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
export default AdminDashboard;
