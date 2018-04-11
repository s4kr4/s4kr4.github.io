import React from 'react'

import MenuItem from './MenuItem'
import Sites from '../../assets/Sites.json'

const Menu = () => {
  const sites = Sites.map((site, i) => {
    return pug`
      MenuItem(
        key=i
        name=site.name
        text=site.text
        url=site.url
        modifier=site.class
      )
    `
  })

  return pug`
    .menu
      = sites
  `
}

export default Menu
