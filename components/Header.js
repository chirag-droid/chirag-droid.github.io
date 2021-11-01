import Link from 'next/link'

function HeaderLink({href}) {
  return (
    <li
      className='text-blue-600 hover:text-black'>
      <Link href={href}>{href.slice(1)}</Link>
    </li>
  )
}

export default function Header() {
  return (
    <header className='bg-white sticky top-0 z-50 flex shadow-md py-4 px-2'>
      <div className='flex space-x-8 cursor-pointer mx-auto sm:ml-24'>
        <ul className='flex space-x-10'>
          <HeaderLink href="#home" />
          <HeaderLink href="#languages" />
          <HeaderLink href="#skills" />
          <HeaderLink href="#projects" />
        </ul>
      </div>
    </header>
  )
}