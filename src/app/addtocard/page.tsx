import Image from 'next/image';
import { Heart, Trash2 } from 'lucide-react';


export default function addtocard() {
    return (
        <div className="flex">
            <div className="text">
                <div className="w-[717px] h-[62px] bg-[#F7F7F7] ml-40 mt-8">
                    <h5 className="text font-medium ml-3 pt-1">Free Delivery</h5>
                    <p className="text ml-3 mt-1">
                        Applies to orders of ₹ 14 000.00 or more.
                        <u className="ml-5 font-semibold">
                            View details
                        </u>
                    </p>
                </div>
                <div className="addcard-box2">
                    <h1 className="text font-semibold text-2xl mt-3 ml-40">Bag</h1>
                </div>
                <div className="flex mt-8 ml-40">
                    <div className="w-[120px] h-[120px]">
                        <Image
                            src="/cart1.png"
                            alt="cartimage"
                            width={24}
                            height={24}
                            layout="responsive"
                        />
                    </div>
                    <div className="ml-5 w-[537px] h-[170px]">
                        <div className="flex">
                            <h3 className="text font-bold">Nike Dri-FIT ADV TechKnit Ultra</h3>
                            <h2 className="text font-semibold ml-44">MRP: ₹ 3 895.00</h2>
                        </div>
                        <p className='w-[235px] font-light text-[#757575] mt-1'>Men's Short-Sleeve Running Top Ashen Slate/Cobalt Bliss</p>
                        <div className="flex mt-2">
                            <h5 className='text-[#757575]'>Size L</h5>
                            <h5 className='text-[#757575] ml-10'>Quantity 1</h5>
                        </div>
                        <div className="flex gap-3 mt-3">
                            <Heart />
                            <Trash2 />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[350px] h-[295px] ml-10 mt-6">
                <h1 className='text text-2xl ml-2 mt-1'>Summary</h1>
                <div className="text flex gap-44 ml-2 mt-4">
                    <h5>Subtotal</h5>
                    <h6>₹ 20 890.00</h6>
                </div>
                <div className="text flex mb-4 ml-2 gap-16 mt-2">
                    <h5>Estimated Delivery & Handling</h5>
                    <h6>Free</h6>
                </div>
                <hr />
                <div className="text flex mb-4 ml-2 gap-[200px] mt-3">
                    <h5>Total</h5>
                    <h6>₹ 20 890.00</h6>
                </div>
                <hr />
                <button className='bg-black text-white pl-24 pr-24 pt-5 pb-5 rounded-[40px] mt-12 ml-3'>Member Checkout</button>
            </div>
        </div>
    )
}

