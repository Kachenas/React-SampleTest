import React from "react";

interface Props {
  children: string;
  color: "primary" | "secondary" | "danger";
  onClick: () => void;
}
const Buttons = ({ children, color = "primary", onClick }: Props) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};
//https://www.youtube.com/watch?v=SqcY0GlETPk
export default Buttons;
