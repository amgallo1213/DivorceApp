import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import  Button  from 'react-bootstrap/Button';


const NavBar = () => {
    return ( 
        <div>
            <Navbar id="navbar" fixed="top">
                <Container>
                <Navbar.Brand href="#home" class="navbar">Pro Se Divorce</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home" class="navbar">Home</Nav.Link>
                    <Nav.Link href="#features" class="navbar">Features</Nav.Link>
                    <Nav.Link href="#pricing" class="navbar">Pricing</Nav.Link>
                    <Nav.Link href="signin">Sign In</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </div>
    );
}
 
export default NavBar;