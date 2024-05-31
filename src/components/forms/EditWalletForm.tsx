"use client";

import AutoForm from "@/src/components/auto-form";
import { useUpdateModal } from "@/src/context/updateModalProvider";

import {
  generateCentralizeFormSchema,
  fieldConfig,
  onEdit,
} from "@/components/formsConfig/createCentralizeWallet";

const EditWalletForm = ({datas}:any) => {
  const { closeUpdateModal } = useUpdateModal();

  return (
    <AutoForm
      formSchema={generateCentralizeFormSchema(datas)}
      fieldConfig={fieldConfig}
      closeSheet={closeUpdateModal}
      onSubmit={(values) => onEdit(values)}
    ></AutoForm>
  );
};

export default EditWalletForm;
