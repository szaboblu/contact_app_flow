import { useGetContacts, usePostContact } from "@/hooks";
import Head from "next/head";

export default function Home() {
  const { postContact, postContactError, postContactStatus } = usePostContact();

  const { contacts, contactsError } = useGetContacts();

  const user = {
    name: "John Doe",
    email: "johndo2e1@example.com",
    phone: "123456217890",
    picture: "AWDawd",
  };

  if (contactsError) {
    return <div>Something went wrong</div>;
  }

  if (!contacts) {
    return <div>Loading...</div>;
  }

  const handleButtonClick = () => {
    postContact(user);
    console.log("Button Clicked");
    console.log(postContactStatus);
  };

  return (
    <>
      <Head>
        <title>Content Flow App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-1xl font-bold"></h1>
        <button onClick={handleButtonClick}>Click Me</button>
      </main>
    </>
  );
}
