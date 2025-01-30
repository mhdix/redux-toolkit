import { useDispatch, useSelector } from "react-redux"
import { buyMilk } from "../features/milk/milkSlice"

const Milk = () => {
  const {numOfMilk} = useSelector(state => state.milk)
  const dispatch = useDispatch()
  console.log(numOfMilk)
  return (
    <div>
      <h1>num of cout : {numOfMilk} </h1>
      <button onClick={() => dispatch(buyMilk(1))}>buy one milk</button>
    </div>
  );
}

export default Milk