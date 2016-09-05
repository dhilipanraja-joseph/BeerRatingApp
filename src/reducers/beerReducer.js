export default function beerReducer (state = {}, action) {
  switch(action.type){
    case 'RECEIVE_BEER': {
      return action.beer;
    }

    default:
      return state;
  }
}
