import interFont from "@/fonts/Inter";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Modal } from "flowbite-react";
import { useState } from "react";

type eventType = React.MouseEvent<HTMLButtonElement, MouseEvent>
type vType = {
    func: () => void
    modalState: boolean
}

const Verification = ({func, modalState}:vType) => {



    const handleSubmit = (e: eventType) => {
        e.preventDefault();

    };

    return (
        <Modal show={modalState} size='4xl'>
            <Modal.Body className="py-8">
                <button className="outline-none" onClick={func}>
                    <Icon icon='mingcute:close-fill' className="text-2xl" />
                </button>
                <section className="py-20">
                    <h3 className={`${interFont} text-center text-base lg:text-[40px] leading-tight font-extrabold`}>Enter confirmation code</h3>
                    <p className="text-center font-light">A 4-digit code was sent to you by our older customer</p>
                    <form onSubmit={handleSubmit} className="pt-10 lg:px-32 lg:pt-[70px]">
                        
                        <button className="w-full text-center font-semibold py-4 my-3">No referral code</button>
                        <button type="submit" className={`w-full flex justify-center items-center ${interFont} font-extrabold text-lg text-white px-[30px] py-3 border border-[--foreground-light-orange] rounded-[24px] bg-[--foreground-green] btn-shadow3`}>Confirm</button>
                    </form>
                </section>
            </Modal.Body>
        </Modal>
    )
}

export default Verification