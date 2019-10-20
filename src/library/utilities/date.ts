import { format } from 'date-fns';

export function getDateForSample(miliseconds: number | string) {
  return format(new Date(+miliseconds), 'MMM  d, yyyy');
}
