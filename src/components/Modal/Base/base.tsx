import React from "react";
import { createPortal } from "react-dom";
import styles from "./modal.base.styles.module.css";
import clsx from "clsx";

export interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  nodeId?: string;
  containerStyles?: string;
  contentStyles?: string;
}

const Modal: React.FC<IModalProps> = (props) => {
  const { isOpen, nodeId = "modal", ...rest } = props;

  if (!isOpen) {
    return null;
  }

  document.body.style.overflowY = "hidden";

  return createPortal(
    <ModalChildren {...rest} />,
    document.getElementById(nodeId) as HTMLElement
  );
};

const ModalChildren: React.FC<Omit<IModalProps, "nodeId" | "isOpen">> = ({
  children,
  onClose,
  containerStyles,
  contentStyles,
}) => {
  const handleBackdropClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={clsx(styles.container, containerStyles)}
      onClick={handleBackdropClick}
    >
      <div
        className={clsx(styles.content, contentStyles)}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
