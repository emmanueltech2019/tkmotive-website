import logo from '@/assets/images/Tklogo.svg';
import Image from 'next/image';
import { Icon } from '@iconify/react/dist/iconify.js';
import Link from 'next/link';

const contactLinks = [
    { icon: 'fluent:mail-24-filled', text: 'MAIL', href: 'mailto:info@tkmotive.com' },
    { icon: 'bi:phone-fill', text: 'PHONE', href: 'tel:08128675585' },
    { icon: 'mdi:location', text: 'LOCATION', href: 'https://maps.app.goo.gl/bajEhtecHC8apgCt6' }
]

const Contact = () => {
    return (
        <div className='px-[--padding-x] pt-11 lg:pt-20 flex items-center justify-between' id='contact'>
            <div className="col">
                <div className="logo">
                    <Image src={logo} alt='logo' className='w-full object-cover' />
                </div>
            </div>
            <div className="col">
                <h3 className='pb-4 lg:w-[277px]'>CONTACT US TODAY!</h3>
                {contactLinks.map(({ icon, text, href }) => (
                    <div key={text} className='flex gap-[14px] items-center mb-6'>
                        <Icon icon={icon} className='text-[--foreground-green] text-lg lg:text-xl' />
                        <Link href={href} className='text-lg lg:text-xl'>{text}</Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Contact