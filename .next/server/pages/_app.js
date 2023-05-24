/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./api/base.jsx":
/*!**********************!*\
  !*** ./api/base.jsx ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n// import Cookies from 'universal-cookie';\n// const cookies = new Cookies();\nconst API_URL = \"https://api.mareew.uz\";\nconst base = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n    baseURL: API_URL\n});\nbase.interceptors.request.use(function(config) {\n    config.headers = {\n        ...config.headers,\n        Authorization: `Bearer ${localStorage.getItem(\"access\")}`\n    };\n    return config;\n}, function(error) {\n    return Promise.reject(error);\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (base);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcGkvYmFzZS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTBCO0FBQzFCLDBDQUEwQztBQUUxQyxpQ0FBaUM7QUFDakMsTUFBTUMsT0FBTyxHQUFHLHVCQUF1QjtBQUt2QyxNQUFNQyxJQUFJLEdBQUdGLG1EQUFZLENBQUM7SUFDeEJJLE9BQU8sRUFBRUgsT0FBTztDQUNqQixDQUFDO0FBRUZDLElBQUksQ0FBQ0csWUFBWSxDQUFDQyxPQUFPLENBQUNDLEdBQUcsQ0FDM0IsU0FBVUMsTUFBTSxFQUFFO0lBQ2hCQSxNQUFNLENBQUNDLE9BQU8sR0FBRztRQUNmLEdBQUdELE1BQU0sQ0FBQ0MsT0FBTztRQUNqQkMsYUFBYSxFQUFFLENBQUMsT0FBTyxFQUFFQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0tBQzFELENBQUM7SUFDRixPQUFPSixNQUFNLENBQUM7QUFDaEIsQ0FBQyxFQUNELFNBQVVLLEtBQUssRUFBRTtJQUNmLE9BQU9DLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDRixLQUFLLENBQUMsQ0FBQztBQUMvQixDQUFDLENBQ0YsQ0FBQztBQUVGLGlFQUFlWCxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFyZWV3Ly4vYXBpL2Jhc2UuanN4PzVjNzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG4vLyBpbXBvcnQgQ29va2llcyBmcm9tICd1bml2ZXJzYWwtY29va2llJztcclxuXHJcbi8vIGNvbnN0IGNvb2tpZXMgPSBuZXcgQ29va2llcygpO1xyXG5jb25zdCBBUElfVVJMID0gXCJodHRwczovL2FwaS5tYXJlZXcudXpcIjtcclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IGJhc2UgPSBheGlvcy5jcmVhdGUoe1xyXG4gIGJhc2VVUkw6IEFQSV9VUkwsXHJcbn0pO1xyXG5cclxuYmFzZS5pbnRlcmNlcHRvcnMucmVxdWVzdC51c2UoXHJcbiAgZnVuY3Rpb24gKGNvbmZpZykge1xyXG4gICAgY29uZmlnLmhlYWRlcnMgPSB7XHJcbiAgICAgIC4uLmNvbmZpZy5oZWFkZXJzLFxyXG4gICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhY2Nlc3NcIil9YFxyXG4gICAgfTtcclxuICAgIHJldHVybiBjb25maWc7XHJcbiAgfSxcclxuICBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XHJcbiAgfVxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYmFzZSJdLCJuYW1lcyI6WyJheGlvcyIsIkFQSV9VUkwiLCJiYXNlIiwiY3JlYXRlIiwiYmFzZVVSTCIsImludGVyY2VwdG9ycyIsInJlcXVlc3QiLCJ1c2UiLCJjb25maWciLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJlcnJvciIsIlByb21pc2UiLCJyZWplY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./api/base.jsx\n");

/***/ }),

