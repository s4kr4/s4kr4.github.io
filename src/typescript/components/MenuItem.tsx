import * as React from 'react'
import * as FontAwesome from 'react-fontawesome'
import styled from 'styled-components'

interface Props {
  className?: string;
  name: string,
  text: string,
  url: string,
  modifier: string,
}

const MenuItem: React.SFC<Props> = ({
  className,
  name,
  text,
  url,
  modifier,
}) => {
  return (
    <span className={className}>
      <a href={url} target="_blank" rel="noopener noreferrer" aria-label={text}>
        <FontAwesome
          className={`menu-item-icon ${modifier}`}
          name={name}
          size="4x"
          tag="i"
        />
      </a>
    </span>
  )
}

export default styled(MenuItem)`
  margin: 10px;
	display: inline-block;
	transition: .3s;
	transform: scale(1);

  &:hover {
	  transform: scale(1.3);
  }

  .github-icon {
    color: #24292E;
  }

  .qiita-icon {
    color: #79B74A;
  }

  .hatenablog-icon {

  }

  .twitter-icon {
    color: #1da1f2;
  }
`
