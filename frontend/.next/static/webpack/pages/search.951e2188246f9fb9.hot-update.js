"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/search",{

/***/ "./src/pages/search/index.tsx":
/*!************************************!*\
  !*** ./src/pages/search/index.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ index; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_SER__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/SER */ \"./src/components/SER.tsx\");\n/* harmony import */ var _components_SearchArea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/SearchArea */ \"./src/components/SearchArea.tsx\");\n\n\n\nconst pages = [\n    {\n        title: \"New revolutionizing DAPP\",\n        description: \"lorem ipsum dolor sit amet dolor amet sit lorem\",\n        url: \"https://younify.xyz\",\n        score: 19,\n        keywords: [],\n        external_links: [],\n        internal_links: []\n    },\n    {\n        title: \"DeFi is the future, here is why\",\n        description: \"\",\n        url: \"https://younify.xyz\",\n        score: 9,\n        keywords: [],\n        external_links: [],\n        internal_links: []\n    }\n];\nconst pages2 = [\n    {\n        title: \"New revolutionizing DAPP\",\n        description: \"lorem ipsum dolor sit amet dolor amet sit lorem\",\n        url: \"https://younify.xyz\",\n        score: 9,\n        keywords: [],\n        external_links: [],\n        internal_links: []\n    },\n    {\n        title: \"DeFi is the future, here is why\",\n        description: \"\",\n        url: \"https://younify.xyz\",\n        score: 19,\n        keywords: [],\n        external_links: [],\n        internal_links: []\n    }\n];\nconst domains = [\n    {\n        root_url: \"https://younify.xyz\",\n        internal_pages: pages,\n        summerized_score: 28,\n        keywords: [],\n        urls: [],\n        sitemap_location: \"https://younify.xyz/sitemap.xml\"\n    },\n    {\n        root_url: \"https://younified.xyz\",\n        internal_pages: pages2,\n        summerized_score: 28,\n        keywords: [],\n        urls: [],\n        sitemap_location: \"https://younified.xyz/sitemap.xml\"\n    }\n];\nfunction index() {\n    const getRelevantPage = (domain)=>{\n        let currentPage = {};\n        let hightestScore = 0;\n        domain.internal_pages.forEach((page)=>{\n            if (page.score > hightestScore) {\n                hightestScore = page.score;\n                currentPage = page;\n            }\n        });\n        return currentPage;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"bg-gray-300 h-[100vh] bachground-\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchArea__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\simon\\\\Desktop\\\\kompass\\\\frontend\\\\src\\\\pages\\\\search\\\\index.tsx\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SER__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                pages: domains.map((domain)=>getRelevantPage(domain))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\simon\\\\Desktop\\\\kompass\\\\frontend\\\\src\\\\pages\\\\search\\\\index.tsx\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\simon\\\\Desktop\\\\kompass\\\\frontend\\\\src\\\\pages\\\\search\\\\index.tsx\",\n        lineNumber: 82,\n        columnNumber: 5\n    }, this);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvc2VhcmNoL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBbUM7QUFDYztBQUVqRCxNQUFNRSxRQUFnQjtJQUNwQjtRQUNFQyxPQUFPO1FBQ1BDLGFBQWE7UUFDYkMsS0FBSztRQUNMQyxPQUFPO1FBQ1BDLFVBQVUsRUFBRTtRQUNaQyxnQkFBZ0IsRUFBRTtRQUNsQkMsZ0JBQWdCLEVBQUU7SUFDcEI7SUFDQTtRQUNFTixPQUFPO1FBQ1BDLGFBQWE7UUFDYkMsS0FBSztRQUNMQyxPQUFPO1FBQ1BDLFVBQVUsRUFBRTtRQUNaQyxnQkFBZ0IsRUFBRTtRQUNsQkMsZ0JBQWdCLEVBQUU7SUFDcEI7Q0FDRDtBQUVELE1BQU1DLFNBQWlCO0lBQ3JCO1FBQ0VQLE9BQU87UUFDUEMsYUFBYTtRQUNiQyxLQUFLO1FBQ0xDLE9BQU87UUFDUEMsVUFBVSxFQUFFO1FBQ1pDLGdCQUFnQixFQUFFO1FBQ2xCQyxnQkFBZ0IsRUFBRTtJQUNwQjtJQUNBO1FBQ0VOLE9BQU87UUFDUEMsYUFBYTtRQUNiQyxLQUFLO1FBQ0xDLE9BQU87UUFDUEMsVUFBVSxFQUFFO1FBQ1pDLGdCQUFnQixFQUFFO1FBQ2xCQyxnQkFBZ0IsRUFBRTtJQUNwQjtDQUNEO0FBR0QsTUFBTUUsVUFBb0I7SUFDeEI7UUFDRUMsVUFBVTtRQUNWQyxnQkFBZ0JYO1FBQ2hCWSxrQkFBa0I7UUFDbEJQLFVBQVUsRUFBRTtRQUNaUSxNQUFNLEVBQUU7UUFDUkMsa0JBQWtCO0lBQ3BCO0lBQ0E7UUFDRUosVUFBVTtRQUNWQyxnQkFBZ0JIO1FBQ2hCSSxrQkFBa0I7UUFDbEJQLFVBQVUsRUFBRTtRQUNaUSxNQUFNLEVBQUU7UUFDUkMsa0JBQWtCO0lBQ3BCO0NBQ0Q7QUFHYyxTQUFTQztJQUV0QixNQUFNQyxrQkFBa0IsQ0FBQ0M7UUFDdkIsSUFBSUMsY0FBb0IsQ0FBQztRQUN6QixJQUFJQyxnQkFBd0I7UUFDNUJGLE9BQU9OLGNBQWMsQ0FBQ1MsT0FBTyxDQUFDQyxDQUFBQTtZQUM1QixJQUFJQSxLQUFLakIsS0FBSyxHQUFHZSxlQUFlO2dCQUM5QkEsZ0JBQWdCRSxLQUFLakIsS0FBSztnQkFDMUJjLGNBQWNHO1lBQ2hCO1FBQ0Y7UUFDQSxPQUFPSDtJQUNUO0lBRUEscUJBQ0UsOERBQUNJO1FBQUtDLFdBQVU7OzBCQUVkLDhEQUFDeEIsOERBQVVBOzs7OzswQkFDWCw4REFBQ0QsdURBQUdBO2dCQUFDRSxPQUFPUyxRQUFRZSxHQUFHLENBQUNQLENBQUFBLFNBQVdELGdCQUFnQkM7Ozs7Ozs7Ozs7OztBQUl6RCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvc2VhcmNoL2luZGV4LnRzeD8yZmM4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTRVIgZnJvbSAnQC9jb21wb25lbnRzL1NFUic7XHJcbmltcG9ydCBTZWFyY2hBcmVhIGZyb20gJ0AvY29tcG9uZW50cy9TZWFyY2hBcmVhJztcclxuXHJcbmNvbnN0IHBhZ2VzOiBQYWdlW10gPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiTmV3IHJldm9sdXRpb25pemluZyBEQVBQXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJsb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBkb2xvciBhbWV0IHNpdCBsb3JlbVwiLFxyXG4gICAgdXJsOiBcImh0dHBzOi8veW91bmlmeS54eXpcIixcclxuICAgIHNjb3JlOiAxOSxcclxuICAgIGtleXdvcmRzOiBbXSxcclxuICAgIGV4dGVybmFsX2xpbmtzOiBbXSxcclxuICAgIGludGVybmFsX2xpbmtzOiBbXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkRlRmkgaXMgdGhlIGZ1dHVyZSwgaGVyZSBpcyB3aHlcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxyXG4gICAgdXJsOiBcImh0dHBzOi8veW91bmlmeS54eXpcIixcclxuICAgIHNjb3JlOiA5LFxyXG4gICAga2V5d29yZHM6IFtdLFxyXG4gICAgZXh0ZXJuYWxfbGlua3M6IFtdLFxyXG4gICAgaW50ZXJuYWxfbGlua3M6IFtdLFxyXG4gIH1cclxuXVxyXG5cclxuY29uc3QgcGFnZXMyOiBQYWdlW10gPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiTmV3IHJldm9sdXRpb25pemluZyBEQVBQXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJsb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBkb2xvciBhbWV0IHNpdCBsb3JlbVwiLFxyXG4gICAgdXJsOiBcImh0dHBzOi8veW91bmlmeS54eXpcIixcclxuICAgIHNjb3JlOiA5LFxyXG4gICAga2V5d29yZHM6IFtdLFxyXG4gICAgZXh0ZXJuYWxfbGlua3M6IFtdLFxyXG4gICAgaW50ZXJuYWxfbGlua3M6IFtdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiRGVGaSBpcyB0aGUgZnV0dXJlLCBoZXJlIGlzIHdoeVwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiXCIsXHJcbiAgICB1cmw6IFwiaHR0cHM6Ly95b3VuaWZ5Lnh5elwiLFxyXG4gICAgc2NvcmU6IDE5LFxyXG4gICAga2V5d29yZHM6IFtdLFxyXG4gICAgZXh0ZXJuYWxfbGlua3M6IFtdLFxyXG4gICAgaW50ZXJuYWxfbGlua3M6IFtdLFxyXG4gIH1cclxuXVxyXG5cclxuXHJcbmNvbnN0IGRvbWFpbnM6IERvbWFpbltdID0gW1xyXG4gIHtcclxuICAgIHJvb3RfdXJsOiBcImh0dHBzOi8veW91bmlmeS54eXpcIixcclxuICAgIGludGVybmFsX3BhZ2VzOiBwYWdlcyxcclxuICAgIHN1bW1lcml6ZWRfc2NvcmU6IDI4LFxyXG4gICAga2V5d29yZHM6IFtdLFxyXG4gICAgdXJsczogW10sXHJcbiAgICBzaXRlbWFwX2xvY2F0aW9uOiBcImh0dHBzOi8veW91bmlmeS54eXovc2l0ZW1hcC54bWxcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgcm9vdF91cmw6IFwiaHR0cHM6Ly95b3VuaWZpZWQueHl6XCIsXHJcbiAgICBpbnRlcm5hbF9wYWdlczogcGFnZXMyLFxyXG4gICAgc3VtbWVyaXplZF9zY29yZTogMjgsXHJcbiAgICBrZXl3b3JkczogW10sXHJcbiAgICB1cmxzOiBbXSxcclxuICAgIHNpdGVtYXBfbG9jYXRpb246IFwiaHR0cHM6Ly95b3VuaWZpZWQueHl6L3NpdGVtYXAueG1sXCJcclxuICB9XHJcbl1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbmRleCgpIHtcclxuXHJcbiAgY29uc3QgZ2V0UmVsZXZhbnRQYWdlID0gKGRvbWFpbjogRG9tYWluKTogUGFnZSA9PiB7XHJcbiAgICBsZXQgY3VycmVudFBhZ2U6IFBhZ2UgPSB7fSBhcyBQYWdlO1xyXG4gICAgbGV0IGhpZ2h0ZXN0U2NvcmU6IG51bWJlciA9IDA7IFxyXG4gICAgZG9tYWluLmludGVybmFsX3BhZ2VzLmZvckVhY2gocGFnZSA9PiB7XHJcbiAgICAgIGlmIChwYWdlLnNjb3JlID4gaGlnaHRlc3RTY29yZSkge1xyXG4gICAgICAgIGhpZ2h0ZXN0U2NvcmUgPSBwYWdlLnNjb3JlO1xyXG4gICAgICAgIGN1cnJlbnRQYWdlID0gcGFnZTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIHJldHVybiBjdXJyZW50UGFnZTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJiZy1ncmF5LTMwMCBoLVsxMDB2aF0gYmFjaGdyb3VuZC1cIj5cclxuXHJcbiAgICAgIDxTZWFyY2hBcmVhIC8+XHJcbiAgICAgIDxTRVIgcGFnZXM9e2RvbWFpbnMubWFwKGRvbWFpbiA9PiAoZ2V0UmVsZXZhbnRQYWdlKGRvbWFpbikpKX0vPlxyXG5cclxuICAgIDwvbWFpbj5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIlNFUiIsIlNlYXJjaEFyZWEiLCJwYWdlcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJ1cmwiLCJzY29yZSIsImtleXdvcmRzIiwiZXh0ZXJuYWxfbGlua3MiLCJpbnRlcm5hbF9saW5rcyIsInBhZ2VzMiIsImRvbWFpbnMiLCJyb290X3VybCIsImludGVybmFsX3BhZ2VzIiwic3VtbWVyaXplZF9zY29yZSIsInVybHMiLCJzaXRlbWFwX2xvY2F0aW9uIiwiaW5kZXgiLCJnZXRSZWxldmFudFBhZ2UiLCJkb21haW4iLCJjdXJyZW50UGFnZSIsImhpZ2h0ZXN0U2NvcmUiLCJmb3JFYWNoIiwicGFnZSIsIm1haW4iLCJjbGFzc05hbWUiLCJtYXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/search/index.tsx\n"));

/***/ })

});