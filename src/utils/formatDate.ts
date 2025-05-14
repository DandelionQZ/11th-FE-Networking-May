export const DateToMonthDay = (yyyymmdd: string): string => {
  if (yyyymmdd.length !== 8) return yyyymmdd;

  const month = parseInt(yyyymmdd.slice(4, 6), 10);
  const day = parseInt(yyyymmdd.slice(6, 8), 10);

  return `${month}.${day}`;
};

export const getDayOfWeek = (yyyymmdd: string): string => {
  const week = [
    '일요일',
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
  ];

  if (yyyymmdd.length !== 8) return '잘못된 날짜';

  const year = parseInt(yyyymmdd.slice(0, 4), 10);
  const month = parseInt(yyyymmdd.slice(4, 6), 10) - 1;
  const day = parseInt(yyyymmdd.slice(6, 8), 10);

  const date = new Date(year, month, day);
  return week[date.getDay()]; // 일요일
};

export const getTodayString = (): string => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const date = String(today.getDate()).padStart(2, '0');
  return `${year}${month}${date}`; // 20250514
};
