import GlobalStyles from './styles/GlobalStyle';
import Button from './ui/Button';
import Input from './ui/Input';
import Heading from './ui/Heading';

function App() {
  return (
    <>
      <GlobalStyles />
      <div>
        <Button>Hello</Button>
        <Input />
        <Heading as="h1">xxxxxxxxxxxxxxxxxxx</Heading>
        <Heading as="h2">xxxxxxxxxxxxxxxxxxx</Heading>
        <Heading as="h3">xxxxxxxxxxxxxxxxxxx</Heading>
      </div>
    </>
  );
}

export default App;
