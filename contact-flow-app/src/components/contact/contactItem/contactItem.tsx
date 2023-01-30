import { Contact, ContactInfoPanel } from "@/components";
import { ContactProps, IDContact } from "@/types";

interface ContactItemProps extends ContactProps {
  onContactClick: (contact: IDContact) => void;
  visited: boolean;
}

export const ContactItem = ({
  contact,
  onContactClick,
  visited,
}: ContactItemProps) => {
  return (
    <button
      onClick={() => onContactClick(contact)}
      className="flex items-center justify-between w-full p-4"
    >
      <Contact contact={contact} />
      {visited && <ContactInfoPanel />}
    </button>
  );
};
