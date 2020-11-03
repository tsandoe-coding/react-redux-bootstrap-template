import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome} from "@fortawesome/free-solid-svg-icons";

const App = () => {
  return (
      <Router>
          <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
              <Link to="/home"><Navbar.Brand><FontAwesomeIcon icon={faHome} size="2x" style={{display: "inline-block"}}/></Navbar.Brand></Link>
              <Navbar.Toggle aria-controls="collapse-nav" />
              <Navbar.Collapse id="collapse-nav">
                  <Nav className="mr-auto">
                      <Link to="/about"><Nav.Link>About</Nav.Link></Link>
                      <NavDropdown title="Drop Down Title" id="top-nav-dropdown">
                          <Link to="/"><NavDropdown.Item>Dropdown 1</NavDropdown.Item></Link>
                          <NavDropdown.Divider />
                          <Link to="/"><NavDropdown.Item>Dropdown 2</NavDropdown.Item></Link>
                      </NavDropdown>
                  </Nav>
              </Navbar.Collapse>
          </Navbar>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
              <Route path="/home">
                  <Home />
              </Route>
              <Route path="/about">
                  <About />
              </Route>
              <Route path="/">
                  <Home />
              </Route>
          </Switch>
      </Router>
  );
};


export default App;
