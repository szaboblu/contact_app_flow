import Image from "next/image";
import { Button } from "@/components";
import { useState } from "react";

export const ContactInfoPanel = () => {
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
          {modalOpen ? (
            <div className="absolute left-0 w-56 p-0 overflow-hidden rounded-lg top-12 border-1 bg-G-80 ">
              <button className="flex items-center justify-start w-full gap-3 p-3 hover:bg-G-70">
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
                />
                <span className="text-sm">Remove</span>
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
