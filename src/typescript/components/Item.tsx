import * as React from 'react'

import Icon from './Icon'

interface Props {
  className?: string
  type?: string
  url: string
  name: string
}

const Item: React.SFC<Props> = ({ className, type, url, name }) => {
  const icon = type ? <Icon type={type} /> : null
  return (
    <li className={className}>
      {icon}
      <a href={url} target="_blank" rel="noopener noreferrer">
        {name}
      </a>
    </li>
  )
}

export default Item
