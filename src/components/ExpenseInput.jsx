import React ,{useState} from 'react'
import nlp from "compromise"
const ExpenseInput = ({objects,setObjects,selectedDate}) => {
    const[incomeText,setIncomeText]=useState("")
        const[ExpenseInput,setExpenseInput]=useState(" ")
  
    const handleInput=(category,text)=>{
        
        
      const data=nlp(text)
      const amount=Number(data.numbers().out("text"))
     const reason = text.replace(/\d+/g, "").trim()
     const expenseObject={
        category,
        amount,
        reason,
        date:selectedDate
     }
     setObjects([...objects,expenseObject])
    console.log(objects)
    }
  return (

    <div className="flex flex-col items-center justify-center m-4">
      <div className="flex flex-row">
      <input type="text" className="placeholder:text-gray-200 w-[450px] m-2 px-2 py-2 bg-gradient-to-r text-black rounded-lg from-green-500 to-green-600"placeholder="Add income amount e.g Salary ₹5000" onChange={(e)=>setIncomeText(e.target.value)}/>
   <button  onClick={() => handleInput("Income", incomeText)} className="w-[300px] bg-green-400 px-4 py-3 m-2 border-4 rounded-lg border-none">Add Income</button>
   </div>
   <div className="flex flex-row">
    <input type="text" className="placeholder:text-gray-200 w-[450px] m-2 px-2 py-2 bg-gradient-to-r text-black rounded-lg from-red-500 to-red-600" placeholder="Add Expenses amount e.g Food ₹500" onChange={(e)=>setExpenseInput(e.target.value)}/>
    <button  onClick={() => handleInput("Expense", ExpenseInput)}className="w-[300px] bg-red-400 px-2 py-2 m-2 border-4 rounded-lg border-none">Add Expense</button>
    </div>
    </div>
  )
}

export default ExpenseInput
