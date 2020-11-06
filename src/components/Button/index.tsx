import React, { ButtonHTMLAttributes } from "react";

import { Container } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  handleClick(): void;
}

const Button: React.FC<ButtonProps> = ({ children, handleClick }) => {
  return <Container onClick={handleClick}>{children}</Container>;
};

export default Button;
