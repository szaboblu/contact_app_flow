import { useQuery, useMutation } from "react-query";
import axios from "axios";
import { Contact, IDContact } from "@/types";
import queryClient from "@/lib/queryClient";
import { BASE_API_URL, BASE_QUERY } from "@/constants";

const useGetContacts = () => {
  const {
    data: contacts,
    error: contactsError,
    status: contactsStatus,
  } = useQuery<IDContact[], Error>(BASE_QUERY, () =>
    axios.get(BASE_API_URL).then((res) => res.data)
  );
  return { contacts, contactsError, contactsStatus };
};

const usePostContact = () => {
  const {
    mutate: postContact,
    error: postContactError,
    status: postContactStatus,
    data: postContactData,
  } = useMutation<IDContact, Error>(
    (contact: Contact) => axios.post(BASE_API_URL, contact),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(BASE_QUERY);
      },
    }
  );
  return { postContact, postContactError, postContactStatus, postContactData };
};

const useDeleteContact = () => {
  const {
    mutate: deleteContact,
    error: deleteContactError,
    status: deleteContactStatus,
    data: deleteContactData,
  } = useMutation<IDContact, Error>(
    (contact: IDContact) => axios.delete(`${BASE_API_URL}/${contact.id}`),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(BASE_QUERY);
      },
    }
  );
  return {
    deleteContact,
    deleteContactError,
    deleteContactStatus,
    deleteContactData,
  };
};

const useUpdateContact = () => {
  const {
    mutate: updateContact,
    error: updateContactError,
    status: updateContactStatus,
    data: updateContactData,
  } = useMutation<IDContact, Error>(
    (contact: IDContact) => axios.put(`${BASE_API_URL}/${contact.id}`, contact),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(BASE_QUERY);
      },
    }
  );
  return {
    updateContact,
    updateContactError,
    updateContactStatus,
    updateContactData,
  };
};

export { useGetContacts, usePostContact, useDeleteContact, useUpdateContact };

/*const { data, error } = useQuery(BASE_QUERY, () =>
    axios.get("http://localhost:3000/api/contacts").then((res) => res.data)
  );

  const user = {
    name: "John Doe",
    email: "johndoe1@example.com",
    phone: "12345617890",
    picture: "AWDawd",
  };

  const {
    mutate: postContact,
    isLoading,
    isError,
    isSuccess,
  } = useMutation(
    (user) => axios.post("http://localhost:3000/api/contacts", user),
    {
      onSuccess: () => {
        //queryClient.invalidateQueries("contacts");
      },
    }
  );

  const { mutate: deleteContact } = useMutation(
    (id) => axios.delete(`http://localhost:3000/api/contacts/${id}`),
    {
      onSuccess: () => {
        //queryClient.invalidateQueries("contacts");
      },
    }
  );

  const { mutate: updateContact } = useMutation(
    (contact) =>
      axios.put(`http://localhost:3000/api/contacts/${contact.id}`, contact),
    {
      onSuccess: () => {
        //queryClient.invalidateQueries("contacts");
      },
    }
  );
*/
