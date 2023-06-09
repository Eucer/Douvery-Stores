
function getMonthName(numMonth: any) {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  return months[numMonth];
}

export function addLeadingZero(value: any) {
  return value.toString().padStart(2, '0');
}
export function truncarDecimales(numero: number, decimales: any) {
  const factor = Math.pow(10, decimales);
  return Math.trunc(numero * factor) / factor;
}

export function formatDateWithMinutes(isoDate: any) {
  const date = new Date(isoDate);
  const day = date.getDate();
  const month = getMonthName(date.getMonth());
  const year = date.getFullYear();
  const hours = addLeadingZero(date.getHours());
  const minutes = addLeadingZero(date.getMinutes());

  return `${month} ${day}, ${year} at ${hours}:${minutes}`;
}


export function formatDate(isoDate: any) {
  const date = new Date(isoDate);
  const day = date.getDate();
  const month = getMonthName(date.getMonth());
  const year = date.getFullYear();

  return `${month} ${day}, ${year}`;
}
