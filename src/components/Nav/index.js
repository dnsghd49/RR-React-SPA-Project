import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

function Navitem() {
    return (
        <div>
            <Container>
                <Nav defaultActiveKey="/" variant="tabs" fill>
                    <Nav.Item>
                        <Nav.Link href="/">
                            <Link to="/">Home</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item >
                        <Nav.Link>
                            <Link to="/about">About Us</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item >
                        <Nav.Link>
                            <Link to="/projects">Projects</Link>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </div>
    )
}

export default Navitem