import * as React from 'react'

import styled from '../styled-components'

interface IProps {
  className?: string
  title: string
  url: string
  image?: string
}

const Work: React.SFC<IProps> = ({ className, title, url }) => (
  <a className={className} href={url}>
    {title}
  </a>
)

export default styled(Work)`
  margin: 10px;
  width: 200px;
  height: 200px;
  border: #aaa 1px solid;
`
