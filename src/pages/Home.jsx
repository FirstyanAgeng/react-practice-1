import { Container } from "react-bootstrap";
import UserLayout from "../Layouts/UserLayout";

const Home = () => {
  return (
    <UserLayout>
      <Container className="my-5">
        <h1>HOME</h1>
        <p>HALAMAN UTAMA</p>
      </Container>
    </UserLayout>
  );
};

export default Home;
