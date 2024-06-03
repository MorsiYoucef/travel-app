import Link from 'next/link'
import Image from 'next/image'
import { NAV_LINKS } from '@/constants'
import { Button } from '@/components/ui/button'

const Navbar = () => {
  return (
    <nav className=" flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>
      <ul className=" hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((linkk) => (
          <Link
            className=" regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
            href={linkk.href}
            key={linkk.key}
          >
            {linkk.label}
          </Link>
        ))}
      </ul>
      <div className=" lg:flexCenter hidden">
        <Button className=" rounded-full bg-black text-white" size="lg" asChild>
          <Link href="/">Login</Link>
        </Button>
      </div>
    </nav>
  )
}

export default Navbar
