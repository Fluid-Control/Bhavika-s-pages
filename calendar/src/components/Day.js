import dayjs from "dayjs";
import React, { useContext, useState, useEffect } from "react";
import GlobalContext from "../context/GlobalContext";
// import CalendarHeader from "./CalendarHeader";
export default function Day({ day, rowIdx }) {
  const [dayEvents, setDayEvents] = useState([]);
  const {
    setDaySelected,
    setShowEventModal,
    filteredEvents,
    setSelectedEvent,
  } = useContext(GlobalContext);

  useEffect(() => {
    const events = filteredEvents.filter(
      (evt) =>
        dayjs(evt.day).format("DD-MM-YY") === day.format("DD-MM-YY")
    );
    setDayEvents(events);
  }, [filteredEvents, day]);

  function getCurrentDayClass() {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-blue-600 text-white rounded-full w-7"
      : "";
  }

  function checkMonth(day){
    const monthOfDay = day.month()+1;
    const currMonth = dayjs().month()+1;
    console.log(currMonth);
    if(currMonth !== monthOfDay){
      return "text-neutral-400";
    }else{
      return "text-sm";
    }
  }

  function checkDay(day){
    const dayToCheck = day.format("ddd").toUpperCase();
    // console.log(dayToCheck);
    if(dayToCheck === "SUN"){
      return "text-red-600";
    }
  }
  return (
    <div className="border border-gray-200 flex flex-col">
      <header className={`flex flex-col items-center ${checkMonth(day)}`}>
        {rowIdx === 0 && (
          <p className={`text-sm mt-1 text-stone-900 ${checkDay(day)}`}>
            {day.format("ddd").toUpperCase()}
          </p>
        )}
        <p
          className={`text-sm p-1 my-1 text-center  ${getCurrentDayClass()}`}
        >
          {day.format("DD")}
        </p>
      </header>
      <div
        className="flex-1 cursor-pointer"
        onClick={() => {
          setDaySelected(day);
          setShowEventModal(true);
        }}
      >
        {dayEvents.map((evt, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedEvent(evt)}
            className={`bg-${evt.label}-200 p-1 mr-3 text-gray-600 text-sm rounded mb-1 truncate `}
          >
            {evt.title}
          </div>
        ))}
      </div>
    </div>
  );
}