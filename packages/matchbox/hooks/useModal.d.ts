export default useModal;
/**
 * Reusable hook to be used with the Modal component
 */
declare function useModal({ initialOpen, id }?: {
    initialOpen?: boolean;
    id?: string;
}): {
    isOpen: any;
    toggleModal: () => void;
    openModal: () => void;
    closeModal: () => void;
    getActivatorProps: (additionalProps?: {}) => {
        'aria-controls': string;
        onClick: () => void;
    };
    getModalProps: (additionalProps?: {}) => {
        id: string;
        onClose: () => void;
        open: any;
    };
};
