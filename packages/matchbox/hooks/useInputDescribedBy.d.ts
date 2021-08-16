export default useInputDescribedBy;
/**
 * Generates an aria-describedby attribute and ids for HelpText and Error if id is present
 *
 * @example
 *  const { describedBy, errorId, helpTextId } = useInputDescribedBy({
 *    id: 'input-id',
 *    hasHelpText: true,
 *    hasError: true
 *  });
 *
 * // Usage
 *  <input {...describedBy} />
 *  <span id={errorId}>This is an error</span>
 *  <span id={helpTextId}>This is helptext</span>
 *
 */
declare function useInputDescribedBy({ id, hasHelpText, hasError }: {
    id: any;
    hasHelpText: any;
    hasError: any;
}): any;
