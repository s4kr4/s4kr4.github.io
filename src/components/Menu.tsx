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
        className="menu-item"
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
  width: 100%;

  .menu-item {
    animation: slidein 1 0.6s ease-out;
    animation-fill-mode: backwards;

    &:nth-child(2) {
      animation-delay: 0.2s;
    }

    &:nth-child(3) {
      animation-delay: 0.4s;
    }

    &:nth-child(4) {
      animation-delay: 0.6s;
    }
  }

  @keyframes slidein {
    from {
      transform: translateX(1000px) rotate(270deg);
    }
    to {
      transform: translateX(0) rotate(0deg);
    }
  }
`
