import React from "react";
import * as datefns from "date-fns";
import TODAY from "shared/constants";
import { minutesToHHMM } from "shared/utils";

const useDateFormat = (inputTimeStamp: number, whichDate: string) => {
  if (whichDate === "EXPIRE") {
    const expire = new Date(inputTimeStamp * 1000);
    const regex = /[^0-9]/g;

    if (TODAY.getTime() < expire.getTime()) {
      //48시간 이상일때
      const remainDay = datefns.formatDistanceStrict(TODAY, expire, {
        unit: "day",
      });
      const formatDay = Number(remainDay.replace(regex, ""));

      //48시간 미만일때
      if (formatDay < 2) {
        const remainMinutes = datefns.formatDistanceStrict(TODAY, expire, {
          unit: "minute",
        });
        const formatMinutes = Number(remainMinutes.replace(regex, ""));

        return minutesToHHMM(formatMinutes);
      }
      return `${formatDay}일`;
    } else {
      return "만료되었습니다.";
    }
  } else if (whichDate === "CREATE") {
    const createdAt = new Date(inputTimeStamp * 1000);

    const year = createdAt.getFullYear();
    const month = createdAt.getMonth() + 1;
    const day = createdAt.getDay();

    const hours = createdAt.getHours();
    const formattingHours = ("0" + hours).slice(-2);
    const minutes = createdAt.getMinutes();

    return `${year}년 ${month}월 ${day}일 ${formattingHours}:${minutes} +09:00`;
  }
};

export default useDateFormat;
