import { i as import1 } from "../chunks/chunk-954_1HS1.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { u as useFetch } from "../chunks/chunk-RXAyvvl2.js";
import { C as Card } from "../chunks/chunk-C-UgbkmZ.js";
import "react-dom/server";
import "prop-types";
import "js-cookie";
import "vike/abort";
import "axios";
import "vike/client/router";
import "react-cookie";
import "vike/server";
const List = ({ subCats, maxPrice, sort, catId }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}${subCats == null ? void 0 : subCats.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  );
  console.log(data, "data_Asda");
  return /* @__PURE__ */ jsx("div", { className: "flex justify-around flex-row gap-3", children: loading ? "loading" : data == null ? void 0 : data.map((item) => {
    console.log(item, "itemasdad");
    return /* @__PURE__ */ jsx(Card, { item }, item.id);
  }) });
};
function Page(pageContext) {
  const { id } = pageContext;
  console.log(id, "id");
  const [maxPrice, setMaxPrice] = useState(5e3);
  const [sort, setSort] = useState("desc");
  const [selectedSubCats, setSelectedSubCats] = useState([]);
  const { data, loading, error } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${id}`
  );
  console.log(data, "data");
  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    console.log(value, "value");
    setSelectedSubCats(
      isChecked ? [...selectedSubCats, value] : selectedSubCats.filter((item) => item !== value)
    );
  };
  const handleToggle = (e) => {
    sort === "desc" ? setSort("asc") : setSort("desc");
  };
  return /* @__PURE__ */ jsxs("div", { className: "px-[30px] py-[50px] flex", children: [
    /* @__PURE__ */ jsxs("div", { className: " sticky h-[100%] top-[50px] p-[10px]", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-[30px]", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-semibold mb-[20px]", children: "Product Categories" }),
        data == null ? void 0 : data.map((item) => /* @__PURE__ */ jsxs("div", { className: "mb-10px", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "checkbox",
              id: item.id,
              value: item.id,
              onChange: (e) => handleChange(e)
            }
          ),
          /* @__PURE__ */ jsx("label", { className: "mb-[10px] ml-3", htmlFor: item.id, children: item.attributes.title })
        ] }, item.id))
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-[30px]", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-semibold mb-[20px]", children: "Filter by price" }),
        /* @__PURE__ */ jsxs("div", { className: "mb-10px", children: [
          /* @__PURE__ */ jsx("span", { children: "0" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "range",
              min: 0,
              max: 5e3,
              value: maxPrice,
              onChange: (e) => setMaxPrice(e.target.value)
            }
          ),
          /* @__PURE__ */ jsx("span", { children: maxPrice })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-[30px]", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-semibold mb-[20px]", children: "Sort by" }),
        /* @__PURE__ */ jsxs("label", { className: "inline-flex items-center cursor-pointer gap-3", children: [
          /* @__PURE__ */ jsx("span", { className: " text-sm font-medium text-gray-900 dark:text-gray-300", children: "Low" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "checkbox",
              id: "asc",
              value: "asc",
              name: "price",
              className: "sr-only peer",
              onChange: (e) => handleToggle()
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" }),
          /* @__PURE__ */ jsx("span", { className: "ms-3 text-sm font-medium text-gray-900 dark:text-gray-300", children: "High" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex-1 p-[10px]", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          className: "w-[100%] h-[300px] object-cover mb-[50px]",
          src: "https://img.freepik.com/free-photo/beautiful-young-woman-wearing-sari_23-2149502989.jpg?t=st=1723884103~exp=1723887703~hmac=c8cedd044a16a956d56efa72626073cb2454be05036008b729efbde56399459c&w=1800",
          alt: ""
        }
      ),
      /* @__PURE__ */ jsx(List, { catId: id, maxPrice, sort, subCats: selectedSubCats })
    ] })
  ] });
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
    definedAtData: { "filePathToShowToUser": "/pages/products/@id/+Page.jsx", "fileExportPathToShowToUser": [] },
    valueSerialized: {
      type: "plus-file",
      exportValues: import2
    }
  }
};
export {
  configValuesSerialized
};
