import { groupBy, groupByValues, filterByVisible } from '../array';

describe('Helper: Array helpers', () => {

  let list;

  beforeEach(() => {
    list = [
      {
        name: 'a',
        section: 1
      },
      {
        name: 'b',
        section: 4
      },
      {
        name: 'c',
        section: 1
      },
      {
        name: 'd',
        section: 'mixed whoa'
      }
    ];
  });

  describe('groupBy', () => {

    it('should group a list by a given key', () => {
      expect(groupBy(list, 'section')).toMatchSnapshot();
    });

    it('should group items without a key into an undefined group', () => {
      list.push({ name: 'no section 1' });
      list.push({ name: 'no section 2' });
      const grouped = groupBy(list, 'section');
      expect(grouped).toMatchSnapshot();
      expect(grouped.undefined).toHaveLength(2);
    });

    it('should group items into a single group when the group by key is not present in any item', () => {
      const grouped = groupBy(list, 'zerp');
      expect(Object.keys(grouped)).toHaveLength(1);
      expect(grouped).toMatchSnapshot();
    });

  });

  describe('groupByValues', () => {

    it('should return a grouped array', () => {
      expect(groupByValues(list, 'section')).toMatchSnapshot();
    });

  });

  describe('filterByVisible', () => {
    it('should return only visible actions', () => {
      expect(filterByVisible([
        { content: '1' },
        { content: '2', visible: true },
        { content: '3', visible: false }
      ])).toMatchSnapshot();
    });
  });

});
