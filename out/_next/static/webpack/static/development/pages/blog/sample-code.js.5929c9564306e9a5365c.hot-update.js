webpackHotUpdate('static/development/pages/blog/sample-code.js', {
    /***/ './components/post.js':
        /*!****************************!*\
  !*** ./components/post.js ***!
  \****************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! @mdx-js/react */ './node_modules/@mdx-js/react/dist/esm.js'
            );
            /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                /*! react */ './node_modules/react/index.js'
            );
            /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
                react__WEBPACK_IMPORTED_MODULE_1__
            );
            /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                /*! styled-components */ './node_modules/styled-components/dist/styled-components.browser.esm.js'
            );
            /* harmony import */ var _styles_mixins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                /*! ../styles/mixins */ './styles/mixins.js'
            );
            /* harmony import */ var _styles_vars__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                /*! ../styles/vars */ './styles/vars.js'
            );
            /* harmony import */ var _elements_blockquote__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
                /*! ./elements/blockquote */ './components/elements/blockquote.js'
            );
            /* harmony import */ var _elements_code__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
                /*! ./elements/code */ './components/elements/code.js'
            );
            /* harmony import */ var _elements_em__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
                /*! ./elements/em */ './components/elements/em.js'
            );
            /* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
                /*! ./footer */ './components/footer.js'
            );
            /* harmony import */ var _elements_text__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
                /*! ./elements/text */ './components/elements/text.js'
            );
            /* harmony import */ var _elements_img__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
                /*! ./elements/img */ './components/elements/img.js'
            );
            /* harmony import */ var _elements_li__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
                /*! ./elements/li */ './components/elements/li.js'
            );
            /* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
                /*! ./link */ './components/link.js'
            );
            /* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
                /*! ./nav */ './components/nav.js'
            );
            /* harmony import */ var _elements_ol__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
                /*! ./elements/ol */ './components/elements/ol.js'
            );
            /* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
                /*! ./page */ './components/page.js'
            );
            /* harmony import */ var _elements_strong__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
                /*! ./elements/strong */ './components/elements/strong.js'
            );
            /* harmony import */ var _elements_ul__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
                /*! ./elements/ul */ './components/elements/ul.js'
            );
            var _jsxFileName = '/Users/yash/GitHub/yashatgit/leerob.io/components/post.js';
            var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

            //import Subscribe from './subscribe';

            var components = {
                a: _link__WEBPACK_IMPORTED_MODULE_12__['default'],
                blockquote: _elements_blockquote__WEBPACK_IMPORTED_MODULE_5__['default'],
                em: _elements_em__WEBPACK_IMPORTED_MODULE_7__['default'],
                h1: _elements_text__WEBPACK_IMPORTED_MODULE_9__['H1'],
                h2: _elements_text__WEBPACK_IMPORTED_MODULE_9__['H2'],
                h3: _elements_text__WEBPACK_IMPORTED_MODULE_9__['H3'],
                img: _elements_img__WEBPACK_IMPORTED_MODULE_10__['default'],
                li: _elements_li__WEBPACK_IMPORTED_MODULE_11__['default'],
                ol: _elements_ol__WEBPACK_IMPORTED_MODULE_14__['default'],
                pre: _elements_code__WEBPACK_IMPORTED_MODULE_6__['default'],
                strong: _elements_strong__WEBPACK_IMPORTED_MODULE_16__['default'],
                ul: _elements_ul__WEBPACK_IMPORTED_MODULE_17__['default']
            };
            var Main = styled_components__WEBPACK_IMPORTED_MODULE_2__['default'].main.withConfig({
                displayName: 'post__Main',
                componentId: 'sc-9b2r0b-0'
            })(
                ['', ' padding:', ';@media (min-width:768px){font-size:18px;}'],
                _styles_mixins__WEBPACK_IMPORTED_MODULE_3__['column'],
                _styles_vars__WEBPACK_IMPORTED_MODULE_4__['spacing'].normal
            );
            /*
             * const editUrl = slug =>
             *     `https://github.com/leerob/yashsoni.com/edit/master/pages/blog/${slug}.mdx`;
             * const discussUrl = slug =>
             *     `https://mobile.twitter.com/search?q=${encodeURIComponent(
             *         `https://yashsoni.com/blog/${slug}`,
             *     )}`;
             */

            var Post = function Post(_ref) {
                var children = _ref.children,
                    meta = _ref.meta;
                return __jsx(
                    _page__WEBPACK_IMPORTED_MODULE_15__['default'],
                    {
                        date: meta.date,
                        description: meta.description,
                        image: meta.image,
                        title: ''.concat(meta.title, ' - Yash Soni'),
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 57
                        },
                        __self: this
                    },
                    __jsx(_nav__WEBPACK_IMPORTED_MODULE_13__['default'], {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 58
                        },
                        __self: this
                    }),
                    __jsx(
                        Main,
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 59
                            },
                            __self: this
                        },
                        __jsx(
                            _mdx_js_react__WEBPACK_IMPORTED_MODULE_0__['MDXProvider'],
                            {
                                components: components,
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 60
                                },
                                __self: this
                            },
                            __jsx(
                                'article',
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 61
                                    },
                                    __self: this
                                },
                                children
                            )
                        ),
                        __jsx('hr', {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 63
                            },
                            __self: this
                        })
                    ),
                    __jsx(_footer__WEBPACK_IMPORTED_MODULE_8__['default'], {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 83
                        },
                        __self: this
                    })
                );
            };

            /* harmony default export */ __webpack_exports__['default'] = Post;

            /***/
        }
});
//# sourceMappingURL=sample-code.js.5929c9564306e9a5365c.hot-update.js.map
