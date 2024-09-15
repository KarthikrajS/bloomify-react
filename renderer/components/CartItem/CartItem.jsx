import React, { Fragment } from 'react'
import { useAuthContext } from '../AuthProvider/AuthProvider';

const CartItem = (props) => {
    const { data } = props;

    const { attributes , quantity } = data;
    const { addItem, removeItem } = useAuthContext();

    return (
        <Fragment>
            <div className="p-6 flex flex-wrap justify-between border-b border-blueGray-800">
                <div className="w-2/4">
                    <div className="flex flex-col h-full">
                        <h6 className="font-bold text-white mb-1">{attributes.title}</h6>
                        <span className="block pb-4 mb-auto font-medium text-gray-400">
                            {quantity} x ₹{(attributes.price)}
                        </span>
                    </div>
                </div>
                <div className="w-1/4">
                    <div className="flex flex-col items-end h-full">
                        <div className="flex justify-between">
                            <button
                                className="mr-2 inline-block mb-auto font-medium text-sm text-gray-400 hover:text-gray-200"
                                onClick={() => removeItem(data)}
                            >
                                Remove
                            </button>
                            <button
                                className="inline-block mb-auto font-medium text-sm text-gray-400 hover:text-gray-200"
                                onClick={() => addItem(data)}
                            >
                                Add
                            </button>
                        </div>
                        <span className="block mt-2 text-sm font-bold text-white">
                            ₹{(attributes.price * quantity)}
                        </span>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default CartItem