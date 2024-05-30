"use client";

import React, { createContext, useContext, useState } from "react";
import DeleteModal from "@/components/modals/DeleteAlert";

type ModalContextType = {
  isOpen: boolean;
  openModal: (id: string, onDelete: (id: string) => void) => void;
  closeModal: () => void;
  handleDelete: () => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [onDelete, setOnDelete] = useState<(id: string) => void>(() => () => {});
  const [elementId, setElementId] = useState<string | null>(null);

  const openModal = (id: string, onDelete: (id: string) => void) => {
    setIsOpen(true);
    setElementId(id);
    setOnDelete(() => onDelete);
  };

  const closeModal = () => {
    setIsOpen(false);
    setElementId(null);
    setOnDelete(() => () => {});
  };

  const handleDelete = () => {
    if (elementId) {
      onDelete(elementId);
    }
    closeModal();
  };

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal, handleDelete }}>
      <DeleteModal />
      {children}
    </ModalContext.Provider>
  );
}
