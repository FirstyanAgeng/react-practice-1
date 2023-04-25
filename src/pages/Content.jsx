import { Container } from "react-bootstrap";
import UserLayout from "../Layouts/UserLayout";

const Content = () => {
  return (
    <UserLayout>
      <Container className="my-5">
        <h1>CONTENT</h1>
        <p>Deskripsi kontent</p>
      </Container>
    </UserLayout>
  );
};

export default Content;
