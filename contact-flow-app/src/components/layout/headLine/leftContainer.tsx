import Image from "next/image";

export const LeftHeadLineContainer = () => {
  return (
    <div className="flex items-center justify-end h-full mr-10">
      <Image src="/icons/Back arrow.svg" width={25} height={25} alt={"back"} />
    </div>
  );
};
