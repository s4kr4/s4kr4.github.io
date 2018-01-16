import React, {Component} from 'react'

import Item from './Item'

export default class ItemList extends Component {
  constructor() {
    super()

    this.state = {
      marker: 10,
    }

    this.loadMoreList = this.loadMoreList.bind(this)
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
