export default ScreenReaderOnly;
declare function ScreenReaderOnly({ children, as, id }: {
    children: any;
    as: any;
    id: any;
}): any;
declare namespace ScreenReaderOnly {
    namespace propTypes {
        const children: any;
        const as: any;
        const id: any;
    }
    namespace defaultProps {
        const as_1: string;
        export { as_1 as as };
    }
    const displayName: string;
}
