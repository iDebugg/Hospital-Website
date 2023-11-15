import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './App.css';
import { Link } from "react-router-dom";
import Logo from "./img/Logo.jpeg";

function Header() {
    return ( 
        
      // This is the nav bar
         <Navbar expand="lg" className="bg-text-primary" bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home"><i class="fa-solid fa-star-of-life"></i> Heirs Specialist Hospital</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="ms-lg-5">Home</Nav.Link>
        <Nav.Link href='#About' className="ms-lg-5">About Us</Nav.Link>
              <Nav.Link href="#link" className="ms-lg-5">Our Services</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown" className="ms-lg-5">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );

   
  }
  
  export default Header;