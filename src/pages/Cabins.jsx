import Heading from '../ui/Heading';
import Row from '../ui/Row';
import CarbinsTable from '../features/cabins/CabinTable';

function Cabins() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filter / Sort</p>
      </Row>
      <Row>
        <CarbinsTable />
      </Row>
    </>
  );
}

export default Cabins;
