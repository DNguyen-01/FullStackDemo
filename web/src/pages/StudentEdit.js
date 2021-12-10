import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup } from 'react-bootstrap';
import Navigation from '../components/Navigation';

class StudentEdit extends Component {
    
    emptyItem = {
        id: null,
        firstName: '',
        lastName: '',
        cohort: ''
      };
    
      constructor(props) {
        super(props);
        this.state = {
          item: this.emptyItem
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      async componentDidMount() {
        if (this.props.match.params.id !== 'new') {
          const student = await (await fetch(`/students/${this.props.match.params.id}`)).json();
          this.setState({item: student});
        }
      }

      handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...this.state.item};
        item[name] = value;
        this.setState({item});
      }
    
      async handleSubmit(event) {
        event.preventDefault();
        const {item} = this.state;
    
        await fetch('/students' + (item.id ? '/' + item.id : ''), {
          method: (item.id) ? 'PUT' : 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(item),
        });
        this.props.history.push('/students');
        this.setState({item: this.emptyItem});
      }

      render() {
        const {item} = this.state;
        const title = <h2>{item.id && true ? 'Edit Student' : 'Add Student'}</h2>;
    
        return <div>
          <Navigation/>
          <Container>
            {title}
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Form.Label for="firstName">First name</Form.Label>
                <Form.Control type="text" name="firstName" id="firstName" value={item.firstName || ''}
                       onChange={this.handleChange} autoComplete="firstName"/>
              </FormGroup>
              <FormGroup>
                <Form.Label for="lastName">Last name</Form.Label>
                <Form.Control type="text" name="lastName" id="lastName" value={item.lastName || ''}
                       onChange={this.handleChange} autoComplete="lastName"/>
              </FormGroup>
              <FormGroup>
                <Form.Label for="cohort">Cohort</Form.Label>
                <Form.Control type="text" name="cohort" id="cohort" value={item.cohort || ''}
                       onChange={this.handleChange} autoComplete="cohort"/>
              </FormGroup>
              <FormGroup>
                <Button color="primary" type="submit">Save</Button>{' '}
                <Button color="secondary"><Link className="link link__white-text" to="/students">Cancel</Link></Button>
              </FormGroup>
            </Form>
          </Container>
        </div>
      }
}
export default withRouter(StudentEdit);