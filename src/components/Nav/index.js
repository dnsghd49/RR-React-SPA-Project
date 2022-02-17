import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import './style.css'

function Navitem() {
    return (
        <div className='topSpace'>
            <Container>
                <Nav defaultActiveKey="/" variant="tabs" fill>
                    <Nav.Item>
                        <Nav.Link href="/">
                            <Link to="/">Home</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item >
                        <Nav.Link>
                            <Link to="/about">About</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item >
                        <DropdownButton id="dropdown-basic-button" title="Projects" variant="Secondary">
                            <Dropdown.Item href="/moleaim">MoleAim</Dropdown.Item>
                            <Dropdown.Item href="/e-gallery">e-Gallery</Dropdown.Item>
                            <Dropdown.Item href="/musiclib">Music Lib</Dropdown.Item>
                        </DropdownButton>
                    </Nav.Item>
                </Nav>
            </Container>
        </div>
    )
}

export default Navitem