/***/ "./components/Shared/GoTop.js":
/*!************************************!*\
  !*** ./components/Shared/GoTop.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst GoTop = (props)=>{\n    const [thePosition, setThePosition] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    const timeoutRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        document.addEventListener(\"scroll\", ()=>{\n            if (window.scrollY > 170) {\n                setThePosition(true);\n            } else {\n                setThePosition(false);\n            }\n        });\n    }, []);\n    const onScrollStep = ()=>{\n        if (window.pageYOffset === 0) {\n            clearInterval(timeoutRef.current);\n        }\n        window.scroll(0, window.pageYOffset - props.scrollStepInPx);\n    };\n    const scrollToTop = ()=>{\n        timeoutRef.current = setInterval(onScrollStep, props.delayInMs);\n    };\n    const renderGoTopIcon = ()=>{\n        if (thePosition) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: `go-top`,\n                onClick: scrollToTop,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                        className: \"fas fa-arrow-up\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\TOLIBJON\\\\PROECT\\\\shoxruxOka\\\\MarcetPLS\\\\components\\\\Shared\\\\GoTop.js\",\n                        lineNumber: 33,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                        className: \"fas fa-arrow-up\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\TOLIBJON\\\\PROECT\\\\shoxruxOka\\\\MarcetPLS\\\\components\\\\Shared\\\\GoTop.js\",\n                        lineNumber: 34,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\TOLIBJON\\\\PROECT\\\\shoxruxOka\\\\MarcetPLS\\\\components\\\\Shared\\\\GoTop.js\",\n                lineNumber: 32,\n                columnNumber: 17\n            }, undefined);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n        children: renderGoTopIcon()\n    }, void 0, false, {\n        fileName: \"E:\\\\TOLIBJON\\\\PROECT\\\\shoxruxOka\\\\MarcetPLS\\\\components\\\\Shared\\\\GoTop.js\",\n        lineNumber: 41,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GoTop);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NoYXJlZC9Hb1RvcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQTBCO0FBRTFCLE1BQU1DLEtBQUssR0FBRyxDQUFDQyxLQUFLLEdBQUs7SUFFckIsTUFBTSxDQUFDQyxXQUFXLEVBQUVDLGNBQWMsQ0FBQyxHQUFHSixxREFBYyxDQUFDLEtBQUssQ0FBQztJQUMzRCxNQUFNTSxVQUFVLEdBQUdOLG1EQUFZLENBQUMsSUFBSSxDQUFDO0lBRXJDQSxzREFBZSxDQUFDLElBQU07UUFDbEJTLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLElBQU07WUFDdEMsSUFBSUMsTUFBTSxDQUFDQyxPQUFPLEdBQUcsR0FBRyxFQUFFO2dCQUN0QlIsY0FBYyxDQUFDLElBQUksQ0FBQztZQUN4QixPQUFPO2dCQUNIQSxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDMUIsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUVOLE1BQU1TLFlBQVksR0FBRyxJQUFNO1FBQ3ZCLElBQUlGLE1BQU0sQ0FBQ0csV0FBVyxLQUFLLENBQUMsRUFBQztZQUN6QkMsYUFBYSxDQUFDVCxVQUFVLENBQUNVLE9BQU8sQ0FBQyxDQUFDO1FBQ3RDLENBQUM7UUFDREwsTUFBTSxDQUFDTSxNQUFNLENBQUMsQ0FBQyxFQUFFTixNQUFNLENBQUNHLFdBQVcsR0FBR1osS0FBSyxDQUFDZ0IsY0FBYyxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVELE1BQU1DLFdBQVcsR0FBRyxJQUFNO1FBQ3RCYixVQUFVLENBQUNVLE9BQU8sR0FBR0ksV0FBVyxDQUFDUCxZQUFZLEVBQUVYLEtBQUssQ0FBQ21CLFNBQVMsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFRCxNQUFNQyxlQUFlLEdBQUcsSUFBTTtRQUMxQixJQUFHbkIsV0FBVyxFQUFDO1lBQ1gscUJBQ0ksOERBQUNvQixLQUFHO2dCQUFDQyxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUM7Z0JBQUVDLE9BQU8sRUFBRU4sV0FBVzs7a0NBQzFDLDhEQUFDTyxHQUFDO3dCQUFDRixTQUFTLEVBQUMsaUJBQWlCOzs7OztpQ0FBSztrQ0FDbkMsOERBQUNFLEdBQUM7d0JBQUNGLFNBQVMsRUFBQyxpQkFBaUI7Ozs7O2lDQUFLOzs7Ozs7eUJBQ2pDLENBQ1Q7UUFDTCxDQUFDO0lBQ0wsQ0FBQztJQUVELHFCQUNJLDhEQUFDeEIsdURBQWM7a0JBQ1ZzQixlQUFlLEVBQUU7Ozs7O2lCQUNMLENBQ3BCO0FBQ0wsQ0FBQztBQUVELGlFQUFlckIsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFyZWV3Ly4vY29tcG9uZW50cy9TaGFyZWQvR29Ub3AuanM/ZTA0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBHb1RvcCA9IChwcm9wcykgPT4ge1xuXG4gICAgY29uc3QgW3RoZVBvc2l0aW9uLCBzZXRUaGVQb3NpdGlvbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgdGltZW91dFJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcblxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gMTcwKSB7XG4gICAgICAgICAgICAgICAgc2V0VGhlUG9zaXRpb24odHJ1ZSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0VGhlUG9zaXRpb24oZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LCBbXSlcbiAgICBcbiAgICBjb25zdCBvblNjcm9sbFN0ZXAgPSAoKSA9PiB7XG4gICAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPT09IDApe1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lb3V0UmVmLmN1cnJlbnQpO1xuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5zY3JvbGwoMCwgd2luZG93LnBhZ2VZT2Zmc2V0IC0gcHJvcHMuc2Nyb2xsU3RlcEluUHgpO1xuICAgIH1cblxuICAgIGNvbnN0IHNjcm9sbFRvVG9wID0gKCkgPT4ge1xuICAgICAgICB0aW1lb3V0UmVmLmN1cnJlbnQgPSBzZXRJbnRlcnZhbChvblNjcm9sbFN0ZXAsIHByb3BzLmRlbGF5SW5Ncyk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyR29Ub3BJY29uID0gKCkgPT4ge1xuICAgICAgICBpZih0aGVQb3NpdGlvbil7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZ28tdG9wYH0gb25DbGljaz17c2Nyb2xsVG9Ub3B9PlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYXJyb3ctdXBcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1hcnJvdy11cFwiPjwvaT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIHtyZW5kZXJHb1RvcEljb24oKX1cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEdvVG9wOyJdLCJuYW1lcyI6WyJSZWFjdCIsIkdvVG9wIiwicHJvcHMiLCJ0aGVQb3NpdGlvbiIsInNldFRoZVBvc2l0aW9uIiwidXNlU3RhdGUiLCJ0aW1lb3V0UmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwid2luZG93Iiwic2Nyb2xsWSIsIm9uU2Nyb2xsU3RlcCIsInBhZ2VZT2Zmc2V0IiwiY2xlYXJJbnRlcnZhbCIsImN1cnJlbnQiLCJzY3JvbGwiLCJzY3JvbGxTdGVwSW5QeCIsInNjcm9sbFRvVG9wIiwic2V0SW50ZXJ2YWwiLCJkZWxheUluTXMiLCJyZW5kZXJHb1RvcEljb24iLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiaSIsIkZyYWdtZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Shared/GoTop.js\n");

/***/ }),

