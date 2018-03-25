//  below is for stateful
import React, { Component } from 'react';
import { render } from 'react-dom';
//  above is for stateful

//  below is stateless
//  import React from 'react';
//  import ReactDOM from 'react-dom';
//  above is stateless

import Raven from 'raven-js';
import '../css/style.css';
import backgroundImg from '../assets/sf.jpg';

Raven.config('https://05de4eb56d71407b838cf481f7f28939@sentry.io/260297').install();

//  below saving for posterity in case we need to go back to stateful
export default class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className='main'>
        <div className="main_sidebar">
          <p>No</p>
          <p>Tow</p>
        </div>

        <div className="main_background" style={{ backgroundImage: `url(${backgroundImg})`, backgroundSize: 'cover', width: '95%', height: '96%', borderRadius: 12 }}></div>

        <div className="main_content">
          <h1 className="main_header">NoTow</h1>
          <h2 className="main_subheader">Deciper Parking Signs</h2>
          <h3 className="main_subheader-two">Park Safely Anywhere</h3>
        </div>

      </div>
    );
  }
}

render(<Hello />, document.getElementById('app'));
//  above saving for posterity in case we need to go back to stateful

//  below is stateless
// const Hello = (
//   <div>
//     Hello from react
//     {}
//     <img src={keenImage} alt="Commander Keen" />
//   </div>
// );
//
// export default Hello;
//
// ReactDOM.render(<Hello />, document.getElementById('app'));
//  above is stateless
