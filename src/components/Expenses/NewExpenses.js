import {useState} from 'react'
import "./NewExpenses.css"
import Card from "./UI/Card"
import ExpenseFilter from "./ExpenseFilter"
import NewExpensesList from './NewExpensesList'


const NewExpenses = (props) => {
    const[filteredYear, setFilteredYear] = useState('2020')

    const filterDateHandler = (selectedYear) => {
        return setFilteredYear(selectedYear)
    }
 
        
    const filteredDate = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    })

   

   

    return(
       <div>
        <Card className= "NewExpenses">
           {/* <ExpenseItem 
                date={props.date} 
                title={props.title}
                amount={props.amount}
            /> */}

          
            <ExpenseFilter defaultDate={filteredYear} onChangedFilter={filterDateHandler}/>
             <NewExpensesList items={filteredDate}/>
            
            {/* <NewExpenseList items= {filteredDate}/> */}
            {/* filtering content by conditions */}
            {/* {filterDate.length === 0 ? <p>No content is available</p> :filteredDate.map(expense => <ExpenseItem key={expense.id} title={expense.title} 
            amount={expense.amount} 
            date={expense.date}/>)} */}
             {/* {filteredDate.length === 0 && <p>No content is avaliable</p> } */}
            {/* {filteredDate.length > 0 && filteredDate.map(expense => <ExpenseItem key={expense.id} title={expense.title} 
            amount={expense.amount} 
            date={expense.date}/>)}
            */}
            {/* <ExpenseItem 
            title={props.items[0].title} 
            date={props.items[0].date} 
            amount= {props.items[0].amount} />
             
             <ExpenseItem 
             title={props.items[1].title} 
             date={props.items[1].date} 
            amount= {props.items[1].amount} />
             
             <ExpenseItem 
             title={props.items[2].title} 
             date={props.items[2].date} 
            amount= {props.items[2].amount} />
             
             <ExpenseItem 
             title={props.items[3].title} 
             date={props.items[3].date} 
             amount= {props.items[3].amount} /> */}


        </Card>
       </div>
      
    
  ) }


export default NewExpenses