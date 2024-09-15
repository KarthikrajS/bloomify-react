import { i as import1 } from "../chunks/chunk-954_1HS1.js";
import { jsxs, jsx } from "react/jsx-runtime";
import { useState, Fragment } from "react";
import { C as Card } from "../chunks/chunk-C-UgbkmZ.js";
import { u as useFetch } from "../chunks/chunk-RXAyvvl2.js";
import "react-dom/server";
import "prop-types";
import "js-cookie";
import "vike/abort";
import "axios";
import "vike/client/router";
import "react-cookie";
import "vike/server";
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    "https://images.pexels.com/photos/27155551/pexels-photo-27155551/free-photo-of-beautiful-indian-bride-with-traditional-dresses-and-makeup.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/1297483/pexels-photo-1297483.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/19567892/pexels-photo-19567892/free-photo-of-model-in-a-sari-and-a-green-blouse-sitting-with-a-big-leaf-among-the-pillars.jpeg?auto=compress&cs=tinysrgb&w=1600"
  ];
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    console.log("inside");
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };
  return /* @__PURE__ */ jsxs("div", { className: "h-[calc(100vh-80px)] w-[100vw] relative overflow-hidden z-0", children: [
    /* @__PURE__ */ jsxs("div", { className: "w-[300vw] h-[100%] flex transition-all duration-100 ease-in-out", style: { transform: `translateX(-${currentSlide * 100}vw)` }, children: [
      /* @__PURE__ */ jsx("img", { className: "w-[100vw] h-[100%] object-cover", src: data[0], alt: "" }),
      /* @__PURE__ */ jsx("img", { className: "w-[100vw] h-[100%] object-cover", src: data[1], alt: "" }),
      /* @__PURE__ */ jsx("img", { className: "w-[100vw] h-[100%] object-cover", src: data[2], alt: "" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: " w-fit flex absolute left-0 right-0 bottom-[100px] gap-3 m-auto ", children: [
      /* @__PURE__ */ jsx("div", { className: "bg-white w-[50px] h-[50px] border-solid border-[#999] border-[1px] flex items-center justify-center cursor-pointer", onClick: prevSlide, children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", className: "size-6", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" }) }) }),
      /* @__PURE__ */ jsx("div", { className: " bg-white w-[50px] h-[50px] border-solid border-[#999] border-[1px] flex items-center justify-center cursor-pointer", onClick: nextSlide, children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", className: "size-6", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" }) }) })
    ] })
  ] });
};
const FeaturedProducts = (props) => {
  const { type } = props;
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );
  return /* @__PURE__ */ jsxs("div", { className: "mx-[100px] my-[200px]", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-[50px] flex-col", children: [
      /* @__PURE__ */ jsxs("h1", { className: " flex-2 capitalize", children: [
        type,
        " products"
      ] }),
      /* @__PURE__ */ jsx("p", { className: "flex-3 text-gray-400", children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-center gap-[50px]", children: error ? "Something went wrong!" : loading ? "loading" : data == null ? void 0 : data.map((item) => /* @__PURE__ */ jsx(Card, { item }, item.id)) })
  ] });
};
const Categories = () => {
  return /* @__PURE__ */ jsxs("div", { className: "flex h-[80vh] gap-[10px] m-[10px]", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-1 flex-col gap-[10px]", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-1 gap-[10px] relative overflow-hidden -z-10", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            className: "w-[100%] h-[100%] object-cover",
            src: "https://img.freepik.com/free-photo/young-woman-beautiful-red-dress_1303-17503.jpg?t=st=1723883989~exp=1723887589~hmac=9d1af2506d842c1eff9388c868ef22412361dba38414171213cd4a092d8452b9&w=900",
            alt: ""
          }
        ),
        /* @__PURE__ */ jsx("button", { className: "absolute m-w-[100px] w-fit h-[50px] p-[10px] top-0 bottom-0 left-0 right-0 m-auto cursor-pointer border-none bg-white uppercase font-bold", children: /* @__PURE__ */ jsx("a", { className: "link", href: "/products/1", children: "Sale" }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-1 gap-[10px] relative overflow-hidden -z-10", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            className: "w-[100%] h-[100%] object-cover",
            src: "https://img.freepik.com/free-photo/portrait-young-woman-wearing-traditional-sari-garment_23-2149565139.jpg?t=st=1723883422~exp=1723887022~hmac=42185f9dd86e8f1b3315ffb9800564daf973be6a7282eeef91b54b7e900faf5a&w=740",
            alt: ""
          }
        ),
        /* @__PURE__ */ jsx("button", { className: "absolute m-w-[100px] w-fit h-[50px] p-[10px] top-0 bottom-0 left-0 right-0 m-auto cursor-pointer border-none bg-white uppercase font-bold", children: /* @__PURE__ */ jsx("a", { href: "/products/1", className: "link", children: "Women" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-1 flex-col gap-[10px]", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-1 gap-[10px] relative overflow-hidden -z-10", children: [
      " ",
      /* @__PURE__ */ jsx(
        "img",
        {
          className: "w-[100%] h-[100%] object-cover",
          src: "https://img.freepik.com/free-photo/beautiful-young-woman-wearing-sari_23-2149502994.jpg?t=st=1723883632~exp=1723887232~hmac=9d67b8c061fb358e90dc640afb205ad55d2916ea186297f430146b97e1b8b006&w=1600",
          alt: ""
        }
      ),
      /* @__PURE__ */ jsx("button", { className: "absolute m-w-[100px] w-fit h-[50px] p-[10px] top-0 bottom-0 left-0 right-0 m-auto cursor-pointer border-none bg-white uppercase font-bold", children: /* @__PURE__ */ jsx("a", { href: "/products/1", className: "link", children: "New Season" }) })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-1 flex-col gap-[10px] flex-2", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-1 gap-[10px] relative overflow-hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "flex flex-1 flex-col gap-[10px]", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-1 gap-[10px] relative overflow-hidden -z-10", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              className: "w-[100%] h-[100%] object-cover",
              src: "https://img.freepik.com/premium-photo/blue-color-this-saree-is-very-popular-choice_917855-7.jpg?w=900",
              alt: ""
            }
          ),
          /* @__PURE__ */ jsx("button", { className: "absolute m-w-[100px] w-fit h-[50px] p-[10px] top-0 bottom-0 left-0 right-0 m-auto cursor-pointer border-none bg-white uppercase font-bold", children: /* @__PURE__ */ jsx("a", { href: "/products/1", className: "link", children: "SAREE" }) })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-1 flex-col gap-[10px]", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-1 gap-[10px] relative overflow-hidden -z-10", children: [
          " ",
          /* @__PURE__ */ jsx(
            "img",
            {
              className: "w-[100%] h-[100%] object-cover",
              src: "https://img.freepik.com/premium-photo/gold-silver-jewelry_632261-2360.jpg?w=1600",
              alt: ""
            }
          ),
          /* @__PURE__ */ jsx("button", { className: "absolute m-w-[100px] w-fit h-[50px] p-[10px] top-0 bottom-0 left-0 right-0 m-auto cursor-pointer border-none bg-white uppercase font-bold", children: /* @__PURE__ */ jsx("a", { href: "/products/1", className: "link", children: "Accessories" }) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-1 gap-[10px] relative overflow-hidden -z-10", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            className: "w-[100%] h-[100%] object-cover",
            src: "https://img.freepik.com/free-photo/sideways-woman-posing-green-house-looking-camera_23-2148261256.jpg?t=st=1723883912~exp=1723887512~hmac=6022167ec2aa3ef1a5d0e3bf7bf739f48c13e0a088c54c233fa1437a5684e5e0&w=1600",
            alt: ""
          }
        ),
        /* @__PURE__ */ jsx("button", { className: "absolute m-w-[100px] w-fit h-[50px] p-[10px] top-0 bottom-0 left-0 right-0 m-auto cursor-pointer border-none bg-white uppercase font-bold", children: /* @__PURE__ */ jsx("a", { href: "/products/1", className: "link", children: "Chudidhar" }) })
      ] })
    ] })
  ] });
};
function Page() {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(Slider, {}),
    /* @__PURE__ */ jsx(FeaturedProducts, { type: "featured" }),
    /* @__PURE__ */ jsx(Categories, {}),
    /* @__PURE__ */ jsx(FeaturedProducts, { type: "trending" })
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
    definedAtData: { "filePathToShowToUser": "/pages/index/+Page.jsx", "fileExportPathToShowToUser": [] },
    valueSerialized: {
      type: "plus-file",
      exportValues: import2
    }
  }
};
export {
  configValuesSerialized
};
