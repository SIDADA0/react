    import React , { Component } from 'react';
    import ReactDOM from 'react-dom';
    import './index.css';
    import App from './App';
    import Img from './components/home/Img';
    import Import from './components/home/Import';
    import SearchBarExample from './components/global/SearchBarExample';
    // import registerServiceWorker from './registerServiceWorker';
    import { BrowserRouter } from 'react-router-dom';

    // ReactDOM.render(<App />, document.getElementById('root'));
    // ReactDOM.render(<SearchBarExample />, document.getElementById('head'));
    // ReactDOM.render(<Img />, document.getElementById('img'));
    // ReactDOM.render(<Import  history={this.props.history}/>, document.getElementById('impro'));
    // registerServiceWorker();
    export default class Home extends Component {
        componentDidMount(){
        
        }
        render() {
        return (
            <div>
            <SearchBarExample/>
            <App/>
            <Img/>  
            <Import history={this.props.history}/>
            </div>
        )
        }
    }
    
    // ReactDOM.render(<Home />, document.getElementById('root'));

ReactDOM.render(
<BrowserRouter>
    <Home />
</BrowserRouter>

, document.getElementById('root'));