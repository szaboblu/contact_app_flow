import Image from "next/image";

export const RightHeadLineContainer = () => {
  return (
    <div className="flex items-center h-full ml-10">
      <Image
        src="/icons/Light mode.svg"
        width={25}
        height={25}
        alt={"light mode"}
      />
    </div>
  );
};
