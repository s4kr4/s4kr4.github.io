import * as React from 'react'

import styled from '../styled-components'
import Work from './Work'

interface IProps {
  className?: string
}

const Works = [
  {
    title: 'sample1',
    url: 'https://s4kr4.com/',
  },
  {
    title: 'sample2',
    url: 'https://s4kr4.com/',
  },
  {
    title: 'sample3',
    url: 'https://s4kr4.com/',
  },
  {
    title: 'sample4',
    url: 'https://s4kr4.com/',
  },
]

const WorkList: React.SFC<IProps> = ({ className }) => {
  const works = Works.map((work, i) => {
    return <Work key={i} title={work.title} url={work.url} />
  })

  return <div className={className}>{works}</div>
}

export default styled(WorkList)`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
