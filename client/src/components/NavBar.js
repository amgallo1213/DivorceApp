import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



const NavBar = () => {
    return ( 
        <div>
            <Navbar id="navbar" fixed="top">
                <Container>
                <Navbar.Brand href="#home" className="navbar">Pro Se Divorce</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home" className="navbar nav-bar">Home</Nav.Link>
                    <Nav.Link href="#features" className="navbar nav-bar">Features</Nav.Link>
                    <Nav.Link href="#pricing" className="navbar nav-bar">Pricing</Nav.Link>
                    <Nav.Link href="#faq" className="navbar nav-bar">FAQ</Nav.Link>
                    <Nav.Link href="signin">Sign In</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </div>
    );
}
 
export default NavBar;