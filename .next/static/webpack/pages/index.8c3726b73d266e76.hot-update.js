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

/***/ "./api/base.jsx":
/*!**********************!*\
  !*** ./api/base.jsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n// import Cookies from 'universal-cookie';\n// const cookies = new Cookies();\nvar API_URL = \"https://mareew.uz/\";\nvar base = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n    baseURL: API_URL\n});\nbase.interceptors.request.use(function(config) {\n    config.headers = (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({}, config.headers), {\n        Authorization: \"Bearer \".concat(localStorage.getItem(\"access\"))\n    });\n    return config;\n}, function(error) {\n    return Promise.reject(error);\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (base);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcGkvYmFzZS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFBMEI7QUFDMUIsMENBQTBDO0FBRTFDLGlDQUFpQztBQUNqQyxJQUFNQyxPQUFPLEdBQUcsb0JBQW9CO0FBS3BDLElBQU1DLElBQUksR0FBR0YsbURBQVksQ0FBQztJQUN4QkksT0FBTyxFQUFFSCxPQUFPO0NBQ2pCLENBQUM7QUFFRkMsSUFBSSxDQUFDRyxZQUFZLENBQUNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUMzQixTQUFVQyxNQUFNLEVBQUU7SUFDaEJBLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHLHdLQUNaRCxNQUFNLENBQUNDLE9BQU87UUFDakJDLGFBQWEsRUFBRSxTQUFRLENBQWlDLE9BQS9CQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBRTtNQUMxRCxDQUFDO0lBQ0YsT0FBT0osTUFBTSxDQUFDO0FBQ2hCLENBQUMsRUFDRCxTQUFVSyxLQUFLLEVBQUU7SUFDZixPQUFPQyxPQUFPLENBQUNDLE1BQU0sQ0FBQ0YsS0FBSyxDQUFDLENBQUM7QUFDL0IsQ0FBQyxDQUNGLENBQUM7QUFFRiwrREFBZVgsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcGkvYmFzZS5qc3g/NWM3NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbi8vIGltcG9ydCBDb29raWVzIGZyb20gJ3VuaXZlcnNhbC1jb29raWUnO1xyXG5cclxuLy8gY29uc3QgY29va2llcyA9IG5ldyBDb29raWVzKCk7XHJcbmNvbnN0IEFQSV9VUkwgPSBcImh0dHBzOi8vbWFyZWV3LnV6L1wiO1xyXG5cclxuXHJcblxyXG5cclxuY29uc3QgYmFzZSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgYmFzZVVSTDogQVBJX1VSTCxcclxufSk7XHJcblxyXG5iYXNlLmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZShcclxuICBmdW5jdGlvbiAoY29uZmlnKSB7XHJcbiAgICBjb25maWcuaGVhZGVycyA9IHtcclxuICAgICAgLi4uY29uZmlnLmhlYWRlcnMsXHJcbiAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFjY2Vzc1wiKX1gXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGNvbmZpZztcclxuICB9LFxyXG4gIGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcclxuICB9XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBiYXNlIl0sIm5hbWVzIjpbImF4aW9zIiwiQVBJX1VSTCIsImJhc2UiLCJjcmVhdGUiLCJiYXNlVVJMIiwiaW50ZXJjZXB0b3JzIiwicmVxdWVzdCIsInVzZSIsImNvbmZpZyIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImVycm9yIiwiUHJvbWlzZSIsInJlamVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./api/base.jsx\n"));

/***/ })

});