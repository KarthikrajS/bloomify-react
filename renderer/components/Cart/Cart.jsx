import React, { Fragment, useEffect, useState } from 'react'
import CartItem from '../CartItem/CartItem';
import { useAuthContext } from '../AuthProvider/AuthProvider';
import { redirect, render } from 'vike/abort';

const Cart = (props) => {
    const{cartRedirect} = props
    const [cartData, setCartData] = useState([]);
    const total = cartData.total;
    const displayTotal = Math.abs(total);
    const { user } = useAuthContext();

    
    useEffect(() => {
        if (typeof window.localStorage != "undefined" && !!user)
            setCartData(JSON.parse(localStorage.getItem('cart')))
    }, [])

  

    console.log(cartData?.items, "cartData");
    return (<Fragment>
        <section className="fixed right-20 top-20 z-40">
            <div className="relative">

                {(
                    <div className="rounded-3xl co bg-gray-800">
                        <div className="max-w-lg pt-6 pb-8 px-8 mx-auto">
                            <div className="flex mb-10 items-center justify-between">
                                <h6 className="font-bold text-2xl text-white mb-0">
                                    Your Cart
                                </h6>
                            </div>

                            <div>
                                {cartData?.items
                                    ? cartData?.items.map((item, index) => {
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
                                        ${(displayTotal)}
                                    </span>
                                </div>
                                <button
                                    onClick={(e) => cartRedirect(e)}
                                    className="inline-block w-full px-6 py-3 text-center font-bold text-white bg-[#2879fe] hover:bg-blue-600 hover:cursor-pointer transition duration-200 rounded-full"
                                >
                                    {user ? "Continue To Pay" : "Login to Order"}
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    </Fragment>)
}

export default Cart