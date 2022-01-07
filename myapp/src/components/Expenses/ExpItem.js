import Card from "../UI/Card";
import ExpDate from "./ExpDate";
import "./ExpenseItem.css";

const ExpItem = (props) => {
  const clickListenr = () =>{
    console.log('Clicked!!!')
  }
  return (
    <Card className="expense-item">
      <ExpDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">$ {props.amount}</div>
      </div>
      <button onClick={clickListenr}>Click Me</button>
    </Card>
  );
}
export default ExpItem;
