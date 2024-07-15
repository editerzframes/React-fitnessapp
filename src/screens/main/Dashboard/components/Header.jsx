import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from '../css/header.module.css';

function Header({userName}) {
  return (
    <Container className="mt-3">
      <Row>
        <Col>
          <div>
            <h5 className={`${styles.title} text-muted`}>Hello, {userName}</h5>
            <h3>Lets start your workout</h3>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
