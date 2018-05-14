import * as React from 'react'
import styled from '../styled-components'

interface Props {
  className?: string
}

const Header: React.SFC<Props> = ({ className }) => (
  <div className={className}>
    <h2>s4kr4</h2>
  </div>
)

export default styled(Header)`
  height: 3rem;
  width: 100%;
  background: #222;
  color: white;
`
