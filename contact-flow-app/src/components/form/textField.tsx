interface TextFieldProps {
  label: string;
  value: string;
  name: string;
  finished: boolean;
  type?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextField = ({
  label,
  value,
  name,
  type,
  finished,
  onChange,
}: TextFieldProps) => {
  return (
    <div className="my-5">
      <label className="text-sm">{label}</label>
      <div className="mt-1 rounded-md shadow-sm ">
        <input
          type={type || "text"}
          name={name}
          className={
            "w-full p-3 rounded-lg bg-G-60 hover:bg-G-30 active:bg-G-10 focus:outline-none focus:ring-2 focus:ring-G-60 focus:border-transparent"
          }
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};
