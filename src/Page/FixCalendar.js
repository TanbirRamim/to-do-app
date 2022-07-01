import React, { useState } from "react";
import Calendar from "react-calendar";
// import "react-calendar/dist/esm/Calendar";
import "react-calendar/dist/Calendar.css";
const FixCalendar = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div className=" text-center mx-auto w-6/12 mt-10 mb-10">
      <Calendar className="mx-auto" onChange={onChange} value={value} />
    </div>
  );
};

export default FixCalendar;
