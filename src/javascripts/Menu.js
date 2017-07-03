//@flow

import React, { Component } from 'react'

import MenuItem from './MenuItem.js'
import Sites from '../assets/Sites.json'

export default class Menu extends Component {
  render() {
    let sites = Sites.map((site) => {
      return (
        <MenuItem
          name={site.name}
          text={site.text}
          url={site.url}
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
