import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from '../css/trainerview.module.css';

function TrainerView({ trainers }) {
  return (
    <Container className="mt-3">
      <Row>
        <h4>Assigned Trainers</h4>
      </Row>
      <Row>
        {trainers?.map((trainer) => (
          <Col key={trainer.id}>
            <Card sx={{ maxWidth: 300 }} className={styles.card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={trainer.profile_image}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {trainer.first_name} {trainer.last_name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {trainer.about_yourself}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default TrainerView;
