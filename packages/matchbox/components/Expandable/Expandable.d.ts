export default Expandable;
declare function Expandable(props: any): any;
declare namespace Expandable {
    export { Accent };
    export { StyledIcon as Icon };
    export { StyledTitle as Title };
    export { StyledSubtitle as Subtitle };
    export { StyledContentWrapper as ContentWrapper };
    export { StyledArrow as Arrow };
    export { StyledHeader as Header };
    export namespace defaultProps {
        const defaultOpen: boolean;
        const variant: string;
    }
    export const propTypes: any;
}
import Accent from "./Accent";
declare const StyledIcon: any;
declare const StyledTitle: any;
declare const StyledSubtitle: any;
import { StyledContentWrapper } from "./styles";
declare const StyledArrow: any;
import { StyledHeader } from "./styles";
