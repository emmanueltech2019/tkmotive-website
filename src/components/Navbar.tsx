'use client'
import Image from 'next/image'
import TkmotiveLogo from '@/assets/images/Tklogo.svg'
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from 'next/link';
import antonFont from '@/fonts/Anton';
import useToggle from '@/hooks/useToggle';
import interFont from '@/fonts/Inter';

type NavbarType = {
    func: () => void
}

const links = [
    {text: 'About', href: '#about'},
    {text: 'Services', href: '#services'},
    {text: 'Gallery', href: '#gallery'},
    {text: 'Menu', href: '#menu'},
    {text: 'Contact', href: '#contact'},
]

const TbtnIonstyle = "w-[26.91px] h-[3.84px] bg-[--foreground-light-orange] rounded-full leading-none"

const Navbar = ({func}:NavbarType) => {
    const [Ts, Tfunc] = useToggle(false);
    
  return (
    <header className='flex justify-between py-3 lg:py-6 relative'>
        {/* logo */}
        <div className="col">
            <Link href='/'><Image src={TkmotiveLogo} alt='TKMotive' className='w-full max-w-10 md:max-w-[74px] object-cover' /></Link>
        </div>
        <div className="col hidden lg:flex items-center">
            <nav className='flex gap-x-5'>
                {links.map(({ text, href }) => (
                    <Link href={href} key={text} className={`${antonFont} text-xl lg:text-2xl text-[--foreground-light-orange]`}>{text}</Link>
                ))}
            </nav>
        </div>
        <div className="col text-[--foreground-light-orange] flex items-center gap-x-3 md:gap-x-6">
            <button onClick={func} className='relative'>
                <span className='block w-[7.15px] md:w-[13px] h-[7.15px] md:h-[13px] bg-[--icon-red] rounded-full border-[1.65px] md:border-[3px] border-[--foreground-green] absolute right-0 top-[2.21px]'></span>
                <Icon icon='mdi:cart-outline' className='text-3xl md:text-5xl' />
            </button>
            <div className="toggle-button flex lg:hidden items-center py-3">
                <button onClick={Tfunc}>
                    <div className={`transition-all duration-200 ${TbtnIonstyle} ${Ts ? "rotate-45 -mb-[3.84px]" : ''}`}></div>
                    <div className={`${TbtnIonstyle} my-1 ${Ts ? "hidden" : "block"}`}></div>
                    <div className={`transition-all duration-200 ${TbtnIonstyle} ${Ts ? "-rotate-45" : ''}`}></div>
                </button>
            </div>
            <button className={`hidden lg:flex justify-center items-center uppercase ${interFont} font-extrabold text-white px-[30px] py-4 border border-[--foreground-light-orange] rounded-[30px] bg-[--foreground-orange] btn-shadow`}>Book Now</button>
        </div>

        <div></div>
    </header>
  )
}

export default Navbar