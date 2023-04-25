import { Container } from "react-bootstrap";
import UserLayout from "../Layouts/UserLayout";

const About = () => {
  return (
    <UserLayout>
      <Container className="my-5">
        <h1>About</h1>
        <p>HALAMAN TENTANG KAMI</p>
      </Container>
    </UserLayout>
  );
};

export default About;
