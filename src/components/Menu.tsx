import * as React from 'react'

import Sites from '../sites'
import styled from 'styled-components'
import MenuItem from './MenuItem'

const Menu: React.FC<IProps> = ({ className }) => {
  const sites = Sites.map((site, i) => {
    return (
      <MenuItem
        className="menu-item"
        key={i}
        name={site.icon}
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
  width: 100%;

  .menu-item {
    animation: slidein 1 0.6s ease-out;
    animation-fill-mode: backwards;

    &:nth-child(1) {
      animation-delay: 0.2s;
    }

    &:nth-child(2) {
      animation-delay: 0.4s;
    }

    &:nth-child(3) {
      animation-delay: 0.6s;
    }

    &:nth-child(4) {
      animation-delay: 0.8s;
    }
  }

  @keyframes slidein {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
