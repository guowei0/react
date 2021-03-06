import React from 'react';
import ReactDOM from 'react-dom';
import App from 'view/App.jsx';
import * as serviceWorker from './serviceWorker';
import 'common/css/style.css';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
