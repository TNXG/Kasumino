export function formatDateToYYYYMMDD(date) {
  if (!(date instanceof Date)) {
    date = new Date(date);
  }
  return date.toISOString().substring(0, 10);
}

export function formatDateToYMDHMS(date) {
  if (!(date instanceof Date)) {
    date = new Date(date);
  }
  return date.toISOString().replace(/T/, ' ').replace(/\..+/, '').replace(/-/g, '/');
}

export function formatDateToYears(date) {
  if (!(date instanceof Date)) {
    date = new Date(date);
  }
  return date.getFullYear();
}