import React from 'react';
import { ChevronRight, ChevronLeft } from '@sparkpost/matchbox-icons';
import { Box } from '../Box';
import { Button } from '../Button';
import { ScreenReaderOnly } from '../ScreenReaderOnly';
import { NavbarElementProps } from 'react-day-picker';

type NavbarProps = NavbarElementProps & {
  onPreviousClick?: () => void;
  onNextClick?: () => void;
  showNextButton?: boolean;
  showPreviousButton?: boolean;
};
function Navbar(props: NavbarProps): JSX.Element {
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
export default Navbar;
