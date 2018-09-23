import React from 'react'
let Img = (props) => {
    return (
        <div className="toutu">
            <img className="toutu-img" 
            src="//p1.meituan.net/deal/34e2e5099d50ea5afae620753ec05099128321.jpg" 
            alt=""
            />
            <div className="toutu-text">
                <h2 className="toutu-title">{props.name}</h2>
                <p className="toutu-desc">{props.description}</p>
            </div>
        </div>
    )
}

export default  Img ;