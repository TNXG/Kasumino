export function formatDateToYYYYMMDD(date) {
  if (!(date instanceof Date)) {
    date = new Date(date);
  }
  if (isNaN(date.getTime())) {
    return undefined;
  }
  return date.toISOString().substring(0, 10);
}

export function formatDateToYMDHMS(date) {
  if (!(date instanceof Date)) {
    date = new Date(date);
  }
  if (isNaN(date.getTime())) {
    return undefined;
  }
  return date.toISOString().replace(/T/, ' ').replace(/\..+/, '');
}

export function formatDateToYears(date) {
  if (!(date instanceof Date)) {
    date = new Date(date);
  }
  if (isNaN(date.getTime())) {
    return undefined;
  }
  return date.getFullYear();
}