import { useGetContacts } from "@/hooks";
import { Contact } from "./contactItem/contact";

export const ContactList = () => {
  const { contacts, contactsError, contactsStatus } = useGetContacts();

  if (contactsError) {
    return <div>Something went wrong</div>;
  }

  if (contacts) {
    return (
      <div>
        <h1>Contact List</h1>
        {contacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </div>
    );
  }

  return <div>Loading...</div>;
};
