import { a as useAuthContext, C as CartItem, i as import1 } from "../chunks/chunk-954_1HS1.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect, Fragment } from "react";
import { useStripe, useElements, CardElement, Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import "js-cookie";
import axios from "axios";
import { navigate } from "vike/client/router";
import { jwtDecode } from "jwt-decode";
import "react-dom/server";
import "prop-types";
import "vike/abort";
import "react-cookie";
import "vike/server";
const useInitialRender = () => {
  const [initialRenderComplete, setInitialRenderComplete] = useState(false);
  useEffect(() => {
    if (!initialRenderComplete) setInitialRenderComplete(true);
  }, [initialRenderComplete]);
  return initialRenderComplete;
};
const options = {
  style: {
    base: {
      fontSize: "32px",
      color: "#52a635",
      "::placeholder": {
        color: "#aab7c4"
      }
    },
    invalid: {
      color: "#9e2521"
    }
  }
};
const INITIAL_STATE = {
  address: "",
  city: "",
  state: "",
  pincode: "",
  error: null
};
const CheckoutForm = () => {
  const [data, setData] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const { user, cart, resetCart } = useAuthContext();
  const stripe = useStripe();
  const elements = useElements();
  useEffect(() => {
    if (typeof window.localStorage !== "undefined") {
      const token = localStorage.getItem("token");
      if (token) {
        console.log(jwtDecode(token), "token_1231");
        setUserToken(token);
      }
    }
  }, []);
  const onChange = (e) => {
    const updateItem = data[e.target.name] = e.target.value;
    setData({ ...data, updateItem });
  };
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
          token: token.token.id
        },
        token: userToken
      });
      console.log(response, "response_ewt");
      if (response.data.createOrder.data) {
        alert("Transaction Successful, continue your shopping");
        setData(INITIAL_STATE);
        resetCart();
        navigate("/");
      }
    } catch (error) {
      console.log("error===>", error);
      setData({ ...data, error: { message: error.message } });
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("form", { children: /* @__PURE__ */ jsxs("div", { className: "bg-white shadow-md rounded-lg p-8", children: [
    /* @__PURE__ */ jsx("h5", { className: "text-lg font-semibold", children: "Your information:" }),
    /* @__PURE__ */ jsx("hr", { className: "my-4" }),
    /* @__PURE__ */ jsx("div", { className: "flex mb-6", children: /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
      /* @__PURE__ */ jsx(
        "label",
        {
          className: "block mb-2 test-gray-800 font-medium",
          htmlFor: "address",
          children: "Address"
        }
      ),
      /* @__PURE__ */ jsx(
        "input",
        {
          id: "address",
          htmlFor: "address",
          className: "appearance-none block w-full p-3 leading-5 text-gray-900 border border-gray-200 rounded-lg shadow-md placeholder-text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50",
          type: "text",
          name: "address",
          onChange: (e) => onChange(e),
          placeholder: "Enter your address"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex mb-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex-1 mr-6", children: [
        /* @__PURE__ */ jsx(
          "label",
          {
            htmlFor: "city",
            className: "block mb-2 test-gray-800 font-medium",
            children: "City"
          }
        ),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            name: "city",
            id: "city",
            onChange: (e) => onChange(e),
            className: "appearance-none block w-full p-3 leading-5 text-gray-900 border border-gray-200 rounded-lg shadow-md placeholder-text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: " flex flex-row gap-2 w-1/2", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-1/2", children: [
          /* @__PURE__ */ jsx(
            "label",
            {
              htmlFor: "state",
              className: "block mb-2 test-gray-800 font-medium",
              children: "State"
            }
          ),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              name: "state",
              id: "state",
              onChange: (e) => onChange(e),
              className: "appearance-none block w-full p-3 leading-5 text-gray-900 border border-gray-200 rounded-lg shadow-md placeholder-text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-1/2", children: [
          /* @__PURE__ */ jsx(
            "label",
            {
              htmlFor: "state",
              className: "block mb-2 test-gray-800 font-medium",
              children: "Pin Code"
            }
          ),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "number",
              name: "pincode",
              id: "pincode",
              onChange: (e) => onChange(e),
              className: "appearance-none block w-full p-3 leading-5 text-gray-900 border border-gray-200 rounded-lg shadow-md placeholder-text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            }
          )
        ] })
      ] })
    ] }),
    cart.items.length > 0 ? /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
      /* @__PURE__ */ jsx("div", { children: "Credit or debit card" }),
      /* @__PURE__ */ jsx("div", { className: "my-4", children: /* @__PURE__ */ jsx(CardElement, { options }) }),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "inline-block w-full px-6 py-3 text-center font-bold text-white bg-green-500 hover:bg-green-600 transition duration-200 rounded-full",
          onClick: (e) => user ? submitOrder(e) : navigate("/auth/sign-in"),
          disabled: loading,
          children: loading ? "Submitting" : "Submit Order"
        }
      )
    ] }) : /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-2xl font-semibold", children: "Your cart is empty" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-500", children: "Add some items to your cart to continue" })
    ] }),
    /* @__PURE__ */ jsx("div", { children: data.error && /* @__PURE__ */ jsxs("div", { className: "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative", children: [
      /* @__PURE__ */ jsx("strong", { className: "font-bold", children: "Error!" }),
      " ",
      /* @__PURE__ */ jsx("span", { className: "block sm:inline", children: data.error.message })
    ] }) })
  ] }) }) });
};
const CheckoutCart = (props) => {
  const { cart } = useAuthContext();
  const { displayTotal } = props;
  return /* @__PURE__ */ jsx("div", { className: "rounded-2xl bg-gray-800 z-40", children: /* @__PURE__ */ jsxs("div", { className: "max-w-lg pt-6 pb-8 px-8 mx-auto bg-blueGray-900", children: [
    /* @__PURE__ */ jsx("div", { className: "flex mb-10 items-center justify-between", children: /* @__PURE__ */ jsx("h6", { className: "font-bold text-2xl text-white mb-0", children: "Your Cart" }) }),
    /* @__PURE__ */ jsx("div", { children: cart.items ? cart.items.map((item, index) => {
      if (item.quantity > 0) {
        return /* @__PURE__ */ jsx(CartItem, { data: item }, index);
      }
    }) : null }),
    /* @__PURE__ */ jsx("div", { className: "p-6", children: /* @__PURE__ */ jsxs("div", { className: "flex mb-6 content-center justify-between", children: [
      /* @__PURE__ */ jsx("span", { className: "font-bold text-white", children: "Order total" }),
      /* @__PURE__ */ jsxs("span", { className: "text-sm font-bold text-white", children: [
        "₹",
        displayTotal
      ] })
    ] }) })
  ] }) });
};
const stripePromise = loadStripe("pk_test_N6JD5LA4Func5qhgqEMIvzzy");
function Page(pageContext) {
  const { cart } = useAuthContext();
  const total = cart.total;
  const displayTotal = Math.abs(total);
  const initialRender = useInitialRender();
  if (!initialRender) return null;
  return /* @__PURE__ */ jsx("section", { className: "container mx-auto py-24", children: /* @__PURE__ */ jsxs("div", { className: "lg:grid lg:grid-cols-5 gap-4 flex flex-col", children: [
    /* @__PURE__ */ jsx("div", { className: "col-span-2", children: /* @__PURE__ */ jsx(CheckoutCart, { displayTotal }) }),
    /* @__PURE__ */ jsx("div", { className: "col-span-3", children: /* @__PURE__ */ jsx(Elements, { stripe: stripePromise, children: /* @__PURE__ */ jsx(CheckoutForm, {}) }) })
  ] }) });
}
const import2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Page
}, Symbol.toStringTag, { value: "Module" }));
const configValuesSerialized = {
  ["onRenderHtml"]: {
    type: "standard",
    definedAtData: { "filePathToShowToUser": "/renderer/+onRenderHtml.jsx", "fileExportPathToShowToUser": [] },
    valueSerialized: {
      type: "plus-file",
      exportValues: import1
    }
  },
  ["passToClient"]: {
    type: "cumulative",
    definedAtData: [{ "filePathToShowToUser": "/pages/+config.js", "fileExportPathToShowToUser": ["default", "passToClient"] }],
    valueSerialized: [{
      type: "js-serialized",
      value: ["user", "pageProps", "routeParams", "auth"]
    }]
  },
  ["title"]: {
    type: "standard",
    definedAtData: { "filePathToShowToUser": "/pages/+config.js", "fileExportPathToShowToUser": ["default", "title"] },
    valueSerialized: {
      type: "js-serialized",
      value: "Bloomify"
    }
  },
  ["Page"]: {
    type: "standard",
    definedAtData: { "filePathToShowToUser": "/pages/checkout/+Page.jsx", "fileExportPathToShowToUser": [] },
    valueSerialized: {
      type: "plus-file",
      exportValues: import2
    }
  }
};
export {
  configValuesSerialized
};
