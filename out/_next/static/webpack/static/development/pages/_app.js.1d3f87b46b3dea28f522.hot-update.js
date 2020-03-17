webpackHotUpdate('static/development/pages/_app.js', {
    /***/ './pages/_app.js':
        /*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! @babel/runtime/helpers/esm/extends */ './node_modules/@babel/runtime/helpers/esm/extends.js'
            );
            /* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                /*! @babel/runtime/helpers/esm/classCallCheck */ './node_modules/@babel/runtime/helpers/esm/classCallCheck.js'
            );
            /* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                /*! @babel/runtime/helpers/esm/createClass */ './node_modules/@babel/runtime/helpers/esm/createClass.js'
            );
            /* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                /*! @babel/runtime/helpers/esm/possibleConstructorReturn */ './node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js'
            );
            /* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                /*! @babel/runtime/helpers/esm/getPrototypeOf */ './node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js'
            );
            /* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
                /*! @babel/runtime/helpers/esm/inherits */ './node_modules/@babel/runtime/helpers/esm/inherits.js'
            );
            /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
                /*! react */ './node_modules/react/index.js'
            );
            /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
                react__WEBPACK_IMPORTED_MODULE_6__
            );
            /* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
                /*! next/app */ './node_modules/next/app.js'
            );
            /* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(
                next_app__WEBPACK_IMPORTED_MODULE_7__
            );
            /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
                /*! styled-components */ './node_modules/styled-components/dist/styled-components.browser.esm.js'
            );
            /* harmony import */ var use_dark_mode__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
                /*! use-dark-mode */ './node_modules/use-dark-mode/dist/use-dark-mode.m.js'
            );
            /* harmony import */ var _styles_vars__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
                /*! ../styles/vars */ './styles/vars.js'
            );
            /* harmony import */ var _styles_prism_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
                /*! ../styles/prism.css */ './styles/prism.css'
            );
            /* harmony import */ var _styles_prism_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/ __webpack_require__.n(
                _styles_prism_css__WEBPACK_IMPORTED_MODULE_11__
            );

            var _jsxFileName = '/Users/yash/GitHub/yashatgit/leerob.io/pages/_app.js';
            var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

            var lightTheme = {
                accent: '#0967D2',
                accentLight: '#ff5252',
                body: '#3a4145',
                code: '#011627',
                inlineCode: '#fff',
                inlineCodeBg: '#f3f3f3',
                lightGrey: _styles_vars__WEBPACK_IMPORTED_MODULE_10__['colors'].grey[200],
                primary: _styles_vars__WEBPACK_IMPORTED_MODULE_10__['colors'].text,
                secondary: '#fff',
                text: '#2e2e2e'
            };
            var darkTheme = {
                accent: '#47A3F3',
                accentLight: '#BAE3FF',
                body: '#F5F7FA',
                code: '#011627',
                inlineCode: '#f3f3f3',
                inlineCodeBg: '#192129',
                lightGrey: _styles_vars__WEBPACK_IMPORTED_MODULE_10__['colors'].grey[200],
                primary: '#F5F7FA',
                secondary: '#1F2933',
                text: '#F5F7FA'
            };

            var DarkMode = function DarkMode(_ref) {
                var children = _ref.children;
                var darkMode = Object(use_dark_mode__WEBPACK_IMPORTED_MODULE_9__['default'])(false);
                var theme = darkMode.value ? darkTheme : lightTheme;
                return __jsx(
                    styled_components__WEBPACK_IMPORTED_MODULE_8__['ThemeProvider'],
                    {
                        theme: theme,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 40
                        },
                        __self: this
                    },
                    children
                );
            };

            var CustomApp = /*#__PURE__*/ (function(_App) {
                Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__['default'])(CustomApp, _App);

                function CustomApp() {
                    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__['default'])(
                        this,
                        CustomApp
                    );

                    return Object(
                        _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__['default']
                    )(
                        this,
                        Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__['default'])(
                            CustomApp
                        ).apply(this, arguments)
                    );
                }

                Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__['default'])(CustomApp, [
                    {
                        key: 'render',
                        value: function render() {
                            var _this$props = this.props,
                                Component = _this$props.Component,
                                pageProps = _this$props.pageProps;
                            return __jsx(
                                DarkMode,
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 48
                                    },
                                    __self: this
                                },
                                __jsx(
                                    Component,
                                    Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__['default'])(
                                        {},
                                        pageProps,
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 49
                                            },
                                            __self: this
                                        }
                                    )
                                )
                            );
                        }
                    }
                ]);

                return CustomApp;
            })(next_app__WEBPACK_IMPORTED_MODULE_7___default.a);

            /* harmony default export */ __webpack_exports__['default'] = CustomApp;

            /***/
        }
});
//# sourceMappingURL=_app.js.1d3f87b46b3dea28f522.hot-update.js.map
