// @flow

import React from 'react'

import Icon from './Icon'

type Props = {
  type: string,
  url: string,
  name: string,
}

const Item = (props: Props) => {
  return pug`
    li.works-ItemList_Item
      Icon(type=props.type)
      a(href=props.url target="_blank" rel="noopener noreferrer")
        = props.name
  `
}

export default Item