/***/ "./components/_App/Layout.js":
/*!***********************************!*\
  !*** ./components/_App/Layout.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Shared_GoTop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Shared/GoTop */ \"./components/Shared/GoTop.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-tooltip */ \"react-tooltip\");\n/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_tooltip__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nconst Layout = ({ children  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_tooltip__WEBPACK_IMPORTED_MODULE_5___default()), {}, void 0, false, {\n                fileName: \"E:\\\\TOLIBJON\\\\PROECT\\\\shoxruxOka\\\\MarcetPLS\\\\components\\\\_App\\\\Layout.js\",\n                lineNumber: 10,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Mareew\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\TOLIBJON\\\\PROECT\\\\shoxruxOka\\\\MarcetPLS\\\\components\\\\_App\\\\Layout.js\",\n                        lineNumber: 12,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"O'zbekistondagi birinchi raqamli internet do'kon\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\TOLIBJON\\\\PROECT\\\\shoxruxOka\\\\MarcetPLS\\\\components\\\\_App\\\\Layout.js\",\n                        lineNumber: 13,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"og:title\",\n                        property: \"og:title\",\n                        content: \"Mareew \"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\TOLIBJON\\\\PROECT\\\\shoxruxOka\\\\MarcetPLS\\\\components\\\\_App\\\\Layout.js\",\n                        lineNumber: 14,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"twitter:card\",\n                        content: \"Mareew\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\TOLIBJON\\\\PROECT\\\\shoxruxOka\\\\MarcetPLS\\\\components\\\\_App\\\\Layout.js\",\n                        lineNumber: 15,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"canonical\",\n                        href: \"../../images/logo.png\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\TOLIBJON\\\\PROECT\\\\shoxruxOka\\\\MarcetPLS\\\\components\\\\_App\\\\Layout.js\",\n                        lineNumber: 16,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        type: \"image/png\",\n                        href: \"../../images/logo.png\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\TOLIBJON\\\\PROECT\\\\shoxruxOka\\\\MarcetPLS\\\\components\\\\_App\\\\Layout.js\",\n                        lineNumber: 17,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:image\",\n                        content: \"../../images/logo.png\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\TOLIBJON\\\\PROECT\\\\shoxruxOka\\\\MarcetPLS\\\\components\\\\_App\\\\Layout.js\",\n                        lineNumber: 18,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                        src: \"https://telegram.org/js/telegram-web-app.js\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\TOLIBJON\\\\PROECT\\\\shoxruxOka\\\\MarcetPLS\\\\components\\\\_App\\\\Layout.js\",\n                        lineNumber: 19,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                        src: \"https://unpkg.com/feather-icons\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\TOLIBJON\\\\PROECT\\\\shoxruxOka\\\\MarcetPLS\\\\components\\\\_App\\\\Layout.js\",\n                        lineNumber: 20,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                        src: \"https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\TOLIBJON\\\\PROECT\\\\shoxruxOka\\\\MarcetPLS\\\\components\\\\_App\\\\Layout.js\",\n                        lineNumber: 21,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\TOLIBJON\\\\PROECT\\\\shoxruxOka\\\\MarcetPLS\\\\components\\\\_App\\\\Layout.js\",\n                lineNumber: 11,\n                columnNumber: 13\n            }, undefined),\n            children,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_4__.ToastContainer, {\n                transition: react_toastify__WEBPACK_IMPORTED_MODULE_4__.Slide\n            }, void 0, false, {\n                fileName: \"E:\\\\TOLIBJON\\\\PROECT\\\\shoxruxOka\\\\MarcetPLS\\\\components\\\\_App\\\\Layout.js\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Shared_GoTop__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                scrollStepInPx: \"100\",\n                delayInMs: \"10.50\"\n            }, void 0, false, {\n                fileName: \"E:\\\\TOLIBJON\\\\PROECT\\\\shoxruxOka\\\\MarcetPLS\\\\components\\\\_App\\\\Layout.js\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\TOLIBJON\\\\PROECT\\\\shoxruxOka\\\\MarcetPLS\\\\components\\\\_App\\\\Layout.js\",\n        lineNumber: 9,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL19BcHAvTGF5b3V0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQTBCO0FBQ0c7QUFDTztBQUNtQjtBQUNmO0FBRXhDLE1BQU1NLE1BQU0sR0FBRyxDQUFDLEVBQUVDLFFBQVEsR0FBRSxHQUFLO0lBQzdCLHFCQUNJLDhEQUFDUCx1REFBYzs7MEJBQ1gsOERBQUNLLHNEQUFZOzs7O3lCQUFHOzBCQUNoQiw4REFBQ0osa0RBQUk7O2tDQUNELDhEQUFDUSxPQUFLO2tDQUFDLFFBQU07Ozs7O2lDQUFRO2tDQUNyQiw4REFBQ0MsTUFBSTt3QkFBQ0MsSUFBSSxFQUFDLGFBQWE7d0JBQUNDLE9BQU8sRUFBQyxrREFBa0Q7Ozs7O2lDQUFHO2tDQUN0Riw4REFBQ0YsTUFBSTt3QkFBQ0MsSUFBSSxFQUFDLFVBQVU7d0JBQUNFLFFBQVEsRUFBQyxVQUFVO3dCQUFDRCxPQUFPLEVBQUMsU0FBUzs7Ozs7aUNBQVE7a0NBQ25FLDhEQUFDRixNQUFJO3dCQUFDQyxJQUFJLEVBQUMsY0FBYzt3QkFBQ0MsT0FBTyxFQUFDLFFBQVE7Ozs7O2lDQUFRO2tDQUNsRCw4REFBQ0UsTUFBSTt3QkFBQ0MsR0FBRyxFQUFDLFdBQVc7d0JBQUNDLElBQUksRUFBQyx1QkFBdUI7Ozs7O2lDQUFRO2tDQUMxRCw4REFBQ0YsTUFBSTt3QkFBQ0MsR0FBRyxFQUFDLE1BQU07d0JBQUNFLElBQUksRUFBQyxXQUFXO3dCQUFDRCxJQUFJLEVBQUMsdUJBQXVCOzs7OztpQ0FBUTtrQ0FDdEUsOERBQUNOLE1BQUk7d0JBQUNHLFFBQVEsRUFBQyxVQUFVO3dCQUFDRCxPQUFPLEVBQUMsdUJBQXVCOzs7OztpQ0FBRztrQ0FDNUQsOERBQUNNLFFBQU07d0JBQUNDLEdBQUcsRUFBQyw2Q0FBNkM7Ozs7O2lDQUFVO2tDQUNuRSw4REFBQ0QsUUFBTTt3QkFBQ0MsR0FBRyxFQUFDLGlDQUFpQzs7Ozs7aUNBQVU7a0NBQ3ZELDhEQUFDRCxRQUFNO3dCQUFDQyxHQUFHLEVBQUMsZ0VBQWdFOzs7OztpQ0FBVTs7Ozs7O3lCQUluRjtZQUNOWixRQUFROzBCQUNULDhEQUFDSiwwREFBYztnQkFBQ2lCLFVBQVUsRUFBRWhCLGlEQUFLOzs7Ozt5QkFBSTswQkFDckMsOERBQUNGLHFEQUFLO2dCQUFDbUIsY0FBYyxFQUFDLEtBQUs7Z0JBQUNDLFNBQVMsRUFBQyxPQUFPOzs7Ozt5QkFBRzs7Ozs7O2lCQUNuQyxDQUNuQjtBQUNOLENBQUM7QUFDRCxpRUFBZWhCLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21hcmVldy8uL2NvbXBvbmVudHMvX0FwcC9MYXlvdXQuanM/MGY4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBHb1RvcCBmcm9tICcuLi9TaGFyZWQvR29Ub3AnO1xuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsIFNsaWRlIH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuaW1wb3J0IFJlYWN0VG9vbHRpcCBmcm9tICdyZWFjdC10b29sdGlwJ1xuXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgPFJlYWN0VG9vbHRpcCAvPlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPk1hcmVldzwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIk8nemJla2lzdG9uZGFnaSBiaXJpbmNoaSByYXFhbWxpIGludGVybmV0IGRvJ2tvblwiIC8+XG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cIm9nOnRpdGxlXCIgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9XCJNYXJlZXcgXCI+PC9tZXRhPlxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PVwiTWFyZWV3XCI+PC9tZXRhPlxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImNhbm9uaWNhbFwiIGhyZWY9XCIuLi8uLi9pbWFnZXMvbG9nby5wbmdcIj48L2xpbms+XG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBocmVmPVwiLi4vLi4vaW1hZ2VzL2xvZ28ucG5nXCI+PC9saW5rPlxuICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PVwiLi4vLi4vaW1hZ2VzL2xvZ28ucG5nXCIgLz5cbiAgICAgICAgICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vdGVsZWdyYW0ub3JnL2pzL3RlbGVncmFtLXdlYi1hcHAuanNcIj48L3NjcmlwdD5cbiAgICAgICAgICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vdW5wa2cuY29tL2ZlYXRoZXItaWNvbnNcIj48L3NjcmlwdD5cbiAgICAgICAgICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vZmVhdGhlci1pY29ucy9kaXN0L2ZlYXRoZXIubWluLmpzXCI+PC9zY3JpcHQ+XG5cbiAgICAgICAgICAgICAgICB7LyogaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZGV2LWVtcHR5L2ltYWdlL3VwbG9hZC92MTU5MDA3NjMwOS9wcHV5bWZ1Y3I0anVicXZocWFxdC5qcGcgKi99XG4gICAgICAgICAgICAgICAgey8qIGh0dHBzOi8vbm92aW5lLXJlYWN0LmVudnl0aGVtZS5jb20vICovfVxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgPFRvYXN0Q29udGFpbmVyIHRyYW5zaXRpb249e1NsaWRlfSAvPlxuICAgICAgICAgICAgPEdvVG9wIHNjcm9sbFN0ZXBJblB4PVwiMTAwXCIgZGVsYXlJbk1zPVwiMTAuNTBcIiAvPlxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG59XG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7Il0sIm5hbWVzIjpbIlJlYWN0IiwiSGVhZCIsIkdvVG9wIiwiVG9hc3RDb250YWluZXIiLCJTbGlkZSIsIlJlYWN0VG9vbHRpcCIsIkxheW91dCIsImNoaWxkcmVuIiwiRnJhZ21lbnQiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsInByb3BlcnR5IiwibGluayIsInJlbCIsImhyZWYiLCJ0eXBlIiwic2NyaXB0Iiwic3JjIiwidHJhbnNpdGlvbiIsInNjcm9sbFN0ZXBJblB4IiwiZGVsYXlJbk1zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/_App/Layout.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_assets_styles_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/assets/styles/bootstrap.min.css */ \"./public/assets/styles/bootstrap.min.css\");\n/* harmony import */ var _public_assets_styles_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_assets_styles_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_assets_styles_fontawesome_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/assets/styles/fontawesome.min.css */ \"./public/assets/styles/fontawesome.min.css\");\n/* harmony import */ var _public_assets_styles_fontawesome_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_assets_styles_fontawesome_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_assets_styles_animate_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/assets/styles/animate.min.css */ \"./public/assets/styles/animate.min.css\");\n/* harmony import */ var _public_assets_styles_animate_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_assets_styles_animate_min_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _public_assets_styles_slick_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/assets/styles/slick.css */ \"./public/assets/styles/slick.css\");\n/* harmony import */ var _public_assets_styles_slick_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_assets_styles_slick_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _public_assets_styles_slick_theme_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/assets/styles/slick-theme.css */ \"./public/assets/styles/slick-theme.css\");\n/* harmony import */ var _public_assets_styles_slick_theme_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_assets_styles_slick_theme_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-accessible-accordion/dist/fancy-example.css */ \"./node_modules/react-accessible-accordion/dist/fancy-example.css\");\n/* harmony import */ var react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_image_lightbox_style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-image-lightbox/style.css */ \"./node_modules/react-image-lightbox/style.css\");\n/* harmony import */ var react_image_lightbox_style_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_image_lightbox_style_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _public_assets_styles_style_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../public/assets/styles/style.css */ \"./public/assets/styles/style.css\");\n/* harmony import */ var _public_assets_styles_style_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_assets_styles_style_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _public_assets_styles_responsive_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../public/assets/styles/responsive.css */ \"./public/assets/styles/responsive.css\");\n/* harmony import */ var _public_assets_styles_responsive_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_assets_styles_responsive_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _public_assets_styles_imageAnimate_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../public/assets/styles/imageAnimate.css */ \"./public/assets/styles/imageAnimate.css\");\n/* harmony import */ var _public_assets_styles_imageAnimate_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_public_assets_styles_imageAnimate_css__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _public_assets_styles_testpage_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../public/assets/styles/testpage.css */ \"./public/assets/styles/testpage.css\");\n/* harmony import */ var _public_assets_styles_testpage_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_public_assets_styles_testpage_css__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! swiper/css */ \"./node_modules/swiper/swiper.min.css\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var swiper_css_free_mode__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! swiper/css/free-mode */ \"./node_modules/swiper/modules/free-mode/free-mode.min.css\");\n/* harmony import */ var swiper_css_free_mode__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(swiper_css_free_mode__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! swiper/css/navigation */ \"./node_modules/swiper/modules/navigation/navigation.min.css\");\n/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(swiper_css_navigation__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! swiper/css/pagination */ \"./node_modules/swiper/modules/pagination/pagination.min.css\");\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var swiper_css_thumbs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! swiper/css/thumbs */ \"./node_modules/swiper/modules/thumbs/thumbs.min.css\");\n/* harmony import */ var swiper_css_thumbs__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(swiper_css_thumbs__WEBPACK_IMPORTED_MODULE_17__);\n/* harmony import */ var _components_App_Layout__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/_App/Layout */ \"./components/_App/Layout.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_19__);\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../redux/store */ \"./redux/store.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n// import withRedux from 'next-redux-wrapper';\n\nconst MyApp = ({ Component , pageProps  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_App_Layout__WEBPACK_IMPORTED_MODULE_18__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_19__.Provider, {\n            store: _redux_store__WEBPACK_IMPORTED_MODULE_20__.store,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"E:\\\\TOLIBJON\\\\PROECT\\\\shoxruxOka\\\\MarcetPLS\\\\pages\\\\_app.js\",\n                lineNumber: 32,\n                columnNumber: 21\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"E:\\\\TOLIBJON\\\\PROECT\\\\shoxruxOka\\\\MarcetPLS\\\\pages\\\\_app.js\",\n            lineNumber: 30,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"E:\\\\TOLIBJON\\\\PROECT\\\\shoxruxOka\\\\MarcetPLS\\\\pages\\\\_app.js\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBbUQ7QUFDRTtBQUNKO0FBQ047QUFDTTtBQUNGO0FBQ1k7QUFDbkI7QUFDRztBQUNLO0FBQ0U7QUFDTDtBQUV6QjtBQUNVO0FBQ0M7QUFDQTtBQUNKO0FBRW9CO0FBQ1I7QUFDdkMsOENBQThDO0FBQ1A7QUFHdkMsTUFBTUcsS0FBSyxHQUFHLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQUUsR0FBSztJQUV4QyxxQkFDSSw4REFBQ0wsK0RBQU07a0JBQ0gsNEVBQUNDLGtEQUFRO1lBQUNDLEtBQUssRUFBRUEsZ0RBQUs7c0JBRWQsNEVBQUNFLFNBQVM7Z0JBQUUsR0FBR0MsU0FBUzs7Ozs7eUJBQUk7Ozs7O3FCQUV6Qjs7Ozs7aUJBQ04sQ0FDWDtBQUNOLENBQUM7QUFFRCxpRUFBZUYsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL21hcmVldy8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3B1YmxpYy9hc3NldHMvc3R5bGVzL2Jvb3RzdHJhcC5taW4uY3NzJztcbmltcG9ydCAnLi4vcHVibGljL2Fzc2V0cy9zdHlsZXMvZm9udGF3ZXNvbWUubWluLmNzcyc7XG5pbXBvcnQgJy4uL3B1YmxpYy9hc3NldHMvc3R5bGVzL2FuaW1hdGUubWluLmNzcyc7XG5pbXBvcnQgJy4uL3B1YmxpYy9hc3NldHMvc3R5bGVzL3NsaWNrLmNzcyc7XG5pbXBvcnQgJy4uL3B1YmxpYy9hc3NldHMvc3R5bGVzL3NsaWNrLXRoZW1lLmNzcyc7XG5pbXBvcnQgJ3JlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3MnO1xuaW1wb3J0ICdyZWFjdC1hY2Nlc3NpYmxlLWFjY29yZGlvbi9kaXN0L2ZhbmN5LWV4YW1wbGUuY3NzJztcbmltcG9ydCAncmVhY3QtaW1hZ2UtbGlnaHRib3gvc3R5bGUuY3NzJztcbmltcG9ydCAnLi4vcHVibGljL2Fzc2V0cy9zdHlsZXMvc3R5bGUuY3NzJztcbmltcG9ydCAnLi4vcHVibGljL2Fzc2V0cy9zdHlsZXMvcmVzcG9uc2l2ZS5jc3MnO1xuaW1wb3J0ICcuLi9wdWJsaWMvYXNzZXRzL3N0eWxlcy9pbWFnZUFuaW1hdGUuY3NzJztcbmltcG9ydCAnLi4vcHVibGljL2Fzc2V0cy9zdHlsZXMvdGVzdHBhZ2UuY3NzJ1xuXG5pbXBvcnQgXCJzd2lwZXIvY3NzXCI7XG5pbXBvcnQgXCJzd2lwZXIvY3NzL2ZyZWUtbW9kZVwiO1xuaW1wb3J0IFwic3dpcGVyL2Nzcy9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgXCJzd2lwZXIvY3NzL3BhZ2luYXRpb25cIjtcbmltcG9ydCBcInN3aXBlci9jc3MvdGh1bWJzXCI7XG5cbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9fQXBwL0xheW91dCc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4Jztcbi8vIGltcG9ydCB3aXRoUmVkdXggZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSAnLi4vcmVkdXgvc3RvcmUnO1xuXG5cbmNvbnN0IE15QXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuXG4gICAgICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cblxuICAgICAgICAgICAgPC9Qcm92aWRlcj5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHAiXSwibmFtZXMiOlsiTGF5b3V0IiwiUHJvdmlkZXIiLCJzdG9yZSIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./redux/cardProduct/card.js":
