import React from "react";
import styles from "./button.module.css";

interface ButtonProps {
  extClassName?: string;
  buttonColor: "blue" | "white";
  onClick?: () => void;
  text: string;
  size?: "small" | "medium" | "large";
}
export const Button = ({
  extClassName,
  buttonColor,
  text,
  size = "small",
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={`${styles[buttonColor]} ${extClassName} ${styles[size]} ${styles.button}`}
      {...props}
    >
      <p className="text text_type_Medium">{text}</p>
    </button>
  );
};
