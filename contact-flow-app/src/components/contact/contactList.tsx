import { useGetContacts } from "@/hooks";
import { Contact } from "./contactItem/contact";
import { LayoutProps } from "@/types";

export const ContactList = ({ className = "" }: LayoutProps) => {
  const { contacts, contactsError } = useGetContacts();

  if (contactsError) {
    return <div>Something went wrong</div>;
  }

  if (contacts) {
    return (
      <div className={"" + className}>
        <h1>Contact List</h1>
        {contacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </div>
    );
  }

  return <div>Loading...</div>;
};
