export const getDayOrNight = (icon: string): string => {
  if (isNight(icon)) {
    return '야간';
  } else if (isDay(icon)) {
    return '주간';
  } else {
    return '알 수 없음';
  }
};

export const isNight = (code: string): boolean => {
  return code.endsWith('n');
};

export const isDay = (code: string): boolean => {
  return code.endsWith('d');
};

export const getCityWord = (address: string): string => {
  return address.substring(0, 2);
};
