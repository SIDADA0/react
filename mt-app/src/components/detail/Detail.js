import React, { Component } from 'react';
import SearchBarExample from './../global/SearchBarExample'

export default class Detail extends Component {
  componentDidMount(){
    console.log(this.props.match.params);
    
  }
  render() {
    return (
      <div>
        <SearchBarExample/>
      </div>
    )
  }
}
