var e, t = this && this.__extends || function() {
    var e = function(t, n) {
        return (e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            })(t, n)
    };
    return function(t, n) {
        function r() {
            this.constructor = t
        }
        e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
    }
}();

function n(t) {
    return void 0 !== e.Capabilities && e.Capabilities.runtimeType === e.RuntimeType.WXGAME || (t ? console.warn(t + "只在微信小游戏下可用") : console.warn("该接口只在微信小游戏下可用"), !1)
}

function r(t) {
    return void 0 === e.Capabilities || e.Capabilities.runtimeType !== e.RuntimeType.WXGAME || (t ? console.warn("微信小游戏不支持" + t) : console.warn("微信小游戏不支持该接口"), !1)
}

function o() {
    return void 0 !== e.Capabilities && e.Capabilities.runtimeType === e.RuntimeType.WXGAME
}! function(e) {
    var t = function() {
        function t() {}
        return t.openCollection = function(e, n) {
            var r = new t;
            return r._env = n, r.init(e), r
        }, t.prototype.startWatch = function(e, t) {
            var r = this._collection.where(e).watch(t);
            return new n(r)
        }, t.prototype.stopWatch = function(e) {
            e.close()
        }, t.prototype.init = function(t) {
            var n, r = this._env;
            n = r ? e.wxCloud.cloud.database({
                env: r
            }) : e.wxCloud.cloud.database(), this._collection = n.collection(t)
        }, t
    }();
    e.WXDBWatcher = t;
    var n = function() {
        function e(e) {
            this._listener = e
        }
        return e.prototype.close = function() {
            this._listener.close()
        }, e
    }();
    e.WXDBListener = n
}(e || (e = {})),
function(e) {
    ! function(e) {
        var t = function() {
            function e() {}
            return e.init = function(e) {
                o() ? wx.cloud.init(e) : this._webTcb = tcb.init(e)
            }, e.database = function(e) {
                if (o()) return wx.cloud.database(e);
                if (!this._webTcb) throw new Error("egret.wxCloud.cloud尚未初始化，请先调用egret.wxCloud.cloud.init初始化");
                return this._webTcb.database(e)
            }, e.callFunction = function(e) {
                if (o()) return wx.cloud.callFunction(e);
                if (!this._webTcb) throw new Error("egret.wxCloud.cloud尚未初始化，请先调用egret.wxCloud.cloud.init初始化");
                return this._webTcb.callFunction({
                    name: e.name,
                    data: e.data
                }, function(t, n) {
                    t ? e.fail && e.fail(t) : e.success && e.success(n)
                })
            }, e.auth = function(e) {
                if (r("egret.wxCloud.cloud.auth")) {
                    if (!this._webTcb) throw new Error("egret.wxCloud.cloud尚未初始化，请先调用egret.wxCloud.cloud.init初始化");
                    return this._webTcb.auth(e)
                }
                return new s(e)
            }, e
        }();
        e.cloud = t
    }(e.wxCloud || (e.wxCloud = {}))
}(e || (e = {}));
var i = function() {
        function e(e) {}
        return e.prototype.setStore = function(e, t, n) {}, e.prototype.getStore = function(e, t) {
            return {}
        }, e.prototype.removeStore = function(e) {}, e
    }(),
    u = function() {
        function e(e) {}
        return e.prototype.setRefreshToken = function(e) {
            r("Base")
        }, e.prototype.getJwt = function(e, t, n) {
            return r("Base"), {}
        }, e
    }(),
    a = function(e) {
        function n(t, n, r, o, i) {
            var u = e.call(this, t) || this;
            return u.config = t, u.appid = n, u.scope = r, u.loginMode = o, u.state = i, u
        }
        return t(n, e), n.prototype.signIn = function(e) {
            r("WeixinAuthProvider"), e && e(new Error("微信小游戏不支持WeixinAuthProvider"), null)
        }, n.prototype.redirect = function() {
            r("WeixinAuthProvider")
        }, n
    }(u),
    s = function() {
        function e(e) {
            this.config = e
        }
        return e.prototype.weixinAuthProvider = function(e) {
            var t = e.appid,
                n = e.scope,
                o = e.loginMode,
                i = e.state;
            return r("Auth"), new a(this.config, t, n, o, i)
        }, e.prototype.signOut = function() {
            return r("Auth"), Promise.resolve({})
        }, e.prototype.getAccessToken = function() {
            return r("Auth"), Promise.resolve({})
        }, e.prototype.onLoginStateExpire = function(e) {
            r("Auth")
        }, e.prototype.signInWithTicket = function(e) {
            return r("Auth"), Promise.resolve()
        }, e.prototype.shouldRefreshAccessToken = function(e) {
            r("Auth")
        }, e.prototype.getUserInfo = function() {
            return r("Auth"), Promise.resolve({})
        }, e
    }(),
    c = function() {
        function e(e, t) {
            this._config = e, this._db = t
        }
        return Object.defineProperty(e.prototype, "config", {
            get: function() {
                return this._db ? this._db.config : (n("egret.wxCloud.DB.Database"), this._config)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "command", {
            get: function() {
                return this._db ? this._db.command : (n("egret.wxCloud.DB.Database"), new d)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "Geo", {
            get: function() {
                return this._db ? this._db.Geo : (n("egret.wxCloud.DB.Database"), new g)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "serverDate", {
            get: function() {
                return this._db ? this._db.serverDate : (n("egret.wxCloud.DB.Database"), function() {
                    return {
                        options: {
                            offset: 0
                        }
                    }
                })
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "RegExp", {
            get: function() {
                return this._db ? this._db.RegExp : (n("egret.wxCloud.DB.Database"), C)
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.collection = function(e) {
            return this._db ? this._db.collection(e) : (n("egret.wxCloud.DB.Database"), new p("", void 0))
        }, e
    }(),
    f = function() {
        function e() {}
        return e.prototype.where = function(e) {
            return n("egret.wxCloud.DB.Query"), this
        }, e.prototype.orderBy = function(e, t) {
            return n("egret.wxCloud.DB.Query"), this
        }, e.prototype.limit = function(e) {
            return n("egret.wxCloud.DB.Query"), this
        }, e.prototype.skip = function(e) {
            return n("egret.wxCloud.DB.Query"), this
        }, e.prototype.field = function(e) {
            return n("egret.wxCloud.DB.Query"), this
        }, e.prototype.get = function(e) {
            return n("egret.wxCloud.DB.Query"), Promise.resolve({
                data: [],
                errMsg: ""
            })
        }, e.prototype.count = function(e) {
            return n("egret.wxCloud.DB.Query"), Promise.resolve({
                total: 0,
                errMsg: ""
            })
        }, e.prototype.watch = function(e) {
            n("egret.wxCloud.DB.Query")
        }, e
    }(),
    p = function(e) {
        function r(t, n) {
            var r = e.call(this) || this;
            return r.collectionName = t, r.database = n, r
        }
        return t(r, e), r.prototype.doc = function(e) {
            return n("egret.wxCloud.DB.CollectionReference"), new l(e, this.database)
        }, r.prototype.add = function(e) {
            return n("egret.wxCloud.DB.CollectionReference"), Promise.resolve({
                _id: "",
                errMsg: ""
            })
        }, r
    }(f),
    l = function() {
        function e(e, t) {
            this.docId = e, this.database = t
        }
        return e.prototype.field = function(e) {
            return n("egret.wxCloud.DB.DocumentReference"), this
        }, e.prototype.get = function(e) {
            return n("egret.wxCloud.DB.DocumentReference"), Promise.resolve({
                data: [],
                errMsg: ""
            })
        }, e.prototype.set = function(e) {
            return n("egret.wxCloud.DB.DocumentReference"), Promise.resolve({
                _id: this.docId,
                stats: {
                    updated: 0,
                    created: 0
                },
                errMsg: ""
            })
        }, e.prototype.update = function(e) {
            return n("egret.wxCloud.DB.DocumentReference"), Promise.resolve({
                stats: {
                    updated: 0
                },
                errMsg: ""
            })
        }, e.prototype.remove = function(e) {
            return n("egret.wxCloud.DB.DocumentReference"), Promise.resolve({
                stats: {
                    removed: 0
                },
                errMsg: ""
            })
        }, e
    }(),
    d = function() {
        function e() {}
        return e.prototype.eq = function(e) {
            return n("egret.wxCloud.DB.DatabaseCommand"), new y
        }, e.prototype.neq = function(e) {
            return n("egret.wxCloud.DB.DatabaseCommand"), new y
        }, e.prototype.gt = function(e) {
            return n("egret.wxCloud.DB.DatabaseCommand"), new y
        }, e.prototype.gte = function(e) {
            return n("egret.wxCloud.DB.DatabaseCommand"), new y
        }, e.prototype.lt = function(e) {
            return n("egret.wxCloud.DB.DatabaseCommand"), new y
        }, e.prototype.lte = function(e) {
            return n("egret.wxCloud.DB.DatabaseCommand"), new y
        }, e.prototype.in = function(e) {
            return n("egret.wxCloud.DB.DatabaseCommand"), new y
        }, e.prototype.nin = function(e) {
            return n("egret.wxCloud.DB.DatabaseCommand"), new y
        }, e.prototype.geoNear = function(e) {
            return n("egret.wxCloud.DB.DatabaseCommand"), new y
        }, e.prototype.geoWithin = function(e) {
            return n("egret.wxCloud.DB.DatabaseCommand"), new y
        }, e.prototype.geoIntersects = function(e) {
            return n("egret.wxCloud.DB.DatabaseCommand"), new y
        }, e.prototype.and = function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return n("egret.wxCloud.DB.DatabaseCommand"), new h
        }, e.prototype.or = function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return n("egret.wxCloud.DB.DatabaseCommand"), new h
        }, e.prototype.set = function(e) {
            return n("egret.wxCloud.DB.DatabaseCommand"), new m("", [])
        }, e.prototype.remove = function() {
            return n("egret.wxCloud.DB.DatabaseCommand"), new m("", [])
        }, e.prototype.inc = function(e) {
            return n("egret.wxCloud.DB.DatabaseCommand"), new m("", [])
        }, e.prototype.mul = function(e) {
            return n("egret.wxCloud.DB.DatabaseCommand"), new m("", [])
        }, e.prototype.push = function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return n("egret.wxCloud.DB.DatabaseCommand"), new m("", [])
        }, e.prototype.pop = function() {
            return n("egret.wxCloud.DB.DatabaseCommand"), new m("", [])
        }, e.prototype.shift = function() {
            return n("egret.wxCloud.DB.DatabaseCommand"), new m("", [])
        }, e.prototype.unshift = function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return n("egret.wxCloud.DB.DatabaseCommand"), new m("", [])
        }, e
    }(),
    h = function() {
        function e() {}
        return e.prototype._setFieldName = function(e) {
            return n("egret.wxCloud.DB.DatabaseLogicCommand"), this.fieldName = e, this
        }, e.prototype.and = function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return n("egret.wxCloud.DB.DatabaseLogicCommand"), this
        }, e.prototype.or = function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return n("egret.wxCloud.DB.DatabaseLogicCommand"), this
        }, e
    }(),
    y = function(e) {
        function r() {
            return null !== e && e.apply(this, arguments) || this
        }
        return t(r, e), r.prototype._setFieldName = function(e) {
            return n("egret.wxCloud.DB.DatabaseQueryCommand"), this.fieldName = e, this
        }, r.prototype.eq = function(e) {
            return n("egret.wxCloud.DB.DatabaseQueryCommand"), this
        }, r.prototype.neq = function(e) {
            return n("egret.wxCloud.DB.DatabaseQueryCommand"), this
        }, r.prototype.gt = function(e) {
            return n("egret.wxCloud.DB.DatabaseQueryCommand"), this
        }, r.prototype.gte = function(e) {
            return n("egret.wxCloud.DB.DatabaseQueryCommand"), this
        }, r.prototype.lt = function(e) {
            return n("egret.wxCloud.DB.DatabaseQueryCommand"), this
        }, r.prototype.lte = function(e) {
            return n("egret.wxCloud.DB.DatabaseQueryCommand"), this
        }, r.prototype.in = function(e) {
            return n("egret.wxCloud.DB.DatabaseQueryCommand"), this
        }, r.prototype.nin = function(e) {
            return n("egret.wxCloud.DB.DatabaseQueryCommand"), this
        }, r.prototype.geoNear = function(e) {
            return n("egret.wxCloud.DB.DatabaseQueryCommand"), this
        }, r.prototype.geoWithin = function(e) {
            return n("egret.wxCloud.DB.DatabaseQueryCommand"), this
        }, r.prototype.geoIntersects = function(e) {
            return n("egret.wxCloud.DB.DatabaseQueryCommand"), this
        }, r
    }(h),
    m = function() {
        function e(e, t, n) {
            this.operator = e, this.operands = t, this.fieldName = n
        }
        return e.prototype._setFieldName = function(e) {
            return n("egret.wxCloud.DB.DatabaseUpdateCommand"), this.fieldName = e, this
        }, e
    }(),
    g = function() {
        this.Point = v, this.MultiPoint = _, this.LineString = b, this.MultiLineString = w, this.Polygon = O, this.MultiPolygon = E
    },
    v = function() {
        function e(e, t) {
            this.longitude = e, this.latitude = t
        }
        return e.prototype.toJSON = function() {
            return n("egret.wxCloud.DB.GeoPoint"), {}
        }, e.prototype.toString = function() {
            return n("egret.wxCloud.DB.GeoPoint"), ""
        }, e
    }(),
    _ = function() {
        function e(e) {
            this.points = e
        }
        return e.prototype.toJSON = function() {
            return n("egret.wxCloud.DB.GeoMultiPoint"), {
                type: "MultiPoint",
                coordinates: []
            }
        }, e.prototype.toString = function() {
            return n("egret.wxCloud.DB.GeoMultiPoint"), ""
        }, e
    }(),
    b = function() {
        function e(e) {
            this.points = e
        }
        return e.prototype.toJSON = function() {
            return n("egret.wxCloud.DB.GeoLineString"), {
                type: "LineString",
                coordinates: []
            }
        }, e.prototype.toString = function() {
            return n("egret.wxCloud.DB.GeoLineString"), ""
        }, e
    }(),
    w = function() {
        function e(e) {
            this.lines = e
        }
        return e.prototype.toJSON = function() {
            return n("egret.wxCloud.DB.GeoMultiLineString"), {
                type: "GeoMultiLineString",
                coordinates: []
            }
        }, e.prototype.toString = function() {
            return n("egret.wxCloud.DB.GeoMultiLineString"), ""
        }, e
    }(),
    O = function() {
        function e(e) {
            this.lines = e
        }
        return e.prototype.toJSON = function() {
            return n("egret.wxCloud.DB.GeoPolygon"), {
                type: "Polygon",
                coordinates: []
            }
        }, e.prototype.toString = function() {
            return n("egret.wxCloud.DB.GeoPolygon"), ""
        }, e
    }(),
    E = function() {
        function e(e) {
            this.polygons = e
        }
        return e.prototype.toJSON = function() {
            return n("egret.wxCloud.DB.MultiPolygon"), {
                type: "MultiPolygon",
                coordinates: []
            }
        }, e.prototype.toString = function() {
            return n("egret.wxCloud.DB.MultiPolygon"), ""
        }, e
    }(),
    C = function() {
        function e(e) {}
        return Object.defineProperty(e.prototype, "regexp", {
            get: function() {
                return n("egret.wxCloud.DB.RegExp"), ""
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "options", {
            get: function() {
                return n("egret.wxCloud.DB.RegExp"), ""
            },
            enumerable: !0,
            configurable: !0
        }), e
    }();
! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("tcb", [], t) : "object" == typeof exports ? exports.tcb = t() : e.tcb = t()
}(window, function() {
    if (("undefined" == typeof wx || "function" != typeof wx.getUserInfo) && !("undefined" != typeof qg && "function" == typeof qg.getSystemInfoSync || "undefined" != typeof swan && "function" == typeof swan.getSystemInfoSync || "undefined" != typeof my && "function" == typeof my.getSystemInfoSync || "undefined" != typeof qq && "function" == typeof qq.getSystemInfoSync || e.nativeRender || "undefined" == typeof document)) return function(e) {
        var t = window.webpackHotUpdatetcb;
        window.webpackHotUpdatetcb = function(e, n) {
            ! function(e, t) {
                if (w[e] && b[e]) {
                    for (var n in b[e] = !1, t) Object.prototype.hasOwnProperty.call(t, n) && (y[n] = t[n]);
                    0 == --g && 0 === v && S()
                }
            }(e, n), t && t(e, n)
        };
        var n, r = !0,
            o = "724d5223cfd021be164d",
            i = 1e4,
            u = {},
            a = [],
            s = [];

        function c(e) {
            var t = P[e];
            if (!t) return A;
            var r = function(r) {
                    return t.hot.active ? (P[r] ? -1 === P[r].parents.indexOf(e) && P[r].parents.push(e) : (a = [e], n = r), -1 === t.children.indexOf(r) && t.children.push(r)) : (console.warn("[HMR] unexpected require(" + r + ") from disposed module " + e), a = []), A(r)
                },
                o = function(e) {
                    return {
                        configurable: !0,
                        enumerable: !0,
                        get: function() {
                            return A[e]
                        },
                        set: function(t) {
                            A[e] = t
                        }
                    }
                };
            for (var i in A) Object.prototype.hasOwnProperty.call(A, i) && "e" !== i && "t" !== i && Object.defineProperty(r, i, o(i));
            return r.e = function(e) {
                return "ready" === l && d("prepare"), v++, A.e(e).then(t, function(e) {
                    throw t(), e
                });

                function t() {
                    v--, "prepare" === l && (_[e] || C(e), 0 === v && 0 === g && S())
                }
            }, r.t = function(e, t) {
                return 1 & t && (e = r(e)), A.t(e, -2 & t)
            }, r
        }

        function f(e) {
            var t = {
                _acceptedDependencies: {},
                _declinedDependencies: {},
                _selfAccepted: !1,
                _selfDeclined: !1,
                _disposeHandlers: [],
                _main: n !== e,
                active: !0,
                accept: function(e, n) {
                    if (void 0 === e) t._selfAccepted = !0;
                    else if ("function" == typeof e) t._selfAccepted = e;
                    else if ("object" == typeof e)
                        for (var r = 0; r < e.length; r++) t._acceptedDependencies[e[r]] = n || function() {};
                    else t._acceptedDependencies[e] = n || function() {}
                },
                decline: function(e) {
                    if (void 0 === e) t._selfDeclined = !0;
                    else if ("object" == typeof e)
                        for (var n = 0; n < e.length; n++) t._declinedDependencies[e[n]] = !0;
                    else t._declinedDependencies[e] = !0
                },
                dispose: function(e) {
                    t._disposeHandlers.push(e)
                },
                addDisposeHandler: function(e) {
                    t._disposeHandlers.push(e)
                },
                removeDisposeHandler: function(e) {
                    var n = t._disposeHandlers.indexOf(e);
                    n >= 0 && t._disposeHandlers.splice(n, 1)
                },
                check: E,
                apply: T,
                status: function(e) {
                    if (!e) return l;
                    p.push(e)
                },
                addStatusHandler: function(e) {
                    p.push(e)
                },
                removeStatusHandler: function(e) {
                    var t = p.indexOf(e);
                    t >= 0 && p.splice(t, 1)
                },
                data: u[e]
            };
            return n = void 0, t
        }
        var p = [],
            l = "idle";

        function d(e) {
            l = e;
            for (var t = 0; t < p.length; t++) p[t].call(null, e)
        }
        var h, y, m, g = 0,
            v = 0,
            _ = {},
            b = {},
            w = {};

        function O(e) {
            return +e + "" === e ? +e : e
        }

        function E(e) {
            if ("idle" !== l) throw new Error("check() is only allowed in idle status");
            return r = e, d("check"), (t = i, t = t || 1e4, new Promise(function(e, n) {
                if ("undefined" == typeof XMLHttpRequest) return n(new Error("No browser support"));
                try {
                    var r = new XMLHttpRequest,
                        i = A.p + "" + o + ".hot-update.json";
                    r.open("GET", i, !0), r.timeout = t, r.send(null)
                } catch (e) {
                    return n(e)
                }
                r.onreadystatechange = function() {
                    if (4 === r.readyState)
                        if (0 === r.status) n(new Error("Manifest request to " + i + " timed out."));
                        else if (404 === r.status) e();
                    else if (200 !== r.status && 304 !== r.status) n(new Error("Manifest request to " + i + " failed."));
                    else {
                        try {
                            var t = JSON.parse(r.responseText)
                        } catch (e) {
                            return void n(e)
                        }
                        e(t)
                    }
                }
            })).then(function(e) {
                if (!e) return d("idle"), null;
                b = {}, _ = {}, w = e.c, m = e.h, d("prepare");
                var t = new Promise(function(e, t) {
                    h = {
                        resolve: e,
                        reject: t
                    }
                });
                return y = {}, C(0), "prepare" === l && 0 === v && 0 === g && S(), t
            });
            var t
        }

        function C(e) {
            w[e] ? (b[e] = !0, g++, function(e) {
                var t = document.createElement("script");
                t.charset = "utf-8", t.src = A.p + "" + e + "." + o + ".hot-update.js", document.head.appendChild(t)
            }(e)) : _[e] = !0
        }

        function S() {
            d("ready");
            var e = h;
            if (h = null, e)
                if (r) Promise.resolve().then(function() {
                    return T(r)
                }).then(function(t) {
                    e.resolve(t)
                }, function(t) {
                    e.reject(t)
                });
                else {
                    var t = [];
                    for (var n in y) Object.prototype.hasOwnProperty.call(y, n) && t.push(O(n));
                    e.resolve(t)
                }
        }

        function T(t) {
            if ("ready" !== l) throw new Error("apply() is only allowed in ready status");
            var n, r, i, s, c;

            function f(e) {
                for (var t = [e], n = {}, r = t.slice().map(function(e) {
                        return {
                            chain: [e],
                            id: e
                        }
                    }); r.length > 0;) {
                    var o = r.pop(),
                        i = o.id,
                        u = o.chain;
                    if ((s = P[i]) && !s.hot._selfAccepted) {
                        if (s.hot._selfDeclined) return {
                            type: "self-declined",
                            chain: u,
                            moduleId: i
                        };
                        if (s.hot._main) return {
                            type: "unaccepted",
                            chain: u,
                            moduleId: i
                        };
                        for (var a = 0; a < s.parents.length; a++) {
                            var c = s.parents[a],
                                f = P[c];
                            if (f) {
                                if (f.hot._declinedDependencies[i]) return {
                                    type: "declined",
                                    chain: u.concat([c]),
                                    moduleId: i,
                                    parentId: c
                                }; - 1 === t.indexOf(c) && (f.hot._acceptedDependencies[i] ? (n[c] || (n[c] = []), p(n[c], [i])) : (delete n[c], t.push(c), r.push({
                                    chain: u.concat([c]),
                                    id: c
                                })))
                            }
                        }
                    }
                }
                return {
                    type: "accepted",
                    moduleId: e,
                    outdatedModules: t,
                    outdatedDependencies: n
                }
            }

            function p(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n]; - 1 === e.indexOf(r) && e.push(r)
                }
            }
            t = t || {};
            var h = {},
                g = [],
                v = {},
                _ = function() {
                    console.warn("[HMR] unexpected require(" + E.moduleId + ") to disposed module")
                };
            for (var b in y)
                if (Object.prototype.hasOwnProperty.call(y, b)) {
                    var E;
                    c = O(b);
                    var C = !1,
                        S = !1,
                        T = !1,
                        D = "";
                    switch ((E = y[b] ? f(c) : {
                        type: "disposed",
                        moduleId: b
                    }).chain && (D = "\nUpdate propagation: " + E.chain.join(" -> ")), E.type) {
                        case "self-declined":
                            t.onDeclined && t.onDeclined(E), t.ignoreDeclined || (C = new Error("Aborted because of self decline: " + E.moduleId + D));
                            break;
                        case "declined":
                            t.onDeclined && t.onDeclined(E), t.ignoreDeclined || (C = new Error("Aborted because of declined dependency: " + E.moduleId + " in " + E.parentId + D));
                            break;
                        case "unaccepted":
                            t.onUnaccepted && t.onUnaccepted(E), t.ignoreUnaccepted || (C = new Error("Aborted because " + c + " is not accepted" + D));
                            break;
                        case "accepted":
                            t.onAccepted && t.onAccepted(E), S = !0;
                            break;
                        case "disposed":
                            t.onDisposed && t.onDisposed(E), T = !0;
                            break;
                        default:
                            throw new Error("Unexception type " + E.type)
                    }
                    if (C) return d("abort"), Promise.reject(C);
                    if (S)
                        for (c in v[c] = y[c], p(g, E.outdatedModules), E.outdatedDependencies) Object.prototype.hasOwnProperty.call(E.outdatedDependencies, c) && (h[c] || (h[c] = []), p(h[c], E.outdatedDependencies[c]));
                    T && (p(g, [E.moduleId]), v[c] = _)
                }
            var M, L = [];
            for (r = 0; r < g.length; r++) c = g[r], P[c] && P[c].hot._selfAccepted && L.push({
                module: c,
                errorHandler: P[c].hot._selfAccepted
            });
            d("dispose"), Object.keys(w).forEach(function(e) {
                !1 === w[e] && function(e) {
                    delete installedChunks[e]
                }(e)
            });
            for (var N, x, I = g.slice(); I.length > 0;)
                if (c = I.pop(), s = P[c]) {
                    var R = {},
                        j = s.hot._disposeHandlers;
                    for (i = 0; i < j.length; i++)(n = j[i])(R);
                    for (u[c] = R, s.hot.active = !1, delete P[c], delete h[c], i = 0; i < s.children.length; i++) {
                        var U = P[s.children[i]];
                        U && (M = U.parents.indexOf(c)) >= 0 && U.parents.splice(M, 1)
                    }
                }
            for (c in h)
                if (Object.prototype.hasOwnProperty.call(h, c) && (s = P[c]))
                    for (x = h[c], i = 0; i < x.length; i++) N = x[i], (M = s.children.indexOf(N)) >= 0 && s.children.splice(M, 1);
            for (c in d("apply"), o = m, v) Object.prototype.hasOwnProperty.call(v, c) && (e[c] = v[c]);
            var k = null;
            for (c in h)
                if (Object.prototype.hasOwnProperty.call(h, c) && (s = P[c])) {
                    x = h[c];
                    var B = [];
                    for (r = 0; r < x.length; r++)
                        if (N = x[r], n = s.hot._acceptedDependencies[N]) {
                            if (-1 !== B.indexOf(n)) continue;
                            B.push(n)
                        }
                    for (r = 0; r < B.length; r++) {
                        n = B[r];
                        try {
                            n(x)
                        } catch (e) {
                            t.onErrored && t.onErrored({
                                type: "accept-errored",
                                moduleId: c,
                                dependencyId: x[r],
                                error: e
                            }), t.ignoreErrored || k || (k = e)
                        }
                    }
                }
            for (r = 0; r < L.length; r++) {
                var q = L[r];
                c = q.module, a = [c];
                try {
                    A(c)
                } catch (e) {
                    if ("function" == typeof q.errorHandler) try {
                        q.errorHandler(e)
                    } catch (n) {
                        t.onErrored && t.onErrored({
                            type: "self-accept-error-handler-errored",
                            moduleId: c,
                            error: n,
                            originalError: e
                        }), t.ignoreErrored || k || (k = n), k || (k = e)
                    } else t.onErrored && t.onErrored({
                        type: "self-accept-errored",
                        moduleId: c,
                        error: e
                    }), t.ignoreErrored || k || (k = e)
                }
            }
            return k ? (d("fail"), Promise.reject(k)) : (d("idle"), new Promise(function(e) {
                e(g)
            }))
        }
        var P = {};

        function A(t) {
            if (P[t]) return P[t].exports;
            var n = P[t] = {
                i: t,
                l: !1,
                exports: {},
                hot: f(t),
                parents: (s = a, a = [], s),
                children: []
            };
            return e[t].call(n.exports, n, n.exports, c(t)), n.l = !0, n.exports
        }
        return A.m = e, A.c = P, A.d = function(e, t, n) {
            A.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: n
            })
        }, A.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, A.t = function(e, t) {
            if (1 & t && (e = A(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (A.r(n), Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var r in e) A.d(n, r, function(t) {
                    return e[t]
                }.bind(null, r));
            return n
        }, A.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return A.d(t, "a", t), t
        }, A.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, A.p = "", A.h = function() {
            return o
        }, c(74)(A.s = 74)
    }([function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(42);
        ! function(e) {
            for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n])
        }(n(42)), t.SYMBOL_UNSET_FIELD_NAME = r.default.for("UNSET_FIELD_NAME"), t.SYMBOL_UPDATE_COMMAND = r.default.for("UPDATE_COMMAND"), t.SYMBOL_QUERY_COMMAND = r.default.for("QUERY_COMMAND"), t.SYMBOL_LOGIC_COMMAND = r.default.for("LOGIC_COMMAND"), t.SYMBOL_GEO_POINT = r.default.for("GEO_POINT"), t.SYMBOL_GEO_LINE_STRING = r.default.for("SYMBOL_GEO_LINE_STRING"), t.SYMBOL_GEO_POLYGON = r.default.for("SYMBOL_GEO_POLYGON"), t.SYMBOL_GEO_MULTI_POINT = r.default.for("SYMBOL_GEO_MULTI_POINT"), t.SYMBOL_GEO_MULTI_LINE_STRING = r.default.for("SYMBOL_GEO_MULTI_LINE_STRING"), t.SYMBOL_GEO_MULTI_POLYGON = r.default.for("SYMBOL_GEO_MULTI_POLYGON"), t.SYMBOL_SERVER_DATE = r.default.for("SERVER_DATE"), t.SYMBOL_REGEXP = r.default.for("REGEXP")
    }, function(e, t, n) {
        "use strict";
        var r = n(56),
            o = n(108),
            i = Object.prototype.toString;

        function u(e) {
            return "[object Array]" === i.call(e)
        }

        function a(e) {
            return null !== e && "object" == typeof e
        }

        function s(e) {
            return "[object Function]" === i.call(e)
        }

        function c(e, t) {
            if (null != e)
                if ("object" != typeof e && (e = [e]), u(e))
                    for (var n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
                else
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.call(null, e[o], o, e)
        }
        e.exports = {
            isArray: u,
            isArrayBuffer: function(e) {
                return "[object ArrayBuffer]" === i.call(e)
            },
            isBuffer: o,
            isFormData: function(e) {
                return "undefined" != typeof FormData && e instanceof FormData
            },
            isArrayBufferView: function(e) {
                return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
            },
            isString: function(e) {
                return "string" == typeof e
            },
            isNumber: function(e) {
                return "number" == typeof e
            },
            isObject: a,
            isUndefined: function(e) {
                return void 0 === e
            },
            isDate: function(e) {
                return "[object Date]" === i.call(e)
            },
            isFile: function(e) {
                return "[object File]" === i.call(e)
            },
            isBlob: function(e) {
                return "[object Blob]" === i.call(e)
            },
            isFunction: s,
            isStream: function(e) {
                return a(e) && s(e.pipe)
            },
            isURLSearchParams: function(e) {
                return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
            },
            isStandardBrowserEnv: function() {
                return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document
            },
            forEach: c,
            merge: function e() {
                var t = {};

                function n(n, r) {
                    "object" == typeof t[r] && "object" == typeof n ? t[r] = e(t[r], n) : t[r] = n
                }
                for (var r = 0, o = arguments.length; r < o; r++) c(arguments[r], n);
                return t
            },
            deepMerge: function e() {
                var t = {};

                function n(n, r) {
                    "object" == typeof t[r] && "object" == typeof n ? t[r] = e(t[r], n) : t[r] = "object" == typeof n ? e({}, n) : n
                }
                for (var r = 0, o = arguments.length; r < o; r++) c(arguments[r], n);
                return t
            },
            extend: function(e, t, n) {
                return c(t, function(t, o) {
                    e[o] = n && "function" == typeof t ? r(t, n) : t
                }), e
            },
            trim: function(e) {
                return e.replace(/^\s*/, "").replace(/\s*$/, "")
            }
        }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(42);
        t.getType = function(e) {
            return Object.prototype.toString.call(e).slice(8, -1).toLowerCase()
        }, t.isObject = function(e) {
            return "object" === t.getType(e)
        }, t.isString = function(e) {
            return "string" === t.getType(e)
        }, t.isNumber = function(e) {
            return "number" === t.getType(e)
        }, t.isPromise = function(e) {
            return "promise" === t.getType(e)
        }, t.isFunction = function(e) {
            return "function" == typeof e
        }, t.isArray = function(e) {
            return Array.isArray(e)
        }, t.isDate = function(e) {
            return "date" === t.getType(e)
        }, t.isRegExp = function(e) {
            return "regexp" === t.getType(e)
        }, t.isInternalObject = function(e) {
            return e && e._internalType instanceof r.InternalSymbol
        }, t.isPlainObject = function(e) {
            if ("object" != typeof e || null === e) return !1;
            for (var t = e; null !== Object.getPrototypeOf(t);) t = Object.getPrototypeOf(t);
            return Object.getPrototypeOf(e) === t
        }
    }, function(e, t) {
        var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = n)
    }, function(e, t) {
        var n = {}.hasOwnProperty;
        e.exports = function(e, t) {
            return n.call(e, t)
        }
    }, function(e, t, n) {
        var r = n(6),
            o = n(15);
        e.exports = n(7) ? function(e, t, n) {
            return r.f(e, t, o(1, n))
        } : function(e, t, n) {
            return e[t] = n, e
        }
    }, function(e, t, n) {
        var r = n(13),
            o = n(46),
            i = n(24),
            u = Object.defineProperty;
        t.f = n(7) ? Object.defineProperty : function(e, t, n) {
            if (r(e), t = i(t, !0), r(n), o) try {
                return u(e, t, n)
            } catch (e) {}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
            return "value" in n && (e[t] = n.value), e
        }
    }, function(e, t, n) {
        e.exports = !n(14)(function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    }, function(e, t, n) {
        var r = n(86),
            o = n(23);
        e.exports = function(e) {
            return r(o(e))
        }
    }, function(e, t, n) {
        var r = n(28)("wks"),
            o = n(16),
            i = n(3).Symbol,
            u = "function" == typeof i;
        (e.exports = function(e) {
            return r[e] || (r[e] = u && i[e] || (u ? i : o)("Symbol." + e))
        }).store = r
    }, function(e, t) {
        e.exports = function(e) {
            return "object" == typeof e ? null !== e : "function" == typeof e
        }
    }, function(e, t) {
        e.exports = !0
    }, function(e, t) {
        var n = e.exports = {
            version: "2.6.9"
        };
        "number" == typeof __e && (__e = n)
    }, function(e, t, n) {
        var r = n(10);
        e.exports = function(e) {
            if (!r(e)) throw TypeError(e + " is not an object!");
            return e
        }
    }, function(e, t) {
        e.exports = function(e) {
            try {
                return !!e()
            } catch (e) {
                return !0
            }
        }
    }, function(e, t) {
        e.exports = function(e, t) {
            return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t
            }
        }
    }, function(e, t) {
        var n = 0,
            r = Math.random();
        e.exports = function(e) {
            return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + r).toString(36))
        }
    }, function(e, t, n) {
        "use strict";
        var r = function() {
                return (r = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }).apply(this, arguments)
            },
            o = function(e, t, n, r) {
                return new(n || (n = Promise))(function(o, i) {
                    function u(e) {
                        try {
                            s(r.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function a(e) {
                        try {
                            s(r.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function s(e) {
                        e.done ? o(e.value) : new n(function(t) {
                            t(e.value)
                        }).then(u, a)
                    }
                    s((r = r.apply(e, t || [])).next())
                })
            },
            i = function(e, t) {
                var n, r, o, i, u = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function a(i) {
                    return function(a) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        return u.label++, {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        u.label++, r = i[1], i = [0];
                                        continue;
                                    case 7:
                                        i = u.ops.pop(), u.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = (o = u.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            u.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && u.label < o[1]) {
                                            u.label = o[1], o = i;
                                            break
                                        }
                                        if (o && u.label < o[2]) {
                                            u.label = o[2], u.ops.push(i);
                                            break
                                        }
                                        o[2] && u.ops.pop(), u.trys.pop();
                                        continue
                                }
                                i = t.call(e, u)
                            } catch (e) {
                                i = [6, e], r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, a])
                    }
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = n(55),
            a = n(34),
            s = n(35),
            c = n(36),
            f = ["auth.getJwt", "auth.logout", "auth.signInWithTicket"],
            p = function() {
                function e(e) {
                    this.config = e, this.cache = new s.Cache(e.persistence), this.accessTokenKey = a.ACCESS_TOKEN + "_" + e.env, this.accessTokenExpireKey = a.ACCESS_TOKEN_Expire + "_" + e.env, this.refreshTokenKey = a.REFRESH_TOKEN + "_" + e.env
                }
                return e.prototype.refreshAccessToken = function() {
                    return o(this, void 0, void 0, function() {
                        var e, t;
                        return i(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    if (this.cache.removeStore(this.accessTokenKey), this.cache.removeStore(this.accessTokenExpireKey), !(e = this.cache.getStore(this.refreshTokenKey))) throw new Error("[tcb-js-sdk] 未登录CloudBase");
                                    return [4, this.request("auth.getJwt", {
                                        refresh_token: e
                                    })];
                                case 1:
                                    if ("SIGN_PARAM_INVALID" === (t = n.sent()).data.code || "REFRESH_TOKEN_EXPIRED" === t.data.code) throw c.activateEvent("LoginStateExpire"), this.cache.removeStore(this.refreshTokenKey), new Error("[tcb-js-sdk] 刷新access token失败：" + t.data.code);
                                    return t.data.access_token ? (c.activateEvent("refreshAccessToken"), this.cache.setStore(this.accessTokenKey, t.data.access_token), this.cache.setStore(this.accessTokenExpireKey, t.data.access_token_expire + Date.now()), [2, {
                                        accessToken: t.data.access_token,
                                        accessTokenExpire: t.data.access_token_expire
                                    }]) : [2]
                            }
                        })
                    })
                }, e.prototype.getAccessToken = function() {
                    return o(this, void 0, void 0, function() {
                        var e, t, n;
                        return i(this, function(r) {
                            return e = this.cache.getStore(this.accessTokenKey), t = this.cache.getStore(this.accessTokenExpireKey), n = !0, this._shouldRefreshAccessTokenHook && !this._shouldRefreshAccessTokenHook(e, t) && (n = !1), (!e || !t || t < Date.now()) && n ? [2, this.refreshAccessToken()] : [2, {
                                accessToken: e,
                                accessTokenExpire: t
                            }]
                        })
                    })
                }, e.prototype.request = function(e, t, n) {
                    return o(this, void 0, void 0, function() {
                        var o, s, c, p, l, d, h;
                        return i(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return o = "application/x-www-form-urlencoded", s = r({
                                        action: e,
                                        env: this.config.env,
                                        dataVersion: "2019-08-16"
                                    }, t), -1 !== f.indexOf(e) ? [3, 2] : (c = s, [4, this.getAccessToken()]);
                                case 1:
                                    c.access_token = i.sent().accessToken, i.label = 2;
                                case 2:
                                    if ("storage.uploadFile" === e) {
                                        for (l in p = new FormData) p.hasOwnProperty(l) && void 0 !== p[l] && p.append(l, s[l]);
                                        o = "multipart/form-data"
                                    } else o = "application/json;charset=UTF-8", p = s;
                                    return d = {
                                        headers: {
                                            "content-type": o
                                        }
                                    }, n && n.onUploadProgress && (d.onUploadProgress = n.onUploadProgress), [4, u.default.post(a.BASE_URL, p, d)];
                                case 3:
                                    if (h = i.sent(), 200 !== Number(h.status) || !h.data) throw new Error("network request error");
                                    return [2, h]
                            }
                        })
                    })
                }, e.prototype.send = function(e, t) {
                    return o(this, void 0, void 0, function() {
                        var n, r;
                        return i(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    return n = setTimeout(function() {
                                        console.warn("Database operation is longer than 3s. Please check query performance and your network environment.")
                                    }, 3e3), [4, this.request(e, t, {
                                        onUploadProgress: t.onUploadProgress
                                    })];
                                case 1:
                                    return r = o.sent(), clearTimeout(n), "ACCESS_TOKEN_EXPIRED" !== r.data.code || -1 !== f.indexOf(e) ? [3, 3] : [4, this.refreshAccessToken()];
                                case 2:
                                    return o.sent(), [2, this.request(e, t, {
                                        onUploadProgress: t.onUploadProgress
                                    })];
                                case 3:
                                    if (r.data.code) throw new Error("[" + r.data.code + "] " + r.data.message);
                                    return [2, r.data]
                            }
                        })
                    })
                }, e
            }();
        t.Request = p
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n])
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), r(n(39)), r(n(43)), r(n(68)), r(n(128)), r(n(129)), r(n(130))
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r, o = n(0);
        t.SET = "set", t.REMOVE = "remove", t.INC = "inc", t.MUL = "mul", t.PUSH = "push", t.POP = "pop", t.SHIFT = "shift", t.UNSHIFT = "unshift",
            function(e) {
                e.SET = "set", e.REMOVE = "remove", e.INC = "inc", e.MUL = "mul", e.PUSH = "push", e.POP = "pop", e.SHIFT = "shift", e.UNSHIFT = "unshift"
            }(r = t.UPDATE_COMMANDS_LITERAL || (t.UPDATE_COMMANDS_LITERAL = {}));
        var i = function() {
            function e(e, t, n) {
                this._internalType = o.SYMBOL_UPDATE_COMMAND, Object.defineProperties(this, {
                    _internalType: {
                        enumerable: !1,
                        configurable: !1
                    }
                }), this.operator = e, this.operands = t, this.fieldName = n || o.SYMBOL_UNSET_FIELD_NAME
            }
            return e.prototype._setFieldName = function(t) {
                return new e(this.operator, this.operands, t)
            }, e
        }();

        function u(e) {
            return e && e instanceof i && e._internalType === o.SYMBOL_UPDATE_COMMAND
        }
        t.UpdateCommand = i, t.isUpdateCommand = u, t.isKnownUpdateCommand = function(e) {
            return u(e) && e.operator.toUpperCase() in r
        }, t.default = i
    }, function(e, t, n) {
        "use strict";
        var r, o = this && this.__extends || (r = function(e, t) {
            return (r = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                })(e, t)
        }, function(e, t) {
            function n() {
                this.constructor = e
            }
            r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        });
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i, u = n(21),
            a = n(0),
            s = n(18),
            c = n(2);
        t.EQ = "eq", t.NEQ = "neq", t.GT = "gt", t.GTE = "gte", t.LT = "lt", t.LTE = "lte", t.IN = "in", t.NIN = "nin",
            function(e) {
                e.EQ = "eq", e.NEQ = "neq", e.GT = "gt", e.GTE = "gte", e.LT = "lt", e.LTE = "lte", e.IN = "in", e.NIN = "nin", e.GEO_NEAR = "geoNear", e.GEO_WITHIN = "geoWithin", e.GEO_INTERSECTS = "geoIntersects"
            }(i = t.QUERY_COMMANDS_LITERAL || (t.QUERY_COMMANDS_LITERAL = {}));
        var f = function(e) {
            function t(t, n, r) {
                var o = e.call(this, t, n, r) || this;
                return o.operator = t, o._internalType = a.SYMBOL_QUERY_COMMAND, o
            }
            return o(t, e), t.prototype._setFieldName = function(e) {
                return new t(this.operator, this.operands, e)
            }, t.prototype.eq = function(e) {
                var n = new t(i.EQ, [e], this.fieldName);
                return this.and(n)
            }, t.prototype.neq = function(e) {
                var n = new t(i.NEQ, [e], this.fieldName);
                return this.and(n)
            }, t.prototype.gt = function(e) {
                var n = new t(i.GT, [e], this.fieldName);
                return this.and(n)
            }, t.prototype.gte = function(e) {
                var n = new t(i.GTE, [e], this.fieldName);
                return this.and(n)
            }, t.prototype.lt = function(e) {
                var n = new t(i.LT, [e], this.fieldName);
                return this.and(n)
            }, t.prototype.lte = function(e) {
                var n = new t(i.LTE, [e], this.fieldName);
                return this.and(n)
            }, t.prototype.in = function(e) {
                var n = new t(i.IN, e, this.fieldName);
                return this.and(n)
            }, t.prototype.nin = function(e) {
                var n = new t(i.NIN, e, this.fieldName);
                return this.and(n)
            }, t.prototype.geoNear = function(e) {
                if (!(e.geometry instanceof s.Point)) throw new TypeError('"geometry" must be of type Point. Received type ' + typeof e.geometry);
                if (void 0 !== e.maxDistance && !c.isNumber(e.maxDistance)) throw new TypeError('"maxDistance" must be of type Number. Received type ' + typeof e.maxDistance);
                if (void 0 !== e.minDistance && !c.isNumber(e.minDistance)) throw new TypeError('"minDistance" must be of type Number. Received type ' + typeof e.minDistance);
                var n = new t(i.GEO_NEAR, [e], this.fieldName);
                return this.and(n)
            }, t.prototype.geoWithin = function(e) {
                if (!(e.geometry instanceof s.MultiPolygon || e.geometry instanceof s.Polygon)) throw new TypeError('"geometry" must be of type Polygon or MultiPolygon. Received type ' + typeof e.geometry);
                var n = new t(i.GEO_WITHIN, [e], this.fieldName);
                return this.and(n)
            }, t.prototype.geoIntersects = function(e) {
                if (!(e.geometry instanceof s.Point || e.geometry instanceof s.LineString || e.geometry instanceof s.Polygon || e.geometry instanceof s.MultiPoint || e.geometry instanceof s.MultiLineString || e.geometry instanceof s.MultiPolygon)) throw new TypeError('"geometry" must be of type Point, LineString, Polygon, MultiPoint, MultiLineString or MultiPolygon. Received type ' + typeof e.geometry);
                var n = new t(i.GEO_INTERSECTS, [e], this.fieldName);
                return this.and(n)
            }, t
        }(u.LogicCommand);

        function p(e) {
            return e && e instanceof f && e._internalType === a.SYMBOL_QUERY_COMMAND
        }
        t.QueryCommand = f, t.isQueryCommand = p, t.isKnownQueryCommand = function(e) {
            return p(e) && e.operator.toUpperCase() in i
        }, t.isComparisonCommand = function(e) {
            return p(e)
        }, t.default = f
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r, o = n(0),
            i = n(20);
        t.AND = "and", t.OR = "or", t.NOT = "not", t.NOR = "nor",
            function(e) {
                e.AND = "and", e.OR = "or", e.NOT = "not", e.NOR = "nor"
            }(r = t.LOGIC_COMMANDS_LITERAL || (t.LOGIC_COMMANDS_LITERAL = {}));
        var u = function() {
            function e(e, t, n) {
                if (this._internalType = o.SYMBOL_LOGIC_COMMAND, Object.defineProperties(this, {
                        _internalType: {
                            enumerable: !1,
                            configurable: !1
                        }
                    }), this.operator = e, this.operands = t, this.fieldName = n || o.SYMBOL_UNSET_FIELD_NAME, this.fieldName !== o.SYMBOL_UNSET_FIELD_NAME) {
                    t = t.slice(), this.operands = t;
                    for (var r = 0, u = t.length; r < u; r++) {
                        var s = t[r];
                        (a(s) || i.isQueryCommand(s)) && (t[r] = s._setFieldName(this.fieldName))
                    }
                }
            }
            return e.prototype._setFieldName = function(t) {
                var n = this.operands.map(function(n) {
                    return n instanceof e ? n._setFieldName(t) : n
                });
                return new e(this.operator, n, t)
            }, e.prototype.and = function() {
                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                var o = Array.isArray(arguments[0]) ? arguments[0] : Array.from(arguments);
                return o.unshift(this), new e(r.AND, o, this.fieldName)
            }, e.prototype.or = function() {
                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                var o = Array.isArray(arguments[0]) ? arguments[0] : Array.from(arguments);
                return o.unshift(this), new e(r.OR, o, this.fieldName)
            }, e
        }();

        function a(e) {
            return e && e instanceof u && e._internalType === o.SYMBOL_LOGIC_COMMAND
        }
        t.LogicCommand = u, t.isLogicCommand = a, t.isKnownLogicCommand = function(e) {
            return a && e.operator.toUpperCase() in r
        }, t.default = u
    }, function(e, t) {
        var n = Math.ceil,
            r = Math.floor;
        e.exports = function(e) {
            return isNaN(e = +e) ? 0 : (e > 0 ? r : n)(e)
        }
    }, function(e, t) {
        e.exports = function(e) {
            if (null == e) throw TypeError("Can't call method on  " + e);
            return e
        }
    }, function(e, t, n) {
        var r = n(10);
        e.exports = function(e, t) {
            if (!r(e)) return e;
            var n, o;
            if (t && "function" == typeof(n = e.toString) && !r(o = n.call(e))) return o;
            if ("function" == typeof(n = e.valueOf) && !r(o = n.call(e))) return o;
            if (!t && "function" == typeof(n = e.toString) && !r(o = n.call(e))) return o;
            throw TypeError("Can't convert object to primitive value")
        }
    }, function(e, t) {
        e.exports = {}
    }, function(e, t, n) {
        var r = n(50),
            o = n(29);
        e.exports = Object.keys || function(e) {
            return r(e, o)
        }
    }, function(e, t, n) {
        var r = n(28)("keys"),
            o = n(16);
        e.exports = function(e) {
            return r[e] || (r[e] = o(e))
        }
    }, function(e, t, n) {
        var r = n(12),
            o = n(3),
            i = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
        (e.exports = function(e, t) {
            return i[e] || (i[e] = void 0 !== t ? t : {})
        })("versions", []).push({
            version: r.version,
            mode: n(11) ? "pure" : "global",
            copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
        })
    }, function(e, t) {
        e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    }, function(e, t, n) {
        var r = n(6).f,
            o = n(4),
            i = n(9)("toStringTag");
        e.exports = function(e, t, n) {
            e && !o(e = n ? e : e.prototype, i) && r(e, i, {
                configurable: !0,
                value: t
            })
        }
    }, function(e, t, n) {
        t.f = n(9)
    }, function(e, t, n) {
        var r = n(3),
            o = n(12),
            i = n(11),
            u = n(31),
            a = n(6).f;
        e.exports = function(e) {
            var t = o.Symbol || (o.Symbol = i ? {} : r.Symbol || {});
            "_" == e.charAt(0) || e in t || a(t, e, {
                value: u.f(e)
            })
        }
    }, function(e, t) {
        t.f = {}.propertyIsEnumerable
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.ACCESS_TOKEN = "access_token", t.ACCESS_TOKEN_Expire = "access_token_expire", t.REFRESH_TOKEN = "refresh_token", t.BASE_URL = "//tcb-api.tencentcloudapi.com/web"
    }, function(e, t, n) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = function() {
                function t(e) {
                    this.storageClass = "local" === e ? localStorage : "none" === e ? new r : sessionStorage
                }
                return t.prototype.setStore = function(e, t, n) {
                    try {
                        if (!this.storageClass) return
                    } catch (e) {
                        return
                    }
                    var r, o = {};
                    o.version = n || "localCachev1", o.content = t, r = JSON.stringify(o);
                    try {
                        this.storageClass.setItem(e, r)
                    } catch (e) {
                        return
                    }
                }, t.prototype.getStore = function(t, n) {
                    try {
                        if (e && e.env && e.env.tcb_token) return e.env.tcb_token;
                        if (!this.storageClass) return
                    } catch (e) {
                        return ""
                    }
                    n = n || "localCachev1";
                    var r = this.storageClass.getItem(t);
                    return r && r.indexOf(n) >= 0 ? JSON.parse(r).content : ""
                }, t.prototype.removeStore = function(e) {
                    this.storageClass.removeItem(e)
                }, t
            }();
            t.Cache = n;
            var r = function() {
                function e() {
                    window.tcbObject || (window.tcbObject = {})
                }
                return e.prototype.setItem = function(e, t) {
                    window.tcbObject[e] = t
                }, e.prototype.getItem = function(e) {
                    return window.tcbObject[e]
                }, e.prototype.removeItem = function(e) {
                    delete window.tcbObject[e]
                }, e.prototype.clear = function() {
                    delete window.tcbObject
                }, e
            }()
        }).call(this, n(60))
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = new(n(123));
        t.addEventListener = function(e, t) {
            r.on(e, t)
        }, t.activateEvent = function(e, t) {
            r.emit(e, t)
        }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.getQuery = function(e, t) {
            if ("undefined" == typeof window) return !1;
            var n = t || window.location.search,
                r = new RegExp("(^|&)" + e + "=([^&]*)(&|$)"),
                o = n.substr(n.indexOf("?") + 1).match(r);
            return null != o ? o[2] : ""
        }, t.getHash = function(e) {
            var t = window.location.hash.match(new RegExp("[#?&/]" + e + "=([^&#]*)"));
            return t ? t[1] : ""
        }, t.removeParam = function(e, t) {
            var n = t.split("?")[0],
                r = [],
                o = -1 !== t.indexOf("?") ? t.split("?")[1] : "";
            if ("" !== o) {
                for (var i = (r = o.split("&")).length - 1; i >= 0; i -= 1) r[i].split("=")[0] === e && r.splice(i, 1);
                n = n + "?" + r.join("&")
            }
            return n
        }, t.createPromiseCallback = function() {
            var e;
            if (!Promise) {
                (e = function() {}).promise = {};
                var t = function() {
                    throw new Error('Your Node runtime does support ES6 Promises. Set "global.Promise" to your preferred implementation of promises.')
                };
                return Object.defineProperty(e.promise, "then", {
                    get: t
                }), Object.defineProperty(e.promise, "catch", {
                    get: t
                }), e
            }
            var n = new Promise(function(t, n) {
                e = function(e, r) {
                    return e ? n(e) : t(r)
                }
            });
            return e.promise = n, e
        }, t.getWeixinCode = function() {
            return t.getQuery("code") || t.getHash("code")
        }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(18),
            o = n(131),
            i = n(135),
            u = n(41),
            a = n(136),
            s = function() {
                function e(e) {
                    this.config = e, this.Geo = r, this.serverDate = u.ServerDateConstructor, this.command = i.Command, this.RegExp = a.RegExpConstructor
                }
                return e.prototype.collection = function(e) {
                    if (!e) throw new Error("Collection name is required");
                    return new o.CollectionReference(this, e)
                }, e.prototype.createCollection = function(t) {
                    var n = {
                        collectionName: t
                    };
                    return new e.reqClass(this.config).send("database.addCollection", n)
                }, e
            }();
        t.Db = s
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(66),
            o = n(0),
            i = n(2),
            u = function() {
                function e(e, t) {
                    r.Validate.isGeopoint("longitude", e), r.Validate.isGeopoint("latitude", t), this.longitude = e, this.latitude = t
                }
                return e.prototype.parse = function(e) {
                    var t;
                    return (t = {})[e] = {
                        type: "Point",
                        coordinates: [this.longitude, this.latitude]
                    }, t
                }, e.prototype.toJSON = function() {
                    return {
                        type: "Point",
                        coordinates: [this.longitude, this.latitude]
                    }
                }, e.prototype.toReadableString = function() {
                    return "[" + this.longitude + "," + this.latitude + "]"
                }, e.validate = function(e) {
                    return "Point" === e.type && i.isArray(e.coordinates) && r.Validate.isGeopoint("longitude", e.coordinates[0]) && r.Validate.isGeopoint("latitude", e.coordinates[1])
                }, Object.defineProperty(e.prototype, "_internalType", {
                    get: function() {
                        return o.SYMBOL_GEO_POINT
                    },
                    enumerable: !0,
                    configurable: !0
                }), e
            }();
        t.Point = u
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(67),
            o = n(18),
            i = n(41),
            u = function() {
                function e() {}
                return e.formatResDocumentData = function(t) {
                    return t.map(function(t) {
                        return e.formatField(t)
                    })
                }, e.formatField = function(t) {
                    var n = Object.keys(t),
                        i = {};
                    return Array.isArray(t) && (i = []), n.forEach(function(n) {
                        var u, a = t[n];
                        switch (e.whichType(a)) {
                            case r.FieldType.GeoPoint:
                                u = new o.Point(a.coordinates[0], a.coordinates[1]);
                                break;
                            case r.FieldType.GeoLineString:
                                u = new o.LineString(a.coordinates.map(function(e) {
                                    return new o.Point(e[0], e[1])
                                }));
                                break;
                            case r.FieldType.GeoPolygon:
                                u = new o.Polygon(a.coordinates.map(function(e) {
                                    return new o.LineString(e.map(function(e) {
                                        var t = e[0],
                                            n = e[1];
                                        return new o.Point(t, n)
                                    }))
                                }));
                                break;
                            case r.FieldType.GeoMultiPoint:
                                u = new o.MultiPoint(a.coordinates.map(function(e) {
                                    return new o.Point(e[0], e[1])
                                }));
                                break;
                            case r.FieldType.GeoMultiLineString:
                                u = new o.MultiLineString(a.coordinates.map(function(e) {
                                    return new o.LineString(e.map(function(e) {
                                        var t = e[0],
                                            n = e[1];
                                        return new o.Point(t, n)
                                    }))
                                }));
                                break;
                            case r.FieldType.GeoMultiPolygon:
                                u = new o.MultiPolygon(a.coordinates.map(function(e) {
                                    return new o.Polygon(e.map(function(e) {
                                        return new o.LineString(e.map(function(e) {
                                            var t = e[0],
                                                n = e[1];
                                            return new o.Point(t, n)
                                        }))
                                    }))
                                }));
                                break;
                            case r.FieldType.Timestamp:
                                u = new Date(1e3 * a.$timestamp);
                                break;
                            case r.FieldType.Object:
                            case r.FieldType.Array:
                                u = e.formatField(a);
                                break;
                            case r.FieldType.ServerDate:
                                u = new Date(a.$date);
                                break;
                            default:
                                u = a
                        }
                        Array.isArray(i) ? i.push(u) : i[n] = u
                    }), i
                }, e.whichType = function(e) {
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    if (t === r.FieldType.Object) {
                        if (e instanceof o.Point) return r.FieldType.GeoPoint;
                        if (e instanceof Date) return r.FieldType.Timestamp;
                        if (e instanceof i.ServerDate) return r.FieldType.ServerDate;
                        e.$timestamp ? t = r.FieldType.Timestamp : e.$date ? t = r.FieldType.ServerDate : o.Point.validate(e) ? t = r.FieldType.GeoPoint : o.LineString.validate(e) ? t = r.FieldType.GeoLineString : o.Polygon.validate(e) ? t = r.FieldType.GeoPolygon : o.MultiPoint.validate(e) ? t = r.FieldType.GeoMultiPoint : o.MultiLineString.validate(e) ? t = r.FieldType.GeoMultiLineString : o.MultiPolygon.validate(e) && (t = r.FieldType.GeoMultiPolygon)
                    }
                    return t
                }, e.generateDocId = function() {
                    for (var e = "ABCDEFabcdef0123456789", t = "", n = 0; n < 24; n++) t += e.charAt(Math.floor(Math.random() * e.length));
                    return t
                }, e
            }();
        t.Util = u
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(0),
            o = function() {
                function e(e) {
                    var t = (void 0 === e ? {} : e).offset,
                        n = void 0 === t ? 0 : t;
                    this.offset = n
                }
                return Object.defineProperty(e.prototype, "_internalType", {
                    get: function() {
                        return r.SYMBOL_SERVER_DATE
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.parse = function() {
                    return {
                        $date: {
                            offset: this.offset
                        }
                    }
                }, e
            }();
        t.ServerDate = o, t.ServerDateConstructor = function(e) {
            return new o(e)
        }
    }, function(e, t, n) {
        "use strict";
        var r, o = this && this.__extends || (r = function(e, t) {
            return (r = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                })(e, t)
        }, function(e, t) {
            function n() {
                this.constructor = e
            }
            r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        });
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = [],
            u = {},
            a = function(e) {
                function t(t, n) {
                    if (n !== u) throw new TypeError("InternalSymbol cannot be constructed with new operator");
                    return e.call(this, t) || this
                }
                return o(t, e), t.for = function(e) {
                    for (var n = 0, r = i.length; n < r; n++)
                        if (i[n].target === e) return i[n].instance;
                    var o = new t(e, u);
                    return i.push({
                        target: e,
                        instance: o
                    }), o
                }, t
            }(function(e) {
                Object.defineProperties(this, {
                    target: {
                        enumerable: !1,
                        writable: !1,
                        configurable: !1,
                        value: e
                    }
                })
            });
        t.InternalSymbol = a, t.default = a
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(0),
            o = n(39),
            i = n(2),
            u = function() {
                function e(e) {
                    if (!i.isArray(e)) throw new TypeError('"points" must be of type Point[]. Received type ' + typeof e);
                    if (e.length < 2) throw new Error('"points" must contain 2 points at least');
                    e.forEach(function(e) {
                        if (!(e instanceof o.Point)) throw new TypeError('"points" must be of type Point[]. Received type ' + typeof e + "[]")
                    }), this.points = e
                }
                return e.prototype.parse = function(e) {
                    var t;
                    return (t = {})[e] = {
                        type: "LineString",
                        coordinates: this.points.map(function(e) {
                            return e.toJSON().coordinates
                        })
                    }, t
                }, e.prototype.toJSON = function() {
                    return {
                        type: "LineString",
                        coordinates: this.points.map(function(e) {
                            return e.toJSON().coordinates
                        })
                    }
                }, e.validate = function(e) {
                    if ("LineString" !== e.type || !i.isArray(e.coordinates)) return !1;
                    for (var t = 0, n = e.coordinates; t < n.length; t++) {
                        var r = n[t];
                        if (!i.isNumber(r[0]) || !i.isNumber(r[1])) return !1
                    }
                    return !0
                }, e.isClosed = function(e) {
                    var t = e.points[0],
                        n = e.points[e.points.length - 1];
                    if (t.latitude === n.latitude && t.longitude === n.longitude) return !0
                }, Object.defineProperty(e.prototype, "_internalType", {
                    get: function() {
                        return r.SYMBOL_GEO_LINE_STRING
                    },
                    enumerable: !0,
                    configurable: !0
                }), e
            }();
        t.LineString = u
    }, function(e, t, n) {
        "use strict";
        var r = n(11),
            o = n(45),
            i = n(48),
            u = n(5),
            a = n(25),
            s = n(84),
            c = n(30),
            f = n(91),
            p = n(9)("iterator"),
            l = !([].keys && "next" in [].keys()),
            d = function() {
                return this
            };
        e.exports = function(e, t, n, h, y, m, g) {
            s(n, t, h);
            var v, _, b, w = function(e) {
                    if (!l && e in S) return S[e];
                    switch (e) {
                        case "keys":
                        case "values":
                            return function() {
                                return new n(this, e)
                            }
                    }
                    return function() {
                        return new n(this, e)
                    }
                },
                O = t + " Iterator",
                E = "values" == y,
                C = !1,
                S = e.prototype,
                T = S[p] || S["@@iterator"] || y && S[y],
                P = T || w(y),
                A = y ? E ? w("entries") : P : void 0,
                D = "Array" == t && S.entries || T;
            if (D && (b = f(D.call(new e))) !== Object.prototype && b.next && (c(b, O, !0), r || "function" == typeof b[p] || u(b, p, d)), E && T && "values" !== T.name && (C = !0, P = function() {
                    return T.call(this)
                }), r && !g || !l && !C && S[p] || u(S, p, P), a[t] = P, a[O] = d, y)
                if (v = {
                        values: E ? P : w("values"),
                        keys: m ? P : w("keys"),
                        entries: A
                    }, g)
                    for (_ in v) _ in S || i(S, _, v[_]);
                else o(o.P + o.F * (l || C), t, v);
            return v
        }
    }, function(e, t, n) {
        var r = n(3),
            o = n(12),
            i = n(82),
            u = n(5),
            a = n(4),
            s = function(e, t, n) {
                var c, f, p, l = e & s.F,
                    d = e & s.G,
                    h = e & s.S,
                    y = e & s.P,
                    m = e & s.B,
                    g = e & s.W,
                    v = d ? o : o[t] || (o[t] = {}),
                    _ = v.prototype,
                    b = d ? r : h ? r[t] : (r[t] || {}).prototype;
                for (c in d && (n = t), n)(f = !l && b && void 0 !== b[c]) && a(v, c) || (p = f ? b[c] : n[c], v[c] = d && "function" != typeof b[c] ? n[c] : m && f ? i(p, r) : g && b[c] == p ? function(e) {
                    var t = function(t, n, r) {
                        if (this instanceof e) {
                            switch (arguments.length) {
                                case 0:
                                    return new e;
                                case 1:
                                    return new e(t);
                                case 2:
                                    return new e(t, n)
                            }
                            return new e(t, n, r)
                        }
                        return e.apply(this, arguments)
                    };
                    return t.prototype = e.prototype, t
                }(p) : y && "function" == typeof p ? i(Function.call, p) : p, y && ((v.virtual || (v.virtual = {}))[c] = p, e & s.R && _ && !_[c] && u(_, c, p)))
            };
        s.F = 1, s.G = 2, s.S = 4, s.P = 8, s.B = 16, s.W = 32, s.U = 64, s.R = 128, e.exports = s
    }, function(e, t, n) {
        e.exports = !n(7) && !n(14)(function() {
            return 7 != Object.defineProperty(n(47)("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    }, function(e, t, n) {
        var r = n(10),
            o = n(3).document,
            i = r(o) && r(o.createElement);
        e.exports = function(e) {
            return i ? o.createElement(e) : {}
        }
    }, function(e, t, n) {
        e.exports = n(5)
    }, function(e, t, n) {
        var r = n(13),
            o = n(85),
            i = n(29),
            u = n(27)("IE_PROTO"),
            a = function() {},
            s = function() {
                var e, t = n(47)("iframe"),
                    r = i.length;
                for (t.style.display = "none", n(90).appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), s = e.F; r--;) delete s.prototype[i[r]];
                return s()
            };
        e.exports = Object.create || function(e, t) {
            var n;
            return null !== e ? (a.prototype = r(e), n = new a, a.prototype = null, n[u] = e) : n = s(), void 0 === t ? n : o(n, t)
        }
    }, function(e, t, n) {
        var r = n(4),
            o = n(8),
            i = n(87)(!1),
            u = n(27)("IE_PROTO");
        e.exports = function(e, t) {
            var n, a = o(e),
                s = 0,
                c = [];
            for (n in a) n != u && r(a, n) && c.push(n);
            for (; t.length > s;) r(a, n = t[s++]) && (~i(c, n) || c.push(n));
            return c
        }
    }, function(e, t) {
        var n = {}.toString;
        e.exports = function(e) {
            return n.call(e).slice(8, -1)
        }
    }, function(e, t, n) {
        var r = n(23);
        e.exports = function(e) {
            return Object(r(e))
        }
    }, function(e, t) {
        t.f = Object.getOwnPropertySymbols
    }, function(e, t, n) {
        var r = n(50),
            o = n(29).concat("length", "prototype");
        t.f = Object.getOwnPropertyNames || function(e) {
            return r(e, o)
        }
    }, function(e, t, n) {
        e.exports = n(107)
    }, function(e, t, n) {
        "use strict";
        e.exports = function(e, t) {
            return function() {
                for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r];
                return e.apply(t, n)
            }
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(1);

        function o(e) {
            return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
        }
        e.exports = function(e, t, n) {
            if (!t) return e;
            var i;
            if (n) i = n(t);
            else if (r.isURLSearchParams(t)) i = t.toString();
            else {
                var u = [];
                r.forEach(t, function(e, t) {
                    null != e && (r.isArray(e) ? t += "[]" : e = [e], r.forEach(e, function(e) {
                        r.isDate(e) ? e = e.toISOString() : r.isObject(e) && (e = JSON.stringify(e)), u.push(o(t) + "=" + o(e))
                    }))
                }), i = u.join("&")
            }
            if (i) {
                var a = e.indexOf("#"); - 1 !== a && (e = e.slice(0, a)), e += (-1 === e.indexOf("?") ? "?" : "&") + i
            }
            return e
        }
    }, function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            return !(!e || !e.__CANCEL__)
        }
    }, function(e, t, n) {
        "use strict";
        (function(t) {
            var r = n(1),
                o = n(113),
                i = {
                    "Content-Type": "application/x-www-form-urlencoded"
                };

            function u(e, t) {
                !r.isUndefined(e) && r.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
            }
            var a, s = {
                adapter: (void 0 !== t && "[object process]" === Object.prototype.toString.call(t) ? a = n(61) : "undefined" != typeof XMLHttpRequest && (a = n(61)), a),
                transformRequest: [function(e, t) {
                    return o(t, "Accept"), o(t, "Content-Type"), r.isFormData(e) || r.isArrayBuffer(e) || r.isBuffer(e) || r.isStream(e) || r.isFile(e) || r.isBlob(e) ? e : r.isArrayBufferView(e) ? e.buffer : r.isURLSearchParams(e) ? (u(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : r.isObject(e) ? (u(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e
                }],
                transformResponse: [function(e) {
                    if ("string" == typeof e) try {
                        e = JSON.parse(e)
                    } catch (e) {}
                    return e
                }],
                timeout: 0,
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN",
                maxContentLength: -1,
                validateStatus: function(e) {
                    return e >= 200 && e < 300
                },
                headers: {
                    common: {
                        Accept: "application/json, text/plain, */*"
                    }
                }
            };
            r.forEach(["delete", "get", "head"], function(e) {
                s.headers[e] = {}
            }), r.forEach(["post", "put", "patch"], function(e) {
                s.headers[e] = r.merge(i)
            }), e.exports = s
        }).call(this, n(60))
    }, function(e, t) {
        var n, r, o = e.exports = {};

        function i() {
            throw new Error("setTimeout has not been defined")
        }

        function u() {
            throw new Error("clearTimeout has not been defined")
        }

        function a(e) {
            if (n === setTimeout) return setTimeout(e, 0);
            if ((n === i || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
            try {
                return n(e, 0)
            } catch (t) {
                try {
                    return n.call(null, e, 0)
                } catch (t) {
                    return n.call(this, e, 0)
                }
            }
        }! function() {
            try {
                n = "function" == typeof setTimeout ? setTimeout : i
            } catch (e) {
                n = i
            }
            try {
                r = "function" == typeof clearTimeout ? clearTimeout : u
            } catch (e) {
                r = u
            }
        }();
        var s, c = [],
            f = !1,
            p = -1;

        function l() {
            f && s && (f = !1, s.length ? c = s.concat(c) : p = -1, c.length && d())
        }

        function d() {
            if (!f) {
                var e = a(l);
                f = !0;
                for (var t = c.length; t;) {
                    for (s = c, c = []; ++p < t;) s && s[p].run();
                    p = -1, t = c.length
                }
                s = null, f = !1,
                    function(e) {
                        if (r === clearTimeout) return clearTimeout(e);
                        if ((r === u || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
                        try {
                            r(e)
                        } catch (t) {
                            try {
                                return r.call(null, e)
                            } catch (t) {
                                return r.call(this, e)
                            }
                        }
                    }(e)
            }
        }

        function h(e, t) {
            this.fun = e, this.array = t
        }

        function y() {}
        o.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            c.push(new h(e, t)), 1 !== c.length || f || a(d)
        }, h.prototype.run = function() {
            this.fun.apply(null, this.array)
        }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = y, o.addListener = y, o.once = y, o.off = y, o.removeListener = y, o.removeAllListeners = y, o.emit = y, o.prependListener = y, o.prependOnceListener = y, o.listeners = function(e) {
            return []
        }, o.binding = function(e) {
            throw new Error("process.binding is not supported")
        }, o.cwd = function() {
            return "/"
        }, o.chdir = function(e) {
            throw new Error("process.chdir is not supported")
        }, o.umask = function() {
            return 0
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(1),
            o = n(114),
            i = n(57),
            u = n(116),
            a = n(117),
            s = n(62);
        e.exports = function(e) {
            return new Promise(function(t, c) {
                var f = e.data,
                    p = e.headers;
                r.isFormData(f) && delete p["Content-Type"];
                var l = new XMLHttpRequest;
                if (e.auth) {
                    var d = e.auth.username || "",
                        h = e.auth.password || "";
                    p.Authorization = "Basic " + btoa(d + ":" + h)
                }
                if (l.open(e.method.toUpperCase(), i(e.url, e.params, e.paramsSerializer), !0), l.timeout = e.timeout, l.onreadystatechange = function() {
                        if (l && 4 === l.readyState && (0 !== l.status || l.responseURL && 0 === l.responseURL.indexOf("file:"))) {
                            var n = "getAllResponseHeaders" in l ? u(l.getAllResponseHeaders()) : null,
                                r = {
                                    data: e.responseType && "text" !== e.responseType ? l.response : l.responseText,
                                    status: l.status,
                                    statusText: l.statusText,
                                    headers: n,
                                    config: e,
                                    request: l
                                };
                            o(t, c, r), l = null
                        }
                    }, l.onabort = function() {
                        l && (c(s("Request aborted", e, "ECONNABORTED", l)), l = null)
                    }, l.onerror = function() {
                        c(s("Network Error", e, null, l)), l = null
                    }, l.ontimeout = function() {
                        c(s("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", l)), l = null
                    }, r.isStandardBrowserEnv()) {
                    var y = n(118),
                        m = (e.withCredentials || a(e.url)) && e.xsrfCookieName ? y.read(e.xsrfCookieName) : void 0;
                    m && (p[e.xsrfHeaderName] = m)
                }
                if ("setRequestHeader" in l && r.forEach(p, function(e, t) {
                        void 0 === f && "content-type" === t.toLowerCase() ? delete p[t] : l.setRequestHeader(t, e)
                    }), e.withCredentials && (l.withCredentials = !0), e.responseType) try {
                    l.responseType = e.responseType
                } catch (t) {
                    if ("json" !== e.responseType) throw t
                }
                "function" == typeof e.onDownloadProgress && l.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && l.upload && l.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then(function(e) {
                    l && (l.abort(), c(e), l = null)
                }), void 0 === f && (f = null), l.send(f)
            })
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(115);
        e.exports = function(e, t, n, o, i) {
            var u = new Error(e);
            return r(u, t, n, o, i)
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(1);
        e.exports = function(e, t) {
            t = t || {};
            var n = {};
            return r.forEach(["url", "method", "params", "data"], function(e) {
                void 0 !== t[e] && (n[e] = t[e])
            }), r.forEach(["headers", "auth", "proxy"], function(o) {
                r.isObject(t[o]) ? n[o] = r.deepMerge(e[o], t[o]) : void 0 !== t[o] ? n[o] = t[o] : r.isObject(e[o]) ? n[o] = r.deepMerge(e[o]) : void 0 !== e[o] && (n[o] = e[o])
            }), r.forEach(["baseURL", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "maxContentLength", "validateStatus", "maxRedirects", "httpAgent", "httpsAgent", "cancelToken", "socketPath"], function(r) {
                void 0 !== t[r] ? n[r] = t[r] : void 0 !== e[r] && (n[r] = e[r])
            }), n
        }
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            this.message = e
        }
        r.prototype.toString = function() {
            return "Cancel" + (this.message ? ": " + this.message : "")
        }, r.prototype.__CANCEL__ = !0, e.exports = r
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(17),
            o = n(35),
            i = n(34),
            u = function() {
                function e(e) {
                    this.httpRequest = new r.Request(e), this.cache = new o.Cache(e.persistence), this.accessTokenKey = i.ACCESS_TOKEN + "_" + e.env, this.accessTokenExpireKey = i.ACCESS_TOKEN_Expire + "_" + e.env, this.refreshTokenKey = i.REFRESH_TOKEN + "_" + e.env
                }
                return e.prototype.setRefreshToken = function(e) {
                    this.cache.setStore(this.refreshTokenKey, e)
                }, e.prototype.getRefreshTokenByWXCode = function(e, t, n) {
                    var r = this;
                    return this.httpRequest.send("auth.getJwt", {
                        appid: e,
                        loginType: t,
                        code: n
                    }).then(function(e) {
                        if (e.code) throw new Error("[tcb-js-sdk] 微信登录失败: " + e.code);
                        return e.refresh_token && r.cache.setStore(r.refreshTokenKey, e.refresh_token), e
                    })
                }, e
            }();
        t.default = u
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(67),
            o = n(40),
            i = function() {
                function e() {}
                return e.isGeopoint = function(e, t) {
                    if (o.Util.whichType(t) !== r.FieldType.Number) throw new Error("Geo Point must be number type");
                    var n = Math.abs(t);
                    if ("latitude" === e && n > 90) throw new Error("latitude should be a number ranges from -90 to 90");
                    if ("longitude" === e && n > 180) throw new Error("longitude should be a number ranges from -180 to 180");
                    return !0
                }, e.isInteger = function(e, t) {
                    if (!Number.isInteger(t)) throw new Error(e + r.ErrorCode.IntergerError);
                    return !0
                }, e.isFieldOrder = function(e) {
                    if (-1 === r.OrderDirectionList.indexOf(e)) throw new Error(r.ErrorCode.DirectionError);
                    return !0
                }, e.isFieldPath = function(e) {
                    if (!/^[a-zA-Z0-9-_\.]/.test(e)) throw new Error;
                    return !0
                }, e.isOperator = function(e) {
                    if (-1 === r.WhereFilterOpList.indexOf(e)) throw new Error(r.ErrorCode.OpStrError);
                    return !0
                }, e.isCollName = function(e) {
                    if (!/^[a-zA-Z0-9]([a-zA-Z0-9-_]){1,32}$/.test(e)) throw new Error(r.ErrorCode.CollNameError);
                    return !0
                }, e.isDocID = function(e) {
                    if (!/^([a-fA-F0-9]){24}$/.test(e)) throw new Error(r.ErrorCode.DocIDError);
                    return !0
                }, e
            }();
        t.Validate = i
    }, function(e, t, n) {
        "use strict";
        var r, o, i;
        Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            function(e) {
                e.DocIDError = "文档ID不合法", e.CollNameError = "集合名称不合法", e.OpStrError = "操作符不合法", e.DirectionError = "排序字符不合法", e.IntergerError = "must be integer"
            }(o || (o = {})), t.ErrorCode = o, t.FieldType = {
                String: "String",
                Number: "Number",
                Object: "Object",
                Array: "Array",
                Boolean: "Boolean",
                Null: "Null",
                GeoPoint: "GeoPoint",
                GeoLineString: "GeoLineString",
                GeoPolygon: "GeoPolygon",
                GeoMultiPoint: "GeoMultiPoint",
                GeoMultiLineString: "GeoMultiLineString",
                GeoMultiPolygon: "GeoMultiPolygon",
                Timestamp: "Date",
                Command: "Command",
                ServerDate: "ServerDate"
            }, t.OrderDirectionList = ["desc", "asc"], t.WhereFilterOpList = ["<", "<=", "==", ">=", ">"],
            function(e) {
                e.lt = "<", e.gt = ">", e.lte = "<=", e.gte = ">=", e.eq = "=="
            }(i || (i = {})), t.Opeartor = i;
        var u = ((r = {})[i.eq] = "$eq", r[i.lt] = "$lt", r[i.lte] = "$lte", r[i.gt] = "$gt", r[i.gte] = "$gte", r);
        t.OperatorMap = u, t.UpdateOperatorList = ["$set", "$inc", "$mul", "$unset", "$push", "$pop", "$unshift", "$shift", "$currentDate", "$each", "$position"]
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(0),
            o = n(2),
            i = n(43),
            u = function() {
                function e(e) {
                    if (!o.isArray(e)) throw new TypeError('"lines" must be of type LineString[]. Received type ' + typeof e);
                    if (0 === e.length) throw new Error("Polygon must contain 1 linestring at least");
                    e.forEach(function(e) {
                        if (!(e instanceof i.LineString)) throw new TypeError('"lines" must be of type LineString[]. Received type ' + typeof e + "[]");
                        if (!i.LineString.isClosed(e)) throw new Error("LineString " + e.points.map(function(e) {
                            return e.toReadableString()
                        }) + " is not a closed cycle")
                    }), this.lines = e
                }
                return e.prototype.parse = function(e) {
                    var t;
                    return (t = {})[e] = {
                        type: "Polygon",
                        coordinates: this.lines.map(function(e) {
                            return e.points.map(function(e) {
                                return [e.longitude, e.latitude]
                            })
                        })
                    }, t
                }, e.prototype.toJSON = function() {
                    return {
                        type: "Polygon",
                        coordinates: this.lines.map(function(e) {
                            return e.points.map(function(e) {
                                return [e.longitude, e.latitude]
                            })
                        })
                    }
                }, e.validate = function(e) {
                    if ("Polygon" !== e.type || !o.isArray(e.coordinates)) return !1;
                    for (var t = 0, n = e.coordinates; t < n.length; t++) {
                        var r = n[t];
                        if (!this.isCloseLineString(r)) return !1;
                        for (var i = 0, u = r; i < u.length; i++) {
                            var a = u[i];
                            if (!o.isNumber(a[0]) || !o.isNumber(a[1])) return !1
                        }
                    }
                    return !0
                }, e.isCloseLineString = function(e) {
                    var t = e[0],
                        n = e[e.length - 1];
                    return t[0] === n[0] && t[1] === n[1]
                }, Object.defineProperty(e.prototype, "_internalType", {
                    get: function() {
                        return r.SYMBOL_GEO_MULTI_POLYGON
                    },
                    enumerable: !0,
                    configurable: !0
                }), e
            }();
        t.Polygon = u
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.createPromiseCallback = function() {
            var e;
            if (!Promise) {
                (e = function() {}).promise = {};
                var t = function() {
                    throw new Error('Your Node runtime does support ES6 Promises. Set "global.Promise" to your preferred implementation of promises.')
                };
                return Object.defineProperty(e.promise, "then", {
                    get: t
                }), Object.defineProperty(e.promise, "catch", {
                    get: t
                }), e
            }
            var n = new Promise(function(t, n) {
                e = function(e, r) {
                    return e ? n(e) : t(r)
                }
            });
            return e.promise = n, e
        }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(19),
            o = n(0),
            i = n(2),
            u = n(71),
            a = n(72),
            s = function() {
                function e() {}
                return e.encode = function(t) {
                    return (new e).encodeUpdate(t)
                }, e.prototype.encodeUpdate = function(e) {
                    return r.isUpdateCommand(e) ? this.encodeUpdateCommand(e) : "object" === i.getType(e) ? this.encodeUpdateObject(e) : e
                }, e.prototype.encodeUpdateCommand = function(e) {
                    if (e.fieldName === o.SYMBOL_UNSET_FIELD_NAME) throw new Error("Cannot encode a comparison command with unset field name");
                    switch (e.operator) {
                        case r.UPDATE_COMMANDS_LITERAL.SET:
                        case r.UPDATE_COMMANDS_LITERAL.REMOVE:
                        case r.UPDATE_COMMANDS_LITERAL.INC:
                        case r.UPDATE_COMMANDS_LITERAL.MUL:
                            return this.encodeFieldUpdateCommand(e);
                        case r.UPDATE_COMMANDS_LITERAL.PUSH:
                        case r.UPDATE_COMMANDS_LITERAL.POP:
                        case r.UPDATE_COMMANDS_LITERAL.SHIFT:
                        case r.UPDATE_COMMANDS_LITERAL.UNSHIFT:
                            return this.encodeArrayUpdateCommand(e);
                        default:
                            return this.encodeFieldUpdateCommand(e)
                    }
                }, e.prototype.encodeFieldUpdateCommand = function(e) {
                    var t, n, o, i, a = u.operatorToString(e.operator);
                    switch (e.operator) {
                        case r.UPDATE_COMMANDS_LITERAL.REMOVE:
                            return (t = {})[a] = ((n = {})[e.fieldName] = "", n), t;
                        case r.UPDATE_COMMANDS_LITERAL.SET:
                        case r.UPDATE_COMMANDS_LITERAL.INC:
                        case r.UPDATE_COMMANDS_LITERAL.MUL:
                        default:
                            return (o = {})[a] = ((i = {})[e.fieldName] = e.operands[0], i), o
                    }
                }, e.prototype.encodeArrayUpdateCommand = function(e) {
                    var t, n, o, i, s, c, f, p, l, d, h = u.operatorToString(e.operator);
                    switch (e.operator) {
                        case r.UPDATE_COMMANDS_LITERAL.PUSH:
                            var y = {
                                $each: e.operands.map(a.encodeInternalDataType)
                            };
                            return (t = {})[h] = ((n = {})[e.fieldName] = y, n), t;
                        case r.UPDATE_COMMANDS_LITERAL.UNSHIFT:
                            return y = {
                                $each: e.operands.map(a.encodeInternalDataType),
                                $position: 0
                            }, (o = {})[h] = ((i = {})[e.fieldName] = y, i), o;
                        case r.UPDATE_COMMANDS_LITERAL.POP:
                            return (s = {})[h] = ((c = {})[e.fieldName] = 1, c), s;
                        case r.UPDATE_COMMANDS_LITERAL.SHIFT:
                            return (f = {})[h] = ((p = {})[e.fieldName] = -1, p), f;
                        default:
                            return (l = {})[h] = ((d = {})[e.fieldName] = a.encodeInternalDataType(e.operands), d), l
                    }
                }, e.prototype.encodeUpdateObject = function(e) {
                    var t = a.flattenQueryObject(e);
                    for (var n in t)
                        if (!/^\$/.test(n)) {
                            var o = t[n];
                            if (r.isUpdateCommand(o)) {
                                t[n] = o._setFieldName(n);
                                var i = this.encodeUpdateCommand(t[n]);
                                a.mergeConditionAfterEncode(t, i, n)
                            } else {
                                t[n] = o = a.encodeInternalDataType(o);
                                var u = new r.UpdateCommand(r.UPDATE_COMMANDS_LITERAL.SET, [o], n);
                                i = this.encodeUpdateCommand(u), a.mergeConditionAfterEncode(t, i, n)
                            }
                        }
                    return t
                }, e
            }();
        t.UpdateSerializer = s
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(20),
            o = n(21),
            i = n(19);
        for (var u in t.OperatorMap = {}, r.QUERY_COMMANDS_LITERAL) t.OperatorMap[u] = "$" + u.toLowerCase();
        for (var u in o.LOGIC_COMMANDS_LITERAL) t.OperatorMap[u] = "$" + u.toLowerCase();
        for (var u in i.UPDATE_COMMANDS_LITERAL) t.OperatorMap[u] = "$" + u.toLowerCase();
        t.OperatorMap[r.QUERY_COMMANDS_LITERAL.NEQ] = "$ne", t.OperatorMap[i.UPDATE_COMMANDS_LITERAL.REMOVE] = "$unset", t.OperatorMap[i.UPDATE_COMMANDS_LITERAL.SHIFT] = "$pop", t.OperatorMap[i.UPDATE_COMMANDS_LITERAL.UNSHIFT] = "$push", t.operatorToString = function(e) {
            return t.OperatorMap[e] || "$" + e.toLowerCase()
        }
    }, function(e, t, n) {
        "use strict";
        var r = this && this.__assign || function() {
            return (r = Object.assign || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }).apply(this, arguments)
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = n(2),
            i = n(73);

        function u(e, t, n, i) {
            var a = r({}, e);
            for (var s in e)
                if (!/^\$/.test(s)) {
                    var c = e[s];
                    if (c && o.isObject(c) && !t(c)) {
                        if (i.indexOf(c) > -1) throw new Error("Cannot convert circular structure to JSON");
                        var f = u(c, t, n.concat([s]), i.concat([c]));
                        a[s] = f;
                        var p = !1;
                        for (var l in f) /^\$/.test(l) ? p = !0 : (a[s + "." + l] = f[l], delete a[s][l]);
                        p || delete a[s]
                    }
                }
            return a
        }

        function a(e) {
            return o.isInternalObject(e) || o.isDate(e) || o.isRegExp(e)
        }
        t.flattenQueryObject = function(e) {
            return u(e, a, [], [e])
        }, t.flattenObject = function(e) {
            return u(e, function(e) {
                return !1
            }, [], [e])
        }, t.mergeConditionAfterEncode = function(e, t, n) {
            for (var r in t[n] || delete e[n], t) e[r] ? o.isArray(e[r]) ? e[r].push(t[r]) : o.isObject(e[r]) ? o.isObject(t[r]) ? Object.assign(e[r], t[r]) : (console.warn("unmergable condition, query is object but condition is " + o.getType(t) + ", can only overwrite", t, n), e[r] = t[r]) : (console.warn("to-merge query is of type " + o.getType(e) + ", can only overwrite", e, t, n), e[r] = t[r]) : e[r] = t[r]
        }, t.isConversionRequired = a, t.encodeInternalDataType = function(e) {
            return i.serialize(e)
        }, t.decodeInternalDataType = function(e) {
            return i.deserialize(e)
        }
    }, function(e, t, n) {
        "use strict";
        var r = this && this.__assign || function() {
            return (r = Object.assign || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }).apply(this, arguments)
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = n(0),
            i = n(2),
            u = n(18),
            a = n(41);
        t.serialize = function(e) {
            return function e(t, n) {
                if (!i.isInternalObject(t)) {
                    if (i.isDate(t)) return {
                        $date: +t
                    };
                    if (i.isRegExp(t)) return {
                        $regex: t.source,
                        $options: t.flags
                    };
                    if (i.isArray(t)) return t.map(function(t) {
                        if (n.indexOf(t) > -1) throw new Error("Cannot convert circular structure to JSON");
                        return e(t, n.concat([t]))
                    });
                    if (i.isObject(t)) {
                        var u = r({}, t);
                        for (var a in u) {
                            if (n.indexOf(u[a]) > -1) throw new Error("Cannot convert circular structure to JSON");
                            u[a] = e(u[a], n.concat([u[a]]))
                        }
                        return u
                    }
                    return t
                }
                switch (t._internalType) {
                    case o.SYMBOL_GEO_POINT:
                        return t.toJSON();
                    case o.SYMBOL_SERVER_DATE:
                    case o.SYMBOL_REGEXP:
                        return t.parse();
                    default:
                        return t.toJSON ? t.toJSON() : t
                }
            }(e, [e])
        }, t.deserialize = function(e) {
            var t = r({}, e);
            for (var n in t) switch (n) {
                case "$date":
                    switch (i.getType(t[n])) {
                        case "number":
                            return new Date(t[n]);
                        case "object":
                            return new a.ServerDate(t[n])
                    }
                    break;
                case "type":
                    switch (t.type) {
                        case "Point":
                            if (i.isArray(t.coordinates) && i.isNumber(t.coordinates[0]) && i.isNumber(t.coordinates[1])) return new u.Point(t.coordinates[0], t.coordinates[1])
                    }
            }
            return e
        }
    }, function(e, t, n) {
        e.exports = n(75)
    }, function(e, t, n) {
        "use strict";
        var r = function() {
            return (r = Object.assign || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }).apply(this, arguments)
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = n(76),
            i = n(124),
            u = n(126),
            a = n(17),
            s = n(36),
            c = n(127).Db;

        function f(e) {
            this.config = e || this.config, this.authObj = void 0
        }

        function p(e, t) {
            return function(e, t) {
                for (var n in e) e.hasOwnProperty(n) && t(e[n], n)
            }(t, function(n, r) {
                e[r] = t[r]
            }), e
        }
        f.prototype.init = function(e) {
            return this.config = {
                env: e.env,
                timeout: e.timeout || 15e3
            }, new f(this.config)
        }, f.prototype.database = function(e) {
            if (c.reqClass = a.Request, this.authObj) return c.getAccessToken = this.authObj.getAccessToken.bind(this.authObj), c.ws || (c.ws = null), new c(r({}, this.config, e));
            console.warn("需要app.auth()授权")
        }, f.prototype.auth = function(e) {
            var t = (void 0 === e ? {} : e).persistence;
            return this.authObj ? (console.warn("tcb实例只存在一个auth对象"), this.authObj) : (Object.assign(this.config, {
                persistence: t || "session"
            }), this.authObj = new i.default(this.config), this.authObj)
        }, f.prototype.on = s.addEventListener.bind(f), p(f.prototype, u), p(f.prototype, o);
        var l = new f;
        try {
            window.tcb = l
        } catch (e) {}
        t.default = l, e.exports = l
    }, function(e, t, n) {
        "use strict";
        var r, o = (r = n(77)) && r.__esModule ? r : {
            default: r
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(55),
            u = n(17),
            a = n(37);
        t.uploadFile = function(e, t) {
            var n = e.cloudPath,
                r = e.filePath,
                o = e.onUploadProgress;
            return t = t || a.createPromiseCallback(), new u.Request(this.config).send("storage.getUploadMetadata", {
                path: n
            }).then(function(e) {
                var u = e.data,
                    a = u.url,
                    s = u.authorization,
                    c = u.token,
                    f = u.fileId,
                    p = u.cosFileId,
                    l = e.requestId,
                    d = new FormData;
                d.append("key", n), d.append("signature", s), d.append("x-cos-meta-fileid", p), d.append("success_action_status", "201"), d.append("x-cos-security-token", c), d.append("file", r), i.default.post(a, d, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    },
                    onUploadProgress: o
                }).then(function(e) {
                    201 === e.status ? t(null, {
                        fileID: f,
                        requestId: l
                    }) : t(new Error("STORAGE_REQUEST_FAIL: " + e.data))
                }).catch(function(e) {
                    t(e)
                })
            }).catch(function(e) {
                t(e)
            }), t.promise
        }, t.deleteFile = function(e, t) {
            var n = e.fileList;
            if (t = t || a.createPromiseCallback(), !n || !Array.isArray(n)) return {
                code: "INVALID_PARAM",
                message: "fileList必须是非空的数组"
            };
            for (var r = 0, o = n; r < o.length; r++) {
                var i = o[r];
                if (!i || "string" != typeof i) return {
                    code: "INVALID_PARAM",
                    message: "fileList的元素必须是非空的字符串"
                }
            }
            var s = {
                fileid_list: n
            };
            return new u.Request(this.config).send("storage.batchDeleteFile", s).then(function(e) {
                e.code ? t(null, e) : t(null, {
                    fileList: e.data.delete_list,
                    requestId: e.requestId
                })
            }).catch(function(e) {
                t(e)
            }), t.promise
        }, t.getTempFileURL = function(e, t) {
            var n = e.fileList;
            t = t || a.createPromiseCallback(), n && Array.isArray(n) || t(null, {
                code: "INVALID_PARAM",
                message: "fileList必须是非空的数组"
            });
            for (var r = [], i = 0, s = n; i < s.length; i++) {
                var c = s[i];
                "object" === (void 0 === c ? "undefined" : (0, o.default)(c)) ? (c.hasOwnProperty("fileID") && c.hasOwnProperty("maxAge") || t(null, {
                    code: "INVALID_PARAM",
                    message: "fileList的元素必须是包含fileID和maxAge的对象"
                }), r.push({
                    fileid: c.fileID,
                    max_age: c.maxAge
                })) : "string" == typeof c ? r.push({
                    fileid: c
                }) : t(null, {
                    code: "INVALID_PARAM",
                    message: "fileList的元素必须是字符串"
                })
            }
            var f = {
                file_list: r
            };
            return new u.Request(this.config).send("storage.batchGetDownloadUrl", f).then(function(e) {
                e.code ? t(null, e) : t(null, {
                    fileList: e.data.download_list,
                    requestId: e.requestId
                })
            }).catch(function(e) {
                t(e)
            }), t.promise
        }, t.downloadFile = function(e, n) {
            var r = e.fileID;
            return n = n || a.createPromiseCallback(), t.getTempFileURL.call(this, {
                fileList: [{
                    fileID: r,
                    maxAge: 600
                }]
            }).then(function(e) {
                var t = e.fileList[0];
                if ("SUCCESS" === t.code) {
                    var r = t.download_url;
                    r = encodeURI(r), i.default.get(r, {
                        responseType: "blob"
                    }).then(function(e) {
                        var t = window.URL.createObjectURL(new Blob([e.data])),
                            n = document.createElement("a");
                        n.href = t, n.setAttribute("download", "file.pdf"), document.body.appendChild(n), n.click()
                    })
                } else n(t)
            }), n.promise
        }
    }, function(e, t, n) {
        "use strict";
        t.__esModule = !0;
        var r = u(n(78)),
            o = u(n(96)),
            i = "function" == typeof o.default && "symbol" == typeof r.default ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof o.default && e.constructor === o.default && e !== o.default.prototype ? "symbol" : typeof e
            };

        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        t.default = "function" == typeof o.default && "symbol" === i(r.default) ? function(e) {
            return void 0 === e ? "undefined" : i(e)
        } : function(e) {
            return e && "function" == typeof o.default && e.constructor === o.default && e !== o.default.prototype ? "symbol" : void 0 === e ? "undefined" : i(e)
        }
    }, function(e, t, n) {
        e.exports = {
            default: n(79),
            __esModule: !0
        }
    }, function(e, t, n) {
        n(80), n(92), e.exports = n(31).f("iterator")
    }, function(e, t, n) {
        "use strict";
        var r = n(81)(!0);
        n(44)(String, "String", function(e) {
            this._t = String(e), this._i = 0
        }, function() {
            var e, t = this._t,
                n = this._i;
            return n >= t.length ? {
                value: void 0,
                done: !0
            } : (e = r(t, n), this._i += e.length, {
                value: e,
                done: !1
            })
        })
    }, function(e, t, n) {
        var r = n(22),
            o = n(23);
        e.exports = function(e) {
            return function(t, n) {
                var i, u, a = String(o(t)),
                    s = r(n),
                    c = a.length;
                return s < 0 || s >= c ? e ? "" : void 0 : (i = a.charCodeAt(s)) < 55296 || i > 56319 || s + 1 === c || (u = a.charCodeAt(s + 1)) < 56320 || u > 57343 ? e ? a.charAt(s) : i : e ? a.slice(s, s + 2) : u - 56320 + (i - 55296 << 10) + 65536
            }
        }
    }, function(e, t, n) {
        var r = n(83);
        e.exports = function(e, t, n) {
            if (r(e), void 0 === t) return e;
            switch (n) {
                case 1:
                    return function(n) {
                        return e.call(t, n)
                    };
                case 2:
                    return function(n, r) {
                        return e.call(t, n, r)
                    };
                case 3:
                    return function(n, r, o) {
                        return e.call(t, n, r, o)
                    }
            }
            return function() {
                return e.apply(t, arguments)
            }
        }
    }, function(e, t) {
        e.exports = function(e) {
            if ("function" != typeof e) throw TypeError(e + " is not a function!");
            return e
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(49),
            o = n(15),
            i = n(30),
            u = {};
        n(5)(u, n(9)("iterator"), function() {
            return this
        }), e.exports = function(e, t, n) {
            e.prototype = r(u, {
                next: o(1, n)
            }), i(e, t + " Iterator")
        }
    }, function(e, t, n) {
        var r = n(6),
            o = n(13),
            i = n(26);
        e.exports = n(7) ? Object.defineProperties : function(e, t) {
            o(e);
            for (var n, u = i(t), a = u.length, s = 0; a > s;) r.f(e, n = u[s++], t[n]);
            return e
        }
    }, function(e, t, n) {
        var r = n(51);
        e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
            return "String" == r(e) ? e.split("") : Object(e)
        }
    }, function(e, t, n) {
        var r = n(8),
            o = n(88),
            i = n(89);
        e.exports = function(e) {
            return function(t, n, u) {
                var a, s = r(t),
                    c = o(s.length),
                    f = i(u, c);
                if (e && n != n) {
                    for (; c > f;)
                        if ((a = s[f++]) != a) return !0
                } else
                    for (; c > f; f++)
                        if ((e || f in s) && s[f] === n) return e || f || 0;
                return !e && -1
            }
        }
    }, function(e, t, n) {
        var r = n(22),
            o = Math.min;
        e.exports = function(e) {
            return e > 0 ? o(r(e), 9007199254740991) : 0
        }
    }, function(e, t, n) {
        var r = n(22),
            o = Math.max,
            i = Math.min;
        e.exports = function(e, t) {
            return (e = r(e)) < 0 ? o(e + t, 0) : i(e, t)
        }
    }, function(e, t, n) {
        var r = n(3).document;
        e.exports = r && r.documentElement
    }, function(e, t, n) {
        var r = n(4),
            o = n(52),
            i = n(27)("IE_PROTO"),
            u = Object.prototype;
        e.exports = Object.getPrototypeOf || function(e) {
            return e = o(e), r(e, i) ? e[i] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? u : null
        }
    }, function(e, t, n) {
        n(93);
        for (var r = n(3), o = n(5), i = n(25), u = n(9)("toStringTag"), a = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), s = 0; s < a.length; s++) {
            var c = a[s],
                f = r[c],
                p = f && f.prototype;
            p && !p[u] && o(p, u, c), i[c] = i.Array
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(94),
            o = n(95),
            i = n(25),
            u = n(8);
        e.exports = n(44)(Array, "Array", function(e, t) {
            this._t = u(e), this._i = 0, this._k = t
        }, function() {
            var e = this._t,
                t = this._k,
                n = this._i++;
            return !e || n >= e.length ? (this._t = void 0, o(1)) : o(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]])
        }, "values"), i.Arguments = i.Array, r("keys"), r("values"), r("entries")
    }, function(e, t) {
        e.exports = function() {}
    }, function(e, t) {
        e.exports = function(e, t) {
            return {
                value: t,
                done: !!e
            }
        }
    }, function(e, t, n) {
        e.exports = {
            default: n(97),
            __esModule: !0
        }
    }, function(e, t, n) {
        n(98), n(104), n(105), n(106), e.exports = n(12).Symbol
    }, function(e, t, n) {
        "use strict";
        var r = n(3),
            o = n(4),
            i = n(7),
            u = n(45),
            a = n(48),
            s = n(99).KEY,
            c = n(14),
            f = n(28),
            p = n(30),
            l = n(16),
            d = n(9),
            h = n(31),
            y = n(32),
            m = n(100),
            g = n(101),
            v = n(13),
            _ = n(10),
            b = n(52),
            w = n(8),
            O = n(24),
            E = n(15),
            C = n(49),
            S = n(102),
            T = n(103),
            P = n(53),
            A = n(6),
            D = n(26),
            M = T.f,
            L = A.f,
            N = S.f,
            x = r.Symbol,
            I = r.JSON,
            R = I && I.stringify,
            j = d("_hidden"),
            U = d("toPrimitive"),
            k = {}.propertyIsEnumerable,
            B = f("symbol-registry"),
            q = f("symbols"),
            F = f("op-symbols"),
            G = Object.prototype,
            Q = "function" == typeof x && !!P.f,
            Y = r.QObject,
            H = !Y || !Y.prototype || !Y.prototype.findChild,
            $ = i && c(function() {
                return 7 != C(L({}, "a", {
                    get: function() {
                        return L(this, "a", {
                            value: 7
                        }).a
                    }
                })).a
            }) ? function(e, t, n) {
                var r = M(G, t);
                r && delete G[t], L(e, t, n), r && e !== G && L(G, t, r)
            } : L,
            V = function(e) {
                var t = q[e] = C(x.prototype);
                return t._k = e, t
            },
            J = Q && "symbol" == typeof x.iterator ? function(e) {
                return "symbol" == typeof e
            } : function(e) {
                return e instanceof x
            },
            K = function(e, t, n) {
                return e === G && K(F, t, n), v(e), t = O(t, !0), v(n), o(q, t) ? (n.enumerable ? (o(e, j) && e[j][t] && (e[j][t] = !1), n = C(n, {
                    enumerable: E(0, !1)
                })) : (o(e, j) || L(e, j, E(1, {})), e[j][t] = !0), $(e, t, n)) : L(e, t, n)
            },
            W = function(e, t) {
                v(e);
                for (var n, r = m(t = w(t)), o = 0, i = r.length; i > o;) K(e, n = r[o++], t[n]);
                return e
            },
            z = function(e) {
                var t = k.call(this, e = O(e, !0));
                return !(this === G && o(q, e) && !o(F, e)) && (!(t || !o(this, e) || !o(q, e) || o(this, j) && this[j][e]) || t)
            },
            X = function(e, t) {
                if (e = w(e), t = O(t, !0), e !== G || !o(q, t) || o(F, t)) {
                    var n = M(e, t);
                    return !n || !o(q, t) || o(e, j) && e[j][t] || (n.enumerable = !0), n
                }
            },
            Z = function(e) {
                for (var t, n = N(w(e)), r = [], i = 0; n.length > i;) o(q, t = n[i++]) || t == j || t == s || r.push(t);
                return r
            },
            ee = function(e) {
                for (var t, n = e === G, r = N(n ? F : w(e)), i = [], u = 0; r.length > u;) !o(q, t = r[u++]) || n && !o(G, t) || i.push(q[t]);
                return i
            };
        Q || (a((x = function() {
            if (this instanceof x) throw TypeError("Symbol is not a constructor!");
            var e = l(arguments.length > 0 ? arguments[0] : void 0),
                t = function(n) {
                    this === G && t.call(F, n), o(this, j) && o(this[j], e) && (this[j][e] = !1), $(this, e, E(1, n))
                };
            return i && H && $(G, e, {
                configurable: !0,
                set: t
            }), V(e)
        }).prototype, "toString", function() {
            return this._k
        }), T.f = X, A.f = K, n(54).f = S.f = Z, n(33).f = z, P.f = ee, i && !n(11) && a(G, "propertyIsEnumerable", z, !0), h.f = function(e) {
            return V(d(e))
        }), u(u.G + u.W + u.F * !Q, {
            Symbol: x
        });
        for (var te = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), ne = 0; te.length > ne;) d(te[ne++]);
        for (var re = D(d.store), oe = 0; re.length > oe;) y(re[oe++]);
        u(u.S + u.F * !Q, "Symbol", {
            for: function(e) {
                return o(B, e += "") ? B[e] : B[e] = x(e)
            },
            keyFor: function(e) {
                if (!J(e)) throw TypeError(e + " is not a symbol!");
                for (var t in B)
                    if (B[t] === e) return t
            },
            useSetter: function() {
                H = !0
            },
            useSimple: function() {
                H = !1
            }
        }), u(u.S + u.F * !Q, "Object", {
            create: function(e, t) {
                return void 0 === t ? C(e) : W(C(e), t)
            },
            defineProperty: K,
            defineProperties: W,
            getOwnPropertyDescriptor: X,
            getOwnPropertyNames: Z,
            getOwnPropertySymbols: ee
        });
        var ie = c(function() {
            P.f(1)
        });
        u(u.S + u.F * ie, "Object", {
            getOwnPropertySymbols: function(e) {
                return P.f(b(e))
            }
        }), I && u(u.S + u.F * (!Q || c(function() {
            var e = x();
            return "[null]" != R([e]) || "{}" != R({
                a: e
            }) || "{}" != R(Object(e))
        })), "JSON", {
            stringify: function(e) {
                for (var t, n, r = [e], o = 1; arguments.length > o;) r.push(arguments[o++]);
                if (n = t = r[1], (_(t) || void 0 !== e) && !J(e)) return g(t) || (t = function(e, t) {
                    if ("function" == typeof n && (t = n.call(this, e, t)), !J(t)) return t
                }), r[1] = t, R.apply(I, r)
            }
        }), x.prototype[U] || n(5)(x.prototype, U, x.prototype.valueOf), p(x, "Symbol"), p(Math, "Math", !0), p(r.JSON, "JSON", !0)
    }, function(e, t, n) {
        var r = n(16)("meta"),
            o = n(10),
            i = n(4),
            u = n(6).f,
            a = 0,
            s = Object.isExtensible || function() {
                return !0
            },
            c = !n(14)(function() {
                return s(Object.preventExtensions({}))
            }),
            f = function(e) {
                u(e, r, {
                    value: {
                        i: "O" + ++a,
                        w: {}
                    }
                })
            },
            p = e.exports = {
                KEY: r,
                NEED: !1,
                fastKey: function(e, t) {
                    if (!o(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                    if (!i(e, r)) {
                        if (!s(e)) return "F";
                        if (!t) return "E";
                        f(e)
                    }
                    return e[r].i
                },
                getWeak: function(e, t) {
                    if (!i(e, r)) {
                        if (!s(e)) return !0;
                        if (!t) return !1;
                        f(e)
                    }
                    return e[r].w
                },
                onFreeze: function(e) {
                    return c && p.NEED && s(e) && !i(e, r) && f(e), e
                }
            }
    }, function(e, t, n) {
        var r = n(26),
            o = n(53),
            i = n(33);
        e.exports = function(e) {
            var t = r(e),
                n = o.f;
            if (n)
                for (var u, a = n(e), s = i.f, c = 0; a.length > c;) s.call(e, u = a[c++]) && t.push(u);
            return t
        }
    }, function(e, t, n) {
        var r = n(51);
        e.exports = Array.isArray || function(e) {
            return "Array" == r(e)
        }
    }, function(e, t, n) {
        var r = n(8),
            o = n(54).f,
            i = {}.toString,
            u = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
        e.exports.f = function(e) {
            return u && "[object Window]" == i.call(e) ? function(e) {
                try {
                    return o(e)
                } catch (e) {
                    return u.slice()
                }
            }(e) : o(r(e))
        }
    }, function(e, t, n) {
        var r = n(33),
            o = n(15),
            i = n(8),
            u = n(24),
            a = n(4),
            s = n(46),
            c = Object.getOwnPropertyDescriptor;
        t.f = n(7) ? c : function(e, t) {
            if (e = i(e), t = u(t, !0), s) try {
                return c(e, t)
            } catch (e) {}
            if (a(e, t)) return o(!r.f.call(e, t), e[t])
        }
    }, function(e, t) {}, function(e, t, n) {
        n(32)("asyncIterator")
    }, function(e, t, n) {
        n(32)("observable")
    }, function(e, t, n) {
        "use strict";
        var r = n(1),
            o = n(56),
            i = n(109),
            u = n(63);

        function a(e) {
            var t = new i(e),
                n = o(i.prototype.request, t);
            return r.extend(n, i.prototype, t), r.extend(n, t), n
        }
        var s = a(n(59));
        s.Axios = i, s.create = function(e) {
            return a(u(s.defaults, e))
        }, s.Cancel = n(64), s.CancelToken = n(121), s.isCancel = n(58), s.all = function(e) {
            return Promise.all(e)
        }, s.spread = n(122), e.exports = s, e.exports.default = s
    }, function(e, t) {
        e.exports = function(e) {
            return null != e && null != e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(1),
            o = n(57),
            i = n(110),
            u = n(111),
            a = n(63);

        function s(e) {
            this.defaults = e, this.interceptors = {
                request: new i,
                response: new i
            }
        }
        s.prototype.request = function(e) {
            "string" == typeof e ? (e = arguments[1] || {}).url = arguments[0] : e = e || {}, (e = a(this.defaults, e)).method = e.method ? e.method.toLowerCase() : "get";
            var t = [u, void 0],
                n = Promise.resolve(e);
            for (this.interceptors.request.forEach(function(e) {
                    t.unshift(e.fulfilled, e.rejected)
                }), this.interceptors.response.forEach(function(e) {
                    t.push(e.fulfilled, e.rejected)
                }); t.length;) n = n.then(t.shift(), t.shift());
            return n
        }, s.prototype.getUri = function(e) {
            return e = a(this.defaults, e), o(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
        }, r.forEach(["delete", "get", "head", "options"], function(e) {
            s.prototype[e] = function(t, n) {
                return this.request(r.merge(n || {}, {
                    method: e,
                    url: t
                }))
            }
        }), r.forEach(["post", "put", "patch"], function(e) {
            s.prototype[e] = function(t, n, o) {
                return this.request(r.merge(o || {}, {
                    method: e,
                    url: t,
                    data: n
                }))
            }
        }), e.exports = s
    }, function(e, t, n) {
        "use strict";
        var r = n(1);

        function o() {
            this.handlers = []
        }
        o.prototype.use = function(e, t) {
            return this.handlers.push({
                fulfilled: e,
                rejected: t
            }), this.handlers.length - 1
        }, o.prototype.eject = function(e) {
            this.handlers[e] && (this.handlers[e] = null)
        }, o.prototype.forEach = function(e) {
            r.forEach(this.handlers, function(t) {
                null !== t && e(t)
            })
        }, e.exports = o
    }, function(e, t, n) {
        "use strict";
        var r = n(1),
            o = n(112),
            i = n(58),
            u = n(59),
            a = n(119),
            s = n(120);

        function c(e) {
            e.cancelToken && e.cancelToken.throwIfRequested()
        }
        e.exports = function(e) {
            return c(e), e.baseURL && !a(e.url) && (e.url = s(e.baseURL, e.url)), e.headers = e.headers || {}, e.data = o(e.data, e.headers, e.transformRequest), e.headers = r.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers || {}), r.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function(t) {
                delete e.headers[t]
            }), (e.adapter || u.adapter)(e).then(function(t) {
                return c(e), t.data = o(t.data, t.headers, e.transformResponse), t
            }, function(t) {
                return i(t) || (c(e), t && t.response && (t.response.data = o(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t)
            })
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(1);
        e.exports = function(e, t, n) {
            return r.forEach(n, function(n) {
                e = n(e, t)
            }), e
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(1);
        e.exports = function(e, t) {
            r.forEach(e, function(n, r) {
                r !== t && r.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[r])
            })
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(62);
        e.exports = function(e, t, n) {
            var o = n.config.validateStatus;
            !o || o(n.status) ? e(n) : t(r("Request failed with status code " + n.status, n.config, null, n.request, n))
        }
    }, function(e, t, n) {
        "use strict";
        e.exports = function(e, t, n, r, o) {
            return e.config = t, n && (e.code = n), e.request = r, e.response = o, e.isAxiosError = !0, e.toJSON = function() {
                return {
                    message: this.message,
                    name: this.name,
                    description: this.description,
                    number: this.number,
                    fileName: this.fileName,
                    lineNumber: this.lineNumber,
                    columnNumber: this.columnNumber,
                    stack: this.stack,
                    config: this.config,
                    code: this.code
                }
            }, e
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(1),
            o = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
        e.exports = function(e) {
            var t, n, i, u = {};
            return e ? (r.forEach(e.split("\n"), function(e) {
                if (i = e.indexOf(":"), t = r.trim(e.substr(0, i)).toLowerCase(), n = r.trim(e.substr(i + 1)), t) {
                    if (u[t] && o.indexOf(t) >= 0) return;
                    u[t] = "set-cookie" === t ? (u[t] ? u[t] : []).concat([n]) : u[t] ? u[t] + ", " + n : n
                }
            }), u) : u
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(1);
        e.exports = r.isStandardBrowserEnv() ? function() {
            var e, t = /(msie|trident)/i.test(navigator.userAgent),
                n = document.createElement("a");

            function o(e) {
                var r = e;
                return t && (n.setAttribute("href", r), r = n.href), n.setAttribute("href", r), {
                    href: n.href,
                    protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                    host: n.host,
                    search: n.search ? n.search.replace(/^\?/, "") : "",
                    hash: n.hash ? n.hash.replace(/^#/, "") : "",
                    hostname: n.hostname,
                    port: n.port,
                    pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname
                }
            }
            return e = o(window.location.href),
                function(t) {
                    var n = r.isString(t) ? o(t) : t;
                    return n.protocol === e.protocol && n.host === e.host
                }
        }() : function() {
            return !0
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(1);
        e.exports = r.isStandardBrowserEnv() ? {
            write: function(e, t, n, o, i, u) {
                var a = [];
                a.push(e + "=" + encodeURIComponent(t)), r.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()), r.isString(o) && a.push("path=" + o), r.isString(i) && a.push("domain=" + i), !0 === u && a.push("secure"), document.cookie = a.join("; ")
            },
            read: function(e) {
                var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                return t ? decodeURIComponent(t[3]) : null
            },
            remove: function(e) {
                this.write(e, "", Date.now() - 864e5)
            }
        } : {
            write: function() {},
            read: function() {
                return null
            },
            remove: function() {}
        }
    }, function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
        }
    }, function(e, t, n) {
        "use strict";
        e.exports = function(e, t) {
            return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(64);

        function o(e) {
            if ("function" != typeof e) throw new TypeError("executor must be a function.");
            var t;
            this.promise = new Promise(function(e) {
                t = e
            });
            var n = this;
            e(function(e) {
                n.reason || (n.reason = new r(e), t(n.reason))
            })
        }
        o.prototype.throwIfRequested = function() {
            if (this.reason) throw this.reason
        }, o.source = function() {
            var e;
            return {
                token: new o(function(t) {
                    e = t
                }),
                cancel: e
            }
        }, e.exports = o
    }, function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            return function(t) {
                return e.apply(null, t)
            }
        }
    }, function(e, t, n) {
        "use strict";
        var r = Object.prototype.hasOwnProperty,
            o = "~";

        function i() {}

        function u(e, t, n) {
            this.fn = e, this.context = t, this.once = n || !1
        }

        function a(e, t, n, r, i) {
            if ("function" != typeof n) throw new TypeError("The listener must be a function");
            var a = new u(n, r || e, i),
                s = o ? o + t : t;
            return e._events[s] ? e._events[s].fn ? e._events[s] = [e._events[s], a] : e._events[s].push(a) : (e._events[s] = a, e._eventsCount++), e
        }

        function s(e, t) {
            0 == --e._eventsCount ? e._events = new i : delete e._events[t]
        }

        function c() {
            this._events = new i, this._eventsCount = 0
        }
        Object.create && (i.prototype = Object.create(null), (new i).__proto__ || (o = !1)), c.prototype.eventNames = function() {
            var e, t, n = [];
            if (0 === this._eventsCount) return n;
            for (t in e = this._events) r.call(e, t) && n.push(o ? t.slice(1) : t);
            return Object.getOwnPropertySymbols ? n.concat(Object.getOwnPropertySymbols(e)) : n
        }, c.prototype.listeners = function(e) {
            var t = o ? o + e : e,
                n = this._events[t];
            if (!n) return [];
            if (n.fn) return [n.fn];
            for (var r = 0, i = n.length, u = new Array(i); r < i; r++) u[r] = n[r].fn;
            return u
        }, c.prototype.listenerCount = function(e) {
            var t = o ? o + e : e,
                n = this._events[t];
            return n ? n.fn ? 1 : n.length : 0
        }, c.prototype.emit = function(e, t, n, r, i, u) {
            var a = o ? o + e : e;
            if (!this._events[a]) return !1;
            var s, c, f = this._events[a],
                p = arguments.length;
            if (f.fn) {
                switch (f.once && this.removeListener(e, f.fn, void 0, !0), p) {
                    case 1:
                        return f.fn.call(f.context), !0;
                    case 2:
                        return f.fn.call(f.context, t), !0;
                    case 3:
                        return f.fn.call(f.context, t, n), !0;
                    case 4:
                        return f.fn.call(f.context, t, n, r), !0;
                    case 5:
                        return f.fn.call(f.context, t, n, r, i), !0;
                    case 6:
                        return f.fn.call(f.context, t, n, r, i, u), !0
                }
                for (c = 1, s = new Array(p - 1); c < p; c++) s[c - 1] = arguments[c];
                f.fn.apply(f.context, s)
            } else {
                var l, d = f.length;
                for (c = 0; c < d; c++) switch (f[c].once && this.removeListener(e, f[c].fn, void 0, !0), p) {
                    case 1:
                        f[c].fn.call(f[c].context);
                        break;
                    case 2:
                        f[c].fn.call(f[c].context, t);
                        break;
                    case 3:
                        f[c].fn.call(f[c].context, t, n);
                        break;
                    case 4:
                        f[c].fn.call(f[c].context, t, n, r);
                        break;
                    default:
                        if (!s)
                            for (l = 1, s = new Array(p - 1); l < p; l++) s[l - 1] = arguments[l];
                        f[c].fn.apply(f[c].context, s)
                }
            }
            return !0
        }, c.prototype.on = function(e, t, n) {
            return a(this, e, t, n, !1)
        }, c.prototype.once = function(e, t, n) {
            return a(this, e, t, n, !0)
        }, c.prototype.removeListener = function(e, t, n, r) {
            var i = o ? o + e : e;
            if (!this._events[i]) return this;
            if (!t) return s(this, i), this;
            var u = this._events[i];
            if (u.fn) u.fn !== t || r && !u.once || n && u.context !== n || s(this, i);
            else {
                for (var a = 0, c = [], f = u.length; a < f; a++)(u[a].fn !== t || r && !u[a].once || n && u[a].context !== n) && c.push(u[a]);
                c.length ? this._events[i] = 1 === c.length ? c[0] : c : s(this, i)
            }
            return this
        }, c.prototype.removeAllListeners = function(e) {
            var t;
            return e ? (t = o ? o + e : e, this._events[t] && s(this, t)) : (this._events = new i, this._eventsCount = 0), this
        }, c.prototype.off = c.prototype.removeListener, c.prototype.addListener = c.prototype.on, c.prefixed = o, c.EventEmitter = c, e.exports = c
    }, function(e, t, n) {
        "use strict";
        var r, o = (r = function(e, t) {
                return (r = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                    })(e, t)
            }, function(e, t) {
                function n() {
                    this.constructor = e
                }
                r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            }),
            i = function() {
                return (i = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }).apply(this, arguments)
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = n(125),
            a = n(65),
            s = n(36),
            c = n(35),
            f = n(34),
            p = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.config = t, n.customAuthProvider = new a.default(n.config), n
                }
                return o(t, e), t.prototype.weixinAuthProvider = function(e) {
                    var t = e.appid,
                        n = e.scope,
                        r = e.loginMode,
                        o = e.state;
                    return new u.default(this.config, t, n, r, o)
                }, t.prototype.signOut = function() {
                    var e = new c.Cache(this.config.persistence);
                    return e.removeStore(f.REFRESH_TOKEN + "_" + this.config.env), e.removeStore(f.ACCESS_TOKEN + "_" + this.config.env), e.removeStore(f.ACCESS_TOKEN_Expire + "_" + this.config.env), this.httpRequest.send("auth.logout", {}).then(function(e) {
                        return e
                    })
                }, t.prototype.getAccessToken = function() {
                    return function(e, t, n, r) {
                        return new(n || (n = Promise))(function(o, i) {
                            function u(e) {
                                try {
                                    s(r.next(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function a(e) {
                                try {
                                    s(r.throw(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function s(e) {
                                e.done ? o(e.value) : new n(function(t) {
                                    t(e.value)
                                }).then(u, a)
                            }
                            s((r = r.apply(e, t || [])).next())
                        })
                    }(this, void 0, void 0, function() {
                        var e;
                        return function(e, t) {
                            var n, r, o, i, u = {
                                label: 0,
                                sent: function() {
                                    if (1 & o[0]) throw o[1];
                                    return o[1]
                                },
                                trys: [],
                                ops: []
                            };
                            return i = {
                                next: a(0),
                                throw: a(1),
                                return: a(2)
                            }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                                return this
                            }), i;

                            function a(i) {
                                return function(a) {
                                    return function(i) {
                                        if (n) throw new TypeError("Generator is already executing.");
                                        for (; u;) try {
                                            if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                            switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                                case 0:
                                                case 1:
                                                    o = i;
                                                    break;
                                                case 4:
                                                    return u.label++, {
                                                        value: i[1],
                                                        done: !1
                                                    };
                                                case 5:
                                                    u.label++, r = i[1], i = [0];
                                                    continue;
                                                case 7:
                                                    i = u.ops.pop(), u.trys.pop();
                                                    continue;
                                                default:
                                                    if (!(o = (o = u.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                        u = 0;
                                                        continue
                                                    }
                                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                        u.label = i[1];
                                                        break
                                                    }
                                                    if (6 === i[0] && u.label < o[1]) {
                                                        u.label = o[1], o = i;
                                                        break
                                                    }
                                                    if (o && u.label < o[2]) {
                                                        u.label = o[2], u.ops.push(i);
                                                        break
                                                    }
                                                    o[2] && u.ops.pop(), u.trys.pop();
                                                    continue
                                            }
                                            i = t.call(e, u)
                                        } catch (e) {
                                            i = [6, e], r = 0
                                        } finally {
                                            n = o = 0
                                        }
                                        if (5 & i[0]) throw i[1];
                                        return {
                                            value: i[0] ? i[1] : void 0,
                                            done: !0
                                        }
                                    }([i, a])
                                }
                            }
                        }(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return e = {}, [4, this.httpRequest.getAccessToken()];
                                case 1:
                                    return [2, (e.accessToken = t.sent().accessToken, e.env = this.config.env, e)]
                            }
                        })
                    })
                }, t.prototype.onLoginStateExpire = function(e) {
                    s.addEventListener("LoginStateExpire", e)
                }, t.prototype.signInWithTicket = function(e) {
                    var t = this;
                    return this.httpRequest.send("auth.signInWithTicket", {
                        ticket: e
                    }).then(function(e) {
                        e.refresh_token && t.customAuthProvider.setRefreshToken(e.refresh_token)
                    })
                }, t.prototype.shouldRefreshAccessToken = function(e) {
                    this.httpRequest._shouldRefreshAccessTokenHook = e.bind(this)
                }, t.prototype.getUserInfo = function() {
                    return this.httpRequest.send("auth.getUserInfo", {}).then(function(e) {
                        return e.code ? e : i({}, e.data, {
                            requestId: e.seqId
                        })
                    })
                }, t
            }(a.default);
        t.default = p
    }, function(e, t, n) {
        "use strict";
        var r, o = (r = function(e, t) {
            return (r = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                })(e, t)
        }, function(e, t) {
            function n() {
                this.constructor = e
            }
            r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        });
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i, u, a = n(37),
            s = n(65);
        ! function(e) {
            e.snsapi_base = "snsapi_base", e.snsapi_userinfo = "snsapi_userinfo", e.snsapi_login = "snsapi_login"
        }(i || (i = {})),
        function(e) {
            e.redirect = "redirect", e.prompt = "prompt"
        }(u || (u = {}));
        var c = function(e) {
            function t(t, n, r, o, i) {
                var u = e.call(this, t) || this;
                return u.config = t, u.appid = n, u.scope = r, u.state = i || "weixin", u.loginMode = o || "redirect", u
            }
            return o(t, e), t.prototype.signIn = function(e) {
                e = e || a.createPromiseCallback();
                var t = this.cache.getStore(this.accessTokenKey),
                    n = this.cache.getStore(this.accessTokenExpireKey);
                if (t) {
                    if (n && n > Date.now()) return e(0), e.promise;
                    this.cache.removeStore(this.accessTokenKey), this.cache.removeStore(this.accessTokenExpireKey)
                }
                if (!1 === Object.values(i).includes(i[this.scope])) throw new Error("错误的scope类型");
                var r = a.getWeixinCode();
                if (!r) return this.redirect();
                var o = "snsapi_login" === this.scope ? "WECHAT-OPEN" : "WECHAT-PUBLIC";
                return this.getRefreshTokenByWXCode(this.appid, o, r).then(function(t) {
                    e(null, t)
                }), e.promise
            }, t.prototype.redirect = function() {
                var e = a.removeParam("code", location.href);
                e = a.removeParam("state", e), e = encodeURIComponent(e);
                var t = "//open.weixin.qq.com/connect/oauth2/authorize";
                "snsapi_login" === this.scope && (t = "//open.weixin.qq.com/connect/qrconnect"), "redirect" === u[this.loginMode] && (location.href = t + "?appid=" + this.appid + "&redirect_uri=" + e + "&response_type=code&scope=" + this.scope + "&state=" + this.state + "#wechat_redirect")
            }, t
        }(s.default);
        t.default = c
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(17),
            o = n(37);
        t.callFunction = function(e, t) {
            var n = e.name,
                i = e.data;
            t = t || o.createPromiseCallback();
            try {
                i = i ? JSON.stringify(i) : ""
            } catch (e) {
                return Promise.reject(e)
            }
            if (!n) return Promise.reject(new Error("函数名不能为空"));
            var u = {
                function_name: n,
                request_data: i
            };
            return new r.Request(this.config).send("functions.invokeFunction", u).then(function(e) {
                if (console.log(e), e.code) t(null, e);
                else {
                    var n = e.data.response_data;
                    try {
                        n = JSON.parse(e.data.response_data), t(null, {
                            result: n,
                            requestId: e.requestId
                        })
                    } catch (e) {
                        t(new Error("response data must be json"))
                    }
                }
                return t.promise
            }).catch(function(e) {
                t(e)
            }), t.promise
        }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            function(e) {
                for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n])
            }(n(38))
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(0),
            o = n(39),
            i = n(2),
            u = function() {
                function e(e) {
                    if (!i.isArray(e)) throw new TypeError('"points" must be of type Point[]. Received type ' + typeof e);
                    if (0 === e.length) throw new Error('"points" must contain 1 point at least');
                    e.forEach(function(e) {
                        if (!(e instanceof o.Point)) throw new TypeError('"points" must be of type Point[]. Received type ' + typeof e + "[]")
                    }), this.points = e
                }
                return e.prototype.parse = function(e) {
                    var t;
                    return (t = {})[e] = {
                        type: "MultiPoint",
                        coordinates: this.points.map(function(e) {
                            return e.toJSON().coordinates
                        })
                    }, t
                }, e.prototype.toJSON = function() {
                    return {
                        type: "MultiPoint",
                        coordinates: this.points.map(function(e) {
                            return e.toJSON().coordinates
                        })
                    }
                }, e.validate = function(e) {
                    if ("MultiPoint" !== e.type || !i.isArray(e.coordinates)) return !1;
                    for (var t = 0, n = e.coordinates; t < n.length; t++) {
                        var r = n[t];
                        if (!i.isNumber(r[0]) || !i.isNumber(r[1])) return !1
                    }
                    return !0
                }, Object.defineProperty(e.prototype, "_internalType", {
                    get: function() {
                        return r.SYMBOL_GEO_MULTI_POINT
                    },
                    enumerable: !0,
                    configurable: !0
                }), e
            }();
        t.MultiPoint = u
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(0),
            o = n(2),
            i = n(43),
            u = function() {
                function e(e) {
                    if (!o.isArray(e)) throw new TypeError('"lines" must be of type LineString[]. Received type ' + typeof e);
                    if (0 === e.length) throw new Error("Polygon must contain 1 linestring at least");
                    e.forEach(function(e) {
                        if (!(e instanceof i.LineString)) throw new TypeError('"lines" must be of type LineString[]. Received type ' + typeof e + "[]")
                    }), this.lines = e
                }
                return e.prototype.parse = function(e) {
                    var t;
                    return (t = {})[e] = {
                        type: "MultiLineString",
                        coordinates: this.lines.map(function(e) {
                            return e.points.map(function(e) {
                                return [e.longitude, e.latitude]
                            })
                        })
                    }, t
                }, e.prototype.toJSON = function() {
                    return {
                        type: "MultiLineString",
                        coordinates: this.lines.map(function(e) {
                            return e.points.map(function(e) {
                                return [e.longitude, e.latitude]
                            })
                        })
                    }
                }, e.validate = function(e) {
                    if ("MultiLineString" !== e.type || !o.isArray(e.coordinates)) return !1;
                    for (var t = 0, n = e.coordinates; t < n.length; t++)
                        for (var r = 0, i = n[t]; r < i.length; r++) {
                            var u = i[r];
                            if (!o.isNumber(u[0]) || !o.isNumber(u[1])) return !1
                        }
                    return !0
                }, Object.defineProperty(e.prototype, "_internalType", {
                    get: function() {
                        return r.SYMBOL_GEO_MULTI_LINE_STRING
                    },
                    enumerable: !0,
                    configurable: !0
                }), e
            }();
        t.MultiLineString = u
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(0),
            o = n(2),
            i = n(68),
            u = function() {
                function e(e) {
                    if (!o.isArray(e)) throw new TypeError('"polygons" must be of type Polygon[]. Received type ' + typeof e);
                    if (0 === e.length) throw new Error("MultiPolygon must contain 1 polygon at least");
                    for (var t = 0, n = e; t < n.length; t++) {
                        var r = n[t];
                        if (!(r instanceof i.Polygon)) throw new TypeError('"polygon" must be of type Polygon[]. Received type ' + typeof r + "[]")
                    }
                    this.polygons = e
                }
                return e.prototype.parse = function(e) {
                    var t;
                    return (t = {})[e] = {
                        type: "MultiPolygon",
                        coordinates: this.polygons.map(function(e) {
                            return e.lines.map(function(e) {
                                return e.points.map(function(e) {
                                    return [e.longitude, e.latitude]
                                })
                            })
                        })
                    }, t
                }, e.prototype.toJSON = function() {
                    return {
                        type: "MultiPolygon",
                        coordinates: this.polygons.map(function(e) {
                            return e.lines.map(function(e) {
                                return e.points.map(function(e) {
                                    return [e.longitude, e.latitude]
                                })
                            })
                        })
                    }
                }, e.validate = function(e) {
                    if ("MultiPolygon" !== e.type || !o.isArray(e.coordinates)) return !1;
                    for (var t = 0, n = e.coordinates; t < n.length; t++)
                        for (var r = 0, i = n[t]; r < i.length; r++)
                            for (var u = 0, a = i[r]; u < a.length; u++) {
                                var s = a[u];
                                if (!o.isNumber(s[0]) || !o.isNumber(s[1])) return !1
                            }
                    return !0
                }, Object.defineProperty(e.prototype, "_internalType", {
                    get: function() {
                        return r.SYMBOL_GEO_POLYGON
                    },
                    enumerable: !0,
                    configurable: !0
                }), e
            }();
        t.MultiPolygon = u
    }, function(e, t, n) {
        "use strict";
        var r, o = this && this.__extends || (r = function(e, t) {
            return (r = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                })(e, t)
        }, function(e, t) {
            function n() {
                this.constructor = e
            }
            r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        });
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(132),
            u = function(e) {
                function t(t, n) {
                    return e.call(this, t, n) || this
                }
                return o(t, e), Object.defineProperty(t.prototype, "name", {
                    get: function() {
                        return this._coll
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.doc = function(e) {
                    return new i.DocumentReference(this._db, this._coll, e)
                }, t.prototype.add = function(e, t) {
                    return this.doc().create(e, t)
                }, t
            }(n(133).Query);
        t.CollectionReference = u
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(69),
            o = n(38),
            i = n(40),
            u = n(70),
            a = n(73),
            s = n(19),
            c = function() {
                function e(e, t, n, r) {
                    void 0 === r && (r = {}), this._db = e, this._coll = t, this.id = n, this.request = new o.Db.reqClass(this._db.config), this.projection = r
                }
                return e.prototype.create = function(e, t) {
                    t = t || r.createPromiseCallback();
                    var n = {
                        collectionName: this._coll,
                        data: a.serialize(e)
                    };
                    return this.id && (n._id = this.id), this.request.send("database.addDocument", n).then(function(e) {
                        e.code ? t(0, e) : t(0, {
                            id: e.data._id,
                            requestId: e.requestId
                        })
                    }).catch(function(e) {
                        t(e)
                    }), t.promise
                }, e.prototype.set = function(e, t) {
                    if (t = t || r.createPromiseCallback(), !e || "object" != typeof e) return Promise.resolve({
                        code: "INVALID_PARAM",
                        message: "参数必需是非空对象"
                    });
                    if (e.hasOwnProperty("_id")) return Promise.resolve({
                        code: "INVALID_PARAM",
                        message: "不能更新_id的值"
                    });
                    var n = !1,
                        o = function(e) {
                            if ("object" == typeof e)
                                for (var t in e) e[t] instanceof s.UpdateCommand ? n = !0 : "object" == typeof e[t] && o(e[t])
                        };
                    if (o(e), n) return Promise.resolve({
                        code: "DATABASE_REQUEST_FAILED",
                        message: "update operator complicit"
                    });
                    var i = {
                        collectionName: this._coll,
                        data: a.serialize(e),
                        multi: !1,
                        merge: !1,
                        upsert: !0
                    };
                    return this.id && (i.query = {
                        _id: this.id
                    }), this.request.send("database.updateDocument", i).then(function(e) {
                        e.code ? t(0, e) : t(0, {
                            updated: e.data.updated,
                            upsertedId: e.data.upserted_id,
                            requestId: e.requestId
                        })
                    }).catch(function(e) {
                        t(e)
                    }), t.promise
                }, e.prototype.update = function(e, t) {
                    if (t = t || r.createPromiseCallback(), !e || "object" != typeof e) return Promise.resolve({
                        code: "INVALID_PARAM",
                        message: "参数必需是非空对象"
                    });
                    if (e.hasOwnProperty("_id")) return Promise.resolve({
                        code: "INVALID_PARAM",
                        message: "不能更新_id的值"
                    });
                    var n = {
                            _id: this.id
                        },
                        o = {
                            collectionName: this._coll,
                            data: u.UpdateSerializer.encode(e),
                            query: n,
                            multi: !1,
                            merge: !0,
                            upsert: !1
                        };
                    return this.request.send("database.updateDocument", o).then(function(e) {
                        e.code ? t(0, e) : t(0, {
                            updated: e.data.updated,
                            upsertedId: e.data.upserted_id,
                            requestId: e.requestId
                        })
                    }).catch(function(e) {
                        t(e)
                    }), t.promise
                }, e.prototype.remove = function(e) {
                    e = e || r.createPromiseCallback();
                    var t = {
                            _id: this.id
                        },
                        n = {
                            collectionName: this._coll,
                            query: t,
                            multi: !1
                        };
                    return this.request.send("database.deleteDocument", n).then(function(t) {
                        t.code ? e(0, t) : e(0, {
                            deleted: t.data.deleted,
                            requestId: t.requestId
                        })
                    }).catch(function(t) {
                        e(t)
                    }), e.promise
                }, e.prototype.get = function(e) {
                    e = e || r.createPromiseCallback();
                    var t = {
                            _id: this.id
                        },
                        n = {
                            collectionName: this._coll,
                            query: t,
                            multi: !1,
                            projection: this.projection
                        };
                    return this.request.send("database.queryDocument", n).then(function(t) {
                        if (t.code) e(0, t);
                        else {
                            var n = i.Util.formatResDocumentData(t.data.list);
                            e(0, {
                                data: n,
                                requestId: t.requestId,
                                total: t.TotalCount,
                                limit: t.Limit,
                                offset: t.Offset
                            })
                        }
                    }).catch(function(t) {
                        e(t)
                    }), e.promise
                }, e.prototype.field = function(t) {
                    for (var n in t) t[n] ? t[n] = 1 : t[n] = 0;
                    return new e(this._db, this._coll, this.id, t)
                }, e
            }();
        t.DocumentReference = c
    }, function(e, t, n) {
        "use strict";
        var r = this && this.__assign || function() {
            return (r = Object.assign || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }).apply(this, arguments)
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = n(69),
            i = n(38),
            u = n(66),
            a = n(40),
            s = n(134),
            c = n(70),
            f = function() {
                function e(e, t, n, r, o) {
                    this._db = e, this._coll = t, this._fieldFilters = n, this._fieldOrders = r || [], this._queryOptions = o || {}, this._request = new i.Db.reqClass(this._db.config)
                }
                return e.prototype.get = function(e) {
                    e = e || o.createPromiseCallback();
                    var t = [];
                    this._fieldOrders && this._fieldOrders.forEach(function(e) {
                        t.push(e)
                    });
                    var n = {
                        collectionName: this._coll
                    };
                    return this._fieldFilters && (n.query = this._fieldFilters), t.length > 0 && (n.order = t), this._queryOptions.offset && (n.offset = this._queryOptions.offset), this._queryOptions.limit ? n.limit = this._queryOptions.limit < 100 ? this._queryOptions.limit : 100 : n.limit = 100, this._queryOptions.projection && (n.projection = this._queryOptions.projection), this._request.send("database.queryDocument", n).then(function(t) {
                        if (t.code) e(0, t);
                        else {
                            var n = {
                                data: a.Util.formatResDocumentData(t.data.list),
                                requestId: t.requestId
                            };
                            t.TotalCount && (n.total = t.TotalCount), t.Limit && (n.limit = t.Limit), t.Offset && (n.offset = t.Offset), e(0, n)
                        }
                    }).catch(function(t) {
                        e(t)
                    }), e.promise
                }, e.prototype.count = function(e) {
                    e = e || o.createPromiseCallback();
                    var t = {
                        collectionName: this._coll
                    };
                    return this._fieldFilters && (t.query = this._fieldFilters), this._request.send("database.countDocument", t).then(function(t) {
                        t.code ? e(0, t) : e(0, {
                            requestId: t.requestId,
                            total: t.data.total
                        })
                    }), e.promise
                }, e.prototype.where = function(t) {
                    return new e(this._db, this._coll, s.QuerySerializer.encode(t), this._fieldOrders, this._queryOptions)
                }, e.prototype.orderBy = function(t, n) {
                    u.Validate.isFieldPath(t), u.Validate.isFieldOrder(n);
                    var r = {
                            field: t,
                            direction: n
                        },
                        o = this._fieldOrders.concat(r);
                    return new e(this._db, this._coll, this._fieldFilters, o, this._queryOptions)
                }, e.prototype.limit = function(t) {
                    u.Validate.isInteger("limit", t);
                    var n = r({}, this._queryOptions);
                    return n.limit = t, new e(this._db, this._coll, this._fieldFilters, this._fieldOrders, n)
                }, e.prototype.skip = function(t) {
                    u.Validate.isInteger("offset", t);
                    var n = r({}, this._queryOptions);
                    return n.offset = t, new e(this._db, this._coll, this._fieldFilters, this._fieldOrders, n)
                }, e.prototype.update = function(e, t) {
                    if (t = t || o.createPromiseCallback(), !e || "object" != typeof e) return Promise.resolve({
                        code: "INVALID_PARAM",
                        message: "参数必需是非空对象"
                    });
                    if (e.hasOwnProperty("_id")) return Promise.resolve({
                        code: "INVALID_PARAM",
                        message: "不能更新_id的值"
                    });
                    var n = {
                        collectionName: this._coll,
                        query: this._fieldFilters,
                        multi: !0,
                        merge: !0,
                        upsert: !1,
                        data: c.UpdateSerializer.encode(e)
                    };
                    return this._request.send("database.updateDocument", n).then(function(e) {
                        e.code ? t(0, e) : t(0, {
                            requestId: e.requestId,
                            updated: e.data.updated,
                            upsertId: e.data.upsert_id
                        })
                    }), t.promise
                }, e.prototype.field = function(t) {
                    for (var n in t) t[n] ? t[n] = 1 : t[n] = 0;
                    var o = r({}, this._queryOptions);
                    return o.projection = t, new e(this._db, this._coll, this._fieldFilters, this._fieldOrders, o)
                }, e.prototype.remove = function(e) {
                    e = e || o.createPromiseCallback(), Object.keys(this._queryOptions).length > 0 && console.warn("`offset`, `limit` and `projection` are not supported in remove() operation"), this._fieldOrders.length > 0 && console.warn("`orderBy` is not supported in remove() operation");
                    var t = {
                        collectionName: this._coll,
                        query: s.QuerySerializer.encode(this._fieldFilters),
                        multi: !0
                    };
                    return this._request.send("database.deleteDocument", t).then(function(t) {
                        t.code ? e(0, t) : e(0, {
                            requestId: t.requestId,
                            deleted: t.data.deleted
                        })
                    }), e.promise
                }, e
            }();
        t.Query = f
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(20),
            o = n(21),
            i = n(0),
            u = n(2),
            a = n(71),
            s = n(72),
            c = function() {
                function e() {}
                return e.encode = function(e) {
                    return (new f).encodeQuery(e)
                }, e
            }();
        t.QuerySerializer = c;
        var f = function() {
            function e() {}
            return e.prototype.encodeQuery = function(e, t) {
                var n;
                return s.isConversionRequired(e) ? o.isLogicCommand(e) ? this.encodeLogicCommand(e) : r.isQueryCommand(e) ? this.encodeQueryCommand(e) : ((n = {})[t] = this.encodeQueryObject(e), n) : u.isObject(e) ? this.encodeQueryObject(e) : e
            }, e.prototype.encodeLogicCommand = function(e) {
                var t, n, r, i = this;
                switch (e.operator) {
                    case o.LOGIC_COMMANDS_LITERAL.AND:
                    case o.LOGIC_COMMANDS_LITERAL.OR:
                        var u = a.operatorToString(e.operator),
                            s = e.operands.map(function(t) {
                                return i.encodeQuery(t, e.fieldName)
                            });
                        return (t = {})[u] = s, t;
                    default:
                        if (u = a.operatorToString(e.operator), 1 === e.operands.length) {
                            var c = this.encodeQuery(e.operands[0]);
                            return (n = {})[u] = c, n
                        }
                        return s = e.operands.map(this.encodeQuery.bind(this)), (r = {})[u] = s, r
                }
            }, e.prototype.encodeQueryCommand = function(e) {
                return r.isComparisonCommand(e), this.encodeComparisonCommand(e)
            }, e.prototype.encodeComparisonCommand = function(e) {
                var t, n, o, u, c, f, p, l, d;
                if (e.fieldName === i.SYMBOL_UNSET_FIELD_NAME) throw new Error("Cannot encode a comparison command with unset field name");
                var h = a.operatorToString(e.operator);
                switch (e.operator) {
                    case r.QUERY_COMMANDS_LITERAL.EQ:
                    case r.QUERY_COMMANDS_LITERAL.NEQ:
                    case r.QUERY_COMMANDS_LITERAL.LT:
                    case r.QUERY_COMMANDS_LITERAL.LTE:
                    case r.QUERY_COMMANDS_LITERAL.GT:
                    case r.QUERY_COMMANDS_LITERAL.GTE:
                        return (t = {})[e.fieldName] = ((n = {})[h] = s.encodeInternalDataType(e.operands[0]), n), t;
                    case r.QUERY_COMMANDS_LITERAL.IN:
                    case r.QUERY_COMMANDS_LITERAL.NIN:
                        return (o = {})[e.fieldName] = ((u = {})[h] = s.encodeInternalDataType(e.operands), u), o;
                    case r.QUERY_COMMANDS_LITERAL.GEO_NEAR:
                        var y = e.operands[0];
                        return (c = {})[e.fieldName] = {
                            $nearSphere: {
                                $geometry: y.geometry.toJSON(),
                                $maxDistance: y.maxDistance,
                                $minDistance: y.minDistance
                            }
                        }, c;
                    case r.QUERY_COMMANDS_LITERAL.GEO_WITHIN:
                        return y = e.operands[0], (f = {})[e.fieldName] = {
                            $geoWithin: {
                                $geometry: y.geometry.toJSON()
                            }
                        }, f;
                    case r.QUERY_COMMANDS_LITERAL.GEO_INTERSECTS:
                        return y = e.operands[0], (p = {})[e.fieldName] = {
                            $geoIntersects: {
                                $geometry: y.geometry.toJSON()
                            }
                        }, p;
                    default:
                        return (l = {})[e.fieldName] = ((d = {})[h] = s.encodeInternalDataType(e.operands[0]), d), l
                }
            }, e.prototype.encodeQueryObject = function(e) {
                var t = s.flattenQueryObject(e);
                for (var n in t) {
                    var i = t[n];
                    if (o.isLogicCommand(i)) {
                        t[n] = i._setFieldName(n);
                        var u = this.encodeLogicCommand(t[n]);
                        this.mergeConditionAfterEncode(t, u, n)
                    } else r.isComparisonCommand(i) ? (t[n] = i._setFieldName(n), u = this.encodeComparisonCommand(t[n]), this.mergeConditionAfterEncode(t, u, n)) : s.isConversionRequired(i) && (t[n] = s.encodeInternalDataType(i))
                }
                return t
            }, e.prototype.mergeConditionAfterEncode = function(e, t, n) {
                for (var r in t[n] || delete e[n], t) e[r] ? u.isArray(e[r]) ? e[r].push(t[r]) : u.isObject(e[r]) ? u.isObject(t[r]) ? Object.assign(e, t) : (console.warn("unmergable condition, query is object but condition is " + u.getType(t) + ", can only overwrite", t, n), e[r] = t[r]) : (console.warn("to-merge query is of type " + u.getType(e) + ", can only overwrite", e, t, n), e[r] = t[r]) : e[r] = t[r]
            }, e
        }()
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(20),
            o = n(21),
            i = n(19),
            u = n(2);
        t.Command = {
            eq: function(e) {
                return new r.QueryCommand(r.QUERY_COMMANDS_LITERAL.EQ, [e])
            },
            neq: function(e) {
                return new r.QueryCommand(r.QUERY_COMMANDS_LITERAL.NEQ, [e])
            },
            lt: function(e) {
                return new r.QueryCommand(r.QUERY_COMMANDS_LITERAL.LT, [e])
            },
            lte: function(e) {
                return new r.QueryCommand(r.QUERY_COMMANDS_LITERAL.LTE, [e])
            },
            gt: function(e) {
                return new r.QueryCommand(r.QUERY_COMMANDS_LITERAL.GT, [e])
            },
            gte: function(e) {
                return new r.QueryCommand(r.QUERY_COMMANDS_LITERAL.GTE, [e])
            },
            in: function(e) {
                return new r.QueryCommand(r.QUERY_COMMANDS_LITERAL.IN, e)
            },
            nin: function(e) {
                return new r.QueryCommand(r.QUERY_COMMANDS_LITERAL.NIN, e)
            },
            geoNear: function(e) {
                return new r.QueryCommand(r.QUERY_COMMANDS_LITERAL.GEO_NEAR, [e])
            },
            geoWithin: function(e) {
                return new r.QueryCommand(r.QUERY_COMMANDS_LITERAL.GEO_WITHIN, [e])
            },
            geoIntersects: function(e) {
                return new r.QueryCommand(r.QUERY_COMMANDS_LITERAL.GEO_INTERSECTS, [e])
            },
            and: function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                var n = u.isArray(arguments[0]) ? arguments[0] : Array.from(arguments);
                return new o.LogicCommand(o.LOGIC_COMMANDS_LITERAL.AND, n)
            },
            or: function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                var n = u.isArray(arguments[0]) ? arguments[0] : Array.from(arguments);
                return new o.LogicCommand(o.LOGIC_COMMANDS_LITERAL.OR, n)
            },
            set: function(e) {
                return new i.UpdateCommand(i.UPDATE_COMMANDS_LITERAL.SET, [e])
            },
            remove: function() {
                return new i.UpdateCommand(i.UPDATE_COMMANDS_LITERAL.REMOVE, [])
            },
            inc: function(e) {
                return new i.UpdateCommand(i.UPDATE_COMMANDS_LITERAL.INC, [e])
            },
            mul: function(e) {
                return new i.UpdateCommand(i.UPDATE_COMMANDS_LITERAL.MUL, [e])
            },
            push: function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                var n = u.isArray(arguments[0]) ? arguments[0] : Array.from(arguments);
                return new i.UpdateCommand(i.UPDATE_COMMANDS_LITERAL.PUSH, n)
            },
            pop: function() {
                return new i.UpdateCommand(i.UPDATE_COMMANDS_LITERAL.POP, [])
            },
            shift: function() {
                return new i.UpdateCommand(i.UPDATE_COMMANDS_LITERAL.SHIFT, [])
            },
            unshift: function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                var n = u.isArray(arguments[0]) ? arguments[0] : Array.from(arguments);
                return new i.UpdateCommand(i.UPDATE_COMMANDS_LITERAL.UNSHIFT, n)
            }
        }, t.default = t.Command
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(0),
            o = function() {
                function e(e) {
                    var t = e.regexp,
                        n = e.options;
                    if (!t) throw new TypeError("regexp must be a string");
                    this.$regex = t, this.$options = n
                }
                return e.prototype.parse = function() {
                    return {
                        $regex: this.$regex,
                        $options: this.$options
                    }
                }, Object.defineProperty(e.prototype, "_internalType", {
                    get: function() {
                        return r.SYMBOL_REGEXP
                    },
                    enumerable: !0,
                    configurable: !0
                }), e
            }();
        t.RegExp = o, t.RegExpConstructor = function(e) {
            return new o(e)
        }
    }])
});