export default Inline;
declare function Inline(props: any): any;
declare namespace Inline {
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
        alignY: any;
    };
    const displayName: string;
}
