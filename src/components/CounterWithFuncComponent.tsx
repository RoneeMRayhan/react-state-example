type TProps = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};
const CounterWithFuncComponent = ({ count, setCount }: TProps) => {
  return (
    <div className="border border-amber-500 m-10">
      <button
        className="border border-cyan-400 m-10"
        onClick={() => setCount((prev) => prev + 1)}
      >
        {count}
      </button>
    </div>
  );
};

export default CounterWithFuncComponent;
