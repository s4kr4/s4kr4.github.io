import React from 'react'

const Footer = () => {
  return pug`
    .footer
      hr
      | Hosted on 
      a(href="https://github.com/s4kr4/s4kr4.github.io" target="_blank" rel="noopener noreferrer") GitHub
      br
      | © 2017 s4kr4
  `
}

export default Footer
