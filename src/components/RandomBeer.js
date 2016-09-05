import React ,{ Component } from 'react'
import { connect } from 'react-redux'
import { getRandomBeer , getBeerinfo } from '../actions/UserActions'
import ShowBeer  from './ShowBeer'

class RandomBeer extends Component {
  constructor(){
    super();
  }
  componentDidMount(){
    getRandomBeer();
  }
  getBeer(){
    // console.log('beer');
    getRandomBeer();
  }
  render(){
    //console.log(this.props);
    return (
      <div>
        {/* <h3>Get Beer</h3> */}
        <button onClick={this.getBeer}>Get Beer</button>
        <ShowBeer beer={this.props.beer}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  beer: state.beer.data,
})

const mapDispatchToProps = (dispatch) => ({
  getRandomBeer: () => dispatch(getRandomBeer()),
  // getBeerinfo: () => dispatch(getBeerinfo()),
})

export default connect(mapStateToProps,mapDispatchToProps)(RandomBeer)
