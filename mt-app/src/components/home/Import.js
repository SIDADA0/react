import React  from 'react'
import { Popover } from 'antd-mobile';
import '../../assets/css/Import.css'
// import '../../assets/img/banner-xianyuxian.jpg'


class Import extends React.Component {
// componentDidMount() {
//     fetch('http://www.xiechenxi.cn/welcome/detail/1', {
//     method: 'GET',
//     credentials: 'include' // 强制加入凭据头
// })
// .then((res)=>{
//     return res.props()
// })
// .then((res)=>{
//     console.log(res)
// })
// }
render() {
    return (
    <div>
        <hr />
        <Popover>
            <div className="love"> 猜你喜欢
                <hr /> </div>
        </Popover>
        <Popover>
            <div>
                <div><img className="img2" src={require(`../../assets/img/banner-xianyuxian.jpg`)} alt=""/></div>
                <div  className="font2">
                    <span>xianyuxian</span><br />
                    <span>[通用] 10元券</span><br />
                    <span>8元 门市价：6元</span><br />
                    <span className="sold">已售6</span>
                </div>
            </div> 
        </Popover>
    </div>
    )
}

}

export default Import;