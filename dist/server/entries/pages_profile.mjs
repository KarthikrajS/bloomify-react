import { a as useAuthContext, i as import1 } from "../chunks/chunk-954_1HS1.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect, Fragment } from "react";
import "react-dom/server";
import "prop-types";
import "js-cookie";
import "vike/abort";
import "axios";
import "vike/client/router";
import "react-cookie";
import "vike/server";
function Page() {
  const { user } = useAuthContext();
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    console.log(user, "user");
    user !== "undefined" && setUserData(JSON.parse(user == null ? void 0 : user.split("j:")[1]));
  }, [user]);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 sm:grid-cols-2 gap-4 px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "w-full p-3 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md  sm:p-4 flex flex-col justify-center items-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl", children: "Profile Picture" }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white px-4 py-5 rounded-lg shadow-lg text-center w-72 ", children: [
        /* @__PURE__ */ jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsx("img", { className: "w-auto mx-auto rounded-full object-cover object-center", src: "https://media.istockphoto.com/id/2152310729/vector/portrait-of-a-redhead-woman-in-a-hat-abstract-elegant-woman-with-hat-covering-her-eyes.webp?b=1&s=612x612&w=0&k=20&c=duG7xLj9lbyyh6owDSjK5AuG72H_mhUYGWSyUCc704E=", alt: "Avatar Upload" }) }),
        /* @__PURE__ */ jsxs("label", { className: "cursor-pointer mt-6", children: [
          /* @__PURE__ */ jsx("span", { className: "w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-500", children: "Select Avatar" }),
          /* @__PURE__ */ jsx("input", { type: "file", className: "hidden", multiple: "true", accept: "true" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md  sm:p-8 flex flex-col items-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl", children: "Change Password" }),
      /* @__PURE__ */ jsxs("form", { className: "mt-4 space-y-4 lg:mt-5 md:space-y-5 w-full", action: "#", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "password", className: "block mb-2 text-sm font-medium text-gray-900", children: "New Password" }),
          /* @__PURE__ */ jsx("input", { type: "password", name: "password", id: "password", placeholder: "••••••••", className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5", required: "" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "confirm-password", className: "block mb-2 text-sm font-medium text-gray-900 ", children: "Confirm password" }),
          /* @__PURE__ */ jsx("input", { type: "confirm-password", name: "confirm-password", id: "confirm-password", placeholder: "••••••••", className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5", required: "" })
        ] }),
        /* @__PURE__ */ jsx("button", { type: "submit", className: "w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-500", children: "Reset passwod" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md  sm:p-8 flex-col flex  items-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl", children: "Settings" }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4 space-y-4 lg:mt-5 md:space-y-5 w-full flex flex-col gap-4", action: "#", children: [
        /* @__PURE__ */ jsxs("label", { className: "inline-flex items-center cursor-pointer", children: [
          /* @__PURE__ */ jsx("input", { type: "checkbox", value: "", className: "sr-only peer" }),
          /* @__PURE__ */ jsx("div", { className: "relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" }),
          /* @__PURE__ */ jsx("span", { className: "ms-3 text-sm font-medium text-gray-900 dark:text-gray-300", children: "Notifications" })
        ] }),
        /* @__PURE__ */ jsxs("label", { className: "inline-flex items-center cursor-pointer", children: [
          /* @__PURE__ */ jsx("input", { type: "checkbox", value: "", className: "sr-only peer" }),
          /* @__PURE__ */ jsx("div", { className: "relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" }),
          /* @__PURE__ */ jsx("span", { className: "ms-3 text-sm font-medium text-gray-900 dark:text-gray-300", children: "E-Mail and SMS" })
        ] }),
        /* @__PURE__ */ jsxs("label", { className: "inline-flex items-center cursor-pointer", children: [
          /* @__PURE__ */ jsx("input", { type: "checkbox", value: "", className: "sr-only peer" }),
          /* @__PURE__ */ jsx("div", { className: "relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" }),
          /* @__PURE__ */ jsx("span", { className: "ms-3 text-sm font-medium text-gray-900 dark:text-gray-300", children: "Promotional offers E-Mail and SMS" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md  sm:p-8 flex-col flex  items-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl", children: "Personal Information" }),
      /* @__PURE__ */ jsxs("div", { className: "flex w-full flex-col space-y-3 px-4 py-6 sm:px-10", children: [
        /* @__PURE__ */ jsxs("label", { className: "block", htmlFor: "name", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm", children: "Name" }),
          /* @__PURE__ */ jsx("input", { className: "w-full rounded-md border py-2 px-2 bg-gray-50 outline-none ring-blue-600 focus:ring-1", type: "text", value: userData == null ? void 0 : userData.username })
        ] }),
        /* @__PURE__ */ jsxs("label", { className: "block", htmlFor: "email", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm", children: "Email" }),
          /* @__PURE__ */ jsx("input", { className: "w-full rounded-md border py-2 px-2 bg-gray-50 outline-none ring-blue-600 focus:ring-1", type: "email", value: userData == null ? void 0 : userData.email })
        ] })
      ] })
    ] })
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
    definedAtData: { "filePathToShowToUser": "/pages/profile/+Page.jsx", "fileExportPathToShowToUser": [] },
    valueSerialized: {
      type: "plus-file",
      exportValues: import2
    }
  }
};
export {
  configValuesSerialized
};
