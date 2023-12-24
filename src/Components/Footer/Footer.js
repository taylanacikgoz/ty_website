import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { PiLinkedinLogoBold } from "react-icons/pi";
import { PiCodesandboxLogoLight } from "react-icons/pi";
import { HiOutlineDocumentDownload } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-5 items-center sm:flex sm:flex-row justify-between p-5 text-gray-400">
      <span className="font-content text-sm">
        @2023-present Taylan Acikgoz. All Rights Reserved.
      </span>
      <div className="flex flex-row gap-3">
        <VscGithubAlt className="w-6 h-6 sm:w-12 sm:h-12" />
        <PiLinkedinLogoBold className="w-6 h-6 sm:w-12 sm:h-12" />
        <PiCodesandboxLogoLight className="w-6 h-6 sm:w-12 sm:h-12" />
        <HiOutlineDocumentDownload className="w-6 h-6 sm:w-12 sm:h-12" />
      </div>
    </footer>
  );
}
