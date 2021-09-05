import HeaderLink from './HeaderLink'

export default function Header() {
  return (
    <header className='bg-white sticky top-0 z-50 flex shadow-md py-4 px-2'>
      <div className='flex space-x-8 cursor-pointer mx-auto sm:ml-24'>
        <ul itemScope itemType="https://schema.org/BreadcrumbList" className='flex space-x-10'>
          <HeaderLink href="#home" priority={3}/>
          <HeaderLink href="#languages" priority={4}/>
          <HeaderLink href="#skills"priority={2}/>
          <HeaderLink href="#career"priority={1}/>
        </ul>
      </div>
    </header>
  )
}