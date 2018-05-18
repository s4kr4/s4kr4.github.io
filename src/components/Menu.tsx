import * as React from 'react'

import styled from '../styled-components'
import MenuItem from './MenuItem'
import Sites from '../assets/Sites'

interface Props {
  className?: string
}

const Menu: React.SFC<Props> = ({ className }) => {
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
