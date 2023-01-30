// Button
//Buttons come in 3 variations and 2 types. Primary icons are used for high priority inputs but mostly the secondary buttons are used.
//The special type of the “Label + icon” is used rarely in the demo to indicate an even higher priority of input. Here it is the “Add contact” button. Be aware that this button doesn’t align with the system colors since it uses gradients.
//The button is a component that is used in many places in the app. It is a good example of a component that is used in many places and is a good candidate for a component library.

interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  icon?: React.ReactNode;
  variant?: "primary" | "secondary" | "special";
}

export const Button = ({
  label,
  onClick,
  type = "button",
  icon,
  variant = "special",
}: ButtonProps) => {
  let buttonClass = "flex items-center  p-2  ";

  if (icon && label) {
    buttonClass += "px-3 gap-2 ";
  }

  switch (variant) {
    case "primary":
      buttonClass += "rounded-lg bg-G-60 hover:bg-G-50 active:bg-G-40";
      break;
    case "secondary":
      buttonClass += "rounded-lg bg-G-100 hover:bg-G-90 active:bg-G-80 ";
      break;
    case "special":
      const hover = "hover:from-G-60  hover:via-G-20 hover:bg-white/4";
      const active = "active:from-G-60 active:via-G-20 active:bg-white/4";
      const gradient = "from-G-60/70 to-G-60/100 from-G-20/100 to-G-20/0";
      return (
        <div className="items-center justify-center p-px mx-auto overflow-hidden rounded-full bg-gradient-to-b from-G-20/100 to-G-20/0">
          <button
            type={type}
            onClick={onClick}
            className={
              buttonClass +
              "bg-G-100 rounded-full h-full w-full bg-gradient-to-t from-G-60 to-G-20" +
              gradient +
              hover +
              active
            }
          >
            {icon && <span className="">{icon}</span>}
            <span className="text-sm">{label}</span>
          </button>
        </div>
      );
  }

  return (
    <button type={type} className={buttonClass} onClick={onClick}>
      {icon && <span className="">{icon}</span>}
      <span className="text-sm">{label}</span>
    </button>
  );
};
