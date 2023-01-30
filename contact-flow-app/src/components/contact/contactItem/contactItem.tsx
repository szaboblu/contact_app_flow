import { Contact } from "@/components";
import { ContactProps, IDContact } from "@/types";

export const ContactItem = ({ contact }: ContactProps) => {
  return (
    <div className="flex items-center justify-between p-4">
      <Contact contact={contact} />
    </div>
  );
};
