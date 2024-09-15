import React, { useState } from "react";
// import { AuthContext } from "../../strapiContext/AuthContext.js";
// import { message } from "antd";
import { createContext, useContext } from "react";

import { useEffect } from "react";
import { getToken } from "../../strapiContext/helper.js";
import Cookie from "js-cookie";

const API = import.meta.env.PUBLIC_ENV__VIKE_API_URL
const BEARER = `Bearer ${import.meta.env.PUBLIC_ENV__VIKE_API_TOKEN}`



export const AuthContext = createContext({
    user: undefined,
    isLoading: false,
    setUser: () => { },
    cart: null,
    wishList: null,
    addItem: () => { },
    addItemToWishList: () => { },
    removeItem: () => { },
    removeItemFromWishList: () => { },
    resetCart: () => { }
});

export const useAuthContext = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
    // const userCookie =
    //     Cookie.get("bl_user") !== "undefined" ? Cookie.get("bl_user") : null;

    const [userData, setUserData] = useState(Cookie.get("bl_user") !== "undefined" ? Cookie.get("bl_user") : null);
    const [isLoading, setIsLoading] = useState(false);
    console.log(Cookie.get("cart") !== "undefined", 'Cookie.get("cart") !== "undefined" ');
    const cartCookie =
        typeof localStorage !== "undefined" && localStorage.getItem("cart") !== "undefined" ? localStorage.getItem("cart") : null;

    console.log(cartCookie, "cartCookie");
    const [cart, setCart] = useState(
        cartCookie ? JSON.parse(cartCookie) : { items: [], total: 0 }
    );

    const wishListCookie =
        typeof localStorage !== "undefined" && localStorage.getItem("wishList") !== "undefined" ? localStorage.getItem("wishList") : null;
    const [wishList, setWishList] = useState(wishListCookie ? JSON.parse(wishListCookie) : { items: [] })



    const authToken = getToken();

    const fetchLoggedInUser = async (token) => {
        setIsLoading(true);
        try {

            const { data, loading, error } = useFetch(
                `/users/me`
            );

            setUserData(data);
        } catch (error) {
            console.error(error);
            // message.error("Error While Getting Logged In User Details");
        } finally {
            setIsLoading(false);
        }
    };

    const handleUser = (user) => {
        setUserData(user);
    };

    const removeToken = () => {
        localStorage.removeItem(AUTH_TOKEN);
    };

    // attributes.img2.data.attributes.name

    useEffect(() => {
        if (authToken) {
            fetchLoggedInUser(authToken);
        }
    }, [authToken]);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart]);

    useEffect(() => {
        localStorage.setItem('wishList', JSON.stringify(wishList))
    }, [wishList])

    const addItem = (item, quantity) => {
        console.log(item, "item");
        const newItem = cart?.items?.find((i) => i.id === item.id);
        console.log(!newItem, "newItem");
        if (!newItem) {
            const newItem = {
                quantity: quantity,
                ...item,
            };
            console.log(item.attributes.price, "item.attributes.price");

            setCart((prevCart) => ({
                items: [...prevCart.items, newItem],
                total: prevCart.total + (quantity * item.attributes.price),
            }));
        } else {
            setCart((prevCart) => ({
                items: prevCart.items.map((i) =>
                    i.id === newItem.id ? { ...i, quantity: quantity } : i
                ),
                total: prevCart.total + (quantity * item.attributes.price),
            }));
        }
    };

    const addItemToWishList = (item) => {
        console.log(item, "item");
        const newItem = wishList?.items?.find((i) => i.id === item.id);
        console.log(!newItem, "newItem");
        if (!newItem) {
            const newItem = {
                ...item,
            };
            console.log(item.attributes.price, "item.attributes.price");

            setWishList((prevCart) => ({
                items: [...prevCart.items, newItem],
            }));
        }
    };

    const removeItem = (item) => {
        let newItem = cart.items.find((i) => i.id === item.id);
        if (newItem.quantity > 1) {
            setCart((prevCart) => ({
                items: prevCart.items.map((i) =>
                    i.id === newItem.id ? { ...i, quantity: i.quantity - 1 } : i
                ),
                total: prevCart.total - item.attributes.price,
            }));
        } else {
            setCart((prevCart) => ({
                items: prevCart.items.filter((i) => i.id !== item.id),
                total: prevCart.total - item.attributes.price,
            }));
        }
    };
    const removeItemFromWishList = (item) => {

        setCart((prevCart) => ({
            items: prevCart.items.filter((i) => i.id !== item.id)
        }));

    };

    const resetCart = () => {
        setCart({ items: [], total: 0 });
    };



    return (
        <AuthContext.Provider
            value={{
                user: userData, setUser: handleUser, isLoading, cart, wishList,
                addItem,
                addItemToWishList,
                removeItem,
                removeItemFromWishList,
                resetCart,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;