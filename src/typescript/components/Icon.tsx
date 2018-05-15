import * as React from 'react'
import * as FontAwesome from 'react-fontawesome'

interface Props {
  type: string
}

const Icon: React.SFC<Props> = ({ type }) => {
  let icon = null
  if (type === 'repo') {
    icon = <FontAwesome className="repo-icon" name="book" size="lg" tag="i" />
  } else if (type === 'fork') {
    icon = (
      <FontAwesome className="repo-icon" name="code-fork" size="lg" tag="i" />
    )
  }

  return icon
}

export default Icon
