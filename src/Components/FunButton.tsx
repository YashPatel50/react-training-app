import { ReactNode } from "react";

interface FunButtonProps {
  children: ReactNode;
  onClick: () => void;
  color?: "primary" | "secondary" | "danger";
}

const FunButton = ({
  children,
  onClick,
  color = "primary",
}: FunButtonProps) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default FunButton;
