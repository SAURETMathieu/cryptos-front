"use client";

import AutoForm from "@/src/components/auto-form";

import {
  fieldConfig,
  botFormSchema,
  onSubmit,
} from "@/components/formsConfig/createBot";

type WalletFormTabsProps = {
  closeSheet?: () => void;
};

const CreateBotForm = ({ closeSheet }: WalletFormTabsProps) => {
  return (
        <AutoForm
          formSchema={botFormSchema}
          fieldConfig={fieldConfig}
          closeSheet={closeSheet}
          onSubmit={(values) => onSubmit(values)}
        ></AutoForm>
  );
}

export default CreateBotForm;
