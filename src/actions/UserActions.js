import axios from 'axios'
import RouteActions from './RouteActions'


export function receiveProfile(profile) {
  return {
    type: 'RECEIVE_PROFILE',
    profile
  }
}

export function removeProfile() {
  return {
    type: 'REMOVE_PROFILE'
  }
}



export function register(user) {
    axios.post('/api/users/register', user)
      .then(() => {
        RouteActions.route('/login');
      })
      .catch(console.error)
}


export function login(user) {
  // console.log("hi");
//  return dispatch =>{
    axios.post('/api/users/login', user)
    .then(() => {
      //dispatch(getProfile())
      RouteActions.route('/loginSuccess');
    })
    .catch(console.error)
  //}
}

export function logout() {
  //return dispatch => {
    axios.post('/api/users/logout')
    .then(() => {
      RouteActions.route('/');
      removeProfile();
    })
    .catch(console.error)
  //}
}

export function getProfile() {
  return dispatch => {
    axios.get('/api/users/profile')
    .then(res => res.data)
    .then(profile => {
      dispatch(receiveProfile(profile))
    })
    .catch(console.error)
  }
}

export function getRandomBeer(){
  return dispatch => {
    axios.get('/api/users/profile')
    .then(res => res.data)
    .then(profile => {
      dispatch(receiveProfile(profile))
    })
    .catch(console.error)
  }
}
