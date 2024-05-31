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

const EditWalletForm = ({ datas }: any) => {
  const { closeUpdateModal } = useUpdateModal();

  return (
    <>
      {datas.network === "All" ? (
        <AutoForm
          formSchema={generateCentralizeFormSchema(datas)}
          fieldConfig={fieldConfig}
          closeSheet={closeUpdateModal}
          onSubmit={(values) => onEdit(values)}
        />
      ) : (
        <AutoForm
          formSchema={generateDecentralizeFormSchema(datas)}
          fieldConfig={fieldConfigDecentralize}
          closeSheet={closeUpdateModal}
          onSubmit={(values) => onEditDecentralize(values)}
        />
      )}
    </>
  );
};

export default EditWalletForm;
