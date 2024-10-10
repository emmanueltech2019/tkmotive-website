import interFont from "@/fonts/Inter";
import { Icon } from "@iconify/react/dist/iconify.js";
import axios from "axios";
import { Modal } from "flowbite-react";
import { useState } from "react";
import Swal from "sweetalert2";

type eventType = React.MouseEvent<HTMLButtonElement, MouseEvent>
type vType = {
    func: () => void
    modalState: boolean
}

const Verification = ({ func, modalState }: vType) => {

    const [VCode, setVCode] = useState<string[]>(new Array(4).fill(""));
    const [error, setError] = useState<string>("");

    const handleChange = (e: any, i: any) => {
        if (isNaN(e.target.value)) return false;
        setVCode([
            ...VCode.map((data, indx) => (indx === i ? e.target.value : data)),
        ]);
        if (e.target.value && e.target.nextSibling) e.target.nextSibling.focus();
        if (!e.target.value && e.target.previousSibling) e.target.previousSibling.focus();
    };
    // Handle pasting OTP
    const handlePaste = (e: any) => {
        const pasteData = e.clipboardData.getData('text');
        const pasteValues = pasteData.split('').slice(0, 4);  // Limiting to 4 digits
        if (pasteValues.length === 4 && pasteValues.every((char:any) => !isNaN(char))) {
            setVCode(pasteValues);
        }
    };

    const handleSubmit = async (e: eventType) => {
        e.preventDefault();

        let result: string = "";
        VCode.forEach((a) => {
            if (!a) {
                console.log("Please fill all fields");
            } else {
                result += a;
            }
        });
        if (!result || result.length !== 4) {
            console.log("Please fill all fields");
            return;
        }
        let res: number = Number(result);

        // TODO: validate code and close modal if valid
        const data = { orderId: window?.localStorage.getItem('orderId'), verificationCode: res }
        try {
            const response = await axios.post('https://api.tkmotive.com/order/verify', data)
            window.localStorage.removeItem('orderId');
            setError('')
            Swal.fire({
                title: 'SUCCESS',
                icon: 'success',
                confirmButtonText: 'OK'
            })
            func()
        } catch (e:any) {
            if(e.response.data.message == "Invalid verification code") setError(e.response.data.message)
        }

        // Reset OTP input fields
        setVCode(new Array(4).fill(""));
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
                    <form className="pt-10 lg:px-32 lg:pt-[70px]">
                        <div className="code-f flex justify-center items-center gap-2" onPaste={handlePaste}>
                            {VCode.map((data, i) => (
                                <input
                                    title={`OTP_Code_${i}`}
                                    key={"input_" + i}
                                    type="text"
                                    id="N1"
                                    value={data}
                                    maxLength={1}
                                    className="w-[48px] md:w-[69.68px] h-[48px] md:h-[69.68px] text-base text-center lg:text-lg rounded-[12px] md:rounded-[17.42px] border-[1.45px] border-[#C5C6CC] p-[12px] md:py-[17.42px] px-[18px] md:px-[23.23px] outline-[--foreground-green]"
                                    onInput={(e) => { handleChange(e, i); }}
                                    onKeyDown={(e: any) => { if (e.key === 'Backspace' && !data && e.target.previousSibling) e.target.previousSibling.focus(); }}
                                />
                            ))}
                        </div>
                        <div className="text-center py-2 text-sm text-[red]">{error}</div>

                        <div className="w-full py-4 my-3"></div>
                        <button onClick={handleSubmit} type="submit" className={`w-full flex justify-center items-center ${interFont} font-extrabold text-lg text-white px-[30px] py-3 border border-[--foreground-light-orange] rounded-[24px] bg-[--foreground-green] btn-shadow3`}>Confirm</button>
                    </form>
                </section>
            </Modal.Body>
        </Modal>
    )
}

export default Verification