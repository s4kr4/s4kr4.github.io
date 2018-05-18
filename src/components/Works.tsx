import * as React from 'react'
import styled from '../styled-components'

import GitHubList from './GitHubList'
import QiitaList from './QiitaList'

interface Props {
  className?: string
}

const Works: React.SFC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <GitHubList />
      <QiitaList />
    </div>
  )
}

export default styled(Works)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
