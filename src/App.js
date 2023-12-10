import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProductList } from './components/ProductList';
import { Container, Row, Col } from 'react-bootstrap';
import { Cart } from './components/Cart';

const App = () => {

  return <Container fluid>
    <Row>
      <Col xs={9}><ProductList /></Col>
      <Col><Cart /></Col>
    </Row>
  </Container>

}

export default App;
