webpackHotUpdate('static/development/pages/index.js', {
    /***/ './pages/index.js':
        /*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
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
            /* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                /*! next-seo */ './node_modules/next-seo/lib/index.js'
            );
            /* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
                next_seo__WEBPACK_IMPORTED_MODULE_2__
            );
            /* harmony import */ var _components_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                /*! ../components/page */ './components/page.js'
            );
            /* harmony import */ var _styles_mixins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                /*! ../styles/mixins */ './styles/mixins.js'
            );
            /* harmony import */ var _styles_vars__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
                /*! ../styles/vars */ './styles/vars.js'
            );
            /* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
                /*! ../components/nav */ './components/nav.js'
            );
            var _jsxFileName = '/Users/yash/GitHub/yashatgit/leerob.io/pages/index.js';
            var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

            var Main = styled_components__WEBPACK_IMPORTED_MODULE_1__['default'].main.withConfig({
                displayName: 'pages__Main',
                componentId: 'sc-2p4hhh-0'
            })(['display:flex;flex:1;']);
            var Content = styled_components__WEBPACK_IMPORTED_MODULE_1__['default'].div.withConfig({
                displayName: 'pages__Content',
                componentId: 'sc-2p4hhh-1'
            })(
                ['', ' margin-bottom:', ';padding:', ';display:flex;flex-direction:column;justify-content:center;'],
                _styles_mixins__WEBPACK_IMPORTED_MODULE_4__['column'],
                _styles_vars__WEBPACK_IMPORTED_MODULE_5__['spacing'].normal,
                _styles_vars__WEBPACK_IMPORTED_MODULE_5__['spacing'].normal
            ); // const Subtitle = styled.h2`
            //     text-align: center;
            //     font-style: italic;
            //     margin: 0;
            //     color: ${props => props.theme.accent};
            //     letter-spacing: 0.03;
            // `;

            var Title = styled_components__WEBPACK_IMPORTED_MODULE_1__['default'].h1.withConfig({
                displayName: 'pages__Title',
                componentId: 'sc-2p4hhh-2'
            })([
                'display:initial;font-size:1.65em;text-align:center;line-height:1.35;font-weight:bold;margin:0 auto;@media (min-width:737px){font-size:2.3em;}'
            ]);
            var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__['default'].div.withConfig({
                displayName: 'pages__Container',
                componentId: 'sc-2p4hhh-3'
            })(['display:flex;flex-direction:column;padding:30px 0;@media (min-width:737px){padding:30px 0 30px;}']);
            var Details = styled_components__WEBPACK_IMPORTED_MODULE_1__['default'].div.withConfig({
                displayName: 'pages__Details',
                componentId: 'sc-2p4hhh-4'
            })(
                ['max-width:500px;margin:0 auto;text-align:center;margin-bottom:', ';'],
                _styles_vars__WEBPACK_IMPORTED_MODULE_5__['spacing'].extrasmall
            );
            var description =
                "Yash Soni is a developer, writer, and UI/UX enthusiast. He's interested in all things JAMstack (JavaScript, APIs, Markup) and Design Systems.";

            var Index = function Index() {
                return __jsx(
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
                    null,
                    __jsx(
                        _components_page__WEBPACK_IMPORTED_MODULE_3__['default'],
                        {
                            description: description,
                            image: '/static/images/speaking/speaking.jpg',
                            title: 'Yash Soni',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 66
                            },
                            __self: this
                        },
                        __jsx(_components_nav__WEBPACK_IMPORTED_MODULE_6__['default'], {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 67
                            },
                            __self: this
                        }),
                        __jsx(
                            Main,
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 68
                                },
                                __self: this
                            },
                            __jsx(
                                Content,
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 69
                                    },
                                    __self: this
                                },
                                __jsx(
                                    Container,
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 70
                                        },
                                        __self: this
                                    },
                                    __jsx(
                                        Title,
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 71
                                            },
                                            __self: this
                                        },
                                        'Hello!'
                                    )
                                ),
                                __jsx(
                                    Details,
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 73
                                        },
                                        __self: this
                                    },
                                    "Welcome to my personal slice of the internet \uD83D\uDC4B\uD83C\uDFFC Here you'll find everything you need to know about me - blog posts, work history, projects, contact information, and more!"
                                )
                            )
                        )
                    ),
                    __jsx(next_seo__WEBPACK_IMPORTED_MODULE_2__['LogoJsonLd'], {
                        logo: 'https://yashsoni.com/static/images/lee.jpg',
                        url: 'https://leerob.io',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 77
                        },
                        __self: this
                    })
                );
            };

            /* harmony default export */ __webpack_exports__['default'] = Index;

            /***/
        }
});
//# sourceMappingURL=index.js.91ff6332ce9dc151bf0c.hot-update.js.map
