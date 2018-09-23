import React from 'react'
import './../../assets/css/Detail-group.css';

let Group = (props) => {
    return (
        <div className="group">
            <div className="group-title">
                {props.title}
            </div>
            <div className="group-content">
                {props.children}
            </div>
        </div>
        
    )
}

export default  Group ;