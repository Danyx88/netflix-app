import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import { Search, Bell, PersonCircle } from 'react-bootstrap-icons';

function MyNavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-dark">
      <Container>
      <Navbar className="bg-body-dark">
        <Container>
          <Navbar.Brand href="#">
            <Image
              src
              width="100px"
              height="55px"
              className="d-inline-block align-top"
              alt="Netflix_logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
        <Navbar.Brand href="#" className='text-white'>Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#" className='text-white'>TV Shows</Nav.Link>
            <Nav.Link href="#" className='text-white'>Movies</Nav.Link>
            <Nav.Link href="#" className='text-white'>Recently Added</Nav.Link>
            <Nav.Link href="#" className='text-white'>My List</Nav.Link>
          </Nav>
          <Nav className='d-flex align-items-center'>
            <Nav.Link href='#'> <Search className='text-white' /> </Nav.Link>
            <Nav.Link href="#" className='text-white'>KIDS</Nav.Link>
            <Nav.Link href='#'> <Bell className='text-white me-2' /> </Nav.Link>
            <Nav.Link href='#'> <PersonCircle className='text-white' /> </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavBar;