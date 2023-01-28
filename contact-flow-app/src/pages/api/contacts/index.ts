import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

export default async function getContacts(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // CREATE
  if (req.method === "POST") {
    const existingContact = await prisma.contact.findMany({
      where: {
        OR: [
          {
            email: req.body.email,
          },
          {
            phone: req.body.phone,
          },
        ],
      },
    });

    if (existingContact.length > 0) {
      res.status(400).json({ message: "Contact already exists" });
      return;
    }
    try {
      const { name, phone, email, picture } = req.body;
      await prisma.contact.create({
        data: {
          name,
          phone,
          email,
          picture,
        },
      });
      res.status(200).json({ message: "Contact created" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: err.message });
    }
  } else if (req.method === "GET") {
    try {
      const contacts = await prisma.contact.findMany();
      res.status(200).json(contacts);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: err.message });
    }
  } else {
    res.status(435).end("Method not allowed");
  }
}
