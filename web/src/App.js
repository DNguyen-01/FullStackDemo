import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './sass/main.scss';
import Home from './pages/Home';
import StudentList from './pages/StudentList';
import StudentEdit from './pages/StudentEdit';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: []
    };
  }

  render() {
    return (
      <div className="App">
        <Switch>
          {/* These routes connect to the brwoser router and create the illusion of different pages when in fact
          this is an SPA, single page application. */}
          <Route path='/' exact={true} component={Home} />
          <Route path='/students' exact={true} component={StudentList} />
          <Route path='/students/:id' exact={true} component={StudentEdit} />
        </Switch>
      </div>
    );
  }
}

export default App;
