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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_auth_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/(auth)/AuthContext */ \"(app-pages-browser)/./app/(auth)/AuthContext.tsx\");\n/* harmony import */ var _mui_material_Snackbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Snackbar */ \"(app-pages-browser)/./node_modules/@mui/material/Snackbar/Snackbar.js\");\n/* harmony import */ var _mui_material_Alert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Alert */ \"(app-pages-browser)/./node_modules/@mui/material/Alert/Alert.js\");\n/* harmony import */ var _profile_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.module.css */ \"(app-pages-browser)/./app/profile/profile.module.css\");\n/* harmony import */ var _profile_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_profile_module_css__WEBPACK_IMPORTED_MODULE_3__);\n// Profile page\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n // Import the CSS module\nconst Profile = ()=>{\n    var _userProfile_assets;\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        document.title = \"Profile - HoloLearn\"; // Set the title dynamically\n    }, []);\n    const { user, logout } = (0,_app_auth_AuthContext__WEBPACK_IMPORTED_MODULE_2__.useAuth)();\n    const [snackbar, setSnackbar] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        open: false,\n        message: \"\",\n        severity: \"\"\n    });\n    if (!user) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_profile_module_css__WEBPACK_IMPORTED_MODULE_3___default().loading),\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/devkalavadiya/Desktop/Capstone/HoloLearn/Frontend/app/profile/page.tsx\",\n            lineNumber: 26,\n            columnNumber: 16\n        }, undefined);\n    }\n    const handleDeleteUser = async ()=>{\n        if (!(user === null || user === void 0 ? void 0 : user.email)) {\n            // Display an error message if the user's email is not available\n            setSnackbar({\n                open: true,\n                message: \"User email is required\",\n                severity: \"error\"\n            });\n            return;\n        }\n        try {\n            const response = await fetch(\"http://localhost:4000/delete-user\", {\n                method: \"DELETE\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    email: user.email\n                })\n            });\n            if (!response.ok) {\n                throw new Error(\"Failed to delete user\");\n            }\n            const data = await response.json();\n            setSnackbar({\n                open: true,\n                message: data.message,\n                severity: \"success\"\n            });\n            // Additional actions after successful deletion\n            // e.g., redirecting the user, clearing local user data, etc.\n            // ...\n            window.location.href = \"/\";\n        } catch (error) {\n            const message = error instanceof Error ? error.message : \"An unknown error occurred\";\n            console.error(message);\n            setSnackbar({\n                open: true,\n                message,\n                severity: \"error\"\n            });\n        }\n    };\n    const userProfile = user; // Typecasting to ensure proper typing\n    const handleCloseSnackbar = ()=>{\n        setSnackbar({\n            ...snackbar,\n            open: false\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_profile_module_css__WEBPACK_IMPORTED_MODULE_3___default().profileContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_profile_module_css__WEBPACK_IMPORTED_MODULE_3___default().profileTitle),\n                        children: \"Profile\"\n                    }, void 0, false, {\n                        fileName: \"/Users/devkalavadiya/Desktop/Capstone/HoloLearn/Frontend/app/profile/page.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_profile_module_css__WEBPACK_IMPORTED_MODULE_3___default().profileSubtitle),\n                        children: [\n                            \"Welcome, \",\n                            userProfile.firstname || userProfile.name || \"User\",\n                            \"!\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/devkalavadiya/Desktop/Capstone/HoloLearn/Frontend/app/profile/page.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_profile_module_css__WEBPACK_IMPORTED_MODULE_3___default().profileDetail),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: \"Name:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/devkalavadiya/Desktop/Capstone/HoloLearn/Frontend/app/profile/page.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 53\n                            }, undefined),\n                            \" \",\n                            userProfile.firstname,\n                            \" \",\n                            userProfile.lastname\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/devkalavadiya/Desktop/Capstone/HoloLearn/Frontend/app/profile/page.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_profile_module_css__WEBPACK_IMPORTED_MODULE_3___default().profileDetail),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: \"Number of Assets:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/devkalavadiya/Desktop/Capstone/HoloLearn/Frontend/app/profile/page.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 53\n                            }, undefined),\n                            \" \",\n                            (_userProfile_assets = userProfile.assets) === null || _userProfile_assets === void 0 ? void 0 : _userProfile_assets.length\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/devkalavadiya/Desktop/Capstone/HoloLearn/Frontend/app/profile/page.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_profile_module_css__WEBPACK_IMPORTED_MODULE_3___default().profileDetail),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: \"Email:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/devkalavadiya/Desktop/Capstone/HoloLearn/Frontend/app/profile/page.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 53\n                            }, undefined),\n                            \" \",\n                            userProfile.email\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/devkalavadiya/Desktop/Capstone/HoloLearn/Frontend/app/profile/page.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleDeleteUser,\n                        className: (_profile_module_css__WEBPACK_IMPORTED_MODULE_3___default().logoutButton),\n                        children: \"Delete Account\"\n                    }, void 0, false, {\n                        fileName: \"/Users/devkalavadiya/Desktop/Capstone/HoloLearn/Frontend/app/profile/page.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/devkalavadiya/Desktop/Capstone/HoloLearn/Frontend/app/profile/page.tsx\",\n                lineNumber: 72,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Snackbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                open: snackbar.open,\n                autoHideDuration: 6000,\n                onClose: handleCloseSnackbar,\n                anchorOrigin: {\n                    vertical: \"bottom\",\n                    horizontal: \"center\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Alert__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    onClose: handleCloseSnackbar,\n                    severity: snackbar.severity,\n                    sx: {\n                        width: \"100%\"\n                    },\n                    children: snackbar.message\n                }, void 0, false, {\n                    fileName: \"/Users/devkalavadiya/Desktop/Capstone/HoloLearn/Frontend/app/profile/page.tsx\",\n                    lineNumber: 86,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/devkalavadiya/Desktop/Capstone/HoloLearn/Frontend/app/profile/page.tsx\",\n                lineNumber: 80,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Profile, \"Dil5eYuwrFMPSfhi1hof2ApayMQ=\", false, function() {\n    return [\n        _app_auth_AuthContext__WEBPACK_IMPORTED_MODULE_2__.useAuth\n    ];\n});\n_c = Profile;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Profile);\nvar _c;\n$RefreshReg$(_c, \"Profile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wcm9maWxlL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLGVBQWU7OztBQUVvQztBQUNBO0FBQ0w7QUFDVTtBQUNkLENBQUMsd0JBQXdCO0FBVW5FLE1BQU1PLFVBQW9CO1FBMkQ4REM7O0lBMURwRlAsZ0RBQVNBLENBQUM7UUFDTlEsU0FBU0MsS0FBSyxHQUFHLHVCQUF1Qiw0QkFBNEI7SUFDeEUsR0FBRyxFQUFFO0lBRUwsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLE1BQU0sRUFBRSxHQUFHVCw4REFBT0E7SUFDaEMsTUFBTSxDQUFDVSxVQUFVQyxZQUFZLEdBQUdaLCtDQUFRQSxDQUFDO1FBQUVhLE1BQU07UUFBT0MsU0FBUztRQUFJQyxVQUFVO0lBQUc7SUFFbEYsSUFBSSxDQUFDTixNQUFNO1FBQ1AscUJBQU8sOERBQUNPO1lBQUlDLFdBQVdiLG9FQUFjO3NCQUFFOzs7Ozs7SUFDM0M7SUFFQSxNQUFNZSxtQkFBbUI7UUFDckIsSUFBSSxFQUFDVixpQkFBQUEsMkJBQUFBLEtBQU1XLEtBQUssR0FBRTtZQUNkLGdFQUFnRTtZQUNoRVIsWUFBWTtnQkFBRUMsTUFBTTtnQkFBTUMsU0FBUztnQkFBMEJDLFVBQVU7WUFBUTtZQUMvRTtRQUNKO1FBRUEsSUFBSTtZQUNBLE1BQU1NLFdBQVcsTUFBTUMsTUFBTSxxQ0FBcUM7Z0JBQzlEQyxRQUFRO2dCQUNSQyxTQUFTO29CQUNMLGdCQUFnQjtnQkFDcEI7Z0JBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztvQkFBRVAsT0FBT1gsS0FBS1csS0FBSztnQkFBQztZQUM3QztZQUVBLElBQUksQ0FBQ0MsU0FBU08sRUFBRSxFQUFFO2dCQUNkLE1BQU0sSUFBSUMsTUFBTTtZQUNwQjtZQUVBLE1BQU1DLE9BQU8sTUFBTVQsU0FBU1UsSUFBSTtZQUNoQ25CLFlBQVk7Z0JBQUVDLE1BQU07Z0JBQU1DLFNBQVNnQixLQUFLaEIsT0FBTztnQkFBRUMsVUFBVTtZQUFVO1lBRXJFLCtDQUErQztZQUMvQyw2REFBNkQ7WUFDN0QsTUFBTTtZQUNOaUIsT0FBT0MsUUFBUSxDQUFDQyxJQUFJLEdBQUc7UUFFM0IsRUFBRSxPQUFPQyxPQUFPO1lBQ1osTUFBTXJCLFVBQVVxQixpQkFBaUJOLFFBQVFNLE1BQU1yQixPQUFPLEdBQUc7WUFDekRzQixRQUFRRCxLQUFLLENBQUNyQjtZQUNkRixZQUFZO2dCQUFFQyxNQUFNO2dCQUFNQztnQkFBU0MsVUFBVTtZQUFRO1FBQ3pEO0lBQ0o7SUFFQSxNQUFNVCxjQUFjRyxNQUFjLHNDQUFzQztJQUV4RSxNQUFNNEIsc0JBQXNCO1FBQ3hCekIsWUFBWTtZQUFFLEdBQUdELFFBQVE7WUFBRUUsTUFBTTtRQUFNO0lBQzNDO0lBRUEscUJBQ0k7OzBCQUNJLDhEQUFDRztnQkFBSUMsV0FBV2IsNkVBQXVCOztrQ0FDbkMsOERBQUNtQzt3QkFBR3RCLFdBQVdiLHlFQUFtQjtrQ0FBRTs7Ozs7O2tDQUNwQyw4REFBQ3FDO3dCQUFFeEIsV0FBV2IsNEVBQXNCOzs0QkFBRTs0QkFBVUUsWUFBWXFDLFNBQVMsSUFBSXJDLFlBQVlzQyxJQUFJLElBQUk7NEJBQU87Ozs7Ozs7a0NBQ3BHLDhEQUFDSDt3QkFBRXhCLFdBQVdiLDBFQUFvQjs7MENBQUUsOERBQUMwQzswQ0FBTzs7Ozs7OzRCQUFjOzRCQUFFeEMsWUFBWXFDLFNBQVM7NEJBQUM7NEJBQUVyQyxZQUFZeUMsUUFBUTs7Ozs7OztrQ0FDeEcsOERBQUNOO3dCQUFFeEIsV0FBV2IsMEVBQW9COzswQ0FBRSw4REFBQzBDOzBDQUFPOzs7Ozs7NEJBQTBCOzZCQUFFeEMsc0JBQUFBLFlBQVkwQyxNQUFNLGNBQWxCMUMsMENBQUFBLG9CQUFvQjJDLE1BQU07Ozs7Ozs7a0NBQ2xHLDhEQUFDUjt3QkFBRXhCLFdBQVdiLDBFQUFvQjs7MENBQUUsOERBQUMwQzswQ0FBTzs7Ozs7OzRCQUFlOzRCQUFFeEMsWUFBWWMsS0FBSzs7Ozs7OztrQ0FDOUUsOERBQUM4Qjt3QkFBT0MsU0FBU2hDO3dCQUFrQkYsV0FBV2IseUVBQW1CO2tDQUFFOzs7Ozs7Ozs7Ozs7MEJBRXZFLDhEQUFDRiw4REFBUUE7Z0JBQ0xXLE1BQU1GLFNBQVNFLElBQUk7Z0JBQ25Cd0Msa0JBQWtCO2dCQUNsQkMsU0FBU2pCO2dCQUNUa0IsY0FBYztvQkFBRUMsVUFBVTtvQkFBVUMsWUFBWTtnQkFBUzswQkFFekQsNEVBQUN0RCwyREFBS0E7b0JBQUNtRCxTQUFTakI7b0JBQXFCdEIsVUFBVUosU0FBU0ksUUFBUTtvQkFBZ0IyQyxJQUFJO3dCQUFFQyxPQUFPO29CQUFPOzhCQUMvRmhELFNBQVNHLE9BQU87Ozs7Ozs7Ozs7Ozs7QUFLckM7R0EzRU1UOztRQUt1QkosMERBQU9BOzs7S0FMOUJJO0FBNkVOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wcm9maWxlL3BhZ2UudHN4PzFmODIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gUHJvZmlsZSBwYWdlXG4ndXNlIGNsaWVudCdcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJ0AvYXBwLyhhdXRoKS9BdXRoQ29udGV4dCc7XG5pbXBvcnQgU25hY2tiYXIgZnJvbSAnQG11aS9tYXRlcmlhbC9TbmFja2Jhcic7XG5pbXBvcnQgQWxlcnQsIHsgQWxlcnRDb2xvciB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQWxlcnQnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3Byb2ZpbGUubW9kdWxlLmNzcyc7IC8vIEltcG9ydCB0aGUgQ1NTIG1vZHVsZVxuXG5pbnRlcmZhY2UgVXNlciB7XG4gICAgbmFtZT86IHN0cmluZztcbiAgICBmaXJzdG5hbWU/OiBzdHJpbmc7XG4gICAgbGFzdG5hbWU/OiBzdHJpbmc7XG4gICAgZW1haWw/OiBzdHJpbmc7XG4gICAgYXNzZXRzPzogeyAvKiBEZWZpbmUgYXNzZXQgc3RydWN0dXJlIGhlcmUgKi8gfVtdO1xufVxuXG5jb25zdCBQcm9maWxlOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC50aXRsZSA9ICdQcm9maWxlIC0gSG9sb0xlYXJuJzsgLy8gU2V0IHRoZSB0aXRsZSBkeW5hbWljYWxseVxuICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IHsgdXNlciwgbG9nb3V0IH0gPSB1c2VBdXRoKCk7XG4gICAgY29uc3QgW3NuYWNrYmFyLCBzZXRTbmFja2Jhcl0gPSB1c2VTdGF0ZSh7IG9wZW46IGZhbHNlLCBtZXNzYWdlOiAnJywgc2V2ZXJpdHk6ICcnIH0pO1xuXG4gICAgaWYgKCF1c2VyKSB7XG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvYWRpbmd9PkxvYWRpbmcuLi48L2Rpdj47XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlRGVsZXRlVXNlciA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgaWYgKCF1c2VyPy5lbWFpbCkge1xuICAgICAgICAgICAgLy8gRGlzcGxheSBhbiBlcnJvciBtZXNzYWdlIGlmIHRoZSB1c2VyJ3MgZW1haWwgaXMgbm90IGF2YWlsYWJsZVxuICAgICAgICAgICAgc2V0U25hY2tiYXIoeyBvcGVuOiB0cnVlLCBtZXNzYWdlOiAnVXNlciBlbWFpbCBpcyByZXF1aXJlZCcsIHNldmVyaXR5OiAnZXJyb3InIH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9kZWxldGUtdXNlcicsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBlbWFpbDogdXNlci5lbWFpbCB9KVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBkZWxldGUgdXNlcicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgc2V0U25hY2tiYXIoeyBvcGVuOiB0cnVlLCBtZXNzYWdlOiBkYXRhLm1lc3NhZ2UsIHNldmVyaXR5OiAnc3VjY2VzcycgfSk7XG5cbiAgICAgICAgICAgIC8vIEFkZGl0aW9uYWwgYWN0aW9ucyBhZnRlciBzdWNjZXNzZnVsIGRlbGV0aW9uXG4gICAgICAgICAgICAvLyBlLmcuLCByZWRpcmVjdGluZyB0aGUgdXNlciwgY2xlYXJpbmcgbG9jYWwgdXNlciBkYXRhLCBldGMuXG4gICAgICAgICAgICAvLyAuLi5cbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy8nO1xuXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnQW4gdW5rbm93biBlcnJvciBvY2N1cnJlZCc7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgICAgICAgICAgc2V0U25hY2tiYXIoeyBvcGVuOiB0cnVlLCBtZXNzYWdlLCBzZXZlcml0eTogJ2Vycm9yJyB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCB1c2VyUHJvZmlsZSA9IHVzZXIgYXMgVXNlcjsgLy8gVHlwZWNhc3RpbmcgdG8gZW5zdXJlIHByb3BlciB0eXBpbmdcblxuICAgIGNvbnN0IGhhbmRsZUNsb3NlU25hY2tiYXIgPSAoKSA9PiB7XG4gICAgICAgIHNldFNuYWNrYmFyKHsgLi4uc25hY2tiYXIsIG9wZW46IGZhbHNlIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9maWxlQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMucHJvZmlsZVRpdGxlfT5Qcm9maWxlPC9oMT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5wcm9maWxlU3VidGl0bGV9PldlbGNvbWUsIHt1c2VyUHJvZmlsZS5maXJzdG5hbWUgfHwgdXNlclByb2ZpbGUubmFtZSB8fCAnVXNlcid9ITwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5wcm9maWxlRGV0YWlsfT48c3Ryb25nPk5hbWU6PC9zdHJvbmc+IHt1c2VyUHJvZmlsZS5maXJzdG5hbWV9IHt1c2VyUHJvZmlsZS5sYXN0bmFtZX08L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucHJvZmlsZURldGFpbH0+PHN0cm9uZz5OdW1iZXIgb2YgQXNzZXRzOjwvc3Ryb25nPiB7dXNlclByb2ZpbGUuYXNzZXRzPy5sZW5ndGh9PC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnByb2ZpbGVEZXRhaWx9PjxzdHJvbmc+RW1haWw6PC9zdHJvbmc+IHt1c2VyUHJvZmlsZS5lbWFpbH08L3A+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVEZWxldGVVc2VyfSBjbGFzc05hbWU9e3N0eWxlcy5sb2dvdXRCdXR0b259PkRlbGV0ZSBBY2NvdW50PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxTbmFja2JhclxuICAgICAgICAgICAgICAgIG9wZW49e3NuYWNrYmFyLm9wZW59XG4gICAgICAgICAgICAgICAgYXV0b0hpZGVEdXJhdGlvbj17NjAwMH1cbiAgICAgICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZVNuYWNrYmFyfVxuICAgICAgICAgICAgICAgIGFuY2hvck9yaWdpbj17eyB2ZXJ0aWNhbDogJ2JvdHRvbScsIGhvcml6b250YWw6ICdjZW50ZXInIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEFsZXJ0IG9uQ2xvc2U9e2hhbmRsZUNsb3NlU25hY2tiYXJ9IHNldmVyaXR5PXtzbmFja2Jhci5zZXZlcml0eSBhcyBBbGVydENvbG9yfSBzeD17eyB3aWR0aDogJzEwMCUnIH19PlxuICAgICAgICAgICAgICAgICAgICB7c25hY2tiYXIubWVzc2FnZX1cbiAgICAgICAgICAgICAgICA8L0FsZXJ0PlxuICAgICAgICAgICAgPC9TbmFja2Jhcj5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlQXV0aCIsIlNuYWNrYmFyIiwiQWxlcnQiLCJzdHlsZXMiLCJQcm9maWxlIiwidXNlclByb2ZpbGUiLCJkb2N1bWVudCIsInRpdGxlIiwidXNlciIsImxvZ291dCIsInNuYWNrYmFyIiwic2V0U25hY2tiYXIiLCJvcGVuIiwibWVzc2FnZSIsInNldmVyaXR5IiwiZGl2IiwiY2xhc3NOYW1lIiwibG9hZGluZyIsImhhbmRsZURlbGV0ZVVzZXIiLCJlbWFpbCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvayIsIkVycm9yIiwiZGF0YSIsImpzb24iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJlcnJvciIsImNvbnNvbGUiLCJoYW5kbGVDbG9zZVNuYWNrYmFyIiwicHJvZmlsZUNvbnRhaW5lciIsImgxIiwicHJvZmlsZVRpdGxlIiwicCIsInByb2ZpbGVTdWJ0aXRsZSIsImZpcnN0bmFtZSIsIm5hbWUiLCJwcm9maWxlRGV0YWlsIiwic3Ryb25nIiwibGFzdG5hbWUiLCJhc3NldHMiLCJsZW5ndGgiLCJidXR0b24iLCJvbkNsaWNrIiwibG9nb3V0QnV0dG9uIiwiYXV0b0hpZGVEdXJhdGlvbiIsIm9uQ2xvc2UiLCJhbmNob3JPcmlnaW4iLCJ2ZXJ0aWNhbCIsImhvcml6b250YWwiLCJzeCIsIndpZHRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/profile/page.tsx\n"));

/***/ })

});