import * as React from 'react'

import styled from '../styled-components'
import Header from './Header'

interface IProps {
  className?: string
}

const Container: React.SFC<IProps> = ({ className }) => (
  <div className={className}>
    <Header />
  </div>
)

export default styled(Container)`
  text-align: center;
`
