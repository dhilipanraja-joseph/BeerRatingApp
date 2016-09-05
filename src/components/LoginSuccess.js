import React ,{ Component } from 'react'
import { connect } from 'react-redux'
import { getProfile } from '../actions/UserActions'


class LoginSuccess extends Component {
  componentDidMount(){
    getProfile()
  }
  render(){
    return (
      <div>
        Logged in.....
        <p>Welcome {this.props.username}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  username: state.user.username,
})

const mapDispatchToProps = (dispatch) => ({
  getProfile: () => dispatch(getProfile())
})

export default connect(mapStateToProps,mapDispatchToProps)(LoginSuccess)
