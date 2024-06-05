'use client'

import { Link } from 'react-scroll'
import Image from 'next/image'
import { NAV_LINKS } from '@/constants'
import { Button } from './Button'
import { useState } from 'react'

const Navbar = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => {
    setClick(!click)
  }
  const closeMenu = () => {
    setClick(false)
  }
  return (
    <nav className=" flexBetween max-container padding-container relative z-30 py-5">
      <Link to="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>
      <ul onClick={handleClick} className=" hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((linkk) => (
          <Link
            to={linkk.href}
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onClick={closeMenu}
            className=" regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
            key={linkk.key}
          >
            {linkk.label}
          </Link>
        ))}
      </ul>
      <div className=" lg:flexCenter hidden">
        <Button
          type="button"
          title="login"
          icon="/user.svg"
          variant="btn_dark_green"
        ></Button>
      </div>
      <Image
        src="/menu.svg"
        alt="menu"
        width={32}
        height={32}
        className=" inline-block cursor-pointer lg:hidden"
      ></Image>
    </nav>
  )
}

export default Navbar
