import React from 'react'

import GitHubList from './GitHubList'
import QiitaList from './QiitaList'

const Works = () => {
  return (
    <div className="works">
      <GitHubList />
      <QiitaList />
    </div>
  )
}

export default Works
