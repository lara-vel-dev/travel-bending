"use client";

import { format, add } from "date-fns";
import ReactCalendar from "react-calendar";
import { useEffect, useState, type FC } from "react";
import { INTERVAL, FIRST_FLIGHT, LAST_FLIGHT } from "../constants/config";

interface CalendarProps {}

interface DateType {
  justDate: Date | null;
  dateTime: Date | null;
}

const Calendar: FC<CalendarProps> = ({}) => {
  const [date, setDate] = useState<DateType>({
    justDate: null,
    dateTime: null,
  });

  const getTimes = () => {
    if (!date.justDate) return;

    const { justDate } = date;

    const beggining = add(justDate, { hours: FIRST_FLIGHT });
    const end = add(justDate, { hours: LAST_FLIGHT });

    const times = [];
    for (let i = beggining; i <= end; i = add(i, { minutes: INTERVAL })) {
      times.push(i);
    }
    return times;
  };

  const times = getTimes();

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      {date.justDate ? (
        <div className="flex gap-4">
          {times?.map((time, i) => (
            <div key={`time-${i}`} className="rounded-sm bg-gray-100 p-2">
              <button
                type="button"
                onClick={() => setDate((prev) => ({ ...prev, dateTime: time }))}
              >
                {format(time, "kk:mm")}
              </button>
            </div>
          ))}
        </div>
      ) : (
        <ReactCalendar
          minDate={new Date()}
          className="react-calendar p-2"
          view="month"
          onClickDay={(date) =>
            setDate((prev) => ({ ...prev, justDate: date }))
          }
        />
      )}
    </div>
  );
};

export default Calendar;
