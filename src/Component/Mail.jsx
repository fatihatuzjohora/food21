import Awards from "./Awards";
import Contact from "./Contact";
import Expreience from "./Expreience";
import Footer from "./Footer";
import MyProtfully from "./MyProtfully";
import Nav from "./Nav";

const Mail = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto">
        <Nav></Nav>
        <Expreience></Expreience>
        <Awards></Awards>
        <MyProtfully></MyProtfully>
        <Contact></Contact>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Mail;
