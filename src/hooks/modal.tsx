import React, { createContext, useContext, useCallback, useState } from "react";

interface ModalContextData {
  openModal(): void;
  closeModal(): void;
  show: boolean;
}

export const ModalContext = createContext<ModalContextData>(
  {} as ModalContextData
);

export const ModalProvider: React.FC = ({ children }) => {
  const [show, setShow] = useState(false);

  const openModal = useCallback(() => {
    setShow(true);
  }, []);

  const closeModal = useCallback(() => {
    setShow(false);
  }, []);

  return (
    <ModalContext.Provider value={{ openModal, closeModal, show }}>
      {children}
    </ModalContext.Provider>
  );
};

export function useModal(): ModalContextData {
  const context = useContext(ModalContext);

  return context;
}
