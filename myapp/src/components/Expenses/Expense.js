import ExpItem from "./ExpItem";
import './Expense.css'
import Card from '../UI/Card'
const Expense  = (props) => {
  return (
    <Card className="expense">
      <ExpItem
        title={props.Item[0].title}
        amount={props.Item[0].amount}
        date={props.Item[0].date}
      ></ExpItem>
      <ExpItem
        title={props.Item[1].title}
        amount={props.Item[1].amount}
        date={props.Item[1].date}
      ></ExpItem>
      <ExpItem
        title={props.Item[2].title}
        amount={props.Item[2].amount}
        date={props.Item[2].date}
      ></ExpItem>
      <ExpItem
        title={props.Item[3].title}
        amount={props.Item[3].amount}
        date={props.Item[3].date}
      ></ExpItem>
    </Card>
  );
}
export default Expense;
