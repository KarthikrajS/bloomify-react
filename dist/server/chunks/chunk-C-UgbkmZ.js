import { jsx, jsxs } from "react/jsx-runtime";
import "react";
const Card = (props) => {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const { item } = props;
  console.log(item, "itemqweq");
  return /* @__PURE__ */ jsx("a", { className: "link", href: `/product/${item.id}`, children: /* @__PURE__ */ jsxs("div", { className: "w-[280px] flex flex-col gap-[10px] mb-[50px]", children: [
    /* @__PURE__ */ jsxs("div", { className: "w-[100%] h-[400px] overflow-hidden relative", children: [
      (item == null ? void 0 : item.attributes.isNew) && /* @__PURE__ */ jsx("span", { className: "absolute top-[5px] left-[5px] bg-white text-teal-400 px-[3px] py-[5px] z-30 font-semibold text-lg", children: "New Season" }),
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "https://strapi-achf.onrender.com" + ((_d = (_c = (_b = (_a = item.attributes) == null ? void 0 : _a.img) == null ? void 0 : _b.data) == null ? void 0 : _c.attributes) == null ? void 0 : _d.url),
          alt: "",
          className: "z-20 hover:z-10  w-[100%] h-[100%] object-cover absolute"
        }
      ),
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "https://strapi-achf.onrender.com" + ((_h = (_g = (_f = (_e = item.attributes) == null ? void 0 : _e.img2) == null ? void 0 : _f.data) == null ? void 0 : _g.attributes) == null ? void 0 : _h.url),
          alt: "",
          className: "z-10 hover:z-20  w-[100%] h-[100%] object-cover absolute"
        }
      )
    ] }),
    /* @__PURE__ */ jsx("h2", { children: item == null ? void 0 : item.attributes.title }),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-[20px]", children: [
      /* @__PURE__ */ jsxs("h3", { className: "text-[18px] font-semibold first:text-gray-400 first:line-through", children: [
        "₹",
        item.oldPrice || (item == null ? void 0 : item.attributes.price) + 20
      ] }),
      /* @__PURE__ */ jsxs("h3", { className: "text-[18px] font-semibold first:text-gray-400 first:line-through", children: [
        "₹",
        item == null ? void 0 : item.attributes.price
      ] })
    ] })
  ] }) });
};
export {
  Card as C
};
