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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_BiSearch_react_icons_bi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=BiSearch!=!react-icons/bi */ \"__barrel_optimize__?names=BiSearch!=!./node_modules/react-icons/bi/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        document.addEventListener(\"keypress\", (e)=>onKeyPress(e));\n        return ()=>document.removeEventListener(\"keypress\", (e)=>onKeyPress(e));\n    }, []);\n    const onKeyPress = (e)=>{\n        switch(e.key){\n            case \"Enter\":\n                if (query !== \"\") router.push(\"/search?q=\" + query.split(\" \").join(\"+\"));\n                break;\n            default:\n                break;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"bg-gray-200 h-[100vh] grid place-items-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col gap-10 items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"/Kompass3d2.png\",\n                            className: \"h-40 w-40\",\n                            alt: \"\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\simon\\\\Desktop\\\\kompass\\\\frontend\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-6xl font-bold\",\n                            children: [\n                                \"K\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-gray-500\",\n                                    children: \"o\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\simon\\\\Desktop\\\\kompass\\\\frontend\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 32,\n                                    columnNumber: 47\n                                }, this),\n                                \"mpass\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\simon\\\\Desktop\\\\kompass\\\\frontend\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\simon\\\\Desktop\\\\kompass\\\\frontend\\\\src\\\\pages\\\\index.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"h-10 flex\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"relative\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    className: \"p-2 h-full w-[500px] rounded-l-md text-lg\",\n                                    placeholder: \"Find your way...\",\n                                    value: query,\n                                    onChange: (e)=>setQuery(e.target.value)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\simon\\\\Desktop\\\\kompass\\\\frontend\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BiSearch_react_icons_bi__WEBPACK_IMPORTED_MODULE_3__.BiSearch, {\n                                    className: \"w-7 h-7 absolute right-1 top-2 text-gray-500\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\simon\\\\Desktop\\\\kompass\\\\frontend\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\simon\\\\Desktop\\\\kompass\\\\frontend\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>router.push(\"/search?q=\".concat(query.split(\" \").join(\"+\"))),\n                            className: \"w-20 bg-blue-200 h-full  rounded-r-md font-semibold text-xl hover:bg-blue-300 transition-colors\",\n                            children: \"Go\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\simon\\\\Desktop\\\\kompass\\\\frontend\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\simon\\\\Desktop\\\\kompass\\\\frontend\\\\src\\\\pages\\\\index.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\simon\\\\Desktop\\\\kompass\\\\frontend\\\\src\\\\pages\\\\index.tsx\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\simon\\\\Desktop\\\\kompass\\\\frontend\\\\src\\\\pages\\\\index.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"mezw8Una1cZ5xCK3XLhPOo8tH+8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFDRDtBQUNKO0FBR3hCLFNBQVNJOztJQUN0QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0osK0NBQVFBLENBQVM7SUFDM0MsTUFBTUssU0FBU1AsMERBQVNBO0lBRXhCQyxnREFBU0EsQ0FBQztRQUNSTyxTQUFTQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUNDLElBQU1DLFdBQVdEO1FBQ3hELE9BQU8sSUFBTUYsU0FBU0ksbUJBQW1CLENBQUMsWUFBWSxDQUFDRixJQUFNQyxXQUFXRDtJQUUxRSxHQUFFLEVBQUU7SUFFSixNQUFNQyxhQUFhLENBQUNEO1FBQ2xCLE9BQVFBLEVBQUVHLEdBQUc7WUFDWCxLQUFLO2dCQUNILElBQUlSLFVBQVUsSUFBSUUsT0FBT08sSUFBSSxDQUFDLGVBQWFULE1BQU1VLEtBQUssQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQ2pFO1lBQ0Y7Z0JBQ0c7UUFDTDtJQUNGO0lBR0EscUJBQ0UsOERBQUNDO1FBQUtDLFdBQVk7a0JBQ2hCLDRFQUFDQztZQUFJRCxXQUFVOzs4QkFDYiw4REFBQ0M7b0JBQUlELFdBQVU7O3NDQUNiLDhEQUFDRTs0QkFBSUMsS0FBSTs0QkFBa0JILFdBQVU7NEJBQVlJLEtBQUk7Ozs7OztzQ0FDckQsOERBQUNDOzRCQUFHTCxXQUFVOztnQ0FBcUI7OENBQUMsOERBQUNNO29DQUFLTixXQUFVOzhDQUFnQjs7Ozs7O2dDQUFROzs7Ozs7Ozs7Ozs7OzhCQUU5RSw4REFBQ0M7b0JBQUlELFdBQVU7O3NDQUNiLDhEQUFDQzs0QkFBSUQsV0FBVTs7OENBQ2IsOERBQUNPO29DQUFNQyxNQUFLO29DQUFPUixXQUFVO29DQUE0Q1MsYUFBWTtvQ0FBbUJDLE9BQU92QjtvQ0FBT3dCLFVBQVUsQ0FBQ25CLElBQU1KLFNBQVNJLEVBQUVvQixNQUFNLENBQUNGLEtBQUs7Ozs7Ozs4Q0FDOUosOERBQUN6QixvRkFBUUE7b0NBQUNlLFdBQVU7Ozs7Ozs7Ozs7OztzQ0FFdEIsOERBQUNhOzRCQUFPQyxTQUFTLElBQUt6QixPQUFPTyxJQUFJLENBQUMsYUFBd0MsT0FBM0JULE1BQU1VLEtBQUssQ0FBQyxLQUFLQyxJQUFJLENBQUM7NEJBQVNFLFdBQVU7c0NBQWtHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtwTTtHQXRDd0JkOztRQUVQSixzREFBU0E7OztLQUZGSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7QmlTZWFyY2h9IGZyb20gXCJyZWFjdC1pY29ucy9iaVwiXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICB1c2VFZmZlY3QoKCk9PntcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgKGUpID0+IG9uS2V5UHJlc3MoZSkpXG4gICAgcmV0dXJuICgpID0+IGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCAoZSkgPT4gb25LZXlQcmVzcyhlKSlcblxuICB9LFtdKVxuXG4gIGNvbnN0IG9uS2V5UHJlc3MgPSAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgIHN3aXRjaCAoZS5rZXkpIHtcbiAgICAgIGNhc2UgXCJFbnRlclwiOlxuICAgICAgICBpZiAocXVlcnkgIT09IFwiXCIpIHJvdXRlci5wdXNoKFwiL3NlYXJjaD9xPVwiK3F1ZXJ5LnNwbGl0KFwiIFwiKS5qb2luKFwiK1wiKSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9e2BiZy1ncmF5LTIwMCBoLVsxMDB2aF0gZ3JpZCBwbGFjZS1pdGVtcy1jZW50ZXJgfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtMTAgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8aW1nIHNyYz1cIi9Lb21wYXNzM2QyLnBuZ1wiIGNsYXNzTmFtZT1cImgtNDAgdy00MFwiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNnhsIGZvbnQtYm9sZFwiPks8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwXCI+bzwvc3Bhbj5tcGFzczwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtMTAgZmxleFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cInAtMiBoLWZ1bGwgdy1bNTAwcHhdIHJvdW5kZWQtbC1tZCB0ZXh0LWxnXCIgcGxhY2Vob2xkZXI9J0ZpbmQgeW91ciB3YXkuLi4nIHZhbHVlPXtxdWVyeX0gb25DaGFuZ2U9eyhlKSA9PiBzZXRRdWVyeShlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgICAgICA8QmlTZWFyY2ggY2xhc3NOYW1lPVwidy03IGgtNyBhYnNvbHV0ZSByaWdodC0xIHRvcC0yIHRleHQtZ3JheS01MDBcIi8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+IHJvdXRlci5wdXNoKGAvc2VhcmNoP3E9JHtxdWVyeS5zcGxpdChcIiBcIikuam9pbihcIitcIil9YCl9IGNsYXNzTmFtZT1cInctMjAgYmctYmx1ZS0yMDAgaC1mdWxsICByb3VuZGVkLXItbWQgZm9udC1zZW1pYm9sZCB0ZXh0LXhsIGhvdmVyOmJnLWJsdWUtMzAwIHRyYW5zaXRpb24tY29sb3JzXCI+R288L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L21haW4+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkJpU2VhcmNoIiwiSG9tZSIsInF1ZXJ5Iiwic2V0UXVlcnkiLCJyb3V0ZXIiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwib25LZXlQcmVzcyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJrZXkiLCJwdXNoIiwic3BsaXQiLCJqb2luIiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsImltZyIsInNyYyIsImFsdCIsImgxIiwic3BhbiIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});