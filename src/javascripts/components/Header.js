import React from 'react'

import icon from '../../images/icon-white-250.png'

const Header = () => {
  return pug`
    .header
      img(src=icon alt="logo").logo
      h2 S4KR4
  `
}

export default Header
