import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth';
import { withRouter } from 'react-router-dom';

class NavBar extends Component {
  rightNavs = () => {
    const { user, dispatch, history } = this.props;

    if(user.id) {
      return(
        <Menu.Menu position='left'>
          <Link to='/pets'>
            <Menu.Item as='h4' name='View Pets' />
          </Link>
          <Link to='/addpet'>
            <Menu.Item as='h4' name='AddPet' />
          </Link>
          <Menu.Item as='h4'
            name='Logout'
            onClick={() => dispatch(handleLogout(history))}
          />
        </Menu.Menu>
      );
    } else {
      return(
        <Menu.Menu position='right' >
          <Link to='/register'>
            <Menu.Item as='h4' name='Register' />
          </Link>
          <Link to='/login'>
            <Menu.Item as='h4' name='Login' />
          </Link>
        </Menu.Menu>
      );
    }
  }

  render() {
    return (
      <div>
        <Menu pointing secondary >
          <Link to='/'>
            <Menu.Item as='h4' name='home' />
          </Link>
          <Link to='/adoptions'>
            <Menu.Item as='h4' name='Pet Adoption' />
          </Link>
          { this.rightNavs() }
        </Menu>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default withRouter(connect(mapStateToProps)(NavBar));
