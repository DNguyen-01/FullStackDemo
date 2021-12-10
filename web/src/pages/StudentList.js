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

    componentDidMount() {
        fetch('/students')
        .then(response => response.json())
        .then(data => this.setState({students: data}));
    }

    async remove(id) {
        await fetch(`/students/${id}`, {
            method: 'DELETE',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          }).then(() => {
            let updatedStudents = [...this.state.students].filter(i => i.id !== id);
            this.setState({students: updatedStudents});
          });
    }

    render() {
        const {students} = this.state;

        const studentList = students.map(student => {
            return <tr key={student.id}>
            <td style={{whiteSpace: 'nowrap'}}>{student.firstName}</td>
            <td>{student.lastName}</td>
            <td>{student.cohort}</td>            
            <td>
              <div className="btn-group" role="group" aria-label="Basic outlined example">
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