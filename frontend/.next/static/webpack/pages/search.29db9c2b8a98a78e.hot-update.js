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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SearchArea; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _barrel_optimize_names_BiSearch_react_icons_bi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=BiSearch!=!react-icons/bi */ \"__barrel_optimize__?names=BiSearch!=!./node_modules/react-icons/bi/index.esm.js\");\n/* harmony import */ var _barrel_optimize_names_VscChromeClose_react_icons_vsc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=VscChromeClose!=!react-icons/vsc */ \"__barrel_optimize__?names=VscChromeClose!=!./node_modules/react-icons/vsc/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction SearchArea(param) {\n    let {} = param;\n    _s();\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useSearchParams)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(searchParams.get(\"q\") || \"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        setQuery(searchParams.get(\"q\") || \"\");\n    }, [\n        searchParams\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex p-4 gap-5 items-center border-b-2 border-gray-300 \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center gap-2 px-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/Kompass2d.png\",\n                        className: \"h-12 w-12\",\n                        alt: \"Kompass logo\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\simon\\\\Desktop\\\\kompass\\\\frontend\\\\src\\\\components\\\\SearchArea.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-3xl font-semibold text-gray-600\",\n                        children: \"Kompass\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\simon\\\\Desktop\\\\kompass\\\\frontend\\\\src\\\\components\\\\SearchArea.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\simon\\\\Desktop\\\\kompass\\\\frontend\\\\src\\\\components\\\\SearchArea.tsx\",\n                lineNumber: 20,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative w-[50%] h-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        className: \"text-black w-full p-2 pl-8 rounded-md\",\n                        value: query,\n                        onChange: (e)=>setQuery(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\simon\\\\Desktop\\\\kompass\\\\frontend\\\\src\\\\components\\\\SearchArea.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BiSearch_react_icons_bi__WEBPACK_IMPORTED_MODULE_4__.BiSearch, {\n                        className: \"w-5 h-5 absolute left-1.5 top-2.5 text-gray-500\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\simon\\\\Desktop\\\\kompass\\\\frontend\\\\src\\\\components\\\\SearchArea.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_VscChromeClose_react_icons_vsc__WEBPACK_IMPORTED_MODULE_5__.VscChromeClose, {\n                        onClick: ()=>setQuery(\"\"),\n                        className: \"w-5 h-5 absolute right-2 top-2.5 text-gray-600 cursor-pointer\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\simon\\\\Desktop\\\\kompass\\\\frontend\\\\src\\\\components\\\\SearchArea.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\simon\\\\Desktop\\\\kompass\\\\frontend\\\\src\\\\components\\\\SearchArea.tsx\",\n                lineNumber: 24,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>router.push(\"/search?q=\".concat(query.split(\" \").join(\"+\"))),\n                className: \"w-20 bg-blue-200 h-10 rounded-md font-semibold text-xl hover:bg-blue-300 transition-colors\",\n                children: \"Find\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\simon\\\\Desktop\\\\kompass\\\\frontend\\\\src\\\\components\\\\SearchArea.tsx\",\n                lineNumber: 29,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\simon\\\\Desktop\\\\kompass\\\\frontend\\\\src\\\\components\\\\SearchArea.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_s(SearchArea, \"K9szz4CiFnIF1zZmqTqwdvb9sb8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useSearchParams,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = SearchArea;\nvar _c;\n$RefreshReg$(_c, \"SearchArea\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TZWFyY2hBcmVhLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQWtEO0FBQ1Y7QUFDVTtBQUNWO0FBQ087QUFFaEMsU0FBU08sV0FBVyxLQUFFO1FBQUYsRUFBRSxHQUFGOztJQUUvQixNQUFNQyxlQUFlUixnRUFBZUE7SUFDcEMsTUFBTVMsU0FBU1Isc0RBQVNBO0lBQ3hCLE1BQU0sQ0FBQ1MsT0FBT0MsU0FBUyxHQUFHUCwrQ0FBUUEsQ0FBU0ksYUFBYUksR0FBRyxDQUFDLFFBQVE7SUFFcEVULGdEQUFTQSxDQUFDO1FBQ1JRLFNBQVNILGFBQWFJLEdBQUcsQ0FBQyxRQUFRO0lBQ3BDLEdBQUU7UUFBQ0o7S0FBYTtJQUdsQixxQkFDRSw4REFBQ0s7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQUlDLEtBQUk7d0JBQWlCRixXQUFVO3dCQUFZRyxLQUFJOzs7Ozs7a0NBQ3BELDhEQUFDQzt3QkFBS0osV0FBVTtrQ0FBdUM7Ozs7Ozs7Ozs7OzswQkFFekQsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0s7d0JBQU1DLE1BQUs7d0JBQU9OLFdBQVU7d0JBQXdDTyxPQUFPWDt3QkFBT1ksVUFBVSxDQUFDQyxJQUFNWixTQUFTWSxFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7OztrQ0FDM0gsOERBQUNoQixvRkFBUUE7d0JBQUNTLFdBQVU7Ozs7OztrQ0FDcEIsOERBQUNSLGlHQUFjQTt3QkFBQ21CLFNBQVMsSUFBTWQsU0FBUzt3QkFBTUcsV0FBVTs7Ozs7Ozs7Ozs7OzBCQUUxRCw4REFBQ1k7Z0JBQU9ELFNBQVMsSUFBS2hCLE9BQU9rQixJQUFJLENBQUMsYUFBd0MsT0FBM0JqQixNQUFNa0IsS0FBSyxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBU2YsV0FBVTswQkFBNkY7Ozs7Ozs7Ozs7OztBQUc3TDtHQXpCd0JQOztRQUVDUCw0REFBZUE7UUFDckJDLGtEQUFTQTs7O0tBSEpNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NlYXJjaEFyZWEudHN4PzE5NDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU2VhcmNoUGFyYW1zIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge0JpU2VhcmNofSBmcm9tIFwicmVhY3QtaWNvbnMvYmlcIjtcclxuaW1wb3J0IHtWc2NDaHJvbWVDbG9zZX0gZnJvbSBcInJlYWN0LWljb25zL3ZzY1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoQXJlYSh7fSkge1xyXG5cclxuICAgIGNvbnN0IHNlYXJjaFBhcmFtcyA9IHVzZVNlYXJjaFBhcmFtcygpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlPHN0cmluZz4oc2VhcmNoUGFyYW1zLmdldChcInFcIikgfHwgXCJcIik7XHJcbiAgXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgc2V0UXVlcnkoc2VhcmNoUGFyYW1zLmdldChcInFcIikgfHwgXCJcIik7XHJcbiAgICB9LFtzZWFyY2hQYXJhbXNdKVxyXG4gIFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHAtNCBnYXAtNSBpdGVtcy1jZW50ZXIgYm9yZGVyLWItMiBib3JkZXItZ3JheS0zMDAgXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBweC0yXCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi9Lb21wYXNzMmQucG5nXCIgY2xhc3NOYW1lPVwiaC0xMiB3LTEyXCIgYWx0PVwiS29tcGFzcyBsb2dvXCIgLz5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTYwMFwiPktvbXBhc3M8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LVs1MCVdIGgtZnVsbFwiPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwidGV4dC1ibGFjayB3LWZ1bGwgcC0yIHBsLTggcm91bmRlZC1tZFwiIHZhbHVlPXtxdWVyeX0gb25DaGFuZ2U9eyhlKSA9PiBzZXRRdWVyeShlLnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICA8QmlTZWFyY2ggY2xhc3NOYW1lPVwidy01IGgtNSBhYnNvbHV0ZSBsZWZ0LTEuNSB0b3AtMi41IHRleHQtZ3JheS01MDBcIi8+XHJcbiAgICAgICAgICA8VnNjQ2hyb21lQ2xvc2Ugb25DbGljaz17KCkgPT4gc2V0UXVlcnkoXCJcIikgfSBjbGFzc05hbWU9XCJ3LTUgaC01IGFic29sdXRlIHJpZ2h0LTIgdG9wLTIuNSB0ZXh0LWdyYXktNjAwIGN1cnNvci1wb2ludGVyXCIvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PiByb3V0ZXIucHVzaChgL3NlYXJjaD9xPSR7cXVlcnkuc3BsaXQoXCIgXCIpLmpvaW4oXCIrXCIpfWApfSBjbGFzc05hbWU9XCJ3LTIwIGJnLWJsdWUtMjAwIGgtMTAgcm91bmRlZC1tZCBmb250LXNlbWlib2xkIHRleHQteGwgaG92ZXI6YmctYmx1ZS0zMDAgdHJhbnNpdGlvbi1jb2xvcnNcIj5GaW5kPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU2VhcmNoUGFyYW1zIiwidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkJpU2VhcmNoIiwiVnNjQ2hyb21lQ2xvc2UiLCJTZWFyY2hBcmVhIiwic2VhcmNoUGFyYW1zIiwicm91dGVyIiwicXVlcnkiLCJzZXRRdWVyeSIsImdldCIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImFsdCIsInNwYW4iLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsIm9uQ2xpY2siLCJidXR0b24iLCJwdXNoIiwic3BsaXQiLCJqb2luIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/SearchArea.tsx\n"));

/***/ })

});