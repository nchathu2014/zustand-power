import { FaPlus, FaMinus, FaEraser } from "react-icons/fa";
import { useCounterStrore } from "./../store/counterStore";

export function Counter() {
  const { count, increment, decrement, reset } = useCounterStrore();

  console.log("Render Counter")

  return (
    <div>
      <div>
        <h2>Counter App</h2>
        Count: {count}
      </div>
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
    </div>
  );
}
