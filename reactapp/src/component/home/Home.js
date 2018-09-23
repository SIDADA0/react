import React, { Component } from 'react';
import NavHeader from '../global/NavHeader';
import Slider from './Slider';
import Middle from './Middle';
import ShopList from './ShopList';
import './../../assets/css/Home.css';
import '../../assets/js/rem'

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state={
      
    }
  }
  
  render() {
    return (
      <div>
        <NavHeader/>
        <Slider/>
        <Middle/>
        <ShopList match={this.props}/>
      </div>
    )
  }
}
