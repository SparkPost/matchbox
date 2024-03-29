import React from 'react';
import Panel from './Panel';
import { Box } from '../Box';

type AccentProps = {
  accentColor?: React.ComponentProps<typeof Panel>['accent'];
};

function Accent({ accentColor }: AccentProps): JSX.Element {
  const color = React.useMemo(() => {
    switch (accentColor) {
      case 'orange':
        return 'brand.orange';
      case 'green':
        return 'green.700';
      case 'yellow':
        return 'yellow.400';
      case 'red':
        return 'red.700';
      case 'gray':
        return 'gray.600';
      case 'blue':
      default:
        return 'blue.700';
    }
  }, [accentColor]);

  return (
    <Box
      bg={color}
      borderTopLeftRadius="200"
      borderTopRightRadius="200"
      position="absolute"
      height="100"
      top="-1px"
      left="-1px"
      right="-1px"
    />
  );
}

Accent.displayName = 'Panel.Accent';

export default Accent;
