import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

import Container from './components/Container'
import '../stylesheets/index.css'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Container}>
    </Route>
  </Router>
), document.getElementById('root'))

