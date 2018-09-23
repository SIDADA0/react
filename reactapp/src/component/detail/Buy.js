import React from 'react'
import './../../assets/css/Detail-buy.css';
let Img = (props) => {
    return (
        <div>
            <div className="detail-buy">
                <strong className="buy-cur-price">{props.curPrice}</strong>
                <span className="buy-unit">元</span>
                <span className="buy-old-price">门市价:{props.oldPrice}元</span>
                <button className="buy-btn">立即抢购</button>
            </div>
            <ul className="buy-icon">
                <li>
                    <i className="iconfont icon-tui"></i>
                    <span>支持随时退款</span>
                </li>
                <li>
                    <i className="iconfont icon-dui"></i>
                    <span>支持过期自动退</span>
                </li>
                <li>
                    <i className="iconfont icon-iconfuzhi"></i>
                    <span>已售2888</span>
                </li>
            </ul>
        </div>
        
    )
}

export default  Img ;