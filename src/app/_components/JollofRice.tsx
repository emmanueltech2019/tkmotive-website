import Image from 'next/image'
import React from 'react'
import jollof_rice from '@/assets/images/jollof_rice.svg'
import antonFont from '@/fonts/Anton'
import interFont from '@/fonts/Inter'

const JollofRice = () => {
  return (
    <div>
        <section className='flex flex-col-reverse lg:flex-row bg-[--foreground-light-orange] items-center'>
            <div className="col flex-1 w-full">
                <div className="col-image w-full">
                    <Image src={jollof_rice} alt='jollof rice' className='w-full object-cover' />
                </div>
            </div>
            <div className="col flex-1 px-10 lg:pr-0 xl:pl-20 py-16 lg:py-0">
                <h2 className={`pb-4 text-[--foreground-green] leading-[1.2] uppercase ${antonFont}`}>Our Jollof <br />rice is more <br />than a meal</h2>
                <p className='lg:w-8/12 pb-6'>it’s an experience. Infused with rich spices and cooked to perfection, it’s a must-try for first-timers and returning guests alike.</p>
                <button className={`flex justify-center items-center uppercase ${interFont} font-extrabold text-[--foreground-light-orange] px-[30px] py-4 border border-white rounded-[30px] bg-[--foreground-green] btn-shadow2`}>Order Now</button>
            </div>
        </section>
    </div>
  )
}

export default JollofRice