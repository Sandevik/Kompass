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

/***/ "./src/components/SearchArea.tsx":
/*!***************************************!*\
  !*** ./src/components/SearchArea.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SearchArea; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _barrel_optimize_names_BiSearch_react_icons_bi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=BiSearch!=!react-icons/bi */ \"__barrel_optimize__?names=BiSearch!=!./node_modules/react-icons/bi/index.esm.js\");\n/* harmony import */ var _barrel_optimize_names_VscChromeClose_react_icons_vsc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=VscChromeClose!=!react-icons/vsc */ \"__barrel_optimize__?names=VscChromeClose!=!./node_modules/react-icons/vsc/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction SearchArea(param) {\n    let {} = param;\n    _s();\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useSearchParams)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(searchParams.get(\"q\") || \"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        setQuery(searchParams.get(\"q\") || \"\");\n    }, [\n        searchParams\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex bg-gray-200 p-4 gap-5 items-center border-b-2 border-gray-300 \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex w-full items-center gap-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/\",\n                        className: \"flex items-center gap-2 px-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"/Kompass2d.png\",\n                                className: \"h-12 w-12\",\n                                alt: \"Kompass logo\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\simon\\\\Desktop\\\\kompass\\\\frontend\\\\src\\\\components\\\\SearchArea.tsx\",\n                                lineNumber: 23,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-3xl font-semibold text-gray-600\",\n                                children: \"Kompass\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\simon\\\\Desktop\\\\kompass\\\\frontend\\\\src\\\\components\\\\SearchArea.tsx\",\n                                lineNumber: 24,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\simon\\\\Desktop\\\\kompass\\\\frontend\\\\src\\\\components\\\\SearchArea.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative w-[50%] h-full\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                className: \"text-black w-full p-2 pl-8 rounded-md\",\n                                value: query,\n                                onChange: (e)=>setQuery(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\simon\\\\Desktop\\\\kompass\\\\frontend\\\\src\\\\components\\\\SearchArea.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BiSearch_react_icons_bi__WEBPACK_IMPORTED_MODULE_5__.BiSearch, {\n                                className: \"w-5 h-5 absolute left-1.5 top-2.5 text-gray-500\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\simon\\\\Desktop\\\\kompass\\\\frontend\\\\src\\\\components\\\\SearchArea.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_VscChromeClose_react_icons_vsc__WEBPACK_IMPORTED_MODULE_6__.VscChromeClose, {\n                                onClick: ()=>setQuery(\"\"),\n                                className: \"w-5 h-5 absolute right-2 top-2.5 text-gray-600 cursor-pointer\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\simon\\\\Desktop\\\\kompass\\\\frontend\\\\src\\\\components\\\\SearchArea.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\simon\\\\Desktop\\\\kompass\\\\frontend\\\\src\\\\components\\\\SearchArea.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>router.push(\"/search?q=\".concat(query.split(\" \").join(\"+\"))),\n                        className: \"w-20 bg-blue-200 text-gray-600 h-10 rounded-md font-semibold text-xl hover:bg-blue-300 transition-colors\",\n                        children: \"Find\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\simon\\\\Desktop\\\\kompass\\\\frontend\\\\src\\\\components\\\\SearchArea.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\simon\\\\Desktop\\\\kompass\\\\frontend\\\\src\\\\components\\\\SearchArea.tsx\",\n                lineNumber: 21,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                children: \"In\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\simon\\\\Desktop\\\\kompass\\\\frontend\\\\src\\\\components\\\\SearchArea.tsx\",\n                lineNumber: 33,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\simon\\\\Desktop\\\\kompass\\\\frontend\\\\src\\\\components\\\\SearchArea.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n}\n_s(SearchArea, \"K9szz4CiFnIF1zZmqTqwdvb9sb8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useSearchParams,\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = SearchArea;\nvar _c;\n$RefreshReg$(_c, \"SearchArea\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TZWFyY2hBcmVhLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkI7QUFDcUI7QUFDVjtBQUNVO0FBQ1Y7QUFDTztBQUVoQyxTQUFTUSxXQUFXLEtBQUU7UUFBRixFQUFFLEdBQUY7O0lBRS9CLE1BQU1DLGVBQWVSLGdFQUFlQTtJQUNwQyxNQUFNUyxTQUFTUixzREFBU0E7SUFDeEIsTUFBTSxDQUFDUyxPQUFPQyxTQUFTLEdBQUdQLCtDQUFRQSxDQUFTSSxhQUFhSSxHQUFHLENBQUMsUUFBUTtJQUVwRVQsZ0RBQVNBLENBQUM7UUFDUlEsU0FBU0gsYUFBYUksR0FBRyxDQUFDLFFBQVE7SUFDcEMsR0FBRTtRQUFDSjtLQUFhO0lBR2xCLHFCQUNFLDhEQUFDSztRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNmLDhEQUFDZixrREFBSUE7d0JBQUNnQixNQUFLO3dCQUFJRCxXQUFVOzswQ0FDdkIsOERBQUNFO2dDQUFJQyxLQUFJO2dDQUFpQkgsV0FBVTtnQ0FBWUksS0FBSTs7Ozs7OzBDQUNwRCw4REFBQ0M7Z0NBQUtMLFdBQVU7MENBQXVDOzs7Ozs7Ozs7Ozs7a0NBRXpELDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNNO2dDQUFNQyxNQUFLO2dDQUFPUCxXQUFVO2dDQUF3Q1EsT0FBT1o7Z0NBQU9hLFVBQVUsQ0FBQ0MsSUFBTWIsU0FBU2EsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7MENBQzNILDhEQUFDakIsb0ZBQVFBO2dDQUFDUyxXQUFVOzs7Ozs7MENBQ3BCLDhEQUFDUixpR0FBY0E7Z0NBQUNvQixTQUFTLElBQU1mLFNBQVM7Z0NBQU1HLFdBQVU7Ozs7Ozs7Ozs7OztrQ0FFMUQsOERBQUNhO3dCQUFPRCxTQUFTLElBQUtqQixPQUFPbUIsSUFBSSxDQUFDLGFBQXdDLE9BQTNCbEIsTUFBTW1CLEtBQUssQ0FBQyxLQUFLQyxJQUFJLENBQUM7d0JBQVNoQixXQUFVO2tDQUEyRzs7Ozs7Ozs7Ozs7OzBCQUVuTSw4REFBQ2E7MEJBQU87Ozs7Ozs7Ozs7OztBQUdoQjtHQTVCd0JwQjs7UUFFQ1AsNERBQWVBO1FBQ3JCQyxrREFBU0E7OztLQUhKTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TZWFyY2hBcmVhLnRzeD8xOTQ1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtCaVNlYXJjaH0gZnJvbSBcInJlYWN0LWljb25zL2JpXCI7XHJcbmltcG9ydCB7VnNjQ2hyb21lQ2xvc2V9IGZyb20gXCJyZWFjdC1pY29ucy92c2NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaEFyZWEoe30pIHtcclxuXHJcbiAgICBjb25zdCBzZWFyY2hQYXJhbXMgPSB1c2VTZWFyY2hQYXJhbXMoKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZTxzdHJpbmc+KHNlYXJjaFBhcmFtcy5nZXQoXCJxXCIpIHx8IFwiXCIpO1xyXG4gIFxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgIHNldFF1ZXJ5KHNlYXJjaFBhcmFtcy5nZXQoXCJxXCIpIHx8IFwiXCIpO1xyXG4gICAgfSxbc2VhcmNoUGFyYW1zXSlcclxuICBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBiZy1ncmF5LTIwMCBwLTQgZ2FwLTUgaXRlbXMtY2VudGVyIGJvcmRlci1iLTIgYm9yZGVyLWdyYXktMzAwIFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwgaXRlbXMtY2VudGVyIGdhcC01XCI+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBweC0yXCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi9Lb21wYXNzMmQucG5nXCIgY2xhc3NOYW1lPVwiaC0xMiB3LTEyXCIgYWx0PVwiS29tcGFzcyBsb2dvXCIgLz5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTYwMFwiPktvbXBhc3M8L3NwYW4+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1bNTAlXSBoLWZ1bGxcIj5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cInRleHQtYmxhY2sgdy1mdWxsIHAtMiBwbC04IHJvdW5kZWQtbWRcIiB2YWx1ZT17cXVlcnl9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0UXVlcnkoZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgPEJpU2VhcmNoIGNsYXNzTmFtZT1cInctNSBoLTUgYWJzb2x1dGUgbGVmdC0xLjUgdG9wLTIuNSB0ZXh0LWdyYXktNTAwXCIvPlxyXG4gICAgICAgICAgPFZzY0Nocm9tZUNsb3NlIG9uQ2xpY2s9eygpID0+IHNldFF1ZXJ5KFwiXCIpIH0gY2xhc3NOYW1lPVwidy01IGgtNSBhYnNvbHV0ZSByaWdodC0yIHRvcC0yLjUgdGV4dC1ncmF5LTYwMCBjdXJzb3ItcG9pbnRlclwiLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT4gcm91dGVyLnB1c2goYC9zZWFyY2g/cT0ke3F1ZXJ5LnNwbGl0KFwiIFwiKS5qb2luKFwiK1wiKX1gKX0gY2xhc3NOYW1lPVwidy0yMCBiZy1ibHVlLTIwMCB0ZXh0LWdyYXktNjAwIGgtMTAgcm91bmRlZC1tZCBmb250LXNlbWlib2xkIHRleHQteGwgaG92ZXI6YmctYmx1ZS0zMDAgdHJhbnNpdGlvbi1jb2xvcnNcIj5GaW5kPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvbj5JbjwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwidXNlU2VhcmNoUGFyYW1zIiwidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkJpU2VhcmNoIiwiVnNjQ2hyb21lQ2xvc2UiLCJTZWFyY2hBcmVhIiwic2VhcmNoUGFyYW1zIiwicm91dGVyIiwicXVlcnkiLCJzZXRRdWVyeSIsImdldCIsImRpdiIsImNsYXNzTmFtZSIsImhyZWYiLCJpbWciLCJzcmMiLCJhbHQiLCJzcGFuIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJvbkNsaWNrIiwiYnV0dG9uIiwicHVzaCIsInNwbGl0Iiwiam9pbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/SearchArea.tsx\n"));

/***/ })

});