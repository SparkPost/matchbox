import React from 'react';

/**
 * Generates an aria-describedby attribute and ids for HelpText and Error if id is present
 *
 * @example
 *  const { describedBy, errorId, helpTextId } = useInputDescribedBy({
 *    id: 'input-id',
 *    helpText: 'This is helptext',
 *    error: 'This is an error'
 *  });
 *
 * // Usage
 *  <input {...describedBy} />
 *  <span id={errorId}>This is an error</span>
 *  <span id={helpTextId}>This is helptext</span>
 *
 */
function useInputDescribedBy({ id, helpText, error }) {
  return React.useMemo(() => {
    let errorId = null;
    let helpTextId = null;

    if (id && error) {
      errorId = `${id}-error`;
    }

    if (id && helpText) {
      helpTextId = `${id}-helptext`;
    }

    return {
      describedBy:
        helpTextId || errorId
          ? { 'aria-describedby': `${helpTextId || ''} ${errorId || ''}`.trim() }
          : {},
      helpTextId,
      errorId,
    };
  }, [error, helpText, id]);
}

export default useInputDescribedBy;
