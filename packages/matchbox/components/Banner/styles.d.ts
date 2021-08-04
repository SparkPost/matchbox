export function container(props: any): string;
export function childLinks(props: any): string;
export function dismissBase(): string;
export function dismissColor(props: any): string;
export namespace statusIcons {
    namespace success {
        export { CheckCircleOutline as iconName };
        export const iconLabel: string;
        export const bg: string;
        export const fill: string;
    }
    namespace info {
        export { InfoOutline as iconName };
        const iconLabel_1: string;
        export { iconLabel_1 as iconLabel };
        const bg_1: string;
        export { bg_1 as bg };
        const fill_1: string;
        export { fill_1 as fill };
    }
    namespace warning {
        export { ReportProblemOutlined as iconName };
        const iconLabel_2: string;
        export { iconLabel_2 as iconLabel };
        const bg_2: string;
        export { bg_2 as bg };
        const fill_2: string;
        export { fill_2 as fill };
    }
    namespace danger {
        export { ErrorOutline as iconName };
        const iconLabel_3: string;
        export { iconLabel_3 as iconLabel };
        const bg_3: string;
        export { bg_3 as bg };
        const fill_3: string;
        export { fill_3 as fill };
    }
}
