(window.webpackJsonp = window.webpackJsonp || []).push([
    [5],
    {
        0: function(e, n, t) {
            t('GcxT'), (e.exports = t('nOHt'));
        },
        '1TCz': function(e, n, t) {
            t.r(n);
            var r = t('q1tI'),
                a = t.n(r),
                o = t('8Bbg'),
                i = t.n(o),
                p = t('vOnD'),
                c = t('g+62'),
                u = t('1eME'),
                s = (t('nEVI'), a.a.createElement),
                l = {
                    accent: '#0967D2',
                    accentLight: '#ff5252',
                    body: '#3a4145',
                    code: '#011627',
                    inlineCode: '#fff',
                    inlineCodeBg: '#f3f3f3',
                    lightGrey: u.a.grey[200],
                    primary: u.a.text,
                    secondary: '#fff',
                    text: '#2e2e2e'
                },
                d = {
                    accent: '#47A3F3',
                    accentLight: '#BAE3FF',
                    body: '#F5F7FA',
                    code: '#011627',
                    inlineCode: '#f3f3f3',
                    inlineCodeBg: '#192129',
                    lightGrey: u.a.grey[200],
                    primary: '#F5F7FA',
                    secondary: '#1F2933',
                    text: '#F5F7FA'
                },
                f = (e) => {
                    var {children: n} = e,
                        t = Object(c.a)(!1).value ? d : l;
                    return s(p.ThemeProvider, {theme: t}, n);
                };
            class h extends i.a {
                render() {
                    var {Component: e, pageProps: n} = this.props;
                    return s(f, null, s(e, n));
                }
            }
            n.default = h;
        },
        '8Bbg': function(e, n, t) {
            e.exports = t('B5Ud');
        },
        B5Ud: function(e, n, t) {
            var r = t('AroE');
            (n.__esModule = !0),
                (n.Container = function(e) {
                    0;
                    return e.children;
                }),
                (n.createUrl = c),
                (n.default = void 0);
            var a = r(t('q1tI')),
                o = t('g/15');
            async function i(e) {
                var {Component: n, ctx: t} = e;
                return {pageProps: await (0, o.loadGetInitialProps)(n, t)};
            }
            n.AppInitialProps = o.AppInitialProps;
            class p extends a.default.Component {
                componentDidCatch(e, n) {
                    throw e;
                }
                render() {
                    var {router: e, Component: n, pageProps: t, __N_SSG: r, __N_SSP: o} = this.props;
                    return a.default.createElement(n, Object.assign({}, t, r || o ? {} : {url: c(e)}));
                }
            }
            function c(e) {
                var {pathname: n, asPath: t, query: r} = e;
                return {
                    get query() {
                        return r;
                    },
                    get pathname() {
                        return n;
                    },
                    get asPath() {
                        return t;
                    },
                    back: () => {
                        e.back();
                    },
                    push: (n, t) => e.push(n, t),
                    pushTo: (n, t) => {
                        var r = t ? n : '',
                            a = t || n;
                        return e.push(r, a);
                    },
                    replace: (n, t) => e.replace(n, t),
                    replaceTo: (n, t) => {
                        var r = t ? n : '',
                            a = t || n;
                        return e.replace(r, a);
                    }
                };
            }
            (n.default = p), (p.origGetInitialProps = i), (p.getInitialProps = i);
        },
        GcxT: function(e, n, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/_app',
                function() {
                    return t('1TCz');
                }
            ]);
        },
        nEVI: function(e, n, t) {}
    },
    [[0, 1, 2, 0]]
]);
