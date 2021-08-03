export default Section;
declare function Section(props: any): any;
declare namespace Section {
    const displayName: string;
    const propTypes: {
        /**
         * Section Children
         */
        children: any;
        'data-id': any;
        /**
         * Use for annotated sections, sets width to 1/3
         */
        annotated: any;
    };
}
