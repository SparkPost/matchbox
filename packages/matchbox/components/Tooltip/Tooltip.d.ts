export default Tooltip;
declare function Tooltip(props: any): any;
declare namespace Tooltip {
    const displayName: string;
    const propTypes: any;
    namespace defaultProps {
        const right: boolean;
        const bottom: boolean;
        const horizontalOffset: string;
        const forcePosition: boolean;
        namespace preferredDirection {
            const bottom_1: boolean;
            export { bottom_1 as bottom };
            export const left: boolean;
            const right_1: boolean;
            export { right_1 as right };
            export const top: boolean;
        }
    }
}
