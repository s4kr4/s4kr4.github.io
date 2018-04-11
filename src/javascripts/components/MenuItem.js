// @flow

import React from 'react'
import FontAwesome from 'react-fontawesome'

type Props = {
  name: string,
  text: string,
  url: string,
  modifier: string,
}

const MenuItem = (props: Props) => {
  return pug`
    span.menu-item
      a(href=props.url target="_blank" rel="noopener noreferrer" aria-label=props.text)
        FontAwesome(
          className="menu-item-icon " + props.modifier
          name=props.name
          size="4x"
          tag="i"
        )
  `
}

export default MenuItem
