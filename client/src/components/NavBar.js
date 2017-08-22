import React, { Component } from 'react'
import { Menu, Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth';
import { withRouter } from 'react-router-dom';

class NavBar extends Component {
  rightNavs = () => {
    const { user, dispatch, history } = this.props;

    if(user.id) {
      return(

        <Menu.Menu position='right'>
          <Link to='/pets'>
            <Menu.Item name='View Pets' />
          </Link>
          <Link to='/addpet'>
            <Menu.Item name='AddPet' />
          </Link>
          <Menu.Item name='Logout'
            onClick={() => dispatch(handleLogout(history))}
          />
        </Menu.Menu>
      );
    } else {
      return(
        <Menu.Menu position='right' >
          <Link to='/register'>
            <Menu.Item name='Register' />
          </Link>
          <Link to='/login'>
            <Menu.Item name='Login' />
          </Link>
        </Menu.Menu>
      );
    }
  }

  render() {
    return (
      <div class="row">
        <div class="col s12">
        <Menu pointing secondary >
          <Link to='/'>
            <Menu.Item name='home' />
          </Link>
          <Link to='/adoptions'>
            <Menu.Item name='Pet Adoption' />
          </Link>
          { this.rightNavs() }
        </Menu>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default withRouter(connect(mapStateToProps)(NavBar));
