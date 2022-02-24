import * as datefns from "date-fns";

const minutesToHHMM = (min: number) => {
  const hours = Math.floor(min / 60);
  const mins = min - hours * 60;

  const hourStr = hours > 9 ? hours : "0" + hours;
  const minStr = mins > 9 ? mins : "0" + mins;

  return `${hourStr}시간 ${minStr}분`;
};

export const formattingExpireDate = (expireDay: number) => {
  const today = new Date("2022-01-24T03:24:00");
  const expire = new Date(expireDay * 1000);
  const regex = /[^0-9]/g;

  //48시간 이상일때
  const remainDay = datefns.formatDistance(today, expire);
  const formatDay = Number(remainDay.replace(regex, ""));

  //48시간 미만일때
  if (formatDay < 2) {
    const remainMinutes = datefns.formatDistanceStrict(today, expire, {
      unit: "minute",
    });
    const formatMinutes = Number(remainMinutes.replace(regex, ""));

    return minutesToHHMM(formatMinutes);
  }

  return formatDay;
};
