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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _TopPanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TopPanel */ \"./components/Layout/TopPanel.js\");\n/* harmony import */ var _TopHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TopHeader */ \"./components/Layout/TopHeader.js\");\n/* harmony import */ var _MegaMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MegaMenu */ \"./components/Layout/MegaMenu.js\");\n/* harmony import */ var _api_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api/base */ \"./api/base.jsx\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar Navbar = function(param) {\n    var telegramcode = param.telegramcode;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        user: \"\"\n    }), user = ref[0], setUser = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        _api_base__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"/me/\").then(function(res) {\n            setUser({\n                user: res.data.user\n            });\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MegaMenu__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            user: user.user\n        }, void 0, false, {\n            fileName: \"E:\\\\TOLIBJON\\\\PROECT\\\\shoxruxOka\\\\MarcetPLS\\\\components\\\\Layout\\\\Navbar.js\",\n            lineNumber: 24,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"E:\\\\TOLIBJON\\\\PROECT\\\\shoxruxOka\\\\MarcetPLS\\\\components\\\\Layout\\\\Navbar.js\",\n        lineNumber: 21,\n        columnNumber: 9\n    }, _this);\n};\n_s(Navbar, \"oMWpX96dJAOSptw3F15yHttSK8E=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC9OYXZiYXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7OztBQUFvRDtBQUNsQjtBQUNFO0FBQ0Y7QUFDQTtBQUNEO0FBRWpDLElBQU1RLE1BQU0sR0FBRyxnQkFBb0I7UUFBbEJDLFlBQVksU0FBWkEsWUFBWTs7SUFDekIsSUFBd0JGLEdBQW1CLEdBQW5CQSwrQ0FBUSxDQUFDO1FBQUNHLElBQUksRUFBQyxFQUFFO0tBQUMsQ0FBQyxFQUFwQ0EsSUFBSSxHQUFhSCxHQUFtQixHQUFoQyxFQUFFSSxPQUFPLEdBQUlKLEdBQW1CLEdBQXZCO0lBQ3BCTCxnREFBUyxDQUFDLFdBQU07UUFFWkkscURBQVEsQ0FBRSxNQUFJLENBQUUsQ0FBQ08sSUFBSSxDQUFDLFNBQUNDLEdBQUcsRUFBRztZQUN6QkgsT0FBTyxDQUFDO2dCQUNKRCxJQUFJLEVBQUVJLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDTCxJQUFJO2FBQ3RCLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQztJQUVOLENBQUMsRUFBRSxFQUFFLENBQUM7SUFFTixxQkFDSSw4REFBQ1YsdURBQWM7a0JBR1gsNEVBQUNLLGlEQUFRO1lBQUNLLElBQUksRUFBRUEsSUFBSSxDQUFDQSxJQUFJOzs7OztpQkFBRzs7Ozs7YUFDZixDQUNuQjtBQUNOLENBQUM7R0FuQktGLE1BQU07QUFBTkEsS0FBQUEsTUFBTTtBQXFCWiwrREFBZUEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xheW91dC9OYXZiYXIuanM/MWU1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVG9wUGFuZWwgZnJvbSAnLi9Ub3BQYW5lbCc7XG5pbXBvcnQgVG9wSGVhZGVyIGZyb20gJy4vVG9wSGVhZGVyJztcbmltcG9ydCBNZWdhTWVudSBmcm9tICcuL01lZ2FNZW51JztcbmltcG9ydCBiYXNlIGZyb20gJy4uLy4uL2FwaS9iYXNlJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBOYXZiYXIgPSAoe3RlbGVncmFtY29kZX0pID0+IHtcbiAgICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSh7dXNlcjonJ30pXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgXG4gICAgICAgIGJhc2UuZ2V0KGAvbWUvYCkudGhlbigocmVzKT0+e1xuICAgICAgICAgICAgc2V0VXNlcih7XG4gICAgICAgICAgICAgICAgdXNlcjogcmVzLmRhdGEudXNlclxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgIH0sIFtdKVxuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIHsvKiA8VG9wUGFuZWwgLz4gKi99XG4gICAgICAgICAgICB7LyogPFRvcEhlYWRlciAvPiAqL31cbiAgICAgICAgICAgIDxNZWdhTWVudSB1c2VyPXt1c2VyLnVzZXJ9Lz5cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXIiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJ1c2VFZmZlY3QiLCJUb3BQYW5lbCIsIlRvcEhlYWRlciIsIk1lZ2FNZW51IiwiYmFzZSIsInVzZVN0YXRlIiwiTmF2YmFyIiwidGVsZWdyYW1jb2RlIiwidXNlciIsInNldFVzZXIiLCJnZXQiLCJ0aGVuIiwicmVzIiwiZGF0YSIsIkZyYWdtZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Layout/Navbar.js\n"));

/***/ })

});