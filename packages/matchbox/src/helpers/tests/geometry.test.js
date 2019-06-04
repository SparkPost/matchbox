import { getWindowRect, getRectFor, getPreferredDirectionFor, getPositionFor, lerp } from '../geometry';
import * as reactDomMock from 'react-dom';
jest.mock('react-dom');

global.scrollY = 10;
global.scrollX = 20;
global.innerHeight = 600;
global.innerWidth = 900;

describe('getWindowRect', () => {
  it('should return window dimensions', () => {
    expect(getWindowRect()).toMatchSnapshot();
  });
});

describe('getRectFor', () => {

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should return empty object with no node', () => {
    reactDomMock.findDOMNode.mockImplementationOnce(() => undefined);
    const result = getRectFor('test');
    expect(reactDomMock.findDOMNode).toHaveBeenCalledWith('test');
    expect(result).toMatchSnapshot();
  });

  it('should return node dimensions', () => {
    reactDomMock.findDOMNode.mockImplementationOnce(() => ({ getBoundingClientRect: jest.fn(() => 'dimensions') }));
    const result = getRectFor('test');
    expect(reactDomMock.findDOMNode).toHaveBeenCalledWith('test');
    expect(result).toMatchSnapshot();
  });
});

describe('getPreferredDirectionFor', () => {
  beforeEach(() => {
    reactDomMock.findDOMNode.mockImplementation(() => ({ getBoundingClientRect: jest.fn(() => ({ top: 600, left: 50, right: 80, bottom: 700 })) }));
  });

  it('should return direction', () => {
    expect(getPreferredDirectionFor('test')).toMatchSnapshot();
  });
});

describe('getPositionFor', () => {
  beforeEach(() => {
    reactDomMock.findDOMNode.mockImplementation(() => ({ getBoundingClientRect: jest.fn(() => ({ top: 600, left: 50, width: 20, height: 10 })) }));
  });

  it('should return direction', () => {
    expect(getPositionFor('test')).toMatchSnapshot();
  });

  it('should return direction if node is fixed', () => {
    expect(getPositionFor('test', { fixed: true })).toMatchSnapshot();
  });
});


describe('linear interpolation', () => {
  it('should correctly interpolate between two points', () => {
    expect(lerp(-10, 30, 0.5)).toBe(10);
  });

  it('should clamp lower bounds', () => {
    expect(lerp(-10, 30, -1.5)).toBe(-10);
  });

  it('should clamp upper bounds', () => {
    expect(lerp(-10, 30, 1.5)).toBe(30);
  });
});
