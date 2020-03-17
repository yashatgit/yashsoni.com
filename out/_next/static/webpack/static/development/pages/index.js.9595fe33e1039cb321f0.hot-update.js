webpackHotUpdate('static/development/pages/index.js', {
    /***/ './components/page.js':
        /*!****************************!*\
  !*** ./components/page.js ***!
  \****************************/
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
            /* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                /*! next/head */ './node_modules/next/dist/next-server/lib/head.js'
            );
            /* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
                next_head__WEBPACK_IMPORTED_MODULE_1__
            );
            /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                /*! next/router */ './node_modules/next/dist/client/router.js'
            );
            /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
                next_router__WEBPACK_IMPORTED_MODULE_2__
            );
            /* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                /*! next-seo */ './node_modules/next-seo/lib/index.js'
            );
            /* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
                next_seo__WEBPACK_IMPORTED_MODULE_3__
            );
            /* harmony import */ var _utils_date_format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                /*! ../utils/date-format */ './utils/date-format.js'
            );
            /* harmony import */ var _utils_title_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
                /*! ../utils/title-style */ './utils/title-style.js'
            );
            /* harmony import */ var _GlobalStyle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
                /*! ./GlobalStyle */ './components/GlobalStyle.js'
            );
            var _jsxFileName = '/Users/yash/GitHub/yashatgit/leerob.io/components/page.js';
            var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

            var Page = function Page(_ref) {
                var children = _ref.children,
                    date = _ref.date,
                    description = _ref.description,
                    image = _ref.image,
                    _ref$title = _ref.title,
                    title = _ref$title === void 0 ? 'Yash Soni' : _ref$title,
                    keywords = _ref.keywords,
                    router = _ref.router;
                var domain = 'https://yashsoni.com';
                var formattedTitle = Object(_utils_title_style__WEBPACK_IMPORTED_MODULE_5__['default'])(title);
                var url = router && router.asPath ? router.asPath : undefined;
                var canonical = url && url === '/' ? domain : domain + url;
                var featuredImage = domain + image;
                return __jsx(
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
                    null,
                    __jsx(
                        next_head__WEBPACK_IMPORTED_MODULE_1___default.a,
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 20
                            },
                            __self: this
                        },
                        __jsx(
                            'title',
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 21
                                },
                                __self: this
                            },
                            formattedTitle
                        ),
                        __jsx('meta', {
                            charSet: 'utf-8',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 22
                            },
                            __self: this
                        }),
                        __jsx('meta', {
                            content: 'IE=edge',
                            httpEquiv: 'X-UA-Compatible',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 23
                            },
                            __self: this
                        }),
                        __jsx('meta', {
                            content: 'width=device-width, initial-scale=1',
                            name: 'viewport',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 24
                            },
                            __self: this
                        }),
                        description &&
                            __jsx('meta', {
                                content: description,
                                name: 'description',
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 25
                                },
                                __self: this
                            }),
                        keywords &&
                            __jsx('meta', {
                                content: keywords,
                                name: 'keywords',
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 26
                                },
                                __self: this
                            }),
                        __jsx('meta', {
                            content: 'follow, index',
                            name: 'robots',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 27
                            },
                            __self: this
                        }),
                        __jsx('meta', {
                            content: '#ffffff',
                            name: 'theme-color',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 28
                            },
                            __self: this
                        }),
                        __jsx('meta', {
                            content: '#ffffff',
                            name: 'msapplication-TileColor',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 29
                            },
                            __self: this
                        }),
                        __jsx('meta', {
                            content: '/static/favicons/browserconfig.xml',
                            name: 'msapplication-config',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 30
                            },
                            __self: this
                        }),
                        __jsx('link', {
                            href: '/static/favicons/apple-touch-icon.png',
                            rel: 'apple-touch-icon',
                            sizes: '180x180',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 31
                            },
                            __self: this
                        }),
                        __jsx('link', {
                            href: '/static/favicons/favicon-32x32.png',
                            rel: 'icon',
                            sizes: '32x32',
                            type: 'image/png',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 32
                            },
                            __self: this
                        }),
                        __jsx('link', {
                            href: '/static/favicons/favicon-16x16.png',
                            rel: 'icon',
                            sizes: '16x16',
                            type: 'image/png',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 33
                            },
                            __self: this
                        }),
                        __jsx('link', {
                            href: '/static/favicons/site.webmanifest',
                            rel: 'manifest',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 34
                            },
                            __self: this
                        }),
                        __jsx('link', {
                            color: '#4a9885',
                            href: '/static/favicons/safari-pinned-tab.svg',
                            rel: 'mask-icon',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 35
                            },
                            __self: this
                        }),
                        __jsx('link', {
                            href: '/static/favicons/favicon.ico',
                            rel: 'shortcut icon',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 36
                            },
                            __self: this
                        }),
                        url &&
                            __jsx('link', {
                                href: canonical,
                                rel: 'canonical',
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 37
                                },
                                __self: this
                            }),
                        __jsx('meta', {
                            content: 'en_US',
                            property: 'og:locale',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 38
                            },
                            __self: this
                        }),
                        __jsx('meta', {
                            content: formattedTitle,
                            property: 'og:title',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 39
                            },
                            __self: this
                        }),
                        __jsx('meta', {
                            content: description,
                            property: 'og:description',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 40
                            },
                            __self: this
                        }),
                        __jsx('meta', {
                            content: canonical,
                            property: 'og:url',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 41
                            },
                            __self: this
                        }),
                        __jsx('meta', {
                            content: '14d2e73487fa6c71',
                            name: 'yandex-verification',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 42
                            },
                            __self: this
                        }),
                        __jsx('meta', {
                            content: 'eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw',
                            name: 'google-site-verification',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 43
                            },
                            __self: this
                        }),
                        featuredImage &&
                            __jsx(
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
                                null,
                                __jsx('meta', {
                                    content: featuredImage,
                                    property: 'og:image',
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 46
                                    },
                                    __self: this
                                }),
                                __jsx('meta', {
                                    content: description,
                                    property: 'og:image:alt',
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 47
                                    },
                                    __self: this
                                })
                            ),
                        date &&
                            __jsx(
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
                                null,
                                __jsx('meta', {
                                    content: 'article',
                                    property: 'og:type',
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 52
                                    },
                                    __self: this
                                }),
                                __jsx('meta', {
                                    content: Object(_utils_date_format__WEBPACK_IMPORTED_MODULE_4__['dateTime'])(date),
                                    property: 'article:published_time',
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 53
                                    },
                                    __self: this
                                })
                            ),
                        __jsx('meta', {
                            content: 'summary_large_image',
                            name: 'twitter:card',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 56
                            },
                            __self: this
                        }),
                        __jsx('meta', {
                            content: '@leeerob',
                            name: 'twitter:site',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 57
                            },
                            __self: this
                        }),
                        __jsx('meta', {
                            content: '@leeerob',
                            name: 'twitter:creator',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 58
                            },
                            __self: this
                        })
                    ),
                    __jsx(_GlobalStyle__WEBPACK_IMPORTED_MODULE_6__['default'], {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 60
                        },
                        __self: this
                    }),
                    children,
                    date &&
                        __jsx(next_seo__WEBPACK_IMPORTED_MODULE_3__['ArticleJsonLd'], {
                            authorName: 'Yash Soni',
                            dateModified: Object(_utils_date_format__WEBPACK_IMPORTED_MODULE_4__['dateTime'])(date),
                            datePublished: Object(_utils_date_format__WEBPACK_IMPORTED_MODULE_4__['dateTime'])(date),
                            description: description,
                            images: [featuredImage],
                            publisherLogo: '/static/favicons/android-chrome-192x192.png',
                            publisherName: 'Yash Soni',
                            title: formattedTitle,
                            url: canonical,
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 63
                            },
                            __self: this
                        })
                );
            };

            /* harmony default export */ __webpack_exports__['default'] = Object(
                next_router__WEBPACK_IMPORTED_MODULE_2__['withRouter']
            )(Page);

            /***/
        }
});
//# sourceMappingURL=index.js.9595fe33e1039cb321f0.hot-update.js.map
