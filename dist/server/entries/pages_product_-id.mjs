import { a as useAuthContext, i as import1 } from "../chunks/chunk-954_1HS1.js";
import { jsx, jsxs, Fragment as Fragment$1 } from "react/jsx-runtime";
import { useState, Fragment } from "react";
import { u as useFetch } from "../chunks/chunk-RXAyvvl2.js";
import "vike/abort";
import "js-cookie";
import { navigate } from "vike/client/router";
import "react-dom/server";
import "prop-types";
import "axios";
import "react-cookie";
import "vike/server";
function Page(pageContext) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
  const { id } = pageContext;
  const { addItem, addItemToWishList, user } = useAuthContext();
  console.log(id, "id");
  const { data: data2, loading, error } = useFetch(`/products/${id}?populate=*`);
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);
  console.log(data2, "data");
  const handleProductAdd = (item) => {
    if (!!user) {
      addItem(item, quantity);
    } else {
      navigate("/auth/sign-in");
    }
  };
  const handleProductAddToWishList = (item) => {
    if (!!user) {
      addItemToWishList(item, quantity);
    } else {
      navigate("/auth/sign-in");
    }
  };
  console.log(data2 == null ? void 0 : data2.attributes, "data?.attributes");
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { className: "px-[20px] py-[50px] flex gap-[50px]", children: loading ? "loading" : /* @__PURE__ */ jsxs(Fragment$1, { children: [
    /* @__PURE__ */ jsxs("div", { className: "flex-1 flex gap-[20px]", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex-1 max-w-[68px]", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            className: "w-[100%] h-[150px] object-cover cursor-pointer mb-[10px]",
            src: "https://strapi-achf.onrender.com" + ((_d = (_c = (_b = (_a = data2 == null ? void 0 : data2.attributes) == null ? void 0 : _a.img) == null ? void 0 : _b.data) == null ? void 0 : _c.attributes) == null ? void 0 : _d.url),
            alt: "",
            onClick: (e) => setSelectedImg("img")
          }
        ),
        /* @__PURE__ */ jsx(
          "img",
          {
            className: "w-[100%] h-[150px] object-cover cursor-pointer mb-[10px]",
            src: "https://strapi-achf.onrender.com" + ((_h = (_g = (_f = (_e = data2 == null ? void 0 : data2.attributes) == null ? void 0 : _e.img2) == null ? void 0 : _f.data) == null ? void 0 : _g.attributes) == null ? void 0 : _h.url),
            alt: "",
            onClick: (e) => setSelectedImg("img2")
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsx(
        "img",
        {
          className: "w-[100%] max-h-[800px] object-cover",
          src: "https://strapi-achf.onrender.com" + ((_k = (_j = (_i = data2 == null ? void 0 : data2.attributes[selectedImg]) == null ? void 0 : _i.data) == null ? void 0 : _j.attributes) == null ? void 0 : _k.url),
          alt: ""
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-1 flex-col gap-[30px]", children: [
      /* @__PURE__ */ jsx("h1", { children: (_l = data2 == null ? void 0 : data2.attributes) == null ? void 0 : _l.title }),
      /* @__PURE__ */ jsxs("span", { className: "price", children: [
        "₹",
        (_m = data2 == null ? void 0 : data2.attributes) == null ? void 0 : _m.price
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-[18px] font-semibold text-justify", children: (_n = data2 == null ? void 0 : data2.attributes) == null ? void 0 : _n.desc }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-[10px]", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            className: " w-[50px] h-[50px] flex items-center justify-center cursor-pointer border-none;",
            onClick: () => setQuantity((prev) => prev === 1 ? 1 : prev - 1),
            children: "-"
          }
        ),
        quantity,
        /* @__PURE__ */ jsx("button", { onClick: () => setQuantity((prev) => prev + 1), children: "+" })
      ] }),
      /* @__PURE__ */ jsxs(
        "button",
        {
          className: " w-250px p-[10px] bg-[#2879fe] text-white flex items-center justify-center gap-[20px] cursor-pointer border-none font-bold rounded-lg",
          onClick: () => {
            handleProductAdd(data2);
          },
          children: [
            /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", className: "size-6", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" }) }),
            " ADD TO CART"
          ]
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-[20px] flex-col lg:flex-row", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-[10px] text-[#2879fe] text-[14px] cursor-pointer hover:bg-[#2879fe] hover:text-white p-2 rounded-lg", onClick: () => {
          handleProductAddToWishList(data2);
        }, children: [
          /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", className: "size-6", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" }) }),
          " ADD TO WISH LIST"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-[10px] text-[#2879fe] text-[14px] cursor-pointer  hover:bg-[#2879fe] hover:text-white p-2 rounded-lg", children: [
          /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", className: "size-6", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" }) }),
          " ADD TO COMPARE"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-[10px] text-gray-400 text-[14px] mt-[30px]", children: [
        /* @__PURE__ */ jsxs("span", { children: [
          "Product Type: ",
          (_o = data2 == null ? void 0 : data2.attributes) == null ? void 0 : _o.categories.data[0].attributes.title
        ] }),
        /* @__PURE__ */ jsx("span", { children: (_p = data2 == null ? void 0 : data2.attributes) == null ? void 0 : _p.tags })
      ] }),
      /* @__PURE__ */ jsx("hr", { className: "w-[200px] border-solid border-[rgb(238, 237, 237)] border-1" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-[10px] text-gray-400 text-[14px] mt-[30px]", children: [
        /* @__PURE__ */ jsx("span", { children: "DESCRIPTION" }),
        /* @__PURE__ */ jsx("span", { children: (_q = data2 == null ? void 0 : data2.attributes) == null ? void 0 : _q.desc }),
        /* @__PURE__ */ jsx("hr", { className: "w-[200px] border-solid border-[rgb(238, 237, 237)] border-1" }),
        /* @__PURE__ */ jsx("span", { children: "ADDITIONAL INFORMATION" }),
        /* @__PURE__ */ jsx("span", { children: (_r = data2 == null ? void 0 : data2.attributes) == null ? void 0 : _r.additionalInfo })
      ] })
    ] })
  ] }) }) });
}
const import2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Page
}, Symbol.toStringTag, { value: "Module" }));
async function data(pageContext) {
  const userCookie = "headers.cookie" in pageContext && pageContext.headers.cookie;
  console.log(userCookie, "userCookie");
}
const import3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data
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
    definedAtData: { "filePathToShowToUser": "/pages/product/@id/+Page.jsx", "fileExportPathToShowToUser": [] },
    valueSerialized: {
      type: "plus-file",
      exportValues: import2
    }
  },
  ["data"]: {
    type: "standard",
    definedAtData: { "filePathToShowToUser": "/pages/product/@id/+data.js", "fileExportPathToShowToUser": [] },
    valueSerialized: {
      type: "plus-file",
      exportValues: import3
    }
  }
};
export {
  configValuesSerialized
};
