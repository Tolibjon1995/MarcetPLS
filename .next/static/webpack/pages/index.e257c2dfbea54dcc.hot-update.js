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

/***/ "./components/Layout/Navbar.js":
/*!*************************************!*\
  !*** ./components/Layout/Navbar.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _TopPanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TopPanel */ \"./components/Layout/TopPanel.js\");\n/* harmony import */ var _TopHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TopHeader */ \"./components/Layout/TopHeader.js\");\n/* harmony import */ var _MegaMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MegaMenu */ \"./components/Layout/MegaMenu.js\");\n/* harmony import */ var _api_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api/base */ \"./api/base.jsx\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar Navbar = function(param) {\n    var telegramcode = param.telegramcode;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(second), user = ref[0], setUser = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        _api_base__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"/me/\").then(function(res) {\n            console.log(res);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MegaMenu__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n            fileName: \"E:\\\\TOLIBJON\\\\PROECT\\\\shoxruxOka\\\\MarcetPLS\\\\components\\\\Layout\\\\Navbar.js\",\n            lineNumber: 20,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"E:\\\\TOLIBJON\\\\PROECT\\\\shoxruxOka\\\\MarcetPLS\\\\components\\\\Layout\\\\Navbar.js\",\n        lineNumber: 17,\n        columnNumber: 9\n    }, _this);\n};\n_s(Navbar, \"6Owx1ksbVg6938QIWlxvMkuXIEI=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC9OYXZiYXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7OztBQUFvRDtBQUNsQjtBQUNFO0FBQ0Y7QUFDQTtBQUNEO0FBRWpDLElBQU1RLE1BQU0sR0FBRyxnQkFBb0I7UUFBbEJDLFlBQVksU0FBWkEsWUFBWTs7SUFDekIsSUFBd0JGLEdBQWdCLEdBQWhCQSwrQ0FBUSxDQUFDRyxNQUFNLENBQUMsRUFBakNDLElBQUksR0FBYUosR0FBZ0IsR0FBN0IsRUFBRUssT0FBTyxHQUFJTCxHQUFnQixHQUFwQjtJQUNwQkwsZ0RBQVMsQ0FBQyxXQUFNO1FBQ1pJLHFEQUFRLENBQUUsTUFBSSxDQUFFLENBQUNRLElBQUksQ0FBQyxTQUFDQyxHQUFHLEVBQUc7WUFDekJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixHQUFHLENBQUMsQ0FBQztRQUNyQixDQUFDLENBQUM7SUFDTixDQUFDLEVBQUUsRUFBRSxDQUFDO0lBRU4scUJBQ0ksOERBQUNmLHVEQUFjO2tCQUdYLDRFQUFDSyxpREFBUTs7OztpQkFBRzs7Ozs7YUFDQyxDQUNuQjtBQUNOLENBQUM7R0FmS0csTUFBTTtBQUFOQSxLQUFBQSxNQUFNO0FBaUJaLCtEQUFlQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTGF5b3V0L05hdmJhci5qcz8xZTVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUb3BQYW5lbCBmcm9tICcuL1RvcFBhbmVsJztcbmltcG9ydCBUb3BIZWFkZXIgZnJvbSAnLi9Ub3BIZWFkZXInO1xuaW1wb3J0IE1lZ2FNZW51IGZyb20gJy4vTWVnYU1lbnUnO1xuaW1wb3J0IGJhc2UgZnJvbSAnLi4vLi4vYXBpL2Jhc2UnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IE5hdmJhciA9ICh7dGVsZWdyYW1jb2RlfSkgPT4ge1xuICAgIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKHNlY29uZClcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBiYXNlLmdldChgL21lL2ApLnRoZW4oKHJlcyk9PntcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgIH0pXG4gICAgfSwgW10pXG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgey8qIDxUb3BQYW5lbCAvPiAqL31cbiAgICAgICAgICAgIHsvKiA8VG9wSGVhZGVyIC8+ICovfVxuICAgICAgICAgICAgPE1lZ2FNZW51IC8+XG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwidXNlRWZmZWN0IiwiVG9wUGFuZWwiLCJUb3BIZWFkZXIiLCJNZWdhTWVudSIsImJhc2UiLCJ1c2VTdGF0ZSIsIk5hdmJhciIsInRlbGVncmFtY29kZSIsInNlY29uZCIsInVzZXIiLCJzZXRVc2VyIiwiZ2V0IiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJGcmFnbWVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Layout/Navbar.js\n"));

/***/ })

});