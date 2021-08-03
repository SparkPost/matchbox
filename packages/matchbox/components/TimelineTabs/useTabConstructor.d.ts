export default useTabConstructor;
declare function useTabConstructor({ tabs, initialIndex }: {
    tabs: any;
    initialIndex: any;
}): {
    tabs: any;
    focusContainerProps: {
        onKeyDown: (e: any) => void;
        ref: any;
    };
};
