import { View, Text,StyleSheet } from "react-native";
import { GlobalStyles } from "../../Constants/styles";
import ExpenseList from "./ExpenseList";
import ExpenseSummary from "./ExpenseSummary";


function ExpensesOutput({ expenses, expensesPeriod,fallbackText }) {
  let content = <Text style={styles.infoText}>{fallbackText}</Text>
  if (expenses.length>0){
    content=<ExpenseList expenses={expenses}/>
  }
  return (
    <View style={styles.container}>
      <ExpenseSummary expenses={expenses} periodName={expensesPeriod} />
      {content}
    </View>
  );
}

export default ExpensesOutput;

const styles=StyleSheet.create({
 container:{
  flex:1,
  paddingHorizontal:24,
  paddingTop:24,
  paddingBottom:0,
  padding:24,
  backgroundColor:GlobalStyles.colors.primary700
 },
 infoText:{
  color:'white',
  fontSize:16,
  textAlign:'center',
  marginTop:32
 }
})

