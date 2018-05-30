import * as React from 'react'

import styled from '../styled-components'
import Header from './Header'
import Menu from './Menu'
import Profile from './Profile'
import WorkList from './WorkList'

interface IProps {
  className?: string
}

const Container: React.SFC<IProps> = ({ className }) => (
  <div className={className}>
    <Header />
    <Menu />
    <Profile />
    <WorkList />
  </div>
)

export default styled(Container)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
`
