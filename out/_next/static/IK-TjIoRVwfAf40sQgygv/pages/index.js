(window.webpackJsonp = window.webpackJsonp || []).push([
    [9],
    {
        RNiq: function(n, e, i) {
            'use strict';
            i.r(e);
            var t = i('q1tI'),
                a = i.n(t),
                o = i('vOnD'),
                l = i('ffb8'),
                s = i('PQhJ'),
                p = i('vxfB'),
                d = i('1eME'),
                m = i('MbLX'),
                h = a.a.createElement,
                r = o.default.main.withConfig({displayName: 'pages__Main', componentId: 'sc-2p4hhh-0'})([
                    'display:flex;flex:1;'
                ]),
                c = o.default.div.withConfig({displayName: 'pages__Content', componentId: 'sc-2p4hhh-1'})(
                    ['', ' margin-bottom:', ';padding:', ';display:flex;flex-direction:column;justify-content:center;'],
                    p.a,
                    d.b.normal,
                    d.b.normal
                ),
                g = o.default.h1.withConfig({displayName: 'pages__Title', componentId: 'sc-2p4hhh-2'})([
                    'display:initial;font-size:1.65em;text-align:center;line-height:1.35;font-weight:bold;margin:0 auto;@media (min-width:737px){font-size:2.3em;}'
                ]),
                u = o.default.div.withConfig({displayName: 'pages__Container', componentId: 'sc-2p4hhh-3'})([
                    'display:flex;flex-direction:column;padding:30px 0;@media (min-width:737px){padding:30px 0 30px;}'
                ]),
                f = o.default.div.withConfig({displayName: 'pages__Details', componentId: 'sc-2p4hhh-4'})(
                    ['max-width:500px;margin:0 auto;text-align:center;margin-bottom:', ';'],
                    d.b.extrasmall
                );
            e.default = function() {
                return h(
                    a.a.Fragment,
                    null,
                    h(
                        s.a,
                        {
                            description:
                                "Yash Soni is a developer, writer, and UI/UX enthusiast. He's interested in all things JAMstack (JavaScript, APIs, Markup) and Design Systems.",
                            image: '/static/images/speaking/speaking.jpg',
                            title: 'Yash Soni'
                        },
                        h(m.a, null),
                        h(
                            r,
                            null,
                            h(
                                c,
                                null,
                                h(u, null, h(g, null, 'Hello!')),
                                h(
                                    f,
                                    null,
                                    "Welcome to my personal slice of the internet \ud83d\udc4b\ud83c\udffc Here you'll find everything you need to know about me - blog posts, work history, projects, contact information, and more!"
                                )
                            )
                        )
                    ),
                    h(l.LogoJsonLd, {logo: 'https://yashsoni.com/static/images/lee.jpg', url: 'https://yashsoni.com'})
                );
            };
        },
        vlRD: function(n, e, i) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/',
                function() {
                    return i('RNiq');
                }
            ]);
        }
    },
    [['vlRD', 1, 2, 0, 3]]
]);
