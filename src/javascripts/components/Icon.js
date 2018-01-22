import React from 'react'
import FontAwesome from 'react-fontawesome'

const Icon = (props) => {
  let icon = null
  if (props.type === 'repo') {
    icon = <FontAwesome
      className="repo-icon"
      name="book"
      size="lg"
      tag="i"
    />
  } else if (props.type === 'fork') {
    icon = <FontAwesome
      className="repo-icon"
      name="code-fork"
      size="lg"
      tag="i"
    />
  }

  return icon
}

export default Icon
