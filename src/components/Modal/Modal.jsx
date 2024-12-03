import React from 'react';
import {
  DialogTitle,
  DialogActions,
  DialogContent
} from '@mui/material';
import { useModal } from './hooks/useModal';
import { StyledDialog as Dialog } from './ModalStyles';

const Modal = () => {
  const { modalState, handleCloseModal } = useModal();
  const {
    show,
    title,
    body,
    actionButtons,
    isDismissible,
    configProps = {}
  } = modalState;
  const {
    maxWidth,
    className,
    titleClassName,
    showDividers,
    scroll,
    ...otherProps
  } = configProps;

  return (
    <Dialog
      open={show}
      aria-labelledby="app-modal"
      onClose={handleCloseModal}
      maxWidth={maxWidth}
      disableBackdropClick={isDismissible ? undefined : true}
      disableEscapeKeyDown={isDismissible ? undefined : true}
      scroll={scroll}
      {...otherProps}
    >
      {title && <DialogTitle className={titleClassName}>{title}</DialogTitle>}

      <DialogContent dividers={showDividers}>{body}</DialogContent>

      {actionButtons && <DialogActions>{actionButtons}</DialogActions>}
    </Dialog>
  );
};

export { Modal };
