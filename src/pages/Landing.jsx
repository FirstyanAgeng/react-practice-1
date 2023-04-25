import { Container, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { HOME } from "../router";
const Landing = () => {
  const navigate = useNavigate();
  return (
    <Container className="my-5">
      <Card className="text-center">
        <Card.Header>LANDING PAGE</Card.Header>
        <Card.Body>
          <Card.Title>Selamat Datang di Halaman Landing Kami</Card.Title>
          <Card.Text>
            Menyediakan berbagai macam article yang ada dan terbaru
          </Card.Text>
          <Button variant="primary" onClick={() => navigate(HOME)}>
            LOGIN
          </Button>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    </Container>
  );
};

export default Landing;
