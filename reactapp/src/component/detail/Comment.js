import React from 'react'
import './../../assets/css/Detail-comment.css';
let Comment = (props) => {
    return (
        <div className="con-container">  
            <div className="com-user">
                <img src="http://p1.meituan.net/mmc/9eb02e99626203347ba0237ac7699f924241.png@74w_74h_1e_1c" alt=""/>
                <div className="com-user-info">
                    <div className="user-name">
                        {props.item.username}
                    </div>
                    <div>
                        <span>星级</span>
                        <span className="com-date">{props.item.time}</span>
                    </div>
                </div>
            </div>
            <div className="com-content">
                <p>{props.item.content}</p>
                {
                    props.item.imgs.map((img,index)=>{
                        return <img key={index} src={img.path} alt=""/>
                    })
                }
            </div>
        </div>
    )
}

export default Comment ;