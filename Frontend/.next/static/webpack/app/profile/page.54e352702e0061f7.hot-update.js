"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/profile/page",{

/***/ "(app-pages-browser)/./app/profile/page.tsx":
/*!******************************!*\
  !*** ./app/profile/page.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Profile; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_auth_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/(auth)/AuthContext */ \"(app-pages-browser)/./app/(auth)/AuthContext.tsx\");\n/* harmony import */ var _profile_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.module.css */ \"(app-pages-browser)/./app/profile/profile.module.css\");\n/* harmony import */ var _profile_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_profile_module_css__WEBPACK_IMPORTED_MODULE_3__);\n// Profile page\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n // Import the CSS module\nfunction Profile() {\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        document.title = \"Profile - HoloLearn\"; // Set the title dynamically\n    }, []);\n    const { user, logout } = (0,_app_auth_AuthContext__WEBPACK_IMPORTED_MODULE_2__.useAuth)();\n    console.log(user);\n    if (!user) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/devkalavadiya/Desktop/Capstone/HoloLearn/Frontend/app/profile/page.tsx\",\n            lineNumber: 18,\n            columnNumber: 16\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_profile_module_css__WEBPACK_IMPORTED_MODULE_3___default().profileContainer),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_profile_module_css__WEBPACK_IMPORTED_MODULE_3___default().profileTitle),\n                children: \"Profile\"\n            }, void 0, false, {\n                fileName: \"/Users/devkalavadiya/Desktop/Capstone/HoloLearn/Frontend/app/profile/page.tsx\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_profile_module_css__WEBPACK_IMPORTED_MODULE_3___default().profileDetail),\n                children: [\n                    \"Welcome, \",\n                    (user === null || user === void 0 ? void 0 : user.firstname) || (user === null || user === void 0 ? void 0 : user.name) || \"User\",\n                    \"!\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/devkalavadiya/Desktop/Capstone/HoloLearn/Frontend/app/profile/page.tsx\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_profile_module_css__WEBPACK_IMPORTED_MODULE_3___default().profileDetail),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                        children: \"Name:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/devkalavadiya/Desktop/Capstone/HoloLearn/Frontend/app/profile/page.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 49\n                    }, this),\n                    \" \",\n                    user === null || user === void 0 ? void 0 : user.firstname,\n                    \" \",\n                    user === null || user === void 0 ? void 0 : user.lastname\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/devkalavadiya/Desktop/Capstone/HoloLearn/Frontend/app/profile/page.tsx\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_profile_module_css__WEBPACK_IMPORTED_MODULE_3___default().profileDetail),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                        children: \"Email:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/devkalavadiya/Desktop/Capstone/HoloLearn/Frontend/app/profile/page.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 49\n                    }, this),\n                    \" \",\n                    user === null || user === void 0 ? void 0 : user.email\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/devkalavadiya/Desktop/Capstone/HoloLearn/Frontend/app/profile/page.tsx\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/devkalavadiya/Desktop/Capstone/HoloLearn/Frontend/app/profile/page.tsx\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, this);\n}\n_s(Profile, \"Ugme7ChJ90gUg4xHyambxhgYyo0=\", false, function() {\n    return [\n        _app_auth_AuthContext__WEBPACK_IMPORTED_MODULE_2__.useAuth\n    ];\n});\n_c = Profile;\nvar _c;\n$RefreshReg$(_c, \"Profile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wcm9maWxlL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQSxlQUFlOzs7QUFFb0M7QUFDQTtBQUNULENBQUMsd0JBQXdCO0FBRXBELFNBQVNJOztJQUNwQkgsZ0RBQVNBLENBQUM7UUFDTkksU0FBU0MsS0FBSyxHQUFHLHVCQUF1Qiw0QkFBNEI7SUFDeEUsR0FBRyxFQUFFO0lBRUwsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLE1BQU0sRUFBRSxHQUFHTiw4REFBT0E7SUFFaENPLFFBQVFDLEdBQUcsQ0FBQ0g7SUFFWixJQUFJLENBQUNBLE1BQU07UUFDUCxxQkFBTyw4REFBQ0k7c0JBQUk7Ozs7OztJQUNoQjtJQUVBLHFCQUNJLDhEQUFDQTtRQUFJQyxXQUFXVCw2RUFBdUI7OzBCQUNuQyw4REFBQ1c7Z0JBQUdGLFdBQVdULHlFQUFtQjswQkFBRTs7Ozs7OzBCQUNwQyw4REFBQ2E7Z0JBQUVKLFdBQVdULDBFQUFvQjs7b0JBQUU7b0JBQVVJLENBQUFBLGlCQUFBQSwyQkFBQUEsS0FBTVcsU0FBUyxNQUFJWCxpQkFBQUEsMkJBQUFBLEtBQU1ZLElBQUksS0FBSTtvQkFBTzs7Ozs7OzswQkFDdEYsOERBQUNIO2dCQUFFSixXQUFXVCwwRUFBb0I7O2tDQUFFLDhEQUFDaUI7a0NBQU87Ozs7OztvQkFBYztvQkFBRWIsaUJBQUFBLDJCQUFBQSxLQUFNVyxTQUFTO29CQUFDO29CQUFFWCxpQkFBQUEsMkJBQUFBLEtBQU1jLFFBQVE7Ozs7Ozs7MEJBRTVGLDhEQUFDTDtnQkFBRUosV0FBV1QsMEVBQW9COztrQ0FBRSw4REFBQ2lCO2tDQUFPOzs7Ozs7b0JBQWU7b0JBQUViLGlCQUFBQSwyQkFBQUEsS0FBTWUsS0FBSzs7Ozs7Ozs7Ozs7OztBQUdwRjtHQXRCd0JsQjs7UUFLS0YsMERBQU9BOzs7S0FMWkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3Byb2ZpbGUvcGFnZS50c3g/MWY4MiJdLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIFByb2ZpbGUgcGFnZVxuJ3VzZSBjbGllbnQnXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICdAL2FwcC8oYXV0aCkvQXV0aENvbnRleHQnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3Byb2ZpbGUubW9kdWxlLmNzcyc7IC8vIEltcG9ydCB0aGUgQ1NTIG1vZHVsZVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9maWxlKCkge1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnRpdGxlID0gJ1Byb2ZpbGUgLSBIb2xvTGVhcm4nOyAvLyBTZXQgdGhlIHRpdGxlIGR5bmFtaWNhbGx5XG4gICAgfSwgW10pO1xuXG4gICAgY29uc3QgeyB1c2VyLCBsb2dvdXQgfSA9IHVzZUF1dGgoKTtcblxuICAgIGNvbnNvbGUubG9nKHVzZXIpO1xuXG4gICAgaWYgKCF1c2VyKSB7XG4gICAgICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9maWxlQ29udGFpbmVyfT5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5wcm9maWxlVGl0bGV9PlByb2ZpbGU8L2gxPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucHJvZmlsZURldGFpbH0+V2VsY29tZSwge3VzZXI/LmZpcnN0bmFtZSB8fCB1c2VyPy5uYW1lIHx8ICdVc2VyJ30hPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucHJvZmlsZURldGFpbH0+PHN0cm9uZz5OYW1lOjwvc3Ryb25nPiB7dXNlcj8uZmlyc3RuYW1lfSB7dXNlcj8ubGFzdG5hbWV9PC9wPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5wcm9maWxlRGV0YWlsfT48c3Ryb25nPkVtYWlsOjwvc3Ryb25nPiB7dXNlcj8uZW1haWx9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlQXV0aCIsInN0eWxlcyIsIlByb2ZpbGUiLCJkb2N1bWVudCIsInRpdGxlIiwidXNlciIsImxvZ291dCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJwcm9maWxlQ29udGFpbmVyIiwiaDEiLCJwcm9maWxlVGl0bGUiLCJwIiwicHJvZmlsZURldGFpbCIsImZpcnN0bmFtZSIsIm5hbWUiLCJzdHJvbmciLCJsYXN0bmFtZSIsImVtYWlsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/profile/page.tsx\n"));

/***/ })

});