import * as React from 'react'

import MenuItem from './MenuItem'
import Sites from '../../assets/Sites'

const Menu = () => {
  const sites = Sites.map((site, i) => {
    return (
      <MenuItem
        key={i}
        name={site.name}
        text={site.text}
        url={site.url}
        modifier={site.modifier}
      />
    )
  })

  return (
    <div className="menu">
      {sites}
    </div>
  )
}

export default Menu
