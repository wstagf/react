import React, { Component } from 'react';

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

            <div className="modal-content formLogin" role="document" style={!this.state.isDisplay ? { display: 'none' } : {} } >
              <div className="modal-header">
                <h4 className="modal-title">Modal title</h4>
              </div>
              <div className="modal-body">One fine body...</div>
              <div className="modal-footer">
              <button type="button" className="btn btn-default">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
        </div>
      );
    }
  }
  

export default ComponentLogin;
