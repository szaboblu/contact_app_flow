import {
  HeadLine,
  LayoutContainer,
  ContactList,
  ContactContainer,
  RightHeadLineContainer,
  LeftHeadLineContainer,
} from "@/components";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Content Flow App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <LayoutContainer>
        <HeadLine empty />
        <HeadLine
          leftChild={<LeftHeadLineContainer />}
          rightChild={<RightHeadLineContainer />}
        />
        <ContactContainer />
      </LayoutContainer>
    </>
  );
}
