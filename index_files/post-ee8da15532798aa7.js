(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [86],
    {
        6542: function (t, e, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                "/post",
                function () {
                    return r(9135);
                },
            ]);
        },
        9135: function (t, e, r) {
            "use strict";
            r.r(e),
                r.d(e, {
                    __N_SSG: function () {
                        return w;
                    },
                });
            var n = r(5893),
                i = r(7294),
                a = r(1664),
                o = r(7283),
                l = r(3359),
                s = r(7484),
                u = r.n(s),
                c = r(9409),
                f = r(9008),
                d = r(1217),
                g = r(4710);
            function m(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n;
            }
            function b(t, e) {
                return (
                    (function (t) {
                        if (Array.isArray(t)) return t;
                    })(t) ||
                    (function (t, e) {
                        var r = null == t ? null : ("undefined" !== typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
                        if (null != r) {
                            var n,
                                i,
                                a = [],
                                o = !0,
                                l = !1;
                            try {
                                for (r = r.call(t); !(o = (n = r.next()).done) && (a.push(n.value), !e || a.length !== e); o = !0);
                            } catch (s) {
                                (l = !0), (i = s);
                            } finally {
                                try {
                                    o || null == r.return || r.return();
                                } finally {
                                    if (l) throw i;
                                }
                            }
                            return a;
                        }
                    })(t, e) ||
                    h(t, e) ||
                    (function () {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    })()
                );
            }
            function p(t) {
                return (
                    (function (t) {
                        if (Array.isArray(t)) return m(t);
                    })(t) ||
                    (function (t) {
                        if (("undefined" !== typeof Symbol && null != t[Symbol.iterator]) || null != t["@@iterator"]) return Array.from(t);
                    })(t) ||
                    h(t) ||
                    (function () {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    })()
                );
            }
            function h(t, e) {
                if (t) {
                    if ("string" === typeof t) return m(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(r) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? m(t, e) : void 0;
                }
            }
            function v() {
                var t,
                    e,
                    r =
                        ((t = [
                            '\n    query DevBlog($searchString: String!, $offset: Int!, $limit: Int!) {\n        devBlogs(\n            filters: { tag: { startsWith: $searchString } }\n            sort: "date:desc"\n            pagination: { start: $offset, limit: $limit }\n        ) {\n            data {\n                attributes {\n                    mainPageHeaderTitle\n                    title\n                    description\n                    date\n                    slug\n                    imgLink\n                    tag\n                }\n            }\n        }\n    }\n',
                        ]),
                        e || (e = t.slice(0)),
                        Object.freeze(Object.defineProperties(t, { raw: { value: Object.freeze(e) } })));
                return (
                    (v = function () {
                        return r;
                    }),
                    r
                );
            }
            var y = (0, o.Ps)(v()),
                w = !0;
            e.default = (0, d.Pi)(function (t) {
                var e = t.dataProps,
                    r = (0, i.useRef)(1),
                    o = (0, i.useState)(!1),
                    s = o[0],
                    d = o[1],
                    m = (0, i.useRef)(!1),
                    h = b((0, l.t)(y, { variables: { searchString: "", offset: 0, limit: 10 } }), 2),
                    v = h[0],
                    w = h[1].data,
                    j = (0, i.useState)(e),
                    x = j[0],
                    S = j[1],
                    I = (0, i.useRef)(null),
                    _ = (0, i.useMemo)(
                        function () {
                            return (0, g.P)(function () {
                                I.current && Math.floor(0.65 * I.current.offsetHeight) - Math.floor(window.scrollY) < 0 && !s && r.current > 0 && ((m.current = !0), console.log("fetched"), d(!0));
                            }, 500);
                        },
                        [s]
                    ),
                    E = (0, i.useRef)(10);
                return (
                    (0, i.useEffect)(
                        function () {
                            return (
                                window.addEventListener("scroll", _),
                                function () {
                                    return removeEventListener("scroll", _);
                                }
                            );
                        },
                        [_]
                    ),
                    (0, i.useEffect)(
                        function () {
                            s && (v({ variables: { searchString: "", offset: E.current, limit: 10 } }), (m.current = !0), (E.current += 10), d(!1));
                        },
                        [s, v]
                    ),
                    (0, i.useEffect)(
                        function () {
                            w &&
                                ((r.current = w.devBlogs.data.length),
                                S(function (t) {
                                    return p(t).concat(p(w.devBlogs.data));
                                }));
                        },
                        [w]
                    ),
                    (0, n.jsxs)("div", {
                        className: "bg-pageBg/90 overflow-x-hidden",
                        children: [
                            (0, n.jsxs)(f.default, {
                                children: [
                                    (0, n.jsx)("title", { children: "DEV BLOGS | BK Games" }),
                                    (0, n.jsx)("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
                                    (0, n.jsx)("meta", { property: "og:title", content: "DEV BLOGS | BIG Games" }),
                                    (0, n.jsx)("meta", { property: "og:description", content: "Development blogs and updates for BIG Games and our projects!" }),
                                    (0, n.jsx)("meta", { property: "og:image", content: "https://bigblog-storage.s3.us-east-1.amazonaws.com/Logo.png" }),
                                ],
                            }),
                            (0, n.jsx)(c.pR, {
                                children: (0, n.jsxs)("div", {
                                    className: "lg:row-start-2 lg:row-end-3 lg:col-start-2 lg:col-end-3",
                                    ref: I,
                                    children: [
                                        (0, n.jsx)(c.lj, {
                                            blogHeader: e[0].attributes.mainPageHeaderTitle,
                                            headerTitle: e[0].attributes.title,
                                            headerDescription: e[0].attributes.description,
                                            linkText: "Read More",
                                            linkHref: "/post/".concat(e[0].attributes.slug),
                                            blogImgSrc: e[0].attributes.imgLink,
                                            blogMain: !0,
                                            ratioImg: 0.75,
                                        }),
                                        (0, n.jsx)("div", {
                                            className: "lg:grid lg:grid-cols-3 xl:grid-cols-3 lg:gap-2 lg:gap-y-4 lg:max-w-8xl pb-5",
                                            children:
                                                x &&
                                                x.map(function (t, e) {
                                                    return e > 0
                                                        ? (0, n.jsx)(
                                                              a.default,
                                                              {
                                                                  href: "/post/".concat(t.attributes.slug),
                                                                  children: (0, n.jsx)("a", {
                                                                      children: (0, n.jsx)(
                                                                          c.lj,
                                                                          {
                                                                              blogHeader: "",
                                                                              headerTitle: t.attributes.title,
                                                                              headerDescription: t.attributes.description,
                                                                              linkText: "",
                                                                              linkHref: "",
                                                                              withLink: !1,
                                                                              blogImgSrc: t.attributes.imgLink,
                                                                              blogItem: !0,
                                                                              date: u()(t.attributes.date).format("MMMM DD, YYYY"),
                                                                              ratioImg: 0.6,
                                                                          },
                                                                          t.attributes.title
                                                                      ),
                                                                  }),
                                                              },
                                                              t.attributes.title + e
                                                          )
                                                        : null;
                                                }),
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    })
                );
            });
        },
    },
    function (t) {
        t.O(0, [872, 409, 774, 888, 179], function () {
            return (e = 6542), t((t.s = e));
            var e;
        });
        var e = t.O();
        _N_E = e;
    },
]);
