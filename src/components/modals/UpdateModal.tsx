import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/src/components/ui/dialog";
import { useUpdateModal } from "@/src/context/updateModalProvider";

const UpdateModal = () => {
  const { isOpen, closeUpdateModal, formContent } = useUpdateModal();

  if (!isOpen) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={closeUpdateModal}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update</DialogTitle>
          <DialogDescription>Description</DialogDescription>
        </DialogHeader>
        {formContent ? (
          formContent
        ) : (
          <div className="text-center">No form content selected.</div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default UpdateModal;
