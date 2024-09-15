import { setImportBuildGetters } from "vike/__internal/loadImportBuild";
const _route$1 = "/product/@id";
const import1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _route$1
}, Symbol.toStringTag, { value: "Module" }));
function route$1(pageContext) {
  const parts = "urlPathname" in pageContext && pageContext.urlPathname.split("/");
  console.log(parts, "parts");
  if (parts[1] !== "product")
    return false;
  else {
    return {
      routeParams: {
        id: parts[2]
      }
    };
  }
}
const import2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  route: route$1
}, Symbol.toStringTag, { value: "Module" }));
const _route = "/products/@id";
const import3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _route
}, Symbol.toStringTag, { value: "Module" }));
function route(pageContext) {
  const parts = "urlPathname" in pageContext && pageContext.urlPathname.split("/");
  if (parts[1] !== "products")
    return false;
  else {
    return {
      routeParams: {
        id: parts[2]
      }
    };
  }
}
const import4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  route
}, Symbol.toStringTag, { value: "Module" }));
const pageFilesLazy = {};
const pageFilesEager = {};
const pageFilesExportNamesLazy = {};
const pageFilesExportNamesEager = {};
const pageFilesList = [];
const neverLoaded = {};
const pageConfigsSerialized = [
  {
    pageId: "/pages/_error",
    isErrorPage: true,
    routeFilesystem: void 0,
    loadConfigValuesAll: () => import("./entries/pages_error.mjs"),
    configValuesSerialized: {
      ["clientEntryLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["clientRouting"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "/renderer/+config.js", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  },
  {
    pageId: "/pages/about",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/about", "definedBy": "/pages/about/" },
    loadConfigValuesAll: () => import("./entries/pages_about.mjs"),
    configValuesSerialized: {
      ["clientEntryLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["clientRouting"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "/renderer/+config.js", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  },
  {
    pageId: "/pages/auth/sign-in",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/auth/sign-in", "definedBy": "/pages/auth/sign-in/" },
    loadConfigValuesAll: () => import("./entries/pages_auth_sign-in.mjs"),
    configValuesSerialized: {
      ["clientEntryLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["clientRouting"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "/renderer/+config.js", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  },
  {
    pageId: "/pages/auth/sign-up",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/auth/sign-up", "definedBy": "/pages/auth/sign-up/" },
    loadConfigValuesAll: () => import("./entries/pages_auth_sign-up.mjs"),
    configValuesSerialized: {
      ["clientEntryLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["clientRouting"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "/renderer/+config.js", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  },
  {
    pageId: "/pages/checkout",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/checkout", "definedBy": "/pages/checkout/" },
    loadConfigValuesAll: () => import("./entries/pages_checkout.mjs"),
    configValuesSerialized: {
      ["clientEntryLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["clientRouting"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "/renderer/+config.js", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  },
  {
    pageId: "/pages/index",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/", "definedBy": "/pages/index/" },
    loadConfigValuesAll: () => import("./entries/pages_index.mjs"),
    configValuesSerialized: {
      ["clientEntryLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["clientRouting"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "/renderer/+config.js", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  },
  {
    pageId: "/pages/order",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/order", "definedBy": "/pages/order/" },
    loadConfigValuesAll: () => import("./entries/pages_order.mjs"),
    configValuesSerialized: {
      ["clientEntryLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["clientRouting"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "/renderer/+config.js", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  },
  {
    pageId: "/pages/product",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/product", "definedBy": "/pages/product/" },
    loadConfigValuesAll: () => import("./entries/pages_product.mjs"),
    configValuesSerialized: {
      ["clientEntryLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: false
        }
      },
      ["clientRouting"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "/renderer/+config.js", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["route"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "/pages/product/+route.js", "fileExportPathToShowToUser": [] },
        valueSerialized: {
          type: "plus-file",
          exportValues: import1
        }
      }
    }
  },
  {
    pageId: "/pages/product/@id",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/product/@id", "definedBy": "/pages/product/@id/" },
    loadConfigValuesAll: () => import("./entries/pages_product_-id.mjs"),
    configValuesSerialized: {
      ["clientEntryLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["clientRouting"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "/renderer/+config.js", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["route"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "/pages/product/@id/+route.js", "fileExportPathToShowToUser": [] },
        valueSerialized: {
          type: "plus-file",
          exportValues: import2
        }
      }
    }
  },
  {
    pageId: "/pages/products",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/products", "definedBy": "/pages/products/" },
    loadConfigValuesAll: () => import("./entries/pages_products.mjs"),
    configValuesSerialized: {
      ["clientEntryLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: false
        }
      },
      ["clientRouting"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "/renderer/+config.js", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["route"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "/pages/products/+route.js", "fileExportPathToShowToUser": [] },
        valueSerialized: {
          type: "plus-file",
          exportValues: import3
        }
      }
    }
  },
  {
    pageId: "/pages/products/@id",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/products/@id", "definedBy": "/pages/products/@id/" },
    loadConfigValuesAll: () => import("./entries/pages_products_-id.mjs"),
    configValuesSerialized: {
      ["clientEntryLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["clientRouting"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "/renderer/+config.js", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["route"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "/pages/products/@id/+route.js", "fileExportPathToShowToUser": [] },
        valueSerialized: {
          type: "plus-file",
          exportValues: import4
        }
      }
    }
  },
  {
    pageId: "/pages/profile",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/profile", "definedBy": "/pages/profile/" },
    loadConfigValuesAll: () => import("./entries/pages_profile.mjs"),
    configValuesSerialized: {
      ["clientEntryLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["clientRouting"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "/renderer/+config.js", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  },
  {
    pageId: "/pages/settings",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/settings", "definedBy": "/pages/settings/" },
    loadConfigValuesAll: () => import("./entries/pages_settings.mjs"),
    configValuesSerialized: {
      ["clientEntryLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["clientRouting"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "/renderer/+config.js", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  },
  {
    pageId: "/pages/star-wars/@id",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/star-wars/@id", "definedBy": "/pages/star-wars/@id/" },
    loadConfigValuesAll: () => import("./entries/pages_star-wars_-id.mjs"),
    configValuesSerialized: {
      ["clientEntryLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["clientRouting"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "/renderer/+config.js", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  },
  {
    pageId: "/pages/star-wars/index",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/star-wars", "definedBy": "/pages/star-wars/index/" },
    loadConfigValuesAll: () => import("./entries/pages_star-wars_index.mjs"),
    configValuesSerialized: {
      ["clientEntryLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["clientRouting"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "/renderer/+config.js", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  }
];
const pageConfigGlobalSerialized = {
  configValuesSerialized: {}
};
const pageFilesLazyIsomorph1 = /* @__PURE__ */ Object.assign({});
const pageFilesLazyIsomorph = { ...pageFilesLazyIsomorph1 };
pageFilesLazy[".page"] = pageFilesLazyIsomorph;
const pageFilesLazyServer1 = /* @__PURE__ */ Object.assign({});
const pageFilesLazyServer = { ...pageFilesLazyServer1 };
pageFilesLazy[".page.server"] = pageFilesLazyServer;
const pageFilesEagerRoute1 = /* @__PURE__ */ Object.assign({});
const pageFilesEagerRoute = { ...pageFilesEagerRoute1 };
pageFilesEager[".page.route"] = pageFilesEagerRoute;
const pageFilesExportNamesEagerClient1 = /* @__PURE__ */ Object.assign({});
const pageFilesExportNamesEagerClient = { ...pageFilesExportNamesEagerClient1 };
pageFilesExportNamesEager[".page.client"] = pageFilesExportNamesEagerClient;
const pageFiles = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  neverLoaded,
  pageConfigGlobalSerialized,
  pageConfigsSerialized,
  pageFilesEager,
  pageFilesExportNamesEager,
  pageFilesExportNamesLazy,
  pageFilesLazy,
  pageFilesList
}, Symbol.toStringTag, { value: "Module" }));
{
  const assetsManifest = {
  "_chunk-!~{00h}~.js": {
    "file": "assets/static/onRenderClient.CgB8zqOM.css",
    "src": "_chunk-!~{00h}~.js"
  },
  "_chunk-BzsjNNXU.js": {
    "file": "assets/chunks/chunk-BzsjNNXU.js",
    "name": "useData",
    "imports": [
      "_chunk-uGg6OmiJ.js"
    ]
  },
  "_chunk-CP6xMo_C.js": {
    "file": "assets/chunks/chunk-CP6xMo_C.js",
    "name": "Card",
    "imports": [
      "_chunk-uGg6OmiJ.js"
    ]
  },
  "_chunk-CQxvNZJy.js": {
    "file": "assets/chunks/chunk-CQxvNZJy.js",
    "name": "useFetch",
    "imports": [
      "_chunk-uGg6OmiJ.js"
    ]
  },
  "_chunk-VWaDGczM.js": {
    "file": "assets/chunks/chunk-VWaDGczM.js",
    "name": "index"
  },
  "_chunk-eJmAJtGH.js": {
    "file": "assets/chunks/chunk-eJmAJtGH.js",
    "name": "renderPageClientSide"
  },
  "_chunk-uGg6OmiJ.js": {
    "file": "assets/chunks/chunk-uGg6OmiJ.js",
    "name": "_onRenderClient",
    "imports": [
      "_chunk-eJmAJtGH.js"
    ],
    "css": [
      "assets/static/onRenderClient.CgB8zqOM.css"
    ]
  },
  "node_modules/vike/dist/esm/client/client-routing-runtime/entry.js": {
    "file": "assets/entries/entry-client-routing.CMh3nLTW.js",
    "name": "entries/entry-client-routing",
    "src": "node_modules/vike/dist/esm/client/client-routing-runtime/entry.js",
    "isEntry": true,
    "imports": [
      "_chunk-eJmAJtGH.js"
    ],
    "dynamicImports": [
      "virtual:vike:pageConfigValuesAll:client:/pages/_error",
      "virtual:vike:pageConfigValuesAll:client:/pages/about",
      "virtual:vike:pageConfigValuesAll:client:/pages/auth/sign-in",
      "virtual:vike:pageConfigValuesAll:client:/pages/auth/sign-up",
      "virtual:vike:pageConfigValuesAll:client:/pages/checkout",
      "virtual:vike:pageConfigValuesAll:client:/pages/index",
      "virtual:vike:pageConfigValuesAll:client:/pages/order",
      "virtual:vike:pageConfigValuesAll:client:/pages/product",
      "virtual:vike:pageConfigValuesAll:client:/pages/product/@id",
      "virtual:vike:pageConfigValuesAll:client:/pages/products",
      "virtual:vike:pageConfigValuesAll:client:/pages/products/@id",
      "virtual:vike:pageConfigValuesAll:client:/pages/profile",
      "virtual:vike:pageConfigValuesAll:client:/pages/settings",
      "virtual:vike:pageConfigValuesAll:client:/pages/star-wars/@id",
      "virtual:vike:pageConfigValuesAll:client:/pages/star-wars/index"
    ]
  },
  "renderer/logo.svg": {
    "file": "assets/static/logo.DyAi1kBK.svg",
    "src": "renderer/logo.svg"
  },
  "virtual:vike:pageConfigValuesAll:client:/pages/_error": {
    "file": "assets/entries/pages_error.D2Fw_Fyr.js",
    "name": "entries/pages/_error",
    "src": "virtual:vike:pageConfigValuesAll:client:/pages/_error",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-uGg6OmiJ.js",
      "_chunk-eJmAJtGH.js"
    ],
    "assets": [
      "assets/static/letter-b.BXTWxE4S.png"
    ]
  },
  "virtual:vike:pageConfigValuesAll:client:/pages/about": {
    "file": "assets/entries/pages_about.DRZE48Cw.js",
    "name": "entries/pages/about",
    "src": "virtual:vike:pageConfigValuesAll:client:/pages/about",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-uGg6OmiJ.js",
      "_chunk-eJmAJtGH.js"
    ],
    "css": [
      "assets/static/about.Bv6kHCCM.css"
    ],
    "assets": [
      "assets/static/letter-b.BXTWxE4S.png"
    ]
  },
  "virtual:vike:pageConfigValuesAll:client:/pages/auth/sign-in": {
    "file": "assets/entries/pages_auth_sign-in.DCComjCJ.js",
    "name": "entries/pages/auth/sign-in",
    "src": "virtual:vike:pageConfigValuesAll:client:/pages/auth/sign-in",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-uGg6OmiJ.js",
      "_chunk-eJmAJtGH.js"
    ],
    "assets": [
      "assets/static/letter-b.BXTWxE4S.png"
    ]
  },
  "virtual:vike:pageConfigValuesAll:client:/pages/auth/sign-up": {
    "file": "assets/entries/pages_auth_sign-up.Bhjse_Zv.js",
    "name": "entries/pages/auth/sign-up",
    "src": "virtual:vike:pageConfigValuesAll:client:/pages/auth/sign-up",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-uGg6OmiJ.js",
      "_chunk-eJmAJtGH.js"
    ],
    "assets": [
      "assets/static/letter-b.BXTWxE4S.png"
    ]
  },
  "virtual:vike:pageConfigValuesAll:client:/pages/checkout": {
    "file": "assets/entries/pages_checkout.C7elg0NE.js",
    "name": "entries/pages/checkout",
    "src": "virtual:vike:pageConfigValuesAll:client:/pages/checkout",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-uGg6OmiJ.js",
      "_chunk-eJmAJtGH.js",
      "_chunk-VWaDGczM.js"
    ],
    "assets": [
      "assets/static/letter-b.BXTWxE4S.png"
    ]
  },
  "virtual:vike:pageConfigValuesAll:client:/pages/index": {
    "file": "assets/entries/pages_index.DKTuTidL.js",
    "name": "entries/pages/index",
    "src": "virtual:vike:pageConfigValuesAll:client:/pages/index",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-uGg6OmiJ.js",
      "_chunk-CP6xMo_C.js",
      "_chunk-CQxvNZJy.js",
      "_chunk-eJmAJtGH.js"
    ],
    "assets": [
      "assets/static/letter-b.BXTWxE4S.png"
    ]
  },
  "virtual:vike:pageConfigValuesAll:client:/pages/order": {
    "file": "assets/entries/pages_order.K-RD0U9U.js",
    "name": "entries/pages/order",
    "src": "virtual:vike:pageConfigValuesAll:client:/pages/order",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-uGg6OmiJ.js",
      "_chunk-VWaDGczM.js",
      "_chunk-eJmAJtGH.js"
    ],
    "assets": [
      "assets/static/letter-b.BXTWxE4S.png"
    ]
  },
  "virtual:vike:pageConfigValuesAll:client:/pages/product": {
    "file": "assets/entries/pages_product.D3kB7UOS.js",
    "name": "entries/pages/product",
    "src": "virtual:vike:pageConfigValuesAll:client:/pages/product",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-uGg6OmiJ.js",
      "_chunk-eJmAJtGH.js"
    ],
    "assets": [
      "assets/static/letter-b.BXTWxE4S.png"
    ]
  },
  "virtual:vike:pageConfigValuesAll:client:/pages/product/@id": {
    "file": "assets/entries/pages_product_-id.Dt0haU-I.js",
    "name": "entries/pages/product/@id",
    "src": "virtual:vike:pageConfigValuesAll:client:/pages/product/@id",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-uGg6OmiJ.js",
      "_chunk-CQxvNZJy.js",
      "_chunk-eJmAJtGH.js"
    ],
    "assets": [
      "assets/static/letter-b.BXTWxE4S.png"
    ]
  },
  "virtual:vike:pageConfigValuesAll:client:/pages/products": {
    "file": "assets/entries/pages_products.D3kB7UOS.js",
    "name": "entries/pages/products",
    "src": "virtual:vike:pageConfigValuesAll:client:/pages/products",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-uGg6OmiJ.js",
      "_chunk-eJmAJtGH.js"
    ],
    "assets": [
      "assets/static/letter-b.BXTWxE4S.png"
    ]
  },
  "virtual:vike:pageConfigValuesAll:client:/pages/products/@id": {
    "file": "assets/entries/pages_products_-id.BGritLSn.js",
    "name": "entries/pages/products/@id",
    "src": "virtual:vike:pageConfigValuesAll:client:/pages/products/@id",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-uGg6OmiJ.js",
      "_chunk-CQxvNZJy.js",
      "_chunk-CP6xMo_C.js",
      "_chunk-eJmAJtGH.js"
    ],
    "assets": [
      "assets/static/letter-b.BXTWxE4S.png"
    ]
  },
  "virtual:vike:pageConfigValuesAll:client:/pages/profile": {
    "file": "assets/entries/pages_profile.DrAonZck.js",
    "name": "entries/pages/profile",
    "src": "virtual:vike:pageConfigValuesAll:client:/pages/profile",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-uGg6OmiJ.js",
      "_chunk-eJmAJtGH.js"
    ],
    "assets": [
      "assets/static/letter-b.BXTWxE4S.png"
    ]
  },
  "virtual:vike:pageConfigValuesAll:client:/pages/settings": {
    "file": "assets/entries/pages_settings.pY4xM9TR.js",
    "name": "entries/pages/settings",
    "src": "virtual:vike:pageConfigValuesAll:client:/pages/settings",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-uGg6OmiJ.js",
      "_chunk-eJmAJtGH.js"
    ],
    "assets": [
      "assets/static/letter-b.BXTWxE4S.png"
    ]
  },
  "virtual:vike:pageConfigValuesAll:client:/pages/star-wars/@id": {
    "file": "assets/entries/pages_star-wars_-id.CAYeJphP.js",
    "name": "entries/pages/star-wars/@id",
    "src": "virtual:vike:pageConfigValuesAll:client:/pages/star-wars/@id",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-uGg6OmiJ.js",
      "_chunk-BzsjNNXU.js",
      "_chunk-eJmAJtGH.js"
    ],
    "assets": [
      "assets/static/letter-b.BXTWxE4S.png"
    ]
  },
  "virtual:vike:pageConfigValuesAll:client:/pages/star-wars/index": {
    "file": "assets/entries/pages_star-wars_index.BVnMDbYp.js",
    "name": "entries/pages/star-wars/index",
    "src": "virtual:vike:pageConfigValuesAll:client:/pages/star-wars/index",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-uGg6OmiJ.js",
      "_chunk-BzsjNNXU.js",
      "_chunk-eJmAJtGH.js"
    ],
    "assets": [
      "assets/static/letter-b.BXTWxE4S.png"
    ]
  }
};
  const pluginManifest = {
    "version": "0.4.181",
    "usesClientRouter": false,
    "baseServer": "/",
    "baseAssets": "/",
    "includeAssetsImportedByServer": true,
    "redirects": {},
    "trailingSlash": false,
    "disableUrlNormalization": false
  };
  setImportBuildGetters({
    pageFiles: () => pageFiles,
    getAssetsManifest: () => assetsManifest,
    pluginManifest: () => pluginManifest
  });
}
