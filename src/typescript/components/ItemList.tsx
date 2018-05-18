import * as React from 'react'
import styled from '../styled-components'

import Item from './Item'

interface Props {
  className?: string
  source: string
  items: Array<{
    id: number
    name: string
    url: string
    type?: string
  }>
}

interface State {
  marker: number
}

class ItemList extends React.Component<Props, State> {
  constructor(props: Props, state: State) {
    super(props, state)

    this.state = {
      marker: 10
    }

    this.loadMore = this.loadMore.bind(this)
  }

  render() {
    const items = this.props.items.map(item => {
      return (
        <Item
          className="item"
          key={item.id}
          name={item.name}
          url={item.url}
          type={item.type}
        />
      )
    })

    if (items.length !== 0) {
      return (
        <div className={this.props.className}>
          <div className="title">{this.props.source}</div>
          <ul className="items">
            {items.slice(0, this.state.marker)}
            {items.length > this.state.marker ? (
              <li className="item marker" onClick={this.loadMore}>
                MORE
              </li>
            ) : null}
          </ul>
        </div>
      )
    } else {
      return null
    }
  }

  loadMore() {
    this.setState({
      marker: this.state.marker + 10
    })
  }
}

export default styled(ItemList)`
  margin: 10px;
  width: 300px;
  max-width: 100%;

  .title {
    background-color: #222;
    text-align: center;
    font-size: 1.2em;
    color: #fff;
  }

  .items {
    margin: 0;
    padding-left: 0;
    text-align: left;
    overflow: auto;
    list-style-type: none;
  }

  .item {
    border: thin solid #ddd;
    padding: 3px;
  }

  .marker {
    text-align: center;
    cursor: pointer;
  }
`
