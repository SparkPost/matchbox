import PropTypes from 'prop-types';
import { pick } from '../propTypes';

describe('propTypes helpers', () => {
  it('picks only values defined by prop types', () => {
    const propTypes = {
      children: PropTypes.node,
      color: PropTypes.color,
    };

    const props = {
      children: 'hello',
      ignore: 'me',
    };

    expect(pick(props, propTypes)).toEqual({ children: 'hello' });
  });
});
