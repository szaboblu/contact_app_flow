import { LayoutProps } from "@/types";

export const SideContainer = ({ children }: LayoutProps) => {
  return (
    <div className="col-span-1 sm:col-span-2 xl:col-span-4 bg-G-100">
      {children}
    </div>
  );
};
