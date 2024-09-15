import { jsx, jsxs } from "react/jsx-runtime";
import ReactDOMServer from "react-dom/server";
import React, { useContext, createContext, useState, useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import Cookie from "js-cookie";
import "vike/abort";
import axios from "axios";
import { navigate } from "vike/client/router";
import { CookiesProvider } from "react-cookie";
import { escapeInject, dangerouslySkipEscape } from "vike/server";
PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired;
const Context = React.createContext(void 0);
function PageContextProvider({ pageContext, children }) {
  return /* @__PURE__ */ jsx(Context.Provider, { value: pageContext, children });
}
function usePageContext() {
  const pageContext = useContext(Context);
  return pageContext;
}
const AUTH_TOKEN = "a1e234c72e2aa4ce49f5793279166a83937c916cfe5b5d09064e215b1cf83b6002cd3539b8073334981e5712584dd8b615afab96aa71dee5d29470628d8914ab6346ca19b6752c4854bb1585dd0cebf5c97c15f88d8a1bb1e4ee1f826ed50464d58e6a150dade059ff60cb6b34b0cf71d392bccfb6a153de538b0c89cde2a5c1";
const getToken = () => {
  if (typeof localStorage !== "undefined")
    return localStorage.getItem(AUTH_TOKEN);
};
const AuthContext = createContext({
  user: void 0,
  isLoading: false,
  setUser: () => {
  },
  cart: null,
  wishList: null,
  addItem: () => {
  },
  addItemToWishList: () => {
  },
  removeItem: () => {
  },
  removeItemFromWishList: () => {
  },
  resetCart: () => {
  }
});
const useAuthContext = () => useContext(AuthContext);
const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(Cookie.get("bl_user") !== "undefined" ? Cookie.get("bl_user") : null);
  const [isLoading, setIsLoading] = useState(false);
  console.log(Cookie.get("cart") !== "undefined", 'Cookie.get("cart") !== "undefined" ');
  const cartCookie = typeof localStorage !== "undefined" && localStorage.getItem("cart") !== "undefined" ? localStorage.getItem("cart") : null;
  console.log(cartCookie, "cartCookie");
  const [cart, setCart] = useState(
    cartCookie ? JSON.parse(cartCookie) : { items: [], total: 0 }
  );
  const wishListCookie = typeof localStorage !== "undefined" && localStorage.getItem("wishList") !== "undefined" ? localStorage.getItem("wishList") : null;
  const [wishList, setWishList] = useState(wishListCookie ? JSON.parse(wishListCookie) : { items: [] });
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
    } finally {
      setIsLoading(false);
    }
  };
  const handleUser = (user) => {
    setUserData(user);
  };
  useEffect(() => {
    if (authToken) {
      fetchLoggedInUser();
    }
  }, [authToken]);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  useEffect(() => {
    localStorage.setItem("wishList", JSON.stringify(wishList));
  }, [wishList]);
  const addItem = (item, quantity) => {
    var _a;
    console.log(item, "item");
    const newItem = (_a = cart == null ? void 0 : cart.items) == null ? void 0 : _a.find((i) => i.id === item.id);
    console.log(!newItem, "newItem");
    if (!newItem) {
      const newItem2 = {
        quantity,
        ...item
      };
      console.log(item.attributes.price, "item.attributes.price");
      setCart((prevCart) => ({
        items: [...prevCart.items, newItem2],
        total: prevCart.total + quantity * item.attributes.price
      }));
    } else {
      setCart((prevCart) => ({
        items: prevCart.items.map(
          (i) => i.id === newItem.id ? { ...i, quantity } : i
        ),
        total: prevCart.total + quantity * item.attributes.price
      }));
    }
  };
  const addItemToWishList = (item) => {
    var _a;
    console.log(item, "item");
    const newItem = (_a = wishList == null ? void 0 : wishList.items) == null ? void 0 : _a.find((i) => i.id === item.id);
    console.log(!newItem, "newItem");
    if (!newItem) {
      const newItem2 = {
        ...item
      };
      console.log(item.attributes.price, "item.attributes.price");
      setWishList((prevCart) => ({
        items: [...prevCart.items, newItem2]
      }));
    }
  };
  const removeItem = (item) => {
    let newItem = cart.items.find((i) => i.id === item.id);
    if (newItem.quantity > 1) {
      setCart((prevCart) => ({
        items: prevCart.items.map(
          (i) => i.id === newItem.id ? { ...i, quantity: i.quantity - 1 } : i
        ),
        total: prevCart.total - item.attributes.price
      }));
    } else {
      setCart((prevCart) => ({
        items: prevCart.items.filter((i) => i.id !== item.id),
        total: prevCart.total - item.attributes.price
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
  return /* @__PURE__ */ jsx(
    AuthContext.Provider,
    {
      value: {
        user: userData,
        setUser: handleUser,
        isLoading,
        cart,
        wishList,
        addItem,
        addItemToWishList,
        removeItem,
        removeItemFromWishList,
        resetCart
      },
      children
    }
  );
};
const CartItem = (props) => {
  const { data } = props;
  const { attributes, quantity } = data;
  const { addItem, removeItem } = useAuthContext();
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "p-6 flex flex-wrap justify-between border-b border-blueGray-800", children: [
    /* @__PURE__ */ jsx("div", { className: "w-2/4", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col h-full", children: [
      /* @__PURE__ */ jsx("h6", { className: "font-bold text-white mb-1", children: attributes.title }),
      /* @__PURE__ */ jsxs("span", { className: "block pb-4 mb-auto font-medium text-gray-400", children: [
        quantity,
        " x ₹",
        attributes.price
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "w-1/4", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-end h-full", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            className: "mr-2 inline-block mb-auto font-medium text-sm text-gray-400 hover:text-gray-200",
            onClick: () => removeItem(data),
            children: "Remove"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            className: "inline-block mb-auto font-medium text-sm text-gray-400 hover:text-gray-200",
            onClick: () => addItem(data),
            children: "Add"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("span", { className: "block mt-2 text-sm font-bold text-white", children: [
        "₹",
        attributes.price * quantity
      ] })
    ] }) })
  ] }) });
};
const Cart = (props) => {
  const { cartRedirect } = props;
  const [cartData, setCartData] = useState([]);
  const total = cartData.total;
  const displayTotal = Math.abs(total);
  const { user } = useAuthContext();
  useEffect(() => {
    if (typeof window.localStorage != "undefined" && !!user)
      setCartData(JSON.parse(localStorage.getItem("cart")));
  }, []);
  console.log(cartData == null ? void 0 : cartData.items, "cartData");
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("section", { className: "fixed right-20 top-20 z-40", children: /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsx("div", { className: "rounded-3xl co bg-gray-800", children: /* @__PURE__ */ jsxs("div", { className: "max-w-lg pt-6 pb-8 px-8 mx-auto", children: [
    /* @__PURE__ */ jsx("div", { className: "flex mb-10 items-center justify-between", children: /* @__PURE__ */ jsx("h6", { className: "font-bold text-2xl text-white mb-0", children: "Your Cart" }) }),
    /* @__PURE__ */ jsx("div", { children: (cartData == null ? void 0 : cartData.items) ? cartData == null ? void 0 : cartData.items.map((item, index) => {
      if (item.quantity > 0) {
        return /* @__PURE__ */ jsx(CartItem, { data: item }, index);
      }
    }) : null }),
    /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex mb-6 content-center justify-between", children: [
        /* @__PURE__ */ jsx("span", { className: "font-bold text-white", children: "Order total" }),
        /* @__PURE__ */ jsxs("span", { className: "text-sm font-bold text-white", children: [
          "$",
          displayTotal
        ] })
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: (e) => cartRedirect(e),
          className: "inline-block w-full px-6 py-3 text-center font-bold text-white bg-[#2879fe] hover:bg-blue-600 hover:cursor-pointer transition duration-200 rounded-full",
          children: user ? "Continue To Pay" : "Login to Order"
        }
      )
    ] })
  ] }) }) }) }) });
};
const WishListItem = (props) => {
  const { data } = props;
  console.log(data, "_asdasd");
  const { attributes, quantity } = data;
  const { addItemToWishList, removeItemFromWishList } = useAuthContext();
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "p-6 flex flex-wrap justify-between border-b border-blueGray-800", children: [
    /* @__PURE__ */ jsx("div", { className: "w-2/4", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col h-full", children: [
      /* @__PURE__ */ jsx("h6", { className: "font-bold text-white mb-1", children: attributes.title }),
      /* @__PURE__ */ jsxs("span", { className: "block pb-4 mb-auto font-medium text-gray-400", children: [
        "₹",
        attributes.price
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "w-1/4", children: /* @__PURE__ */ jsx("div", { className: "flex flex-col items-end h-full", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "mr-2 inline-block mb-auto font-medium text-sm text-gray-400 hover:text-gray-200",
          onClick: () => removeItemFromWishList(data),
          children: "Remove"
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "inline-block mb-auto font-medium text-sm text-gray-400 hover:text-gray-200",
          onClick: () => addItemToWishList(data),
          children: "Add"
        }
      )
    ] }) }) })
  ] }) });
};
const WishList = () => {
  const [wishListData, setWishListData] = useState([]);
  useEffect(() => {
    if (typeof window.localStorage != "undefined")
      setWishListData(JSON.parse(localStorage.getItem("wishList")));
  }, []);
  console.log(wishListData == null ? void 0 : wishListData.items, "wishListData");
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("section", { className: "fixed right-20 top-20 z-40", children: /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsx("div", { className: "rounded-3xl co bg-gray-800", children: /* @__PURE__ */ jsxs("div", { className: "max-w-lg pt-6 pb-8 px-8 mx-auto", children: [
    /* @__PURE__ */ jsx("div", { className: "flex mb-10 items-center justify-between", children: /* @__PURE__ */ jsx("h6", { className: "font-bold text-2xl text-white mb-0", children: "Your Wish List" }) }),
    /* @__PURE__ */ jsx("div", { children: (wishListData == null ? void 0 : wishListData.items) ? wishListData == null ? void 0 : wishListData.items.map((item, index) => {
      console.log(item, "item_asdasd");
      if (item) {
        return /* @__PURE__ */ jsx(WishListItem, { data: item }, index);
      }
    }) : null })
  ] }) }) }) }) });
};
const Navbar = () => {
  const [openCart, setOpenCart] = useState(false);
  const [wishListOpen, setWishListOpen] = useState(false);
  const [userDataOpen, setUserDataOpen] = useState(false);
  usePageContext().auth ?? {};
  const { user, cart, wishList, setUser } = useAuthContext();
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    console.log(user, "user");
    typeof user !== "undefined" && setUserData(JSON.parse(user == null ? void 0 : user.split("j:")[1]));
  }, [user]);
  console.log(user, "usersdsadasd");
  const products = cart == null ? void 0 : cart.items;
  const wishListItems = wishList == null ? void 0 : wishList.items;
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await axios.post("/api/auth/logout", { user: JSON.parse(user == null ? void 0 : user.split("j:")[1]) }, {
        withCredentials: true,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json"
        }
      });
      console.log(response, "response");
      if ((response == null ? void 0 : response.status) == 200) {
        localStorage.setItem("token", "");
        setUser(null);
        setUserDataOpen(false);
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
    e.preventDefault();
    console.log(!!user, "cartRedirect");
    if (!!user) {
      setOpenCart(false);
      navigate("/checkout");
    } else {
      navigate("/auth/sign-in");
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    openCart && /* @__PURE__ */ jsx(Cart, { cartRedirect }),
    wishListOpen && /* @__PURE__ */ jsx(WishList, {}),
    /* @__PURE__ */ jsxs("div", { className: "h-[80px] sticky top-0 bg-white z-50", children: [
      /* @__PURE__ */ jsxs("div", { className: "px-[10px] py-[30px] flex items-center  justify-between", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-x-4 flex-row", children: [
          /* @__PURE__ */ jsx("div", { className: "flex items-center text-lg", children: /* @__PURE__ */ jsx("a", { className: " text-inherit decoration-none", href: "/products/1", children: "Silk Saree" }) }),
          /* @__PURE__ */ jsx("div", { className: "flex items-center text-lg", children: /* @__PURE__ */ jsx("a", { className: " text-inherit decoration-none", href: "/products/2", children: "Cotton Saree" }) }),
          /* @__PURE__ */ jsx("div", { className: "flex items-center text-lg", children: /* @__PURE__ */ jsx("a", { className: " text-inherit decoration-none", href: "/products/3", children: "Chudidhar" }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "leading-loose text-[#2879fe] font-bold text-2xl", children: /* @__PURE__ */ jsx("a", { href: "/", children: "Bloomify" }) }),
        /* @__PURE__ */ jsx("div", { className: "flex items-center gap-x-4", children: /* @__PURE__ */ jsxs("div", { className: "flex gap-x-4 text-[#777] cursor-pointer", children: [
          /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", className: "h-6 w-6", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z", clipRule: "evenodd" }) }),
          /* @__PURE__ */ jsxs("div", { "data-dropdown-toggle": "dropdownInformation", children: [
            " ",
            !user ? /* @__PURE__ */ jsx("div", { onClick: (e) => {
              e.preventDefault();
              navigate("/auth/sign-in");
            }, children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", className: "h-6 w-6", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" }) }) }) : /* @__PURE__ */ jsx("div", { onClick: (e) => {
              e.preventDefault();
              setUserDataOpen(!userDataOpen);
            }, children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", className: "h-5 w-5", children: /* @__PURE__ */ jsx("path", { d: "M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z", clipRule: "evenodd" }) }) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "relative", onClick: (e) => {
            e.preventDefault();
            setWishListOpen(!wishListOpen);
            openCart && setOpenCart(!openCart);
          }, children: (wishListItems == null ? void 0 : wishListItems.length) > 0 ? /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", className: "h-5 w-5", children: /* @__PURE__ */ jsx("path", { d: "m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" }) }) : /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", className: "h-6 w-6", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" }) }) }),
          /* @__PURE__ */ jsxs("div", { className: "relative", onClick: (e) => {
            e.preventDefault();
            setOpenCart(!openCart);
            wishListOpen && setWishListOpen(!wishListOpen);
          }, children: [
            (products == null ? void 0 : products.length) > 0 ? /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", className: "h-5 w-5", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z", clipRule: "evenodd" }) }) : /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", className: "h-6 w-6", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" }) }),
            /* @__PURE__ */ jsx("span", { className: "absolute text-sm w-[20px] h-[20px] rounded-[50%] bg-[#2879fe] text-white absolue -right-[10px] -top-[10px] flex items-center justify-center", children: (products == null ? void 0 : products.length) || 0 })
          ] })
        ] }) })
      ] }),
      userDataOpen && /* @__PURE__ */ jsxs("div", { className: "z-10 relative -top-8 left-[82%] bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600", children: [
        /* @__PURE__ */ jsxs("div", { className: "px-4 py-3 text-sm text-gray-900 dark:text-white", children: [
          /* @__PURE__ */ jsx("div", { children: userData == null ? void 0 : userData.username }),
          /* @__PURE__ */ jsx("div", { className: "font-medium truncate", children: userData == null ? void 0 : userData.email })
        ] }),
        /* @__PURE__ */ jsxs("ul", { className: "py-2 text-sm text-gray-700 dark:text-gray-200", "aria-labelledby": "dropdownInformationButton", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/profile", className: "block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white", children: "Profile" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/order", className: "block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white", children: "Order" }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "py-2", children: /* @__PURE__ */ jsx("div", { onClick: (e) => handleSubmit(e), className: "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white", children: "Sign out" }) })
      ] })
    ] })
  ] });
};
const Footer = () => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "mt-[100px]  mb-[20px] my-200px", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex gap-[50px]", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3 text-lg align-justify", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-lg font-normal text-[#555]", children: "Categories" }),
        /* @__PURE__ */ jsx("span", { className: "text-gray-400", children: "Silk Saree" }),
        /* @__PURE__ */ jsx("span", { className: "text-gray-400", children: "Cotton Saree" }),
        /* @__PURE__ */ jsx("span", { className: "text-gray-400", children: "Chudidhar" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3 text-lg align-justify ", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-lg font-normal text-[#555]", children: "Links" }),
        /* @__PURE__ */ jsx("span", { className: "text-gray-400", children: "FAQ" }),
        /* @__PURE__ */ jsx("span", { className: "text-gray-400", children: "Pages" }),
        /* @__PURE__ */ jsx("span", { className: "text-gray-400", children: "Stores" }),
        /* @__PURE__ */ jsx("span", { className: "text-gray-400", children: "Compare" }),
        /* @__PURE__ */ jsx("span", { className: "text-gray-400", children: "Cookies" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3 text-lg align-justify w-1/3", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-lg font-normal text-[#555]", children: "About" }),
        /* @__PURE__ */ jsx("span", { className: "text-gray-400", children: "Welcome to Bloomify, your ultimate destination for stylish and sophisticated women's clothing. As a premier eCommerce LLC, we are dedicated to curating a collection that blends the latest trends with timeless elegance, ensuring every piece enhances your unique style. Our mission is to provide a seamless shopping experience, combining exceptional quality with outstanding customer service. From chic everyday wear to elegant evening attire, our carefully selected range is designed to empower and inspire. At Bloomify, we believe that fashion is more than just clothing—it's about expressing who you are. Join us in discovering your next favorite outfit!" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3 text-lg align-justify w-1/3", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-lg font-normal text-[#555]", children: "Contact" }),
        /* @__PURE__ */ jsxs("span", { className: "text-gray-400", children: [
          "We’d love to hear from you! Whether you have questions about our collections, need assistance with an order, or just want to share your feedback, our team is here to help. Reach out to us through the following channels:",
          /* @__PURE__ */ jsx("br", {}),
          "Email: support@bloomify.com Phone: (123) 456-7890 Address: 123 Fashion Avenue, Suite 456, City, State, ZIP Code",
          /* @__PURE__ */ jsx("br", {}),
          "Customer Service Hours: Monday - Friday: 9:00 AM - 6:00 PM Saturday: 10:00 AM - 4:00 PM Sunday: Closed",
          /* @__PURE__ */ jsx("br", {}),
          "For the latest updates and exclusive offers, follow us on social media: [Facebook] [Instagram] [Twitter] Thank you for choosing Bloomify. We look forward to assisting you!"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mt-[50px]", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
        /* @__PURE__ */ jsx("span", { className: "text-[#2879fe] font-bold text-xl", children: "Bloomify" }),
        /* @__PURE__ */ jsx("span", { className: " ml-[20px] text-[12px] text-gray-400", children: "© Copyright 2024. All Rights Reserved" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "right", children: /* @__PURE__ */ jsx("img", { src: "./payment.png", alt: "", className: "h-[50px]" }) })
    ] })
  ] }) });
};
function Layout({ pageContext, children }) {
  return /* @__PURE__ */ jsx(React.StrictMode, { children: /* @__PURE__ */ jsx(CookiesProvider, { children: /* @__PURE__ */ jsx(AuthProvider, { children: /* @__PURE__ */ jsx(PageContextProvider, { pageContext, children: /* @__PURE__ */ jsxs("div", { className: "p-3", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      children,
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] }) }) }) }) });
}
const logoUrl = "/assets/static/letter-b.BXTWxE4S.png";
function getPageTitle(pageContext) {
  var _a;
  const title = (
    // Title defined dynamically by data()
    ((_a = pageContext.data) == null ? void 0 : _a.title) || // Title defined statically by /pages/some-page/+title.js (or by `export default { title }` in /pages/some-page/+config.js)
    // The setting 'pageContext.config.title' is a custom setting we defined at ./+config.ts
    pageContext.config.title || "Vike Demo"
  );
  return title;
}
function onRenderHtml(pageContext) {
  var _a;
  const { Page, pageProps, routeParams } = pageContext;
  if (!Page) throw new Error("My onRenderHtml() hook expects pageContext.Page to be defined");
  const pageHtml = ReactDOMServer.renderToString(
    /* @__PURE__ */ jsx(Layout, { pageContext, children: /* @__PURE__ */ jsx(Page, { ...pageProps, ...routeParams }) })
  );
  const title = getPageTitle(pageContext);
  const desc = ((_a = pageContext.data) == null ? void 0 : _a.description) || pageContext.config.description || "Demo of using Vike";
  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="${logoUrl}" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <title>${title}</title>
      </head>
      <body>
        <div id="react-root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;
  return {
    documentHtml,
    pageContext: {
      // We can add custom pageContext properties here, see https://vike.dev/pageContext#custom
    }
  };
}
const import1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  onRenderHtml
}, Symbol.toStringTag, { value: "Module" }));
export {
  CartItem as C,
  useAuthContext as a,
  import1 as i,
  usePageContext as u
};
