interface TextFieldProps {
  label: string;
  value: string;
  finished: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextField = ({
  label,
  value,
  finished,
  onChange,
}: TextFieldProps) => {
  return (
    <div>
      <label>{label}</label>
      <input value={value} onChange={onChange} />
    </div>
  );
};
