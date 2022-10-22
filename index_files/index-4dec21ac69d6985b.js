(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405],
    {
        5301: function (e, t, a) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                "/",
                function () {
                    return a(1164);
                },
            ]);
        },
        1164: function (e, t, a) {
            "use strict";
            a.r(t),
                a.d(t, {
                    __N_SSG: function () {
                        return f;
                    },
                    default: function () {
                        return x;
                    },
                });
            var r = a(5893),
                n = a(9409),
                i = a(9008),
                s = {
                    src: "/_next/static/media/blog.e2269d4f.webp",
                    height: 454,
                    width: 454,
                    blurDataURL: "data:image/webp;base64,UklGRmIAAABXRUJQVlA4IFYAAADwAQCdASoIAAgAAkA4JZACdAEUoJSXjAAA/vBnyogvLniUDTfc2vXoRtt4UCPVMG3EadX96U+HjrIT97ICEAeKATX4iqjX5zGPegOXlQmMdm5O31IAAA==",
                },
                l = a(3578),
                o = a(4184),
                d = a.n(o),
                g = a(7283),
                c = a(6748);
            function u() {
                var e,
                    t,
                    a =
                        ((e = [
                            '\n    query DevBlog {\n        devBlogs(sort: "date:desc", pagination: { start: 0, limit: 1 }) {\n            data {\n                id\n                attributes {\n                    title\n                    description\n                    date\n                    slug\n                    imgLink\n                    tag\n                }\n            }\n        }\n    }\n',
                        ]),
                        t || (t = e.slice(0)),
                        Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })));
                return (
                    (u = function () {
                        return a;
                    }),
                    a
                );
            }
            var m = (0, g.Ps)(u()),
                f = !0,
                x = function (e) {
                    var t = e.counterTime,
                        a = e.counterEndText,
                        o = e.frontImages,
                        g = e.imgObj,
                        u = e.heroTitleDesc,
                        f = (0, l.oR)().state,
                        x = (0, c.a)(m),
                        h = x.loading,
                        v = x.data;
                    f.getCounterTime(t), f.getCounterEndText(a), f.getImgObj(g), f.getHeroTitleDesc(u);
                    var j = d()({ "relative bg-heroBannerBG mt-[80px] lg:mt-[80px]": !0 }),
                        b = d()({ relative: !0 }),
                        A = d()({ "flex flex-col justify-between mt-[6.25rem] lg:mt-[12.5rem] lg:pb-[6.25rem]": !0 });
                    return (0, r.jsxs)("div", {
                        id: "home",
                        className: "bg-pageBg/90 overflow-x-hidden",
                        children: [
                            (0, r.jsxs)(i.default, { children: [(0, r.jsx)("title", { children: "BK Games" }), (0, r.jsx)("meta", { name: "viewport", content: "width=device-width, initial-scale=1" })] }),
                            (0, r.jsx)(n.uh, {}),
                            (0, r.jsxs)("main", {
                                className: j,
                                children: [
                                    (0, r.jsx)(n.yo, { frontImages: o }),
                                    h
                                        ? (0, r.jsx)(n.lj, {
                                              blogHeader: "Latest Dev Blog",
                                              headerTitle: "Pet Simulator X - Easter Update",
                                              headerDescription: "Easter is here and eggs are everywhere! Added Easter Egg Hunt For a limited time, Easter Eggs can be found scattered randomly around the...",
                                              linkText: "Read More",
                                              linkHref: "#",
                                              withInView: !0,
                                              blogImgSrc: s,
                                              frontpage: !0,
                                              dummy: !0,
                                              ratioImg: 0.75,
                                          })
                                        : (0, r.jsx)(n.lj, {
                                              blogHeader: "Latest Dev Blog",
                                              headerTitle: !h && v.devBlogs.data[0].attributes.title,
                                              headerDescription: !h && v.devBlogs.data[0].attributes.description,
                                              linkText: "Read More",
                                              linkHref: "/post/".concat(!h && v.devBlogs.data[0].attributes.slug),
                                              withInView: !0,
                                              blogImgSrc: !h && v.devBlogs.data[0].attributes.imgLink,
                                              frontpage: !0,
                                              ratioImg: 0.75,
                                          }),
                                    (0, r.jsx)(n.Ag, {}),
                                    (0, r.jsx)("span", { id: "ourgames", className: "relative -top-[6.25rem]" }),
                                    (0, r.jsx)(n.gG, {}),
                                ],
                            }),
                            (0, r.jsx)("div", { className: b, children: (0, r.jsx)(n.U8, {}) }),
                            (0, r.jsx)("footer", { className: A, children: (0, r.jsxs)("div", { className: "lg:max-w-7xl m-auto w-full lg:flex lg:flex-row-reverse", children: [(0, r.jsx)(n.$_, {}), (0, r.jsx)(n.Ik, {})] }) }),
                        ],
                    });
                };
        },
    },
    function (e) {
        e.O(0, [872, 409, 774, 888, 179], function () {
            return (t = 5301), e((e.s = t));
            var t;
        });
        var t = e.O();
        _N_E = t;
    },
]);
