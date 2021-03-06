import React from 'react';
import PropTypes from 'prop-types';
import { ChevronRight, ChevronLeft } from '@sparkpost/matchbox-icons';
import { Box } from '../Box';
import { Button } from '../Button';
import { ScreenReaderOnly } from '../ScreenReaderOnly';

function Navbar(props) {
  const { onPreviousClick, onNextClick, showNextButton, showPreviousButton } = props;

  return (
    <Box display="flex" justifyContent="space-between" position="absolute" left="0" right="0">
      <Box flex="0">
        <Button
          variant="text"
          color="blue"
          data-id="datepicker-previous"
          disabled={!showPreviousButton}
          onClick={() => onPreviousClick()}
          px="100"
          size="small"
        >
          <ChevronLeft size={24} />
          <ScreenReaderOnly>Previous Month</ScreenReaderOnly>
        </Button>
      </Box>
      <Box flex="0">
        <Button
          variant="text"
          color="blue"
          data-id="datepicker-next"
          disabled={!showNextButton}
          onClick={() => onNextClick()}
          px="100"
          size="small"
        >
          <ChevronRight size={24} />
          <ScreenReaderOnly>Next Month</ScreenReaderOnly>
        </Button>
      </Box>
    </Box>
  );
}

Navbar.displayName = 'Navbar';

// Props come from react-day-picker
Navbar.propTypes = {
  onNextClick: PropTypes.func,
  onPreviousClick: PropTypes.func,
  showNextButton: PropTypes.bool,
  showPreviousButton: PropTypes.bool,
};

export default Navbar;
