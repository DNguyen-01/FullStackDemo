import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

const Navigation = () => {
    return(
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand><Link className="link link__white-text" to="/">ZipCode</Link></Navbar.Brand>
            </Navbar>
        </div>
    );
}

export default Navigation;