export default Page;
declare function Page(props: any): any;
declare namespace Page {
    const displayName: string;
    namespace propTypes {
        const title: any;
        const subtitle: any;
        const primaryAction: any;
        const primaryArea: any;
        const secondaryActions: any;
        const breadcrumbAction: any;
        const empty: {
            (props: any, propName: any, componentName: any, ...rest: any[]): any;
            isRequired: any;
        };
        const children: any;
    }
}
