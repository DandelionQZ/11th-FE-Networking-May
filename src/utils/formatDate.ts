export const DateToMonthDay = (yyyymmdd: string): string => {
  if (yyyymmdd.length !== 8) return yyyymmdd;

  const month = parseInt(yyyymmdd.slice(4, 6), 10);
  const day = parseInt(yyyymmdd.slice(6, 8), 10);

  return `${month}.${day}`;
};
