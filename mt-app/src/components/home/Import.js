import React , {Component}from 'react';
import '../../assets/css/Import.css';
import {List} from 'antd-mobile'
// import '../../assets/img/banner-xianyuxian.jpg'


const Item = List.Item;
const Brief = Item.Brief;
export default class Import extends Component {
    constructor(props) {
        super(props);
        this.state ={
            dataList:[]
        }
    }
    componentDidMount() {
        fetch('http://www.xiechenxi.cn/', {
        method: 'GET' // 强制加入凭据头
    })
    .then((res)=>{
        return res.json()
    })
    .then((res)=>{
        console.log(res);
        this.setState({
            dataList:res
        })
    })
    }
    render() {
        return (
        // <div>
        //     <hr />
        //     <Popover>
        //         <div className="love"> 猜你喜欢
        //             <hr /> </div>
        //     </Popover>
        //     <Popover>
        //         <div>
        //             <div><img className="img2" src={require(`../../assets/img/banner-xianyuxian.jpg`)} alt=""/></div>
        //             <div  className="font2">
        //                 <span>xianyuxian</span><br />
        //                 <span>[通用] 10元券</span><br />
        //                 <span>8元 门市价：6元</span><br />
        //                 <span className="sold">已售6</span>
        //             </div>
        //         </div> 
        //     </Popover>
        // </div>
        <div className="shop-list">
        <List renderHeader={() => '猜你喜欢'} className="my-list">
        
        {this.state.dataList.map((item,index)=>{
            return(
        <Item
            key={index}
            thumb={item.img}
            multipleLine
            onClick={() => {this.props.history.push('/detail/1')}}
        >
            <span>{item.product_name}</span>
                <Brief>
                <p>{item.description}</p>
                <div className="sl-info">
                    <p>
                    <span className="sl-price">{item.price}元</span>
                    门市价：{item.discount_price}元
                    </p>
                    <span>已售：{item.num}</span>
                </div>
                </Brief>
            
        </Item>
        )
    })}
    </List>
</div>
)
}
}