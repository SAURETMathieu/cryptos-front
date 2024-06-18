"use client";

import AutoForm from "@/src/components/auto-form";
import { useUpdateModal } from "@/src/context/updateModalProvider";

import {
  fieldConfig,
  generateCentralizeFormSchema,
  onEdit,
} from "@/components/formsConfig/createCentralizeWallet";
import {
  fieldConfig as fieldConfigDecentralize,
  generateDecentralizeFormSchema,
  onEdit as onEditDecentralize,
} from "@/components/formsConfig/createDecentralizeWallet";

interface EditWalletFormProps {
  datas: any;
  updateWallet: (updatedWallet: any) => void;
}

const EditWalletForm = ({ datas, updateWallet }: EditWalletFormProps) => {
  const { closeUpdateModal } = useUpdateModal();

  return (
    <>
      {datas.blockchain === "All" ? (
        <AutoForm
          formSchema={generateCentralizeFormSchema(datas)}
          fieldConfig={fieldConfig}
          closeSheet={closeUpdateModal}
          onSubmit={(values) => onEdit(values, updateWallet, datas.id, closeUpdateModal)}
        />
      ) : (
        <AutoForm
          formSchema={generateDecentralizeFormSchema(datas)}
          fieldConfig={fieldConfigDecentralize}
          closeSheet={closeUpdateModal}
          onSubmit={(values) => onEditDecentralize(values, updateWallet, datas.id, closeUpdateModal)}
        />
      )}
    </>
  );
};

export default EditWalletForm;
