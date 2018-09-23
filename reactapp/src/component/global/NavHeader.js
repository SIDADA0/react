import React, { Component } from 'react';
import { NavBar, Icon ,SearchBar} from 'antd-mobile';
import {withRouter} from 'react-router-dom'

class NavHeader extends Component {
  constructor(props) {
    super(props);
    this.state={
      nowUrl:"",
      leftContent:'哈尔滨',
      childContent:null
    }
    this.back = this.back.bind(this);
  }
  componentDidMount(){
    let childContent = <SearchBar
      className="nav-search"
      placeholder="输入搜索内容"
      disabled={true}
      ref={ref => this.manualFocusInst = ref}
    />;
    let leftContent = "哈尔滨";
    if(this.props.match.url.includes("/detail")){
      leftContent = <Icon type="left" />;
      childContent = "团购详情"
    }
    this.setState({
      nowUrl:this.props.match.url,
      leftContent:leftContent,
      childContent:childContent
    })
  }
  back(){
    let nowUrl = this.state.nowUrl;
    if(nowUrl.includes('/detail')){
      this.props.history.goBack()
    }
  }
  render() {
    return (
      <div className="nav">
        <NavBar
          mode="dark"
          leftContent={this.state.leftContent}
          onLeftClick={this.back}
          rightContent={[
            <Icon key="1" type="ellipsis" />,
          ]}
        >
          {/* <SearchBar
            className="nav-search"
            placeholder="输入搜索内容"
            disabled={true}
            ref={ref => this.manualFocusInst = ref}
          /> */}
          {this.state.childContent}
        </NavBar>
      </div>
    )
  }
}
export default withRouter(NavHeader) 
