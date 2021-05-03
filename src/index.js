import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/main.css';
import App from './components/App';

import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee , faThumbsUp , faThumbsDown,  faAngleDoubleRight, faHandPointUp } from '@fortawesome/free-solid-svg-icons'

library.add( faCheckSquare, faCoffee , faThumbsUp , faThumbsDown , faHandPointUp , faAngleDoubleRight)


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

