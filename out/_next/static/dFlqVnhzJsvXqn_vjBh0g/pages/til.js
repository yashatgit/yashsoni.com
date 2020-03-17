(window.webpackJsonp = window.webpackJsonp || []).push([
    [11],
    {
        '7/uR': function(t, e, n) {
            'use strict';
            var i = n('vOnD'),
                o = n('vxfB'),
                a = n('1eME'),
                l = i.default.main.withConfig({displayName: 'main__Main', componentId: 'sc-1wd00be-0'})(
                    ['', ';color:', ';margin-bottom:', ';padding:', ';'],
                    o.a,
                    function(t) {
                        return t.theme.primary;
                    },
                    a.b.normal,
                    a.b.normal
                );
            e.a = l;
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
                o = n.n(i),
                a = n('vOnD'),
                l = n('vxfB'),
                r = n('1eME'),
                c = n('8AkL'),
                d = o.a.createElement,
                u = function(t) {
                    return t.toLowerCase().replace(/ /g, '-');
                },
                s = a.default.h1.withConfig({displayName: 'text__StyledH1', componentId: 'fjye17-0'})(
                    [
                        '',
                        ';color:',
                        ';font-size:32px;margin:0;line-height:1.35;@media (min-width:768px){font-size:2.5em;}'
                    ],
                    l.b,
                    function(t) {
                        return t.theme.text;
                    }
                ),
                m = a.default.h2.withConfig({displayName: 'text__StyledH2', componentId: 'fjye17-1'})(
                    [
                        '',
                        ';color:',
                        ';font-size:1.4em;margin:',
                        ' 0 ',
                        ';line-height:1.25;@media (min-width:768px){font-size:36px;}'
                    ],
                    l.b,
                    function(t) {
                        return t.theme.text;
                    },
                    r.b.large,
                    r.b.small
                ),
                f = a.default.h3.withConfig({displayName: 'text__StyledH3', componentId: 'fjye17-2'})(
                    ['', ';color:', ';font-size:20px;margin:', ' 0 ', ';@media (min-width:768px){font-size:24px;}'],
                    l.b,
                    function(t) {
                        return t.theme.text;
                    },
                    r.b.normal,
                    r.b.small
                ),
                h =
                    (a.default.h4.withConfig({displayName: 'text__StyledH4', componentId: 'fjye17-3'})(
                        ['', ';color:', ';font-size:18px;'],
                        l.b,
                        function(t) {
                            return t.theme.text;
                        }
                    ),
                    function(t) {
                        var e = t.children;
                        return d(s, null, Object(c.a)(e));
                    }),
                p = function(t) {
                    var e = t.children;
                    return d(m, {id: u(e)}, Object(c.a)(e));
                },
                g = function(t) {
                    var e = t.children;
                    return d(f, {id: u(e)}, Object(c.a)(e));
                };
        },
        XHCN: function(t, e, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/til',
                function() {
                    return n('rux4');
                }
            ]);
        },
        aIN1: function(t, e, n) {
            'use strict';
            var i = n('q1tI'),
                o = n.n(i),
                a = n('vOnD'),
                l = n('1KBa'),
                r = o.a.createElement,
                c = a.default.footer.withConfig({displayName: 'footer__StyledFooter', componentId: 'co4dyq-0'})([
                    'flex-shrink:0;text-align:center;'
                ]),
                d = a.default.div.withConfig({displayName: 'footer__Container', componentId: 'co4dyq-1'})([
                    'padding:30px 20px;@media (min-width:737px){margin:0 auto;max-width:41em;padding:45px;}'
                ]);
            e.a = function() {
                return r(c, null, r(d, null, r(l.a, {href: '/'}, 'yashsoni.com')));
            };
        },
        rux4: function(t, e, n) {
            'use strict';
            n.r(e);
            var i = n('q1tI'),
                o = n.n(i),
                a = n('vOnD'),
                l = n('aIN1'),
                r = n('7/uR'),
                c = n('MbLX'),
                d = n('PQhJ'),
                u = n('1eME'),
                s = n('G0F+'),
                m = n('1KBa'),
                f = o.a.createElement,
                h = a.default.li.withConfig({displayName: 'til__StyledArticle', componentId: 'sc-18cxa33-0'})(
                    [
                        'margin-bottom:',
                        ';transition:all 0.15s ease;+ li{margin:2em 0 0;}h3{margin:0;}:hover{h3{transition:all 0.15s ease;color:',
                        ';}}'
                    ],
                    u.b.normal,
                    function(t) {
                        return t.theme.accent;
                    }
                ),
                p = Object(a.default)(m.a).withConfig({displayName: 'til__StyledLink', componentId: 'sc-18cxa33-1'})(
                    ['color:', ';:hover{color:', ';}'],
                    function(t) {
                        return t.theme.text;
                    },
                    function(t) {
                        return t.theme.accent;
                    }
                ),
                g = function(t) {
                    var e = t.article;
                    return f(
                        h,
                        null,
                        f(
                            p,
                            {href: '/til/'.concat(e.slug)},
                            f(s.c, null, e.title),
                            f('div', null, ''.concat(e.title, ' - ').concat(e.ttr, ' read'))
                        )
                    );
                },
                y = [
                    {
                        date: 'February 24, 2020',
                        slug: 'sample-code',
                        title: 'Continuous delivery',
                        desc: 'Ideas and tools to help getting there',
                        ttr: '3 mins'
                    },
                    {
                        date: 'February 24, 2020',
                        slug: 'sample-code',
                        title: 'Continuous delivery',
                        desc: 'Ideas and tools to help getting there',
                        ttr: '3 mins'
                    }
                ],
                x = n('vxfB'),
                w = o.a.createElement,
                b = a.default.h1.withConfig({displayName: 'til__StyledArticlesTitle', componentId: 'sc-190xyon-0'})(
                    ['', ';color:', ';font-size:2.5em;margin-bottom:', ';'],
                    x.b,
                    function(t) {
                        return t.theme.text;
                    },
                    u.b.xxs
                ),
                _ = a.default.p.withConfig({displayName: 'til__StyledArticlesDesc', componentId: 'sc-190xyon-1'})(
                    ['margin-bottom:', ';'],
                    u.b.large
                ),
                v = a.default.section.withConfig({displayName: 'til__StyledArticles', componentId: 'sc-190xyon-2'})(
                    ['margin-bottom:', ';vertical-align:top;@media (min-width:768px){display:inline-block;}'],
                    u.b.normal
                );
            e.default = function() {
                return w(
                    d.a,
                    {
                        description:
                            'Thoughts on the software industry, programming, tech, videography, music, and my personal life.',
                        title: 'Yash Soni - Today I Learned'
                    },
                    w(c.a, null),
                    w(
                        r.a,
                        null,
                        w(
                            v,
                            null,
                            w(b, null, 'Today I Learned'),
                            w(
                                _,
                                null,
                                'This is not a blog, just a collection of small bits and pieces of knowledge I picked up on my way. We learn something new every day, so I wanted to keep that gained knowledge accessible for later. It also makes sharing easier. Most of it is just random thoughts and code snippets, with links to further resources.'
                            ),
                            w(
                                'ul',
                                null,
                                y.map(function(t) {
                                    return w(g, {article: t, key: t.slug || t.url});
                                })
                            )
                        )
                    ),
                    w(l.a, null)
                );
            };
        }
    },
    [['XHCN', 1, 2, 0, 3]]
]);
