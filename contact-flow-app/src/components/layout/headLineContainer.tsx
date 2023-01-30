import { LayoutProps } from "@/types";
import { SideContainer, HeadLineBody } from "@/components";

interface HeadLineProps extends LayoutProps {
  empty?: boolean;
  leftChild?: JSX.Element;
  rightChild?: JSX.Element;
}

export const HeadLine = ({
  className = "",
  empty,
  leftChild,
  rightChild,
}: HeadLineProps) => {
  return (
    <div
      className={
        "grid col-span-16 grid-cols-16 gap-px auto-rows-auto" + className
      }
    >
      <SideContainer>{leftChild}</SideContainer>
      <div className=" sm:col-span-12 col-span-14 xl:col-span-8 bg-G-100">
        {!empty ? <HeadLineBody /> : null}
      </div>
      <SideContainer>{rightChild}</SideContainer>
    </div>
  );
};
//<div className="relative top-[96px] w-screen border  bg-G-60"></div><div className="absolute top-[192px] w-screen border  bg-G-60"></div>
