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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ index; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_SearchArea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/SearchArea */ \"./src/components/SearchArea.tsx\");\n\n\nconst pages = [\n    {\n        title: \"New revolutionizing DAPP\",\n        url: \"https://younify.xyz\",\n        score: 19,\n        keywords: [],\n        external_links: [],\n        internal_links: []\n    },\n    {\n        title: \"DeFi is the future, here is why\",\n        url: \"https://younify.xyz\",\n        score: 9,\n        keywords: [],\n        external_links: [],\n        internal_links: []\n    }\n];\nconst domains = [\n    {\n        root_url: \"https://younify.xyz\",\n        internal_pages: pages,\n        summerized_score: 28,\n        keywords: [],\n        urls: [],\n        sitemap_location: \"https://younify.xyz/sitemap.xml\"\n    }\n];\nfunction index() {\n    const getRelevantPage = (domain)=>{\n        let currentPage = {};\n        let hightestScore = 0;\n        domain.internal_pages.forEach((page)=>{\n            if (page.score > hightestScore) {\n                hightestScore = page.score;\n                currentPage = page;\n            }\n        });\n        return currentPage;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"bg-gray-200 h-[100vh]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchArea__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\simon\\\\Desktop\\\\kompass\\\\frontend\\\\src\\\\pages\\\\search\\\\index.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            domains.map((domain)=>getRelevantPage(domain).title)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\simon\\\\Desktop\\\\kompass\\\\frontend\\\\src\\\\pages\\\\search\\\\index.tsx\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, this);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvc2VhcmNoL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFpRDtBQUlqRCxNQUFNQyxRQUFnQjtJQUNwQjtRQUNFQyxPQUFPO1FBQ1BDLEtBQUs7UUFDTEMsT0FBTztRQUNQQyxVQUFVLEVBQUU7UUFDWkMsZ0JBQWdCLEVBQUU7UUFDbEJDLGdCQUFnQixFQUFFO0lBQ3BCO0lBQ0E7UUFDRUwsT0FBTztRQUNQQyxLQUFLO1FBQ0xDLE9BQU87UUFDUEMsVUFBVSxFQUFFO1FBQ1pDLGdCQUFnQixFQUFFO1FBQ2xCQyxnQkFBZ0IsRUFBRTtJQUNwQjtDQUNEO0FBR0QsTUFBTUMsVUFBb0I7SUFDeEI7UUFDRUMsVUFBVTtRQUNWQyxnQkFBZ0JUO1FBQ2hCVSxrQkFBa0I7UUFDbEJOLFVBQVUsRUFBRTtRQUNaTyxNQUFNLEVBQUU7UUFDUkMsa0JBQWtCO0lBQ3BCO0NBQ0Q7QUFHYyxTQUFTQztJQUl0QixNQUFNQyxrQkFBa0IsQ0FBQ0M7UUFDdkIsSUFBSUMsY0FBb0IsQ0FBQztRQUN6QixJQUFJQyxnQkFBd0I7UUFDNUJGLE9BQU9OLGNBQWMsQ0FBQ1MsT0FBTyxDQUFDQyxDQUFBQTtZQUM1QixJQUFJQSxLQUFLaEIsS0FBSyxHQUFHYyxlQUFlO2dCQUM5QkEsZ0JBQWdCRSxLQUFLaEIsS0FBSztnQkFDMUJhLGNBQWNHO1lBQ2hCO1FBQ0Y7UUFDQSxPQUFPSDtJQUNUO0lBRUEscUJBQ0UsOERBQUNJO1FBQUtDLFdBQVU7OzBCQUVkLDhEQUFDdEIsOERBQVVBOzs7OztZQUVWUSxRQUFRZSxHQUFHLENBQUNQLENBQUFBLFNBQVdELGdCQUFnQkMsUUFBUWQsS0FBSzs7Ozs7OztBQU8zRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvc2VhcmNoL2luZGV4LnRzeD8yZmM4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTZWFyY2hBcmVhIGZyb20gJ0AvY29tcG9uZW50cy9TZWFyY2hBcmVhJztcclxuaW1wb3J0IHsgdXNlU2VhcmNoUGFyYW1zIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5jb25zdCBwYWdlczogUGFnZVtdID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiBcIk5ldyByZXZvbHV0aW9uaXppbmcgREFQUFwiLFxyXG4gICAgdXJsOiBcImh0dHBzOi8veW91bmlmeS54eXpcIixcclxuICAgIHNjb3JlOiAxOSxcclxuICAgIGtleXdvcmRzOiBbXSxcclxuICAgIGV4dGVybmFsX2xpbmtzOiBbXSxcclxuICAgIGludGVybmFsX2xpbmtzOiBbXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkRlRmkgaXMgdGhlIGZ1dHVyZSwgaGVyZSBpcyB3aHlcIixcclxuICAgIHVybDogXCJodHRwczovL3lvdW5pZnkueHl6XCIsXHJcbiAgICBzY29yZTogOSxcclxuICAgIGtleXdvcmRzOiBbXSxcclxuICAgIGV4dGVybmFsX2xpbmtzOiBbXSxcclxuICAgIGludGVybmFsX2xpbmtzOiBbXSxcclxuICB9XHJcbl1cclxuXHJcblxyXG5jb25zdCBkb21haW5zOiBEb21haW5bXSA9IFtcclxuICB7XHJcbiAgICByb290X3VybDogXCJodHRwczovL3lvdW5pZnkueHl6XCIsXHJcbiAgICBpbnRlcm5hbF9wYWdlczogcGFnZXMsXHJcbiAgICBzdW1tZXJpemVkX3Njb3JlOiAyOCxcclxuICAgIGtleXdvcmRzOiBbXSxcclxuICAgIHVybHM6IFtdLFxyXG4gICAgc2l0ZW1hcF9sb2NhdGlvbjogXCJodHRwczovL3lvdW5pZnkueHl6L3NpdGVtYXAueG1sXCJcclxuICB9XHJcbl1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbmRleCgpIHtcclxuXHJcbiAgXHJcblxyXG4gIGNvbnN0IGdldFJlbGV2YW50UGFnZSA9IChkb21haW46IERvbWFpbik6IFBhZ2UgPT4ge1xyXG4gICAgbGV0IGN1cnJlbnRQYWdlOiBQYWdlID0ge30gYXMgUGFnZTtcclxuICAgIGxldCBoaWdodGVzdFNjb3JlOiBudW1iZXIgPSAwOyBcclxuICAgIGRvbWFpbi5pbnRlcm5hbF9wYWdlcy5mb3JFYWNoKHBhZ2UgPT4ge1xyXG4gICAgICBpZiAocGFnZS5zY29yZSA+IGhpZ2h0ZXN0U2NvcmUpIHtcclxuICAgICAgICBoaWdodGVzdFNjb3JlID0gcGFnZS5zY29yZTtcclxuICAgICAgICBjdXJyZW50UGFnZSA9IHBhZ2U7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICByZXR1cm4gY3VycmVudFBhZ2U7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiYmctZ3JheS0yMDAgaC1bMTAwdmhdXCI+XHJcblxyXG4gICAgICA8U2VhcmNoQXJlYSAvPlxyXG5cclxuICAgICAge2RvbWFpbnMubWFwKGRvbWFpbiA9PiAoZ2V0UmVsZXZhbnRQYWdlKGRvbWFpbikudGl0bGUpKX1cclxuXHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgICAgXHJcbiAgICA8L21haW4+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJTZWFyY2hBcmVhIiwicGFnZXMiLCJ0aXRsZSIsInVybCIsInNjb3JlIiwia2V5d29yZHMiLCJleHRlcm5hbF9saW5rcyIsImludGVybmFsX2xpbmtzIiwiZG9tYWlucyIsInJvb3RfdXJsIiwiaW50ZXJuYWxfcGFnZXMiLCJzdW1tZXJpemVkX3Njb3JlIiwidXJscyIsInNpdGVtYXBfbG9jYXRpb24iLCJpbmRleCIsImdldFJlbGV2YW50UGFnZSIsImRvbWFpbiIsImN1cnJlbnRQYWdlIiwiaGlnaHRlc3RTY29yZSIsImZvckVhY2giLCJwYWdlIiwibWFpbiIsImNsYXNzTmFtZSIsIm1hcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/search/index.tsx\n"));

/***/ })

});