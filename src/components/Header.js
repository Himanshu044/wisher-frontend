import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Register from './/register';
import Login from './/login';
import {useState} from 'react';

const Header = ()=>{
  //console.log(process.env.REACT_APP_API_ENDPOINT);
  const [showRegisterModel, setShowRegisterModel] = useState(false);
  const [showLoginModel, setShowLoginModel] = useState(false);
  function handleRegisterClick(){
    setShowRegisterModel(true);
    console.log(showRegisterModel)
  }
  function handleLoginClick(){
    setShowLoginModel(true);
  }
  function userLogout(){
    localStorage.clear();
    window.location.reload(false);
  }
    return (
        <Navbar>
          <Container>
            <Navbar.Brand><h1>Event Wisher</h1></Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            <Nav className="justify-content-end flex-grow-1 pe-3">
            {localStorage.getItem('user') ? (
                <Nav.Link onClick={()=>userLogout()}>Logout</Nav.Link>
            ) : (
              <>
                <Nav.Link onClick={()=>handleLoginClick()}>Login</Nav.Link>
                <Nav.Link onClick={()=>handleRegisterClick()}>SignUp</Nav.Link>
              </>
            )}
            </Nav>
            </Navbar.Collapse>
          </Container>
          <Register showRegisterModel={showRegisterModel} setShowRegisterModel={setShowRegisterModel} />
          <Login showLoginModel={showLoginModel} setShowLoginModel={setShowLoginModel} />
        </Navbar>
      );
}

export default Header