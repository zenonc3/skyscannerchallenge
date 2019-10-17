/* eslint-disable import/prefer-default-export */
import moment from 'moment';

/**
 * Gets the next monday given a date
 * @returns {string} the date of the next monday in YYYY-MM-DD format
 */
const getNextMonday = () => {
  const today = moment().isoWeekday();
  let nextMonday;
  if (today <= 1) {
    nextMonday = moment().isoWeekday(1);
  }
  nextMonday = moment().add(1, 'weeks').isoWeekday(1);
  return nextMonday.format('YYYY-MM-DD');
};

/**
 * Gets the next day given a date
 * @param {string} currentDate date in YYYY-MM-DD format
 * @returns {string} the date of the next day in YYYY-MM-DD format
 */
const getNextDay = currentDate => moment(currentDate).add(1, 'days').format('YYYY-MM-DD');

export {
  getNextMonday,
  getNextDay,
};
