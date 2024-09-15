import React, { Fragment, useEffect, useState } from "react";
import Cookie from "js-cookie";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
// import { useInitialRender } from '../../../utils/useInitialRender.js'
import axios from "axios";
import { navigate } from "vike/client/router";
import { useAuthContext } from "../AuthProvider/AuthProvider";
import { jwtDecode } from 'jwt-decode'

const options = {
    style: {
        base: {
            fontSize: "32px",
            color: "#52a635",
            "::placeholder": {
                color: "#aab7c4",
            },
        },
        invalid: {
            color: "#9e2521",
        },
    },
};

const INITIAL_STATE = {
    address: "",
    city: "",
    state: "",
    pincode: "",
    error: null,
};

export const CheckoutForm = () => {
    const [data, setData] = useState(INITIAL_STATE);
    const [loading, setLoading] = useState(false);
    const [userToken, setUserToken] = useState(null);
    const { user, cart, resetCart } = useAuthContext();

    // const initialRender = useInitialRender();

    const stripe = useStripe();
    const elements = useElements();
    // const router = useRouter();

    useEffect(() => {
        if (typeof window.localStorage !== 'undefined') {
            const token = localStorage.getItem('token')
            if (token) {
                console.log(jwtDecode(token), "token_1231");
                setUserToken((token))
            }
        }
    }, [])

    // if (!initialRender) return null;

    const onChange = (e) => {
        const updateItem = (data[e.target.name] = e.target.value);
        setData({ ...data, updateItem });
    }
    // const jwt = Cookie.get("token");

    const submitOrder = async (e) => {
        e.preventDefault();
        const cardElement = elements.getElement(CardElement);
        const token = await stripe.createToken(cardElement);

        if (data.address === "") {
            setData({ ...data, error: { message: "Address is required" } });
            return;
        }

        if (data.city === "") {
            setData({ ...data, error: { message: "City is required" } });
            return;
        }

        if (data.state === "") {
            setData({ ...data, error: { message: "State is required" } });
            return;
        }

        if (data.pincode === "") {
            setData({ ...data, error: { message: "Pin Code is required" } });
            return;
        }

        if (token.error) {
            setData({ ...data, error: { message: token.error.message } });
            return;
        }



        try {
            setLoading(true);

            console.log(token, "token_stripe");
            const response = await axios.post("/api/orders/create", {
                data: {
                    amount: cart.total,
                    items: cart.items,
                    address: data.address,
                    city: data.city,
                    state: data.state,
                    pincode: data.pincode,
                    token: token.token.id,
                }, token: userToken
            })
            console.log(response, "response_ewt");

            //     const { data: response } = await client.mutate({
            //         mutation: gql`
            //   mutation CreateOrder(
            //     $amount: Int
            //     $dishes: JSON
            //     $address: String
            //     $city: String
            //     $state: String
            //     $token: String
            //   ) {
            //     createOrder(
            //       data: {
            //         amount: $amount
            //         dishes: $dishes
            //         address: $address
            //         city: $city
            //         state: $state
            //         token: $token
            //       }
            //     ) {
            //       data {
            //         id
            //         attributes {
            //           token
            //         }
            //       }
            //     }
            //   }
            // `,
            //         variables: {
            //             amount: cart.total,
            //             dishes: cart.items,
            //             address: data.address,
            //             city: data.city,
            //             state: data.state,
            //             token: token.token.id,
            //         },
            //         context: {
            //             headers: {
            //                 Authorization: `Bearer ${jwt}`,
            //             },
            //         },
            //     });

            if (response.data.createOrder.data) {
                alert("Transaction Successful, continue your shopping");
                setData(INITIAL_STATE);
                resetCart();
                // setShowCart(true);
                navigate("/");
            }
        } catch (error) {
            console.log("error===>", error);
            setData({ ...data, error: { message: error.message } });
        } finally {
            setLoading(false);
        }
    }



    return (
        <Fragment>
            <form>
                <div className="bg-white shadow-md rounded-lg p-8">
                    <h5 className="text-lg font-semibold">Your information:</h5>
                    <hr className="my-4" />
                    <div className="flex mb-6">
                        <div className="flex-1">
                            <label
                                className="block mb-2 test-gray-800 font-medium"
                                htmlFor="address"
                            >
                                Address
                            </label>
                            <input
                                id="address"
                                htmlFor="address"
                                className="appearance-none block w-full p-3 leading-5 text-gray-900 border border-gray-200 rounded-lg shadow-md placeholder-text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                                type="text"
                                name="address"
                                onChange={(e) => onChange(e)}
                                placeholder="Enter your address"
                            />
                        </div>
                    </div>
                    <div className="flex mb-6">
                        <div className="flex-1 mr-6">
                            <label
                                htmlFor="city"
                                className="block mb-2 test-gray-800 font-medium"
                            >
                                City
                            </label>
                            <input
                                type="text"
                                name="city"
                                id="city"
                                onChange={(e) => onChange(e)}
                                className="appearance-none block w-full p-3 leading-5 text-gray-900 border border-gray-200 rounded-lg shadow-md placeholder-text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                            />
                        </div>

                        <div className=" flex flex-row gap-2 w-1/2">
                            <div className="w-1/2">
                                <label
                                    htmlFor="state"
                                    className="block mb-2 test-gray-800 font-medium"
                                >
                                    State
                                </label>
                                <input
                                    type="text"
                                    name="state"
                                    id="state"
                                    onChange={(e) => onChange(e)}
                                    className="appearance-none block w-full p-3 leading-5 text-gray-900 border border-gray-200 rounded-lg shadow-md placeholder-text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                                />


                            </div>
                            <div className="w-1/2">
                                <label
                                    htmlFor="state"
                                    className="block mb-2 test-gray-800 font-medium"
                                >
                                    Pin Code
                                </label>
                                <input
                                    type="number"
                                    name="pincode"
                                    id="pincode"
                                    onChange={(e) => onChange(e)}
                                    className="appearance-none block w-full p-3 leading-5 text-gray-900 border border-gray-200 rounded-lg shadow-md placeholder-text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                                />


                            </div>
                        </div>
                    </div>
                    {cart.items.length > 0 ? (
                        <div className="p-6">
                            <div>Credit or debit card</div>
                            <div className="my-4">
                                <CardElement options={options} />
                            </div>
                            <button
                                className="inline-block w-full px-6 py-3 text-center font-bold text-white bg-green-500 hover:bg-green-600 transition duration-200 rounded-full"
                                onClick={(e) => (user ? submitOrder(e) : navigate("/auth/sign-in"))}
                                disabled={loading}
                            >
                                {loading ? "Submitting" : "Submit Order"}
                            </button>
                        </div>
                    ) : (
                        <div className="text-center">
                            <h1 className="text-2xl font-semibold">Your cart is empty</h1>
                            <p className="text-gray-500">
                                Add some items to your cart to continue
                            </p>
                        </div>
                    )}
                    <div>
                        {data.error && (
                            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                                <strong className="font-bold">Error!</strong>{" "}
                                <span className="block sm:inline">{data.error.message}</span>
                            </div>
                        )}
                    </div>
                </div>
            </form>
        </Fragment>
    );
}