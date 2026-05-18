import React, { useState } from 'react'
import Expenser from './components/Expenser'
import CalendarP from './components/Calendar'
import ExpenseInput from './components/ExpenseInput'

const App = () => {
  const [objects,setObjects]=useState([])
  const [selectedDate,setSelectedDate]=useState(new Date())

  return (
  <div className="min-h-screen w-full  bg-gradient-to-br from-blue-600 to-purple-700 flex flex-col items-center gap-2">
     <h1 className="text-5xl bg-gradient-to-br from-pink-400 to-orange-200 bg-clip-text text-transparent">
  Expense Tracker
</h1>
 <CalendarP selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}/>
  <ExpenseInput objects={objects} setObjects={setObjects} selectedDate={selectedDate}/>
  <ExpenseCaluculate objects={objects}/>
    </div>
  )
}

export default App