/*!***********************************!*\
  !*** ./redux/cardProduct/card.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addcard\": () => (/* binding */ addcard),\n/* harmony export */   \"customer\": () => (/* binding */ customer),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"get_card\": () => (/* binding */ get_card),\n/* harmony export */   \"getcard\": () => (/* binding */ getcard),\n/* harmony export */   \"post_card\": () => (/* binding */ post_card)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/base */ \"./api/base.jsx\");\n\n\nconst post_card = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"productSlice/post_product\", async function(data, { rejectWithValue , dispatch  }) {\n    try {\n        let res = await _api_base__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(`/customer/cart`, {\n            \"product_id\": data.id,\n            \"quantity\": 1\n        });\n        if (res.status == 200 || res.status === 201) {\n            return dispatch(addcard(res));\n        }\n    } catch (error) {\n        return rejectWithValue(error);\n    }\n});\nconst get_card = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"productSlice/get_product\", async function(url, { rejectWithValue , dispatch  }) {\n    try {\n        let res = await _api_base__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(url);\n        if (res.status == 200 || res.status === 201) {\n            console.log(res);\n            return dispatch(getcard(res));\n        }\n    } catch (error) {\n        return rejectWithValue(error);\n    }\n});\nconst customer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"productSlice\",\n    initialState: {\n        postcardProduct: {\n            status: null\n        },\n        getcardProduct: {\n            cards: [],\n            status: null,\n            error: null\n        }\n    },\n    reducers: {\n        addcard: (state, action)=>{\n            state.postcardProduct.status = action.payload.status;\n        },\n        getcard: (state, action)=>{\n            state.getcardProduct.cards = action.payload.data.carts;\n            state.getcardProduct.status = action.payload.status;\n            state.getcardProduct.error = action.payload.error;\n        }\n    },\n    extraReducers: {\n        [post_card.pending]: (state)=>{\n            state.product.status = \"pending\";\n            state.product.error = null;\n        }\n    }\n});\nconst { addcard , getcard  } = customer.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (customer.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQUUsR0FBR0MsUUFBUSxDQUFDYyxPQUFPO0FBRW5ELGlFQUFlZCxRQUFRLENBQUNlLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXJlZXcvLi9yZWR1eC9jYXJkUHJvZHVjdC9jYXJkLmpzPzc1OWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQXN5bmNUaHVuaywgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiXHJcbmltcG9ydCBiYXNlIGZyb20gXCIuLi8uLi9hcGkvYmFzZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHBvc3RfY2FyZCA9IGNyZWF0ZUFzeW5jVGh1bmsoXHJcbiAgICBcInByb2R1Y3RTbGljZS9wb3N0X3Byb2R1Y3RcIixcclxuICAgIGFzeW5jIGZ1bmN0aW9uIChkYXRhLCB7IHJlamVjdFdpdGhWYWx1ZSwgZGlzcGF0Y2ggfSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBiYXNlLnBvc3QoYC9jdXN0b21lci9jYXJ0YCx7XHJcbiAgICAgICAgICAgICAgICBcInByb2R1Y3RfaWRcIjogZGF0YS5pZCxcclxuICAgICAgICAgICAgICAgIFwicXVhbnRpdHlcIjogMVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT0gMjAwIHx8IHJlcy5zdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGlzcGF0Y2goYWRkY2FyZChyZXMpKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZWplY3RXaXRoVmFsdWUoZXJyb3IpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4pXHJcbmV4cG9ydCBjb25zdCBnZXRfY2FyZCA9IGNyZWF0ZUFzeW5jVGh1bmsoXHJcbiAgICBcInByb2R1Y3RTbGljZS9nZXRfcHJvZHVjdFwiLFxyXG4gICAgYXN5bmMgZnVuY3Rpb24gKHVybCwgeyByZWplY3RXaXRoVmFsdWUsIGRpc3BhdGNoIH0pIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgYmFzZS5nZXQodXJsKVxyXG5cclxuICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT0gMjAwIHx8IHJlcy5zdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkaXNwYXRjaChnZXRjYXJkKHJlcykpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlamVjdFdpdGhWYWx1ZShlcnJvcilcclxuICAgICAgICB9XHJcbiAgICB9XHJcbilcclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGN1c3RvbWVyID0gY3JlYXRlU2xpY2Uoe1xyXG4gICAgbmFtZTogXCJwcm9kdWN0U2xpY2VcIixcclxuICAgIGluaXRpYWxTdGF0ZToge1xyXG4gICAgICAgIHBvc3RjYXJkUHJvZHVjdDp7XHJcbiAgICAgICAgICAgIHN0YXR1czogbnVsbCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldGNhcmRQcm9kdWN0OntcclxuICAgICAgICAgICAgY2FyZHM6W10sXHJcbiAgICAgICAgICAgIHN0YXR1czogbnVsbCxcclxuICAgICAgICAgICAgZXJyb3I6bnVsbFxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG4gICAgcmVkdWNlcnM6IHtcclxuICAgICAgICBhZGRjYXJkOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZS5wb3N0Y2FyZFByb2R1Y3Quc3RhdHVzID0gYWN0aW9uLnBheWxvYWQuc3RhdHVzXHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRjYXJkOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZS5nZXRjYXJkUHJvZHVjdC5jYXJkcyA9IGFjdGlvbi5wYXlsb2FkLmRhdGEuY2FydHNcclxuICAgICAgICAgICAgc3RhdGUuZ2V0Y2FyZFByb2R1Y3Quc3RhdHVzID0gYWN0aW9uLnBheWxvYWQuc3RhdHVzXHJcbiAgICAgICAgICAgIHN0YXRlLmdldGNhcmRQcm9kdWN0LmVycm9yID0gYWN0aW9uLnBheWxvYWQuZXJyb3JcclxuICAgICAgICB9LFxyXG5cclxuICAgIH0sXHJcbiAgICBleHRyYVJlZHVjZXJzOiB7XHJcbiAgICAgICAgW3Bvc3RfY2FyZC5wZW5kaW5nXTogKHN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLnByb2R1Y3Quc3RhdHVzID0gJ3BlbmRpbmcnXHJcbiAgICAgICAgICAgIHN0YXRlLnByb2R1Y3QuZXJyb3IgPSBudWxsXHJcbiAgICAgICAgfSxcclxuICAgIH1cclxufSlcclxuXHJcblxyXG5leHBvcnQgY29uc3QgeyBhZGRjYXJkLGdldGNhcmQgfSA9IGN1c3RvbWVyLmFjdGlvbnNcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGN1c3RvbWVyLnJlZHVjZXIiXSwibmFtZXMiOlsiY3JlYXRlQXN5bmNUaHVuayIsImNyZWF0ZVNsaWNlIiwiYmFzZSIsInBvc3RfY2FyZCIsImRhdGEiLCJyZWplY3RXaXRoVmFsdWUiLCJkaXNwYXRjaCIsInJlcyIsInBvc3QiLCJpZCIsInN0YXR1cyIsImFkZGNhcmQiLCJlcnJvciIsImdldF9jYXJkIiwidXJsIiwiZ2V0IiwiY29uc29sZSIsImxvZyIsImdldGNhcmQiLCJjdXN0b21lciIsIm5hbWUiLCJpbml0aWFsU3RhdGUiLCJwb3N0Y2FyZFByb2R1Y3QiLCJnZXRjYXJkUHJvZHVjdCIsImNhcmRzIiwicmVkdWNlcnMiLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJjYXJ0cyIsImV4dHJhUmVkdWNlcnMiLCJwZW5kaW5nIiwicHJvZHVjdCIsImFjdGlvbnMiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./redux/cardProduct/card.js\n");

