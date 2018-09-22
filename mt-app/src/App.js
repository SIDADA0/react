import React from 'react';
import './App.css';
import { Carousel, WingBlank } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';  
import { SearchBar, Button, WhiteSpace } from 'antd-mobile';

class SearchBarExample extends React.Component {
  state = {
    value: '美食',
  };
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
      <WingBlank><div className="sub-title">Normal</div></WingBlank>
      <SearchBar placeholder="Search" maxLength={8} />
      <WhiteSpace />
      <WingBlank><div className="sub-title">AutoFocus when enter page</div></WingBlank>
      <SearchBar placeholder="自动获取光标" ref={ref => this.autoFocusInst = ref} />
      <WhiteSpace />
      <WingBlank><div className="sub-title">Focus by operation</div></WingBlank>
      <SearchBar
        placeholder="手动获取获取光标"
        ref={ref => this.manualFocusInst = ref}
      />
      <WhiteSpace />
      <WingBlank>
        <Button
          onClick={this.handleClick}
        >click to focus</Button>
      </WingBlank>
      <WhiteSpace />
      <WingBlank><div className="sub-title">Show cancel button</div></WingBlank>
      <SearchBar
        value={this.state.value}
        placeholder="Search"
        onSubmit={value => console.log(value, 'onSubmit')}
        onClear={value => console.log(value, 'onClear')}
        onFocus={() => console.log('onFocus')}
        onBlur={() => console.log('onBlur')}
        onCancel={() => console.log('onCancel')}
        showCancelButton
        onChange={this.onChange}
      />
    </div>);
  }
}



class App extends React.Component {
  state = {
    data: ['1', '2', '3'],
    imgHeight: 176,
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 100);
  }
  render() {
    return (
      <WingBlank>
        <Carousel
          autoplay={false}
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map(val => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>
    );
  }
}

export default App;