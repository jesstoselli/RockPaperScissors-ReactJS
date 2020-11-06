import React from "react";

import { Container } from "./styles";

interface BackdropProps {
  show: boolean;
  closeModal(): void;
}

const Backdrop: React.FC<BackdropProps> = ({ show, closeModal }) => {
  return show ? <Container onClick={closeModal}></Container> : null;
};

export default Backdrop;
