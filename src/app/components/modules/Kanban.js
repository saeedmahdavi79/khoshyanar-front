// components/CalendarView.js
import { DatePicker, ConfigProvider, Badge } from "antd";
import {
  DatePicker as DatePickerJalali,
  Calendar,
  JalaliLocaleListener,
} from "antd-jalali";
import fa_IR from "antd/lib/locale/fa_IR";
import moment from "moment-jalaali";
import React, { useState } from "react";

const MyCalendar = ({ onChange, value, events }) => {
  const [markedDates, setMarkedDates] = useState(events);

  function getListData(value) {
    let listData;
    console.log(value.year() + "-" + value.month() + "-" + value.date());

    let dateEvent = value.year() + "-" + value.month() + "-" + value.date();
    events.map((i) => {
      if (dateEvent == i.end) {
        listData = events
          .filter((j) => j.end == i.end)
          .map((k) => ({
            type:
              k.color == "1" ? "error" : k.color == "2" ? "success" : "warning",
            content: k.title,
            date: k.end,
            id: k._id,
          }));
      }
    });

    return listData || [];
  }

  const dateCellRender = (current) => {
    // const date = moment(current).locale("fa").format("jYYYY/jM/jD");
    // const isMarked = events.some((event) => {
    //   return moment(event.end) === date;
    // });

    // const eventTitles = events
    //   .filter((event) => event.end == date)
    //   .map((event) => event.title);

    // console.log(
    //   events.filter((event) => event.end),
    //   date,
    //   current
    // );

    // return (
    //   <div style={{ background: isMarked ? "lightblue" : "transparent" }}>
    //     {isMarked && <span>✔</span>}{" "}
    //     {eventTitles && <span>{eventTitles}</span>} {/* نمایش عنوان رویدادها */}
    //   </div>
    // );

    const listData = getListData(current);
    console.log(listData);

    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.id}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };

  const onDateSelect = (date) => {
    const selectedDate = date.$jy + "-" + date.$jM + "-" + date.$jD;

    // alert(`تاریخ انتخاب شده: ${selectedDate}`);
  };

  return (
    <ConfigProvider locale={fa_IR} direction="rtl">
      <Calendar
        dateCellRender={dateCellRender}
        onSelect={onChange}
        // Optional: You can set the default value to today's date
        value={value}
      />
    </ConfigProvider>
  );
};

export default MyCalendar;
