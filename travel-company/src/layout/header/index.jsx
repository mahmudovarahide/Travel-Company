import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Logo from "../../assets/image/313076611_833989847736125_6648682424168280995_n.jpg";
const Header = () => {
  return (
    <header>
      <Container>
        <Row className="align-items-center">
          <Col>
            <div className="logo-box">
              <img src={Logo} alt="" />
            </div>
          </Col>
          <Col>
            <nav>
              <a href="">Home</a>
              <a href="">About</a>
              <a href="">Contact</a>
            </nav>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
