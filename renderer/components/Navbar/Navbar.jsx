import React, { Fragment, useEffect, useState } from "react";
import { usePageContext } from "../../usePageContext";
import { useAuthContext } from "../AuthProvider/AuthProvider";
import Cart from "../Cart/Cart";
import WishList from "../Wishlist/WishList";
import { render } from "vike/abort";
import axios from "axios";
import { navigate } from "vike/client/router";

const Navbar = () => {
    const [openCart, setOpenCart] = useState(false)
    const [wishListOpen, setWishListOpen] = useState(false)
    const [userDataOpen, setUserDataOpen] = useState(false)
    const session = usePageContext().auth ?? {};

    const { user, cart, wishList, setUser } = useAuthContext();

    const [userData, setUserData] = useState(null)

    useEffect(() => {
        console.log(user, "user");
        typeof user !== "undefined" && setUserData(JSON.parse(user?.split("j:")[1]))
    }, [user])

    console.log(user, "usersdsadasd");
    const products = cart?.items
    const wishListItems = wishList?.items

    const [error, setError] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const response = await axios.post("/api/auth/logout", { user: JSON.parse(user?.split("j:")[1]) }, {
                withCredentials: true,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                }
            });
            // console.log(response, "getCookie");
            console.log(response, "response");
            if (response?.status == 200) {
                localStorage.setItem("token", "")
                setUser(null)
                setUserDataOpen(false)
                await navigate("/");
            } else {
                setError(await response.text());
            }
        } catch (err) {
            setError("Something went wrong.");
            console.error(err);
        }
    };
    const cartRedirect = (e) => {
        // console.log(!!user ? render("/checkout") : render("/auth/sign-in"));
        e.preventDefault();
        console.log(!!user, "cartRedirect");
        if (!!user) {
            setOpenCart(false)
            navigate("/checkout")
        } else {
            navigate("/auth/sign-in")
        }
        // user ? render("/checkout") : render("/auth/sign-in")
    }

    return (<Fragment>
        {openCart && <Cart cartRedirect={cartRedirect} />}
        {wishListOpen && <WishList />}
        <div className="h-[80px] sticky top-0 bg-white z-50">
            <div className="px-[10px] py-[30px] flex items-center  justify-between">
                {/* left */}
                <div className="flex items-center gap-x-4 flex-row">
                    <div className="flex items-center text-lg">
                        <a className=" text-inherit decoration-none" href="/products/1">Silk Saree</a>
                    </div>
                    <div className="flex items-center text-lg">
                        <a className=" text-inherit decoration-none" href="/products/2">Cotton Saree</a>
                    </div>
                    <div className="flex items-center text-lg">
                        <a className=" text-inherit decoration-none" href="/products/3">Chudidhar</a>
                    </div>
                </div>
                {/* center */}
                <div className="leading-loose text-[#2879fe] font-bold text-2xl">
                    <a href='/'>Bloomify</a>
                </div>
                {/* right */}
                <div className="flex items-center gap-x-4">
                    {/* <div className="flex items-center text-lg">
                        <a className=" text-inherit decoration-none" href="/">Homepage</a>
                    </div>
                    <div className="flex items-center text-lg">
                        <a className=" text-inherit decoration-none" href="/about">About</a>
                    </div>
                    <div className="flex items-center text-lg">
                        <a className=" text-inherit decoration-none" href="/contact">Contact</a>
                    </div>
                    <div className="flex items-center text-lg">
                        <a className=" text-inherit decoration-none" to="/">Stores</a>
                    </div> */}
                    {/* icons */}
                    <div className="flex gap-x-4 text-[#777] cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                            <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                        </svg>



                        <div data-dropdown-toggle="dropdownInformation" > {
                            !user ?
                                <div onClick={(e) => { e.preventDefault(); navigate("/auth/sign-in") }}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                </svg>
                                </div>

                                : <div onClick={(e) => { e.preventDefault(); setUserDataOpen(!userDataOpen); }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                                    <path d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                                </svg>
                                </div>
                        }
                        </div>





                        < div className="relative" onClick={(e) => { e.preventDefault(); setWishListOpen(!wishListOpen); openCart && setOpenCart(!openCart) }}>
                            {wishListItems?.length > 0 ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                            </svg>
                                : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                </svg>}
                        </div>



                        < div className="relative" onClick={(e) => { e.preventDefault(); setOpenCart(!openCart); wishListOpen && setWishListOpen(!wishListOpen) }}>
                            {products?.length > 0 ?


                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                                    <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
                                </svg>


                                : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                </svg>}

                            <span className="absolute text-sm w-[20px] h-[20px] rounded-[50%] bg-[#2879fe] text-white absolue -right-[10px] -top-[10px] flex items-center justify-center">{products?.length || 0}</span>
                        </div>

                    </div>
                </div>

            </div>
            {userDataOpen && <div className="z-10 relative -top-8 left-[82%] bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                    <div>{userData?.username}</div>
                    <div className="font-medium truncate">{userData?.email}</div>
                </div>
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformationButton">
                    <li>
                        <a href="/profile" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profile</a>
                    </li>
                    <li>
                        <a href="/order" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Order</a>
                    </li>
                    {/* <li>
                        <a href="/settings" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                    </li> */}
                </ul>
                <div className="py-2">
                    <div onClick={(e) => handleSubmit(e)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</div>
                </div>
            </div>
            }
        </div>


    </Fragment >)
}

export default Navbar