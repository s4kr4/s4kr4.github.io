import React, { Component } from 'react'

import Icon from './Icon'

const Item = (props) => {
  return(
    <li className="item">
      <Icon type={props.type} />
      <a href={props.url} target="_blank" rel="noopener noreferrer">{props.name}</a>
    </li>
  )
}

export default Item
