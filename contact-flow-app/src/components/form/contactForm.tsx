import { Button } from "../common";
import Image from "next/image";
import { Dialog } from "@headlessui/react";
import { ChangeEvent, Fragment, useRef } from "react";
import { TextField } from "./textField";
import { useForm } from "@/hooks";
import { ProfilePicture } from "../contact";

interface ContactFormProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const ContactForm = ({ setOpen, open }: ContactFormProps) => {
  const { formData, handleInputChange, handleSubmit } = useForm();

  console.log(formData);
  const { name, email, phone } = formData;

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black/40">
      <Dialog
        className="absolute p-5 text-white -translate-x-1/2 -translate-y-1/2 rounded-lg top-1/2 left-1/2 bg-G-100 w-96"
        open={open}
        onClose={() => handleSubmit()}
      >
        <Dialog.Panel>
          <Dialog.Title className="mb-5 text-2xl leading-10 font-glysa">
            Edit Contact
          </Dialog.Title>

          <div className="flex items-center justify-between">
            <ProfilePicture variant="large" />
            <Button
              variant="primary"
              label="Change picture"
              icon={
                <Image
                  src="/icons/Change.svg"
                  width={25}
                  height={25}
                  alt={"settings"}
                />
              }
            />
            <Button
              variant="primary"
              icon={
                <Image
                  src="/icons/Delete.svg"
                  width={25}
                  height={25}
                  alt={"settings"}
                />
              }
            />
          </div>
          <TextField
            label="Name"
            value={name}
            name="name"
            finished={name.length > 0}
            onChange={handleInputChange}
          />
          <TextField
            type="phone"
            label="Phone number"
            value={phone}
            name="phone"
            finished={phone.length > 0}
            onChange={handleInputChange}
          />
          <TextField
            type="email"
            label="Email address"
            value={email}
            name="email"
            finished={email.length > 0}
            onChange={handleInputChange}
          />
          <div className="flex items-center justify-end gap-2 ">
            <Button
              onClick={() => setOpen(false)}
              variant="secondary"
              label="Cancel"
            />
            <Button onClick={() => setOpen(false)} label="Done" />
          </div>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
};