/***/ }),

/***/ "./redux/store.js":
/*!************************!*\
  !*** ./redux/store.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"store\": () => (/* binding */ store)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _cardProduct_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cardProduct/card */ \"./redux/cardProduct/card.js\");\n\n\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: {\n        cards: _cardProduct_card__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    },\n    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({\n            serializableCheck: false\n        })\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9zdG9yZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQStDO0FBQ1Q7QUFFL0IsTUFBTUUsS0FBSyxHQUFHRixnRUFBYyxDQUFDO0lBQ2hDRyxPQUFPLEVBQUM7UUFDSkYsS0FBSztLQUVSO0lBQ0RHLFVBQVUsRUFBRSxDQUFDQyxvQkFBb0IsR0FDakNBLG9CQUFvQixDQUFDO1lBQ25CQyxpQkFBaUIsRUFBRSxLQUFLO1NBQ3pCLENBQUM7Q0FDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFyZWV3Ly4vcmVkdXgvc3RvcmUuanM/MzU0OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NvbmZpZ3VyZVN0b3JlfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiXHJcbmltcG9ydCBjYXJkcyBmcm9tIFwiLi9jYXJkUHJvZHVjdC9jYXJkXCJcclxuXHJcbmV4cG9ydCBjb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcclxuICAgIHJlZHVjZXI6e1xyXG4gICAgICAgIGNhcmRzXHJcblxyXG4gICAgfSxcclxuICAgIG1pZGRsZXdhcmU6IChnZXREZWZhdWx0TWlkZGxld2FyZSkgPT5cclxuICAgIGdldERlZmF1bHRNaWRkbGV3YXJlKHtcclxuICAgICAgc2VyaWFsaXphYmxlQ2hlY2s6IGZhbHNlXHJcbiAgICB9KSxcclxufSkiXSwibmFtZXMiOlsiY29uZmlndXJlU3RvcmUiLCJjYXJkcyIsInN0b3JlIiwicmVkdWNlciIsIm1pZGRsZXdhcmUiLCJnZXREZWZhdWx0TWlkZGxld2FyZSIsInNlcmlhbGl6YWJsZUNoZWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./redux/store.js\n");

