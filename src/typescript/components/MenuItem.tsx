import * as React from 'react'
import * as FontAwesome from 'react-fontawesome'

interface Props {
  name: string,
  text: string,
  url: string,
  modifier: string,
}

const MenuItem: React.SFC<Props> = ({
  name,
  text,
  url,
  modifier,
}) => {
  return (
    <span className="menu-item">
      <a href={url} target="_blank" rel="noopener noreferrer" aria-label={text}>
        <FontAwesome
          className={`menu-item-icon ${modifier}`}
          name={name}
          size="4x"
          tag="i"
        />
      </a>
    </span>
  )
}

export default MenuItem
