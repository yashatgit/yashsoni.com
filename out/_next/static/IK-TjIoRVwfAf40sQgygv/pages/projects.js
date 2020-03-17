(window.webpackJsonp = window.webpackJsonp || []).push([
    [10],
    {
        '7/uR': function(e, t, n) {
            'use strict';
            var o = n('vOnD'),
                i = n('vxfB'),
                a = n('1eME'),
                r = o.default.main.withConfig({displayName: 'main__Main', componentId: 'sc-1wd00be-0'})(
                    ['', ';color:', ';margin-bottom:', ';padding:', ';'],
                    i.a,
                    function(e) {
                        return e.theme.primary;
                    },
                    a.b.normal,
                    a.b.normal
                );
            t.a = r;
        },
        D85t: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/projects',
                function() {
                    return n('RHEb');
                }
            ]);
        },
        RHEb: function(e, t, n) {
            'use strict';
            n.r(t);
            var o = n('q1tI'),
                i = n.n(o),
                a = n('aIN1'),
                r = n('7/uR'),
                l = n('MbLX'),
                c = n('PQhJ'),
                d = n('vOnD'),
                m = n('1eME'),
                s = [
                    {
                        description: 'The complete video course for building applications with Next.js and React.',
                        link: 'https://masteringnextjs.com',
                        name: '\ud83c\udfc6 Mastering Next.js'
                    },
                    {
                        description: 'Helping companies build, manage, and scale effective distributed teams.',
                        link: 'https://beyondhq.co',
                        name: '\u2708\ufe0f BeyondHQ'
                    },
                    {
                        description: 'The best tech companies in the greater DSM area.',
                        link: 'https://dsmtech.io',
                        name: '\ud83d\ude80 dsmtech'
                    },
                    {
                        description: 'Electron app to convert and download YouTube videos as MP3s.',
                        link: 'https://github.com/leerob/youtube-to-mp3',
                        name: '\u26a1\ufe0f youtube-to-mp3'
                    },
                    {
                        description: 'Python script to analyze your Facebook data export.',
                        link: 'https://github.com/leerob/facebook-data-analyzer',
                        name: '\ud83d\udcca facebook-data-analyzer'
                    },
                    {
                        description: 'Python clone of Space Invaders arcade game.',
                        link: 'https://github.com/leerob/Space_Invaders',
                        name: '\ud83d\udc7e space-invaders'
                    }
                ],
                p = i.a.createElement,
                u = d.default.h4.withConfig({
                    displayName: 'project-description__StyledProjectDescription',
                    componentId: 'sc-1x6s3b5-0'
                })(['color:', ';font-size:14px;font-weight:lighter;'], function(e) {
                    return e.theme.body;
                }),
                f = function(e) {
                    var t = e.children;
                    return p(u, null, t);
                },
                h = i.a.createElement,
                b = d.default.a.withConfig({displayName: 'project-link__StyledProjectLink', componentId: 'i8pi7x-0'})([
                    'text-decoration:none;'
                ]),
                g = function(e) {
                    var t = e.children,
                        n = e.href;
                    return h(b, {href: n}, t);
                },
                y = n('vxfB'),
                w = i.a.createElement,
                v = d.default.h3.withConfig({displayName: 'project-name__StyledProjectName', componentId: 'h5v7tk-0'})(
                    ['', ';color:', ';font-size:20px;margin:', ' 0 0.2em;@media (min-width:768px){font-size:24px;}'],
                    y.b,
                    function(e) {
                        return e.theme.text;
                    },
                    m.b.normal
                ),
                _ = function(e) {
                    var t = e.children;
                    return w(v, null, t);
                },
                j = i.a.createElement,
                x = d.default.li.withConfig({displayName: 'project__StyledProject', componentId: 'qvo3mo-0'})(
                    ['margin-bottom:', ';&:last-child{margin-bottom:0;}'],
                    m.b.normal
                ),
                k = function(e) {
                    var t = e.project;
                    return j(x, null, j(g, {href: t.link}, j(_, null, t.name), j(f, null, t.description)));
                },
                I = i.a.createElement,
                N = d.default.h1.withConfig({
                    displayName: 'projects-title__StyledProjectsTitle',
                    componentId: 'jibydo-0'
                })(
                    ['', ';color:', ';font-size:2.5em;margin-bottom:', ';'],
                    y.b,
                    function(e) {
                        return e.theme.text;
                    },
                    m.b.large
                ),
                E = function(e) {
                    var t = e.children;
                    return I(N, null, t);
                },
                P = i.a.createElement,
                S = d.default.section.withConfig({displayName: 'projects__StyledProjects', componentId: 'yltw3j-0'})(
                    ['margin-bottom:', ';vertical-align:top;@media (min-width:768px){display:inline-block;}'],
                    m.b.normal
                ),
                C = function() {
                    return P(
                        S,
                        null,
                        P(E, null, 'Projects'),
                        P(
                            'ul',
                            null,
                            s.map(function(e) {
                                return P(k, {key: e.name, project: e});
                            })
                        )
                    );
                },
                z = i.a.createElement;
            t.default = function() {
                return z(
                    c.a,
                    {
                        description: "Projects I've done personally or for clients.",
                        image: '/static/images/speaking/speaking.jpg',
                        title: 'Yash Soni - Projects'
                    },
                    z(l.a, null),
                    z(r.a, null, z(C, null)),
                    z(a.a, null)
                );
            };
        },
        aIN1: function(e, t, n) {
            'use strict';
            var o = n('q1tI'),
                i = n.n(o),
                a = n('vOnD'),
                r = n('1KBa'),
                l = i.a.createElement,
                c = a.default.footer.withConfig({displayName: 'footer__StyledFooter', componentId: 'co4dyq-0'})([
                    'flex-shrink:0;text-align:center;'
                ]),
                d = a.default.div.withConfig({displayName: 'footer__Container', componentId: 'co4dyq-1'})([
                    'padding:30px 20px;@media (min-width:737px){margin:0 auto;max-width:41em;padding:45px;}'
                ]);
            t.a = function() {
                return l(c, null, l(d, null, l(r.a, {href: '/'}, 'yashsoni.com')));
            };
        }
    },
    [['D85t', 1, 2, 0, 3]]
]);
