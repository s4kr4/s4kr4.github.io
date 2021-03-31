import * as React from 'react'
import { useState } from 'react'
import useInterval from 'use-interval'

import styled from 'styled-components'

const profileString = `
{
  "nickname": "s4kr4",
  "position": "Web engineer",
  "accounts": [
    "GitHub": "@s4kr4",
    "Qiita": "@s4kr4",
    "Hatena": "@s4kr4",
    "Twitter": "@s4kr4_"
  ]
}
`
const profileRow = profileString.split('\n').length

const Profile: React.FC<IProps> = ({ className }) => {
  const [displayString, setDisplayString] = useState('\n'.repeat(profileRow - 1))

  useInterval(() => {
    const chars = profileString.slice(0, displayString.length + 1)
    const brForAdd = profileRow - chars.split('\n').length
    setDisplayString(chars + '\n'.repeat(brForAdd))
  }, 40)
  
  return (
    <div className={className}>
      <pre className="profile">
        {displayString
          .split('\n')
          .map((item, i) => (
            <span key={i}>
              {item}
              <br />
            </span>
          ))}
      </pre>
    </div>
  )
}

export default styled(Profile)`
  pre {
    display: inline-block;
    width: 90%;
    max-width: 600px;
    padding-left: 10px;
    text-align: left;
    color: #fff;
    background: #222;
    border: #aaa 5px solid;
    border-radius: 10px;
  }
`
