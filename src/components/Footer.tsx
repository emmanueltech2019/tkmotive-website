import Link from 'next/link'
import React from 'react'

const links = [
  { text: 'About', href: '#about' },
  { text: 'Services', href: '#services' },
  { text: 'Gallery', href: '#gallery' },
  { text: 'Menu', href: '#menu' },
  { text: 'Contact', href: '#contact' },
]

const Footer = () => {
  return (
    <div className='pt-[68px] lg:pt-[120px] pb-3 px-[--padding-x]'>
      <div className="row flex gap-5 lg:gap-6 text-base lg:text-sm flex-wrap">
        {links.map(({ text, href }) => (
          <Link href={href} key={text} className=''>{text}</Link>
        ))}
      </div>
      <div className="row flex items-center justify-between gap-4 md:gap-7">
        <div className="line w-full lg:w-[80%] h-[1px] bg-black"></div>
        <p className='text-nowrap'>&copy; COPY RIGHT, 2024.</p>
      </div>
    </div>
  )
}

export default Footer