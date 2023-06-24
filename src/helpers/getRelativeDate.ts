export function getRelativeDate(date: Date): string {
  const now = new Date();
  const diffInMilliseconds = now.getTime() - date.getTime();

  const seconds = Math.floor(diffInMilliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  const getTimeUnitString = (value: number, unit: string): string =>
    `${value} ${unit}${value !== 1 ? 's' : ''}`;

  if (days > 0) {
    return getTimeUnitString(days, 'day') + ' ago';
  }
  if (hours > 0) {
    return getTimeUnitString(hours, 'hour') + ' ago';
  } 
  if (minutes > 0) {
    return getTimeUnitString(minutes, 'minute') + ' ago';
  } 
  return getTimeUnitString(seconds, 'second') + ' ago';
}