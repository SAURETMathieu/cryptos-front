"use client";

import React, { createContext, useContext, useState } from "react";
import DeleteModal from "@/components/modals/DeleteAlert";

type ModalContextType = {
  isOpen: boolean;
  openModal: (id: string | number, onDelete: (id: string | number) => Promise<boolean>) => void;
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
  const [onDelete, setOnDelete] = useState<((id: string | number) => Promise<boolean>) | null>(null);
  const [elementId, setElementId] = useState<string | number | null>(null);

  const openModal = (id: string | number, onDelete: (id: string | number) => Promise<boolean>) => {
    setIsOpen(true);
    setElementId(id);
    setOnDelete(() => onDelete);
  };

  const closeModal = () => {
    setIsOpen(false);
    setElementId(null);
    setOnDelete(null);
  };

  const handleDelete = async () => {
    if (elementId && onDelete) {
      const isDelete = await onDelete(elementId);
      if(isDelete){
        closeModal();
      }
    }
  };

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal, handleDelete }}>
      <DeleteModal />
      {children}
    </ModalContext.Provider>
  );
}
