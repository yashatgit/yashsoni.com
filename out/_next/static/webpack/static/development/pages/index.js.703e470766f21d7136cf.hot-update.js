webpackHotUpdate('static/development/pages/index.js', {
    /***/ './components/nav.js':
        /*!***************************!*\
  !*** ./components/nav.js ***!
  \***************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! react */ './node_modules/react/index.js'
            );
            /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
                react__WEBPACK_IMPORTED_MODULE_0__
            );
            /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                /*! styled-components */ './node_modules/styled-components/dist/styled-components.browser.esm.js'
            );
            /* harmony import */ var _dark_mode_toggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                /*! ./dark-mode-toggle */ './components/dark-mode-toggle.js'
            );
            /* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                /*! ./link */ './components/link.js'
            );
            var _jsxFileName = '/Users/yash/GitHub/yashatgit/leerob.io/components/nav.js';
            var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

            var StyledNav = styled_components__WEBPACK_IMPORTED_MODULE_1__['default'].nav.withConfig({
                displayName: 'nav__StyledNav',
                componentId: 'sc-1df11be-0'
            })([
                'padding:25px;display:flex;justify-content:space-between;align-items:center;width:100%;@media (min-width:822px){padding:2em 4em 4em;}'
            ]);
            var Logo = styled_components__WEBPACK_IMPORTED_MODULE_1__['default'].img.withConfig({
                displayName: 'nav__Logo',
                componentId: 'sc-1df11be-1'
            })(['display:flex;height:10px;padding-right:2em;@media (min-width:737px){height:16px;padding-right:3em;}']);
            var NavLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__['default'])(
                _link__WEBPACK_IMPORTED_MODULE_3__['default']
            ).withConfig({
                displayName: 'nav__NavLink',
                componentId: 'sc-1df11be-2'
            })(
                [
                    'color:',
                    ';font-size:0.8em;letter-spacing:0.03em;text-decoration:none;transition:all 0.15s ease;:hover{color:',
                    ';}@media (min-width:737px){font-size:0.9em;}+ a{margin:0 0 0 1em;@media (min-width:737px){margin:0 0 0 2em;}}'
                ],
                function(props) {
                    return props.theme.accent;
                },
                function(props) {
                    return props.theme.primary;
                }
            );
            var ProjectsLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__['default'])(NavLink).withConfig({
                displayName: 'nav__ProjectsLink',
                componentId: 'sc-1df11be-3'
            })(['display:none;@media (min-width:405px){display:initial;}']);
            var Centered = styled_components__WEBPACK_IMPORTED_MODULE_1__['default'].div.withConfig({
                displayName: 'nav__Centered',
                componentId: 'sc-1df11be-4'
            })(['display:flex;align-items:center;']);

            var Nav = function Nav() {
                return __jsx(
                    StyledNav,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 69
                        },
                        __self: this
                    },
                    __jsx(
                        _link__WEBPACK_IMPORTED_MODULE_3__['default'],
                        {
                            'aria-label': 'Yash Soni - Home',
                            href: '/',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 70
                            },
                            __self: this
                        },
                        __jsx(Logo, {
                            alt: 'Lee Robinson',
                            src: '/static/images/logo.png',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 71
                            },
                            __self: this
                        })
                    ),
                    __jsx(
                        Centered,
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 73
                            },
                            __self: this
                        },
                        __jsx(
                            NavLink,
                            {
                                href: '/til',
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 74
                                },
                                __self: this
                            },
                            'TIL'
                        ),
                        __jsx(
                            NavLink,
                            {
                                href: '/blog',
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 75
                                },
                                __self: this
                            },
                            'Blog'
                        ),
                        __jsx(
                            ProjectsLink,
                            {
                                href: '/projects',
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 76
                                },
                                __self: this
                            },
                            'Projects'
                        ),
                        __jsx(_dark_mode_toggle__WEBPACK_IMPORTED_MODULE_2__['default'], {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 77
                            },
                            __self: this
                        })
                    )
                );
            };

            /* harmony default export */ __webpack_exports__['default'] = Nav;

            /***/
        }
});
//# sourceMappingURL=index.js.703e470766f21d7136cf.hot-update.js.map
