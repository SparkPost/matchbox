export default Stack;
declare function Stack(props: any): any;
declare namespace Stack {
    const propTypes: {
        'data-id': any;
        /**
         * Sets the gutter space between children.
         * Styled-system responsive arrays work here.
         */
        space: any;
        /**
         * Positions children horizontally.
         * Accepts 'center', 'left', 'right', null.
         * Styled-system responsive arrays work here.
         */
        align: any;
    };
    const displayName: string;
}
