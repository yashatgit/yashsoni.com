(window.webpackJsonp = window.webpackJsonp || []).push([
    [7],
    {
        '65Hy': function(e, t, n) {
            var a = n('q1tI'),
                i = n.n(a),
                o = n('vOnD'),
                l = n('Bml6'),
                r = i.a.createElement,
                d = o.default.time.withConfig({displayName: 'date__StyledDate', componentId: 'sc-1nzrcqs-0'})(
                    [
                        'color:',
                        ';display:block;font-size:0.9em;margin:0.5em 0 0;text-transform:uppercase;letter-spacing:0.04em;'
                    ],
                    (e) => e.theme.accent
                );
            t.a = (e) => {
                var {children: t} = e;
                return r(d, {dateTime: Object(l.a)(t)}, Object(l.b)(t));
            };
        },
        '7/uR': function(e, t, n) {
            var a = n('vOnD'),
                i = n('vxfB'),
                o = n('1eME'),
                l = a.default.main.withConfig({displayName: 'main__Main', componentId: 'sc-1wd00be-0'})(
                    ['', ';color:', ';margin-bottom:', ';padding:', ';'],
                    i.a,
                    (e) => e.theme.primary,
                    o.b.normal,
                    o.b.normal
                );
            t.a = l;
        },
        BR8T: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/blog',
                function() {
                    return n('YbiN');
                }
            ]);
        },
        'G0F+': function(e, t, n) {
            n.d(t, 'a', function() {
                return p;
            }),
                n.d(t, 'b', function() {
                    return f;
                }),
                n.d(t, 'c', function() {
                    return g;
                });
            var a = n('q1tI'),
                i = n.n(a),
                o = n('vOnD'),
                l = n('vxfB'),
                r = n('1eME'),
                d = n('8AkL'),
                m = i.a.createElement,
                c = (e) => e.toLowerCase().replace(/ /g, '-'),
                s = o.default.h1.withConfig({displayName: 'text__StyledH1', componentId: 'fjye17-0'})(
                    [
                        '',
                        ';color:',
                        ';font-size:32px;margin:0;line-height:1.35;@media (min-width:768px){font-size:2.5em;}'
                    ],
                    l.b,
                    (e) => e.theme.text
                ),
                h = o.default.h2.withConfig({displayName: 'text__StyledH2', componentId: 'fjye17-1'})(
                    [
                        '',
                        ';color:',
                        ';font-size:1.4em;margin:',
                        ' 0 ',
                        ';line-height:1.25;@media (min-width:768px){font-size:36px;}'
                    ],
                    l.b,
                    (e) => e.theme.text,
                    r.b.large,
                    r.b.small
                ),
                u = o.default.h3.withConfig({displayName: 'text__StyledH3', componentId: 'fjye17-2'})(
                    ['', ';color:', ';font-size:20px;margin:', ' 0 ', ';@media (min-width:768px){font-size:24px;}'],
                    l.b,
                    (e) => e.theme.text,
                    r.b.normal,
                    r.b.small
                ),
                p =
                    (o.default.h4.withConfig({displayName: 'text__StyledH4', componentId: 'fjye17-3'})(
                        ['', ';color:', ';font-size:18px;'],
                        l.b,
                        (e) => e.theme.text
                    ),
                    (e) => {
                        var {children: t} = e;
                        return m(s, null, Object(d.a)(t));
                    }),
                f = (e) => {
                    var {children: t} = e;
                    return m(h, {id: c(t)}, Object(d.a)(t));
                },
                g = (e) => {
                    var {children: t} = e;
                    return m(u, {id: c(t)}, Object(d.a)(t));
                };
        },
        YbiN: function(e, t, n) {
            n.r(t);
            var a = n('q1tI'),
                i = n.n(a),
                o = n('vOnD'),
                l = n('aIN1'),
                r = n('7/uR'),
                d = n('MbLX'),
                m = n('PQhJ'),
                c = n('1eME'),
                s = n('65Hy'),
                h = n('G0F+'),
                u = n('1KBa'),
                p = i.a.createElement,
                f = o.default.li.withConfig({displayName: 'article__StyledArticle', componentId: 'sc-1kjvbs1-0'})(
                    [
                        'margin-bottom:',
                        ';transition:all 0.15s ease;+ li{margin:2em 0 0;}h3{margin-top:0;}:hover{h3{transition:all 0.15s ease;color:',
                        ';}}'
                    ],
                    c.b.normal,
                    (e) => e.theme.accent
                ),
                g = Object(o.default)(u.a).withConfig({
                    displayName: 'article__StyledLink',
                    componentId: 'sc-1kjvbs1-1'
                })(
                    ['color:', ';:hover{color:', ';}'],
                    (e) => e.theme.text,
                    (e) => e.theme.accent
                ),
                b = (e) => {
                    var {article: t} = e;
                    return p(
                        f,
                        null,
                        p(g, {href: '/blog/'.concat(t.slug)}, p(s.a, null, t.date), p(h.c, null, t.title))
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
                x = i.a.createElement,
                _ = o.default.h1.withConfig({displayName: 'blog__StyledArticlesTitle', componentId: 'sc-14b53lh-0'})(
                    ['', ';color:', ';font-size:2.5em;margin-bottom:', ';'],
                    w.b,
                    (e) => e.theme.text,
                    c.b.large
                ),
                v = o.default.section.withConfig({displayName: 'blog__StyledArticles', componentId: 'sc-14b53lh-1'})(
                    ['margin-bottom:', ';vertical-align:top;@media (min-width:768px){display:inline-block;}'],
                    c.b.normal
                );
            t.default = () =>
                x(
                    m.a,
                    {
                        description:
                            'Thoughts on the software industry, programming, tech, videography, music, and my personal life.',
                        title: 'Yash Soni - Blog'
                    },
                    x(d.a, null),
                    x(
                        r.a,
                        null,
                        x(
                            v,
                            null,
                            x(_, null, 'Articles'),
                            x(
                                'ul',
                                null,
                                y.map((e) => x(b, {article: e, key: e.slug || e.url}))
                            )
                        )
                    ),
                    x(l.a, null)
                );
        },
        aIN1: function(e, t, n) {
            var a = n('q1tI'),
                i = n.n(a),
                o = n('vOnD'),
                l = n('1KBa'),
                r = i.a.createElement,
                d = o.default.footer.withConfig({displayName: 'footer__StyledFooter', componentId: 'co4dyq-0'})([
                    'flex-shrink:0;text-align:center;'
                ]),
                m = o.default.div.withConfig({displayName: 'footer__Container', componentId: 'co4dyq-1'})([
                    'padding:30px 20px;@media (min-width:737px){margin:0 auto;max-width:41em;padding:45px;}'
                ]);
            t.a = () => r(d, null, r(m, null, r(l.a, {href: '/'}, 'yashsoni.com')));
        }
    },
    [['BR8T', 1, 2, 0, 3]]
]);
