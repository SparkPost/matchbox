import React from 'react';

/**
 * Context is created here to pass modal onClose and open state to composed Modal components
 */

type ContextProps = {
  onClose?: () => void;
  open?: boolean;
};

export const ModalContext = React.createContext<ContextProps>({});
