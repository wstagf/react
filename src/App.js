import React, { Component } from 'react';
import './App.css';
import './css/scrolling-nav.css';
import './css/style.css';

import {  Navbar, Nav, NavItem } from 'react-bootstrap';

import ComponentLogin from './ComponentLogin';
import ComponentMenuPrincipal from './ComponentMenuPrincipal';
import ComponentSecaoConteudo from './ComponentSecaoConteudo';


class App extends Component {

  render() {
    return (
    <div className="App">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"  />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css"  />
      <div >

        <Navbar fixedTop>
            <Navbar.Header>
              <Navbar.Brand>
                <a>React Ipsum</a>
              </Navbar.Brand>
            </Navbar.Header>
            <ComponentMenuPrincipal/>
            <Nav pullRight>
              <NavItem eventKey={5}>
                <ComponentLogin />
              </NavItem>
            </Nav>
        </Navbar>

        <ComponentSecaoConteudo/>

        <Navbar fixedBottom className="rodapeCreditos">
          <p>Criado por Thiago Augusto <a href="http://www.aguiarobo.com" target="_blank" rel="noopener noreferrer">Aguiarobo</a> </p>
        </Navbar>
      </div>
    </div>
    );
  }
}

export default App;
