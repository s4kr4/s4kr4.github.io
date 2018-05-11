import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { injectGlobal } from './styled-components'
import Container from './components/Container'

injectGlobal`
  * {
    margin: 0;
    padding: 0;
  }

  a {
    color: #000;
    text-decoration: none;
  }
`

ReactDOM.render(
  <Container />,
  document.getElementById('root')
)
