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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ index; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_SER__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/SER */ \"./src/components/SER.tsx\");\n/* harmony import */ var _components_SearchArea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/SearchArea */ \"./src/components/SearchArea.tsx\");\n\n\n\nconst pages = [\n    {\n        title: \"New revolutionizing DAPP\",\n        url: \"https://younify.xyz\",\n        score: 19,\n        keywords: [],\n        external_links: [],\n        internal_links: []\n    },\n    {\n        title: \"DeFi is the future, here is why\",\n        url: \"https://younify.xyz\",\n        score: 9,\n        keywords: [],\n        external_links: [],\n        internal_links: []\n    }\n];\nconst pages2 = [\n    {\n        title: \"New revolutionizing DAPP\",\n        description: \"lorem ipsum dolor sit amet dolor amet sit lorem\",\n        url: \"https://younify.xyz\",\n        score: 9,\n        keywords: [],\n        external_links: [],\n        internal_links: []\n    },\n    {\n        title: \"DeFi is the future, here is why\",\n        description: \"\",\n        url: \"https://younify.xyz\",\n        score: 19,\n        keywords: [],\n        external_links: [],\n        internal_links: []\n    }\n];\nconst domains = [\n    {\n        root_url: \"https://younify.xyz\",\n        internal_pages: pages,\n        summerized_score: 28,\n        keywords: [],\n        urls: [],\n        sitemap_location: \"https://younify.xyz/sitemap.xml\"\n    },\n    {\n        root_url: \"https://younified.xyz\",\n        internal_pages: pages2,\n        summerized_score: 28,\n        keywords: [],\n        urls: [],\n        sitemap_location: \"https://younified.xyz/sitemap.xml\"\n    }\n];\nfunction index() {\n    const getRelevantPage = (domain)=>{\n        let currentPage = {};\n        let hightestScore = 0;\n        domain.internal_pages.forEach((page)=>{\n            if (page.score > hightestScore) {\n                hightestScore = page.score;\n                currentPage = page;\n            }\n        });\n        return currentPage;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"bg-gray-200 h-[100vh]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchArea__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\simon\\\\Desktop\\\\kompass\\\\frontend\\\\src\\\\pages\\\\search\\\\index.tsx\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SER__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                pages: domains.map((domain)=>getRelevantPage(domain))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\simon\\\\Desktop\\\\kompass\\\\frontend\\\\src\\\\pages\\\\search\\\\index.tsx\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\simon\\\\Desktop\\\\kompass\\\\frontend\\\\src\\\\pages\\\\search\\\\index.tsx\",\n        lineNumber: 84,\n        columnNumber: 5\n    }, this);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvc2VhcmNoL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBbUM7QUFDYztBQUlqRCxNQUFNRSxRQUFnQjtJQUNwQjtRQUNFQyxPQUFPO1FBQ1BDLEtBQUs7UUFDTEMsT0FBTztRQUNQQyxVQUFVLEVBQUU7UUFDWkMsZ0JBQWdCLEVBQUU7UUFDbEJDLGdCQUFnQixFQUFFO0lBQ3BCO0lBQ0E7UUFDRUwsT0FBTztRQUNQQyxLQUFLO1FBQ0xDLE9BQU87UUFDUEMsVUFBVSxFQUFFO1FBQ1pDLGdCQUFnQixFQUFFO1FBQ2xCQyxnQkFBZ0IsRUFBRTtJQUNwQjtDQUNEO0FBRUQsTUFBTUMsU0FBaUI7SUFDckI7UUFDRU4sT0FBTztRQUNQTyxhQUFhO1FBQ2JOLEtBQUs7UUFDTEMsT0FBTztRQUNQQyxVQUFVLEVBQUU7UUFDWkMsZ0JBQWdCLEVBQUU7UUFDbEJDLGdCQUFnQixFQUFFO0lBQ3BCO0lBQ0E7UUFDRUwsT0FBTztRQUNQTyxhQUFhO1FBQ2JOLEtBQUs7UUFDTEMsT0FBTztRQUNQQyxVQUFVLEVBQUU7UUFDWkMsZ0JBQWdCLEVBQUU7UUFDbEJDLGdCQUFnQixFQUFFO0lBQ3BCO0NBQ0Q7QUFHRCxNQUFNRyxVQUFvQjtJQUN4QjtRQUNFQyxVQUFVO1FBQ1ZDLGdCQUFnQlg7UUFDaEJZLGtCQUFrQjtRQUNsQlIsVUFBVSxFQUFFO1FBQ1pTLE1BQU0sRUFBRTtRQUNSQyxrQkFBa0I7SUFDcEI7SUFDQTtRQUNFSixVQUFVO1FBQ1ZDLGdCQUFnQko7UUFDaEJLLGtCQUFrQjtRQUNsQlIsVUFBVSxFQUFFO1FBQ1pTLE1BQU0sRUFBRTtRQUNSQyxrQkFBa0I7SUFDcEI7Q0FDRDtBQUdjLFNBQVNDO0lBSXRCLE1BQU1DLGtCQUFrQixDQUFDQztRQUN2QixJQUFJQyxjQUFvQixDQUFDO1FBQ3pCLElBQUlDLGdCQUF3QjtRQUM1QkYsT0FBT04sY0FBYyxDQUFDUyxPQUFPLENBQUNDLENBQUFBO1lBQzVCLElBQUlBLEtBQUtsQixLQUFLLEdBQUdnQixlQUFlO2dCQUM5QkEsZ0JBQWdCRSxLQUFLbEIsS0FBSztnQkFDMUJlLGNBQWNHO1lBQ2hCO1FBQ0Y7UUFDQSxPQUFPSDtJQUNUO0lBRUEscUJBQ0UsOERBQUNJO1FBQUtDLFdBQVU7OzBCQUVkLDhEQUFDeEIsOERBQVVBOzs7OzswQkFFWCw4REFBQ0QsdURBQUdBO2dCQUFDRSxPQUFPUyxRQUFRZSxHQUFHLENBQUNQLENBQUFBLFNBQVdELGdCQUFnQkM7Ozs7Ozs7Ozs7OztBQU96RCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvc2VhcmNoL2luZGV4LnRzeD8yZmM4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTRVIgZnJvbSAnQC9jb21wb25lbnRzL1NFUic7XHJcbmltcG9ydCBTZWFyY2hBcmVhIGZyb20gJ0AvY29tcG9uZW50cy9TZWFyY2hBcmVhJztcclxuaW1wb3J0IHsgdXNlU2VhcmNoUGFyYW1zIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5jb25zdCBwYWdlczogUGFnZVtdID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiBcIk5ldyByZXZvbHV0aW9uaXppbmcgREFQUFwiLFxyXG4gICAgdXJsOiBcImh0dHBzOi8veW91bmlmeS54eXpcIixcclxuICAgIHNjb3JlOiAxOSxcclxuICAgIGtleXdvcmRzOiBbXSxcclxuICAgIGV4dGVybmFsX2xpbmtzOiBbXSxcclxuICAgIGludGVybmFsX2xpbmtzOiBbXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkRlRmkgaXMgdGhlIGZ1dHVyZSwgaGVyZSBpcyB3aHlcIixcclxuICAgIHVybDogXCJodHRwczovL3lvdW5pZnkueHl6XCIsXHJcbiAgICBzY29yZTogOSxcclxuICAgIGtleXdvcmRzOiBbXSxcclxuICAgIGV4dGVybmFsX2xpbmtzOiBbXSxcclxuICAgIGludGVybmFsX2xpbmtzOiBbXSxcclxuICB9XHJcbl1cclxuXHJcbmNvbnN0IHBhZ2VzMjogUGFnZVtdID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiBcIk5ldyByZXZvbHV0aW9uaXppbmcgREFQUFwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwibG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgZG9sb3IgYW1ldCBzaXQgbG9yZW1cIixcclxuICAgIHVybDogXCJodHRwczovL3lvdW5pZnkueHl6XCIsXHJcbiAgICBzY29yZTogOSxcclxuICAgIGtleXdvcmRzOiBbXSxcclxuICAgIGV4dGVybmFsX2xpbmtzOiBbXSxcclxuICAgIGludGVybmFsX2xpbmtzOiBbXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkRlRmkgaXMgdGhlIGZ1dHVyZSwgaGVyZSBpcyB3aHlcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxyXG4gICAgdXJsOiBcImh0dHBzOi8veW91bmlmeS54eXpcIixcclxuICAgIHNjb3JlOiAxOSxcclxuICAgIGtleXdvcmRzOiBbXSxcclxuICAgIGV4dGVybmFsX2xpbmtzOiBbXSxcclxuICAgIGludGVybmFsX2xpbmtzOiBbXSxcclxuICB9XHJcbl1cclxuXHJcblxyXG5jb25zdCBkb21haW5zOiBEb21haW5bXSA9IFtcclxuICB7XHJcbiAgICByb290X3VybDogXCJodHRwczovL3lvdW5pZnkueHl6XCIsXHJcbiAgICBpbnRlcm5hbF9wYWdlczogcGFnZXMsXHJcbiAgICBzdW1tZXJpemVkX3Njb3JlOiAyOCxcclxuICAgIGtleXdvcmRzOiBbXSxcclxuICAgIHVybHM6IFtdLFxyXG4gICAgc2l0ZW1hcF9sb2NhdGlvbjogXCJodHRwczovL3lvdW5pZnkueHl6L3NpdGVtYXAueG1sXCJcclxuICB9LFxyXG4gIHtcclxuICAgIHJvb3RfdXJsOiBcImh0dHBzOi8veW91bmlmaWVkLnh5elwiLFxyXG4gICAgaW50ZXJuYWxfcGFnZXM6IHBhZ2VzMixcclxuICAgIHN1bW1lcml6ZWRfc2NvcmU6IDI4LFxyXG4gICAga2V5d29yZHM6IFtdLFxyXG4gICAgdXJsczogW10sXHJcbiAgICBzaXRlbWFwX2xvY2F0aW9uOiBcImh0dHBzOi8veW91bmlmaWVkLnh5ei9zaXRlbWFwLnhtbFwiXHJcbiAgfVxyXG5dXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5kZXgoKSB7XHJcblxyXG4gIFxyXG5cclxuICBjb25zdCBnZXRSZWxldmFudFBhZ2UgPSAoZG9tYWluOiBEb21haW4pOiBQYWdlID0+IHtcclxuICAgIGxldCBjdXJyZW50UGFnZTogUGFnZSA9IHt9IGFzIFBhZ2U7XHJcbiAgICBsZXQgaGlnaHRlc3RTY29yZTogbnVtYmVyID0gMDsgXHJcbiAgICBkb21haW4uaW50ZXJuYWxfcGFnZXMuZm9yRWFjaChwYWdlID0+IHtcclxuICAgICAgaWYgKHBhZ2Uuc2NvcmUgPiBoaWdodGVzdFNjb3JlKSB7XHJcbiAgICAgICAgaGlnaHRlc3RTY29yZSA9IHBhZ2Uuc2NvcmU7XHJcbiAgICAgICAgY3VycmVudFBhZ2UgPSBwYWdlO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIGN1cnJlbnRQYWdlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxtYWluIGNsYXNzTmFtZT1cImJnLWdyYXktMjAwIGgtWzEwMHZoXVwiPlxyXG5cclxuICAgICAgPFNlYXJjaEFyZWEgLz5cclxuXHJcbiAgICAgIDxTRVIgcGFnZXM9e2RvbWFpbnMubWFwKGRvbWFpbiA9PiAoZ2V0UmVsZXZhbnRQYWdlKGRvbWFpbikpKX0vPlxyXG5cclxuXHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgIDwvbWFpbj5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIlNFUiIsIlNlYXJjaEFyZWEiLCJwYWdlcyIsInRpdGxlIiwidXJsIiwic2NvcmUiLCJrZXl3b3JkcyIsImV4dGVybmFsX2xpbmtzIiwiaW50ZXJuYWxfbGlua3MiLCJwYWdlczIiLCJkZXNjcmlwdGlvbiIsImRvbWFpbnMiLCJyb290X3VybCIsImludGVybmFsX3BhZ2VzIiwic3VtbWVyaXplZF9zY29yZSIsInVybHMiLCJzaXRlbWFwX2xvY2F0aW9uIiwiaW5kZXgiLCJnZXRSZWxldmFudFBhZ2UiLCJkb21haW4iLCJjdXJyZW50UGFnZSIsImhpZ2h0ZXN0U2NvcmUiLCJmb3JFYWNoIiwicGFnZSIsIm1haW4iLCJjbGFzc05hbWUiLCJtYXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/search/index.tsx\n"));

/***/ })

});