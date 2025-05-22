export const getDayOfWeek = (mmdd: string): string => {
  const week = [
    '일요일',
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
  ];

  let year: number, month: number, day: number;

  if (mmdd.length === 5 && mmdd.includes('.')) {
    // "MM.DD" 형식 처리
    const [mm, dd] = mmdd.split('.');
    const currentYear = new Date().getFullYear();
    year = currentYear;
    month = parseInt(mm, 10) - 1;
    day = parseInt(dd, 10);
  } else if (mmdd.length === 8) {
    // "YYYYMMDD" 형식 처리
    year = parseInt(mmdd.slice(0, 4), 10);
    month = parseInt(mmdd.slice(4, 6), 10) - 1;
    day = parseInt(mmdd.slice(6, 8), 10);
  } else {
    return '잘못된 날짜';
  }

  const date = new Date(year, month, day);
  return week[date.getDay()];
};

export const getTodayString = (): string => {
  const today = new Date();
  const month = String(today.getMonth() + 1); // 앞자리 0 제거
  const date = String(today.getDate()).padStart(2, '0');
  return `${month}.${date}`; // 예: 5.04
};

export const formatToShortDate = (dateString: string): string => {
  if (!dateString.includes('.')) return dateString;

  const [mm, dd] = dateString.split('.');
  const month = String(parseInt(mm, 10)); // 앞자리 0 제거
  return `${month}.${dd}`;
};
