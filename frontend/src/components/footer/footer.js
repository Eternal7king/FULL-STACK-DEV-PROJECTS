import {React} from "react";
import Container from "react-bootstrap/esm/Container";

const Footer = () => {
  return {
    <footer
    style={
      width: "100%",
      position: "relative",
      bottom: 0,
      display:"flex",
      justifyContent: "center",
    } >
        <Container>
             <Row>
                  <col classname="text-center py-3"> Copyright &copy; Note Zipper </col>
             </Row>
        </Container>
    </footer>
  };
};

export default Footer;
