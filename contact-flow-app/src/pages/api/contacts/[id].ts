import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

export default async function handleContact(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const contactId = req.query.id;

  // DELETE
  if (req.method === "DELETE") {
    const contact = await prisma.contact.delete({
      where: { id: contactId },
    });
    res.json(contact);
  }
  // UPDATE
  else if (req.method === "PUT") {
    const { name, phone, email, picture } = req.body;
    const contact = await prisma.contact.update({
      where: { id: contactId },
      data: {
        name,
        phone,
        email,
        picture,
      },
    });
    res.status(200).json({ message: "Contact updated", contact: contact });
  } else {
    console.log("Contact could not be modified");
    res.status(400).json({ message: "Contact could not be modified" });
  }
}
