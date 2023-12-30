import React from "react";
import { Input, Textarea, Button } from "@nextui-org/react";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center w-1/4 gap-10 font-content">
      <Input
        type="text"
        label="Name"
        labelPlacement="outside"
        isClearable
        isRequired
        classNames={{
          label: ["text-white", "font-bold"],
          input: ["placeholder:text-white", "text-black/90 dark:text-white/90"],

          inputWrapper: ["shadow-xl", "bg-[#141B40]", "opacity-75"],
        }}
      />
      <Input
        type="text"
        label="Last Name"
        labelPlacement="outside"
        isClearable
        isRequired
        classNames={{
          label: ["text-white", "font-bold"],
          input: ["placeholder:text-white", "text-black/90 dark:text-white/90"],

          inputWrapper: ["shadow-xl", "bg-[#141B40]", "opacity-75"],
        }}
      />
      <Input
        type="email"
        label="Email"
        labelPlacement="outside"
        isClearable
        isRequired
        classNames={{
          label: ["text-white", "font-bold"],
          input: ["placeholder:text-white", "text-black/90 dark:text-white/90"],

          inputWrapper: ["shadow-2xl", "bg-[#141B40]", "opacity-75"],
        }}
      />
      <Textarea
        placeholder="What would you like to say?"
        isClearable
        classNames={{
          label: ["text-white", "font-bold"],
          input: ["placeholder:text-white", "text-black/90 dark:text-white/90"],

          inputWrapper: ["shadow-xl", "bg-[#141B40]", "opacity-75"],
        }}
      />
      <div className="flex flex-col sm:flex sm:flex-row gap-3">
        <Button color="primary" variant="flat" size="md" className="w-full">
          Submit
        </Button>
        <Button color="danger" variant="flat" size="md" className="w-full">
          Clear
        </Button>
      </div>
    </div>
  );
};

export default ContactPage;
