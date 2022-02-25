export const minutesToHHMM = (min: number) => {
  const hours = Math.floor(min / 60);
  const mins = min - hours * 60;

  const hourStr = hours > 9 ? hours : "0" + hours;
  const minStr = mins > 9 ? mins : "0" + mins;

  return `${hourStr}시간 ${minStr}분`;
};
