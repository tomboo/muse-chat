import React from "react";
import Modal from "./Modal";

const PlaceholderModal = ({
  open,
  onClose,
  title,
  message = "Coming soon…",
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  message?: string;
}) => {
  return (
    <Modal open={open} onClose={onClose} title={title}>
      <div className="text-sm opacity-80">{message}</div>
    </Modal>
  );
};

export default PlaceholderModal;
