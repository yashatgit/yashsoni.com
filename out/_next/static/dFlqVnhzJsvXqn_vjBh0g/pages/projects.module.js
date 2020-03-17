(window.webpackJsonp = window.webpackJsonp || []).push([
    [10],
    {
        '7/uR': function(e, t, n) {
            var o = n('vOnD'),
                a = n('vxfB'),
                i = n('1eME'),
                l = o.default.main.withConfig({displayName: 'main__Main', componentId: 'sc-1wd00be-0'})(
                    ['', ';color:', ';margin-bottom:', ';padding:', ';'],
                    a.a,
                    (e) => e.theme.primary,
                    i.b.normal,
                    i.b.normal
                );
            t.a = l;
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
            n.r(t);
            var o = n('q1tI'),
                a = n.n(o),
                i = n('aIN1'),
                l = n('7/uR'),
                r = n('MbLX'),
                c = n('PQhJ'),
                d = n('vOnD'),
                m = n('1eME'),
                p = [
                    {
                        description: 'The complete video course for building applications with Next.js and React.',
                        link: 'https://masteringnextjs.com',
                        name: '\u{1f3c6} Mastering Next.js'
                    },
                    {
                        description: 'Helping companies build, manage, and scale effective distributed teams.',
                        link: 'https://beyondhq.co',
                        name: '\u2708\ufe0f BeyondHQ'
                    },
                    {
                        description: 'The best tech companies in the greater DSM area.',
                        link: 'https://dsmtech.io',
                        name: '\u{1f680} dsmtech'
                    },
                    {
                        description: 'Electron app to convert and download YouTube videos as MP3s.',
                        link: 'https://github.com/leerob/youtube-to-mp3',
                        name: '\u26a1\ufe0f youtube-to-mp3'
                    },
                    {
                        description: 'Python script to analyze your Facebook data export.',
                        link: 'https://github.com/leerob/facebook-data-analyzer',
                        name: '\u{1f4ca} facebook-data-analyzer'
                    },
                    {
                        description: 'Python clone of Space Invaders arcade game.',
                        link: 'https://github.com/leerob/Space_Invaders',
                        name: '\u{1f47e} space-invaders'
                    }
                ],
                s = a.a.createElement,
                h = d.default.h4.withConfig({
                    displayName: 'project-description__StyledProjectDescription',
                    componentId: 'sc-1x6s3b5-0'
                })(['color:', ';font-size:14px;font-weight:lighter;'], (e) => e.theme.body),
                u = (e) => {
                    var {children: t} = e;
                    return s(h, null, t);
                },
                f = a.a.createElement,
                b = d.default.a.withConfig({displayName: 'project-link__StyledProjectLink', componentId: 'i8pi7x-0'})([
                    'text-decoration:none;'
                ]),
                g = (e) => {
                    var {children: t, href: n} = e;
                    return f(b, {href: n}, t);
                },
                y = n('vxfB'),
                w = a.a.createElement,
                v = d.default.h3.withConfig({displayName: 'project-name__StyledProjectName', componentId: 'h5v7tk-0'})(
                    ['', ';color:', ';font-size:20px;margin:', ' 0 0.2em;@media (min-width:768px){font-size:24px;}'],
                    y.b,
                    (e) => e.theme.text,
                    m.b.normal
                ),
                _ = (e) => {
                    var {children: t} = e;
                    return w(v, null, t);
                },
                j = a.a.createElement,
                x = d.default.li.withConfig({displayName: 'project__StyledProject', componentId: 'qvo3mo-0'})(
                    ['margin-bottom:', ';&:last-child{margin-bottom:0;}'],
                    m.b.normal
                ),
                k = (e) => {
                    var {project: t} = e;
                    return j(x, null, j(g, {href: t.link}, j(_, null, t.name), j(u, null, t.description)));
                },
                I = a.a.createElement,
                N = d.default.h1.withConfig({
                    displayName: 'projects-title__StyledProjectsTitle',
                    componentId: 'jibydo-0'
                })(['', ';color:', ';font-size:2.5em;margin-bottom:', ';'], y.b, (e) => e.theme.text, m.b.large),
                E = (e) => {
                    var {children: t} = e;
                    return I(N, null, t);
                },
                P = a.a.createElement,
                S = d.default.section.withConfig({displayName: 'projects__StyledProjects', componentId: 'yltw3j-0'})(
                    ['margin-bottom:', ';vertical-align:top;@media (min-width:768px){display:inline-block;}'],
                    m.b.normal
                ),
                C = () =>
                    P(
                        S,
                        null,
                        P(E, null, 'Projects'),
                        P(
                            'ul',
                            null,
                            p.map((e) => P(k, {key: e.name, project: e}))
                        )
                    ),
                z = a.a.createElement;
            t.default = () =>
                z(
                    c.a,
                    {
                        description: "Projects I've done personally or for clients.",
                        image: '/static/images/speaking/speaking.jpg',
                        title: 'Yash Soni - Projects'
                    },
                    z(r.a, null),
                    z(l.a, null, z(C, null)),
                    z(i.a, null)
                );
        },
        aIN1: function(e, t, n) {
            var o = n('q1tI'),
                a = n.n(o),
                i = n('vOnD'),
                l = n('1KBa'),
                r = a.a.createElement,
                c = i.default.footer.withConfig({displayName: 'footer__StyledFooter', componentId: 'co4dyq-0'})([
                    'flex-shrink:0;text-align:center;'
                ]),
                d = i.default.div.withConfig({displayName: 'footer__Container', componentId: 'co4dyq-1'})([
                    'padding:30px 20px;@media (min-width:737px){margin:0 auto;max-width:41em;padding:45px;}'
                ]);
            t.a = () => r(c, null, r(d, null, r(l.a, {href: '/'}, 'yashsoni.com')));
        }
    },
    [['D85t', 1, 2, 0, 3]]
]);
