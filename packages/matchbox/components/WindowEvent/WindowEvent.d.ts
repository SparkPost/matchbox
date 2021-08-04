export default WindowEvent;
/**
 * Adds and removes events for you
 * Usage:
 * <WindowEvent event='keydown' handler={this.handleKeyDown} />
 */
declare function WindowEvent(props: any): any;
declare namespace WindowEvent {
    const displayName: string;
    namespace propTypes {
        const event: any;
        const handler: any;
    }
}
