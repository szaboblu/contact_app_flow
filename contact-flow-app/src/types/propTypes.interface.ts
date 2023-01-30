import { IDContact } from ".";

export interface LayoutProps {
  children?: React.ReactNode;
  className?: string;
}

export interface ContactProps {
  contact: IDContact;
}
