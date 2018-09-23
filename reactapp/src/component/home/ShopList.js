import React, { Component } from 'react';
import { List} from 'antd-mobile';

export default class ShopList extends Component {
  constructor(props) {
    super(props);
    this.state={
      dataList:[]
    }
  }
  componentDidMount(){
    fetch('http://www.xiechenxi.cn/', { // 在URL中写上传递的参数
      method: 'GET',
      headers: new Headers({
        'Accept': 'application/json' // 通过头指定，获取的数据类型是JSON
      })
    })
    .then((res)=>{
      return res.json() // 返回一个Promise，可以解析成JSON
    })
    .then((res)=>{
      // 获取JSON数据
      
      this.setState({
        dataList:res
      })
    })
  }
  render() {
    const Item = List.Item;
    const Brief = Item.Brief;
    let item = this.state.dataList.map((item,index)=>{
      return(
        <Item
          key={index}
          thumb={item.img}
          multipleLine
          onClick={() => {this.props.match.history.push('/detail/'+item.product_id)}}
        >
          <span>{item.product_name}</span> 
          <Brief>
            <p>{item.description}</p> 
            <div>
              <span className="price">{item.price}元</span>
              门市价：{item.discount_price}元 
              <span className="pull-rigt">已售{item.num?item.num:0}</span>
            </div> 
          </Brief>
        </Item>
      )
    });
    return (
      <div className="shop-list">
        <List renderHeader={() => '猜你喜欢'} className="my-list">
          {item}
        </List>
      </div>
      
    );
  }
}
