import Image from "next/image";
import { Button, ContactButtonListItem } from "@/components";
import { useState } from "react";
import { Contact, ContactProps } from "@/types";

export const ContactInfoPanel = ({ contact }: ContactProps) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-center space-x-5 ">
        <Image src="/icons/Mute.svg" width={25} height={25} alt={"mute"} />
        <Image src="/icons/Call.svg" width={25} height={25} alt={"call"} />
        <div className="relative">
          <Button
            variant="secondary"
            onClick={() => setModalOpen((prev) => !prev)}
            icon={
              <Image
                src="/icons/More.svg"
                width={25}
                height={25}
                alt={"settings"}
              />
            }
          />
          {modalOpen ? <ContactButtonListItem contact={contact} /> : null}
        </div>
      </div>
    </div>
  );
};
