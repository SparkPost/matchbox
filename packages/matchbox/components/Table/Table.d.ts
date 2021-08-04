export default Table;
declare function Table(props: any): any;
declare namespace Table {
    export { Cell };
    export { HeaderCell };
    export { Row };
    export { TotalsRow };
    export { SortButton };
    export const displayName: string;
    export const propTypes: any;
}
import { Cell } from "./TableElements";
import { HeaderCell } from "./TableElements";
import { Row } from "./TableElements";
import { TotalsRow } from "./TableElements";
import SortButton from "./SortButton";
