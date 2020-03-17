(window.webpackJsonp = window.webpackJsonp || []).push([
    [11],
    {
        '7/uR': function(e, t, n) {
            var i = n('vOnD'),
                a = n('vxfB'),
                o = n('1eME'),
                l = i.default.main.withConfig({displayName: 'main__Main', componentId: 'sc-1wd00be-0'})(
                    ['', ';color:', ';margin-bottom:', ';padding:', ';'],
                    a.a,
                    (e) => e.theme.primary,
                    o.b.normal,
                    o.b.normal
                );
            t.a = l;
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
            var i = n('q1tI'),
                a = n.n(i),
                o = n('vOnD'),
                l = n('vxfB'),
                r = n('1eME'),
                d = n('8AkL'),
                s = a.a.createElement,
                m = (e) => e.toLowerCase().replace(/ /g, '-'),
                c = o.default.h1.withConfig({displayName: 'text__StyledH1', componentId: 'fjye17-0'})(
                    [
                        '',
                        ';color:',
                        ';font-size:32px;margin:0;line-height:1.35;@media (min-width:768px){font-size:2.5em;}'
                    ],
                    l.b,
                    (e) => e.theme.text
                ),
                u = o.default.h2.withConfig({displayName: 'text__StyledH2', componentId: 'fjye17-1'})(
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
                h = o.default.h3.withConfig({displayName: 'text__StyledH3', componentId: 'fjye17-2'})(
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
                        return s(c, null, Object(d.a)(t));
                    }),
                f = (e) => {
                    var {children: t} = e;
                    return s(u, {id: m(t)}, Object(d.a)(t));
                },
                g = (e) => {
                    var {children: t} = e;
                    return s(h, {id: m(t)}, Object(d.a)(t));
                };
        },
        XHCN: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/til',
                function() {
                    return n('rux4');
                }
            ]);
        },
        aIN1: function(e, t, n) {
            var i = n('q1tI'),
                a = n.n(i),
                o = n('vOnD'),
                l = n('1KBa'),
                r = a.a.createElement,
                d = o.default.footer.withConfig({displayName: 'footer__StyledFooter', componentId: 'co4dyq-0'})([
                    'flex-shrink:0;text-align:center;'
                ]),
                s = o.default.div.withConfig({displayName: 'footer__Container', componentId: 'co4dyq-1'})([
                    'padding:30px 20px;@media (min-width:737px){margin:0 auto;max-width:41em;padding:45px;}'
                ]);
            t.a = () => r(d, null, r(s, null, r(l.a, {href: '/'}, 'yashsoni.com')));
        },
        rux4: function(e, t, n) {
            n.r(t);
            var i = n('q1tI'),
                a = n.n(i),
                o = n('vOnD'),
                l = n('aIN1'),
                r = n('7/uR'),
                d = n('MbLX'),
                s = n('PQhJ'),
                m = n('1eME'),
                c = n('G0F+'),
                u = n('1KBa'),
                h = a.a.createElement,
                p = o.default.li.withConfig({displayName: 'til__StyledArticle', componentId: 'sc-18cxa33-0'})(
                    [
                        'margin-bottom:',
                        ';transition:all 0.15s ease;+ li{margin:2em 0 0;}h3{margin:0;}:hover{h3{transition:all 0.15s ease;color:',
                        ';}}'
                    ],
                    m.b.normal,
                    (e) => e.theme.accent
                ),
                f = Object(o.default)(u.a).withConfig({displayName: 'til__StyledLink', componentId: 'sc-18cxa33-1'})(
                    ['color:', ';:hover{color:', ';}'],
                    (e) => e.theme.text,
                    (e) => e.theme.accent
                ),
                g = (e) => {
                    var {article: t} = e;
                    return h(
                        p,
                        null,
                        h(
                            f,
                            {href: '/til/'.concat(t.slug)},
                            h(c.c, null, t.title),
                            h('div', null, ''.concat(t.title, ' - ').concat(t.ttr, ' read'))
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
                w = a.a.createElement,
                b = o.default.h1.withConfig({displayName: 'til__StyledArticlesTitle', componentId: 'sc-190xyon-0'})(
                    ['', ';color:', ';font-size:2.5em;margin-bottom:', ';'],
                    x.b,
                    (e) => e.theme.text,
                    m.b.xxs
                ),
                _ = o.default.p.withConfig({displayName: 'til__StyledArticlesDesc', componentId: 'sc-190xyon-1'})(
                    ['margin-bottom:', ';'],
                    m.b.large
                ),
                v = o.default.section.withConfig({displayName: 'til__StyledArticles', componentId: 'sc-190xyon-2'})(
                    ['margin-bottom:', ';vertical-align:top;@media (min-width:768px){display:inline-block;}'],
                    m.b.normal
                );
            t.default = () =>
                w(
                    s.a,
                    {
                        description:
                            'Thoughts on the software industry, programming, tech, videography, music, and my personal life.',
                        title: 'Yash Soni - Today I Learned'
                    },
                    w(d.a, null),
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
                                y.map((e) => w(g, {article: e, key: e.slug || e.url}))
                            )
                        )
                    ),
                    w(l.a, null)
                );
        }
    },
    [['XHCN', 1, 2, 0, 3]]
]);
