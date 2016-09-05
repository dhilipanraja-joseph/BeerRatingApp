import React, { Component } from 'react';

export default class ShowBeer extends Component {
  render() {
    let { id ,name , description ,labels} = this.props;
    return (
      <div className='text-center'>
        <h2>{name}</h2>
        <img src={labels.medium} alt="NO IMAGE"/>
        <p>{description}</p>
      </div>
    )
  }
}
