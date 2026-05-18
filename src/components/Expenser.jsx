import React,{useState} from 'react'


const Expenser = () => {
      const [income, setIncome] = useState(0)
    
      const [expenses, setExpense] = useState([
        { title: "", Amount: 0,Date:""}
      ])
    
      const handleExpense = (index, field, value) => {
        const updated = [...expenses]
    
        updated[index][field] =
          field === "Amount" ? Number(value) : value
       
        setExpense(updated)
      }
    
      const addExpense = () => {
        const today=new Date() .toISOString().split("T")[0]
        setExpense([
          ...expenses,
          { title: "", Amount: 0 ,Date:today}
        ])
      }
     const deleteExpense = ()=> {
      let index=expenses.length-1
      const updated = expenses.filter((_, i) => i !== index);
      setExpense(updated);
    };
    
      const incomeValue = Number(income)
    
      const expensesValue = expenses.reduce(
        (sum, item) => sum + Number(item.Amount || 0),
        0
      )
    
      const total = incomeValue - expensesValue
  return (

<div className=" flex flex-col items-center justify-center ">
     
      
      <input
        type="text"
        className="m-2 rounded-lg text-xl text-black"
        placeholder="Enter your Income"
        value={income}
        onChange={(e) => setIncome(e.target.value)}
      />


  <div className="flex gap-4">


      <button onClick={addExpense} className="w-20 border-2 text-sm text-black rounded-lg bg-gradient-to-r from-green-500 to-teal-400">Add</button>
        <button  onClick={deleteExpense} className="w-3/5 text-sm text-black border-2 rounded-lg bg-gradient-to-r from-red-600 to-red-500">Delete</button>
   </div>
      {/* Expenses */}
      {expenses.map((expense, index) => (

        <div key={index}>
       
          <input
            type="text"
              className="m-2 rounded-lg text-xl text-black"
            placeholder="Expense title"
            value={expense.title}
            onChange={(e) =>
              handleExpense(index, "title", e.target.value,new Date())
            }
          />

          <input
            type="text"
            placeholder="Amount"
            className="m-2 rounded-lg text-xl text-black"
            value={expense.Amount}
            onChange={(e) =>
              handleExpense(index, "Amount", e.target.value)
            }

          />
          
        </div>
      ))}

      {/* Total */}
      <h2 className='border-2 rounded-md m-4 w-40'>
        Remaining: {total}
      </h2>
    </div>
  )
}

export default Expenser
