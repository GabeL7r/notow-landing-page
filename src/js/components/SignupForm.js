import React, { Component } from 'react';
import { render } from 'react-dom';

import './SignupForm.css';

export default class SignupForm extends Component {
  constructor(props) {
    super();
    this.saveInput = this.saveInput.bind(this);
    this.state = {
      email: ''
    };
  }

  saveInput(event) {
    console.log(event)
    const target = event.target;
    const value = event.target.value;
    const name = target.name;
    switch (name) {
    default:
        this.setState({
            [name]: value
        });
    }
};

  render() {
    return (
      <div>
        <form action='' className='signupform__form'>
          <input type='email' className='signupform__input' name='email' />
          <button className='signupform__button' onChange={()=> this.saveInput(event)}>Signup</button>
        </form>
      </div>
    );
  }
}