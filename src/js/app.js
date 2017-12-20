import React, { Component } from 'react';
import Raven from 'raven-js'
Raven.config('https://05de4eb56d71407b838cf481f7f28939@sentry.io/260297').install()
import { render } from 'react-dom';

import '../css/style.css';

import keenImage from '../assets/keen.png';

// console.log(hello);


export default class Hello extends Component {
  render() {
    return (
      <div>
        Hello from react

        {

        }
        <img src={ keenImage } alt='Commander Keen' />
      </div>
    );
  }
}

render(<Hello />, document.getElementById('app'));
