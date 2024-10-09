'use client'
import antonFont from "@/fonts/Anton";
import interFont from "@/fonts/Inter";
import { Modal } from "flowbite-react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useState } from "react";
import axios from "axios";

type storeType = {
    _id: string;
    img?: any, // image
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

    const handleUpdate = async () => {
        let savedUserId = localStorage.getItem('userId');
        axios({
            url:"https://api.tkmotive.com/cart/"+savedUserId,
            method:"get"
        })
        .then((res)=>{
            setStore(res.data.items)
            console.log(store)
        })
    }
    useEffect(() => {
        // setStore(staticCart)
        handleUpdate()
    },[modalState])

    const handleAction = async (productName:string, action:('add' | 'remove')) => {
        let savedUserId = localStorage.getItem('userId');
        axios.post('https://api.tkmotive.com/cart/quantiy',{
            userId: savedUserId,
            productName: productName,
            action: action
        })
        .then(response => {
            console.log(response)
            handleUpdate()
        })
        .catch(error => console.error(`add action post request ${error}`))
    }

    // const handle_state_actions = (productId: string, action:(string | number)) => {
    //     action = action == 'add' ? +1 : -1
    //     const updatedQuantity = store.map((product) => ({
    //         ...product,
    //         quantity: (product._id === productId) ? ((product.quantity <= 2 && action == -1) ? 1 : product.quantity + action) : product.quantity,
    //     }))
    //     setStore(updatedQuantity)
    // }

    const handleDelete = (productName: string) => {
        let savedUserId = localStorage.getItem('userId');
        axios.delete(`https://api.tkmotive.com/cart/${savedUserId}/${productName}`).then(response => {
            console.log(response)
            handleUpdate()
        })
        .catch(error => console.error(`delete request: ${error}`))
    }

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
                            {store.length ? store.map(({ _id, productName, quantity, price }, i) => (
                                <div key={productName+i} className="item py-[19px] flex items-center gap-x-5 lg:gap-x-11">
                                    {/* <div className="cart_image w-10 lg:w-14 h-10 lg:h-14 bg-slate-500">
                                    </div> */}
                                    <div className="col flex flex-col">
                                        <h3 className={`title font-extrabold text-lg`}>{productName}</h3>
                                        <div className="flex items-center gap-x-[10px]">
                                            <button onClick={() => handleAction(productName, 'remove')} className="w-7 lg:w-[33px] h-7 lg:h-[33px] bg-slate-500 rounded-full text-center flex justify-center items-center text-white border border-[--foreground-light-orange] bg-[--foreground-green] btn-shadow3">-</button>
                                            <p>{quantity}</p>
                                            <button onClick={() => handleAction(productName, 'add')} className="w-7 lg:w-[33px] h-7 lg:h-[33px] bg-slate-500 rounded-full text-center flex justify-center items-center text-white border border-[--foreground-light-orange] bg-[--foreground-green] btn-shadow3">+</button>
                                        </div>
                                    </div>
                                    <div className="price self-end ml-auto font-light text-sm lg:text-base">
                                        <p>₦{price}</p>
                                    </div>
                                    <button onClick={() => handleDelete(productName)}>
                                        <Icon icon='f7:trash' className="text-lg text-slate-500" />
                                    </button>
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