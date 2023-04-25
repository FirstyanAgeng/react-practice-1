import Footer from "../components/Footer";
import Navbars from "../components/Navbars";

const UserLayout = ({ children }) => {
  return (
    <>
      <Navbars />
      {children}
      <Footer />
    </>
  );
};

export default UserLayout;
