import { useGetContacts } from "@/hooks";
import { LayoutProps, IDContact } from "@/types";
import { ContactItem } from "@/components";
import { useState } from "react";

export const ContactList = ({ className = "" }: LayoutProps) => {
  const [visiting, setVisiting] = useState<IDContact | null>(null);

  const { contacts, contactsError } = useGetContacts();

  if (contactsError) {
    return <div>Something went wrong</div>;
  }
  console.log(visiting);
  if (contacts) {
    return (
      <div className={"p-4" + className}>
        {contacts.map((contact) => (
          <ContactItem
            key={contact.id}
            contact={contact}
            visited={visiting ? contact.id === visiting.id : false}
            onContactClick={setVisiting}
          />
        ))}
      </div>
    );
  }

  return <div>Loading...</div>;
};
