import * as React from 'react'
import { Component } from 'react'

import MenuItem from './MenuItem'
import Sites from '../../assets/Sites.json'

export default class Menu extends Component {
  render() {
    let sites = Sites.map((site, i) => {
      return (
        <MenuItem
          key={i}
          name={site.name}
          text={site.text}
          url={site.url}
          class={site.class}
        />
      )
    })
    return (
      <div className="menu">
        {sites}
      </div>
    )
  }
}
