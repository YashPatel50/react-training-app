import { ReactNode } from "react";
import styles from "./FunButton.module.css";

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
    <button
      type="button"
      className={[styles.btn, styles["btn-" + color]].join(" ")}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default FunButton;
