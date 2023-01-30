import { ProfilePicture, Button, ContactForm } from "@/components";
import Image from "next/image";
import { useState } from "react";

export const HeadLineBody = () => {
  const [formOpen, setFormOpen] = useState(false);

  if (formOpen) return <ContactForm open={formOpen} setOpen={setFormOpen} />;

  return (
    <div className="flex items-center justify-between p-5 ">
      <h2 className=" text-base2 leading-normal2 font-glysa">Contacts</h2>
      <div className="flex items-center">
        <div className="flex items-center justify-center space-x-5">
          <Image
            src="/icons/Settings.svg"
            width={25}
            height={25}
            alt={"settings"}
          />
          <ProfilePicture />
          <Button
            onClick={() => setFormOpen(true)}
            label="Add new"
            icon={
              <Image
                src="/icons/Add.svg"
                width={25}
                height={25}
                alt={"settings"}
              />
            }
          />
        </div>
      </div>
    </div>
  );
};
