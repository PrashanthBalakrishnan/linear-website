'use client'
import Link from 'next/link'
import { Logo } from './icons/logo'
import Container from './Container'
import Button from './Button'
import { HamburgerIcon } from './icons/hamburger'
import { useState } from 'react'
import classNames from 'classnames'

const Header = () => {
  const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false)
  return (
    <header className="fixed top-0 left-0 w-full border-b border-white-a08 backdrop-blur-[12px]">
      <Container className="flex h-navigation-height">
        <Link className="flex items-center text-md" href="/">
          <Logo className="w-[1.8rem] h-[1.8rem] mr-4" />
          Linear
        </Link>

        <nav
          className={classNames(
            'h-[calc(100vh_-_var(--navigation-height))] md:block fixed md:relative top-navigation-height left-0 w-full overflow-auto bg-background',
            hamburgerMenuIsOpen ? '' : 'hidden'
          )}
        >
          <ul
            className={classNames(
              'flex h-full flex-col md:flex-row md:items-center [&_li]:mx-6 [&_li]:border-b [&_li]:border-grey-dark md:[&_li]:border-none',
              '[&_a]:h-navigation-height [&_a]:flex  [&_a]:items-center [&_a]:w-full [&_a]:text-lg [&_a:hover]:text-gray [&_a]:transition-colors [ md:[&_a]:text-sm'
            )}
          >
            <li>
              <Link href="#">Features</Link>
            </li>
            <li>
              <Link href="#">Method</Link>
            </li>
            <li className="md:hidden lg:block">
              <Link href="#">Customers</Link>
            </li>
            <li className="md:hidden lg:block">
              <Link href="#">Changealog</Link>
            </li>
            <li className="md:hidden lg:block">
              <Link href="#">Integrations</Link>
            </li>
            <li>
              <Link href="#">Pricing</Link>
            </li>
            <li>
              <Link href="#">Company</Link>
            </li>
          </ul>
        </nav>
        <div className="ml-auto h-full flex items-center">
          <Link className="text-sm mr-6" href="#">
            Log in
          </Link>
          <Button href="#">Sign up</Button>
        </div>

        <button
          className="ml-6"
          onClick={() => setHamburgerMenuIsOpen((open) => !open)}
        >
          <span className="sr-only">Toggle menu</span>
          <HamburgerIcon />
        </button>
      </Container>
    </header>
  )
}
export default Header
