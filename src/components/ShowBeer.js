import React, { Component } from 'react';
import { addRatting } from '../actions/UserActions'

export default class ShowBeer extends Component {
  constructor(){
    super();
    this.state={
      rating : ''
    }
    this.setRating=this.setRating.bind(this);
  }
  rating(){

  }
  setRating(e){
    //console.log(e.target.value);
    this.setState({ rating : e.target.value});
  }
  render() {
   let { id ,name , description ,labels} = this.props;
  //let name = "beer" , description = 'djhaeiufuoebfobf' , labels='afsfsf';
    return (
      <div className='text-center'>
        <h2>{name}</h2>
        <img src={labels} alt="NO IMAGE"/>
        <p>{description}</p>
        <label>Rate The beer from 0-5</label>
        <select onChange={this.setRating}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button onClick={this.rating}>Submit Rating</button>
      </div>
    )
  }
}
