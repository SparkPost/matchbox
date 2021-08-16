export default useDrawer;
/**
 * Reusable hook to be used with the Drawer component
 */
declare function useDrawer({ initialOpen, id }?: {
    initialOpen?: boolean;
    id?: string;
}): {
    isOpen: any;
    toggleDrawer: () => void;
    openDrawer: () => void;
    closeDrawer: () => void;
    getActivatorProps: (additionalProps?: {}) => {
        'aria-controls': string;
        onClick: () => void;
    };
    getDrawerProps: (additionalProps?: {}) => {
        id: string;
        onClose: () => void;
        open: any;
    };
};
