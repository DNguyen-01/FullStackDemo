import React, { Component } from 'react';
import { Button, Container } from 'react-bootstrap';
import Navigation from '../components/Navigation';
import {Link} from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
          <Navigation/>
          <Container>
            <div>
                <h2>Welcome to the school roster</h2>
                <Button variant="outline-info"><Link className="link link__black-text" to="/students">Manage student roster</Link></Button>
            </div>
          </Container>
      </div>
    );
  }
}

export default Home;