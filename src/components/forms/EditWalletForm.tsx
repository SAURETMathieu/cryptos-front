"use client";

import AutoForm from "@/src/components/auto-form";
import { useUpdateModal } from "@/src/context/updateModalProvider";

import {
  fieldConfigUpdate,
  updateWalletFormSchema,
  onEdit,
} from "@/components/formsConfig/updateWallet";

interface EditWalletFormProps {
  datas: any;
  updateWallet: (updatedWallet: any) => void;
}

const EditWalletForm = ({ datas, updateWallet }: EditWalletFormProps) => {
  const { closeUpdateModal, setDescription } = useUpdateModal();
  setDescription("Update your wallet");

  return (
    <>
      {datas.blockchain === "All" ? (
        <AutoForm
          formSchema={updateWalletFormSchema(datas)}
          fieldConfig={fieldConfigUpdate}
          closeSheet={closeUpdateModal}
          onSubmit={(values) => onEdit(values, updateWallet, datas.id, closeUpdateModal)}
        />
      ) : (
        <AutoForm
          formSchema={updateWalletFormSchema(datas)}
          fieldConfig={fieldConfigUpdate}
          closeSheet={closeUpdateModal}
          onSubmit={(values) => onEdit(values, updateWallet, datas.id, closeUpdateModal)}
        />
      )}
    </>
  );
};

export default EditWalletForm;
