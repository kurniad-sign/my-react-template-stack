import shallow from 'zustand/shallow';
import { useCounterStore } from './stores/index';

export default function App(): JSX.Element {
  const [counter, increment, decrement] = useCounterStore(
    (state) => [state.counter, state.increment, state.decrement],
    shallow,
  );

  return (
    <div className="App">
      <h1>Hello World</h1>
      <p>{counter}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}
