export default useTabConstructor;
declare function useTabConstructor({ tabs, fitted, selected, handleClick, onSelect, keyboardActivation, disableResponsiveBehavior, }: {
    tabs: any;
    fitted: any;
    selected?: number;
    handleClick: any;
    onSelect: any;
    keyboardActivation: any;
    disableResponsiveBehavior: any;
}): {
    tabMarkup: any;
    tabActions: any;
    focusContainerProps: {
        onBlur: (e: any) => void;
        onKeyDown: (e: any) => void;
        ref: any;
    };
};
