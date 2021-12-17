import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

// This is an example of a functional component that has no state and can take in props to use within it's elements
// You can pass props through the parenthesis i.e. Navigation = (props) => or by deconstructing what you're passing
// i.e. Navigation = ({title}) =>
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