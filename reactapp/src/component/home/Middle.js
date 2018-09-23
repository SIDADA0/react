import React, { Component } from 'react';
import {Flex,WhiteSpace} from 'antd-mobile';

export default class Middle extends Component {
  render() {
    return (
      <div className="middle">
        <WhiteSpace size="lg" />
        <Flex className="middle-content">
          <Flex.Item>
            <h3 style={{color:"#449130"}}>我们约会吧</h3>
            <p>恋人家人好朋友</p>
            <img src={require('./../../assets/img/activity1.png')} alt=""/>
          </Flex.Item>
          <Flex.Item>
          <h3 style={{color:"#cc2607"}}>低价超值</h3>
            <p>十元惠生活</p>
            <img src={require('./../../assets/img/activity2.jpg')} alt=""/>
          </Flex.Item>
          <Flex.Item>
          <h3 style={{color:"#d83191"}}>工作简餐</h3>
            <p>实惠方便选择多</p>
            <img src={require('./../../assets/img/activity3.png')} alt=""/>
          </Flex.Item>
        </Flex>
        <WhiteSpace size="lg" />
      </div>
    )
  }
}
