import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { Container, Nav, Navbar, NavItem } from 'react-bootstrap';

const TopMenu = () => (
  <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#">
        <img src="murphyslogowhite.png" alt="Murphy's Logo" width="200"/>
      </Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#">Home</Nav.Link>
        <Nav.Link href="#">About Us</Nav.Link>
        <Nav.Link href="#">St. Patrick's Day</Nav.Link>
        <Nav.Link href="#">To Go Ordering</Nav.Link>
      </Nav>
      <Nav>
        <NavItem><Nav.Link href="#"><i className="bi bi-instagram"></i></Nav.Link></NavItem>
        <NavItem><Nav.Link href="#"><i className="bi bi-facebook"></i></Nav.Link></NavItem>
        <NavItem><Nav.Link href="#"><i className="bi bi-twitter"></i></Nav.Link></NavItem>
      </Nav>
    </Container>
  </Navbar>
);
const CenterText = () => (
  <Container className="text-center my-5">
    <h1>Now accepting reservations for St Patrick's Day</h1>
    <h2>Please call 808-531-0422 for reservations</h2>
    <h2>St Patrick's Day To-Go Orders can be ordered on our website menu.</h2>
  </Container>
);

const Footer = () => (
  <footer className="footer mt-auto py-3 bg-light">
    <Container>
      <div className="row">
        <div className="col">
          <h5>Lunch</h5>
          <hr/>
          Monday - Friday: 11:00am - 2:30pm<br/>
          Saturday - Sunday: Not open
        </div>
        <div className="col">
          <h5>Bar</h5>
          <hr/>
          Monday - Friday: From 11:00am to closing<br/>
          Saturday - Sunday: Not open
        </div>
        <div className="col">
          <h5>Dinner</h5>
          <hr/>
          Monday - Friday: 5:00pm - 9:00pm<br/>
          Saturday - Sunday: Not open
        </div>
      </div>
    </Container>
  </footer>
);

const Murphys = () => (
    <TopMenu />
    <CenterText />
    <Footer />
);

const root = createRoot(document.getElementById('root'));
root.render(<Murphys />);