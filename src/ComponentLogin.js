import React, { Component } from 'react';
import {  Button } from 'react-bootstrap';

class ComponentLogin extends Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleClick = this.handleClick.bind(this);

      this.state = {
        isDisplay: false
      };
    }
  
    handleClick() {
      this.setState({ isDisplay: !this.state.isDisplay });
    }
  
    render() {

      return (
        <div>
            <span href="#" onClick={this.handleClick}>Login</span>
            <div className="formLogin " style={!this.state.isDisplay ? { display: 'none' } : {} } > 
                testes
            </div>
        </div>
      );
    }
  }
  

export default ComponentLogin;
