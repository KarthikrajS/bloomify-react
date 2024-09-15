import React from 'react'
import { useAuthContext } from '../AuthProvider/AuthProvider'
import CartItem from '../CartItem/CartItem';

const CheckoutCart = (props) => {
    const { cart } = useAuthContext();
    const { displayTotal } = props;


    return (
        <div className="rounded-2xl bg-gray-800 z-40">
            <div className="max-w-lg pt-6 pb-8 px-8 mx-auto bg-blueGray-900">
                <div className="flex mb-10 items-center justify-between">
                    <h6 className="font-bold text-2xl text-white mb-0">Your Cart</h6>
                </div>

                <div>
                    {cart.items
                        ? cart.items.map((item, index) => {
                            if (item.quantity > 0) {
                                return <CartItem key={index} data={item} />;
                            }
                        })
                        : null}
                </div>
                <div className="p-6">
                    <div className="flex mb-6 content-center justify-between">
                        <span className="font-bold text-white">Order total</span>
                        <span className="text-sm font-bold text-white">
                            ₹{(displayTotal)}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckoutCart