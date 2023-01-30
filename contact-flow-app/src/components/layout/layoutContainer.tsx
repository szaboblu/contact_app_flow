import { LayoutProps } from "@/types";
import { HeadLine } from "./headLineContainer";

export const LayoutContainer = ({ children, className = "" }: LayoutProps) => {
  return (
    <div className="h-screen text-white bg-G-100 font-lexend ">
      <div
        className={
          "grid  grid-cols-16 grid-rows-auto3 gap-px bg-G-60 h-full" + className
        }
      >
        {children}
      </div>
    </div>
  );
};
//
//<div className="absolute left-[calc(50%-384px)] -ml-0.5 h-screen border top-0 bottom-0 bg-G-60"></div>

//      <div className="absolute right-[calc(50%-384px)] -ml-0.5 h-screen border top-0 bottom-0 bg-G-60"></div>
