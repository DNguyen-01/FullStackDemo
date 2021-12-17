import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import Navigation from '../components/Navigation';

class StudentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            students: []
        };
        this.remove = this.remove.bind(this);
    }

    // This is a lifecycle method that performs some code before the component is rendered
    // In this case we are making a call to ouyr server and getting our student list or empty array
    // and saving it into our state object.
    componentDidMount() {
        fetch('/students')
        .then(response => response.json())
        .then(data => this.setState({students: data}));
    }

    //This remove function utilizes fetch, which is a Promise, to pass a student id to the server to be deleted.
    async remove(id) {
        await fetch(`/students/${id}`, {
            method: 'DELETE',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          }).then(() => {
              // Always be sure to resolve your promise with .then()
              // This filters out the deleted student from the user's view and saves the new array into state 
            let updatedStudents = [...this.state.students].filter(student => student.id !== id);
            this.setState({students: updatedStudents});
          });
    }

    render() {
        // Deconstructing state so we can refer to the variables directly
        // instead of this.state.students everywhere
        const {students} = this.state;

        const studentList = students.map(student => {
            return <tr key={student.id}>
            <td style={{whiteSpace: 'nowrap'}}>{student.firstName}</td>
            <td>{student.lastName}</td>
            <td>{student.cohort}</td>            
            <td>
              <div className="btn-group" role="group" aria-label="Basic outlined example">
                  {/* This Link connnects us to the StudentEdit page and passed the id for reference */}
                  <Button variant="success"><Link className="link link__white-text" to={"/students/" + student.id}>Edit</Link></Button>
                <Button variant="danger" onClick={() => this.remove(student.id)}>Delete</Button>
              </div>
            </td>
          </tr>
        });

        return (
            <div>
                <Navigation/>
                <Container>
                    <div className="add-button">
                        {/* This Link connects to the StudentEdit page but passed "new" instead of an id */}
                        <button type="button" className="btn btn-success"><Link className="link link__white-text" to="/students/new">Add Student</Link></button>
                    </div>
                    <h3>Roster</h3>
                    <table className="table">
                        <thead>
                        <tr>
                        <th scope="col">First name</th>
                        <th scope="col">Last name</th>
                        <th scope="col">Cohort</th>
                        <th scope="col">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {studentList}
                        </tbody>
                    </table>
                </Container>
            </div>
        )
    }
}

export default StudentList;