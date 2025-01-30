import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../features/cake/cakeSlice";

const Cake = () => {
  const { numOfCakes } = useSelector((state) => state.cake);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>num of cake : {numOfCakes}</h1>
      <button onClick={() => dispatch(buyCake(1))}>buy cake</button>
    </div>
  );
};

export default Cake;