/***/ }),

/***/ "./node_modules/react-accessible-accordion/dist/fancy-example.css":
/*!************************************************************************!*\
  !*** ./node_modules/react-accessible-accordion/dist/fancy-example.css ***!
  \************************************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/react-image-lightbox/style.css":
/*!*****************************************************!*\
  !*** ./node_modules/react-image-lightbox/style.css ***!
  \*****************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/react-toastify/dist/ReactToastify.css":
/*!************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.css ***!
  \************************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/swiper/modules/free-mode/free-mode.min.css":
/*!*****************************************************************!*\
  !*** ./node_modules/swiper/modules/free-mode/free-mode.min.css ***!
  \*****************************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/swiper/modules/navigation/navigation.min.css":
/*!*******************************************************************!*\
  !*** ./node_modules/swiper/modules/navigation/navigation.min.css ***!
  \*******************************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/swiper/modules/pagination/pagination.min.css":
/*!*******************************************************************!*\
  !*** ./node_modules/swiper/modules/pagination/pagination.min.css ***!
  \*******************************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/swiper/modules/thumbs/thumbs.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/swiper/modules/thumbs/thumbs.min.css ***!
  \***********************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/swiper/swiper.min.css":
/*!********************************************!*\
  !*** ./node_modules/swiper/swiper.min.css ***!
  \********************************************/
