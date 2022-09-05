import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


const Header = ()=>{
    return (
        <Navbar>
          <Container>
            <Navbar.Brand><h1>Event Wisher</h1></Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/signup">SignUp</Nav.Link>
            </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}

export default Header