import Link from 'next/link';
import { Navbar, Container, Nav } from 'react-bootstrap';
const SiteHeader = () => {
    return (
        <Navbar expand="md">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Link href={'/'} passHref>
                        <Nav.Link>Home</Nav.Link>
                    </Link>
                    <Link href={'/about'} passHref>
                        <Nav.Link href="#link">Link</Nav.Link>
                    </Link>
                    
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default SiteHeader;
