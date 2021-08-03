/**
 * Key down event handler
 * @example onKey('escape', () => foo())(e)
 */
export function onKey(event: any, callback: any): (e: any) => any;
/**
 * Multiple key down event handler
 * @example onKeys(['escape', 'enter'], () => foo())(e)
 */
export function onKeys(events: any, callback: any): (e: any) => void;
