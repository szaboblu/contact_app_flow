import { LayoutProps } from "@/types";
import { SideContainer } from ".";
import { ContactList } from "../contact";

export const ContactContainer = ({ className }: LayoutProps) => {
  return (
    <div className={"grid col-span-16 grid-cols-16 gap-px  h-full" + className}>
      <SideContainer />
      <ContactList className="h-full sm:col-span-12 col-span-14 xl:col-span-8 bg-G-100" />
      <SideContainer />
    </div>
  );
};
