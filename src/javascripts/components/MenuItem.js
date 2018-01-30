// @flow

import React from 'react'
import FontAwesome from 'react-fontawesome'

type Props = {
  name: string,
  text: string,
  url: string,
  class: string,
}

const MenuItem = (props: Props) => {
  return (
    <span className="menu-item">
      <a href={props.url} target="_blank" rel="noopener noreferrer" aria-label={props.text}>
        <FontAwesome
          className={"menu-item-icon " + props.class}
          name={props.name}
          size="4x"
          tag="i"
        />
      </a>
    </span>
  )
}

export default MenuItem
