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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ index; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction index() {\n    _s();\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useSearchParams)();\n    const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(searchParams.get(\"q\") || \"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        setQuery(searchParams.get(\"q\") || \"\");\n    }, [\n        searchParams\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"bg-gray-200 h-[100vh]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex p-4 gap-5\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center gap-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"/Kompass2d.png\",\n                            className: \"h-12 w-12\",\n                            alt: \"Kompass logo\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\simon\\\\Desktop\\\\kompass\\\\frontend\\\\src\\\\pages\\\\search\\\\index.tsx\",\n                            lineNumber: 18,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-3xl font-semibold text-gray-600\",\n                            children: \"Kompass\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\simon\\\\Desktop\\\\kompass\\\\frontend\\\\src\\\\pages\\\\search\\\\index.tsx\",\n                            lineNumber: 19,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\simon\\\\Desktop\\\\kompass\\\\frontend\\\\src\\\\pages\\\\search\\\\index.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    className: \"text-black\",\n                    value: query,\n                    onChange: (e)=>setQuery(e.target.value)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\simon\\\\Desktop\\\\kompass\\\\frontend\\\\src\\\\pages\\\\search\\\\index.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\simon\\\\Desktop\\\\kompass\\\\frontend\\\\src\\\\pages\\\\search\\\\index.tsx\",\n            lineNumber: 16,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\simon\\\\Desktop\\\\kompass\\\\frontend\\\\src\\\\pages\\\\search\\\\index.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n_s(index, \"dNrgsSG6wnIRISDKtlq5hoh1kIc=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useSearchParams\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvc2VhcmNoL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBaUQ7QUFDQztBQUVuQyxTQUFTSTs7SUFFdEIsTUFBTUMsZUFBZUwsZ0VBQWVBO0lBQ3BDLE1BQU0sQ0FBQ00sT0FBT0MsU0FBUyxHQUFHSiwrQ0FBUUEsQ0FBU0UsYUFBYUcsR0FBRyxDQUFDLFFBQVE7SUFFcEVOLGdEQUFTQSxDQUFDO1FBQ1JLLFNBQVNGLGFBQWFHLEdBQUcsQ0FBQyxRQUFRO0lBQ3BDLEdBQUU7UUFBQ0g7S0FBYTtJQUdoQixxQkFDRSw4REFBQ0k7UUFBS0MsV0FBVTtrQkFDZCw0RUFBQ0M7WUFBSUQsV0FBVTs7OEJBQ2IsOERBQUNDO29CQUFJRCxXQUFVOztzQ0FDYiw4REFBQ0U7NEJBQUlDLEtBQUk7NEJBQWlCSCxXQUFVOzRCQUFZSSxLQUFJOzs7Ozs7c0NBQ3BELDhEQUFDQzs0QkFBS0wsV0FBVTtzQ0FBdUM7Ozs7Ozs7Ozs7Ozs4QkFFekQsOERBQUNNO29CQUFNQyxNQUFLO29CQUFPUCxXQUFVO29CQUFhUSxPQUFPWjtvQkFBT2EsVUFBVSxDQUFDQyxJQUFNYixTQUFTYSxFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3hHO0dBdEJ3QmQ7O1FBRURKLDREQUFlQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvc2VhcmNoL2luZGV4LnRzeD8yZmM4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gJ25leHQvbmF2aWdhdGlvbidcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluZGV4KCkge1xyXG5cclxuICBjb25zdCBzZWFyY2hQYXJhbXMgPSB1c2VTZWFyY2hQYXJhbXMoKTtcclxuICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlPHN0cmluZz4oc2VhcmNoUGFyYW1zLmdldChcInFcIikgfHwgXCJcIik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgc2V0UXVlcnkoc2VhcmNoUGFyYW1zLmdldChcInFcIikgfHwgXCJcIik7XHJcbiAgfSxbc2VhcmNoUGFyYW1zXSlcclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJiZy1ncmF5LTIwMCBoLVsxMDB2aF1cIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHAtNCBnYXAtNVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiL0tvbXBhc3MyZC5wbmdcIiBjbGFzc05hbWU9XCJoLTEyIHctMTJcIiBhbHQ9XCJLb21wYXNzIGxvZ29cIiAvPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktNjAwXCI+S29tcGFzczwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrXCIgdmFsdWU9e3F1ZXJ5fSBvbkNoYW5nZT17KGUpID0+IHNldFF1ZXJ5KGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIFxyXG4gICAgPC9tYWluPlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU2VhcmNoUGFyYW1zIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImluZGV4Iiwic2VhcmNoUGFyYW1zIiwicXVlcnkiLCJzZXRRdWVyeSIsImdldCIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJpbWciLCJzcmMiLCJhbHQiLCJzcGFuIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/search/index.tsx\n"));

/***/ })

});