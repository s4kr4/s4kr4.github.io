import * as React from 'react'

import Icon from './Icon'

interface Props {
  type: string,
  url: string,
  name: string,
}

const Item: React.SFC<Props> = ({
  type,
  url,
  name
}) => {
  return (
    <li>
      <Icon type={type} />
      <a href={url} target="_blank" rel="noopener noreferrer">{name}</a>
    </li>
  )
}

export default Item
