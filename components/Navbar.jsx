import Link from 'next/link';
import { Navbar, Container, Nav } from 'react-bootstrap';
import * as styles from '../styles/Navbar.module.css';

const SiteHeader = () => {
    return (
        <Navbar expand="md" sticky='top' className={styles.navbar}>
            <Container>
                <Navbar.Brand href="/">Phiwa</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link href={'/'} passHref>
                            <Nav.Link>Home</Nav.Link>
                        </Link>
                        <Link href={'/about'} passHref>
                            <Nav.Link>About</Nav.Link>
                        </Link>
                        <Link href={'/projects'} passHref>
                            <Nav.Link>Projects</Nav.Link>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default SiteHeader;