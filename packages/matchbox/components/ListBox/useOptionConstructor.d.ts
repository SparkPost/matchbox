export default useOptionConstructor;
declare function useOptionConstructor({ options, value, onSelect, open, placeholder }: {
    options: any;
    value: any;
    onSelect: any;
    open: any;
    placeholder: any;
}): {
    optionsMarkup: any;
    focusContainerProps: {
        onKeyDown: (e: any) => void;
    };
};
