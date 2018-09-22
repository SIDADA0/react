import React from 'react';
import '../../App.css';
import 'antd-mobile/dist/antd-mobile.css';  
import { SearchBar, WhiteSpace} from 'antd-mobile';


class SearchBarExample extends React.Component {
componentDidMount() {
    this.autoFocusInst.focus();
}
onChange= (value) => {
    this.setState({ value });
};
clear = () => {
    this.setState({ value: '' });
};
handleClick = () => {
    this.manualFocusInst.focus();
}
render() {
    return (<div>
    <SearchBar placeholder="输入搜索内容" ref={ref => this.autoFocusInst = ref} />
    <WhiteSpace />
    </div>);
}
}

export default SearchBarExample;