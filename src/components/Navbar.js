import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux';
//import UserStore from '../stores/UserStore'
// import UserWelcome from './UserWelcome'
import { getProfile , logout } from '../actions/UserActions'

class Navbar extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   //profile: UserStore.get()
    // }
    this._onChange = this._onChange.bind(this);
    this._logout = this._logout.bind(this);
  }

  componentDidMount() {
  //  UserStore.startListening(this._onChange);
    this.props.getProfile();

  }

  // componentWillUnmount() {
  //   //UserStore.stopListening(this._onChange);
  // }

   _onChange() {
  //   this.setState({
  //     //profile: UserStore.get()
   this.props.getProfile();
   }

  _logout() {
    logout();
  }

  render() {
    let { username } = this.props;
    // console.log(this.props);
    return (
      <nav className="navbar navbar-default navbar-static-top">
        <div className="container-fluid">

          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to='/'>React App</Link>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            {/* <UserWelcome profile={username}/> */}

            <ul className="nav navbar-nav navbar-right">
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/register'>Register</Link></li>
              <li><Link to='/login'>Login</Link></li>
              <li><a onClick={this._logout} style={{cursor:'pointer'}}>Logout</a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}


const mapStateToProps = (state) => ({
  username: state.user.username,
})

const mapDispatchToProps = (dispatch) => ({
  getProfile: () => dispatch(getProfile())
})

export default connect(mapStateToProps,mapDispatchToProps)(Navbar)
