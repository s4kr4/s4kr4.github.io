import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

import styled from 'styled-components'

interface IProps {
  className?: string
  name: IconDefinition
  text: string
  url: string
  modifier: string
}

const MenuItem: React.FC<IProps> = ({
  className,
  name,
  text,
  url,
  modifier,
}) => (
  <span className={className}>
    <a href={url} target="_blank" rel="noopener noreferrer" aria-label={text}>
      <FontAwesomeIcon
        className={`menu-item-icon ${modifier}`}
        icon={name}
        size="4x"
      />
    </a>
  </span>
)

export default styled(MenuItem)`
  margin: 10px;
  display: inline-block;
  transition: 0.3s;
  transform: scale(1);

  &:hover {
    transform: scale(1.3);
  }

  .github-icon {
    color: #24292e;
  }

  .qiita-icon {
    color: #79b74a;
  }

  .hatenablog-icon {
  }

  .twitter-icon {
    color: #1da1f2;
  }
`
