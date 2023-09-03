import { View, Text, FlatList } from "react-native";
import ExpenseList from "./ExpenseList";
import ExpenseSummary from "./ExpenseSummary";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e2",
    description: "A pair of boos",
    amount: 69.99,
    date: new Date("2021-01-19"),
  },
  {
    id: "e3",
    description: "A pair of noos",
    amount: 79.99,
    date: new Date("2021-08-19"),
  },
  {
    id: "e4",
    description: "A pair of noos",
    amount: 79.99,
    date: new Date("2021-08-19"),
  },
  {
    id: "e5",
    description: "A pair of noos",
    amount: 79.99,
    date: new Date("2021-08-19"),
  },
];
function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View>
      <ExpenseSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpenseList expenses={DUMMY_EXPENSES}/>
    </View>
  );
}

export default ExpensesOutput;
