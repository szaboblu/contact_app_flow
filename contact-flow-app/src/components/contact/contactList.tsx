import { useGetContacts } from "@/hooks";
import { Contact } from "./contactItem/contact";
import { LayoutProps } from "@/types";
import { ContactItem } from "@/components";

export const ContactList = ({ className = "" }: LayoutProps) => {
  const { contacts, contactsError } = useGetContacts();

  if (contactsError) {
    return <div>Something went wrong</div>;
  }

  if (contacts) {
    return (
      <div className={"p-4" + className}>
        {contacts.map((contact) => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </div>
    );
  }

  return <div>Loading...</div>;
};
