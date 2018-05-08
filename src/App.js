import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Jumbotron, Button, Navbar, Nav, NavItem, NavDropdown, MenuItem, PageHeader, Grid, Row, Col, footer } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
    <div className="App">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"  />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css"  />
        <link href="css/scrolling-nav.css" rel="stylesheet"/>
      <div id="page-top">
        <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#home">React-Bootstrap</a>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav>
              <NavItem eventKey={1} href="#">
                Link
              </NavItem>
              <NavItem eventKey={2} href="#">
                Link
              </NavItem>
              <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.4}>Separated link</MenuItem>
              </NavDropdown>
            </Nav>
        </Navbar>

        <PageHeader>
          Example page header <small>Subtext for header</small>
        </PageHeader>

        <Grid fluid="true">
          <Row className="show-grid">
            <Col xs={6} md={6}>
              <h2>About this page</h2>
              <p className="lead">This is a great place to talk about your webpage. This template is purposefully unstyled so you can use it as a boilerplate or starting point for you own landing page designs! This template features:</p>
              <ul>
                <li>Clickable nav links that smooth scroll to page sections</li>
                <li>Responsive behavior when clicking nav links perfect for a one page website</li>
                <li>Bootstrap's scrollspy feature which highlights which section of the page you're on in the navbar</li>
                <li>Minimal custom CSS so you are free to explore your own unique design options</li>
              </ul>
            </Col>
          </Row>
        </Grid>
        <footer className="navbar-fixed-bottom">
					<div className="container">
						<div className="row">
							<p>Criado por Thiago Augusto <a href="www.aguiarobo.com">Aguiarobo</a> </p>
						</div>
					</div>
				</footer>
      </div>
    </div>
    );
  }
}

export default App;
