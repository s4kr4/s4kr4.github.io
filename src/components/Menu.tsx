import * as React from 'react'

import Sites from '../assets/Sites'
import styled from '../styled-components'
import MenuItem from './MenuItem'

interface IProps {
  className?: string
}

const Menu: React.SFC<IProps> = ({ className }) => {
  const sites = Sites.map((site, i) => {
    return (
      <MenuItem
        key={i}
        name={site.name}
        text={site.text}
        url={site.url}
        modifier={site.modifier}
      />
    )
  })

  return <div className={className}>{sites}</div>
}

export default styled(Menu)`
  margin: 30px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`
