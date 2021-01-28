import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import App from './App';
import Profile from './Profile/Profile';
import Project from './Project/Project';
import Home from './Home/Home';
import User from './User/User';
import Notfound from './NotFound'
import * as serviceWorker from './serviceWorker';

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'; 

const routing = (
  <Router>
    <Navbar bg="light" variant="light">
          <Navbar.Brand href="/">Myungyeon Lee</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/profile">Profile</Nav.Link>
            {/* <Nav.Link href="/project">Project</Nav.Link> */}
            <Nav.Link href="./resume_myungyeon.pdf">Resume</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="https://www.linkedin.com/in/the-chloest" target="_blank">
              <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
            </Nav.Link>
            <Nav.Link href="https://www.facebook.com/profile.php?id=100005002607391" target="_blank">
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </Nav.Link>
            <Nav.Link href="#insta" target="_blank">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </Nav.Link>
          </Nav>
        </Navbar>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/project" component={Project} />
        <Route path="/user" component={User} />
        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();