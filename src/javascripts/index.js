import React from 'react'
import ReactDOM from 'react-dom'
import { Route, BrowserRouter } from 'react-router-dom'

import Container from './components/Container'
import '../stylesheets/index.css'

ReactDOM.render((
  <BrowserRouter>
    <div>
      <Route exact={true} path='/' component={Container} />
    </div>
  </BrowserRouter>
), document.getElementById('root'))
