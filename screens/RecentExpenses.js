import { useContext } from 'react';
import {Text,View} from 'react-native'
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { ExpenseContext } from '../store/expense-context';
import { getDateMinusDays } from '../util/date';
function RecentExpenses(){
    const expensesCtx = useContext(ExpenseContext);
    const recentExpenses = expensesCtx.expenses.filter((expense)=>{
        const today = new Date();
        const date7DaysAgo=getDateMinusDays(today,7);
        return (expense.date>date7DaysAgo) && (expense.date<= today);
    })
return <ExpensesOutput  expenses={recentExpenses} expensesPeriod="last 7 days" fallbackText="NO MAIDEN"/>
}

export default RecentExpenses;