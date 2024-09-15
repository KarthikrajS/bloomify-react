import { a as useAuthContext, i as import1 } from "../chunks/chunk-954_1HS1.js";
import { jsx, jsxs } from "react/jsx-runtime";
import axios from "axios";
import { useState, Fragment } from "react";
import { navigate } from "vike/client/router";
import "react-dom/server";
import "prop-types";
import "js-cookie";
import "vike/abort";
import "react-cookie";
import "vike/server";
function Page(pageContext) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { setUser } = useAuthContext();
  const handleSubmit = async (e) => {
    var _a, _b, _c, _d;
    e.preventDefault();
    setError("");
    try {
      const response = await axios.post("/api/auth/login", {
        email,
        password
      }, {
        withCredentials: true,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json"
        }
      });
      console.log(response, "response");
      if ((_a = response == null ? void 0 : response.data) == null ? void 0 : _a.success) {
        localStorage.setItem("token", (_b = response == null ? void 0 : response.data) == null ? void 0 : _b.token);
        console.log((_c = response == null ? void 0 : response.data) == null ? void 0 : _c.user, "response?.data?.user");
        setUser((_d = response == null ? void 0 : response.data) == null ? void 0 : _d.user);
        await navigate("/");
      } else {
        setError(await response.text());
      }
    } catch (err) {
      setError("Something went wrong.");
      console.error(err);
    }
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("section", { className: "bg-gray-50", children: /* @__PURE__ */ jsx("div", { className: "flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0", children: /* @__PURE__ */ jsx("div", { className: "w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0", children: /* @__PURE__ */ jsxs("div", { className: "p-6 space-y-4 md:space-y-6 sm:p-8", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl", children: "Sign in to your account" }),
    /* @__PURE__ */ jsxs("form", { className: "space-y-4 md:space-y-6", onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "email", className: "block mb-2 text-sm font-medium text-gray-900 ", children: "Your email" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            onChange: (e) => setEmail(e.target.value),
            id: "email",
            type: "email",
            placeholder: "name@gmail.com",
            value: email,
            name: "email",
            className: "bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5",
            required: ""
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "password", className: "block mb-2 text-sm font-medium text-gray-900 ", children: "Password" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            value: password,
            onChange: (e) => setPassword(e.target.value),
            type: "password",
            name: "password",
            id: "password",
            placeholder: "••••••••",
            className: "bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5",
            required: ""
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-start", children: [
          /* @__PURE__ */ jsx("div", { className: "flex items-center h-5", children: /* @__PURE__ */ jsx("input", { id: "remember", "aria-describedby": "remember", type: "checkbox", className: "w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300", required: "" }) }),
          /* @__PURE__ */ jsx("div", { className: "ml-3 text-sm", children: /* @__PURE__ */ jsx("label", { htmlFor: "remember", className: "text-gray-500", children: "Remember me" }) })
        ] }),
        /* @__PURE__ */ jsx("a", { href: "#", className: "text-sm font-medium text-primary-600 hover:underline ", children: "Forgot password?" })
      ] }),
      /* @__PURE__ */ jsx("button", { type: "submit", className: "w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-400", children: "Sign in" }),
      /* @__PURE__ */ jsxs("p", { className: "text-sm font-light text-gray-500", children: [
        "Don’t have an account yet? ",
        /* @__PURE__ */ jsx("a", { href: "/auth/sign-up", className: "font-medium text-primary-600 hover:underline text-blue-400", children: "Sign up" })
      ] })
    ] })
  ] }) }) }) }) });
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
    definedAtData: { "filePathToShowToUser": "/pages/auth/sign-in/+Page.jsx", "fileExportPathToShowToUser": [] },
    valueSerialized: {
      type: "plus-file",
      exportValues: import2
    }
  }
};
export {
  configValuesSerialized
};
