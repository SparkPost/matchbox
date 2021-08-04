export default ComboBoxTextField;
declare function ComboBoxTextField(props: any): any;
declare namespace ComboBoxTextField {
    const propTypes: any;
    namespace defaultProps {
        export const selectedItems: any[];
        export { identity as itemToString };
        export { noop as removeItem };
    }
}
import { identity } from "../../helpers/event";
import { noop } from "../../helpers/event";
