import React from 'react'

import GitHubList from './GitHubList'
import QiitaList from './QiitaList'

const Works = () => {
  return pug`
    .works
      GitHubList
      QiitaList
  `
}

export default Works
