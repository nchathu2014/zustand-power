import { useCounterStrore } from "../store/counterStore";
import { FaMinus, FaPlus, FaEraser } from "react-icons/fa";

export function CounterControllers() {
  console.log("CounterControllers component rendered");

  const increment = useCounterStrore((state) => state.increment);
  const decrement = useCounterStrore((state) => state.decrement);
  const reset = useCounterStrore((state) => state.reset);

  return (
    <>
      <div>
        <button
          onClick={increment}
          className="bg-blue-900 py-2 px-3 rounded-xl text-white hover:bg-amber-300 hover:cursor-pointer mr-2"
        >
          <FaPlus />
          Increment
        </button>
        <button
          onClick={decrement}
          className="bg-green-900 py-2 px-3 rounded-xl text-white hover:bg-amber-300 hover:cursor-pointer mr-2"
        >
          <FaMinus />
          Decrement
        </button>
        <button
          onClick={reset}
          className="bg-red-900 py-2 px-3 rounded-xl text-white hover:bg-amber-300 hover:cursor-pointer mr-2"
        >
          <FaEraser />
          Reset
        </button>
      </div>
    </>
  );
}
