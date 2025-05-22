export const dustGradeMap: Record<string, string> = {
  '1': '좋음',
  '2': '보통',
  '3': '나쁨',
  '4': '매우 나쁨',
};

export const getDustStatus = (grade?: string | null): string => {
  if (!grade || !(grade in dustGradeMap)) {
    return '정보없음';
  }
  return dustGradeMap[grade];
};
