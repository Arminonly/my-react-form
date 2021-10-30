import React from 'react'
import './header.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import HomePage from '../content/homePage'
import Login from '../content/login'
import Registry from '../content/registry'
import ErrorPage from '../content/errorPage'

export default function Header() {
  return (
    <Router>
      <div className="header">
        <ul className="routeItem">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/registry">Registry</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/registry">
            <Registry/>
          </Route>
          <Route>
            <ErrorPage/>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
