// @flow

import React, {Component} from 'react'

import Item from './Item'

type Props = {
  source: string,
  items: Array<{
    id: number,
    name: string,
    url: string,
    type: string,
  }>,
}

type State = {
  marker: number,
}

export default class ItemList extends Component<Props, State> {
  constructor() {
    super()

    const self: any = this

    self.state = {
      marker: 10,
    }

    self.loadMoreList = this.loadMoreList.bind(this)
  }

  render () {
    // Determine item's type(Repository, Fork repository, entry)
    const items = this.props.items.map(item => {
      return(
        <Item
          key={item.id}
          name={item.name}
          url={item.url}
          type={item.type}
        />
      )
    })

    if (this.props.items.length !== 0) {
      return (
        <div className="flexbox-item">
          <div className="flexbox-title">{this.props.source}</div>
          <ul className="item-list">
            {items.slice(0, this.state.marker)}
            {
              items.length > this.state.marker
                ? <li className="item load-menu" onClick={this.loadMoreList}>MORE</li>
                : ''
            }
          </ul>
        </div>
      )
    } else {
      return null
    }
  }

  loadMoreList() {
    this.setState({
      marker: this.state.marker + 10
    })
  }
}
