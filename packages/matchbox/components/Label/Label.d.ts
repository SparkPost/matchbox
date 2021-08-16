export default Label;
declare function Label(props: any): any;
declare namespace Label {
    const displayName: string;
    namespace propTypes {
        const label: {
            (props: any, propName: any, componentName: any, ...rest: any[]): any;
            isRequired: any;
        };
        const children: any;
        const id: any;
        const htmlFor: any;
    }
}
