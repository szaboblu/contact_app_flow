// Button
//Buttons come in 3 variations and 2 types. Primary icons are used for high priority inputs but mostly the secondary buttons are used.
//The special type of the “Label + icon” is used rarely in the demo to indicate an even higher priority of input. Here it is the “Add contact” button. Be aware that this button doesn’t align with the system colors since it uses gradients.
//The button is a component that is used in many places in the app. It is a good example of a component that is used in many places and is a good candidate for a component library.

interface ButtonProps {
  label: string;
  onClick: () => void;
  type?: "button" | "submit" | "reset";
  icon?: React.ReactNode;
  variant?: "primary" | "secondary";
}

const Button = ({
  label,
  onClick,
  type = "button",
  icon,
  variant = "primary",
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`button button--${variant} `}
      onClick={onClick}
    >
      {icon && <span className="button__icon">{icon}</span>}
      <span className="button__label">{label}</span>
    </button>
  );
};

export default Button;
