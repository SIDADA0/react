// import React from 'react';
import '../../App.css';
// import 'antd-mobile/dist/antd-mobile.css';  
// import { SearchBar, WhiteSpace} from 'antd-mobile';


// class SearchBarExample extends React.Component {
// componentDidMount() {
//     this.autoFocusInst.focus();
// }
// onChange= (value) => {
//     this.setState({ value });
// };
// clear = () => {
//     this.setState({ value: '' });
// };
// handleClick = () => {
//     this.manualFocusInst.focus();
// }
// render() {
//     return (<div>
//     <SearchBar placeholder="输入搜索内容" ref={ref => this.autoFocusInst = ref} />
//     <WhiteSpace />
//     </div>);
// }
// }

// export default SearchBarExample;

//改版后
// import { shape } from 'prop-types';
import React, { Component } from 'react';
import {SearchBar,  NavBar, Icon } from 'antd-mobile';
import {withRouter} from 'react-router-dom' 

class SearchBarExample extends Component {
constructor(props) {
    super(props);
    this.state={
    middle:<SearchBar disabled={true} placeholder="Search" maxLength={8} />,
    leftContent :"哈尔滨"
    }
}


componentDidMount(){
    
    if(this.props.match.url.includes('/detail')){
    this.setState({
        leftContent:<Icon type="left" />,
        middle:"团购详情"
    })
    }else{
    
    }
    
    // fetch("http://www.xiechenxi.cn/welcome/detail/1",{
    // method:"GET"
    // }).then((res)=>{
    //     return res.json()
    // }).then((res)=>{
    // console.log(res);
    // })
}
render() {
    return (
    <div className="nav-bar">
        <NavBar
        mode="dark"
        leftContent={this.state.leftContent}
        onLeftClick={() => this.props.history.push('/')}
        rightContent={[
            <Icon key="1" type="ellipsis" />,
        ]}
        >
        {this.state.middle}
        </NavBar>
    </div>
    )
}
}

export default withRouter(SearchBarExample)