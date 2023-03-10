import { ContactForm } from "@/components";
import { useDeleteContact } from "@/hooks";
import { Contact, ContactProps } from "@/types";
import Image from "next/image";
import { useState } from "react";

export const ContactButtonListItem = ({ contact }: ContactProps) => {
  const [formOpen, setFormOpen] = useState(false);
  const { deleteContact } = useDeleteContact();

  if (formOpen)
    return (
      <ContactForm open={formOpen} setOpen={setFormOpen} contact={contact} />
    );

  return (
    <div className="absolute left-0 w-56 p-0 overflow-hidden rounded-lg top-12 border-1 bg-G-80 ">
      <button
        onClick={() => setFormOpen(true)}
        className="flex items-center justify-start w-full gap-3 p-3 hover:bg-G-70"
      >
        <Image
          src="/icons/Settings.svg"
          width={20}
          height={20}
          alt={"settings"}
        />
        <span className="text-sm">Edit</span>
      </button>
      <button className="flex items-center justify-start w-full gap-3 p-3 hover:bg-G-70">
        <Image
          src="/icons/Favourite.svg"
          width={20}
          height={20}
          alt={"settings"}
        />
        <span className="text-sm">Favourite</span>
      </button>
      <button className="flex items-center justify-start w-full gap-3 p-3 hover:bg-G-70">
        <Image
          src="/icons/Delete.svg"
          width={20}
          height={20}
          alt={"settings"}
          onClick={() => deleteContact(contact)}
        />
        <span className="text-sm">Remove</span>
      </button>
    </div>
  );
};
