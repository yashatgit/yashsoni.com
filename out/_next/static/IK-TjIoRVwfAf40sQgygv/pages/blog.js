(window.webpackJsonp = window.webpackJsonp || []).push([
    [7],
    {
        '65Hy': function(t, e, n) {
            'use strict';
            var i = n('q1tI'),
                a = n.n(i),
                o = n('vOnD'),
                r = n('Bml6'),
                l = a.a.createElement,
                c = o.default.time.withConfig({displayName: 'date__StyledDate', componentId: 'sc-1nzrcqs-0'})(
                    [
                        'color:',
                        ';display:block;font-size:0.9em;margin:0.5em 0 0;text-transform:uppercase;letter-spacing:0.04em;'
                    ],
                    function(t) {
                        return t.theme.accent;
                    }
                );
            e.a = function(t) {
                var e = t.children;
                return l(c, {dateTime: Object(r.a)(e)}, Object(r.b)(e));
            };
        },
        '7/uR': function(t, e, n) {
            'use strict';
            var i = n('vOnD'),
                a = n('vxfB'),
                o = n('1eME'),
                r = i.default.main.withConfig({displayName: 'main__Main', componentId: 'sc-1wd00be-0'})(
                    ['', ';color:', ';margin-bottom:', ';padding:', ';'],
                    a.a,
                    function(t) {
                        return t.theme.primary;
                    },
                    o.b.normal,
                    o.b.normal
                );
            e.a = r;
        },
        BR8T: function(t, e, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/blog',
                function() {
                    return n('YbiN');
                }
            ]);
        },
        'G0F+': function(t, e, n) {
            'use strict';
            n.d(e, 'a', function() {
                return h;
            }),
                n.d(e, 'b', function() {
                    return p;
                }),
                n.d(e, 'c', function() {
                    return g;
                });
            var i = n('q1tI'),
                a = n.n(i),
                o = n('vOnD'),
                r = n('vxfB'),
                l = n('1eME'),
                c = n('8AkL'),
                u = a.a.createElement,
                d = function(t) {
                    return t.toLowerCase().replace(/ /g, '-');
                },
                m = o.default.h1.withConfig({displayName: 'text__StyledH1', componentId: 'fjye17-0'})(
                    [
                        '',
                        ';color:',
                        ';font-size:32px;margin:0;line-height:1.35;@media (min-width:768px){font-size:2.5em;}'
                    ],
                    r.b,
                    function(t) {
                        return t.theme.text;
                    }
                ),
                s = o.default.h2.withConfig({displayName: 'text__StyledH2', componentId: 'fjye17-1'})(
                    [
                        '',
                        ';color:',
                        ';font-size:1.4em;margin:',
                        ' 0 ',
                        ';line-height:1.25;@media (min-width:768px){font-size:36px;}'
                    ],
                    r.b,
                    function(t) {
                        return t.theme.text;
                    },
                    l.b.large,
                    l.b.small
                ),
                f = o.default.h3.withConfig({displayName: 'text__StyledH3', componentId: 'fjye17-2'})(
                    ['', ';color:', ';font-size:20px;margin:', ' 0 ', ';@media (min-width:768px){font-size:24px;}'],
                    r.b,
                    function(t) {
                        return t.theme.text;
                    },
                    l.b.normal,
                    l.b.small
                ),
                h =
                    (o.default.h4.withConfig({displayName: 'text__StyledH4', componentId: 'fjye17-3'})(
                        ['', ';color:', ';font-size:18px;'],
                        r.b,
                        function(t) {
                            return t.theme.text;
                        }
                    ),
                    function(t) {
                        var e = t.children;
                        return u(m, null, Object(c.a)(e));
                    }),
                p = function(t) {
                    var e = t.children;
                    return u(s, {id: d(e)}, Object(c.a)(e));
                },
                g = function(t) {
                    var e = t.children;
                    return u(f, {id: d(e)}, Object(c.a)(e));
                };
        },
        YbiN: function(t, e, n) {
            'use strict';
            n.r(e);
            var i = n('q1tI'),
                a = n.n(i),
                o = n('vOnD'),
                r = n('aIN1'),
                l = n('7/uR'),
                c = n('MbLX'),
                u = n('PQhJ'),
                d = n('1eME'),
                m = n('65Hy'),
                s = n('G0F+'),
                f = n('1KBa'),
                h = a.a.createElement,
                p = o.default.li.withConfig({displayName: 'article__StyledArticle', componentId: 'sc-1kjvbs1-0'})(
                    [
                        'margin-bottom:',
                        ';transition:all 0.15s ease;+ li{margin:2em 0 0;}h3{margin-top:0;}:hover{h3{transition:all 0.15s ease;color:',
                        ';}}'
                    ],
                    d.b.normal,
                    function(t) {
                        return t.theme.accent;
                    }
                ),
                g = Object(o.default)(f.a).withConfig({
                    displayName: 'article__StyledLink',
                    componentId: 'sc-1kjvbs1-1'
                })(
                    ['color:', ';:hover{color:', ';}'],
                    function(t) {
                        return t.theme.text;
                    },
                    function(t) {
                        return t.theme.accent;
                    }
                ),
                b = function(t) {
                    var e = t.article;
                    return h(
                        p,
                        null,
                        h(g, {href: '/blog/'.concat(e.slug)}, h(m.a, null, e.date), h(s.c, null, e.title))
                    );
                },
                y = [
                    {
                        date: 'February 24, 2020',
                        slug: 'sample-code',
                        title: 'Create a Dashboard with Next.js API Routes - Fetching Data with SWR'
                    },
                    {
                        date: 'February 24, 2020',
                        slug: 'sample-code',
                        title: 'Create a Dashboard with Next.js API Routes - Fetching Data with SWR'
                    }
                ],
                w = n('vxfB'),
                x = a.a.createElement,
                _ = o.default.h1.withConfig({displayName: 'blog__StyledArticlesTitle', componentId: 'sc-14b53lh-0'})(
                    ['', ';color:', ';font-size:2.5em;margin-bottom:', ';'],
                    w.b,
                    function(t) {
                        return t.theme.text;
                    },
                    d.b.large
                ),
                v = o.default.section.withConfig({displayName: 'blog__StyledArticles', componentId: 'sc-14b53lh-1'})(
                    ['margin-bottom:', ';vertical-align:top;@media (min-width:768px){display:inline-block;}'],
                    d.b.normal
                );
            e.default = function() {
                return x(
                    u.a,
                    {
                        description:
                            'Thoughts on the software industry, programming, tech, videography, music, and my personal life.',
                        title: 'Yash Soni - Blog'
                    },
                    x(c.a, null),
                    x(
                        l.a,
                        null,
                        x(
                            v,
                            null,
                            x(_, null, 'Articles'),
                            x(
                                'ul',
                                null,
                                y.map(function(t) {
                                    return x(b, {article: t, key: t.slug || t.url});
                                })
                            )
                        )
                    ),
                    x(r.a, null)
                );
            };
        },
        aIN1: function(t, e, n) {
            'use strict';
            var i = n('q1tI'),
                a = n.n(i),
                o = n('vOnD'),
                r = n('1KBa'),
                l = a.a.createElement,
                c = o.default.footer.withConfig({displayName: 'footer__StyledFooter', componentId: 'co4dyq-0'})([
                    'flex-shrink:0;text-align:center;'
                ]),
                u = o.default.div.withConfig({displayName: 'footer__Container', componentId: 'co4dyq-1'})([
                    'padding:30px 20px;@media (min-width:737px){margin:0 auto;max-width:41em;padding:45px;}'
                ]);
            e.a = function() {
                return l(c, null, l(u, null, l(r.a, {href: '/'}, 'yashsoni.com')));
            };
        }
    },
    [['BR8T', 1, 2, 0, 3]]
]);
