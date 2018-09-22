import React from 'react';
import { Popover } from 'antd-mobile';
import img1 from '../../assets/img/activity1.png';
import img2 from '../../assets/img/activity2.jpg';
import img3 from '../../assets/img/activity3.png';
import  '../../assets/css/Img.css';

class Img extends React.Component {
render() {
    return (
    <div className="center">
    <hr />
            <Popover><div className="flo">
                <div className="font">
                <span id="c1">我们约会啊</span>
                <br />
                <span>恋人家人好朋友</span>
                </div>
                <img src={img1} alt=""/></div></Popover>
            <Popover><div className="flo">
                <div className="font">
                <span id="c2">低价超值</span>
                <br />
                <span>十元惠生活</span>
                </div>
                <img src={img2} alt=""/></div></Popover>
            <Popover><div className="flo">
            <div className="font">
            <span id="c3">工作简餐</span>
                <br />
                <span>实惠方便选择多</span>
            </div>
            <img src={img3} alt=""/></div></Popover>
        {/* <div>233333<img src={require(`../../assets/img/activity1.png`)}/></div>
        <div><img src={require(`../../assets/img/activity2.jpg`)}/></div>
        <div><img src={require(`../../assets/img/activity3.png`)}/></div> */}
    </div>
    )
}
}

export default Img;