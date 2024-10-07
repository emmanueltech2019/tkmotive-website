'use client'
import antonFont from "@/fonts/Anton";
import interFont from "@/fonts/Inter";
import { Modal } from "flowbite-react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useState } from "react";
import axios from "axios";

type storeType = {
    img: any, // image
    productName: string,
    quantity: number,
    price: number,
}[]

type cartType = {
    func: () => void
    modalState: boolean
    handleV: () => void
}

const Cart = ({func, modalState, handleV}:cartType) => {
    const [store, setStore] = useState([] as storeType)
    useEffect(() => {
        // setStore(staticCart)
        let savedUserId = localStorage.getItem('userId');
        axios({
            url:"http://localhost:4000/cart/"+savedUserId,
            method:"get"
        })
        .then((res)=>{
            setStore(res.data.items)
        })
    },[false])

    return (
        <Modal show={modalState} size='4xl' position='center'>
            <Modal.Body className="py-8">
                <button className="outline-none" onClick={func}>
                    <Icon icon='mingcute:close-fill' className="text-2xl" />
                </button>
                <section>
                    <h3 className={`${antonFont} text-right text-lg`}>CART</h3>
                    <div className="lg:px-32">
                        <div className="content flex flex-col gap lg:gap-[30px] mb-6">
                            {store.length ? store.map(({ img, productName, quantity, price }, i) => (
                                <div key={productName+i} className="item py-[19px] flex items-center gap-x-5 lg:gap-x-11">
                                    {/* <div className="cart_image w-10 lg:w-14 h-10 lg:h-14 bg-slate-500">
                                    </div> */}
                                    <div className="col flex flex-col">
                                        <h3 className={`title font-extrabold text-lg`}>{productName}</h3>
                                        <div className="flex items-center gap-x-[10px]">
                                            <div className="w-7 lg:w-[33px] h-7 lg:h-[33px] bg-slate-500 rounded-full text-center flex justify-center items-center text-white border border-[--foreground-light-orange] bg-[--foreground-green] btn-shadow3">-</div>
                                            <p>{quantity}</p>
                                            <div className="w-7 lg:w-[33px] h-7 lg:h-[33px] bg-slate-500 rounded-full text-center flex justify-center items-center text-white border border-[--foreground-light-orange] bg-[--foreground-green] btn-shadow3">+</div>
                                        </div>
                                    </div>
                                    <div className="price self-end ml-auto font-light text-sm lg:text-base">
                                        <p>₦{price}</p>
                                    </div>
                                </div>
                            )) : 'nothing in cart'}
                        </div>
                        <div className={`justify-between font-bold text-sm mb-7 ${store.length ? 'flex': 'hidden'}`}>
                            {/* <div></div> */}
                            <p className="font-bold">Total</p>
                            <p className="font-bold">#{store.reduce((a, b) => a + (b.price), 0)}</p>
                        </div>
                        <button onClick={handleV} className={`w-full ${store.length ? 'flex': 'hidden'} justify-center items-center ${interFont} font-extrabold text-lg text-white px-[30px] py-3 border border-[--foreground-light-orange] rounded-[24px] bg-[--foreground-green] btn-shadow3`}>Confirm</button>
                    </div>
                </section>
            </Modal.Body>
        </Modal>
    )
}

export default Cart