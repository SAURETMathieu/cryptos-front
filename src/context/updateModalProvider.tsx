"use client";

import React, { ReactNode, createContext, useContext, useState } from "react";

import UpdateModal from "@/components/modals/UpdateModal";

type ModalContextType = {
  isOpen: boolean;
  openUpdateModal: (
    initialForm: ReactNode
  ) => void;
  closeUpdateModal: () => void;
  formContent: ReactNode;
  setFormContent: React.Dispatch<React.SetStateAction<ReactNode>>;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useUpdateModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useUpdateModal must be used within a ModalProvider");
  }
  return context;
};

export function UpdateModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [formContent, setFormContent] = useState<ReactNode>(null);

  const openUpdateModal = (
    initialFormContent: React.ReactNode
  ) => {
    setFormContent(initialFormContent);
    setIsOpen(true);
  };

  const closeUpdateModal = () => {
    setIsOpen(false);
    setFormContent(null);
  };

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        openUpdateModal,
        closeUpdateModal,
        formContent,
        setFormContent,
      }}
    >
      <UpdateModal />
      {children}
    </ModalContext.Provider>
  );
}
