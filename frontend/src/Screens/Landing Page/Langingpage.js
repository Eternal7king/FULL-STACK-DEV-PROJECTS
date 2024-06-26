import {Container, Row , Button}from 'react-bootstrap'
import './Langingpage.css';
const Langingpage = () => {
  return (
    <div className="main">
      <Container>
        <Row>
          <div classname="intro-text">
            <div>
              <h1 className="title">Welcome to Note Zipper</h1>
              <p className="subtitle">One Safe place for all your notes.</p>
            </div>
          </div>
          <div className="buttonContainer">
            <a href="/login">
              <Button size="lg" className="landingbutton">
                Login
              </Button>
            </a>
            <a href="/register">
              <Button size="lg" className="landingbutton" variant='outline-primary'>
                Signup
              </Button>
            </a>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Langingpage