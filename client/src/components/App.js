import React, { Component } from 'react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Login from './Login';
import Register from './Register';
import Flash from './Flash';
import Home from './Home';
import ProtectedRoute from './ProtectedRoute';
import { Switch, Route } from 'react-router-dom';
import FetchUser from './FetchUser';
import Pets from './Pets';
import InfoGuides from './InfoGuides';
import Reminders from './Reminders';
import Events from './Events';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Flash />
        <FetchUser>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />

            <Route exact path='/register' component={Register} />
            <Route exact path='/pets' component={Pets} />
            <Route exact path='/events' component={Events} />
            <Route exact path='/info' component={InfoGuides} />
            <Route exact path='/reminders' component={Reminders} />
            
            <Route component={NoMatch} />
          </Switch>
        </FetchUser>
      </div>
    );
  }
}

export default App;
