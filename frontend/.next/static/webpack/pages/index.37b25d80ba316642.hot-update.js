"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_BiSearch_react_icons_bi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=BiSearch!=!react-icons/bi */ \"__barrel_optimize__?names=BiSearch!=!./node_modules/react-icons/bi/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        document.addEventListener(\"keypress\", (e)=>onKeyPress(e));\n        return ()=>document.removeEventListener(\"keypress\", (e)=>onKeyPress(e));\n    }, []);\n    const onKeyPress = (e)=>{\n        switch(e.key){\n            case \"Enter\":\n                console.break;\n            default:\n                break;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"bg-gray-200 h-[100vh] grid place-items-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col gap-10 items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"/Kompass3d2.png\",\n                            className: \"h-40 w-40\",\n                            alt: \"\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\simon\\\\Desktop\\\\kompass\\\\frontend\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-6xl font-bold\",\n                            children: [\n                                \"K\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-gray-500\",\n                                    children: \"o\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\simon\\\\Desktop\\\\kompass\\\\frontend\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 32,\n                                    columnNumber: 47\n                                }, this),\n                                \"mpass\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\simon\\\\Desktop\\\\kompass\\\\frontend\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\simon\\\\Desktop\\\\kompass\\\\frontend\\\\src\\\\pages\\\\index.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"h-10 flex\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"relative\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    className: \"p-2 h-full w-[500px] rounded-l-md text-lg\",\n                                    placeholder: \"Find your way...\",\n                                    value: query,\n                                    onChange: (e)=>setQuery(e.target.value)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\simon\\\\Desktop\\\\kompass\\\\frontend\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BiSearch_react_icons_bi__WEBPACK_IMPORTED_MODULE_3__.BiSearch, {\n                                    className: \"w-7 h-7 absolute right-1 top-2 text-gray-500\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\simon\\\\Desktop\\\\kompass\\\\frontend\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\simon\\\\Desktop\\\\kompass\\\\frontend\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>router.push(\"/search?q=\".concat(query.split(\" \").join(\"+\"))),\n                            className: \"w-20 bg-blue-200 h-full  rounded-r-md font-semibold text-xl hover:bg-blue-300 transition-colors\",\n                            children: \"Go\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\simon\\\\Desktop\\\\kompass\\\\frontend\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\simon\\\\Desktop\\\\kompass\\\\frontend\\\\src\\\\pages\\\\index.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\simon\\\\Desktop\\\\kompass\\\\frontend\\\\src\\\\pages\\\\index.tsx\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\simon\\\\Desktop\\\\kompass\\\\frontend\\\\src\\\\pages\\\\index.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"mezw8Una1cZ5xCK3XLhPOo8tH+8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFDRDtBQUNKO0FBR3hCLFNBQVNJOztJQUN0QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0osK0NBQVFBLENBQVM7SUFDM0MsTUFBTUssU0FBU1AsMERBQVNBO0lBRXhCQyxnREFBU0EsQ0FBQztRQUNSTyxTQUFTQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUNDLElBQU1DLFdBQVdEO1FBQ3hELE9BQU8sSUFBTUYsU0FBU0ksbUJBQW1CLENBQUMsWUFBWSxDQUFDRixJQUFNQyxXQUFXRDtJQUUxRSxHQUFFLEVBQUU7SUFFSixNQUFNQyxhQUFhLENBQUNEO1FBQ2xCLE9BQVFBLEVBQUVHLEdBQUc7WUFDWCxLQUFLO2dCQUNIQyxRQUNBQyxLQUFLO1lBQ1A7Z0JBQ0c7UUFDTDtJQUNGO0lBR0EscUJBQ0UsOERBQUNDO1FBQUtDLFdBQVk7a0JBQ2hCLDRFQUFDQztZQUFJRCxXQUFVOzs4QkFDYiw4REFBQ0M7b0JBQUlELFdBQVU7O3NDQUNiLDhEQUFDRTs0QkFBSUMsS0FBSTs0QkFBa0JILFdBQVU7NEJBQVlJLEtBQUk7Ozs7OztzQ0FDckQsOERBQUNDOzRCQUFHTCxXQUFVOztnQ0FBcUI7OENBQUMsOERBQUNNO29DQUFLTixXQUFVOzhDQUFnQjs7Ozs7O2dDQUFROzs7Ozs7Ozs7Ozs7OzhCQUU5RSw4REFBQ0M7b0JBQUlELFdBQVU7O3NDQUNiLDhEQUFDQzs0QkFBSUQsV0FBVTs7OENBQ2IsOERBQUNPO29DQUFNQyxNQUFLO29DQUFPUixXQUFVO29DQUE0Q1MsYUFBWTtvQ0FBbUJDLE9BQU90QjtvQ0FBT3VCLFVBQVUsQ0FBQ2xCLElBQU1KLFNBQVNJLEVBQUVtQixNQUFNLENBQUNGLEtBQUs7Ozs7Ozs4Q0FDOUosOERBQUN4QixvRkFBUUE7b0NBQUNjLFdBQVU7Ozs7Ozs7Ozs7OztzQ0FFdEIsOERBQUNhOzRCQUFPQyxTQUFTLElBQUt4QixPQUFPeUIsSUFBSSxDQUFDLGFBQXdDLE9BQTNCM0IsTUFBTTRCLEtBQUssQ0FBQyxLQUFLQyxJQUFJLENBQUM7NEJBQVNqQixXQUFVO3NDQUFrRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLcE07R0F0Q3dCYjs7UUFFUEosc0RBQVNBOzs7S0FGRkkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge0JpU2VhcmNofSBmcm9tIFwicmVhY3QtaWNvbnMvYmlcIlxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIChlKSA9PiBvbktleVByZXNzKGUpKVxuICAgIHJldHVybiAoKSA9PiBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgKGUpID0+IG9uS2V5UHJlc3MoZSkpXG5cbiAgfSxbXSlcblxuICBjb25zdCBvbktleVByZXNzID0gKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICBzd2l0Y2ggKGUua2V5KSB7XG4gICAgICBjYXNlIFwiRW50ZXJcIjpcbiAgICAgICAgY29uc29sZS5cbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT17YGJnLWdyYXktMjAwIGgtWzEwMHZoXSBncmlkIHBsYWNlLWl0ZW1zLWNlbnRlcmB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC0xMCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiL0tvbXBhc3MzZDIucG5nXCIgY2xhc3NOYW1lPVwiaC00MCB3LTQwXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC02eGwgZm9udC1ib2xkXCI+SzxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDBcIj5vPC9zcGFuPm1wYXNzPC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC0xMCBmbGV4XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwicC0yIGgtZnVsbCB3LVs1MDBweF0gcm91bmRlZC1sLW1kIHRleHQtbGdcIiBwbGFjZWhvbGRlcj0nRmluZCB5b3VyIHdheS4uLicgdmFsdWU9e3F1ZXJ5fSBvbkNoYW5nZT17KGUpID0+IHNldFF1ZXJ5KGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgICAgICAgIDxCaVNlYXJjaCBjbGFzc05hbWU9XCJ3LTcgaC03IGFic29sdXRlIHJpZ2h0LTEgdG9wLTIgdGV4dC1ncmF5LTUwMFwiLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT4gcm91dGVyLnB1c2goYC9zZWFyY2g/cT0ke3F1ZXJ5LnNwbGl0KFwiIFwiKS5qb2luKFwiK1wiKX1gKX0gY2xhc3NOYW1lPVwidy0yMCBiZy1ibHVlLTIwMCBoLWZ1bGwgIHJvdW5kZWQtci1tZCBmb250LXNlbWlib2xkIHRleHQteGwgaG92ZXI6YmctYmx1ZS0zMDAgdHJhbnNpdGlvbi1jb2xvcnNcIj5HbzwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbWFpbj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQmlTZWFyY2giLCJIb21lIiwicXVlcnkiLCJzZXRRdWVyeSIsInJvdXRlciIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJvbktleVByZXNzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImtleSIsImNvbnNvbGUiLCJicmVhayIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJpbWciLCJzcmMiLCJhbHQiLCJoMSIsInNwYW4iLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJidXR0b24iLCJvbkNsaWNrIiwicHVzaCIsInNwbGl0Iiwiam9pbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});