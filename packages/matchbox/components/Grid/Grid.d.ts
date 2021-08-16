export default Grid;
declare function Grid(props: any): any;
declare namespace Grid {
    export const displayName: string;
    export { Column };
    export namespace propTypes {
        const start: any;
        const center: any;
        const end: any;
        const top: any;
        const middle: any;
        const bottom: any;
        const around: any;
        const between: any;
        const children: any;
    }
}
import Column from "./Column";
