"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/account",{

/***/ "./pages/account.js":
/*!**************************!*\
  !*** ./pages/account.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/base */ \"./api/base.jsx\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar account = function() {\n    _s();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(useState({\n        user: \"\"\n    }), 2), user = ref[0], setUser = ref[1];\n    var telegramcode3 =  true ? window.localStorage.getItem(\"refresh\") : 0;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (telegramcode3) {\n            _api_base__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"/me/\").then(function(res) {\n                if (res.status == 200) {\n                    setUser({\n                        user: res.data.user\n                    });\n                    localStorage.setItem(\"test\", JSON.stringify(res.data.user), {\n                        path: \"/\"\n                    });\n                }\n            });\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-6 offset-3\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card mt-60\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"acc_img\",\n                                src: \"\",\n                                alt: \"\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\TOLIBJON\\\\PROECT\\\\shoxruxOka\\\\MarcetPLS\\\\pages\\\\account.js\",\n                                lineNumber: 29,\n                                columnNumber: 17\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                className: \"form-control mt-3\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\TOLIBJON\\\\PROECT\\\\shoxruxOka\\\\MarcetPLS\\\\pages\\\\account.js\",\n                                lineNumber: 30,\n                                columnNumber: 17\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                className: \"form-control mt-3\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\TOLIBJON\\\\PROECT\\\\shoxruxOka\\\\MarcetPLS\\\\pages\\\\account.js\",\n                                lineNumber: 31,\n                                columnNumber: 17\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"btn btn-success\",\n                                children: \"O'zgartirish\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\TOLIBJON\\\\PROECT\\\\shoxruxOka\\\\MarcetPLS\\\\pages\\\\account.js\",\n                                lineNumber: 32,\n                                columnNumber: 17\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\TOLIBJON\\\\PROECT\\\\shoxruxOka\\\\MarcetPLS\\\\pages\\\\account.js\",\n                        lineNumber: 28,\n                        columnNumber: 15\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"E:\\\\TOLIBJON\\\\PROECT\\\\shoxruxOka\\\\MarcetPLS\\\\pages\\\\account.js\",\n                    lineNumber: 27,\n                    columnNumber: 13\n                }, _this)\n            }, void 0, false, {\n                fileName: \"E:\\\\TOLIBJON\\\\PROECT\\\\shoxruxOka\\\\MarcetPLS\\\\pages\\\\account.js\",\n                lineNumber: 26,\n                columnNumber: 11\n            }, _this)\n        }, void 0, false, {\n            fileName: \"E:\\\\TOLIBJON\\\\PROECT\\\\shoxruxOka\\\\MarcetPLS\\\\pages\\\\account.js\",\n            lineNumber: 25,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"E:\\\\TOLIBJON\\\\PROECT\\\\shoxruxOka\\\\MarcetPLS\\\\pages\\\\account.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, _this);\n};\n_s(account, \"55ueuT1F2RdXl9GF3OWjUd1+oAg=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (account);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hY2NvdW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUF5QjtBQUNTO0FBQ0g7QUFFL0IsSUFBTUcsT0FBTyxHQUFHLFdBQU07O0lBRXBCLElBQXdCQyxHQUFtQixvRkFBbkJBLFFBQVEsQ0FBQztRQUFDQyxJQUFJLEVBQUMsRUFBRTtLQUFDLENBQUMsTUFBcENBLElBQUksR0FBYUQsR0FBbUIsR0FBaEMsRUFBRUUsT0FBTyxHQUFJRixHQUFtQixHQUF2QjtJQUNwQixJQUFJRyxhQUFhLEdBQUcsS0FBNkIsR0FBR0MsTUFBTSxDQUFDQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFLO0lBQ2xHVCxnREFBUyxDQUFDLFdBQU07UUFDZCxJQUFJTSxhQUFhLEVBQUU7WUFDakJMLHFEQUFRLENBQUUsTUFBSSxDQUFFLENBQUNVLElBQUksQ0FBQyxTQUFDQyxHQUFHLEVBQUc7Z0JBQzNCLElBQUlBLEdBQUcsQ0FBQ0MsTUFBTSxJQUFJLEdBQUcsRUFBRTtvQkFDbkJSLE9BQU8sQ0FBQzt3QkFDSkQsSUFBSSxFQUFFUSxHQUFHLENBQUNFLElBQUksQ0FBQ1YsSUFBSTtxQkFDdEIsQ0FBQyxDQUFDO29CQUNISSxZQUFZLENBQUNPLE9BQU8sQ0FBQyxNQUFNLEVBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDTCxHQUFHLENBQUNFLElBQUksQ0FBQ1YsSUFBSSxDQUFDLEVBQUU7d0JBQUVjLElBQUksRUFBRSxHQUFHO3FCQUFFLENBQUM7Z0JBQzlFLENBQUM7WUFFTCxDQUFDLENBQUM7UUFDRixDQUFDO0lBQ0gsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUVOLHFCQUNFLDhEQUFDQyxLQUFHO2tCQUNBLDRFQUFDQSxLQUFHO1lBQUNDLFNBQVMsRUFBQyxXQUFXO3NCQUN4Qiw0RUFBQ0QsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLEtBQUs7MEJBQ2xCLDRFQUFDRCxLQUFHO29CQUFDQyxTQUFTLEVBQUMsZ0JBQWdCOzhCQUM3Qiw0RUFBQ0QsS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLFlBQVk7OzBDQUN6Qiw4REFBQ0MsS0FBRztnQ0FBQ0QsU0FBUyxFQUFDLFNBQVM7Z0NBQUNFLEdBQUcsRUFBQyxFQUFFO2dDQUFDQyxHQUFHLEVBQUMsRUFBRTs7Ozs7cUNBQUc7MENBQ3pDLDhEQUFDQyxPQUFLO2dDQUFDQyxJQUFJLEVBQUMsTUFBTTtnQ0FBQ0wsU0FBUyxFQUFDLG1CQUFtQjs7Ozs7cUNBQUc7MENBQ25ELDhEQUFDSSxPQUFLO2dDQUFDQyxJQUFJLEVBQUMsTUFBTTtnQ0FBQ0wsU0FBUyxFQUFDLG1CQUFtQjs7Ozs7cUNBQUc7MENBQ25ELDhEQUFDTSxRQUFNO2dDQUFDTixTQUFTLEVBQUMsaUJBQWlCOzBDQUFDLGNBQVk7Ozs7O3FDQUFTOzs7Ozs7NkJBQ3JEOzs7Ozt5QkFDRjs7Ozs7cUJBQ0Y7Ozs7O2lCQUNGOzs7OzthQUNKLENBQ1A7QUFDSCxDQUFDO0dBbENLbEIsT0FBTztBQW9DYiwrREFBZUEsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hY2NvdW50LmpzPzJlODYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBiYXNlIGZyb20gJy4uL2FwaS9iYXNlJztcclxuXHJcbmNvbnN0IGFjY291bnQgPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKHt1c2VyOicnfSlcclxuICBsZXQgdGVsZWdyYW1jb2RlMyA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3JlZnJlc2gnKSA6IGZhbHNlO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodGVsZWdyYW1jb2RlMykge1xyXG4gICAgICBiYXNlLmdldChgL21lL2ApLnRoZW4oKHJlcyk9PntcclxuICAgICAgICBpZiAocmVzLnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICAgICAgc2V0VXNlcih7XHJcbiAgICAgICAgICAgICAgICB1c2VyOiByZXMuZGF0YS51c2VyXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRlc3RcIiwgSlNPTi5zdHJpbmdpZnkocmVzLmRhdGEudXNlciksIHsgcGF0aDogXCIvXCIgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9KVxyXG4gICAgfVxyXG4gIH0sIFtdKVxyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02IG9mZnNldC0zXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIG10LTYwXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0nYWNjX2ltZycgc3JjPVwiXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBtdC0zXCIgLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBtdC0zXCIgLz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzXCI+Tyd6Z2FydGlyaXNoPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFjY291bnQiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJiYXNlIiwiYWNjb3VudCIsInVzZVN0YXRlIiwidXNlciIsInNldFVzZXIiLCJ0ZWxlZ3JhbWNvZGUzIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImdldCIsInRoZW4iLCJyZXMiLCJzdGF0dXMiLCJkYXRhIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwYXRoIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiYWx0IiwiaW5wdXQiLCJ0eXBlIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/account.js\n"));

/***/ })

});