// import React, { Component } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
// import { render } from 'react-dom';
import Raven from 'raven-js';
import '../css/style.css';
import keenImage from '../assets/keen.png';

Raven.config('https://05de4eb56d71407b838cf481f7f28939@sentry.io/260297').install();

/* saving for posterity in case we need to go back to stateful
// export default class Hello extends Component {
//   render() {
//     return (
//       <div>
//         Hello from react
//         {
//
//         }
//         <img src={keenImage} alt="Commander Keen" />
//       </div>
//     );
//   }
// }
*/

// testing pre-push

const Hello = (
  <div>
    Hello from react
    {}
    <img src={keenImage} alt="Commander Keen" />
  </div>
);

export default Hello;

ReactDOM.render(<Hello />, document.getElementById('app'));
