import moment from 'moment';
import { getNextMonday, getNextDay } from './utils';

describe('Utilities', () => {
  describe('Get the next monday', () => {
    it('returns the next Monday given some day of the week', () => {
      moment.now = jest.fn().mockReturnValue(1571311195449);
      expect(getNextMonday()).toEqual('2019-10-21');
    });
    it('returns the next Monday given a Monday', () => {
      moment.now = jest.fn().mockReturnValue(1571569200000);
      expect(getNextMonday()).toEqual('2019-10-28');
    });
  });

  describe('Get the next day', () => {
    it('returns the next day', () => {
      expect(getNextDay('2019-10-27')).toEqual('2019-10-28');
      expect(getNextDay('2019-10-31')).toEqual('2019-11-01');
      expect(getNextDay('2019-12-31')).toEqual('2020-01-01');
    });
  });
});
