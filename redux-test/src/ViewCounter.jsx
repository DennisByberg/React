import { useSelector } from "react-redux";

const ViewCounter = () => {
  const counter = useSelector((state) => {
    return state.counter;
  });

  return <h2>{counter}</h2>;
};

export default ViewCounter;
