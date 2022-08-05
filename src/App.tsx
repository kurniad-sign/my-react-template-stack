import { Title, Text } from './components';
import useStore from './stores';

export default function App(): JSX.Element {
  const { counter, increment, decrement } = useStore();

  return (
    <div>
      <Title as="h1">Heading 1</Title>
      <Title as="h2">Heading 2</Title>
      <Title as="h3">Heading 3</Title>
      <Title as="h4">Heading 4</Title>
      <Title as="h5">Heading 5</Title>
      <Title as="h6">Heading 6</Title>
      <Title>Save</Title>
      <Text>Sample Text Underlined</Text>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}
