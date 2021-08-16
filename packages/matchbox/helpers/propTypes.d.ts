/**
 * Custom prop type that logs a warning that a prop is being deprecated
 * @param {propType} propType
 * @param {string} message
 */
export function deprecate(propType: any, message: string, logLevel?: string): {
    (props: any, propName: any, componentName: any, ...rest: any[]): any;
    isRequired: any;
};
export namespace deprecate {
    export { resetWarned };
}
declare function resetWarned(): void;
export {};
