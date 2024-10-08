'use client'
import { FC } from 'react'
import useForm from "@/hooks/useForm"
import { Modal } from "flowbite-react";
import { Icon } from "@iconify/react/dist/iconify.js";
import axios from 'axios';
import { Z_DATA_ERROR } from 'zlib';

type eventType = React.MouseEvent<HTMLFormElement, MouseEvent>
type DetailsPropsType = {
    func: () => void
    modalState: boolean
    verfication: () => void
}

const Details: FC<DetailsPropsType> = ({ func, modalState, verfication }) => {
    const [nameState, setname] = useForm('')
    const [emailState, setemail] = useForm('')
    const [phoneState, setphone] = useForm('')
    const [addressState, setaddress] = useForm('')

    const handleSubmit = async (e: eventType) => {
        e.preventDefault();

        const data = {name: nameState, email: emailState, phone: phoneState, address: addressState, userId: window?.localStorage.getItem('userId')}
        console.log(data)

        try {
            const response = await axios.post('https://api.tkmotive.com/order', data)
            console.log(response.data)
        } catch (error) {
            console.error(`post request ${error}`)
        }

        verfication();
        func()
    }

    return (
        <Modal show={modalState} size='4xl'>
            <Modal.Body className="py-8">
                <button className="outline-none" onClick={func}>
                    <Icon icon='mingcute:close-fill' className="text-2xl" />
                </button>

                <div className="contact-Entries flex flex-col lg:flex-row items-start lg:items-center justify-center gap-10">
                    <div className="col w-full lg:w-max">
                        <form className='px-[22px] py-[19px] bg-[--form-green] rounded-[9.09px]' onSubmit={handleSubmit}>
                            <div className="fname-lname flex flex-col mb-[22px]">
                                <label htmlFor="fname-lname" className='font-semibold text-sm mb-2'>First & Last Name</label>
                                <input type="text" id='fname-lname' onChange={e => setname(e)} value={nameState} required className='w-full lg:w-[272.57px] pl-7 pr-2 py-3 rounded-lg text-sm outline-none text-black placeholder:text-[--text-color-gray]' placeholder='i.e. John Doe' />
                            </div>

                            <div className="email flex flex-col mb-[22px]">
                                <label htmlFor="email" className='font-semibold text-sm mb-2'>Email</label>
                                <input type="text" id='email' onChange={e => setemail(e)} value={emailState} required className='w-full lg:w-[272.57px] pl-7 pr-2 py-3 rounded-lg text-sm outline-none text-black placeholder:text-[--text-color-gray]' placeholder='i.e. john@mail.com' />
                            </div>

                            <div className="phone flex flex-col mb-[22px]">
                                <label htmlFor="phone" className='font-semibold text-sm mb-2'>Phone</label>
                                <input type="text" id='phone' onChange={e => setphone(e)} value={phoneState} required className='w-full lg:w-[272.57px] pl-7 pr-2 py-3 rounded-lg text-sm outline-none text-black placeholder:text-[--text-color-gray]' placeholder='+234' />
                            </div>

                            <div className="address flex flex-col mb-[22px]">
                                <label htmlFor="address" className='font-semibold text-sm mb-2'>Delivery Address</label>
                                <input type="text" id='address' onChange={e => setaddress(e)} value={addressState} className='w-full lg:w-[272.57px] pl-7 pr-2 py-3 rounded-lg text-sm outline-none text-black placeholder:text-[--text-color-gray]' placeholder='Type your address' />
                            </div>

                            <button className='px-7 py-4 bg-[--foreground-green] text-[--foreground-light-orange] text-base lg:text-lg text-white rounded-lg block w-full'>
                                <div className="flex items-center justify-center w-full">
                                    <span>Send</span>
                                </div>
                            </button>
                        </form>
                    </div>
                    <div className="col">
                        <div className='pb-10'>
                            <h3 className='font-semibold text-base lg:text-lg mb-4'>Call us</h3>
                            <p className='text-[--text-color-gray]'>+2348128675585</p>
                        </div>

                        <div className='pb-10'>
                            <h3 className='font-semibold text-base lg:text-lg mb-4'>Email us</h3>
                            <p className='text-[--text-color-gray]'>info@tkmotive.com</p>
                        </div>

                        <div className='pb-10'>
                            <h3 className='font-semibold text-base lg:text-lg'>Visit us</h3>
                            <p className='text-[--text-color-gray]'>22 Amadi-Ama Rd,</p>
                            <p className='text-[--text-color-gray]'>Amadi, Port Harcourt 500001,</p>
                            <p className='text-[--text-color-gray]'>Rivers</p>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default Details