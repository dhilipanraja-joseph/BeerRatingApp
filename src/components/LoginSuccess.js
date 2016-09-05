import React ,{ Component } from 'react'
import { connect } from 'react-redux'
import { getProfile } from '../actions/UserActions'
import RandomBeer from './RandomBeer'

class LoginSuccess extends Component {
  componentDidMount(){
    getProfile()
  }
  render(){
    return (
      <div>
        <h2>Welcome {this.props.username}</h2>
        <RandomBeer/>
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
