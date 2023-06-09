"use client";

import ReactCalendar from "react-calendar";
import { useState, FC } from "react";

interface CalendarProps {}

interface DateType {
  justDate: Date | null;
  dateTime: Date | null;
}

const Calendar: FC<indexProps> = ({}) => {
  const [date, setDate] = useState<DateType>({
    justDate: null,
    dateTime: null,
  });

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      {date.justDate ? (
        <div></div>
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
