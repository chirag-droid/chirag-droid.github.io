import Link from 'next/link'

function HeaderLink({href, priority}) {
  return (
    <li
      itemProp="itemListElement" itemScope
      itemType="https://schema.org/ListItem"
      className='text-blue-600 hover:text-black'>
      <Link href={href}>{href.slice(1)}</Link>
      <meta itemProp="position" content={`${priority}`} />
    </li>
  )
}

export default HeaderLink
