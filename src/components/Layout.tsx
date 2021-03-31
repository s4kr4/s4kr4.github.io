import React, { ReactNode } from 'react'
import Head from 'next/head'

import Header from './Header'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div className="container max-w-full items-center justify-center">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <main>
      <Header />
      {children}
      <footer>
        <hr />
        <span>© 2021</span>
      </footer>
    </main>
  </div>
)

export default Layout
