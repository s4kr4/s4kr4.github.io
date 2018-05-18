import * as React from 'react'
import * as FontAwesome from 'react-fontawesome'

import styled from '../styled-components'

interface Props {
  className?: string
  type: string
}

const Icon: React.SFC<Props> = ({ className, type }) => {
  let icon = null
  if (type === 'repo') {
    icon = <FontAwesome className={className} name="book" size="lg" tag="i" />
  } else if (type === 'fork') {
    icon = (
      <FontAwesome className={className} name="code-fork" size="lg" tag="i" />
    )
  }

  return icon
}

export default styled(Icon)`
  width: 30px;
  text-align: center;
`
