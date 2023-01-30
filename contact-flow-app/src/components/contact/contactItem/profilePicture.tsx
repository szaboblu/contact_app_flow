import React from "react";
import Image from "next/image";
import { DEFAULT_IMAGE } from "@/constants";
interface ProfilePictureProps {
  picture?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export const ProfilePicture = ({
  picture,
  disabled = true,
  onClick,
}: ProfilePictureProps) => {
  return (
    <button
      className="w-10 h-10 overflow-hidden border rounded-full border-G-60"
      disabled={disabled}
      onClick={onClick}
    >
      <Image
        src={picture ? picture : DEFAULT_IMAGE}
        alt="profile picture"
        width={40}
        height={40}
      />
    </button>
  );
};
