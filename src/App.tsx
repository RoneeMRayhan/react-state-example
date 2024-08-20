import CounterWithClass from "./components/CounterWithClassComponent";
import CounterWithFuncComponent from "./components/CounterWithFuncComponent";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="border border-rose-400 m-10">
      <div className="border border-fuchsia-400 p-2 m-2">
        <CounterWithClass />
      </div>

      <div className="border border-y-emerald-400 m-2">{count}</div>
      <div className="border border-zinc-400 m-2">
        <CounterWithFuncComponent count={count} setCount={setCount} />
      </div>
    </div>
  );
}

export default App;
