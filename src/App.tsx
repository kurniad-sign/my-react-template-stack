import { Title, Image, Text } from './core/components';

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
      <Text size='md' align='right' weight='bold'>What the fuck counter {counter}</Text>
      <button type="button" onClick={increment}>
        +
      </button>
      <button type="button" onClick={decrement}>
        -
      </button>

        <Image
          src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
          alt="Test"
          fit="cover"
        
        />
    </div>
  );
}
