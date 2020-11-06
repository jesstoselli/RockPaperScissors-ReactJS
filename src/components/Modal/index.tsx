import React from "react";
import { X } from "react-feather";

import { Container } from "./styles";

import rules from "../../assets/image-rules.svg";

interface ModalProps {
  closeModal(): void;
  show: boolean;
}

const Modal: React.FC<ModalProps> = ({ show, closeModal }) => {
  return (
    <Container show={show}>
      <div>
        <div>
          <h1>Rules</h1>
          <X onClick={closeModal} />
        </div>
        <img src={rules} alt='Rules' />
      </div>
    </Container>
  );
};

export default Modal;
