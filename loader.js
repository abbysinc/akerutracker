!function() {
    function e(e, n) {
        return function(e) {
            if (Array.isArray(e))
                return e
        }(e) || function(e, t) {
            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != n) {
                var r, i, o, a, s = [], c = !0, u = !1;
                try {
                    if (o = (n = n.call(e)).next,
                    0 === t) {
                        if (Object(n) !== n)
                            return;
                        c = !1
                    } else
                        for (; !(c = (r = o.call(n)).done) && (s.push(r.value),
                        s.length !== t); c = !0)
                            ;
                } catch (e) {
                    u = !0,
                    i = e
                } finally {
                    try {
                        if (!c && null != n.return && (a = n.return(),
                        Object(a) !== a))
                            return
                    } finally {
                        if (u)
                            throw i
                    }
                }
                return s
            }
        }(e, n) || function(e, n) {
            if (e) {
                if ("string" == typeof e)
                    return t(e, n);
                var r = {}.toString.call(e).slice(8, -1);
                return "Object" === r && e.constructor && (r = e.constructor.name),
                "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? t(e, n) : void 0
            }
        }(e, n) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function t(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++)
            r[n] = e[n];
        return r
    }
    var n = {
        staticScope: "https://maps.gstatic.com/mapfiles/santatracker/v202502142154/",
        version: "v202502142154",
        baseurl: "https://maps.gstatic.com/mapfiles/santatracker/"
    };
    var r = function(e, t) {
        return (r = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        }
        )(e, t)
    };
    var i = function() {
        return (i = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in t = arguments[n])
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
        }
        ).apply(this, arguments)
    };
    function o(e, t, n, r) {
        return new (n || (n = Promise))(function(i, o) {
            function a(e) {
                try {
                    c(r.next(e))
                } catch (e) {
                    o(e)
                }
            }
            function s(e) {
                try {
                    c(r.throw(e))
                } catch (e) {
                    o(e)
                }
            }
            function c(e) {
                var t;
                e.done ? i(e.value) : (t = e.value,
                t instanceof n ? t : new n(function(e) {
                    e(t)
                }
                )).then(a, s)
            }
            c((r = r.apply(e, t || [])).next())
        }
        )
    }
    function a(e, t) {
        var n, r, i, o = {
            label: 0,
            sent: function() {
                if (1 & i[0])
                    throw i[1];
                return i[1]
            },
            trys: [],
            ops: []
        }, a = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
        return a.next = s(0),
        a.throw = s(1),
        a.return = s(2),
        "function" == typeof Symbol && (a[Symbol.iterator] = function() {
            return this
        }
        ),
        a;
        function s(s) {
            return function(c) {
                return function(s) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; a && (a = 0,
                    s[0] && (o = 0)),
                    o; )
                        try {
                            if (n = 1,
                            r && (i = 2 & s[0] ? r.return : s[0] ? r.throw || ((i = r.return) && i.call(r),
                            0) : r.next) && !(i = i.call(r, s[1])).done)
                                return i;
                            switch (r = 0,
                            i && (s = [2 & s[0], i.value]),
                            s[0]) {
                            case 0:
                            case 1:
                                i = s;
                                break;
                            case 4:
                                return o.label++,
                                {
                                    value: s[1],
                                    done: !1
                                };
                            case 5:
                                o.label++,
                                r = s[1],
                                s = [0];
                                continue;
                            case 7:
                                s = o.ops.pop(),
                                o.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = o.trys).length > 0 && i[i.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                    o = 0;
                                    continue
                                }
                                if (3 === s[0] && (!i || s[1] > i[0] && s[1] < i[3])) {
                                    o.label = s[1];
                                    break
                                }
                                if (6 === s[0] && o.label < i[1]) {
                                    o.label = i[1],
                                    i = s;
                                    break
                                }
                                if (i && o.label < i[2]) {
                                    o.label = i[2],
                                    o.ops.push(s);
                                    break
                                }
                                i[2] && o.ops.pop(),
                                o.trys.pop();
                                continue
                            }
                            s = t.call(e, o)
                        } catch (e) {
                            s = [6, e],
                            r = 0
                        } finally {
                            n = i = 0
                        }
                    if (5 & s[0])
                        throw s[1];
                    return {
                        value: s[0] ? s[1] : void 0,
                        done: !0
                    }
                }([s, c])
            }
        }
    }
    function s(e) {
        var t = "function" == typeof Symbol && Symbol.iterator
          , n = t && e[t]
          , r = 0;
        if (n)
            return n.call(e);
        if (e && "number" == typeof e.length)
            return {
                next: function() {
                    return e && r >= e.length && (e = void 0),
                    {
                        value: e && e[r++],
                        done: !e
                    }
                }
            };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }
    function c(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n)
            return e;
        var r, i, o = n.call(e), a = [];
        try {
            for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
                a.push(r.value)
        } catch (e) {
            i = {
                error: e
            }
        } finally {
            try {
                r && !r.done && (n = o.return) && n.call(o)
            } finally {
                if (i)
                    throw i.error
            }
        }
        return a
    }
    function u(e, t, n) {
        if (n || 2 === arguments.length)
            for (var r, i = 0, o = t.length; i < o; i++)
                !r && i in t || (r || (r = Array.prototype.slice.call(t, 0, i)),
                r[i] = t[i]);
        return e.concat(r || Array.prototype.slice.call(t))
    }
    function l(e, t) {
        if (!(t instanceof Object))
            return t;
        switch (t.constructor) {
        case Date:
            return new Date(t.getTime());
        case Object:
            void 0 === e && (e = {});
            break;
        case Array:
            e = [];
            break;
        default:
            return t
        }
        for (var n in t)
            t.hasOwnProperty(n) && "__proto__" !== n && (e[n] = l(e[n], t[n]));
        return e
    }
    "function" == typeof SuppressedError && SuppressedError;
    var f = function() {
        function e() {
            var e = this;
            this.reject = function() {}
            ,
            this.resolve = function() {}
            ,
            this.promise = new Promise(function(t, n) {
                e.resolve = t,
                e.reject = n
            }
            )
        }
        return e.prototype.wrapCallback = function(e) {
            var t = this;
            return function(n, r) {
                n ? t.reject(n) : t.resolve(r),
                "function" == typeof e && (t.promise.catch(function() {}),
                1 === e.length ? e(n) : e(n, r))
            }
        }
        ,
        e
    }();
    var p = "FirebaseError"
      , h = function(e) {
        function t(n, r, i) {
            var o = e.call(this, r) || this;
            return o.code = n,
            o.customData = i,
            o.name = p,
            Object.setPrototypeOf(o, t.prototype),
            Error.captureStackTrace && Error.captureStackTrace(o, d.prototype.create),
            o
        }
        return function(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
            function n() {
                this.constructor = e
            }
            r(e, t),
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
            new n)
        }(t, e),
        t
    }(Error)
      , d = function() {
        function e(e, t, n) {
            this.service = e,
            this.serviceName = t,
            this.errors = n
        }
        return e.prototype.create = function(e) {
            for (var t = [], n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
            var r = t[0] || {}
              , i = this.service + "/" + e
              , o = this.errors[e]
              , a = o ? function(e, t) {
                return e.replace(g, function(e, n) {
                    var r = t[n];
                    return null != r ? String(r) : "<" + n + "?>"
                })
            }(o, r) : "Error"
              , s = this.serviceName + ": " + a + " (" + i + ").";
            return new h(i,s,r)
        }
        ,
        e
    }();
    var g = /\{\$([^}]+)}/g;
    function v(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    function m(e, t) {
        var n = new y(e,t);
        return n.subscribe.bind(n)
    }
    var y = function() {
        function e(e, t) {
            var n = this;
            this.observers = [],
            this.unsubscribes = [],
            this.observerCount = 0,
            this.task = Promise.resolve(),
            this.finalized = !1,
            this.onNoObservers = t,
            this.task.then(function() {
                e(n)
            }).catch(function(e) {
                n.error(e)
            })
        }
        return e.prototype.next = function(e) {
            this.forEachObserver(function(t) {
                t.next(e)
            })
        }
        ,
        e.prototype.error = function(e) {
            this.forEachObserver(function(t) {
                t.error(e)
            }),
            this.close(e)
        }
        ,
        e.prototype.complete = function() {
            this.forEachObserver(function(e) {
                e.complete()
            }),
            this.close()
        }
        ,
        e.prototype.subscribe = function(e, t, n) {
            var r, i = this;
            if (void 0 === e && void 0 === t && void 0 === n)
                throw new Error("Missing Observer.");
            void 0 === (r = function(e, t) {
                if ("object" != typeof e || null === e)
                    return !1;
                for (var n = 0, r = t; n < r.length; n++) {
                    var i = r[n];
                    if (i in e && "function" == typeof e[i])
                        return !0
                }
                return !1
            }(e, ["next", "error", "complete"]) ? e : {
                next: e,
                error: t,
                complete: n
            }).next && (r.next = b),
            void 0 === r.error && (r.error = b),
            void 0 === r.complete && (r.complete = b);
            var o = this.unsubscribeOne.bind(this, this.observers.length);
            return this.finalized && this.task.then(function() {
                try {
                    i.finalError ? r.error(i.finalError) : r.complete()
                } catch (e) {}
            }),
            this.observers.push(r),
            o
        }
        ,
        e.prototype.unsubscribeOne = function(e) {
            void 0 !== this.observers && void 0 !== this.observers[e] && (delete this.observers[e],
            this.observerCount -= 1,
            0 === this.observerCount && void 0 !== this.onNoObservers && this.onNoObservers(this))
        }
        ,
        e.prototype.forEachObserver = function(e) {
            if (!this.finalized)
                for (var t = 0; t < this.observers.length; t++)
                    this.sendOne(t, e)
        }
        ,
        e.prototype.sendOne = function(e, t) {
            var n = this;
            this.task.then(function() {
                if (void 0 !== n.observers && void 0 !== n.observers[e])
                    try {
                        t(n.observers[e])
                    } catch (e) {
                        "undefined" != typeof console && console.error && console.error(e)
                    }
            })
        }
        ,
        e.prototype.close = function(e) {
            var t = this;
            this.finalized || (this.finalized = !0,
            void 0 !== e && (this.finalError = e),
            this.task.then(function() {
                t.observers = void 0,
                t.onNoObservers = void 0
            }))
        }
        ,
        e
    }();
    function b() {}
    var w = 1e3
      , S = 2
      , _ = 144e5
      , I = .5;
    function E(e, t, n) {
        void 0 === t && (t = w),
        void 0 === n && (n = S);
        var r = t * Math.pow(n, e)
          , i = Math.round(I * r * (Math.random() - .5) * 2);
        return Math.min(_, r + i)
    }
    var C = function() {
        function e(e, t, n) {
            this.name = e,
            this.instanceFactory = t,
            this.type = n,
            this.multipleInstances = !1,
            this.serviceProps = {},
            this.instantiationMode = "LAZY",
            this.onInstanceCreated = null
        }
        return e.prototype.setInstantiationMode = function(e) {
            return this.instantiationMode = e,
            this
        }
        ,
        e.prototype.setMultipleInstances = function(e) {
            return this.multipleInstances = e,
            this
        }
        ,
        e.prototype.setServiceProps = function(e) {
            return this.serviceProps = e,
            this
        }
        ,
        e.prototype.setInstanceCreatedCallback = function(e) {
            return this.onInstanceCreated = e,
            this
        }
        ,
        e
    }()
      , O = "[DEFAULT]"
      , k = function() {
        function e(e, t) {
            this.name = e,
            this.container = t,
            this.component = null,
            this.instances = new Map,
            this.instancesDeferred = new Map,
            this.instancesOptions = new Map,
            this.onInitCallbacks = new Map
        }
        return e.prototype.get = function(e) {
            var t = this.normalizeInstanceIdentifier(e);
            if (!this.instancesDeferred.has(t)) {
                var n = new f;
                if (this.instancesDeferred.set(t, n),
                this.isInitialized(t) || this.shouldAutoInitialize())
                    try {
                        var r = this.getOrInitializeService({
                            instanceIdentifier: t
                        });
                        r && n.resolve(r)
                    } catch (e) {}
            }
            return this.instancesDeferred.get(t).promise
        }
        ,
        e.prototype.getImmediate = function(e) {
            var t, n = this.normalizeInstanceIdentifier(null == e ? void 0 : e.identifier), r = null !== (t = null == e ? void 0 : e.optional) && void 0 !== t && t;
            if (!this.isInitialized(n) && !this.shouldAutoInitialize()) {
                if (r)
                    return null;
                throw Error("Service " + this.name + " is not available")
            }
            try {
                return this.getOrInitializeService({
                    instanceIdentifier: n
                })
            } catch (e) {
                if (r)
                    return null;
                throw e
            }
        }
        ,
        e.prototype.getComponent = function() {
            return this.component
        }
        ,
        e.prototype.setComponent = function(e) {
            var t, n;
            if (e.name !== this.name)
                throw Error("Mismatching Component " + e.name + " for Provider " + this.name + ".");
            if (this.component)
                throw Error("Component for " + this.name + " has already been provided");
            if (this.component = e,
            this.shouldAutoInitialize()) {
                if (function(e) {
                    return "EAGER" === e.instantiationMode
                }(e))
                    try {
                        this.getOrInitializeService({
                            instanceIdentifier: O
                        })
                    } catch (e) {}
                try {
                    for (var r = s(this.instancesDeferred.entries()), i = r.next(); !i.done; i = r.next()) {
                        var o = c(i.value, 2)
                          , a = o[0]
                          , u = o[1]
                          , l = this.normalizeInstanceIdentifier(a);
                        try {
                            var f = this.getOrInitializeService({
                                instanceIdentifier: l
                            });
                            u.resolve(f)
                        } catch (e) {}
                    }
                } catch (e) {
                    t = {
                        error: e
                    }
                } finally {
                    try {
                        i && !i.done && (n = r.return) && n.call(r)
                    } finally {
                        if (t)
                            throw t.error
                    }
                }
            }
        }
        ,
        e.prototype.clearInstance = function(e) {
            void 0 === e && (e = O),
            this.instancesDeferred.delete(e),
            this.instancesOptions.delete(e),
            this.instances.delete(e)
        }
        ,
        e.prototype.delete = function() {
            return o(this, void 0, void 0, function() {
                var e;
                return a(this, function(t) {
                    switch (t.label) {
                    case 0:
                        return e = Array.from(this.instances.values()),
                        [4, Promise.all(u(u([], c(e.filter(function(e) {
                            return "INTERNAL"in e
                        }).map(function(e) {
                            return e.INTERNAL.delete()
                        }))), c(e.filter(function(e) {
                            return "_delete"in e
                        }).map(function(e) {
                            return e._delete()
                        }))))];
                    case 1:
                        return t.sent(),
                        [2]
                    }
                })
            })
        }
        ,
        e.prototype.isComponentSet = function() {
            return null != this.component
        }
        ,
        e.prototype.isInitialized = function(e) {
            return void 0 === e && (e = O),
            this.instances.has(e)
        }
        ,
        e.prototype.getOptions = function(e) {
            return void 0 === e && (e = O),
            this.instancesOptions.get(e) || {}
        }
        ,
        e.prototype.initialize = function(e) {
            var t, n;
            void 0 === e && (e = {});
            var r = e.options
              , i = void 0 === r ? {} : r
              , o = this.normalizeInstanceIdentifier(e.instanceIdentifier);
            if (this.isInitialized(o))
                throw Error(this.name + "(" + o + ") has already been initialized");
            if (!this.isComponentSet())
                throw Error("Component " + this.name + " has not been registered yet");
            var a = this.getOrInitializeService({
                instanceIdentifier: o,
                options: i
            });
            try {
                for (var u = s(this.instancesDeferred.entries()), l = u.next(); !l.done; l = u.next()) {
                    var f = c(l.value, 2)
                      , p = f[0]
                      , h = f[1];
                    o === this.normalizeInstanceIdentifier(p) && h.resolve(a)
                }
            } catch (e) {
                t = {
                    error: e
                }
            } finally {
                try {
                    l && !l.done && (n = u.return) && n.call(u)
                } finally {
                    if (t)
                        throw t.error
                }
            }
            return a
        }
        ,
        e.prototype.onInit = function(e, t) {
            var n, r = this.normalizeInstanceIdentifier(t), i = null !== (n = this.onInitCallbacks.get(r)) && void 0 !== n ? n : new Set;
            i.add(e),
            this.onInitCallbacks.set(r, i);
            var o = this.instances.get(r);
            return o && e(o, r),
            function() {
                i.delete(e)
            }
        }
        ,
        e.prototype.invokeOnInitCallbacks = function(e, t) {
            var n, r, i = this.onInitCallbacks.get(t);
            if (i)
                try {
                    for (var o = s(i), a = o.next(); !a.done; a = o.next()) {
                        var c = a.value;
                        try {
                            c(e, t)
                        } catch (e) {}
                    }
                } catch (e) {
                    n = {
                        error: e
                    }
                } finally {
                    try {
                        a && !a.done && (r = o.return) && r.call(o)
                    } finally {
                        if (n)
                            throw n.error
                    }
                }
        }
        ,
        e.prototype.getOrInitializeService = function(e) {
            var t, n = e.instanceIdentifier, r = e.options, i = void 0 === r ? {} : r, o = this.instances.get(n);
            if (!o && this.component && (o = this.component.instanceFactory(this.container, {
                instanceIdentifier: (t = n,
                t === O ? void 0 : t),
                options: i
            }),
            this.instances.set(n, o),
            this.instancesOptions.set(n, i),
            this.invokeOnInitCallbacks(o, n),
            this.component.onInstanceCreated))
                try {
                    this.component.onInstanceCreated(this.container, n, o)
                } catch (e) {}
            return o || null
        }
        ,
        e.prototype.normalizeInstanceIdentifier = function(e) {
            return void 0 === e && (e = O),
            this.component ? this.component.multipleInstances ? e : O : e
        }
        ,
        e.prototype.shouldAutoInitialize = function() {
            return !!this.component && "EXPLICIT" !== this.component.instantiationMode
        }
        ,
        e
    }();
    var T, L = function() {
        function e(e) {
            this.name = e,
            this.providers = new Map
        }
        return e.prototype.addComponent = function(e) {
            var t = this.getProvider(e.name);
            if (t.isComponentSet())
                throw new Error("Component " + e.name + " has already been registered with " + this.name);
            t.setComponent(e)
        }
        ,
        e.prototype.addOrOverwriteComponent = function(e) {
            this.getProvider(e.name).isComponentSet() && this.providers.delete(e.name),
            this.addComponent(e)
        }
        ,
        e.prototype.getProvider = function(e) {
            if (this.providers.has(e))
                return this.providers.get(e);
            var t = new k(e,this);
            return this.providers.set(e, t),
            t
        }
        ,
        e.prototype.getProviders = function() {
            return Array.from(this.providers.values())
        }
        ,
        e
    }();
    function P() {
        for (var e = 0, t = 0, n = arguments.length; t < n; t++)
            e += arguments[t].length;
        var r = Array(e)
          , i = 0;
        for (t = 0; t < n; t++)
            for (var o = arguments[t], a = 0, s = o.length; a < s; a++,
            i++)
                r[i] = o[a];
        return r
    }
    var A, N = [];
    !function(e) {
        e[e.DEBUG = 0] = "DEBUG",
        e[e.VERBOSE = 1] = "VERBOSE",
        e[e.INFO = 2] = "INFO",
        e[e.WARN = 3] = "WARN",
        e[e.ERROR = 4] = "ERROR",
        e[e.SILENT = 5] = "SILENT"
    }(A || (A = {}));
    var j, D = {
        debug: A.DEBUG,
        verbose: A.VERBOSE,
        info: A.INFO,
        warn: A.WARN,
        error: A.ERROR,
        silent: A.SILENT
    }, M = A.INFO, F = ((T = {})[A.DEBUG] = "log",
    T[A.VERBOSE] = "log",
    T[A.INFO] = "info",
    T[A.WARN] = "warn",
    T[A.ERROR] = "error",
    T), R = function(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++)
            n[r - 2] = arguments[r];
        if (!(t < e.logLevel)) {
            var i = (new Date).toISOString()
              , o = F[t];
            if (!o)
                throw new Error("Attempted to log a message with an invalid logType (value: " + t + ")");
            console[o].apply(console, P(["[" + i + "]  " + e.name + ":"], n))
        }
    }, x = function() {
        function e(e) {
            this.name = e,
            this._logLevel = M,
            this._logHandler = R,
            this._userLogHandler = null,
            N.push(this)
        }
        return Object.defineProperty(e.prototype, "logLevel", {
            get: function() {
                return this._logLevel
            },
            set: function(e) {
                if (!(e in A))
                    throw new TypeError('Invalid value "' + e + '" assigned to `logLevel`');
                this._logLevel = e
            },
            enumerable: !1,
            configurable: !0
        }),
        e.prototype.setLogLevel = function(e) {
            this._logLevel = "string" == typeof e ? D[e] : e
        }
        ,
        Object.defineProperty(e.prototype, "logHandler", {
            get: function() {
                return this._logHandler
            },
            set: function(e) {
                if ("function" != typeof e)
                    throw new TypeError("Value assigned to `logHandler` must be a function");
                this._logHandler = e
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "userLogHandler", {
            get: function() {
                return this._userLogHandler
            },
            set: function(e) {
                this._userLogHandler = e
            },
            enumerable: !1,
            configurable: !0
        }),
        e.prototype.debug = function() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
            this._userLogHandler && this._userLogHandler.apply(this, P([this, A.DEBUG], e)),
            this._logHandler.apply(this, P([this, A.DEBUG], e))
        }
        ,
        e.prototype.log = function() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
            this._userLogHandler && this._userLogHandler.apply(this, P([this, A.VERBOSE], e)),
            this._logHandler.apply(this, P([this, A.VERBOSE], e))
        }
        ,
        e.prototype.info = function() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
            this._userLogHandler && this._userLogHandler.apply(this, P([this, A.INFO], e)),
            this._logHandler.apply(this, P([this, A.INFO], e))
        }
        ,
        e.prototype.warn = function() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
            this._userLogHandler && this._userLogHandler.apply(this, P([this, A.WARN], e)),
            this._logHandler.apply(this, P([this, A.WARN], e))
        }
        ,
        e.prototype.error = function() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
            this._userLogHandler && this._userLogHandler.apply(this, P([this, A.ERROR], e)),
            this._logHandler.apply(this, P([this, A.ERROR], e))
        }
        ,
        e
    }();
    function z(e) {
        N.forEach(function(t) {
            t.setLogLevel(e)
        })
    }
    var B, V = ((j = {})["no-app"] = "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",
    j["bad-app-name"] = "Illegal App name: '{$appName}",
    j["duplicate-app"] = "Firebase App named '{$appName}' already exists",
    j["app-deleted"] = "Firebase App named '{$appName}' already deleted",
    j["invalid-app-argument"] = "firebase.{$appName}() takes either no argument or a Firebase App instance.",
    j["invalid-log-argument"] = "First argument to `onLog` must be null or a function.",
    j), U = new d("app","Firebase",V), q = "@firebase/app", H = "0.6.30", K = "[DEFAULT]", G = ((B = {})[q] = "fire-core",
    B["@firebase/analytics"] = "fire-analytics",
    B["@firebase/app-check"] = "fire-app-check",
    B["@firebase/auth"] = "fire-auth",
    B["@firebase/database"] = "fire-rtdb",
    B["@firebase/functions"] = "fire-fn",
    B["@firebase/installations"] = "fire-iid",
    B["@firebase/messaging"] = "fire-fcm",
    B["@firebase/performance"] = "fire-perf",
    B["@firebase/remote-config"] = "fire-rc",
    B["@firebase/storage"] = "fire-gcs",
    B["@firebase/firestore"] = "fire-fst",
    B["fire-js"] = "fire-js",
    B["firebase-wrapper"] = "fire-js-all",
    B), $ = new x("@firebase/app"), W = function() {
        function e(e, t, n) {
            var r = this;
            this.firebase_ = n,
            this.isDeleted_ = !1,
            this.name_ = t.name,
            this.automaticDataCollectionEnabled_ = t.automaticDataCollectionEnabled || !1,
            this.options_ = l(void 0, e),
            this.container = new L(t.name),
            this._addComponent(new C("app",function() {
                return r
            }
            ,"PUBLIC")),
            this.firebase_.INTERNAL.components.forEach(function(e) {
                return r._addComponent(e)
            })
        }
        return Object.defineProperty(e.prototype, "automaticDataCollectionEnabled", {
            get: function() {
                return this.checkDestroyed_(),
                this.automaticDataCollectionEnabled_
            },
            set: function(e) {
                this.checkDestroyed_(),
                this.automaticDataCollectionEnabled_ = e
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "name", {
            get: function() {
                return this.checkDestroyed_(),
                this.name_
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "options", {
            get: function() {
                return this.checkDestroyed_(),
                this.options_
            },
            enumerable: !1,
            configurable: !0
        }),
        e.prototype.delete = function() {
            var e = this;
            return new Promise(function(t) {
                e.checkDestroyed_(),
                t()
            }
            ).then(function() {
                return e.firebase_.INTERNAL.removeApp(e.name_),
                Promise.all(e.container.getProviders().map(function(e) {
                    return e.delete()
                }))
            }).then(function() {
                e.isDeleted_ = !0
            })
        }
        ,
        e.prototype._getService = function(e, t) {
            var n;
            void 0 === t && (t = K),
            this.checkDestroyed_();
            var r = this.container.getProvider(e);
            return r.isInitialized() || "EXPLICIT" !== (null === (n = r.getComponent()) || void 0 === n ? void 0 : n.instantiationMode) || r.initialize(),
            r.getImmediate({
                identifier: t
            })
        }
        ,
        e.prototype._removeServiceInstance = function(e, t) {
            void 0 === t && (t = K),
            this.container.getProvider(e).clearInstance(t)
        }
        ,
        e.prototype._addComponent = function(e) {
            try {
                this.container.addComponent(e)
            } catch (t) {
                $.debug("Component " + e.name + " failed to register with FirebaseApp " + this.name, t)
            }
        }
        ,
        e.prototype._addOrOverwriteComponent = function(e) {
            this.container.addOrOverwriteComponent(e)
        }
        ,
        e.prototype.toJSON = function() {
            return {
                name: this.name,
                automaticDataCollectionEnabled: this.automaticDataCollectionEnabled,
                options: this.options
            }
        }
        ,
        e.prototype.checkDestroyed_ = function() {
            if (this.isDeleted_)
                throw U.create("app-deleted", {
                    appName: this.name_
                })
        }
        ,
        e
    }();
    W.prototype.name && W.prototype.options || W.prototype.delete || console.log("dc");
    var J = "8.10.0";
    function Y(e) {
        var t = {}
          , n = new Map
          , r = {
            __esModule: !0,
            initializeApp: function(n, i) {
                void 0 === i && (i = {});
                if ("object" != typeof i || null === i) {
                    var o = i;
                    i = {
                        name: o
                    }
                }
                var a = i;
                void 0 === a.name && (a.name = K);
                var s = a.name;
                if ("string" != typeof s || !s)
                    throw U.create("bad-app-name", {
                        appName: String(s)
                    });
                if (v(t, s))
                    throw U.create("duplicate-app", {
                        appName: s
                    });
                var c = new e(n,a,r);
                return t[s] = c,
                c
            },
            app: i,
            registerVersion: function(e, t, n) {
                var r, i = null !== (r = G[e]) && void 0 !== r ? r : e;
                n && (i += "-" + n);
                var a = i.match(/\s|\//)
                  , s = t.match(/\s|\//);
                if (a || s) {
                    var c = ['Unable to register library "' + i + '" with version "' + t + '":'];
                    return a && c.push('library name "' + i + '" contains illegal characters (whitespace or "/")'),
                    a && s && c.push("and"),
                    s && c.push('version name "' + t + '" contains illegal characters (whitespace or "/")'),
                    void $.warn(c.join(" "))
                }
                o(new C(i + "-version",function() {
                    return {
                        library: i,
                        version: t
                    }
                }
                ,"VERSION"))
            },
            setLogLevel: z,
            onLog: function(e, t) {
                if (null !== e && "function" != typeof e)
                    throw U.create("invalid-log-argument");
                !function(e, t) {
                    for (var n = function(n) {
                        var r = null;
                        t && t.level && (r = D[t.level]),
                        n.userLogHandler = null === e ? null : function(t, n) {
                            for (var i = [], o = 2; o < arguments.length; o++)
                                i[o - 2] = arguments[o];
                            var a = i.map(function(e) {
                                if (null == e)
                                    return null;
                                if ("string" == typeof e)
                                    return e;
                                if ("number" == typeof e || "boolean" == typeof e)
                                    return e.toString();
                                if (e instanceof Error)
                                    return e.message;
                                try {
                                    return JSON.stringify(e)
                                } catch (e) {
                                    return null
                                }
                            }).filter(function(e) {
                                return e
                            }).join(" ");
                            n >= (null != r ? r : t.logLevel) && e({
                                level: A[n].toLowerCase(),
                                message: a,
                                args: i,
                                type: t.name
                            })
                        }
                    }, r = 0, i = N; r < i.length; r++)
                        n(i[r])
                }(e, t)
            },
            apps: null,
            SDK_VERSION: J,
            INTERNAL: {
                registerComponent: o,
                removeApp: function(e) {
                    delete t[e]
                },
                components: n,
                useAsService: function(e, t) {
                    if ("serverAuth" === t)
                        return null;
                    return t
                }
            }
        };
        function i(e) {
            if (!v(t, e = e || K))
                throw U.create("no-app", {
                    appName: e
                });
            return t[e]
        }
        function o(o) {
            var a = o.name;
            if (n.has(a))
                return $.debug("There were multiple attempts to register component " + a + "."),
                "PUBLIC" === o.type ? r[a] : null;
            if (n.set(a, o),
            "PUBLIC" === o.type) {
                var s = function(e) {
                    if (void 0 === e && (e = i()),
                    "function" != typeof e[a])
                        throw U.create("invalid-app-argument", {
                            appName: a
                        });
                    return e[a]()
                };
                void 0 !== o.serviceProps && l(s, o.serviceProps),
                r[a] = s,
                e.prototype[a] = function() {
                    for (var e = [], t = 0; t < arguments.length; t++)
                        e[t] = arguments[t];
                    return this._getService.bind(this, a).apply(this, o.multipleInstances ? e : [])
                }
            }
            for (var c = 0, u = Object.keys(t); c < u.length; c++) {
                var f = u[c];
                t[f]._addComponent(o)
            }
            return "PUBLIC" === o.type ? r[a] : null
        }
        return r.default = r,
        Object.defineProperty(r, "apps", {
            get: function() {
                return Object.keys(t).map(function(e) {
                    return t[e]
                })
            }
        }),
        i.App = e,
        r
    }
    var X = function e() {
        var t = Y(W);
        return t.INTERNAL = i(i({}, t.INTERNAL), {
            createFirebaseNamespace: e,
            extendNamespace: function(e) {
                l(t, e)
            },
            createSubscribe: m,
            ErrorFactory: d,
            deepExtend: l
        }),
        t
    }()
      , Z = function() {
        function e(e) {
            this.container = e
        }
        return e.prototype.getPlatformInfoString = function() {
            return this.container.getProviders().map(function(e) {
                if (function(e) {
                    var t = e.getComponent();
                    return "VERSION" === (null == t ? void 0 : t.type)
                }(e)) {
                    var t = e.getImmediate();
                    return t.library + "/" + t.version
                }
                return null
            }).filter(function(e) {
                return e
            }).join(" ")
        }
        ,
        e
    }();
    if ("object" == typeof self && self.self === self && void 0 !== self.firebase) {
        $.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");
        var Q = self.firebase.SDK_VERSION;
        Q && Q.indexOf("LITE") >= 0 && $.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")
    }
    var ee = X.initializeApp;
    X.initializeApp = function() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        return function() {
            try {
                return "[object process]" === Object.prototype.toString.call(global.process)
            } catch (e) {
                return !1
            }
        }() && $.warn('\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the "main" field in package.json.\n      \n      If you are using Webpack, you can specify "main" as the first item in\n      "resolve.mainFields":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the @rollup/plugin-node-resolve plugin and specify "main"\n      as the first item in "mainFields", e.g. [\'main\', \'module\'].\n      https://github.com/rollup/@rollup/plugin-node-resolve\n      '),
        ee.apply(void 0, e)
    }
    ;
    var te = X;
    !function(e, t) {
        e.INTERNAL.registerComponent(new C("platform-logger",function(e) {
            return new Z(e)
        }
        ,"PRIVATE")),
        e.registerVersion(q, H, t),
        e.registerVersion("fire-js", "")
    }(te);
    te.registerVersion("firebase", "8.10.1", "app"),
    te.SDK_VERSION = "8.10.1";
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;
    var ne = {
        exports: {}
    };
    !function(e) {
        function t(e) {
            return new Promise(function(t, n) {
                e.onsuccess = function() {
                    t(e.result)
                }
                ,
                e.onerror = function() {
                    n(e.error)
                }
            }
            )
        }
        function n(e, n, r) {
            var i, o = new Promise(function(o, a) {
                t(i = e[n].apply(e, r)).then(o, a)
            }
            );
            return o.request = i,
            o
        }
        function r(e, t, n) {
            n.forEach(function(n) {
                Object.defineProperty(e.prototype, n, {
                    get: function() {
                        return this[t][n]
                    },
                    set: function(e) {
                        this[t][n] = e
                    }
                })
            })
        }
        function i(e, t, r, i) {
            i.forEach(function(i) {
                i in r.prototype && (e.prototype[i] = function() {
                    return n(this[t], i, arguments)
                }
                )
            })
        }
        function o(e, t, n, r) {
            r.forEach(function(r) {
                r in n.prototype && (e.prototype[r] = function() {
                    return this[t][r].apply(this[t], arguments)
                }
                )
            })
        }
        function a(e, t, r, i) {
            i.forEach(function(i) {
                i in r.prototype && (e.prototype[i] = function() {
                    return e = this[t],
                    (r = n(e, i, arguments)).then(function(e) {
                        if (e)
                            return new c(e,r.request)
                    });
                    var e, r
                }
                )
            })
        }
        function s(e) {
            this._index = e
        }
        function c(e, t) {
            this._cursor = e,
            this._request = t
        }
        function u(e) {
            this._store = e
        }
        function l(e) {
            this._tx = e,
            this.complete = new Promise(function(t, n) {
                e.oncomplete = function() {
                    t()
                }
                ,
                e.onerror = function() {
                    n(e.error)
                }
                ,
                e.onabort = function() {
                    n(e.error)
                }
            }
            )
        }
        function f(e, t, n) {
            this._db = e,
            this.oldVersion = t,
            this.transaction = new l(n)
        }
        function p(e) {
            this._db = e
        }
        r(s, "_index", ["name", "keyPath", "multiEntry", "unique"]),
        i(s, "_index", IDBIndex, ["get", "getKey", "getAll", "getAllKeys", "count"]),
        a(s, "_index", IDBIndex, ["openCursor", "openKeyCursor"]),
        r(c, "_cursor", ["direction", "key", "primaryKey", "value"]),
        i(c, "_cursor", IDBCursor, ["update", "delete"]),
        ["advance", "continue", "continuePrimaryKey"].forEach(function(e) {
            e in IDBCursor.prototype && (c.prototype[e] = function() {
                var n = this
                  , r = arguments;
                return Promise.resolve().then(function() {
                    return n._cursor[e].apply(n._cursor, r),
                    t(n._request).then(function(e) {
                        if (e)
                            return new c(e,n._request)
                    })
                })
            }
            )
        }),
        u.prototype.createIndex = function() {
            return new s(this._store.createIndex.apply(this._store, arguments))
        }
        ,
        u.prototype.index = function() {
            return new s(this._store.index.apply(this._store, arguments))
        }
        ,
        r(u, "_store", ["name", "keyPath", "indexNames", "autoIncrement"]),
        i(u, "_store", IDBObjectStore, ["put", "add", "delete", "clear", "get", "getAll", "getKey", "getAllKeys", "count"]),
        a(u, "_store", IDBObjectStore, ["openCursor", "openKeyCursor"]),
        o(u, "_store", IDBObjectStore, ["deleteIndex"]),
        l.prototype.objectStore = function() {
            return new u(this._tx.objectStore.apply(this._tx, arguments))
        }
        ,
        r(l, "_tx", ["objectStoreNames", "mode"]),
        o(l, "_tx", IDBTransaction, ["abort"]),
        f.prototype.createObjectStore = function() {
            return new u(this._db.createObjectStore.apply(this._db, arguments))
        }
        ,
        r(f, "_db", ["name", "version", "objectStoreNames"]),
        o(f, "_db", IDBDatabase, ["deleteObjectStore", "close"]),
        p.prototype.transaction = function() {
            return new l(this._db.transaction.apply(this._db, arguments))
        }
        ,
        r(p, "_db", ["name", "version", "objectStoreNames"]),
        o(p, "_db", IDBDatabase, ["close"]),
        ["openCursor", "openKeyCursor"].forEach(function(e) {
            [u, s].forEach(function(t) {
                e in t.prototype && (t.prototype[e.replace("open", "iterate")] = function() {
                    var t, n = (t = arguments,
                    Array.prototype.slice.call(t)), r = n[n.length - 1], i = this._store || this._index, o = i[e].apply(i, n.slice(0, -1));
                    o.onsuccess = function() {
                        r(o.result)
                    }
                }
                )
            })
        }),
        [s, u].forEach(function(e) {
            e.prototype.getAll || (e.prototype.getAll = function(e, t) {
                var n = this
                  , r = [];
                return new Promise(function(i) {
                    n.iterateCursor(e, function(e) {
                        e ? (r.push(e.value),
                        void 0 === t || r.length != t ? e.continue() : i(r)) : i(r)
                    })
                }
                )
            }
            )
        }),
        e.openDb = function(e, t, r) {
            var i = n(indexedDB, "open", [e, t])
              , o = i.request;
            return o && (o.onupgradeneeded = function(e) {
                r && r(new f(o.result,e.oldVersion,o.transaction))
            }
            ),
            i.then(function(e) {
                return new p(e)
            })
        }
        ,
        e.deleteDb = function(e) {
            return n(indexedDB, "deleteDatabase", [e])
        }
        ,
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }(ne.exports);
    var re, ie = "@firebase/installations", oe = "0.4.32", ae = 1e4, se = "w:" + oe, ce = "FIS_v2", ue = "https://firebaseinstallations.googleapis.com/v1", le = 36e5, fe = ((re = {})["missing-app-config-values"] = 'Missing App configuration value: "{$valueName}"',
    re["not-registered"] = "Firebase Installation is not registered.",
    re["installation-not-found"] = "Firebase Installation not found.",
    re["request-failed"] = '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
    re["app-offline"] = "Could not process request. Application offline.",
    re["delete-pending-registration"] = "Can't delete installation while there is a pending registration request.",
    re), pe = new d("installations","Installations",fe);
    function he(e) {
        return e instanceof h && e.code.includes("request-failed")
    }
    function de(e) {
        var t = e.projectId;
        return ue + "/projects/" + t + "/installations"
    }
    function ge(e) {
        return {
            token: e.token,
            requestStatus: 2,
            expiresIn: (t = e.expiresIn,
            Number(t.replace("s", "000"))),
            creationTime: Date.now()
        };
        var t
    }
    function ve(e, t) {
        return o(this, void 0, void 0, function() {
            var n, r;
            return a(this, function(i) {
                switch (i.label) {
                case 0:
                    return [4, t.json()];
                case 1:
                    return n = i.sent(),
                    r = n.error,
                    [2, pe.create("request-failed", {
                        requestName: e,
                        serverCode: r.code,
                        serverMessage: r.message,
                        serverStatus: r.status
                    })]
                }
            })
        })
    }
    function me(e) {
        var t = e.apiKey;
        return new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
            "x-goog-api-key": t
        })
    }
    function ye(e, t) {
        var n = t.refreshToken
          , r = me(e);
        return r.append("Authorization", function(e) {
            return ce + " " + e
        }(n)),
        r
    }
    function be(e) {
        return o(this, void 0, void 0, function() {
            var t;
            return a(this, function(n) {
                switch (n.label) {
                case 0:
                    return [4, e()];
                case 1:
                    return (t = n.sent()).status >= 500 && t.status < 600 ? [2, e()] : [2, t]
                }
            })
        })
    }
    function we(e, t) {
        var n = t.fid;
        return o(this, void 0, void 0, function() {
            var t, r, i, o, s, c;
            return a(this, function(a) {
                switch (a.label) {
                case 0:
                    return t = de(e),
                    r = me(e),
                    i = {
                        fid: n,
                        authVersion: ce,
                        appId: e.appId,
                        sdkVersion: se
                    },
                    o = {
                        method: "POST",
                        headers: r,
                        body: JSON.stringify(i)
                    },
                    [4, be(function() {
                        return fetch(t, o)
                    })];
                case 1:
                    return (s = a.sent()).ok ? [4, s.json()] : [3, 3];
                case 2:
                    return c = a.sent(),
                    [2, {
                        fid: c.fid || n,
                        registrationStatus: 2,
                        refreshToken: c.refreshToken,
                        authToken: ge(c.authToken)
                    }];
                case 3:
                    return [4, ve("Create Installation", s)];
                case 4:
                    throw a.sent()
                }
            })
        })
    }
    function Se(e) {
        return new Promise(function(t) {
            setTimeout(t, e)
        }
        )
    }
    var _e = /^[cdef][\w-]{21}$/
      , Ie = "";
    function Ee() {
        try {
            var e = new Uint8Array(17);
            (self.crypto || self.msCrypto).getRandomValues(e),
            e[0] = 112 + e[0] % 16;
            var t = function(e) {
                return (t = e,
                btoa(String.fromCharCode.apply(String, u([], c(t)))).replace(/\+/g, "-").replace(/\//g, "_")).substr(0, 22);
                var t
            }(e);
            return _e.test(t) ? t : Ie
        } catch (e) {
            return Ie
        }
    }
    function Ce(e) {
        return e.appName + "!" + e.appId
    }
    var Oe = new Map;
    function ke(e, t) {
        var n = Ce(e);
        Te(n, t),
        function(e, t) {
            var n = Pe();
            n && n.postMessage({
                key: e,
                fid: t
            });
            Ae()
        }(n, t)
    }
    function Te(e, t) {
        var n, r, i = Oe.get(e);
        if (i)
            try {
                for (var o = s(i), a = o.next(); !a.done; a = o.next()) {
                    (0,
                    a.value)(t)
                }
            } catch (e) {
                n = {
                    error: e
                }
            } finally {
                try {
                    a && !a.done && (r = o.return) && r.call(o)
                } finally {
                    if (n)
                        throw n.error
                }
            }
    }
    var Le = null;
    function Pe() {
        return !Le && "BroadcastChannel"in self && ((Le = new BroadcastChannel("[Firebase] FID Change")).onmessage = function(e) {
            Te(e.data.key, e.data.fid)
        }
        ),
        Le
    }
    function Ae() {
        0 === Oe.size && Le && (Le.close(),
        Le = null)
    }
    var Ne, je = "firebase-installations-database", De = 1, Me = "firebase-installations-store", Fe = null;
    function Re() {
        return Fe || (Fe = ne.exports.openDb(je, De, function(e) {
            switch (e.oldVersion) {
            case 0:
                e.createObjectStore(Me)
            }
        })),
        Fe
    }
    function xe(e, t) {
        return o(this, void 0, void 0, function() {
            var n, r, i, o, s;
            return a(this, function(a) {
                switch (a.label) {
                case 0:
                    return n = Ce(e),
                    [4, Re()];
                case 1:
                    return r = a.sent(),
                    i = r.transaction(Me, "readwrite"),
                    [4, (o = i.objectStore(Me)).get(n)];
                case 2:
                    return s = a.sent(),
                    [4, o.put(t, n)];
                case 3:
                    return a.sent(),
                    [4, i.complete];
                case 4:
                    return a.sent(),
                    s && s.fid === t.fid || ke(e, t.fid),
                    [2, t]
                }
            })
        })
    }
    function ze(e) {
        return o(this, void 0, void 0, function() {
            var t, n, r;
            return a(this, function(i) {
                switch (i.label) {
                case 0:
                    return t = Ce(e),
                    [4, Re()];
                case 1:
                    return n = i.sent(),
                    [4, (r = n.transaction(Me, "readwrite")).objectStore(Me).delete(t)];
                case 2:
                    return i.sent(),
                    [4, r.complete];
                case 3:
                    return i.sent(),
                    [2]
                }
            })
        })
    }
    function Be(e, t) {
        return o(this, void 0, void 0, function() {
            var n, r, i, o, s, c;
            return a(this, function(a) {
                switch (a.label) {
                case 0:
                    return n = Ce(e),
                    [4, Re()];
                case 1:
                    return r = a.sent(),
                    i = r.transaction(Me, "readwrite"),
                    [4, (o = i.objectStore(Me)).get(n)];
                case 2:
                    return s = a.sent(),
                    void 0 !== (c = t(s)) ? [3, 4] : [4, o.delete(n)];
                case 3:
                    return a.sent(),
                    [3, 6];
                case 4:
                    return [4, o.put(c, n)];
                case 5:
                    a.sent(),
                    a.label = 6;
                case 6:
                    return [4, i.complete];
                case 7:
                    return a.sent(),
                    !c || s && s.fid === c.fid || ke(e, c.fid),
                    [2, c]
                }
            })
        })
    }
    function Ve(e) {
        return o(this, void 0, void 0, function() {
            var t, n, r;
            return a(this, function(i) {
                switch (i.label) {
                case 0:
                    return [4, Be(e, function(n) {
                        var r = function(e) {
                            return He(e || {
                                fid: Ee(),
                                registrationStatus: 0
                            })
                        }(n)
                          , i = function(e, t) {
                            if (0 === t.registrationStatus) {
                                if (!navigator.onLine) {
                                    var n = Promise.reject(pe.create("app-offline"));
                                    return {
                                        installationEntry: t,
                                        registrationPromise: n
                                    }
                                }
                                var r = {
                                    fid: t.fid,
                                    registrationStatus: 1,
                                    registrationTime: Date.now()
                                }
                                  , i = function(e, t) {
                                    return o(this, void 0, void 0, function() {
                                        var n, r;
                                        return a(this, function(i) {
                                            switch (i.label) {
                                            case 0:
                                                return i.trys.push([0, 2, , 7]),
                                                [4, we(e, t)];
                                            case 1:
                                                return n = i.sent(),
                                                [2, xe(e, n)];
                                            case 2:
                                                return he(r = i.sent()) && 409 === r.customData.serverCode ? [4, ze(e)] : [3, 4];
                                            case 3:
                                                return i.sent(),
                                                [3, 6];
                                            case 4:
                                                return [4, xe(e, {
                                                    fid: t.fid,
                                                    registrationStatus: 0
                                                })];
                                            case 5:
                                                i.sent(),
                                                i.label = 6;
                                            case 6:
                                                throw r;
                                            case 7:
                                                return [2]
                                            }
                                        })
                                    })
                                }(e, r);
                                return {
                                    installationEntry: r,
                                    registrationPromise: i
                                }
                            }
                            return 1 === t.registrationStatus ? {
                                installationEntry: t,
                                registrationPromise: Ue(e)
                            } : {
                                installationEntry: t
                            }
                        }(e, r);
                        return t = i.registrationPromise,
                        i.installationEntry
                    })];
                case 1:
                    return (n = i.sent()).fid !== Ie ? [3, 3] : (r = {},
                    [4, t]);
                case 2:
                    return [2, (r.installationEntry = i.sent(),
                    r)];
                case 3:
                    return [2, {
                        installationEntry: n,
                        registrationPromise: t
                    }]
                }
            })
        })
    }
    function Ue(e) {
        return o(this, void 0, void 0, function() {
            var t, n, r, i;
            return a(this, function(o) {
                switch (o.label) {
                case 0:
                    return [4, qe(e)];
                case 1:
                    t = o.sent(),
                    o.label = 2;
                case 2:
                    return 1 !== t.registrationStatus ? [3, 5] : [4, Se(100)];
                case 3:
                    return o.sent(),
                    [4, qe(e)];
                case 4:
                    return t = o.sent(),
                    [3, 2];
                case 5:
                    return 0 !== t.registrationStatus ? [3, 7] : [4, Ve(e)];
                case 6:
                    return n = o.sent(),
                    r = n.installationEntry,
                    (i = n.registrationPromise) ? [2, i] : [2, r];
                case 7:
                    return [2, t]
                }
            })
        })
    }
    function qe(e) {
        return Be(e, function(e) {
            if (!e)
                throw pe.create("installation-not-found");
            return He(e)
        })
    }
    function He(e) {
        return 1 === (t = e).registrationStatus && t.registrationTime + ae < Date.now() ? {
            fid: e.fid,
            registrationStatus: 0
        } : e;
        var t
    }
    function Ke(e, t) {
        var n = e.appConfig
          , r = e.platformLoggerProvider;
        return o(this, void 0, void 0, function() {
            var e, i, o, s, c, u, l;
            return a(this, function(a) {
                switch (a.label) {
                case 0:
                    return e = function(e, t) {
                        var n = t.fid;
                        return de(e) + "/" + n + "/authTokens:generate"
                    }(n, t),
                    i = ye(n, t),
                    (o = r.getImmediate({
                        optional: !0
                    })) && i.append("x-firebase-client", o.getPlatformInfoString()),
                    s = {
                        installation: {
                            sdkVersion: se
                        }
                    },
                    c = {
                        method: "POST",
                        headers: i,
                        body: JSON.stringify(s)
                    },
                    [4, be(function() {
                        return fetch(e, c)
                    })];
                case 1:
                    return (u = a.sent()).ok ? [4, u.json()] : [3, 3];
                case 2:
                    return l = a.sent(),
                    [2, ge(l)];
                case 3:
                    return [4, ve("Generate Auth Token", u)];
                case 4:
                    throw a.sent()
                }
            })
        })
    }
    function Ge(e, t) {
        return void 0 === t && (t = !1),
        o(this, void 0, void 0, function() {
            var n, r, s;
            return a(this, function(c) {
                switch (c.label) {
                case 0:
                    return [4, Be(e.appConfig, function(r) {
                        if (!We(r))
                            throw pe.create("not-registered");
                        var s, c = r.authToken;
                        if (t || 2 !== (s = c).requestStatus || function(e) {
                            var t = Date.now();
                            return t < e.creationTime || e.creationTime + e.expiresIn < t + le
                        }(s)) {
                            if (1 === c.requestStatus)
                                return n = function(e, t) {
                                    return o(this, void 0, void 0, function() {
                                        var n, r;
                                        return a(this, function(i) {
                                            switch (i.label) {
                                            case 0:
                                                return [4, $e(e.appConfig)];
                                            case 1:
                                                n = i.sent(),
                                                i.label = 2;
                                            case 2:
                                                return 1 !== n.authToken.requestStatus ? [3, 5] : [4, Se(100)];
                                            case 3:
                                                return i.sent(),
                                                [4, $e(e.appConfig)];
                                            case 4:
                                                return n = i.sent(),
                                                [3, 2];
                                            case 5:
                                                return 0 === (r = n.authToken).requestStatus ? [2, Ge(e, t)] : [2, r]
                                            }
                                        })
                                    })
                                }(e, t),
                                r;
                            if (!navigator.onLine)
                                throw pe.create("app-offline");
                            var u = function(e) {
                                var t = {
                                    requestStatus: 1,
                                    requestTime: Date.now()
                                };
                                return i(i({}, e), {
                                    authToken: t
                                })
                            }(r);
                            return n = function(e, t) {
                                return o(this, void 0, void 0, function() {
                                    var n, r, o;
                                    return a(this, function(a) {
                                        switch (a.label) {
                                        case 0:
                                            return a.trys.push([0, 3, , 8]),
                                            [4, Ke(e, t)];
                                        case 1:
                                            return n = a.sent(),
                                            o = i(i({}, t), {
                                                authToken: n
                                            }),
                                            [4, xe(e.appConfig, o)];
                                        case 2:
                                            return a.sent(),
                                            [2, n];
                                        case 3:
                                            return !he(r = a.sent()) || 401 !== r.customData.serverCode && 404 !== r.customData.serverCode ? [3, 5] : [4, ze(e.appConfig)];
                                        case 4:
                                            return a.sent(),
                                            [3, 7];
                                        case 5:
                                            return o = i(i({}, t), {
                                                authToken: {
                                                    requestStatus: 0
                                                }
                                            }),
                                            [4, xe(e.appConfig, o)];
                                        case 6:
                                            a.sent(),
                                            a.label = 7;
                                        case 7:
                                            throw r;
                                        case 8:
                                            return [2]
                                        }
                                    })
                                })
                            }(e, u),
                            u
                        }
                        return r
                    })];
                case 1:
                    return r = c.sent(),
                    n ? [4, n] : [3, 3];
                case 2:
                    return s = c.sent(),
                    [3, 4];
                case 3:
                    s = r.authToken,
                    c.label = 4;
                case 4:
                    return [2, s]
                }
            })
        })
    }
    function $e(e) {
        return Be(e, function(e) {
            if (!We(e))
                throw pe.create("not-registered");
            var t, n = e.authToken;
            return 1 === (t = n).requestStatus && t.requestTime + ae < Date.now() ? i(i({}, e), {
                authToken: {
                    requestStatus: 0
                }
            }) : e
        })
    }
    function We(e) {
        return void 0 !== e && 2 === e.registrationStatus
    }
    function Je(e) {
        return o(this, void 0, void 0, function() {
            var t;
            return a(this, function(n) {
                switch (n.label) {
                case 0:
                    return [4, Ve(e)];
                case 1:
                    return (t = n.sent().registrationPromise) ? [4, t] : [3, 3];
                case 2:
                    n.sent(),
                    n.label = 3;
                case 3:
                    return [2]
                }
            })
        })
    }
    function Ye(e, t) {
        return o(this, void 0, void 0, function() {
            var n, r, i, o;
            return a(this, function(a) {
                switch (a.label) {
                case 0:
                    return n = function(e, t) {
                        var n = t.fid;
                        return de(e) + "/" + n
                    }(e, t),
                    r = ye(e, t),
                    i = {
                        method: "DELETE",
                        headers: r
                    },
                    [4, be(function() {
                        return fetch(n, i)
                    })];
                case 1:
                    return (o = a.sent()).ok ? [3, 3] : [4, ve("Delete Installation", o)];
                case 2:
                    throw a.sent();
                case 3:
                    return [2]
                }
            })
        })
    }
    function Xe(e, t) {
        var n = e.appConfig;
        return function(e, t) {
            Pe();
            var n = Ce(e)
              , r = Oe.get(n);
            r || (r = new Set,
            Oe.set(n, r)),
            r.add(t)
        }(n, t),
        function() {
            !function(e, t) {
                var n = Ce(e)
                  , r = Oe.get(n);
                r && (r.delete(t),
                0 === r.size && Oe.delete(n),
                Ae())
            }(n, t)
        }
    }
    function Ze(e) {
        return pe.create("missing-app-config-values", {
            valueName: e
        })
    }
    (Ne = te).INTERNAL.registerComponent(new C("installations",function(e) {
        var t = e.getProvider("app").getImmediate()
          , n = {
            appConfig: function(e) {
                var t, n;
                if (!e || !e.options)
                    throw Ze("App Configuration");
                if (!e.name)
                    throw Ze("App Name");
                try {
                    for (var r = s(["projectId", "apiKey", "appId"]), i = r.next(); !i.done; i = r.next()) {
                        var o = i.value;
                        if (!e.options[o])
                            throw Ze(o)
                    }
                } catch (e) {
                    t = {
                        error: e
                    }
                } finally {
                    try {
                        i && !i.done && (n = r.return) && n.call(r)
                    } finally {
                        if (t)
                            throw t.error
                    }
                }
                return {
                    appName: e.name,
                    projectId: e.options.projectId,
                    apiKey: e.options.apiKey,
                    appId: e.options.appId
                }
            }(t),
            platformLoggerProvider: e.getProvider("platform-logger")
        };
        return {
            app: t,
            getId: function() {
                return function(e) {
                    return o(this, void 0, void 0, function() {
                        var t, n, r;
                        return a(this, function(i) {
                            switch (i.label) {
                            case 0:
                                return [4, Ve(e.appConfig)];
                            case 1:
                                return t = i.sent(),
                                n = t.installationEntry,
                                (r = t.registrationPromise) ? r.catch(console.error) : Ge(e).catch(console.error),
                                [2, n.fid]
                            }
                        })
                    })
                }(n)
            },
            getToken: function(e) {
                return function(e, t) {
                    return void 0 === t && (t = !1),
                    o(this, void 0, void 0, function() {
                        return a(this, function(n) {
                            switch (n.label) {
                            case 0:
                                return [4, Je(e.appConfig)];
                            case 1:
                                return n.sent(),
                                [4, Ge(e, t)];
                            case 2:
                                return [2, n.sent().token]
                            }
                        })
                    })
                }(n, e)
            },
            delete: function() {
                return function(e) {
                    return o(this, void 0, void 0, function() {
                        var t, n;
                        return a(this, function(r) {
                            switch (r.label) {
                            case 0:
                                return [4, Be(t = e.appConfig, function(e) {
                                    if (!e || 0 !== e.registrationStatus)
                                        return e
                                })];
                            case 1:
                                if (!(n = r.sent()))
                                    return [3, 6];
                                if (1 !== n.registrationStatus)
                                    return [3, 2];
                                throw pe.create("delete-pending-registration");
                            case 2:
                                if (2 !== n.registrationStatus)
                                    return [3, 6];
                                if (navigator.onLine)
                                    return [3, 3];
                                throw pe.create("app-offline");
                            case 3:
                                return [4, Ye(t, n)];
                            case 4:
                                return r.sent(),
                                [4, ze(t)];
                            case 5:
                                r.sent(),
                                r.label = 6;
                            case 6:
                                return [2]
                            }
                        })
                    })
                }(n)
            },
            onIdChange: function(e) {
                return Xe(n, e)
            }
        }
    }
    ,"PUBLIC")),
    Ne.registerVersion(ie, oe);
    var Qe, et = function() {
        function e(e, t, n, r) {
            this.client = e,
            this.storage = t,
            this.storageCache = n,
            this.logger = r
        }
        return e.prototype.isCachedDataFresh = function(e, t) {
            if (!t)
                return this.logger.debug("Config fetch cache check. Cache unpopulated."),
                !1;
            var n = Date.now() - t
              , r = n <= e;
            return this.logger.debug("Config fetch cache check. Cache age millis: " + n + ". Cache max age millis (minimumFetchIntervalMillis setting): " + e + ". Is cache hit: " + r + "."),
            r
        }
        ,
        e.prototype.fetch = function(e) {
            return o(this, void 0, void 0, function() {
                var t, n, r, i, o;
                return a(this, function(a) {
                    switch (a.label) {
                    case 0:
                        return [4, Promise.all([this.storage.getLastSuccessfulFetchTimestampMillis(), this.storage.getLastSuccessfulFetchResponse()])];
                    case 1:
                        return t = a.sent(),
                        n = t[0],
                        (r = t[1]) && this.isCachedDataFresh(e.cacheMaxAgeMillis, n) ? [2, r] : (e.eTag = r && r.eTag,
                        [4, this.client.fetch(e)]);
                    case 2:
                        return i = a.sent(),
                        o = [this.storageCache.setLastSuccessfulFetchTimestampMillis(Date.now())],
                        200 === i.status && o.push(this.storage.setLastSuccessfulFetchResponse(i)),
                        [4, Promise.all(o)];
                    case 3:
                        return a.sent(),
                        [2, i]
                    }
                })
            })
        }
        ,
        e
    }(), tt = ((Qe = {})["registration-window"] = "Undefined window object. This SDK only supports usage in a browser environment.",
    Qe["registration-project-id"] = "Undefined project identifier. Check Firebase app initialization.",
    Qe["registration-api-key"] = "Undefined API key. Check Firebase app initialization.",
    Qe["registration-app-id"] = "Undefined app identifier. Check Firebase app initialization.",
    Qe["storage-open"] = "Error thrown when opening storage. Original error: {$originalErrorMessage}.",
    Qe["storage-get"] = "Error thrown when reading from storage. Original error: {$originalErrorMessage}.",
    Qe["storage-set"] = "Error thrown when writing to storage. Original error: {$originalErrorMessage}.",
    Qe["storage-delete"] = "Error thrown when deleting from storage. Original error: {$originalErrorMessage}.",
    Qe["fetch-client-network"] = "Fetch client failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",
    Qe["fetch-timeout"] = 'The config fetch request timed out.  Configure timeout using "fetchTimeoutMillis" SDK setting.',
    Qe["fetch-throttle"] = 'The config fetch request timed out while in an exponential backoff state. Configure timeout using "fetchTimeoutMillis" SDK setting. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.',
    Qe["fetch-client-parse"] = "Fetch client could not parse response. Original error: {$originalErrorMessage}.",
    Qe["fetch-status"] = "Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",
    Qe), nt = new d("remoteconfig","Remote Config",tt);
    var rt = function() {
        function e(e, t, n, r, i, o) {
            this.firebaseInstallations = e,
            this.sdkVersion = t,
            this.namespace = n,
            this.projectId = r,
            this.apiKey = i,
            this.appId = o
        }
        return e.prototype.fetch = function(e) {
            return o(this, void 0, void 0, function() {
                var t, n, r, i, o, s, c, u, l, f, p, h, d, g, v, m, y, b, w;
                return a(this, function(a) {
                    switch (a.label) {
                    case 0:
                        return [4, Promise.all([this.firebaseInstallations.getId(), this.firebaseInstallations.getToken()])];
                    case 1:
                        t = a.sent(),
                        n = t[0],
                        r = t[1],
                        i = window.FIREBASE_REMOTE_CONFIG_URL_BASE || "https://firebaseremoteconfig.googleapis.com",
                        o = i + "/v1/projects/" + this.projectId + "/namespaces/" + this.namespace + ":fetch?key=" + this.apiKey,
                        s = {
                            "Content-Type": "application/json",
                            "Content-Encoding": "gzip",
                            "If-None-Match": e.eTag || "*"
                        },
                        c = {
                            sdk_version: this.sdkVersion,
                            app_instance_id: n,
                            app_instance_id_token: r,
                            app_id: this.appId,
                            language_code: (void 0 === S && (S = navigator),
                            S.languages && S.languages[0] || S.language)
                        },
                        u = {
                            method: "POST",
                            headers: s,
                            body: JSON.stringify(c)
                        },
                        l = fetch(o, u),
                        f = new Promise(function(t, n) {
                            e.signal.addEventListener(function() {
                                var e = new Error("The operation was aborted.");
                                e.name = "AbortError",
                                n(e)
                            })
                        }
                        ),
                        a.label = 2;
                    case 2:
                        return a.trys.push([2, 5, , 6]),
                        [4, Promise.race([l, f])];
                    case 3:
                        return a.sent(),
                        [4, l];
                    case 4:
                        return p = a.sent(),
                        [3, 6];
                    case 5:
                        throw h = a.sent(),
                        d = "fetch-client-network",
                        "AbortError" === h.name && (d = "fetch-timeout"),
                        nt.create(d, {
                            originalErrorMessage: h.message
                        });
                    case 6:
                        if (g = p.status,
                        v = p.headers.get("ETag") || void 0,
                        200 !== p.status)
                            return [3, 11];
                        b = void 0,
                        a.label = 7;
                    case 7:
                        return a.trys.push([7, 9, , 10]),
                        [4, p.json()];
                    case 8:
                        return b = a.sent(),
                        [3, 10];
                    case 9:
                        throw w = a.sent(),
                        nt.create("fetch-client-parse", {
                            originalErrorMessage: w.message
                        });
                    case 10:
                        m = b.entries,
                        y = b.state,
                        a.label = 11;
                    case 11:
                        if ("INSTANCE_STATE_UNSPECIFIED" === y ? g = 500 : "NO_CHANGE" === y ? g = 304 : "NO_TEMPLATE" !== y && "EMPTY_CONFIG" !== y || (m = {}),
                        304 !== g && 200 !== g)
                            throw nt.create("fetch-status", {
                                httpStatus: g
                            });
                        return [2, {
                            status: g,
                            eTag: v,
                            config: m
                        }]
                    }
                    var S
                })
            })
        }
        ,
        e
    }()
      , it = function() {
        function e() {
            this.listeners = []
        }
        return e.prototype.addEventListener = function(e) {
            this.listeners.push(e)
        }
        ,
        e.prototype.abort = function() {
            this.listeners.forEach(function(e) {
                return e()
            })
        }
        ,
        e
    }()
      , ot = ""
      , at = ["1", "true", "t", "yes", "y", "on"]
      , st = function() {
        function e(e, t) {
            void 0 === t && (t = ot),
            this._source = e,
            this._value = t
        }
        return e.prototype.asString = function() {
            return this._value
        }
        ,
        e.prototype.asBoolean = function() {
            return "static" !== this._source && at.indexOf(this._value.toLowerCase()) >= 0
        }
        ,
        e.prototype.asNumber = function() {
            if ("static" === this._source)
                return 0;
            var e = Number(this._value);
            return isNaN(e) && (e = 0),
            e
        }
        ,
        e.prototype.getSource = function() {
            return this._source
        }
        ,
        e
    }()
      , ct = 6e4
      , ut = 432e5
      , lt = function() {
        function e(e, t, n, r, i) {
            this.app = e,
            this._client = t,
            this._storageCache = n,
            this._storage = r,
            this._logger = i,
            this._isInitializationComplete = !1,
            this.settings = {
                fetchTimeoutMillis: ct,
                minimumFetchIntervalMillis: ut
            },
            this.defaultConfig = {}
        }
        return e.prototype.setLogLevel = function(e) {
            switch (e) {
            case "debug":
                this._logger.logLevel = A.DEBUG;
                break;
            case "silent":
                this._logger.logLevel = A.SILENT;
                break;
            default:
                this._logger.logLevel = A.ERROR
            }
        }
        ,
        Object.defineProperty(e.prototype, "fetchTimeMillis", {
            get: function() {
                return this._storageCache.getLastSuccessfulFetchTimestampMillis() || -1
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "lastFetchStatus", {
            get: function() {
                return this._storageCache.getLastFetchStatus() || "no-fetch-yet"
            },
            enumerable: !1,
            configurable: !0
        }),
        e.prototype.activate = function() {
            return o(this, void 0, void 0, function() {
                var e, t, n;
                return a(this, function(r) {
                    switch (r.label) {
                    case 0:
                        return [4, Promise.all([this._storage.getLastSuccessfulFetchResponse(), this._storage.getActiveConfigEtag()])];
                    case 1:
                        return e = r.sent(),
                        t = e[0],
                        n = e[1],
                        t && t.config && t.eTag && t.eTag !== n ? [4, Promise.all([this._storageCache.setActiveConfig(t.config), this._storage.setActiveConfigEtag(t.eTag)])] : [2, !1];
                    case 2:
                        return r.sent(),
                        [2, !0]
                    }
                })
            })
        }
        ,
        e.prototype.ensureInitialized = function() {
            var e = this;
            return this._initializePromise || (this._initializePromise = this._storageCache.loadFromStorage().then(function() {
                e._isInitializationComplete = !0
            })),
            this._initializePromise
        }
        ,
        e.prototype.fetch = function() {
            return o(this, void 0, void 0, function() {
                var e, t, n, r = this;
                return a(this, function(i) {
                    switch (i.label) {
                    case 0:
                        e = new it,
                        setTimeout(function() {
                            return o(r, void 0, void 0, function() {
                                return a(this, function(t) {
                                    return e.abort(),
                                    [2]
                                })
                            })
                        }, this.settings.fetchTimeoutMillis),
                        i.label = 1;
                    case 1:
                        return i.trys.push([1, 4, , 6]),
                        [4, this._client.fetch({
                            cacheMaxAgeMillis: this.settings.minimumFetchIntervalMillis,
                            signal: e
                        })];
                    case 2:
                        return i.sent(),
                        [4, this._storageCache.setLastFetchStatus("success")];
                    case 3:
                        return i.sent(),
                        [3, 6];
                    case 4:
                        return t = i.sent(),
                        c = "fetch-throttle",
                        n = (s = t)instanceof h && -1 !== s.code.indexOf(c) ? "throttle" : "failure",
                        [4, this._storageCache.setLastFetchStatus(n)];
                    case 5:
                        throw i.sent(),
                        t;
                    case 6:
                        return [2]
                    }
                    var s, c
                })
            })
        }
        ,
        e.prototype.fetchAndActivate = function() {
            return o(this, void 0, void 0, function() {
                return a(this, function(e) {
                    switch (e.label) {
                    case 0:
                        return [4, this.fetch()];
                    case 1:
                        return e.sent(),
                        [2, this.activate()]
                    }
                })
            })
        }
        ,
        e.prototype.getAll = function() {
            var e = this;
            return function(e, t) {
                void 0 === e && (e = {});
                void 0 === t && (t = {});
                return Object.keys(i(i({}, e), t))
            }(this._storageCache.getActiveConfig(), this.defaultConfig).reduce(function(t, n) {
                return t[n] = e.getValue(n),
                t
            }, {})
        }
        ,
        e.prototype.getBoolean = function(e) {
            return this.getValue(e).asBoolean()
        }
        ,
        e.prototype.getNumber = function(e) {
            return this.getValue(e).asNumber()
        }
        ,
        e.prototype.getString = function(e) {
            return this.getValue(e).asString()
        }
        ,
        e.prototype.getValue = function(e) {
            this._isInitializationComplete || this._logger.debug('A value was requested for key "' + e + '" before SDK initialization completed. Await on ensureInitialized if the intent was to get a previously activated value.');
            var t = this._storageCache.getActiveConfig();
            return t && void 0 !== t[e] ? new st("remote",t[e]) : this.defaultConfig && void 0 !== this.defaultConfig[e] ? new st("default",String(this.defaultConfig[e])) : (this._logger.debug('Returning static value for key "' + e + '". Define a default or remote value if this is unintentional.'),
            new st("static"))
        }
        ,
        e
    }();
    function ft(e, t) {
        var n = e.target.error || void 0;
        return nt.create(t, {
            originalErrorMessage: n && n.message
        })
    }
    var pt = "app_namespace_store"
      , ht = "firebase_remote_config"
      , dt = 1;
    var gt = function() {
        function e(e, t, n, r) {
            void 0 === r && (r = new Promise(function(e, t) {
                var n = indexedDB.open(ht, dt);
                n.onerror = function(e) {
                    t(ft(e, "storage-open"))
                }
                ,
                n.onsuccess = function(t) {
                    e(t.target.result)
                }
                ,
                n.onupgradeneeded = function(e) {
                    var t = e.target.result;
                    switch (e.oldVersion) {
                    case 0:
                        t.createObjectStore(pt, {
                            keyPath: "compositeKey"
                        })
                    }
                }
            }
            )),
            this.appId = e,
            this.appName = t,
            this.namespace = n,
            this.openDbPromise = r
        }
        return e.prototype.getLastFetchStatus = function() {
            return this.get("last_fetch_status")
        }
        ,
        e.prototype.setLastFetchStatus = function(e) {
            return this.set("last_fetch_status", e)
        }
        ,
        e.prototype.getLastSuccessfulFetchTimestampMillis = function() {
            return this.get("last_successful_fetch_timestamp_millis")
        }
        ,
        e.prototype.setLastSuccessfulFetchTimestampMillis = function(e) {
            return this.set("last_successful_fetch_timestamp_millis", e)
        }
        ,
        e.prototype.getLastSuccessfulFetchResponse = function() {
            return this.get("last_successful_fetch_response")
        }
        ,
        e.prototype.setLastSuccessfulFetchResponse = function(e) {
            return this.set("last_successful_fetch_response", e)
        }
        ,
        e.prototype.getActiveConfig = function() {
            return this.get("active_config")
        }
        ,
        e.prototype.setActiveConfig = function(e) {
            return this.set("active_config", e)
        }
        ,
        e.prototype.getActiveConfigEtag = function() {
            return this.get("active_config_etag")
        }
        ,
        e.prototype.setActiveConfigEtag = function(e) {
            return this.set("active_config_etag", e)
        }
        ,
        e.prototype.getThrottleMetadata = function() {
            return this.get("throttle_metadata")
        }
        ,
        e.prototype.setThrottleMetadata = function(e) {
            return this.set("throttle_metadata", e)
        }
        ,
        e.prototype.deleteThrottleMetadata = function() {
            return this.delete("throttle_metadata")
        }
        ,
        e.prototype.get = function(e) {
            return o(this, void 0, void 0, function() {
                var t, n = this;
                return a(this, function(r) {
                    switch (r.label) {
                    case 0:
                        return [4, this.openDbPromise];
                    case 1:
                        return t = r.sent(),
                        [2, new Promise(function(r, i) {
                            var o = t.transaction([pt], "readonly").objectStore(pt)
                              , a = n.createCompositeKey(e);
                            try {
                                var s = o.get(a);
                                s.onerror = function(e) {
                                    i(ft(e, "storage-get"))
                                }
                                ,
                                s.onsuccess = function(e) {
                                    var t = e.target.result;
                                    r(t ? t.value : void 0)
                                }
                            } catch (e) {
                                i(nt.create("storage-get", {
                                    originalErrorMessage: e && e.message
                                }))
                            }
                        }
                        )]
                    }
                })
            })
        }
        ,
        e.prototype.set = function(e, t) {
            return o(this, void 0, void 0, function() {
                var n, r = this;
                return a(this, function(i) {
                    switch (i.label) {
                    case 0:
                        return [4, this.openDbPromise];
                    case 1:
                        return n = i.sent(),
                        [2, new Promise(function(i, o) {
                            var a = n.transaction([pt], "readwrite").objectStore(pt)
                              , s = r.createCompositeKey(e);
                            try {
                                var c = a.put({
                                    compositeKey: s,
                                    value: t
                                });
                                c.onerror = function(e) {
                                    o(ft(e, "storage-set"))
                                }
                                ,
                                c.onsuccess = function() {
                                    i()
                                }
                            } catch (e) {
                                o(nt.create("storage-set", {
                                    originalErrorMessage: e && e.message
                                }))
                            }
                        }
                        )]
                    }
                })
            })
        }
        ,
        e.prototype.delete = function(e) {
            return o(this, void 0, void 0, function() {
                var t, n = this;
                return a(this, function(r) {
                    switch (r.label) {
                    case 0:
                        return [4, this.openDbPromise];
                    case 1:
                        return t = r.sent(),
                        [2, new Promise(function(r, i) {
                            var o = t.transaction([pt], "readwrite").objectStore(pt)
                              , a = n.createCompositeKey(e);
                            try {
                                var s = o.delete(a);
                                s.onerror = function(e) {
                                    i(ft(e, "storage-delete"))
                                }
                                ,
                                s.onsuccess = function() {
                                    r()
                                }
                            } catch (e) {
                                i(nt.create("storage-delete", {
                                    originalErrorMessage: e && e.message
                                }))
                            }
                        }
                        )]
                    }
                })
            })
        }
        ,
        e.prototype.createCompositeKey = function(e) {
            return [this.appId, this.appName, this.namespace, e].join()
        }
        ,
        e
    }()
      , vt = function() {
        function e(e) {
            this.storage = e
        }
        return e.prototype.getLastFetchStatus = function() {
            return this.lastFetchStatus
        }
        ,
        e.prototype.getLastSuccessfulFetchTimestampMillis = function() {
            return this.lastSuccessfulFetchTimestampMillis
        }
        ,
        e.prototype.getActiveConfig = function() {
            return this.activeConfig
        }
        ,
        e.prototype.loadFromStorage = function() {
            return o(this, void 0, void 0, function() {
                var e, t, n, r, i, o;
                return a(this, function(a) {
                    switch (a.label) {
                    case 0:
                        return e = this.storage.getLastFetchStatus(),
                        t = this.storage.getLastSuccessfulFetchTimestampMillis(),
                        n = this.storage.getActiveConfig(),
                        [4, e];
                    case 1:
                        return (r = a.sent()) && (this.lastFetchStatus = r),
                        [4, t];
                    case 2:
                        return (i = a.sent()) && (this.lastSuccessfulFetchTimestampMillis = i),
                        [4, n];
                    case 3:
                        return (o = a.sent()) && (this.activeConfig = o),
                        [2]
                    }
                })
            })
        }
        ,
        e.prototype.setLastFetchStatus = function(e) {
            return this.lastFetchStatus = e,
            this.storage.setLastFetchStatus(e)
        }
        ,
        e.prototype.setLastSuccessfulFetchTimestampMillis = function(e) {
            return this.lastSuccessfulFetchTimestampMillis = e,
            this.storage.setLastSuccessfulFetchTimestampMillis(e)
        }
        ,
        e.prototype.setActiveConfig = function(e) {
            return this.activeConfig = e,
            this.storage.setActiveConfig(e)
        }
        ,
        e
    }();
    function mt(e, t) {
        return new Promise(function(n, r) {
            var i = Math.max(t - Date.now(), 0)
              , o = setTimeout(n, i);
            e.addEventListener(function() {
                clearTimeout(o),
                r(nt.create("fetch-throttle", {
                    throttleEndTimeMillis: t
                }))
            })
        }
        )
    }
    var yt, bt = function() {
        function e(e, t) {
            this.client = e,
            this.storage = t
        }
        return e.prototype.fetch = function(e) {
            return o(this, void 0, void 0, function() {
                var t;
                return a(this, function(n) {
                    switch (n.label) {
                    case 0:
                        return [4, this.storage.getThrottleMetadata()];
                    case 1:
                        return t = n.sent() || {
                            backoffCount: 0,
                            throttleEndTimeMillis: Date.now()
                        },
                        [2, this.attemptFetch(e, t)]
                    }
                })
            })
        }
        ,
        e.prototype.attemptFetch = function(e, t) {
            var n = t.throttleEndTimeMillis
              , r = t.backoffCount;
            return o(this, void 0, void 0, function() {
                var t, i, o;
                return a(this, function(a) {
                    switch (a.label) {
                    case 0:
                        return [4, mt(e.signal, n)];
                    case 1:
                        a.sent(),
                        a.label = 2;
                    case 2:
                        return a.trys.push([2, 5, , 7]),
                        [4, this.client.fetch(e)];
                    case 3:
                        return t = a.sent(),
                        [4, this.storage.deleteThrottleMetadata()];
                    case 4:
                        return a.sent(),
                        [2, t];
                    case 5:
                        if (!function(e) {
                            if (!(e instanceof h && e.customData))
                                return !1;
                            var t = Number(e.customData.httpStatus);
                            return 429 === t || 500 === t || 503 === t || 504 === t
                        }(i = a.sent()))
                            throw i;
                        return o = {
                            throttleEndTimeMillis: Date.now() + E(r),
                            backoffCount: r + 1
                        },
                        [4, this.storage.setThrottleMetadata(o)];
                    case 6:
                        return a.sent(),
                        [2, this.attemptFetch(e, o)];
                    case 7:
                        return [2]
                    }
                })
            })
        }
        ,
        e
    }(), wt = "@firebase/remote-config", St = "0.1.43";
    (yt = te).INTERNAL.registerComponent(new C("remoteConfig",function(e, t) {
        var n = t.instanceIdentifier
          , r = e.getProvider("app").getImmediate()
          , i = e.getProvider("installations").getImmediate();
        if ("undefined" == typeof window)
            throw nt.create("registration-window");
        var o = r.options
          , a = o.projectId
          , s = o.apiKey
          , c = o.appId;
        if (!a)
            throw nt.create("registration-project-id");
        if (!s)
            throw nt.create("registration-api-key");
        if (!c)
            throw nt.create("registration-app-id");
        n = n || "firebase";
        var u = new gt(c,r.name,n)
          , l = new vt(u)
          , f = new x(wt);
        f.logLevel = A.ERROR;
        var p = new rt(i,yt.SDK_VERSION,n,a,s,c)
          , h = new bt(p,u)
          , d = new et(h,u,l,f)
          , g = new lt(r,d,l,u,f);
        return g.ensureInitialized(),
        g
    }
    ,"PUBLIC").setMultipleInstances(!0)),
    yt.registerVersion(wt, St);
    var _t = {
        featured: {},
        nav: ["@cityquiz", "@rocketsleigh", "@dasherdancer", "@snowballrun", "@presenttoss", "@penguinswim", "santaselfie", "codeboogie", "jetpack", "jamband", "snowball", "elfmaker", "codelab", "wrapbattle", "penguindash", "build", "matching", "museum", "boatload", "takeoff", "gumball", "presentbounce", "glider", "speedsketch", "santascanvas", "seasonofgiving", "penguinproof", "traditions", "wheressanta", "santasearch", "translations", "runner", "snowbox", "mercator", "windtunnel"],
        fallbackIndexScene: "retro",
        indexScene: "modvil",
        switchOff: !1,
        upgradeToVersion: "",
        sceneRedirect: {
            educators: "familyguide",
            press: "familyguide",
            tracker: "",
            village: ""
        },
        routeUrl: "https://firebasestorage.googleapis.com/v0/b/santa-tracker-firebase.appspot.com/o/route%2Fsanta_|LANG|.json?alt=media&2018b",
        sceneLock: {},
        videos: ["carpool", "comroom", "jingle", "liftoff", "museum", "office", "onvacation", "penguinproof", "reindeerworries", "reload", "santasback", "satellite", "selfies", "slackingoff", "takeoff", "temptation", "tired", "wheressanta", "workshop", "likealight", "yulelog"],
        refreshEvery: 60,
        useGeoIP: !0,
        showTracker: !1,
        routeJitter: 10
    }
      , It = new Date;
    for (var Et in 9 === It.getMonth() || 10 === It.getMonth() || It.getMonth(),
    _t) {
        "string" != typeof _t[Et] && (_t[Et] = JSON.stringify(_t[Et]))
    }
    var Ct = window.sessionStorage || {};
    function Ot(e) {
        return void 0 === e && (e = !1),
        !!(Ct["android-twa"] || document.referrer.startsWith("android-app://com.google.android.apps.santatracker") || e) && (Ct["android-twa"] = !0,
        document.body.setAttribute("data-mode", "android"),
        !0)
    }
    var kt = {
        apiKey: "AIzaSyBrNcGcna0TMn2uLRxhMBwxVwXUBjlZqzU",
        authDomain: "santa-api.firebaseapp.com",
        databaseURL: "https://santa-api.firebaseio.com",
        projectId: "santa-api",
        storageBucket: "santa-api.appspot.com",
        messagingSenderId: "593146395815",
        appId: "1:593146395815:web:d766962076fbbd13492f82",
        measurementId: "G-EWRYGZS6D3"
    };
    function Tt() {
        Ot() ? (kt.appId = "1:593146395815:web:aefb4c5b5e01137f492f82",
        kt.measurementId = "G-0X2VE68GZD") : "santatracker.google.com" !== window.location.hostname && (kt.appId = "1:593146395815:web:54c339298196fd10492f82",
        kt.measurementId = "G-GPEHME4LVG"),
        te.initializeApp(kt);
        var e = 6e4;
        navigator.onLine || (e *= 720);
        var t = te.remoteConfig();
        return t.settings = {
            fetchTimeoutMillis: 3e4,
            minimumFetchIntervalMillis: e
        },
        t.defaultConfig = _t,
        window.firebase = te,
        t.fetchAndActivate().catch(function(e) {
            gtag("event", "firebase", {
                action: "failure"
            }),
            console.warn("could not fetch remoteConfig, using defaults", e)
        }).then(function() {
            return t
        })
    }
    var Lt, Pt = "interactive" === document.readyState || "complete" === document.readyState;
    function At(e) {
        Pt ? e() : Lt.push(e)
    }
    Pt || (Lt = [],
    window.addEventListener("DOMContentLoaded", function() {
        Pt = !0,
        Lt.forEach(function(e) {
            return e()
        }),
        Lt = void 0
    })),
    window.santaConfig = n;
    var Nt = document.documentElement.lang || null
      , jt = null !== Nt
      , Dt = function() {
        try {
            if (!("ShadowRoot"in window))
                throw "Shadow DOM";
            if (!("customElements"in window))
                throw "Custom Elements";
            if (!CSS.supports("(--foo: red)"))
                throw "CSS Variables";
            if (!("noModule"in HTMLScriptElement.prototype))
                throw '<script type="module">';
            if (!("URLSearchParams"in window))
                throw "URLSearchParams";
            if (!("Symbol"in window))
                throw "Symbol";
            if (!("includes"in String.prototype && "startsWith"in String.prototype && "includes"in Array.prototype && "from"in Array))
                throw "arraylike helpers";
            if (!("append"in document.head))
                throw "append"
        } catch (e) {
            return console.warn("loading fallback, failure:", e),
            !0
        }
        return !1
    }() || (location.search || "").match(/\bfallback=.*?\b/)
      , Mt = (location.search || "").match(/\bignore=.*?\b/);
    console.info("Santa Tracker", n.version, Nt, Dt ? "(fallback)" : "");
    var Ft, Rt, xt, zt = !1;
    if (window.onerror = function(e, t, n, r, i) {
        console.error("error (loaded=" + zt + ")", e, t, n, r, i),
        "santatracker.google.com" !== location.hostname || zt || Mt || (window.location.href = "error.html")
    }
    ,
    window.onunhandledrejection = function(e) {
        console.warn("rejection (loaded=" + zt + ")", e.reason),
        "santatracker.google.com" !== location.hostname || zt || Mt || (window.location.href = "error.html")
    }
    ,
    window.installEvent = null,
    window.addEventListener("beforeinstallprompt", function(e) {
        window.installEvent = e
    }),
    window.sw = null,
    "serviceWorker"in navigator) {
        var Bt = new URLSearchParams;
        jt && Bt.set("baseurl", n.baseurl),
        window.sw = navigator.serviceWorker.register("/sw.js?" + Bt.toString()).catch(function(e) {
            return console.warn("sw failed to register", e),
            null
        }),
        Boolean(navigator.serviceWorker.controller),
        navigator.serviceWorker.addEventListener("controllerchange", function() {
            zt = !0,
            window.location.reload()
        })
    }
    function Vt() {
        Ot(new URLSearchParams(window.location.search).has("android")),
        Promise.all([Tt(), window.sw]).then(function(t) {
            var r = e(t, 2)
              , i = r[0];
            r[1];
            if (i.getBoolean("switchOff"))
                throw new Error("switchOff");
            var o, a = i.getString("staticScope") || null;
            if (a)
                if (jt) {
                    console.warn("using custom static scope", a);
                    try {
                        n.staticScope = ((o = new URL(a,window.location)).pathname.match(/\/$/) || (o.pathname += "/"),
                        o.toString())
                    } catch (e) {}
                } else
                    console.warn("ignoring custom static scope for dev", a);
            document.body.setAttribute("static", n.staticScope);
            var s, c, u = n.staticScope + (Dt ? "fallback" : "entrypoint") + (jt ? "_" + Nt : "") + ".js";
            return (s = u,
            c = Dt && jt ? "" : "module",
            void 0 === c && (c = null),
            new Promise(function(e, t) {
                var n = document.createElement("script");
                n.src = s,
                c && (n.type = c),
                n.setAttribute("crossorigin", "anonymous"),
                n.onload = function() {
                    return e()
                }
                ,
                n.onerror = t,
                document.head.append(n)
            }
            )).then(function() {
                zt = !0
            })
        })
    }
    Dt && jt ? (Ft = [n.staticScope + "support.js", n.staticScope + "node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js"],
    Rt = function() {
        WebComponents.waitFor(function() {
            At(Vt)
        })
    }
    ,
    (xt = function() {
        var e = Ft.shift();
        if (void 0 !== e) {
            var t = document.createElement("script");
            t.src = e,
            t.setAttribute("crossorigin", "anonymous"),
            t.onload = xt,
            t.onerror = function() {
                console.warn("cannot load", e),
                xt()
            }
            ,
            document.head.appendChild(t)
        } else
            Rt()
    }
    )()) : At(Vt)
}();
