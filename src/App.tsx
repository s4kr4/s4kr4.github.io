import * as React from 'react'

import styled from './styled-components'

interface IProps {
  className?: string
}

class App extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props)
  }

  public render() {
    return (
      <div className={this.props.className}>
        <header className="App-header">
          <h1 className="App-title">s4kr4</h1>
        </header>
      </div>
    )
  }
}

export default styled(App)`
  text-align: center;

  .App-header {
    background-color: #222;
    height: 3em;
    padding: 20px;
    color: white;
  }

  .App-title {
    font-size: 1.5em;
  }
`
