export default Theme;
/**
 * Provides context for styled-system
 *
 * - https://www.styled-components.com/docs/advanced#theming
 * - https://styled-system.com/theme-specification
 *
 * @prop theme Overrides matchbox's theme
 */
declare function Theme(props: any): any;
declare namespace Theme {
    const displayName: string;
    namespace propTypes {
        const skipGlobalStyles: any;
        const target: any;
    }
}