/***/ (() => {



/***/ }),

/***/ "./public/assets/styles/animate.min.css":
/*!**********************************************!*\
  !*** ./public/assets/styles/animate.min.css ***!
  \**********************************************/
/***/ (() => {



/***/ }),

/***/ "./public/assets/styles/bootstrap.min.css":
/*!************************************************!*\
  !*** ./public/assets/styles/bootstrap.min.css ***!
  \************************************************/
/***/ (() => {



/***/ }),

/***/ "./public/assets/styles/fontawesome.min.css":
/*!**************************************************!*\
  !*** ./public/assets/styles/fontawesome.min.css ***!
  \**************************************************/
/***/ (() => {



/***/ }),

/***/ "./public/assets/styles/imageAnimate.css":
/*!***********************************************!*\
  !*** ./public/assets/styles/imageAnimate.css ***!
  \***********************************************/
/***/ (() => {



/***/ }),

/***/ "./public/assets/styles/responsive.css":
/*!*********************************************!*\
  !*** ./public/assets/styles/responsive.css ***!
  \*********************************************/
/***/ (() => {



/***/ }),

/***/ "./public/assets/styles/slick-theme.css":
/*!**********************************************!*\
  !*** ./public/assets/styles/slick-theme.css ***!
  \**********************************************/
/***/ (() => {



/***/ }),

/***/ "./public/assets/styles/slick.css":
/*!****************************************!*\
  !*** ./public/assets/styles/slick.css ***!
  \****************************************/
/***/ (() => {



/***/ }),

/***/ "./public/assets/styles/style.css":
/*!****************************************!*\
  !*** ./public/assets/styles/style.css ***!
  \****************************************/
/***/ (() => {



/***/ }),

/***/ "./public/assets/styles/testpage.css":
/*!*******************************************!*\
  !*** ./public/assets/styles/testpage.css ***!
  \*******************************************/
/***/ (() => {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-toastify");

/***/ }),

/***/ "react-tooltip":
/*!********************************!*\
  !*** external "react-tooltip" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-tooltip");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();