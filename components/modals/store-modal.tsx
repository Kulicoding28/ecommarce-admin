"use Client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "@/components/ui/modal";

export const StoreModal = () => {
  const StoreModal = useStoreModal();

  return (
    <Modal
      title="Create Store"
      description="add a new store to menage products and categories"
      isOpen={StoreModal.isOpen}
      onClose={StoreModal.onClose}
    >
      Future Create store form
    </Modal>
  );
};
