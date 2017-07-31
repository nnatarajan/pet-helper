import React, { Component } from 'react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Login from './Login';
import Register from './Register';
import Flash from './Flash';
import Home from './Home';
import ProtectedRoute from './ProtectedRoute';
import { Switch, Route} from 'react-router-dom';
import FetchUser from './FetchUser';
import Pets from './Pets';
import Adoptions from './Adoptions'
import InfoGuides from './InfoGuides';
import Reminders from './Reminders';
import AddPet from './AddPet';
import ManagePet from './ManagePet';
import './App.css';

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
            <ProtectedRoute exact path='/pets' component={Pets} />
            <ProtectedRoute exact path='/addpet' component={AddPet} />
            <ProtectedRoute path='/managepet/:petid' component={ManagePet} />
            <Route exact path='/info' component={InfoGuides} />
            <ProtectedRoute exact path='/reminders/:petid' component={Reminders} />
            <Route exact path='/adoptions' component={Adoptions} />

            <Route component={NoMatch} />
          </Switch>
        </FetchUser>
      </div>
    );
  }
}

export default App;
