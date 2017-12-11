import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import PecentApp from './PecentApp';
// import ClockApp from './ClockApp';
import Post from './Post';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Post />, document.getElementById('root'));
registerServiceWorker();
