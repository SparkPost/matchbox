import React from 'react';
import PropTypes from 'prop-types';
import { deprecate } from '../../helpers/propTypes';
import styled from 'styled-components';
import { margin } from 'styled-system';
import { createPropTypes } from '@styled-system/prop-types';
import { tokens } from '@sparkpost/design-tokens';
import { pick } from '@styled-system/props';
import { useBreakpoint } from '../../hooks';

import { Box } from '../Box';
import { Button, buttonsFrom } from '../Button';
import { Pager } from '../Pager';
import { MoreHoriz } from '@sparkpost/matchbox-icons';

const StyledMoreHoriz = styled(MoreHoriz)`
  fill: ${tokens.color_gray_500};
`;

const Wrapper = styled('div')`
  ${margin}
`;

function Pagination(props) {
  const [index, setIndex] = React.useState(0);
  const [hasPrevious, setHasPrevious] = React.useState(false);
  const [hasNext, setHasNext] = React.useState(false);

  const breakpoint = useBreakpoint();

  const {
    currentPage,
    pages,
    pageRange,
    onChange,
    marginsHidden,
    flat,
    selectedColor,
    ...rest
  } = props;

  const systemProps = pick(rest);

  const calculatedPageRange = React.useMemo(() => {
    return ['default', 'xs', 'sm'].includes(breakpoint) ? 3 : pageRange;
  }, [breakpoint]);

  function handlePageChange(index) {
    setIndex(index);
    setHasPrevious(index > 0);
    setHasNext(index < pages - 1);

    onChange && onChange(index);
  }

  function handleNext() {
    handlePageChange(index + 1);
  }

  function handlePrevious() {
    handlePageChange(index - 1);
  }

  function _getStart() {
    let start = 0;
    const half = Math.floor(calculatedPageRange / 2);

    if (index > half) {
      start = index - half;
    }

    if (index + half + 1 > pages) {
      start = pages - calculatedPageRange;
    }

    return start;
  }

  React.useEffect(() => {
    handlePageChange(currentPage - 1);
  }, [pages, calculatedPageRange, currentPage]);

  const start = _getStart();

  const buttonMarkup = React.useMemo(() => {
    function _createButtons(start, end) {
      const buttons = [];

      for (let currentIndex = start; currentIndex < end; currentIndex++) {
        buttons.push({
          content: `${currentIndex + 1}`,
          onClick: handlePageChange.bind(this, currentIndex),
          variant: currentIndex === index ? 'filled' : 'text',
          size: 'small',
          color: currentIndex === index ? 'blue' : 'gray',
          mx: '100',
          width: currentIndex + 1 < 100 ? tokens.spacing_600 : 'auto',
        });
      }

      return buttonsFrom(buttons);
    }

    if (pages <= calculatedPageRange) {
      return _createButtons(0, pages);
    } else {
      return _createButtons(start, start + calculatedPageRange);
    }
  }, [index, pages, calculatedPageRange]);

  const firstButton =
    !marginsHidden && start > 1 ? (
      <span>
        <Button
          variant="text"
          width={tokens.spacing_600}
          size="small"
          onClick={() => handlePageChange(0)}
        >
          1
        </Button>
        <Box display="inline" pl={200} pr={200}>
          <StyledMoreHoriz size={24} />
        </Box>
      </span>
    ) : null;

  const lastButton =
    !marginsHidden && start + calculatedPageRange < pages ? (
      <span>
        <Box display="inline" pl={200} pr={200}>
          <StyledMoreHoriz size={24} />
        </Box>
        <Button
          variant="text"
          size="small"
          width={pages + 1 < 100 ? tokens.spacing_600 : 'auto'}
          onClick={() => handlePageChange(pages - 1)}
        >
          {pages}
        </Button>
      </span>
    ) : null;

  return (
    <Wrapper {...systemProps}>
      <Box display="inline-flex" alignItems="center">
        <Pager.Previous variant="text" onClick={handlePrevious} disabled={!hasPrevious} />
        {firstButton}
        <Box display="inline-block">{buttonMarkup}</Box>
        {lastButton}
        <Pager.Next variant="text" onClick={handleNext} disabled={!hasNext} />
      </Box>
    </Wrapper>
  );
}

Pagination.displayName = 'Pagination';
Pagination.propTypes = {
  /**
   * Sets the current page number
   */
  currentPage: PropTypes.number,

  /**
   * The total number of pages
   */
  pages: PropTypes.number.isRequired,

  /**
   * The number of page buttons to display. Odd numbers look better.
   */
  pageRange: PropTypes.number.isRequired,

  /**
   * Callback when page is changed. Index passed as argument.
   */
  onChange: PropTypes.func,

  /**
   * Hides first and last buttons
   */
  marginsHidden: PropTypes.bool,

  /**
   * Flat style buttons
   */
  flat: deprecate(PropTypes.bool, 'Flat has been deprecated'),

  /**
   * Selected page color
   */
  selectedColor: deprecate(
    PropTypes.oneOf(['orange', 'blue', 'navy', 'purple', 'red']),
    'Selected Color has been deprecated',
  ),

  /**
   * System Margins
   */
  ...createPropTypes(margin.propNames),
};

Pagination.defaultProps = {
  currentPage: 1,
};

export default Pagination;
