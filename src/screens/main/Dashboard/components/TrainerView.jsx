import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function TrainerView({trainers}) {
  
  return (
    <Container className="mt-3">
      <Row>
        <h4>Assigned Trainers</h4>
      </Row>
      <Row>
        {trainers.map((trainer) => (
          <Col key={trainer.id}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={trainer.profile_image} height={200}/>
            <Card.Body>
              <Card.Title>{trainer.first_name} {trainer.last_name}</Card.Title>
              <Card.Text>
                {trainer.about_yourself}
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>

        ))}
        
      </Row>
    </Container>
  );
}

export default TrainerView;
