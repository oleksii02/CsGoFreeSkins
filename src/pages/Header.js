import React from 'react';
import logo from '../image/logo.png'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PagesStyles.css'
import '../GlobalStyles.css'

function Header() {
    return (
        <>
            <Navbar bg="dark" variant="dark" className={'Header'}>
                <Container>
                    <Navbar.Brand>
                        <img
                            alt=""
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />
                        CsGoFreeSkins
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;