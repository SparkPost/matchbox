export default useCopyToClipboard;
/**
 * SSR friendly hook that copies a string to the clipboard and provides copied state
 *
 * @example
 * const { copy, copied } = useCopyToClipboard({ timeout: 2000 });
 *
 * <Button onClick={() => copy('string')}>
 *  {copied ? 'String has been copied' : 'Copy to clipboard'}
 * </Button>
 */
declare function useCopyToClipboard({ timeout }?: {
    timeout?: number;
}): {
    copy: (string: any) => void;
    copied: any;
};
