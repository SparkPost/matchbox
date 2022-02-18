import React from 'react';
import { Box } from '../Box';
import { Button } from '../Button';
import { ScreenReaderOnly } from '../ScreenReaderOnly';
import Title from './Title';
import Operator from './Operator';
import Legend from './Legend';
import Subtitle from './Subtitle';
import Group from './Group';
import { getChild } from '../../helpers/children';
import { Close } from '@sparkpost/matchbox-icons';

export type QueryCardProps = {
  children?: React.ReactNode;
  id?: string;
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
};

const QueryCard = React.forwardRef<HTMLDivElement, QueryCardProps>(function QueryCard(
  props,
  userRef,
) {
  const { children, id, onClose } = props;

  const hasLegend = Boolean(getChild('QueryCard.Legend', children).length);

  return (
    <Box id={id} ref={userRef} borderRadius="100" border="400" p="200" position="relative">
      <Box display="flex" alignItems="flex-start">
        {hasLegend && (
          <Box flex="0" pr="200">
            {getChild('QueryCard.Legend', children)}
          </Box>
        )}
        <Box flex="1" mt="-2px">
          {getChild('QueryCard.Title', children)} {getChild('QueryCard.Operator', children)}
          <Box>{getChild('QueryCard.Subtitle', children)}</Box>
        </Box>
      </Box>
      <Box>
        {onClose && (
          <Box position="absolute" top="100" right="100">
            <Button size="small" variant="text" onClick={onClose} px="200">
              <Button.Icon as={Close}></Button.Icon>
              <ScreenReaderOnly>Close</ScreenReaderOnly>
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
}) as React.ForwardRefExoticComponent<QueryCardProps> & {
  Title: typeof Title;
  Operator: typeof Operator;
  Legend: typeof Legend;
  Subtitle: typeof Subtitle;
  Group: typeof Group;
};

QueryCard.displayName = 'QueryCard';
QueryCard.Title = Title;
QueryCard.Operator = Operator;
QueryCard.Legend = Legend;
QueryCard.Subtitle = Subtitle;
QueryCard.Group = Group;

export default QueryCard;
