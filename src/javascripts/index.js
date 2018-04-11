import React from 'react'
import ReactDOM from 'react-dom'

import Container from './components/Container.js'
import '../stylesheets/index.scss'

ReactDOM.render((pug`
  .main
    Container
`), document.getElementById('root'))
