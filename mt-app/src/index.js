import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Img from './components/home/Img';
import Import from './components/home/Import';
import SearchBarExample from './components/home/SearchBarExample';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<SearchBarExample />, document.getElementById('head'));
ReactDOM.render(<Img />, document.getElementById('img'));
ReactDOM.render(<Import />, document.getElementById('impro'));
registerServiceWorker();
