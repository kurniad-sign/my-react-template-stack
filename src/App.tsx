import shallow from 'zustand/shallow';
import useStore from './stores';

export default function App(): JSX.Element {
  const { counter, increment, decrement } = useStore();

  return (
    <div>
      <h1>Hello World</h1>
      <p>{counter}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}
