import { useCounterStrore } from "../store/counterStore";

export function CounterValue() {
  console.log("CounterValue component rendered")  
  const count = useCounterStrore((state) => state.count);
  return <div>Count: {count}</div>;
}
