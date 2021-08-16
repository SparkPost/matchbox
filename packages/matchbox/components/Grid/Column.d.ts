export default Column;
declare function Column({ children, ...props }: {
    [x: string]: any;
    children: any;
}): any;
declare namespace Column {
    const displayName: string;
    namespace propTypes {
        const xs: any;
        const sm: any;
        const md: any;
        const lg: any;
        const xl: any;
        const xsOffset: any;
        const smOffset: any;
        const mdOffset: any;
        const lgOffset: any;
        const children: any;
    }
}
