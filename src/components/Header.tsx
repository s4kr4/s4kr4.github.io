import Link from 'next/link'
import * as React from 'react'

const Border = () => (
  <span className="text-gray-400">
    {' | '}
  </span>
)

const Header: React.FC = () => (
  <header className="flex flex-col content-center items-center pt-4 pb-2 bg-gray-darkest text-white">
    <img
      src="/images/icon-white-250.png"
      alt="icon"
      className="object-center animate-logo"
      width={80}
      height={80}
    />
    <h1 className="pt-1 text-3xl font-bold">s4kr4</h1>
    <nav className="pt-2">
      <Link href="/">
        <a>Home</a>
      </Link>
      <Border />
      <Link href="/about">
        <a>About</a>
      </Link>
      <Border />
      <Link href="/skills">
        <a>Skills</a>
      </Link>
      <Border />
      <Link href="/works">
        <a>Works</a>
      </Link>
    </nav>
  </header>
)

export default Header
