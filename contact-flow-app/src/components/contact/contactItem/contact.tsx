import { ContactProps, IDContact } from "@/types";
import { ProfilePicture } from "./profilePicture";

export const Contact = ({ contact }: ContactProps) => {
  return (
    <div className="flex">
      <ProfilePicture />
      <div className="pl-3">
        <h2>{contact.name}</h2>
        <p className="text-sm opacity-56">{contact.phone}</p>
      </div>
    </div>
  );
};
