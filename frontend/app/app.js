import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Redirect} from 'react-router';
import $ from 'jquery';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler} from 'reactstrap';

import Home from './Home';
import Users from './Users';
import About from './About';
import Contacts from './Contacts';

class App extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  componentDidMount() {
    $('.navbar-collapse a').on('click', () => $('.navbar-toggler:visible').click());
  }

  render() {
    return (
      <div>
        <div>
          <Navbar sticky="top" color="light" light expand="sm">
            <NavbarToggler onClick={this.toggle}/>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav>
                <NavbarBrand tag={Link} to="/">Home1</NavbarBrand>
                <NavbarBrand tag={Link} to="/users">Users</NavbarBrand>
                <NavbarBrand tag={Link} to="/about">About</NavbarBrand>
                <NavbarBrand tag={Link} to="/contacts">Contacts</NavbarBrand>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default App;

ReactDOM.render((
    <BrowserRouter>
      <App>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/home" component={Home}/>
          <Route path="/users" component={Users}/>
          <Route path="/about" component={About}/>
          <Route path="/contacts" component={Contacts}/>
          <Route><Redirect to="/"/></Route>
        </Switch>
      </App>
    </BrowserRouter>
  ), document.getElementById('react')
);