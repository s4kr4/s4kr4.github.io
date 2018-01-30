import React from 'react'

import MenuItem from './MenuItem'
import Sites from '../../assets/Sites.json'

const Menu = () => {
  const sites = Sites.map((site, i) => {
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

export default Menu
