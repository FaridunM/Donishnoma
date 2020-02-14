import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// setInterval(function() {
//   console.log(
//     "container width:" +
//       document.querySelector(".container").getBoundingClientRect().width
//   );
//   console.log(
//     "container hieght:" +
//       document.querySelector(".container").getBoundingClientRect().height
//   );
// }, 4000);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
