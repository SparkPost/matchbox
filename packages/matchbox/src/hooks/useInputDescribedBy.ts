import React from 'react';

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
 */
function useInputDescribedBy({
  id,
  hasHelpText,
  hasError,
}: {
  id: string;
  hasHelpText?: boolean;
  hasError?: boolean;
}): {
  describedBy: {
    'aria-describedby'?: string;
  };
  helpTextId: string;
  errorId: string;
} {
  return React.useMemo(() => {
    let errorId = null;
    let helpTextId = null;

    if (id && hasError) {
      errorId = `${id}-error`;
    }

    if (id && hasHelpText) {
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
  }, [hasHelpText, hasError, id]);
}

export default useInputDescribedBy;
