import * as React from 'react'

import styled from '../styled-components'
import * as logo from '../../images/icon-white-250.png'

interface Props {
  className?: string
}

const Header: React.SFC<Props> = ({ className }) => (
  <div className={className}>
    <img src={logo} className="logo" alt="logo" />
    <h2>s4kr4</h2>
  </div>
)

export default styled(Header)`
  height: 3rem;
  width: 100%;
  background: #222;
  color: white;
`
