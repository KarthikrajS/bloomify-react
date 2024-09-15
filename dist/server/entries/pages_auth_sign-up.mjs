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
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const { setUser } = useAuthContext();
  const handleSubmit = async (e) => {
    var _a, _b, _c;
    e.preventDefault();
    setError("");
    try {
      const response = await axios.post(
        "/api/auth/register",
        {
          firstName,
          lastName,
          email,
          password,
          confirmPassword
        }
      );
      console.log(response, "response");
      if ((_a = response == null ? void 0 : response.data) == null ? void 0 : _a.success) {
        localStorage.setItem("token", (_b = response == null ? void 0 : response.data) == null ? void 0 : _b.token);
        setUser((_c = response == null ? void 0 : response.data) == null ? void 0 : _c.user);
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
    /* @__PURE__ */ jsx("h1", { className: "text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl", children: "Sign Up" }),
    /* @__PURE__ */ jsxs("form", { className: "space-y-4 md:space-y-6", onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          id: "firstName",
          type: "text",
          className: "bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5",
          placeholder: "First Name",
          value: firstName,
          onChange: (e) => setFirstName(e.target.value)
        }
      ),
      /* @__PURE__ */ jsx(
        "input",
        {
          id: "lastName",
          type: "text",
          placeholder: "Last Name",
          className: "bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5",
          value: lastName,
          onChange: (e) => setLastName(e.target.value)
        }
      ),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "email", className: "block mb-2 text-sm font-medium text-gray-900 ", children: "Your email" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            id: "email",
            type: "email",
            value: email,
            className: "bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5",
            placeholder: "name@gmail.com",
            onChange: (e) => setEmail(e.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "password", className: "block mb-2 text-sm font-medium text-gray-900 ", children: "Password" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            id: "password",
            type: "password",
            placeholder: "Password",
            className: "bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5",
            value: password,
            onChange: (e) => setPassword(e.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        "input",
        {
          id: "confirmPassword",
          type: "password",
          placeholder: "Confirm Password",
          className: "bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5",
          value: confirmPassword,
          onChange: (e) => setConfirmPassword(e.target.value)
        }
      ),
      /* @__PURE__ */ jsx("div", { id: "validation", style: { color: "#f00" }, children: error }),
      /* @__PURE__ */ jsx("button", { type: "submit", children: "Login" })
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
    definedAtData: { "filePathToShowToUser": "/pages/auth/sign-up/+Page.jsx", "fileExportPathToShowToUser": [] },
    valueSerialized: {
      type: "plus-file",
      exportValues: import2
    }
  }
};
export {
  configValuesSerialized
};
