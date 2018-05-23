import * as React from 'react'
import * as ReactDOM from 'react-dom'

import Container from './components/Container'
import registerServiceWorker from './registerServiceWorker'
import { injectGlobal } from './styled-components'

injectGlobal`
  * {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`

ReactDOM.render(<Container />, document.getElementById('root') as HTMLElement)
registerServiceWorker()
