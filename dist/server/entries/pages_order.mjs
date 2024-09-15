import { a as useAuthContext, i as import1 } from "../chunks/chunk-954_1HS1.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import DataTable from "react-data-table-component";
import "react-dom/server";
import "prop-types";
import "js-cookie";
import "vike/abort";
import "vike/client/router";
import "react-cookie";
import "vike/server";
function Page() {
  const { user } = useAuthContext();
  const [userData, setUserData] = useState(null);
  const [columnData, setColumnData] = useState([]);
  const [userToken, setUserToken] = useState(null);
  useEffect(() => {
    console.log(user, "user");
    user !== "undefined" && setUserData(JSON.parse(user == null ? void 0 : user.split("j:")[1]));
  }, [user]);
  useEffect(() => {
    if (typeof window.localStorage !== "undefined") {
      const token = localStorage.getItem("token");
      if (token) {
        console.log(jwtDecode(token), "token_1231");
        setUserToken(token);
      }
    }
  }, []);
  useEffect(() => {
    getOrders();
  }, [userToken]);
  console.log(userData == null ? void 0 : userData.id, "userData?.id");
  const getOrders = async () => {
    var _a, _b, _c;
    const response = typeof (userData == null ? void 0 : userData.id) !== "undefined" && await axios.get(`/api/orders/token=${userToken}&populate=*&[filters][user][id][$eq]=${userData == null ? void 0 : userData.id}`);
    console.log(response, "response");
    const data = (_c = (_b = (_a = response == null ? void 0 : response.data) == null ? void 0 : _a.orderList) == null ? void 0 : _b.data) == null ? void 0 : _c.data;
    console.log(data, "data");
    const newData = data == null ? void 0 : data.map((d) => {
      var _a2, _b2, _c2, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
      console.log((_b2 = (_a2 = d == null ? void 0 : d.attributes) == null ? void 0 : _a2.items) == null ? void 0 : _b2.flatMap((f) => {
        var _a3, _b3, _c3, _d2;
        return (_d2 = (_c3 = (_b3 = (_a3 = f.attributes) == null ? void 0 : _a3.img) == null ? void 0 : _b3.data) == null ? void 0 : _c3.attributes) == null ? void 0 : _d2.url;
      }), "data_123");
      return {
        order_id: d == null ? void 0 : d.id,
        date: new Date((_c2 = d == null ? void 0 : d.attributes) == null ? void 0 : _c2.createdAt).toDateString(),
        price: (_d = d == null ? void 0 : d.attributes) == null ? void 0 : _d.amount,
        status: (_e = d == null ? void 0 : d.attributes) == null ? void 0 : _e.order_status,
        payment_id: (_f = d == null ? void 0 : d.attributes) == null ? void 0 : _f.payment_id,
        receipt_url: (_g = d == null ? void 0 : d.attributes) == null ? void 0 : _g.receipt_url,
        address: (_h = d == null ? void 0 : d.attributes) == null ? void 0 : _h.address,
        name: (_j = (_i = d == null ? void 0 : d.attributes) == null ? void 0 : _i.items) == null ? void 0 : _j.flatMap((f) => {
          var _a3;
          return (_a3 = f == null ? void 0 : f.attributes) == null ? void 0 : _a3.title;
        }).toString(),
        img1: (_l = (_k = d == null ? void 0 : d.attributes) == null ? void 0 : _k.items) == null ? void 0 : _l.flatMap((f) => {
          var _a3, _b3, _c3, _d2;
          return (_d2 = (_c3 = (_b3 = (_a3 = f.attributes) == null ? void 0 : _a3.img) == null ? void 0 : _b3.data) == null ? void 0 : _c3.attributes) == null ? void 0 : _d2.url;
        }),
        img2: (_n = (_m = d == null ? void 0 : d.attributes) == null ? void 0 : _m.items) == null ? void 0 : _n.flatMap((f) => {
          var _a3, _b3, _c3, _d2;
          return (_d2 = (_c3 = (_b3 = (_a3 = f.attributes) == null ? void 0 : _a3.img2) == null ? void 0 : _b3.data) == null ? void 0 : _c3.attributes) == null ? void 0 : _d2.url;
        })
      };
    });
    setColumnData(newData);
  };
  const columns = [
    {
      name: /* @__PURE__ */ jsx("div", { className: "text-base font-medium text-gray-500", children: "Order ID:" }),
      selector: (row) => row.order_id,
      cell: (row, i, column) => {
        return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { className: "mt-1.5 text-base font-semibold text-gray-900", children: /* @__PURE__ */ jsxs("div", { className: "hover:underline", children: [
          "#",
          row == null ? void 0 : row.order_id
        ] }) }) });
      }
    },
    {
      name: /* @__PURE__ */ jsx("div", { className: "text-base font-medium text-gray-500", children: "Name:" }),
      selector: (row) => row.name,
      cell: (row, i, column) => {
        var _a, _b;
        const [isHovering, setIsHovered] = useState(false);
        const onMouseEnter = () => setIsHovered(true);
        const onMouseLeave = () => setIsHovered(false);
        return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "flex-col flex p-2", children: [
          /* @__PURE__ */ jsx("div", { className: "mt-1.5 text-base font-semibold text-gray-900", children: /* @__PURE__ */ jsx("div", { className: "hover:underline", children: row == null ? void 0 : row.name }) }),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "flex items-center  cursor-pointer overscroll-x-auto w-auto",
              onMouseEnter,
              onMouseLeave,
              children: /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { className: "h-auto flex flex-row gap-2 justify-center", children: isHovering ? (_a = row == null ? void 0 : row.img1) == null ? void 0 : _a.map((d, idx) => /* @__PURE__ */ jsx("img", { src: "https://strapi-achf.onrender.com" + d, width: 88, height: 77, alt: "logo" }, idx)) : (_b = row == null ? void 0 : row.img2) == null ? void 0 : _b.map((d, idx) => /* @__PURE__ */ jsx("img", { src: "https://strapi-achf.onrender.com" + d, width: 88, height: 77, alt: "logo" }, idx)) }) })
            }
          )
        ] }) });
      }
    },
    {
      name: /* @__PURE__ */ jsx("div", { className: "text-base font-medium text-gray-500", children: "Date:" }),
      selector: (row) => row.date,
      cell: (row, i, column) => {
        return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { className: "mt-1.5 text-base font-semibold text-gray-900", children: row.date }) });
      }
    },
    {
      name: /* @__PURE__ */ jsx("div", { className: "text-base font-medium text-gray-500", children: "Price:" }),
      selector: (row) => row.price,
      cell: (row, i, column) => {
        return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "mt-1.5 text-base font-semibold text-gray-900", children: [
          "₹ ",
          row.price
        ] }) });
      }
    },
    {
      name: /* @__PURE__ */ jsx("div", { className: "text-base font-medium text-gray-500", children: "Status:" }),
      selector: (row) => row.status,
      cell: (row, i, column) => {
        const statusBadge = () => {
          switch (row == null ? void 0 : row.status) {
            case "INITIATED":
              return /* @__PURE__ */ jsxs("span", { className: "bg-gray-100 text-gray-800 text-sm  flex flex-row gap-2 font-medium me-2 px-2.5 py-0.5 rounded  items-center lowercase", children: [
                /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", "stroke-width": "1.5", stroke: "currentColor", className: "h-5 w-5", children: /* @__PURE__ */ jsx("path", { "stroke-linecap": "round", "stroke-linejoin": "round", d: "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" }) }),
                row == null ? void 0 : row.status
              ] });
            case "CONFIRMED":
              return /* @__PURE__ */ jsxs("span", { className: "bg-green-100 text-green-800 text-sm  flex flex-row gap-2 font-medium me-2 px-2.5 py-0.5 rounded  items-center lowercase", children: [
                /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", "stroke-width": "1.5", stroke: "currentColor", class: "h-5 w-5", children: /* @__PURE__ */ jsx("path", { "stroke-linecap": "round", "stroke-linejoin": "round", d: "m4.5 12.75 6 6 9-13.5" }) }),
                row == null ? void 0 : row.status
              ] });
            case "PACKED":
              return /* @__PURE__ */ jsxs("span", { className: "bg-indigo-100 text-indigo-800 text-sm  flex flex-row gap-2 font-medium me-2 px-2.5 py-0.5 rounded  items-center lowercase", children: [
                /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", "stroke-width": "1.5", stroke: "currentColor", class: "h-5 w-5", children: /* @__PURE__ */ jsx("path", { "stroke-linecap": "round", "stroke-linejoin": "round", d: "m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" }) }),
                row == null ? void 0 : row.status
              ] });
            case "SHIPPED":
              return /* @__PURE__ */ jsxs("span", { className: "bg-purple-100 text-purple-800 text-sm  flex flex-row gap-2 font-medium me-2 px-2.5 py-0.5 rounded  items-center lowercase", children: [
                /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", version: "1.1", width: "256", height: "256", viewBox: "0 0 256 256", "xml:space": "preserve", className: "h-7 w-7  C", children: [
                  /* @__PURE__ */ jsx("defs", {}),
                  /* @__PURE__ */ jsxs("g", { transform: "translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)", children: [
                    /* @__PURE__ */ jsx("path", { d: "M 89.334 47.69 L 79.145 36.229 c -0.5 -0.563 -1.218 -0.885 -1.97 -0.885 h -9.356 v -6.467 c 0 -3.053 -2.1 -5.537 -4.681 -5.537 H 31.866 c -2.581 0 -4.681 2.484 -4.681 5.537 v 30.23 c 0 1.758 1.245 3.188 2.774 3.188 h 7.277 c 0.563 2.495 2.794 4.365 5.457 4.365 s 4.893 -1.87 5.457 -4.365 h 17.669 h 2 h 7.542 c 0.563 2.495 2.794 4.365 5.457 4.365 s 4.894 -1.87 5.457 -4.365 h 1.089 c 1.453 0 2.636 -1.183 2.636 -2.636 V 49.441 C 90 48.797 89.764 48.175 89.334 47.69 z M 86.773 47.819 H 74.619 c -0.255 0 -0.463 -0.207 -0.463 -0.462 v -5.44 c 0 -0.255 0.208 -0.463 0.463 -0.463 h 6.495 L 86.773 47.819 z M 42.693 64.66 c -1.984 0 -3.598 -1.614 -3.598 -3.598 c 0 -1.984 1.614 -3.599 3.598 -3.599 s 3.598 1.614 3.598 3.599 C 46.291 63.046 44.677 64.66 42.693 64.66 z M 48.232 60.295 c -0.376 -2.724 -2.713 -4.831 -5.539 -4.831 s -5.163 2.107 -5.539 4.831 h -7.195 c -0.366 0 -0.774 -0.487 -0.774 -1.188 v -30.23 c 0 -1.95 1.203 -3.537 2.681 -3.537 h 31.272 c 1.479 0 2.681 1.587 2.681 3.537 v 6.467 v 15.598 H 38.095 c -0.552 0 -1 0.447 -1 1 s 0.448 1 1 1 h 27.724 v 7.353 H 48.232 z M 80.817 64.66 c -1.983 0 -3.598 -1.614 -3.598 -3.598 c 0 -1.984 1.614 -3.599 3.598 -3.599 c 1.984 0 3.599 1.614 3.599 3.599 C 84.416 63.046 82.802 64.66 80.817 64.66 z M 87.364 60.295 h -1.007 c -0.376 -2.724 -2.714 -4.831 -5.54 -4.831 s -5.163 2.107 -5.539 4.831 h -7.46 V 37.344 h 9.356 c 0.182 0 0.354 0.078 0.476 0.214 l 1.686 1.896 h -4.717 c -1.358 0 -2.463 1.105 -2.463 2.463 v 5.44 c 0 1.357 1.104 2.462 2.463 2.462 H 88 v 9.84 C 88 60.01 87.715 60.295 87.364 60.295 z", transform: " matrix(1 0 0 1 0 0) ", "stroke-linecap": "round" }),
                    /* @__PURE__ */ jsx("path", { d: "M 21.207 52.942 H 8.615 c -0.552 0 -1 -0.447 -1 -1 s 0.448 -1 1 -1 h 12.592 c 0.552 0 1 0.447 1 1 S 21.759 52.942 21.207 52.942 z", transform: " matrix(1 0 0 1 0 0) ", "stroke-linecap": "round" }),
                    /* @__PURE__ */ jsx("path", { d: "M 21.207 46.031 H 4.617 c -0.552 0 -1 -0.448 -1 -1 s 0.448 -1 1 -1 h 16.59 c 0.552 0 1 0.448 1 1 S 21.759 46.031 21.207 46.031 z", transform: " matrix(1 0 0 1 0 0) ", "stroke-linecap": "round" }),
                    /* @__PURE__ */ jsx("path", { d: "M 21.207 39.121 H 1 c -0.552 0 -1 -0.448 -1 -1 s 0.448 -1 1 -1 h 20.207 c 0.552 0 1 0.448 1 1 S 21.759 39.121 21.207 39.121 z", transform: " matrix(1 0 0 1 0 0) ", "stroke-linecap": "round" })
                  ] })
                ] }),
                row == null ? void 0 : row.status
              ] });
            case "DELIVERED":
              return /* @__PURE__ */ jsxs("span", { className: "bg-green-100 text-green-800 text-sm  flex flex-row gap-2 font-medium me-2 px-2.5 py-0.5 rounded  items-center lowercase", children: [
                /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", version: "1.1", width: "256", height: "256", viewBox: "0 0 256 256", "xml:space": "preserve", className: "h-7 w-7", children: [
                  /* @__PURE__ */ jsx("defs", {}),
                  /* @__PURE__ */ jsxs("g", { transform: "translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)", children: [
                    /* @__PURE__ */ jsx("path", { d: "M 87.364 62.295 h -1.948 v -2 h 1.948 c 0.351 0 0.636 -0.285 0.636 -0.636 V 49.441 c 0 -0.155 -0.058 -0.307 -0.161 -0.424 L 77.65 37.558 c -0.121 -0.136 -0.294 -0.214 -0.476 -0.214 h -9.356 v 22.951 h 8.401 v 2 H 65.818 V 35.344 h 11.356 c 0.752 0 1.47 0.322 1.97 0.885 L 89.334 47.69 C 89.764 48.175 90 48.797 90 49.441 v 10.218 C 90 61.112 88.817 62.295 87.364 62.295 z", transform: " matrix(1 0 0 1 0 0) ", "stroke-linecap": "round" }),
                    /* @__PURE__ */ jsx("path", { d: "M 67.818 62.295 H 47.291 v -2 h 18.527 V 28.877 c 0 -1.95 -1.202 -3.537 -2.681 -3.537 H 31.866 c -1.479 0 -2.681 1.587 -2.681 3.537 v 30.23 c 0 0.7 0.408 1.188 0.774 1.188 h 8.143 v 2 h -8.143 c -1.53 0 -2.774 -1.43 -2.774 -3.188 v -30.23 c 0 -3.053 2.1 -5.537 4.681 -5.537 h 31.272 c 2.581 0 4.681 2.484 4.681 5.537 V 62.295 z", transform: " matrix(1 0 0 1 0 0) ", "stroke-linecap": "round" }),
                    /* @__PURE__ */ jsx("path", { d: "M 80.817 66.66 c -3.087 0 -5.598 -2.511 -5.598 -5.598 s 2.511 -5.599 5.598 -5.599 s 5.599 2.512 5.599 5.599 S 83.904 66.66 80.817 66.66 z M 80.817 57.464 c -1.983 0 -3.598 1.614 -3.598 3.599 c 0 1.983 1.614 3.598 3.598 3.598 c 1.984 0 3.599 -1.614 3.599 -3.598 C 84.416 59.078 82.802 57.464 80.817 57.464 z", transform: " matrix(1 0 0 1 0 0) ", "stroke-linecap": "round" }),
                    /* @__PURE__ */ jsx("path", { d: "M 42.693 66.66 c -3.087 0 -5.598 -2.511 -5.598 -5.598 s 2.511 -5.599 5.598 -5.599 s 5.598 2.512 5.598 5.599 S 45.78 66.66 42.693 66.66 z M 42.693 57.464 c -1.984 0 -3.598 1.614 -3.598 3.599 c 0 1.983 1.614 3.598 3.598 3.598 s 3.598 -1.614 3.598 -3.598 C 46.291 59.078 44.677 57.464 42.693 57.464 z", transform: " matrix(1 0 0 1 0 0) ", "stroke-linecap": "round" }),
                    /* @__PURE__ */ jsx("path", { d: "M 89 49.819 H 74.619 c -1.358 0 -2.463 -1.104 -2.463 -2.462 v -5.44 c 0 -1.358 1.104 -2.463 2.463 -2.463 h 6.944 v 2 h -6.944 c -0.255 0 -0.463 0.208 -0.463 0.463 v 5.44 c 0 0.255 0.208 0.462 0.463 0.462 H 89 V 49.819 z", transform: " matrix(1 0 0 1 0 0) ", "stroke-linecap": "round" }),
                    /* @__PURE__ */ jsx("path", { d: "M 21.207 52.942 H 8.615 c -0.552 0 -1 -0.447 -1 -1 s 0.448 -1 1 -1 h 12.592 c 0.552 0 1 0.447 1 1 S 21.759 52.942 21.207 52.942 z", transform: " matrix(1 0 0 1 0 0) ", "stroke-linecap": "round" }),
                    /* @__PURE__ */ jsx("path", { d: "M 21.207 46.031 H 4.617 c -0.552 0 -1 -0.448 -1 -1 s 0.448 -1 1 -1 h 16.59 c 0.552 0 1 0.448 1 1 S 21.759 46.031 21.207 46.031 z", transform: " matrix(1 0 0 1 0 0) ", "stroke-linecap": "round" }),
                    /* @__PURE__ */ jsx("path", { d: "M 21.207 39.121 H 1 c -0.552 0 -1 -0.448 -1 -1 s 0.448 -1 1 -1 h 20.207 c 0.552 0 1 0.448 1 1 S 21.759 39.121 21.207 39.121 z", transform: " matrix(1 0 0 1 0 0) ", "stroke-linecap": "round" }),
                    /* @__PURE__ */ jsx("path", { d: "M 47.502 51.655 c -5.695 0 -10.328 -4.633 -10.328 -10.328 S 41.807 31 47.502 31 c 5.694 0 10.327 4.633 10.327 10.328 S 53.196 51.655 47.502 51.655 z M 47.502 33 c -4.592 0 -8.328 3.736 -8.328 8.328 s 3.736 8.328 8.328 8.328 c 4.592 0 8.327 -3.736 8.327 -8.328 S 52.094 33 47.502 33 z", transform: " matrix(1 0 0 1 0 0) ", "stroke-linecap": "round" }),
                    /* @__PURE__ */ jsx("path", { d: "M 46.299 45.637 c -0.272 0 -0.533 -0.111 -0.722 -0.308 l -2.728 -2.845 c -0.382 -0.398 -0.369 -1.031 0.03 -1.414 c 0.398 -0.383 1.031 -0.37 1.414 0.03 l 1.96 2.045 l 4.417 -5.208 c 0.357 -0.42 0.988 -0.473 1.409 -0.116 c 0.422 0.357 0.474 0.988 0.116 1.41 l -5.134 6.053 c -0.184 0.216 -0.449 0.344 -0.732 0.353 C 46.319 45.637 46.309 45.637 46.299 45.637 z", transform: " matrix(1 0 0 1 0 0) ", "stroke-linecap": "round" })
                  ] })
                ] }),
                row == null ? void 0 : row.status
              ] });
          }
        };
        return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { children: statusBadge() }) });
      }
    },
    {
      name: /* @__PURE__ */ jsx("div", { className: "text-base font-medium text-gray-500", children: "Payment Id:" }),
      selector: (row) => row.payment_id,
      cell: (row, i, column) => {
        return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { className: "mt-1.5 text-base font-semibold text-gray-900", children: row.payment_id }) });
      }
    },
    {
      name: /* @__PURE__ */ jsx("div", { className: "text-base font-medium text-gray-500", children: "Delivery-Address:" }),
      selector: (row) => row.address,
      cell: (row, i, column) => {
        return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { className: "mt-1.5 text-base font-semibold text-gray-900", children: row.address }) });
      }
    },
    {
      name: /* @__PURE__ */ jsx("div", { className: "text-base font-medium text-gray-500", children: "Receipt:" }),
      selector: (row) => row.payment_id,
      cell: (row, i, column) => {
        return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("a", { href: row == null ? void 0 : row.receipt_url, children: /* @__PURE__ */ jsx("div", { className: "mt-1.5 text-base font-semibold text-gray-900 hover:cursor-pointer", children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", "stroke-width": "1.5", stroke: "currentColor", class: "size-6", children: /* @__PURE__ */ jsx("path", { "stroke-linecap": "round", "stroke-linejoin": "round", d: "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" }) }) }) }) });
      }
    }
  ];
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("section", { className: "bg-white py-8 antialiased md:py-16", children: /* @__PURE__ */ jsx("div", { className: "mx-auto px-4 2xl:px-0", children: /* @__PURE__ */ jsxs("div", { className: "", children: [
    /* @__PURE__ */ jsxs("div", { className: "gap-4 sm:flex sm:items-center sm:justify-between", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-gray-900 sm:text-2xl", children: "My orders" }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 gap-4 space-y-4 sm:mt-0 sm:flex sm:items-center sm:justify-end sm:space-y-0", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "order-type", className: "sr-only mb-2 block text-sm font-medium text-gray-900", children: "Select order type" }),
          /* @__PURE__ */ jsxs("select", { id: "order-type", className: "block w-full min-w-[8rem] rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500", children: [
            /* @__PURE__ */ jsx("option", { selected: true, children: "All orders" }),
            /* @__PURE__ */ jsx("option", { value: "pre-order", children: "Pre-order" }),
            /* @__PURE__ */ jsx("option", { value: "transit", children: "In transit" }),
            /* @__PURE__ */ jsx("option", { value: "confirmed", children: "Confirmed" }),
            /* @__PURE__ */ jsx("option", { value: "cancelled", children: "Cancelled" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("span", { className: "inline-block text-gray-500 ", children: " from " }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "duration", className: "sr-only mb-2 block text-sm font-medium text-gray-900", children: "Select duration" }),
          /* @__PURE__ */ jsxs("select", { id: "duration", className: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500", children: [
            /* @__PURE__ */ jsx("option", { selected: true, children: "this week" }),
            /* @__PURE__ */ jsx("option", { value: "this month", children: "this month" }),
            /* @__PURE__ */ jsx("option", { value: "last 3 months", children: "the last 3 months" }),
            /* @__PURE__ */ jsx("option", { value: "lats 6 months", children: "the last 6 months" }),
            /* @__PURE__ */ jsx("option", { value: "this year", children: "this year" })
          ] })
        ] })
      ] })
    ] }),
    userToken && /* @__PURE__ */ jsx(
      DataTable,
      {
        columns,
        data: columnData,
        pagination: true
      }
    )
  ] }) }) }) });
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
    definedAtData: { "filePathToShowToUser": "/pages/order/+Page.jsx", "fileExportPathToShowToUser": [] },
    valueSerialized: {
      type: "plus-file",
      exportValues: import2
    }
  }
};
export {
  configValuesSerialized
};
