import { IDContact } from "@/types";

interface ContactProps {
  contact: IDContact;
}

export const Contact = ({ contact }: ContactProps) => {
  return (
    <div>
      <h2>{contact.name}</h2>
      <p>{contact.email}</p>
      <p>{contact.phone}</p>
    </div>
  );
};
