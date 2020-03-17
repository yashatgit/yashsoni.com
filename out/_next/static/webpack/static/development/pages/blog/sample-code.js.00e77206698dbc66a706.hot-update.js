webpackHotUpdate('static/development/pages/blog/sample-code.js', {
    /***/ './pages/blog/sample-code.mdx':
        /*!************************************!*\
  !*** ./pages/blog/sample-code.mdx ***!
  \************************************/
        /*! exports provided: meta, default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'meta', function() {
                return meta;
            });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'default', function() {
                return MDXContent;
            });
            /* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! @babel/runtime/helpers/esm/objectWithoutProperties */ './node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
            );
            /* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                /*! @babel/runtime/helpers/esm/extends */ './node_modules/@babel/runtime/helpers/esm/extends.js'
            );
            /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                /*! react */ './node_modules/react/index.js'
            );
            /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
                react__WEBPACK_IMPORTED_MODULE_2__
            );
            /* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                /*! @mdx-js/react */ './node_modules/@mdx-js/react/dist/esm.js'
            );
            /* harmony import */ var _components_date__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                /*! ../../components/date */ './components/date.js'
            );
            /* harmony import */ var _components_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
                /*! ../../components/post */ './components/post.js'
            );

            var _jsxFileName = '/Users/yash/GitHub/yashatgit/leerob.io/pages/blog/sample-code.mdx';
            var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

            /* @jsx mdx */

            var meta = {
                date: '2017-07-15',
                description:
                    'Visualize my journey through the scenic lands of Norway with rich, stunning pictures and daily travel logs.',
                image: '/static/images/10-days-in-norway/banner.png',
                slug: '10-days-in-norway',
                title: '10 Days in Norway'
            };

            var makeShortcode = function makeShortcode(name) {
                return function MDXDefaultShortcode(props) {
                    console.warn(
                        'Component ' + name + ' was not imported, exported, or provided by MDXProvider as global scope'
                    );
                    return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                        'div',
                        Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])({}, props, {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 17
                            },
                            __self: this
                        })
                    );
                };
            };

            var layoutProps = {
                meta: meta
            };

            var MDXLayout = function MDXLayout(_ref) {
                var children = _ref.children;
                return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                    _components_post__WEBPACK_IMPORTED_MODULE_5__['default'],
                    {
                        meta: meta,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 23
                        },
                        __self: this
                    },
                    children
                );
            };

            function MDXContent(_ref2) {
                var components = _ref2.components,
                    props = Object(
                        _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__['default']
                    )(_ref2, ['components']);

                return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                    MDXLayout,
                    Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                        {},
                        layoutProps,
                        props,
                        {
                            components: components,
                            mdxType: 'MDXLayout',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 28
                            },
                            __self: this
                        }
                    ),
                    Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                        'h1',
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 32
                            },
                            __self: this
                        },
                        '10 Days in Norway'
                    ),
                    Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                        _components_date__WEBPACK_IMPORTED_MODULE_4__['default'],
                        {
                            mdxType: 'Date',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 33
                            },
                            __self: this
                        },
                        meta.date
                    ),
                    Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                        'p',
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 34
                            },
                            __self: this
                        },
                        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                            'img',
                            Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                {
                                    parentName: 'p'
                                },
                                {
                                    src: '/static/images/10-days-in-norway/banner.png',
                                    alt: 'Norway'
                                },
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 34
                                    },
                                    __self: this
                                }
                            )
                        )
                    ),
                    Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                        'h3',
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 38
                            },
                            __self: this
                        },
                        'Why Norway?'
                    ),
                    Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                        'p',
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 39
                            },
                            __self: this
                        },
                        'A few years ago I stumbled onto a picture of the legendary ',
                        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                            'a',
                            Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                {
                                    parentName: 'p'
                                },
                                {
                                    href:
                                        'https://www.visitnorway.com/places-to-go/fjord-norway/the-hardangerfjord-region/listings-hardanger-fjord/trolltunga/8625/'
                                },
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 39
                                    },
                                    __self: this
                                }
                            ),
                            'Trolltunga'
                        ),
                        " while browsing Instagram. I was captivated by its beauty and decided to add visiting Norway and trekking out to visit this abnormal rock structure to my bucket list. Since then, I had been keeping tabs on prices for flights to Oslo, Norway. In March 2017, I noticed that the round trip prices from Chicago to Oslo had significantly dropped due to a special sale. I contacted my friend Andrew asking if he would want to join, knowing he also had the same desire to explore and hike through Norway. Andrew was starting physical therapy school at the end of summer and would soon have limited free time (and a limited budget) so this was the perfect opportunity to take the trip of a lifetime with one of my best friends. We also invited Andrew\u2019s friend JD who I'd not met but had heard great things about. I checked my work schedule and PTO balance and took the plunge - I purchased my plane ticket and committed to the adventure. The three of us were ecstatic and hungry for an unforgettable experience. Throughout the next two months, we planned out our trip determining where to stay, what to visit, and how to most effectively use our time. You'll find my daily travel logs below. Enjoy!"
                    ),
                    Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])('hr', {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 42
                        },
                        __self: this
                    }),
                    Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                        'pre',
                        Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                            {
                                className: 'language-bash'
                            },
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 43
                                },
                                __self: this
                            }
                        ),
                        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                            'code',
                            Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                {
                                    parentName: 'pre'
                                },
                                {
                                    className: 'language-bash'
                                },
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 45
                                    },
                                    __self: this
                                }
                            ),
                            '$ ',
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token function'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 47
                                        },
                                        __self: this
                                    }
                                ),
                                'git'
                            ),
                            ' clone https://github.com/leerob/yashsoni.com.git\n$ ',
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token builtin class-name'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 50
                                        },
                                        __self: this
                                    }
                                ),
                                'cd'
                            ),
                            ' yashsoni.com\n$ ',
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token function'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 53
                                        },
                                        __self: this
                                    }
                                ),
                                'yarn'
                            ),
                            '\n$ ',
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token function'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 56
                                        },
                                        __self: this
                                    }
                                ),
                                'yarn'
                            ),
                            ' dev\n'
                        )
                    ),
                    Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                        'pre',
                        Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                            {
                                className: 'language-html'
                            },
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 60
                                },
                                __self: this
                            }
                        ),
                        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                            'code',
                            Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                {
                                    parentName: 'pre'
                                },
                                {
                                    className: 'language-html'
                                },
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 62
                                    },
                                    __self: this
                                }
                            ),
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token tag'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 64
                                        },
                                        __self: this
                                    }
                                ),
                                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                    'span',
                                    Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                        {
                                            parentName: 'span'
                                        },
                                        {
                                            className: 'token tag'
                                        },
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 66
                                            },
                                            __self: this
                                        }
                                    ),
                                    Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                        'span',
                                        Object(
                                            _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default']
                                        )(
                                            {
                                                parentName: 'span'
                                            },
                                            {
                                                className: 'token punctuation'
                                            },
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 68
                                                },
                                                __self: this
                                            }
                                        ),
                                        '<'
                                    ),
                                    'div'
                                ),
                                ' ',
                                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                    'span',
                                    Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                        {
                                            parentName: 'span'
                                        },
                                        {
                                            className: 'token attr-name'
                                        },
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 70
                                            },
                                            __self: this
                                        }
                                    ),
                                    'class'
                                ),
                                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                    'span',
                                    Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                        {
                                            parentName: 'span'
                                        },
                                        {
                                            className: 'token attr-value'
                                        },
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 72
                                            },
                                            __self: this
                                        }
                                    ),
                                    Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                        'span',
                                        Object(
                                            _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default']
                                        )(
                                            {
                                                parentName: 'span'
                                            },
                                            {
                                                className: 'token punctuation'
                                            },
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 74
                                                },
                                                __self: this
                                            }
                                        ),
                                        '='
                                    ),
                                    Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                        'span',
                                        Object(
                                            _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default']
                                        )(
                                            {
                                                parentName: 'span'
                                            },
                                            {
                                                className: 'token punctuation'
                                            },
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 76
                                                },
                                                __self: this
                                            }
                                        ),
                                        '"'
                                    ),
                                    'meta',
                                    Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                        'span',
                                        Object(
                                            _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default']
                                        )(
                                            {
                                                parentName: 'span'
                                            },
                                            {
                                                className: 'token punctuation'
                                            },
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 78
                                                },
                                                __self: this
                                            }
                                        ),
                                        '"'
                                    )
                                ),
                                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                    'span',
                                    Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                        {
                                            parentName: 'span'
                                        },
                                        {
                                            className: 'token punctuation'
                                        },
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 80
                                            },
                                            __self: this
                                        }
                                    ),
                                    '>'
                                )
                            ),
                            'Friday, March 9, 2018 at 11:53pm UTC+11',
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token tag'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 82
                                        },
                                        __self: this
                                    }
                                ),
                                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                    'span',
                                    Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                        {
                                            parentName: 'span'
                                        },
                                        {
                                            className: 'token tag'
                                        },
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 84
                                            },
                                            __self: this
                                        }
                                    ),
                                    Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                        'span',
                                        Object(
                                            _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default']
                                        )(
                                            {
                                                parentName: 'span'
                                            },
                                            {
                                                className: 'token punctuation'
                                            },
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 86
                                                },
                                                __self: this
                                            }
                                        ),
                                        '</'
                                    ),
                                    'div'
                                ),
                                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                    'span',
                                    Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                        {
                                            parentName: 'span'
                                        },
                                        {
                                            className: 'token punctuation'
                                        },
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 88
                                            },
                                            __self: this
                                        }
                                    ),
                                    '>'
                                )
                            ),
                            '\n',
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token tag'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 91
                                        },
                                        __self: this
                                    }
                                ),
                                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                    'span',
                                    Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                        {
                                            parentName: 'span'
                                        },
                                        {
                                            className: 'token tag'
                                        },
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 93
                                            },
                                            __self: this
                                        }
                                    ),
                                    Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                        'span',
                                        Object(
                                            _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default']
                                        )(
                                            {
                                                parentName: 'span'
                                            },
                                            {
                                                className: 'token punctuation'
                                            },
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 95
                                                },
                                                __self: this
                                            }
                                        ),
                                        '<'
                                    ),
                                    'div'
                                ),
                                ' ',
                                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                    'span',
                                    Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                        {
                                            parentName: 'span'
                                        },
                                        {
                                            className: 'token attr-name'
                                        },
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 97
                                            },
                                            __self: this
                                        }
                                    ),
                                    'class'
                                ),
                                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                    'span',
                                    Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                        {
                                            parentName: 'span'
                                        },
                                        {
                                            className: 'token attr-value'
                                        },
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 99
                                            },
                                            __self: this
                                        }
                                    ),
                                    Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                        'span',
                                        Object(
                                            _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default']
                                        )(
                                            {
                                                parentName: 'span'
                                            },
                                            {
                                                className: 'token punctuation'
                                            },
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 101
                                                },
                                                __self: this
                                            }
                                        ),
                                        '='
                                    ),
                                    Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                        'span',
                                        Object(
                                            _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default']
                                        )(
                                            {
                                                parentName: 'span'
                                            },
                                            {
                                                className: 'token punctuation'
                                            },
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 103
                                                },
                                                __self: this
                                            }
                                        ),
                                        '"'
                                    ),
                                    'comment',
                                    Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                        'span',
                                        Object(
                                            _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default']
                                        )(
                                            {
                                                parentName: 'span'
                                            },
                                            {
                                                className: 'token punctuation'
                                            },
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 105
                                                },
                                                __self: this
                                            }
                                        ),
                                        '"'
                                    )
                                ),
                                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                    'span',
                                    Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                        {
                                            parentName: 'span'
                                        },
                                        {
                                            className: 'token punctuation'
                                        },
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 107
                                            },
                                            __self: this
                                        }
                                    ),
                                    '>'
                                )
                            ),
                            'Some post, comment, song, or link shared',
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token tag'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 109
                                        },
                                        __self: this
                                    }
                                ),
                                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                    'span',
                                    Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                        {
                                            parentName: 'span'
                                        },
                                        {
                                            className: 'token tag'
                                        },
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 111
                                            },
                                            __self: this
                                        }
                                    ),
                                    Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                        'span',
                                        Object(
                                            _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default']
                                        )(
                                            {
                                                parentName: 'span'
                                            },
                                            {
                                                className: 'token punctuation'
                                            },
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 113
                                                },
                                                __self: this
                                            }
                                        ),
                                        '</'
                                    ),
                                    'div'
                                ),
                                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                    'span',
                                    Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                        {
                                            parentName: 'span'
                                        },
                                        {
                                            className: 'token punctuation'
                                        },
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 115
                                            },
                                            __self: this
                                        }
                                    ),
                                    '>'
                                )
                            ),
                            '\n'
                        )
                    ),
                    Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                        'pre',
                        Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                            {
                                className: 'language-js'
                            },
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 119
                                },
                                __self: this
                            }
                        ),
                        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                            'code',
                            Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                {
                                    parentName: 'pre'
                                },
                                {
                                    className: 'language-js'
                                },
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 121
                                    },
                                    __self: this
                                }
                            ),
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token keyword module'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 123
                                        },
                                        __self: this
                                    }
                                ),
                                'import'
                            ),
                            ' fetch ',
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token keyword module'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 125
                                        },
                                        __self: this
                                    }
                                ),
                                'from'
                            ),
                            ' ',
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token string'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 127
                                        },
                                        __self: this
                                    }
                                ),
                                "'isomorphic-unfetch'"
                            ),
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token punctuation'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 129
                                        },
                                        __self: this
                                    }
                                ),
                                ';'
                            ),
                            '\n\n',
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token keyword module'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 133
                                        },
                                        __self: this
                                    }
                                ),
                                'export'
                            ),
                            ' ',
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token keyword module'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 135
                                        },
                                        __self: this
                                    }
                                ),
                                'default'
                            ),
                            ' ',
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token keyword'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 137
                                        },
                                        __self: this
                                    }
                                ),
                                'async'
                            ),
                            ' ',
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token keyword'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 139
                                        },
                                        __self: this
                                    }
                                ),
                                'function'
                            ),
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token punctuation'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 141
                                        },
                                        __self: this
                                    }
                                ),
                                '('
                            ),
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token parameter'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 143
                                        },
                                        __self: this
                                    }
                                ),
                                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                    'span',
                                    Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                        {
                                            parentName: 'span'
                                        },
                                        {
                                            className: 'token spread operator'
                                        },
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 145
                                            },
                                            __self: this
                                        }
                                    ),
                                    '...'
                                ),
                                'args'
                            ),
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token punctuation'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 147
                                        },
                                        __self: this
                                    }
                                ),
                                ')'
                            ),
                            ' ',
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token punctuation'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 149
                                        },
                                        __self: this
                                    }
                                ),
                                '{'
                            ),
                            '\n    ',
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token keyword'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 152
                                        },
                                        __self: this
                                    }
                                ),
                                'const'
                            ),
                            ' res ',
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token operator'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 154
                                        },
                                        __self: this
                                    }
                                ),
                                '='
                            ),
                            ' ',
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token keyword'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 156
                                        },
                                        __self: this
                                    }
                                ),
                                'await'
                            ),
                            ' ',
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token function'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 158
                                        },
                                        __self: this
                                    }
                                ),
                                'fetch'
                            ),
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token punctuation'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 160
                                        },
                                        __self: this
                                    }
                                ),
                                '('
                            ),
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token spread operator'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 162
                                        },
                                        __self: this
                                    }
                                ),
                                '...'
                            ),
                            'args',
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token punctuation'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 164
                                        },
                                        __self: this
                                    }
                                ),
                                ')'
                            ),
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token punctuation'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 166
                                        },
                                        __self: this
                                    }
                                ),
                                ';'
                            ),
                            '\n\n    ',
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token keyword'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 170
                                        },
                                        __self: this
                                    }
                                ),
                                'return'
                            ),
                            ' res',
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token punctuation'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 172
                                        },
                                        __self: this
                                    }
                                ),
                                '.'
                            ),
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token method function property-access'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 174
                                        },
                                        __self: this
                                    }
                                ),
                                'json'
                            ),
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token punctuation'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 176
                                        },
                                        __self: this
                                    }
                                ),
                                '('
                            ),
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token punctuation'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 178
                                        },
                                        __self: this
                                    }
                                ),
                                ')'
                            ),
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token punctuation'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 180
                                        },
                                        __self: this
                                    }
                                ),
                                ';'
                            ),
                            '\n',
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token punctuation'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 183
                                        },
                                        __self: this
                                    }
                                ),
                                '}'
                            ),
                            '\n'
                        )
                    ),
                    Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                        'p',
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 187
                            },
                            __self: this
                        },
                        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                            'inlineCode',
                            {
                                parentName: 'p',
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 187
                                },
                                __self: this
                            },
                            'data'
                        ),
                        ' will contain the JSON response from our API route.'
                    ),
                    Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                        'pre',
                        Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                            {
                                className: 'language-json'
                            },
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 188
                                },
                                __self: this
                            }
                        ),
                        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                            'code',
                            Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                {
                                    parentName: 'pre'
                                },
                                {
                                    className: 'language-json'
                                },
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 190
                                    },
                                    __self: this
                                }
                            ),
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token comment'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 192
                                        },
                                        __self: this
                                    }
                                ),
                                '// /api/unsplash'
                            ),
                            '\n\n',
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token punctuation'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 196
                                        },
                                        __self: this
                                    }
                                ),
                                '{'
                            ),
                            '\n    ',
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token property'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 199
                                        },
                                        __self: this
                                    }
                                ),
                                '"downloads"'
                            ),
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token operator'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 201
                                        },
                                        __self: this
                                    }
                                ),
                                ':'
                            ),
                            ' ',
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token number'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 203
                                        },
                                        __self: this
                                    }
                                ),
                                '7995'
                            ),
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token punctuation'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 205
                                        },
                                        __self: this
                                    }
                                ),
                                ','
                            ),
                            '\n    ',
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token property'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 208
                                        },
                                        __self: this
                                    }
                                ),
                                '"views"'
                            ),
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token operator'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 210
                                        },
                                        __self: this
                                    }
                                ),
                                ':'
                            ),
                            ' ',
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token number'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 212
                                        },
                                        __self: this
                                    }
                                ),
                                '1134429'
                            ),
                            '\n',
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token punctuation'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 215
                                        },
                                        __self: this
                                    }
                                ),
                                '}'
                            ),
                            '\n'
                        )
                    ),
                    Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                        'pre',
                        Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                            {
                                className: 'language-python'
                            },
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 219
                                },
                                __self: this
                            }
                        ),
                        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                            'code',
                            Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                {
                                    parentName: 'pre'
                                },
                                {
                                    className: 'language-python'
                                },
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 221
                                    },
                                    __self: this
                                }
                            ),
                            'venue_list ',
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token operator'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 223
                                        },
                                        __self: this
                                    }
                                ),
                                '='
                            ),
                            ' ',
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token punctuation'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 225
                                        },
                                        __self: this
                                    }
                                ),
                                '['
                            ),
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token punctuation'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 227
                                        },
                                        __self: this
                                    }
                                ),
                                ']'
                            ),
                            '\n',
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token keyword'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 230
                                        },
                                        __self: this
                                    }
                                ),
                                'try'
                            ),
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token punctuation'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 232
                                        },
                                        __self: this
                                    }
                                ),
                                ':'
                            ),
                            '\n    data ',
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token operator'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 235
                                        },
                                        __self: this
                                    }
                                ),
                                '='
                            ),
                            ' make_request',
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token punctuation'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 237
                                        },
                                        __self: this
                                    }
                                ),
                                '('
                            ),
                            'url',
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token punctuation'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 239
                                        },
                                        __self: this
                                    }
                                ),
                                ')'
                            ),
                            '\n',
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token keyword'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 242
                                        },
                                        __self: this
                                    }
                                ),
                                'for'
                            ),
                            ' item ',
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token keyword'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 244
                                        },
                                        __self: this
                                    }
                                ),
                                'in'
                            ),
                            ' data',
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token punctuation'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 246
                                        },
                                        __self: this
                                    }
                                ),
                                '['
                            ),
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token string'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 248
                                        },
                                        __self: this
                                    }
                                ),
                                "'response'"
                            ),
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token punctuation'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 250
                                        },
                                        __self: this
                                    }
                                ),
                                ']'
                            ),
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token punctuation'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 252
                                        },
                                        __self: this
                                    }
                                ),
                                '['
                            ),
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token string'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 254
                                        },
                                        __self: this
                                    }
                                ),
                                "'groups'"
                            ),
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token punctuation'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 256
                                        },
                                        __self: this
                                    }
                                ),
                                ']'
                            ),
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token punctuation'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 258
                                        },
                                        __self: this
                                    }
                                ),
                                '['
                            ),
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token number'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 260
                                        },
                                        __self: this
                                    }
                                ),
                                '0'
                            ),
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token punctuation'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 262
                                        },
                                        __self: this
                                    }
                                ),
                                ']'
                            ),
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token punctuation'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 264
                                        },
                                        __self: this
                                    }
                                ),
                                '['
                            ),
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token string'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 266
                                        },
                                        __self: this
                                    }
                                ),
                                "'items'"
                            ),
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token punctuation'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 268
                                        },
                                        __self: this
                                    }
                                ),
                                ']'
                            ),
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token punctuation'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 270
                                        },
                                        __self: this
                                    }
                                ),
                                ':'
                            ),
                            '\n    venue ',
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token operator'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 273
                                        },
                                        __self: this
                                    }
                                ),
                                '='
                            ),
                            ' item',
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token punctuation'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 275
                                        },
                                        __self: this
                                    }
                                ),
                                '['
                            ),
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token string'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 277
                                        },
                                        __self: this
                                    }
                                ),
                                "'venue'"
                            ),
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token punctuation'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 279
                                        },
                                        __self: this
                                    }
                                ),
                                ']'
                            ),
                            '\n    venue_list',
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token punctuation'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 282
                                        },
                                        __self: this
                                    }
                                ),
                                '.'
                            ),
                            'append',
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token punctuation'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 284
                                        },
                                        __self: this
                                    }
                                ),
                                '('
                            ),
                            'Business',
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token punctuation'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 286
                                        },
                                        __self: this
                                    }
                                ),
                                '('
                            ),
                            '\n        venue',
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token punctuation'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 289
                                        },
                                        __self: this
                                    }
                                ),
                                '['
                            ),
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token string'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 291
                                        },
                                        __self: this
                                    }
                                ),
                                "'name'"
                            ),
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token punctuation'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 293
                                        },
                                        __self: this
                                    }
                                ),
                                ']'
                            ),
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token punctuation'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 295
                                        },
                                        __self: this
                                    }
                                ),
                                ','
                            ),
                            '\n        venue',
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token punctuation'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 298
                                        },
                                        __self: this
                                    }
                                ),
                                '['
                            ),
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token string'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 300
                                        },
                                        __self: this
                                    }
                                ),
                                "'location'"
                            ),
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token punctuation'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 302
                                        },
                                        __self: this
                                    }
                                ),
                                ']'
                            ),
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token punctuation'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 304
                                        },
                                        __self: this
                                    }
                                ),
                                '['
                            ),
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token string'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 306
                                        },
                                        __self: this
                                    }
                                ),
                                "'address'"
                            ),
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token punctuation'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 308
                                        },
                                        __self: this
                                    }
                                ),
                                ']'
                            ),
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token punctuation'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 310
                                        },
                                        __self: this
                                    }
                                ),
                                ','
                            ),
                            '\n        venue',
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token punctuation'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 313
                                        },
                                        __self: this
                                    }
                                ),
                                '['
                            ),
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token string'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 315
                                        },
                                        __self: this
                                    }
                                ),
                                "'rating'"
                            ),
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token punctuation'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 317
                                        },
                                        __self: this
                                    }
                                ),
                                ']'
                            ),
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token punctuation'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 319
                                        },
                                        __self: this
                                    }
                                ),
                                ','
                            ),
                            '\n        venue',
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token punctuation'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 322
                                        },
                                        __self: this
                                    }
                                ),
                                '['
                            ),
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token string'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 324
                                        },
                                        __self: this
                                    }
                                ),
                                "'ratingSignals'"
                            ),
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token punctuation'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 326
                                        },
                                        __self: this
                                    }
                                ),
                                ']'
                            ),
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token punctuation'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 328
                                        },
                                        __self: this
                                    }
                                ),
                                ','
                            ),
                            '\n        venue',
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token punctuation'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 331
                                        },
                                        __self: this
                                    }
                                ),
                                '['
                            ),
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token string'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 333
                                        },
                                        __self: this
                                    }
                                ),
                                "'stats'"
                            ),
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token punctuation'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 335
                                        },
                                        __self: this
                                    }
                                ),
                                ']'
                            ),
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token punctuation'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 337
                                        },
                                        __self: this
                                    }
                                ),
                                '['
                            ),
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token string'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 339
                                        },
                                        __self: this
                                    }
                                ),
                                "'checkinsCount'"
                            ),
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token punctuation'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 341
                                        },
                                        __self: this
                                    }
                                ),
                                ']'
                            ),
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token punctuation'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 343
                                        },
                                        __self: this
                                    }
                                ),
                                ')'
                            ),
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token punctuation'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 345
                                        },
                                        __self: this
                                    }
                                ),
                                ')'
                            ),
                            '\n',
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token keyword'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 348
                                        },
                                        __self: this
                                    }
                                ),
                                'except'
                            ),
                            ' Exception',
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token punctuation'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 350
                                        },
                                        __self: this
                                    }
                                ),
                                ','
                            ),
                            ' e',
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token punctuation'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 352
                                        },
                                        __self: this
                                    }
                                ),
                                ':'
                            ),
                            '\n    ',
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token keyword'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 355
                                        },
                                        __self: this
                                    }
                                ),
                                'print'
                            ),
                            ' e\n'
                        )
                    ),
                    Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                        'pre',
                        Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                            {
                                className: 'language-css'
                            },
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 359
                                },
                                __self: this
                            }
                        ),
                        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                            'code',
                            Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                {
                                    parentName: 'pre'
                                },
                                {
                                    className: 'language-css'
                                },
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 361
                                    },
                                    __self: this
                                }
                            ),
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token atrule'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 363
                                        },
                                        __self: this
                                    }
                                ),
                                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                    'span',
                                    Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                        {
                                            parentName: 'span'
                                        },
                                        {
                                            className: 'token rule'
                                        },
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 365
                                            },
                                            __self: this
                                        }
                                    ),
                                    '@keyframes'
                                ),
                                ' color'
                            ),
                            ' ',
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token punctuation'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 367
                                        },
                                        __self: this
                                    }
                                ),
                                '{'
                            ),
                            '\n    ',
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token selector'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 370
                                        },
                                        __self: this
                                    }
                                ),
                                '0%'
                            ),
                            ' ',
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token punctuation'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 372
                                        },
                                        __self: this
                                    }
                                ),
                                '{'
                            ),
                            '\n        ',
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token property'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 375
                                        },
                                        __self: this
                                    }
                                ),
                                'fill'
                            ),
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token punctuation'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 377
                                        },
                                        __self: this
                                    }
                                ),
                                ':'
                            ),
                            ' ',
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token hexcode'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 379
                                        },
                                        __self: this
                                    }
                                ),
                                '#99002f'
                            ),
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token punctuation'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 381
                                        },
                                        __self: this
                                    }
                                ),
                                ';'
                            ),
                            '\n    ',
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token punctuation'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 384
                                        },
                                        __self: this
                                    }
                                ),
                                '}'
                            ),
                            '\n    ',
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token selector'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 387
                                        },
                                        __self: this
                                    }
                                ),
                                '50%'
                            ),
                            ' ',
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token punctuation'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 389
                                        },
                                        __self: this
                                    }
                                ),
                                '{'
                            ),
                            '\n        ',
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token property'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 392
                                        },
                                        __self: this
                                    }
                                ),
                                'fill'
                            ),
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token punctuation'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 394
                                        },
                                        __self: this
                                    }
                                ),
                                ':'
                            ),
                            ' ',
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token hexcode'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 396
                                        },
                                        __self: this
                                    }
                                ),
                                '#ffc426'
                            ),
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token punctuation'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 398
                                        },
                                        __self: this
                                    }
                                ),
                                ';'
                            ),
                            '\n    ',
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token punctuation'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 401
                                        },
                                        __self: this
                                    }
                                ),
                                '}'
                            ),
                            '\n    ',
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token selector'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 404
                                        },
                                        __self: this
                                    }
                                ),
                                '100%'
                            ),
                            ' ',
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token punctuation'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 406
                                        },
                                        __self: this
                                    }
                                ),
                                '{'
                            ),
                            '\n        ',
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token property'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 409
                                        },
                                        __self: this
                                    }
                                ),
                                'fill'
                            ),
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token punctuation'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 411
                                        },
                                        __self: this
                                    }
                                ),
                                ':'
                            ),
                            ' ',
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token hexcode'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 413
                                        },
                                        __self: this
                                    }
                                ),
                                '#99002f'
                            ),
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token punctuation'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 415
                                        },
                                        __self: this
                                    }
                                ),
                                ';'
                            ),
                            '\n    ',
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token punctuation'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 418
                                        },
                                        __self: this
                                    }
                                ),
                                '}'
                            ),
                            '\n',
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token punctuation'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 421
                                        },
                                        __self: this
                                    }
                                ),
                                '}'
                            ),
                            '\n'
                        )
                    ),
                    Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                        'pre',
                        Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                            {
                                className: 'language-yaml'
                            },
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 425
                                },
                                __self: this
                            }
                        ),
                        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                            'code',
                            Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                {
                                    parentName: 'pre'
                                },
                                {
                                    className: 'language-YAML'
                                },
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 427
                                    },
                                    __self: this
                                }
                            ),
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token punctuation'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 429
                                        },
                                        __self: this
                                    }
                                ),
                                '---'
                            ),
                            '\n',
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token key atrule'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 432
                                        },
                                        __self: this
                                    }
                                ),
                                'title'
                            ),
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token punctuation'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 434
                                        },
                                        __self: this
                                    }
                                ),
                                ':'
                            ),
                            ' Migrating to Hugo\n',
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token key atrule'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 437
                                        },
                                        __self: this
                                    }
                                ),
                                'description'
                            ),
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token punctuation'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 439
                                        },
                                        __self: this
                                    }
                                ),
                                ':'
                            ),
                            ' Why I chose this static site generator and the benefits you can receive.\n',
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token key atrule'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 442
                                        },
                                        __self: this
                                    }
                                ),
                                'date'
                            ),
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token punctuation'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 444
                                        },
                                        __self: this
                                    }
                                ),
                                ':'
                            ),
                            ' ',
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token datetime number'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 446
                                        },
                                        __self: this
                                    }
                                ),
                                '2017-09-29'
                            ),
                            '\n',
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token key atrule'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 449
                                        },
                                        __self: this
                                    }
                                ),
                                'images'
                            ),
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token punctuation'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 451
                                        },
                                        __self: this
                                    }
                                ),
                                ':'
                            ),
                            ' ',
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token punctuation'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 453
                                        },
                                        __self: this
                                    }
                                ),
                                '['
                            ),
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token string'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 455
                                        },
                                        __self: this
                                    }
                                ),
                                '"http://www.leejamesrobinson.com/static/images/migrating-to-hugo/hugo.png"'
                            ),
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token punctuation'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 457
                                        },
                                        __self: this
                                    }
                                ),
                                ']'
                            ),
                            '\n',
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token key atrule'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 460
                                        },
                                        __self: this
                                    }
                                ),
                                'categories'
                            ),
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token punctuation'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 462
                                        },
                                        __self: this
                                    }
                                ),
                                ':'
                            ),
                            '\n  ',
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token punctuation'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 465
                                        },
                                        __self: this
                                    }
                                ),
                                '-'
                            ),
                            ' code\n',
                            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__['mdx'])(
                                'span',
                                Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__['default'])(
                                    {
                                        parentName: 'code'
                                    },
                                    {
                                        className: 'token punctuation'
                                    },
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 468
                                        },
                                        __self: this
                                    }
                                ),
                                '---'
                            ),
                            '\n'
                        )
                    )
                );
            }
            MDXContent.isMDXComponent = true;

            /***/
        }
});
//# sourceMappingURL=sample-code.js.00e77206698dbc66a706.hot-update.js.map
