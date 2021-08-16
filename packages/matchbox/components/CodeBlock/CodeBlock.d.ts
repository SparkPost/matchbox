export default CodeBlock;
declare function CodeBlock(props: any): any;
declare namespace CodeBlock {
    namespace propTypes {
        const code: any;
        const className: any;
        const height: any;
        const numbered: any;
        const dark: any;
    }
    namespace defaultProps {
        const numbered_1: boolean;
        export { numbered_1 as numbered };
        const dark_1: boolean;
        export { dark_1 as dark };
    }
}
