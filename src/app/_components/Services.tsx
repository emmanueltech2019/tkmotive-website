import serviceImg from '@/assets/images/service_img.svg'
import antonFont from '@/fonts/Anton'
import interFont from '@/fonts/Inter'
import { Icon } from '@iconify/react/dist/iconify.js'
import Image from 'next/image'

const serviceList = [
    {icon: 'carbon:delivery', title: <p className='text-center leading-tight'>Home<br /> Service</p>},
    {icon: 'bi:phone', title: <p className='text-center leading-tight'>On-Site<br /> Services</p>},
    {icon: 'solar:user-plus-outline', title: <p className='text-center leading-tight'>Personalized<br /> Services</p>},
]

const Services = () => {
  return (
    <div id='services'>
        <section className="flex flex-col-reverse lg:flex-row bg-[--foreground-green] items-center">
            <div className="col flex-1">
                <div className="service_img">
                    <Image src={serviceImg} alt="service img" className='w-full object-cover'/>
                </div>
            </div>
            <div className="col flex-1 text-white flex flex-col xl:items-center px-11 lg:px-0 py-14">
                <h2 className={`uppercase leading-tight xl:text-center ${antonFont}`}>We COVER Your Chilling Needs</h2>
                <p className='max-w-[422px]'>
                From afternoon hangs to late-night lounging, TKmotive is where your relaxation dreams become reality.
                </p>
            </div>
        </section>
        <section>
            <h2 className={`text-[--foreground-green] ${antonFont} text-center`}>OUR SERVICE STACK UP</h2>
            <p className={`text-[--foreground-green] ${antonFont} text-center text-lg lg:text-3xl`}>Chill On Your Terms – Wherever You Are</p>
            <div className='flex flex-col lg:flex-row items-center justify-center gap-y-7 gap-x-[107px] pt-14 pb-16'>
               {serviceList.map(({icon, title}, i) => (
                <div key={icon+i} className='flex flex-col items-center'>
                    <div className="icon p-5 border-[5.52px] border-[--foreground-green] rounded-full">
                        <Icon icon={icon} className='text-[102.75px] text-[--foreground-green]' />
                    </div>
                    {title}
                </div>
               ))}
            </div>
        </section>

        <section className='flex justify-center items-center py-[140px] bg-bg-image bg-cover bg-no-repeat px-[--padding-x]'>
            <div className="card bg-[--foreground-green] flex flex-col gap-6 items-center p-5 py-20 lg:p-16">
                <h2 className={`text-[--foreground-light-orange] ${antonFont} text-center`}>Ready to Chill? UP</h2>
                <p className='text-[--foreground-light-orange] max-w-[553px] text-center'>We&apos;re here! Whether you&apos;re reserving a table or inquiring about our personalized services, we&apos;re just a call away.</p>
                <button className={`flex justify-center items-center uppercase ${interFont} font-extrabold text-white px-[30px] py-4 border border-[--foreground-light-orange] rounded-[30px] bg-[--foreground-orange] btn-shadow`}>CONTACT US</button>
            </div>
        </section>
    </div>
  )
}

export default Services