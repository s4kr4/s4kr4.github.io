import * as React from 'react'

import styled from '../styled-components'

interface IProps {
  className?: string
}

interface IState {
  profileString: string
  displayString: string
  interval: number
}

class Profile extends React.Component<IProps, IState> {
  constructor(props: IProps, state: IState) {
    super(props, state)

    this.state = {
      profileString: `
{
  "nickname": "s4kr4",
  "position": "Web engineer",
  "accounts": [
    "GitHub": "@s4kr4",
    "Qiita": "@s4kr4",
    "Hatena": "@s4kr4",
    "Twitter": "@s4kr4_"
  ]
}
`,
      displayString: '',
      interval: 0,
    }

    this.tick = this.tick.bind(this)
  }

  tick() {
    const displayStringLength = this.state.displayString.length

    this.setState({
      displayString: this.state.profileString.slice(0, displayStringLength + 1),
    })

    if (displayStringLength === this.state.profileString.length) {
      window.clearInterval(this.state.interval)
    }
  }

  componentDidMount() {
    this.setState({
      interval: window.setInterval(this.tick, 5),
    })
  }

  render() {
    const displayString = this.state.displayString
      .split('\n')
      .map((item, i) => (
        <span key={i}>
          {item}
          <br />
        </span>
      ))

    return (
      <div className={this.props.className}>
        <pre className="profile">{displayString}</pre>
      </div>
    )
  }
}

export default styled(Profile)`
  width: 100%;

  .profile {
    display: inline-block;
    width: 90%;
    max-width: 600px;
    padding-left: 10px;
    text-align: left;
    color: #fff;
    background: #222;
    border: #aaa 5px solid;
    border-radius: 10px;
  }
`
