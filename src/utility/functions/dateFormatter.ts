import moment from 'moment';

export const dateFormatter = (dateString: string, referenceDate: string) => {
  const startDate = moment(referenceDate);
  const endDate = moment(dateString);

  const years = endDate.diff(startDate, 'years');
  startDate.add(years, 'years');

  const months = endDate.diff(startDate, 'months');
  startDate.add(months, 'months');

  const days = endDate.diff(startDate, 'days');

  const formattedStartDate = startDate.format('DD.MM.YYYY');

  return `Since ${formattedStartDate} (${years} Years)`;
};
