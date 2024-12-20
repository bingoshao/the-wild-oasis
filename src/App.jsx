import GlobalStyles from './styles/GlobalStyle';
import Button from './ui/Button';
import Input from './ui/Input';
import Heading from './ui/Heading';
import Row from './ui/Row';

function App() {
  return (
    <>
      <GlobalStyles />
      <div>
        <Row>
          <Row type="horizontal">
            <Heading as="h1">xxxxxxxxxxxxxxxxxxx</Heading>
            <div>
              <Heading as="h2">xxxxxxxxxxxxxxxxxxx</Heading>
              <Button>Hello1</Button>
              <Button variation="secondary" size="small">
                Hello2
              </Button>
            </div>
          </Row>

          <Row>
            <Heading as="h3">xxxxxxxxxxxxxxxxxxx</Heading>
            <form>
              <Input type="number" placeholder="Number of guests" />
              <Input type="number" placeholder="Number of guests" />
            </form>
          </Row>
        </Row>
      </div>
    </>
  );
}

export default App;
