import * as React from 'react'

import styled from '../styled-components'

interface IProps {
  className?: string
  title: string
  url: string
  image?: string
}

const Work: React.SFC<IProps> = ({ className, title, url, image }) => (
  <a className={className} href={url}>
    {image ? <img src={image} /> : null}
    {title}
  </a>
)

export default styled(Work)`
  margin: 10px;
  width: 120px;
  height: 120px;
  border: #aaa 1px solid;

  img {
    max-width: 100%;
  }
`
