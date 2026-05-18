import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"
import React,{useState} from 'react'

const CalendarP = ({selectedDate,setSelectedDate}) => {
   
  return (
    <div className="h-full flex flex-col items-center justify-center ">
      <h1 className="text-2xl font-bold mb-6 text-orange-400">Calendar</h1>
      <div className="bg-blue backdrop-blur-md p-6 rounded-2xl shadow-2xl">
      <Calendar onChange={setSelectedDate} value={selectedDate}/>
      {/* <p>{selectedDate}</p> */}
      </div>
    <p className="text-white mt-4">
  {selectedDate && selectedDate.toDateString()}
</p>
    </div>
  )
}

export default CalendarP;
