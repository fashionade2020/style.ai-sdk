var FASHIONADE_FITTING_ROOM = FASHIONADE_FITTING_ROOM || (function () {
    //load KAKAO minified SDK 1.0.
    if (typeof window.Kakao === 'undefined') {
        const script = document.createElement('script')
        script.setAttribute('src', 'https://t1.kakaocdn.net/kakao_js_sdk/v1/kakao.min.js')
        script.setAttribute('async', '')
        document.head.appendChild(script)
    }
    //# sourceMappingURL=axios.min.map
    if (typeof axios === 'undefined') {
        !function (e, t) {
            "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.axios = t() : e.axios = t()
        }(this, (function () {
            return function (e) {
                var t = {};

                function n(r) {
                    if (t[r]) return t[r].exports;
                    var o = t[r] = {i: r, l: !1, exports: {}};
                    return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
                }

                return n.m = e, n.c = t, n.d = function (e, t, r) {
                    n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: r})
                }, n.r = function (e) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
                }, n.t = function (e, t) {
                    if (1 & t && (e = n(e)), 8 & t) return e;
                    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                    var r = Object.create(null);
                    if (n.r(r), Object.defineProperty(r, "default", {
                        enumerable: !0,
                        value: e
                    }), 2 & t && "string" != typeof e) for (var o in e) n.d(r, o, function (t) {
                        return e[t]
                    }.bind(null, o));
                    return r
                }, n.n = function (e) {
                    var t = e && e.__esModule ? function () {
                        return e.default
                    } : function () {
                        return e
                    };
                    return n.d(t, "a", t), t
                }, n.o = function (e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }, n.p = "", n(n.s = 13)
            }([function (e, t, n) {
                "use strict";
                var r, o = n(4), i = Object.prototype.toString, s = (r = Object.create(null), function (e) {
                    var t = i.call(e);
                    return r[t] || (r[t] = t.slice(8, -1).toLowerCase())
                });

                function a(e) {
                    return e = e.toLowerCase(), function (t) {
                        return s(t) === e
                    }
                }

                function u(e) {
                    return Array.isArray(e)
                }

                function c(e) {
                    return void 0 === e
                }

                var f = a("ArrayBuffer");

                function l(e) {
                    return null !== e && "object" == typeof e
                }

                function p(e) {
                    if ("object" !== s(e)) return !1;
                    var t = Object.getPrototypeOf(e);
                    return null === t || t === Object.prototype
                }

                var d = a("Date"), h = a("File"), m = a("Blob"), v = a("FileList");

                function y(e) {
                    return "[object Function]" === i.call(e)
                }

                var g = a("URLSearchParams");

                function E(e, t) {
                    if (null != e) if ("object" != typeof e && (e = [e]), u(e)) for (var n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e); else for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.call(null, e[o], o, e)
                }

                var b, O = (b = "undefined" != typeof Uint8Array && Object.getPrototypeOf(Uint8Array), function (e) {
                    return b && e instanceof b
                });
                e.exports = {
                    isArray: u,
                    isArrayBuffer: f,
                    isBuffer: function (e) {
                        return null !== e && !c(e) && null !== e.constructor && !c(e.constructor) && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
                    },
                    isFormData: function (e) {
                        return e && ("function" == typeof FormData && e instanceof FormData || "[object FormData]" === i.call(e) || y(e.toString) && "[object FormData]" === e.toString())
                    },
                    isArrayBufferView: function (e) {
                        return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && f(e.buffer)
                    },
                    isString: function (e) {
                        return "string" == typeof e
                    },
                    isNumber: function (e) {
                        return "number" == typeof e
                    },
                    isObject: l,
                    isPlainObject: p,
                    isUndefined: c,
                    isDate: d,
                    isFile: h,
                    isBlob: m,
                    isFunction: y,
                    isStream: function (e) {
                        return l(e) && y(e.pipe)
                    },
                    isURLSearchParams: g,
                    isStandardBrowserEnv: function () {
                        return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document)
                    },
                    forEach: E,
                    merge: function e() {
                        var t = {};

                        function n(n, r) {
                            p(t[r]) && p(n) ? t[r] = e(t[r], n) : p(n) ? t[r] = e({}, n) : u(n) ? t[r] = n.slice() : t[r] = n
                        }

                        for (var r = 0, o = arguments.length; r < o; r++) E(arguments[r], n);
                        return t
                    },
                    extend: function (e, t, n) {
                        return E(t, (function (t, r) {
                            e[r] = n && "function" == typeof t ? o(t, n) : t
                        })), e
                    },
                    trim: function (e) {
                        return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
                    },
                    stripBOM: function (e) {
                        return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e
                    },
                    inherits: function (e, t, n, r) {
                        e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, n && Object.assign(e.prototype, n)
                    },
                    toFlatObject: function (e, t, n) {
                        var r, o, i, s = {};
                        t = t || {};
                        do {
                            for (o = (r = Object.getOwnPropertyNames(e)).length; o-- > 0;) s[i = r[o]] || (t[i] = e[i], s[i] = !0);
                            e = Object.getPrototypeOf(e)
                        } while (e && (!n || n(e, t)) && e !== Object.prototype);
                        return t
                    },
                    kindOf: s,
                    kindOfTest: a,
                    endsWith: function (e, t, n) {
                        e = String(e), (void 0 === n || n > e.length) && (n = e.length), n -= t.length;
                        var r = e.indexOf(t, n);
                        return -1 !== r && r === n
                    },
                    toArray: function (e) {
                        if (!e) return null;
                        var t = e.length;
                        if (c(t)) return null;
                        for (var n = new Array(t); t-- > 0;) n[t] = e[t];
                        return n
                    },
                    isTypedArray: O,
                    isFileList: v
                }
            }, function (e, t, n) {
                "use strict";
                var r = n(0);

                function o(e, t, n, r, o) {
                    Error.call(this), this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), o && (this.response = o)
                }

                r.inherits(o, Error, {
                    toJSON: function () {
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
                            code: this.code,
                            status: this.response && this.response.status ? this.response.status : null
                        }
                    }
                });
                var i = o.prototype, s = {};
                ["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED"].forEach((function (e) {
                    s[e] = {value: e}
                })), Object.defineProperties(o, s), Object.defineProperty(i, "isAxiosError", {value: !0}), o.from = function (e, t, n, s, a, u) {
                    var c = Object.create(i);
                    return r.toFlatObject(e, c, (function (e) {
                        return e !== Error.prototype
                    })), o.call(c, e.message, t, n, s, a), c.name = e.name, u && Object.assign(c, u), c
                }, e.exports = o
            }, function (e, t, n) {
                "use strict";
                var r = n(1);

                function o(e) {
                    r.call(this, null == e ? "canceled" : e, r.ERR_CANCELED), this.name = "CanceledError"
                }

                n(0).inherits(o, r, {__CANCEL__: !0}), e.exports = o
            }, function (e, t, n) {
                "use strict";
                var r = n(0), o = n(19), i = n(1), s = n(6), a = n(7),
                    u = {"Content-Type": "application/x-www-form-urlencoded"};

                function c(e, t) {
                    !r.isUndefined(e) && r.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
                }

                var f, l = {
                    transitional: s,
                    adapter: (("undefined" != typeof XMLHttpRequest || "undefined" != typeof process && "[object process]" === Object.prototype.toString.call(process)) && (f = n(8)), f),
                    transformRequest: [function (e, t) {
                        if (o(t, "Accept"), o(t, "Content-Type"), r.isFormData(e) || r.isArrayBuffer(e) || r.isBuffer(e) || r.isStream(e) || r.isFile(e) || r.isBlob(e)) return e;
                        if (r.isArrayBufferView(e)) return e.buffer;
                        if (r.isURLSearchParams(e)) return c(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString();
                        var n, i = r.isObject(e), s = t && t["Content-Type"];
                        if ((n = r.isFileList(e)) || i && "multipart/form-data" === s) {
                            var u = this.env && this.env.FormData;
                            return a(n ? {"files[]": e} : e, u && new u)
                        }
                        return i || "application/json" === s ? (c(t, "application/json"), function (e, t, n) {
                            if (r.isString(e)) try {
                                return (t || JSON.parse)(e), r.trim(e)
                            } catch (e) {
                                if ("SyntaxError" !== e.name) throw e
                            }
                            return (n || JSON.stringify)(e)
                        }(e)) : e
                    }],
                    transformResponse: [function (e) {
                        var t = this.transitional || l.transitional, n = t && t.silentJSONParsing,
                            o = t && t.forcedJSONParsing, s = !n && "json" === this.responseType;
                        if (s || o && r.isString(e) && e.length) try {
                            return JSON.parse(e)
                        } catch (e) {
                            if (s) {
                                if ("SyntaxError" === e.name) throw i.from(e, i.ERR_BAD_RESPONSE, this, null, this.response);
                                throw e
                            }
                        }
                        return e
                    }],
                    timeout: 0,
                    xsrfCookieName: "XSRF-TOKEN",
                    xsrfHeaderName: "X-XSRF-TOKEN",
                    maxContentLength: -1,
                    maxBodyLength: -1,
                    env: {FormData: n(27)},
                    validateStatus: function (e) {
                        return e >= 200 && e < 300
                    },
                    headers: {common: {Accept: "application/json, text/plain, */*"}}
                };
                r.forEach(["delete", "get", "head"], (function (e) {
                    l.headers[e] = {}
                })), r.forEach(["post", "put", "patch"], (function (e) {
                    l.headers[e] = r.merge(u)
                })), e.exports = l
            }, function (e, t, n) {
                "use strict";
                e.exports = function (e, t) {
                    return function () {
                        for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r];
                        return e.apply(t, n)
                    }
                }
            }, function (e, t, n) {
                "use strict";
                var r = n(0);

                function o(e) {
                    return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
                }

                e.exports = function (e, t, n) {
                    if (!t) return e;
                    var i;
                    if (n) i = n(t); else if (r.isURLSearchParams(t)) i = t.toString(); else {
                        var s = [];
                        r.forEach(t, (function (e, t) {
                            null != e && (r.isArray(e) ? t += "[]" : e = [e], r.forEach(e, (function (e) {
                                r.isDate(e) ? e = e.toISOString() : r.isObject(e) && (e = JSON.stringify(e)), s.push(o(t) + "=" + o(e))
                            })))
                        })), i = s.join("&")
                    }
                    if (i) {
                        var a = e.indexOf("#");
                        -1 !== a && (e = e.slice(0, a)), e += (-1 === e.indexOf("?") ? "?" : "&") + i
                    }
                    return e
                }
            }, function (e, t, n) {
                "use strict";
                e.exports = {silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1}
            }, function (e, t, n) {
                "use strict";
                var r = n(0);
                e.exports = function (e, t) {
                    t = t || new FormData;
                    var n = [];

                    function o(e) {
                        return null === e ? "" : r.isDate(e) ? e.toISOString() : r.isArrayBuffer(e) || r.isTypedArray(e) ? "function" == typeof Blob ? new Blob([e]) : Buffer.from(e) : e
                    }

                    return function e(i, s) {
                        if (r.isPlainObject(i) || r.isArray(i)) {
                            if (-1 !== n.indexOf(i)) throw Error("Circular reference detected in " + s);
                            n.push(i), r.forEach(i, (function (n, i) {
                                if (!r.isUndefined(n)) {
                                    var a, u = s ? s + "." + i : i;
                                    if (n && !s && "object" == typeof n) if (r.endsWith(i, "{}")) n = JSON.stringify(n); else if (r.endsWith(i, "[]") && (a = r.toArray(n))) return void a.forEach((function (e) {
                                        !r.isUndefined(e) && t.append(u, o(e))
                                    }));
                                    e(n, u)
                                }
                            })), n.pop()
                        } else t.append(s, o(i))
                    }(e), t
                }
            }, function (e, t, n) {
                "use strict";
                var r = n(0), o = n(20), i = n(21), s = n(5), a = n(9), u = n(24), c = n(25), f = n(6), l = n(1),
                    p = n(2), d = n(26);
                e.exports = function (e) {
                    return new Promise((function (t, n) {
                        var h, m = e.data, v = e.headers, y = e.responseType;

                        function g() {
                            e.cancelToken && e.cancelToken.unsubscribe(h), e.signal && e.signal.removeEventListener("abort", h)
                        }

                        r.isFormData(m) && r.isStandardBrowserEnv() && delete v["Content-Type"];
                        var E = new XMLHttpRequest;
                        if (e.auth) {
                            var b = e.auth.username || "",
                                O = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
                            v.Authorization = "Basic " + btoa(b + ":" + O)
                        }
                        var x = a(e.baseURL, e.url);

                        function w() {
                            if (E) {
                                var r = "getAllResponseHeaders" in E ? u(E.getAllResponseHeaders()) : null, i = {
                                    data: y && "text" !== y && "json" !== y ? E.response : E.responseText,
                                    status: E.status,
                                    statusText: E.statusText,
                                    headers: r,
                                    config: e,
                                    request: E
                                };
                                o((function (e) {
                                    t(e), g()
                                }), (function (e) {
                                    n(e), g()
                                }), i), E = null
                            }
                        }

                        if (E.open(e.method.toUpperCase(), s(x, e.params, e.paramsSerializer), !0), E.timeout = e.timeout, "onloadend" in E ? E.onloadend = w : E.onreadystatechange = function () {
                            E && 4 === E.readyState && (0 !== E.status || E.responseURL && 0 === E.responseURL.indexOf("file:")) && setTimeout(w)
                        }, E.onabort = function () {
                            E && (n(new l("Request aborted", l.ECONNABORTED, e, E)), E = null)
                        }, E.onerror = function () {
                            n(new l("Network Error", l.ERR_NETWORK, e, E, E)), E = null
                        }, E.ontimeout = function () {
                            var t = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded",
                                r = e.transitional || f;
                            e.timeoutErrorMessage && (t = e.timeoutErrorMessage), n(new l(t, r.clarifyTimeoutError ? l.ETIMEDOUT : l.ECONNABORTED, e, E)), E = null
                        }, r.isStandardBrowserEnv()) {
                            var R = (e.withCredentials || c(x)) && e.xsrfCookieName ? i.read(e.xsrfCookieName) : void 0;
                            R && (v[e.xsrfHeaderName] = R)
                        }
                        "setRequestHeader" in E && r.forEach(v, (function (e, t) {
                            void 0 === m && "content-type" === t.toLowerCase() ? delete v[t] : E.setRequestHeader(t, e)
                        })), r.isUndefined(e.withCredentials) || (E.withCredentials = !!e.withCredentials), y && "json" !== y && (E.responseType = e.responseType), "function" == typeof e.onDownloadProgress && E.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && E.upload && E.upload.addEventListener("progress", e.onUploadProgress), (e.cancelToken || e.signal) && (h = function (e) {
                            E && (n(!e || e && e.type ? new p : e), E.abort(), E = null)
                        }, e.cancelToken && e.cancelToken.subscribe(h), e.signal && (e.signal.aborted ? h() : e.signal.addEventListener("abort", h))), m || (m = null);
                        var S = d(x);
                        S && -1 === ["http", "https", "file"].indexOf(S) ? n(new l("Unsupported protocol " + S + ":", l.ERR_BAD_REQUEST, e)) : E.send(m)
                    }))
                }
            }, function (e, t, n) {
                "use strict";
                var r = n(22), o = n(23);
                e.exports = function (e, t) {
                    return e && !r(t) ? o(e, t) : t
                }
            }, function (e, t, n) {
                "use strict";
                e.exports = function (e) {
                    return !(!e || !e.__CANCEL__)
                }
            }, function (e, t, n) {
                "use strict";
                var r = n(0);
                e.exports = function (e, t) {
                    t = t || {};
                    var n = {};

                    function o(e, t) {
                        return r.isPlainObject(e) && r.isPlainObject(t) ? r.merge(e, t) : r.isPlainObject(t) ? r.merge({}, t) : r.isArray(t) ? t.slice() : t
                    }

                    function i(n) {
                        return r.isUndefined(t[n]) ? r.isUndefined(e[n]) ? void 0 : o(void 0, e[n]) : o(e[n], t[n])
                    }

                    function s(e) {
                        if (!r.isUndefined(t[e])) return o(void 0, t[e])
                    }

                    function a(n) {
                        return r.isUndefined(t[n]) ? r.isUndefined(e[n]) ? void 0 : o(void 0, e[n]) : o(void 0, t[n])
                    }

                    function u(n) {
                        return n in t ? o(e[n], t[n]) : n in e ? o(void 0, e[n]) : void 0
                    }

                    var c = {
                        url: s,
                        method: s,
                        data: s,
                        baseURL: a,
                        transformRequest: a,
                        transformResponse: a,
                        paramsSerializer: a,
                        timeout: a,
                        timeoutMessage: a,
                        withCredentials: a,
                        adapter: a,
                        responseType: a,
                        xsrfCookieName: a,
                        xsrfHeaderName: a,
                        onUploadProgress: a,
                        onDownloadProgress: a,
                        decompress: a,
                        maxContentLength: a,
                        maxBodyLength: a,
                        beforeRedirect: a,
                        transport: a,
                        httpAgent: a,
                        httpsAgent: a,
                        cancelToken: a,
                        socketPath: a,
                        responseEncoding: a,
                        validateStatus: u
                    };
                    return r.forEach(Object.keys(e).concat(Object.keys(t)), (function (e) {
                        var t = c[e] || i, o = t(e);
                        r.isUndefined(o) && t !== u || (n[e] = o)
                    })), n
                }
            }, function (e, t) {
                e.exports = {version: "0.27.2"}
            }, function (e, t, n) {
                e.exports = n(14)
            }, function (e, t, n) {
                "use strict";
                var r = n(0), o = n(4), i = n(15), s = n(11);
                var a = function e(t) {
                    var n = new i(t), a = o(i.prototype.request, n);
                    return r.extend(a, i.prototype, n), r.extend(a, n), a.create = function (n) {
                        return e(s(t, n))
                    }, a
                }(n(3));
                a.Axios = i, a.CanceledError = n(2), a.CancelToken = n(29), a.isCancel = n(10), a.VERSION = n(12).version, a.toFormData = n(7), a.AxiosError = n(1), a.Cancel = a.CanceledError, a.all = function (e) {
                    return Promise.all(e)
                }, a.spread = n(30), a.isAxiosError = n(31), e.exports = a, e.exports.default = a
            }, function (e, t, n) {
                "use strict";
                var r = n(0), o = n(5), i = n(16), s = n(17), a = n(11), u = n(9), c = n(28), f = c.validators;

                function l(e) {
                    this.defaults = e, this.interceptors = {request: new i, response: new i}
                }

                l.prototype.request = function (e, t) {
                    "string" == typeof e ? (t = t || {}).url = e : t = e || {}, (t = a(this.defaults, t)).method ? t.method = t.method.toLowerCase() : this.defaults.method ? t.method = this.defaults.method.toLowerCase() : t.method = "get";
                    var n = t.transitional;
                    void 0 !== n && c.assertOptions(n, {
                        silentJSONParsing: f.transitional(f.boolean),
                        forcedJSONParsing: f.transitional(f.boolean),
                        clarifyTimeoutError: f.transitional(f.boolean)
                    }, !1);
                    var r = [], o = !0;
                    this.interceptors.request.forEach((function (e) {
                        "function" == typeof e.runWhen && !1 === e.runWhen(t) || (o = o && e.synchronous, r.unshift(e.fulfilled, e.rejected))
                    }));
                    var i, u = [];
                    if (this.interceptors.response.forEach((function (e) {
                        u.push(e.fulfilled, e.rejected)
                    })), !o) {
                        var l = [s, void 0];
                        for (Array.prototype.unshift.apply(l, r), l = l.concat(u), i = Promise.resolve(t); l.length;) i = i.then(l.shift(), l.shift());
                        return i
                    }
                    for (var p = t; r.length;) {
                        var d = r.shift(), h = r.shift();
                        try {
                            p = d(p)
                        } catch (e) {
                            h(e);
                            break
                        }
                    }
                    try {
                        i = s(p)
                    } catch (e) {
                        return Promise.reject(e)
                    }
                    for (; u.length;) i = i.then(u.shift(), u.shift());
                    return i
                }, l.prototype.getUri = function (e) {
                    e = a(this.defaults, e);
                    var t = u(e.baseURL, e.url);
                    return o(t, e.params, e.paramsSerializer)
                }, r.forEach(["delete", "get", "head", "options"], (function (e) {
                    l.prototype[e] = function (t, n) {
                        return this.request(a(n || {}, {method: e, url: t, data: (n || {}).data}))
                    }
                })), r.forEach(["post", "put", "patch"], (function (e) {
                    function t(t) {
                        return function (n, r, o) {
                            return this.request(a(o || {}, {
                                method: e,
                                headers: t ? {"Content-Type": "multipart/form-data"} : {},
                                url: n,
                                data: r
                            }))
                        }
                    }

                    l.prototype[e] = t(), l.prototype[e + "Form"] = t(!0)
                })), e.exports = l
            }, function (e, t, n) {
                "use strict";
                var r = n(0);

                function o() {
                    this.handlers = []
                }

                o.prototype.use = function (e, t, n) {
                    return this.handlers.push({
                        fulfilled: e,
                        rejected: t,
                        synchronous: !!n && n.synchronous,
                        runWhen: n ? n.runWhen : null
                    }), this.handlers.length - 1
                }, o.prototype.eject = function (e) {
                    this.handlers[e] && (this.handlers[e] = null)
                }, o.prototype.forEach = function (e) {
                    r.forEach(this.handlers, (function (t) {
                        null !== t && e(t)
                    }))
                }, e.exports = o
            }, function (e, t, n) {
                "use strict";
                var r = n(0), o = n(18), i = n(10), s = n(3), a = n(2);

                function u(e) {
                    if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new a
                }

                e.exports = function (e) {
                    return u(e), e.headers = e.headers || {}, e.data = o.call(e, e.data, e.headers, e.transformRequest), e.headers = r.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers), r.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (function (t) {
                        delete e.headers[t]
                    })), (e.adapter || s.adapter)(e).then((function (t) {
                        return u(e), t.data = o.call(e, t.data, t.headers, e.transformResponse), t
                    }), (function (t) {
                        return i(t) || (u(e), t && t.response && (t.response.data = o.call(e, t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t)
                    }))
                }
            }, function (e, t, n) {
                "use strict";
                var r = n(0), o = n(3);
                e.exports = function (e, t, n) {
                    var i = this || o;
                    return r.forEach(n, (function (n) {
                        e = n.call(i, e, t)
                    })), e
                }
            }, function (e, t, n) {
                "use strict";
                var r = n(0);
                e.exports = function (e, t) {
                    r.forEach(e, (function (n, r) {
                        r !== t && r.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[r])
                    }))
                }
            }, function (e, t, n) {
                "use strict";
                var r = n(1);
                e.exports = function (e, t, n) {
                    var o = n.config.validateStatus;
                    n.status && o && !o(n.status) ? t(new r("Request failed with status code " + n.status, [r.ERR_BAD_REQUEST, r.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4], n.config, n.request, n)) : e(n)
                }
            }, function (e, t, n) {
                "use strict";
                var r = n(0);
                e.exports = r.isStandardBrowserEnv() ? {
                    write: function (e, t, n, o, i, s) {
                        var a = [];
                        a.push(e + "=" + encodeURIComponent(t)), r.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()), r.isString(o) && a.push("path=" + o), r.isString(i) && a.push("domain=" + i), !0 === s && a.push("secure"), document.cookie = a.join("; ")
                    }, read: function (e) {
                        var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                        return t ? decodeURIComponent(t[3]) : null
                    }, remove: function (e) {
                        this.write(e, "", Date.now() - 864e5)
                    }
                } : {
                    write: function () {
                    }, read: function () {
                        return null
                    }, remove: function () {
                    }
                }
            }, function (e, t, n) {
                "use strict";
                e.exports = function (e) {
                    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
                }
            }, function (e, t, n) {
                "use strict";
                e.exports = function (e, t) {
                    return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
                }
            }, function (e, t, n) {
                "use strict";
                var r = n(0),
                    o = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
                e.exports = function (e) {
                    var t, n, i, s = {};
                    return e ? (r.forEach(e.split("\n"), (function (e) {
                        if (i = e.indexOf(":"), t = r.trim(e.substr(0, i)).toLowerCase(), n = r.trim(e.substr(i + 1)), t) {
                            if (s[t] && o.indexOf(t) >= 0) return;
                            s[t] = "set-cookie" === t ? (s[t] ? s[t] : []).concat([n]) : s[t] ? s[t] + ", " + n : n
                        }
                    })), s) : s
                }
            }, function (e, t, n) {
                "use strict";
                var r = n(0);
                e.exports = r.isStandardBrowserEnv() ? function () {
                    var e, t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");

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

                    return e = o(window.location.href), function (t) {
                        var n = r.isString(t) ? o(t) : t;
                        return n.protocol === e.protocol && n.host === e.host
                    }
                }() : function () {
                    return !0
                }
            }, function (e, t, n) {
                "use strict";
                e.exports = function (e) {
                    var t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
                    return t && t[1] || ""
                }
            }, function (e, t) {
                e.exports = null
            }, function (e, t, n) {
                "use strict";
                var r = n(12).version, o = n(1), i = {};
                ["object", "boolean", "number", "function", "string", "symbol"].forEach((function (e, t) {
                    i[e] = function (n) {
                        return typeof n === e || "a" + (t < 1 ? "n " : " ") + e
                    }
                }));
                var s = {};
                i.transitional = function (e, t, n) {
                    function i(e, t) {
                        return "[Axios v" + r + "] Transitional option '" + e + "'" + t + (n ? ". " + n : "")
                    }

                    return function (n, r, a) {
                        if (!1 === e) throw new o(i(r, " has been removed" + (t ? " in " + t : "")), o.ERR_DEPRECATED);
                        return t && !s[r] && (s[r] = !0, console.warn(i(r, " has been deprecated since v" + t + " and will be removed in the near future"))), !e || e(n, r, a)
                    }
                }, e.exports = {
                    assertOptions: function (e, t, n) {
                        if ("object" != typeof e) throw new o("options must be an object", o.ERR_BAD_OPTION_VALUE);
                        for (var r = Object.keys(e), i = r.length; i-- > 0;) {
                            var s = r[i], a = t[s];
                            if (a) {
                                var u = e[s], c = void 0 === u || a(u, s, e);
                                if (!0 !== c) throw new o("option " + s + " must be " + c, o.ERR_BAD_OPTION_VALUE)
                            } else if (!0 !== n) throw new o("Unknown option " + s, o.ERR_BAD_OPTION)
                        }
                    }, validators: i
                }
            }, function (e, t, n) {
                "use strict";
                var r = n(2);

                function o(e) {
                    if ("function" != typeof e) throw new TypeError("executor must be a function.");
                    var t;
                    this.promise = new Promise((function (e) {
                        t = e
                    }));
                    var n = this;
                    this.promise.then((function (e) {
                        if (n._listeners) {
                            var t, r = n._listeners.length;
                            for (t = 0; t < r; t++) n._listeners[t](e);
                            n._listeners = null
                        }
                    })), this.promise.then = function (e) {
                        var t, r = new Promise((function (e) {
                            n.subscribe(e), t = e
                        })).then(e);
                        return r.cancel = function () {
                            n.unsubscribe(t)
                        }, r
                    }, e((function (e) {
                        n.reason || (n.reason = new r(e), t(n.reason))
                    }))
                }

                o.prototype.throwIfRequested = function () {
                    if (this.reason) throw this.reason
                }, o.prototype.subscribe = function (e) {
                    this.reason ? e(this.reason) : this._listeners ? this._listeners.push(e) : this._listeners = [e]
                }, o.prototype.unsubscribe = function (e) {
                    if (this._listeners) {
                        var t = this._listeners.indexOf(e);
                        -1 !== t && this._listeners.splice(t, 1)
                    }
                }, o.source = function () {
                    var e;
                    return {
                        token: new o((function (t) {
                            e = t
                        })), cancel: e
                    }
                }, e.exports = o
            }, function (e, t, n) {
                "use strict";
                e.exports = function (e) {
                    return function (t) {
                        return e.apply(null, t)
                    }
                }
            }, function (e, t, n) {
                "use strict";
                var r = n(0);
                e.exports = function (e) {
                    return r.isObject(e) && !0 === e.isAxiosError
                }
            }])
        }));
    }

    //notification
    class Notification {
        constructor(e = {}) {
            this.autoclose = "number" == typeof e.autoclose ? e.autoclose : 7e3, this.load()
        }

        load() {
            if (!document.querySelector(".notification")) {
                let e = document.createElement("div");
                e.className = "notification", document.body.appendChild(e)
            }
            document.querySelector(".notification").addEventListener("mouseenter", e => {
                e.target.classList.add("userint")
            }), document.querySelector(".notification").addEventListener("mouseleave", e => {
                e.target.classList.remove("userint"), document.querySelectorAll(".notification .toast").forEach(e => {
                    this.autoClose(e, e.dataset.autoclose || this.autoclose)
                })
            })
        }

        toast(e = {}) {
            let t = e.type || "success", o = e.content || "", a = e.delay || 11,
                s = "number" == typeof e.autoclose ? e.autoclose : this.autoclose;
            document.querySelector(".notification").offsetHeight > window.innerHeight && document.querySelector(".notification .toast:last-child").remove(), setTimeout(() => {
                let e = document.createElement("div");
                if (e.className = "toast show toast-" + t, s != this.autoClose && (e.dataset.autoclose = s), o) {
                    let t = document.createElement("div");
                    t.className = "content", t.innerHTML = o, e.appendChild(t)
                }
                let a = document.createElement("button");
                a.className = "close", a.innerHTML = "닫기", a.addEventListener("click", e => {
                    e.target.parentElement.classList.add("fadeOut"), setTimeout(() => {
                        e.target.parentElement.remove()
                    }, 333)
                }), e.appendChild(a), document.querySelector(".notification").prepend(e), setTimeout(() => {
                    e.classList.add("fadeIn")
                }, 1), this.autoClose(e, s)
            }, a)
        }

        autoClose(e, t) {
            t >= 1 && setTimeout(() => {
                e.parentElement && !e.parentElement.classList.contains("userint") && (e.classList.add("fadeOut"), setTimeout(() => {
                    e.remove()
                }, 333))
            }, t)
        }
    }

    let link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = 'https://stocknovicehong.github.io/FFR.css';

    const ax = axios.create({
        baseURL: 'https://dev-styleapi.fashionade.ai',
        timeout: 3000,
    });
    ax.interceptors.response.use(function (response) {
        return response;
    }, function (error) {
        return Promise.reject(error);
    });
    const $ = function (query) {
        return document.querySelector(query)
    }
    const $$ = function (query) {
        return document.querySelectorAll(query)
    }
    const $$style = function (selector, property, value) {
        const els = $$(selector);
        for (let i = 0; i < els.length; i++) {
            els[i].style[property] = value;
        }
    };
    const $$class = function (selector, className) {
        const els = $$(selector);
        for (let i = 0; i < els.length; i++) {
            els[i].className = className;
        }
    };
    const $$disabled = function (selector, boolean) {
        const els = $$(selector);
        for (let i = 0; i < els.length; i++) {
            els[i].disabled = boolean;
        }
    };
    const config = {
        api: {
            key: null,
            url: {
                // non-member
                productInfo: '/api/viton/item',
                defaultModel: '/api/viton/models/default',
                recommendList: '/api/viton/items?page=0&size=12',
                fit: '/api/viton',
                modelList: '/api/viton/models/list',

                // member
                login: '/api/viton/users/login',
                membership: '/api/viton/users/join',
                passwordReset: '/api/viton/users/find-password',
                myClosetList: '/api/viton/users/items?page=0&size=12',
                myClosetAddDefault: '/api/viton/users/items/default',
                myFormSave: '/api/viton/users/profile',
                myFormStandard: '/api/viton/users/standard_size',
                defaultModelforMember: '/api/viton/models/users',
                scrap: '/api/viton/users/items',
                noScrap: '/api/viton/users/items',
                fitHistory: '/api/viton/fitting-histories',
            }
        },
        schema: {
            model: null,
            fit: {
                TOP: null,
                BOTTOM: null,
                fittedImage: null,
            },
            detail: {
                productId: null,
                itemId: null,
                category: null,
            },
            user: null,
        },
    };

    function arrayRotate(arr, reverse) {
        if (reverse) {
            arr.unshift(arr.pop());
        } else {
            arr.push(arr.shift());
        }
        return arr;
    }

    function isLogin() {
        return JSON.parse(localStorage.getItem("FASHIONADE_FITTING_ROOM_LOGIN"))?.authToken?.access_token;
    }

    const hideAllPages = function () {
        const els = $$(".page");
        for (let i = 0; i < els.length; i++) {
            els[i].className = els[i].className.replaceAll(/\s*on/g, '');
        }
    };

    const setDefaultModel = function (cb) {
        ax.get(config.api.url.defaultModel +
            '&gender=' + config.schema.user.profile.gender.toUpperCase() +
            '&height=' + config.schema.user.profile.height +
            '&weight=' + config.schema.user.profile.weight +
            '&age=' + config.schema.user.profile.age
        ).then(function (r) {
            config.schema.model = r.data;
            cb && cb(r);
        }).catch(function (err) {
            console.log(err);
        });
    };

    const login = {
        pre: function () {
            $$class("#FFR-loginEmail, #FFR-loginPassword", "");
            $$style("#FFR-wrongLoginEmail, #FFR-wrongLoginPassword", "display", "none");
            $$disabled("#FFR-btnLogin", true);
            if ($("#FFR-form-login")) $("#FFR-form-login").reset();
        },
        on: function (opt) {
            opt = opt || {
                from: 'styleFit',
                to: 'styleFit'
            };
            opt.from = opt.from || 'styleFit';
            opt.to = opt.to || 'styleFit';
            this.pre();
            this.render(opt);
        },
        render: function (opt) {
            hideAllPages();
            if (!$("#FFR-login")) {
                const page = document.createElement("div");
                page.id = "FFR-login";
                page.className = "page on";
                page.innerHTML = `<div class="header">
                  <button class="btn back" id="FFR-login-back">뒤로가기</button>
              </div>
              <div class="content">
                  <h4>로그인</h4>
                  <form id="FFR-form-login"><fieldset>
                      <input type="email" placeholder="Email 주소" id="FFR-loginEmail" onblur="FASHIONADE_FITTING_ROOM.login.handler.checkEmail()" oninput="FASHIONADE_FITTING_ROOM.login.handler.validate('${opt.to}')"/>
                      <p class="invalidMessage" id="FFR-wrongLoginEmail">이메일 주소를 확인해주세요.</p></n>
                      <input type="password" placeholder="비밀번호" id="FFR-loginPassword" oninput="FASHIONADE_FITTING_ROOM.login.handler.validate('${opt.to}')"/>
                      <p class="invalidMessage" id="FFR-wrongLoginPassword">비밀번호를 확인해주세요.</p>
                      <button type="button" id="FFR-btnLogin" disabled="true">로그인</button>
                      <div class="txtWrap">
                          <a href="javascript:;" onclick="FASHIONADE_FITTING_ROOM.membership.on();">회원가입</a><span class="bar">|</span><a href="javascript:;" onclick="FASHIONADE_FITTING_ROOM.passwordReset.on();">비밀번호 찾기</a>
                      </div>
                      <div class="divide"></div>
                      <button type="button" id="FFR-btnKakaotalk" onclick="FASHIONADE_FITTING_ROOM.login.handler.loginWithKakao()">카카오로그인</button>
                  </fieldset></form>
              </div>`
                $("#FFR").appendChild(page);
            } else {
                const page = $("#FFR-login");
                page.className = page.className.replace(/\s*on/g, '') + ' on';
            }

            $("#FFR-login-back").onclick = function () {
                if (opt.from === 'myCloset') {
                    FASHIONADE_FITTING_ROOM.myCloset.on();
                } else {
                    FASHIONADE_FITTING_ROOM.styleFit.on('recommend');
                }
            };
        }, handler: {
            checkEmail: function () {
                let ret = true;
                if (!$("#FFR-loginEmail").checkValidity()) {
                    $("#FFR-loginEmail").className = "invalid";
                    $("#FFR-wrongLoginEmail").style.display = "block";
                    ret = false;
                }
                return ret;
            },
            validate: function (to) {
                $("#FFR-loginEmail").className = "";
                $("#FFR-loginPassword").className = "";
                $$style("#FFR-wrongLoginEmail, #FFR-wrongLoginPassword", "display", "none");

                const els = $$("#FFR-loginEmail, #FFR-loginPassword");
                let validCount = els.length;
                for (let i = 0; i < els.length; i++) {
                    if (els[i].value.replaceAll(/\s/gm, '') !== '') {
                        validCount--;
                    }
                }
                if (validCount === 0) {
                    if (!FASHIONADE_FITTING_ROOM.login.handler.checkEmail()) {
                        $("#FFR-loginEmail").className = "invalid";
                        $("#FFR-wrongLoginEmail").style.display = "block";
                        $("#FFR-btnLogin").disabled = true;
                    } else {
                        $("#FFR-btnLogin").disabled = false;
                        $("#FFR-btnLogin").onclick = function () {
                            ax.put(config.api.url.login, {
                                    id: $("#FFR-loginEmail").value.replaceAll(/\s/g, ""),
                                    password: $("#FFR-loginPassword").value.replaceAll(/\s/g, ""),
                                    loginType: 'EMAIL'
                                }
                            ).then(function (r) {
                                if (r?.data) {
                                    localStorage.setItem("FASHIONADE_FITTING_ROOM_LOGIN", JSON.stringify(r?.data));
                                    config.schema.user = r?.data?.user;

                                    const STORAGE_FASHIONADE_FITTING_ROOM = localStorage.FASHIONADE_FITTING_ROOM_LOGIN && JSON.parse(localStorage?.FASHIONADE_FITTING_ROOM);
                                    config.schema.user.profile.gender = r?.data?.user?.profile?.gender || STORAGE_FASHIONADE_FITTING_ROOM?.profile?.gender;
                                    config.schema.user.profile.height = r?.data?.user?.profile?.height || STORAGE_FASHIONADE_FITTING_ROOM?.profile?.height;
                                    config.schema.user.profile.weight = r?.data?.user?.profile?.weight || STORAGE_FASHIONADE_FITTING_ROOM?.profile?.weight;
                                    config.schema.user.profile.age = r?.data?.user?.profile?.age || STORAGE_FASHIONADE_FITTING_ROOM?.profile?.age;

                                    setDefaultModel(function (r) {
                                        if (to === 'myCloset') {
                                            myCloset.on();
                                        } else {
                                            styleFit.on('recommend');
                                        }
                                    });
                                } else {
                                    FFRNOTIFICATION.toast({
                                        type: "error",
                                        content: "이메일주소와 비밀번호를 확인해 주시기 바랍니다."
                                    });
                                }
                            }).catch(function (err) {
                                if (err?.response?.status === 401) {
                                    console.log('FASHIONADE FITTING ROOM Session Expired');
                                    FASHIONADE_FITTING_ROOM.logout();
                                } else {
                                    console.log(err);
                                }
                            });
                        };
                    }
                } else {
                    $("#FFR-btnLogin").disabled = true;
                }
            },
            loginWithKakao: function () {
                if (typeof window.Kakao !== 'undefined' && window.Kakao.isInitialized()) {
                } else if (typeof window.Kakao !== 'undefined') {
                    window.Kakao.init(config.api.kakaoKey);
                }

                window.Kakao.Auth.login({
                    success: function (authObj) {
                        ax.put(config.api.url.login, {
                                id: "",
                                password: `${authObj.access_token}`,
                                loginType: 'KAKAO'
                            }
                        ).then(function (r) {
                            if (r?.data) {
                                localStorage.setItem("FASHIONADE_FITTING_ROOM_LOGIN", JSON.stringify(r?.data));
                                config.schema.user = r?.data?.user;

                                const STORAGE_FASHIONADE_FITTING_ROOM = localStorage.FASHIONADE_FITTING_ROOM_LOGIN && JSON.parse(localStorage?.FASHIONADE_FITTING_ROOM);
                                config.schema.user.profile.gender = r?.data?.user?.profile?.gender || STORAGE_FASHIONADE_FITTING_ROOM?.profile?.gender;
                                config.schema.user.profile.height = r?.data?.user?.profile?.height || STORAGE_FASHIONADE_FITTING_ROOM?.profile?.height;
                                config.schema.user.profile.weight = r?.data?.user?.profile?.weight || STORAGE_FASHIONADE_FITTING_ROOM?.profile?.weight;
                                config.schema.user.profile.age = r?.data?.user?.profile?.age || STORAGE_FASHIONADE_FITTING_ROOM?.profile?.age;

                                setDefaultModel(function (r) {
                                    styleFit.on('recommend');
                                });
                            } else {
                                console.log(r);
                            }
                        }).catch(function (err) {
                            ax.post(config.api.url.membership, {
                                    email: '',
                                    password: `${authObj.access_token}`,
                                    joinType: 'KAKAO',
                                    apiKey: config.api.key
                                }
                            ).then(function (r) {
                                if (r.data.result) {
                                    FASHIONADE_FITTING_ROOM.login.handler.loginWithKakao()
                                }
                            }).catch(function (err) {
                                console.log(err);
                            });
                        });
                    },
                    fail: err => console.log(err)
                });
            },
        }
    };

    const membership = {
        pre: function () {
            $$class("#FFR-membershipEmail, #FFR-membershipPassword, #FFR-membershipPasswordRepeat", "")
            $$style("#FFR-wrongMembershipEmail, #FFR-wrongMembershipPassword, #FFR-wrongMembershipPasswordRepeat, #duplacateEmail", "display", "none");
            $$disabled("#FFR-btnMembership", true)
            if ($("#FFR-form-membership")) {
                $("#FFR-form-membership").reset();
            }
        },
        on: function (from) {
            this.pre();
            this.render(from);
        },
        render: function () {
            hideAllPages();
            if (!$("#FFR-membership")) {
                const page = document.createElement("div");
                page.id = "FFR-membership";
                page.className = "page on";
                page.innerHTML = `<div class="header">
                <button class="btn close" onclick="FASHIONADE_FITTING_ROOM.login.on();">닫기</button>
            </div>
            <div class="content">
                <h4>이메일 회원가입</h4>
                <form id="FFR-form-membership"><fieldset>
                    <input type="email" placeholder="Email 주소" id="FFR-membershipEmail" onblur="FASHIONADE_FITTING_ROOM.membership.handler.checkEmail()" oninput="FASHIONADE_FITTING_ROOM.membership.handler.validate()"/>
                    <p class="invalidMessage" id="FFR-wrongMembershipEmail">이메일 주소를 확인해주세요.</p>
                    <input type="password" placeholder="비밀번호" id="FFR-membershipPassword" onblur="FASHIONADE_FITTING_ROOM.membership.handler.checkPassword()" oninput="FASHIONADE_FITTING_ROOM.membership.handler.validate()"/>
                    <p class="invalidMessage" id="FFR-wrongMembershipPassword">8자 이상의 영문 대/소문자, 숫자, 특수문자 조합으로 입력해주세요.</p>
                    <input type="password" placeholder="비밀번호 재확인" id="FFR-membershipPasswordRepeat" onblur="FASHIONADE_FITTING_ROOM.membership.handler.checkRepeatPassword()" oninput="FASHIONADE_FITTING_ROOM.membership.handler.validate()"/>
                    <p class="invalidMessage" id="FFR-wrongMembershipPasswordRepeat">비밀번호가 일치하지 않습니다.</p>
                    <button type="button" id="FFR-btnMembership" disabled="true">회원가입</button>
                    <div class="txtWrap" id="duplacateEmail">
                        이미 계정이 있습니다.<a href="javascript:;" onclick="FASHIONADE_FITTING_ROOM.login.on();">로그인</a>
                    </div>
                </fieldset></form>
            </div>`
                $("#FFR").appendChild(page);
            } else {
                const page = $("#FFR-membership");
                page.className = page.className.replace(/\s*on/g, '') + ' on';
            }
        }, handler: {
            checkEmail: function () {
                let ret = true;
                if (!$("#FFR-membershipEmail").checkValidity()) {
                    $("#FFR-membershipEmail").className = "invalid";
                    $("#FFR-wrongMembershipEmail").style.display = "block";
                    ret = false;
                }
                return ret;
            },
            checkPassword: function () {
                let ret = true;
                if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/.test($("#FFR-membershipPassword").value)) {
                    $("#FFR-membershipPassword").className = "invalid";
                    $("#FFR-wrongMembershipPassword").style.display = "block";
                    ret = false;
                }
                return ret;
            },
            checkRepeatPassword: function () {
                let ret = true;
                if ($("#FFR-membershipPassword").value !== $("#FFR-membershipPasswordRepeat").value) {
                    $("#FFR-membershipPasswordRepeat").className = "invalid";
                    $("#FFR-wrongMembershipPasswordRepeat").style.display = "block";
                    ret = false;
                }
                return ret;
            },
            validate: function () {
                $("#FFR-membershipEmail").className = "";
                $("#FFR-membershipPassword").className = "";
                $("#FFR-membershipPasswordRepeat").className = "";
                $$style("#FFR-wrongMembershipEmail, #FFR-wrongMembershipPassword, #FFR-wrongMembershipPasswordRepeat, #duplacateEmail", "display", "none");

                const els = $$("#FFR-membershipEmail, #FFR-membershipPassword, #FFR-membershipPasswordRepeat");
                let validCount = els.length;
                for (let i = 0; i < els.length; i++) {
                    if (els[i].value.replaceAll(/\s/gm, '') !== '') {
                        validCount--;
                    }
                }

                if (validCount === 0) {
                    if (!membership.handler.checkEmail()) {
                        $("#FFR-membershipEmail").className = "invalid";
                        $("#FFR-wrongMembershipEmail").style.display = "block";
                        $("#FFR-btnMembership").disabled = true;
                    }
                    if (!membership.handler.checkPassword()) {
                        $("#FFR-membershipPassword").className = "invalid";
                        $("#FFR-wrongMembershipPassword").style.display = "block";
                        $("#FFR-btnMembership").disabled = true;
                    }
                    if ($("#FFR-membershipPassword").value !== $("#FFR-membershipPasswordRepeat").value) {
                        $("#FFR-membershipPasswordRepeat").className = "invalid";
                        $("#FFR-wrongMembershipPasswordRepeat").style.display = "block";
                        $("#FFR-btnMembership").disabled = true;
                    }
                    if (
                        membership.handler.checkEmail() &&
                        membership.handler.checkPassword() &&
                        membership.handler.checkRepeatPassword()
                    ) {
                        $("#FFR-btnMembership").disabled = false;
                        $("#FFR-btnMembership").onclick = function () {
                            ax.post(config.api.url.membership, {
                                    email: $("#FFR-membershipEmail").value.replaceAll(/\s/g, ""),
                                    password: $("#FFR-membershipPassword").value.replaceAll(/\s/g, ""),
                                    joinType: 'EMAIL',
                                    apiKey: config.api.key
                                }
                            ).then(function (r) {
                                if (r.data.result) {
                                    login.on();
                                    FFRNOTIFICATION.toast({
                                        type: "success",
                                        content: "회원가입이 정상적으로 처리되었습니다."
                                    });
                                }
                            }).catch(function (err) {
                                if (err?.response?.status === 500) {
                                    $("#duplacateEmail").style.display = "block";
                                    FFRNOTIFICATION.toast({
                                        type: "error",
                                        content: "입력하신 이메일주소와 연결된 계정이 이미 존재합니다. 입력하신 이메일주소로 로그인하거나 다른 계정을 만들어보세요."
                                    });
                                } else {
                                    if (err?.response?.data?.errorCode) {
                                        FFRNOTIFICATION.toast({
                                            type: "error",
                                            content: err?.response?.data?.errorMessage
                                        });
                                    } else {
                                        console.log(error);
                                    }
                                }
                            });
                        };
                    }
                } else {
                    $("#FFR-btnMembership").disabled = true;
                }
            },
        }
    };

    const passwordReset = {
        pre: function () {
            if ($("#FFR-passwordResetEmail")) {
                $("#FFR-passwordResetEmail").className = "";
            }
            if ($("#FFR-form-passwordReset")) {
                $("#FFR-form-passwordReset").reset();
            }
            if ($("#FFR-btnPasswordReset")) {
                $("#FFR-btnPasswordReset").disabled = true;
            }
            $$style("#FFR-wrongPasswordResetEmail", "display", "none");
        },
        on: function () {
            this.pre();
            this.render();
        },
        render: function () {
            hideAllPages();
            if (!$("#FFR-passwordReset")) {
                const page = document.createElement("div");
                page.id = "FFR-passwordReset";
                page.className = "page on";
                page.innerHTML = `<div class="header">
                <h3 class="title">비밀번호 재설정</h3>
                <button class="btn close" onclick="FASHIONADE_FITTING_ROOM.login.on();">닫기</button>
            </div>
            <div class="content">
                <h4>비밀번호 재설정</h4>
                <p class="txt">
                    이메일 주소를 입력하면 비밀번호를 재설정 할 수 있는 링크를 이메일 주소로 보내드립니다.
                </p>
                <form id="FFR-form-passwordReset"><fieldset>
                    <input type="email" placeholder="가입한 이메일 입력" id="FFR-passwordResetEmail" oninput="FASHIONADE_FITTING_ROOM.passwordReset.handler.validate()"/>
                    <p class="invalidMessage" id="FFR-wrongPasswordResetEmail">이메일 주소를 확인해주세요.</p>
                    <button type="button" id="FFR-btnPasswordReset" disabled="true">비밀번호 재설정 링크 보내기</button>
                </fieldset></form>
            </div>`;
                $("#FFR").appendChild(page);
            } else {
                const page = $("#FFR-passwordReset");
                page.className = page.className.replace(/\s*on/g, '') + ' on';
            }
        }, handler: {
            validate: function () {
                $("#FFR-passwordResetEmail").className = "";
                $$style("#FFR-wrongPasswordResetEmail", "display", "none");
                if (
                    !$("#FFR-passwordResetEmail").checkValidity() ||
                    $("#FFR-passwordResetEmail").value.replaceAll(/\s/g, "").length === 0
                ) {
                    $("#FFR-passwordResetEmail").className = "invalid";
                    $("#FFR-wrongPasswordResetEmail").style.display = "block";
                    $("#FFR-btnPasswordReset").disabled = true;
                } else {
                    $("#FFR-btnPasswordReset").disabled = false;
                    $("#FFR-btnPasswordReset").onclick = function () {
                        ax.post(config.api.url.passwordReset, {
                                email: $("#FFR-passwordResetEmail").value.replaceAll(/\s/g, "")
                            }
                        ).then(function (r) {
                            if (r.data.result) {
                                login.on();
                                FFRNOTIFICATION.toast({
                                    type: "success",
                                    content: "가입한 이메일주소로 비밀번호 재설정 링크가 발송되었습니다."
                                });
                            }
                        }).catch(function (err) {
                            console.log(err);
                        });
                    };
                }
            }
        }
    };

    const setFit = {
        pre: function () {
            if ($("#FASHIONADE_FITTING_ROOM-setFit-genderFemale")) {
                $("#FASHIONADE_FITTING_ROOM-setFit-genderFemale").checked = true;
            }
            if ($("#btnSetFitSave")) {
                $("#btnSetFitSave").disabled = true;
            }
            if ($("#FFR-form-setFit")) {
                $("#FFR-form-setFit").reset();
            }
        },
        on: function () {
            this.pre();
            this.render();
        },
        render: function () {
            hideAllPages();
            if (!$("#FFR-setFit")) {
                const page = document.createElement("div");
                page.id = "FFR-setFit";
                page.className = "page on";
                page.innerHTML = `<div class="header">
                <button class="btn exit" onclick="FASHIONADE_FITTING_ROOM.close()">스토어로 돌아가기</button>
            </div>
            <div class="content">
                <h4>나의 체형 설정하기</h4>
                <div class="gender">
                    <input type="radio" name="FASHIONADE_FITTING_ROOM-setFit-gender" id="FASHIONADE_FITTING_ROOM-setFit-genderFemale" checked="true" onchange="FASHIONADE_FITTING_ROOM.setFit.handler.changeGender('FEMALE')" value="FEMALE" /><label for="FASHIONADE_FITTING_ROOM-setFit-genderFemale" class="female btn">여성</label>
                    <input type="radio" name="FASHIONADE_FITTING_ROOM-setFit-gender" id="FASHIONADE_FITTING_ROOM-setFit-genderMale" onchange="FASHIONADE_FITTING_ROOM.setFit.handler.changeGender('MALE')" value="MALE"/><label for="FASHIONADE_FITTING_ROOM-setFit-genderMale" class="male btn">남성</label>
                </div>
                <form id="FFR-form-setFit">
                    <div class="measurement">
                        <dl>
                            <dt>키</dt>
                            <dd><input type="text" placeholder="160" oninput="FASHIONADE_FITTING_ROOM.setFit.handler.validate(this, 3)" id="FASHIONADE_FITTING_ROOM-setFitTall"/></dd>
                            <dd class="unit">cm</dd>
                            <dt>몸무게</dt>
                            <dd><input type="text" placeholder="50" oninput="FASHIONADE_FITTING_ROOM.setFit.handler.validate(this, 2)" id="FASHIONADE_FITTING_ROOM-setFitWeight"/></dd>
                            <dd class="unit">kg</dd>
                            <dt>만나이</dt>
                            <dd><input type="text" placeholder="25" oninput="FASHIONADE_FITTING_ROOM.setFit.handler.validate(this, 2)" id="FASHIONADE_FITTING_ROOM-setFitAge"/></dd>
                            <dd class="unit">세</dd>
                        </dl>
                    </div>
                </form>
            </div>
            <div class="footer"><div>
                <button class="btn" disabled="true" id="btnSetFitSave">체형 저장하기</button>
            </div></div>`;
                $("#FFR").appendChild(page);
            } else {
                const page = $("#FFR-setFit");
                page.className = page.className.replace(/\s*on/g, '') + ' on';
            }
        },
        handler: {
            validate: function (ipt, digit) {
                const regex = new RegExp(`(\\d{${digit}}).$`, 'g');
                ipt.value = ipt.value.replace(/[^\d]/g, '').replace(/^0[^.]/, '0').replace(regex, '$1');

                const els = $$("#FASHIONADE_FITTING_ROOM-setFitTall, #FASHIONADE_FITTING_ROOM-setFitWeight, #FASHIONADE_FITTING_ROOM-setFitAge");
                let validCount = els.length;
                for (let i = 0; i < els.length; i++) {
                    if (els[i].id === 'FASHIONADE_FITTING_ROOM-setFitTall') {
                        if (/\d{3}/.test(els[i].value)) {
                            validCount--;
                        }
                    } else {
                        if (/\d{2}/.test(els[i].value)) {
                            validCount--;
                        }
                    }
                }
                if (validCount === 0) {
                    $("#btnSetFitSave").disabled = false;
                    $("#btnSetFitSave").onclick = function () {
                        localStorage.setItem("FASHIONADE_FITTING_ROOM", JSON.stringify({
                            profile: {
                                gender: $$("[name=FASHIONADE_FITTING_ROOM-setFit-gender]:checked")[0].value,
                                height: $("#FASHIONADE_FITTING_ROOM-setFitTall").value,
                                weight: $("#FASHIONADE_FITTING_ROOM-setFitWeight").value,
                                age: $("#FASHIONADE_FITTING_ROOM-setFitAge").value
                            }
                        }));
                        config.schema.user.profile.gender = $$("[name=FASHIONADE_FITTING_ROOM-setFit-gender]:checked")[0].value;
                        config.schema.user.profile.height = $("#FASHIONADE_FITTING_ROOM-setFitTall").value;
                        config.schema.user.profile.weight = $("#FASHIONADE_FITTING_ROOM-setFitWeight").value;
                        config.schema.user.profile.age = $("#FASHIONADE_FITTING_ROOM-setFitAge").value;
                        styleFit.on('recommend');
                    };
                } else {
                    $("#btnSetFitSave").disabled = true;
                }
            },
            changeGender: function (gender) {
                if (gender === 'FEMALE') {
                    $("#FASHIONADE_FITTING_ROOM-setFitTall").placeholder = "160";
                    $("#FASHIONADE_FITTING_ROOM-setFitWeight").placeholder = "50";
                } else {
                    $("#FASHIONADE_FITTING_ROOM-setFitTall").placeholder = "180";
                    $("#FASHIONADE_FITTING_ROOM-setFitWeight").placeholder = "70";
                }
            }
        }
    };

    const myCloset = {
        trash: [],
        pre: function () {
            this.trash = [];
            if ($("#btnClearCloset")) {
                $("#btnClearCloset").className = "btnSetCloset";
                $("#btnClearCloset").innerHTML = "옷장정리";
            }
            if ($("#FFR-myCloset-select-category")) {
                $("#FFR-myCloset-select-category").value = "NONE";
                $("#FFR-myCloset-select-category").disabled = false;
            }
            if ($("#FFR-myCloset-select-sort")) {
                $("#FFR-myCloset-select-sort").value = "created,DESC";
                $("#FFR-myCloset-select-sort").disabled = false;
            }
            $$style("#FFR-myCloset .trash, #FFR-myCloset .empty, #btn-FFR-myCloset-Filled", "display", "none");
            if ($("#FFR-myCloset-list")) {
                $("#FFR-myCloset-list").innerHTML = "";
            }
        },
        on: function (from) {
            this.pre();
            if (isLogin()) {
                this.render(from);
                myCloset.handler.makeListHtml("NONE", "created,DESC");
            } else {
                login.on({
                    to: "myCloset"
                });
            }
        },
        render: function (from) {
            hideAllPages();
            if (!$("#FFR-myCloset")) {
                const page = document.createElement("div");
                page.id = "FFR-myCloset";
                page.className = "page on";
                page.innerHTML = `<div class="header">
                <h3 class="title">마이페이지</h3>
                <button class="btn close" id="FFR-myCloset-close">닫기</button>
            </div>
            <div class="content">
                <div class="tab">
                    <button class="closet">나의 옷장</button>
                    <button class="form" onclick="FASHIONADE_FITTING_ROOM.myForm.on('${from}')">나의 체형</button>
                </div>
                <div class="menu">
                    <button class="btnSetCloset" id="btnClearCloset">옷장정리</button>
                    <div class="sort">
                        <select id="FFR-myCloset-select-category" onchange="FASHIONADE_FITTING_ROOM.myCloset.handler.changeSelect(this)">
                            <option value="NONE">전체</option>
                            <option value="TOP">상의</option>
                            <option value="BOTTOM">하의</option>
                        </select>
                        <select id="FFR-myCloset-select-sort" onchange="FASHIONADE_FITTING_ROOM.myCloset.handler.changeSelect(this)">
                            <option value="created,DESC">최신순</option>
                            <option value="price,ASC">낮은 가격순</option>
                            <option value="price,DESC">높은 가격순</option>
                        </select>
                    </div>
                </div>
                <div class="scroll">
                    <div class="empty">
                        <p class="empty_txt1">옷장이 텅 비었어요!</p>
                        <p class="empty_txt2">마음에 드는 의상을 스크랩해보세요.<br/>스크랩한 상품은 피팅룸에서 가상착용이 가능합니다.</p>
                    </div>
                    <div class="list" id="FFR-myCloset-list"></div>
                    <button class="btnAutoAdd" id="btn-FFR-myCloset-Filled" onclick="FASHIONADE_FITTING_ROOM.myCloset.handler.addDefault()">인기 상품 자동 추가하기</button>
                    <div class="scrollDummy"></div>
                </div>
            </div>`;
                $("#FFR").appendChild(page);
            } else {
                const page = $("#FFR-myCloset");
                page.className = page.className.replace(/\s*on/g, '') + ' on';
            }

            $("#btnClearCloset").addEventListener("click", this.handler.toggle);

            $("#FFR-myCloset-close").onclick = function () {
                if (from === 'styleFit') {
                    styleFit.on('recommend');
                } else {
                    styleFit.on('recommend');
                }
            };
        },
        handler: {
            delete: function (trash, itemId) {
                window.event.stopPropagation();
                myCloset.trash.push(itemId);
                $("#FFR-myCloset-list").removeChild(trash.parentNode);
            },
            emptyTrash: function () {
                if (myCloset.trash.length > 0) {
                    ax.delete(config.api.url.noScrap, {
                        data: {
                            itemIds: myCloset.trash
                        },
                        headers: {
                            Authorization: `${JSON.parse(localStorage.getItem("FASHIONADE_FITTING_ROOM_LOGIN"))?.authToken?.token_type} ${isLogin()}`
                        }
                    }).then(function (r) {
                        if (r.data.result) {
                            myCloset.on();
                        }
                    }).catch(function (err) {
                        console.log(err);
                    });
                } else {
                    $("#btnClearCloset").className = "btnSetCloset";
                    $("#btnClearCloset").innerHTML = "옷장정리";
                    $$style("#FFR-myCloset .trash", "display", "none");
                    $("#FFR-myCloset-select-category").disabled = false;
                    $("#FFR-myCloset-select-sort").disabled = false;
                }
            },
            toggle: function () {
                if ($("#btnClearCloset").className === "btnSetCloset") {
                    $("#btnClearCloset").className = "btnSaveCloset";
                    $("#btnClearCloset").innerHTML = "저장";
                    $$style("#FFR-myCloset .trash", "display", "block");
                    $("#FFR-myCloset-select-category").disabled = true;
                    $("#FFR-myCloset-select-sort").disabled = true;
                } else {
                    myCloset.handler.emptyTrash();
                }
            },
            changeSelect: function (select) {
                select.disabled = true;
                myCloset.handler.makeListHtml($("#FFR-myCloset-select-category").value, $("#FFR-myCloset-select-sort").value);
            },
            makeListHtml: function (category, sort) {
                ax.get(config.api.url.myClosetList + "&category=" + category + "&sort=" + sort, {
                    headers: {
                        Authorization: `${JSON.parse(localStorage.getItem("FASHIONADE_FITTING_ROOM_LOGIN"))?.authToken?.token_type} ${isLogin()}`
                    }
                }).then(function (r) {
                    $("#FFR-myCloset-select-category").disabled = false;
                    $("#FFR-myCloset-select-sort").disabled = false;
                    $("#FFR-myCloset-list").innerHTML = "";
                    if (r?.data?.result?.content && r.data.result.content.length > 0) {
                        for (var html = '', i = 0, items = r.data.result.content, l = items.length; i < l; i++) {
                            html += `<div class="item" onclick="window.open('${items[i].detailUrl}', \'_blank\')">
                            <div class="thumb" style="background-image:url(${items[i].imageUrl})"></div>
                            <strong class="brand">${items[i].brand}</strong>
                            <p class="name">${items[i].name}</p>
                            ${function () {
                                return items[i].discountRate > 0
                                    ? '<span class="dc">' + items[i].discountRate + '%</span>'
                                    : ''
                            }()}
                            <span class="price">${(items[i].price - 0).toLocaleString("ko-KR")}</span>
                           <button class="btn trash" onclick="FASHIONADE_FITTING_ROOM.myCloset.handler.delete(this, '${items[i].itemId}');">삭제</button>
                        </div>`;
                        }
                        // $$style("#btnClearCloset, #FFR-myCloset-select-category, #FFR-myCloset-select-sort", "display", "");
                        $$style("#FFR-myCloset .empty, #btn-FFR-myCloset-Filled", "display", "none");
                        $("#FFR-myCloset-list").innerHTML = html;
                    } else {
                        // $$style("#btnClearCloset, #FFR-myCloset-select-category, #FFR-myCloset-select-sort", "display", "none");
                        if (category === 'NONE') {
                            $$style("#FFR-myCloset .empty, #btn-FFR-myCloset-Filled", "display", "block");
                        } else {
                            $$style("#FFR-myCloset .empty, #btn-FFR-myCloset-Filled", "display", "none");
                        }
                        $("#FFR-myCloset-list").innerHTML = "";
                    }
                }).catch(function (err) {
                    console.log(err);
                });
            },
            addDefault: function () {
                ax.post(config.api.url.myClosetAddDefault, {
                    apiKey: config.api.key,
                    gender: config.schema.user.profile.gender.toUpperCase()
                }, {
                    headers: {Authorization: `${JSON.parse(localStorage.getItem("FASHIONADE_FITTING_ROOM_LOGIN"))?.authToken?.token_type} ${isLogin()}`}
                }).then(function (r) {
                    myCloset.on();
                }).catch(function (err) {
                    console.log(err);
                });
            }
        }
    };

    const myForm = {
        tmpDefaultForm: null,
        tmpDetailForm: null,
        pre: function () {
            this.tmpDefaultForm = null;
            this.tmpDetailForm = null;

            if ($("#FFR-myForm-gender")) {
                $("#FFR-myForm-gender").value = config.schema.user.profile.gender;
            }
            if ($("#FFR-form-myForm")) {
                $("#FFR-form-myForm").reset();
            }
            $$disabled("#FFR-myForm-btnDetailMeasurment, #FFR-myForm-saveMyForm", true);
        },
        on: function (from) {
            this.pre();
            this.tmpDefaultForm = {
                gender: config.schema.user.profile.gender,
                height: config.schema.user.profile.height,
                weight: config.schema.user.profile.weight,
                age: config.schema.user.profile.age
            };
            this.tmpDetailForm = {
                bottomLength: config.schema.user.profile.bottomLength,
                chest: config.schema.user.profile.chest,
                hip: config.schema.user.profile.hip,
                shoulder: config.schema.user.profile.shoulder,
                thigh: config.schema.user.profile.thigh,
                topLength: config.schema.user.profile.topLength,
                waist: config.schema.user.profile.waist
            };

            if (!this.tmpDetailForm.shoulder) {
                ax.get(config.api.url.myFormStandard +
                    '&gender=' + config.schema.user.profile.gender.toUpperCase() +
                    '&height=' + config.schema.user.profile.height +
                    '&weight=' + config.schema.user.profile.weight +
                    '&age=' + config.schema.user.profile.age,
                    {
                        headers: {Authorization: `${JSON.parse(localStorage.getItem("FASHIONADE_FITTING_ROOM_LOGIN"))?.authToken?.token_type} ${isLogin()}`}
                    }).then(function (r) {
                    myForm.tmpDetailForm = r?.data?.result;
                    myForm.render(from);
                }).catch(function (err) {
                    console.log(err);
                });
            } else {
                this.render(from);
            }
        },
        render: function (from) {
            hideAllPages();
            const html = `<div class="header">
                <h3 class="title">마이페이지</h3>
                <button class="btn close" id="FFR-myForm-close">닫기</button>
            </div>
            <div class="content">
                <div class="tab">
                    <button class="closet" onclick="FASHIONADE_FITTING_ROOM.myCloset.on('${from}')">나의 옷장</button>
                    <button class="form">나의 체형</button>
                </div>
                <div class="scroll">
                    <div class="profile">
                        <div class="gender ${config.schema.user.profile.gender.toUpperCase() === "MALE" ? "male" : "female"}">${config.schema.user.profile.gender.toUpperCase() === "MALE" ? "남성" : "여성"}</div>
                        <div class="detail">
                            <div class="name">${config.schema.user.profile.name || "-"}</div>
                            <div class="email">${config.schema.user.email || "-"}</div>
                        </div>
                    </div>
                    <form id="FFR-form-myForm">
                        <div class="measurement">
                            <dl>
                                <dt>성별</dt>
                                <dd>
                                    <input type="text" id="FFR-myForm-gender" value="${myForm.tmpDefaultForm.gender.toUpperCase() === "MALE" ? "남성" : "여성"}" disabled />
                                </dd>
                                <dt>키</dt>
                                <dd>
                                    <input type="text" id="FFR-myForm-height" placeholder="160" value="${myForm.tmpDefaultForm.height || ""}" oninput="FASHIONADE_FITTING_ROOM.myForm.handler.checkChangedValue('height', this, 3)"/>
                                    <span class="unit">cm</span>
                                </dd>
                                <dt>몸무게</dt>
                                <dd>
                                    <input type="text" id="FFR-myForm-weight" placeholder="50" value="${myForm.tmpDefaultForm.weight || ""}" oninput="FASHIONADE_FITTING_ROOM.myForm.handler.checkChangedValue('weight', this, 2)"/>
                                    <span class="unit">kg</span>
                                </dd>
                                <dt>만나이</dt>
                                <dd>
                                    <input type="text" id="FFR-myForm-age" placeholder="25" value="${myForm.tmpDefaultForm.age || ""}" oninput="FASHIONADE_FITTING_ROOM.myForm.handler.checkChangedValue('age', this, 2)"/>
                                    <span class="unit">세</span>
                                </dd>
                            </dl>
                        </div>
                        <div class="barDetailMeasurment">
                            <button type="button" class="btn measurement" id="FFR-myForm-btnDetailMeasurment" disabled="true" onclick="FASHIONADE_FITTING_ROOM.myForm.handler.getStandardForm()">상세 체형 측정</button>
                        </div>
                        <div class="measurement detail">
                            <dl>
                                <dt>어깨 너비</dt>
                                <dd>
                                    <input type="text" placeholder="0" id="FFR-myForm-shoulder" value="${myForm.tmpDetailForm.shoulder || 0}" oninput="FASHIONADE_FITTING_ROOM.myForm.handler.checkChangedDetailValue('shoulder', this, 4)"/>
                                    <span class="unit">mm</span>
                                </dd>
                                <dt>가슴 둘레</dt>
                                <dd>
                                    <input type="text" placeholder="0" id="FFR-myForm-chest" value="${myForm.tmpDetailForm.chest || 0}" oninput="FASHIONADE_FITTING_ROOM.myForm.handler.checkChangedDetailValue('chest', this, 4)"/>
                                    <span class="unit">mm</span>
                                </dd>
                                <dt>허리 둘레</dt>
                                <dd>
                                    <input type="text" placeholder="0" id="FFR-myForm-waist" value="${myForm.tmpDetailForm.waist || 0}" oninput="FASHIONADE_FITTING_ROOM.myForm.handler.checkChangedDetailValue('waist', this, 4)"/>
                                    <span class="unit">mm</span>
                                </dd>
                                <dt>엉덩이 둘레</dt>
                                <dd>
                                    <input type="text" placeholder="0" id="FFR-myForm-hip" value="${myForm.tmpDetailForm.hip || 0}" oninput="FASHIONADE_FITTING_ROOM.myForm.handler.checkChangedDetailValue('hip', this, 4)"/>
                                    <span class="unit">mm</span>
                                </dd>
                                <dt>허벅지 둘레</dt>
                                <dd>
                                    <input type="text" placeholder="0" id="FFR-myForm-thigh" value="${myForm.tmpDetailForm.thigh || 0}" oninput="FASHIONADE_FITTING_ROOM.myForm.handler.checkChangedDetailValue('thigh', this, 4)"/>
                                    <span class="unit">mm</span>
                                </dd>
                                <dt>다리 길이</dt>
                                <dd>
                                    <input type="text" placeholder="0" id="FFR-myForm-bottomLength" value="${myForm.tmpDetailForm.bottomLength || 0}" oninput="FASHIONADE_FITTING_ROOM.myForm.handler.checkChangedDetailValue('bottomLength', this, 4)"/>
                                    <span class="unit">mm</span>
                                </dd>
                                <dt>몸통수직길이</dt>
                                <dd>
                                    <input type="text" placeholder="0" id="FFR-myForm-topLength" value="${myForm.tmpDetailForm.topLength || 0}" oninput="FASHIONADE_FITTING_ROOM.myForm.handler.checkChangedDetailValue('topLength', this, 4)"/>
                                    <span class="unit">mm</span>
                                </dd>
                            </dl>
                            <div class="logout"><a href="javascript:;" onclick="FASHIONADE_FITTING_ROOM.logout()">로그아웃</a></div>
                        </div>
                    </form>
                    <div class="scrollDummy"></div>
                </div>
            </div>
            <div class="footer"><div>
                <button class="btn" disabled="true" id="FFR-myForm-saveMyForm" onclick="FASHIONADE_FITTING_ROOM.myForm.handler.saveProfile()">체형 저장하기</button>
            </div></div>`;

            if (!$("#FFR-myForm")) {
                const page = document.createElement("div");
                page.id = "FFR-myForm";
                page.className = "page on";
                page.innerHTML = html;
                $("#FFR").appendChild(page);
            } else {
                const page = $("#FFR-myForm");
                page.innerHTML = html;
                page.className = page.className.replace(/\s*on/g, '') + ' on';
            }

            $("#FFR-myForm-close").onclick = function () {
                if (from === 'styleFit') {
                    styleFit.on('recommend');
                } else {
                    styleFit.on('recommend');
                }
            };
        },
        handler: {
            checkChangedValue: function (property, input, digit) {
                const regex = new RegExp(`(\\d{${digit}}).$`, 'g');
                input.value = input.value.replace(/[^\d]/g, '').replace(/^0[^.]/, '0').replace(regex, '$1');

                let inputs = $$("#FFR-myForm-height, #FFR-myForm-weight, #FFR-myForm-age");
                for (let i = 0; i < inputs.length; i++) {
                    if (inputs[i].value.replace(/\s/g, '') === '') {
                        $("#FFR-myForm-btnDetailMeasurment").disabled = true;
                        $("#FFR-myForm-saveMyForm").disabled = true;
                        return;
                    }
                }
                for (let i = 0; i < inputs.length; i++) {
                    if (inputs[i].value !== myForm.tmpDefaultForm[inputs[i].id.replaceAll(/FFR-myForm-/g, "")]) {
                        $("#FFR-myForm-btnDetailMeasurment").disabled = false;
                        $("#FFR-myForm-saveMyForm").disabled = false;
                        break;
                    } else {
                        $("#FFR-myForm-btnDetailMeasurment").disabled = true;
                        $("#FFR-myForm-saveMyForm").disabled = true;
                    }
                }
            },
            checkChangedDetailValue: function (property, input, digit) {
                const regex = new RegExp(`(\\d{${digit}}).$`, 'g');
                input.value = input.value.replace(/[^\d]/g, '').replace(/^0[^.]/, '0').replace(regex, '$1');

                let inputs = $$("#FFR-myForm-bottomLength, #FFR-myForm-chest, #FFR-myForm-hip, #FFR-myForm-shoulder, #FFR-myForm-thigh, #FFR-myForm-topLength, #FFR-myForm-waist");
                for (let i = 0; i < inputs.length; i++) {
                    if (inputs[i].value.replace(/\s/g, '') === '') {
                        $("#FFR-myForm-saveMyForm").disabled = true;
                        return;
                    }
                }
                for (let i = 0; i < inputs.length; i++) {
                    if (inputs[i].value !== myForm.tmpDetailForm[inputs[i].id.replaceAll(/FFR-myForm-/g, "")]) {
                        $("#FFR-myForm-saveMyForm").disabled = false;
                        break;
                    } else {
                        $("#FFR-myForm-saveMyForm").disabled = true;
                    }
                }
            },
            saveProfile: function () {
                ax.put(config.api.url.myFormSave, {
                        apiKey: config.api.key,
                        userId: config.schema.user.id,
                        name: config.schema.user.profile.name,
                        gender: config.schema.user.profile.gender,
                        height: $('#FFR-myForm-height').value,
                        weight: $('#FFR-myForm-weight').value,
                        age: $('#FFR-myForm-age').value,
                        shoulder: $('#FFR-myForm-shoulder').value,
                        chest: $('#FFR-myForm-chest').value,
                        waist: $('#FFR-myForm-waist').value,
                        hip: $('#FFR-myForm-hip').value,
                        thigh: $('#FFR-myForm-thigh').value,
                        topLength: $('#FFR-myForm-topLength').value,
                        bottomLength: $('#FFR-myForm-bottomLength').value
                    },
                    {
                        headers: {Authorization: `${JSON.parse(localStorage.getItem("FASHIONADE_FITTING_ROOM_LOGIN"))?.authToken?.token_type} ${isLogin()}`}
                    }).then(function (r) {
                    if (r.data.result) {
                        config.schema.user.profile.height = $('#FFR-myForm-height').value;
                        config.schema.user.profile.weight = $('#FFR-myForm-weight').value;
                        config.schema.user.profile.age = $('#FFR-myForm-age').value;
                        config.schema.user.profile.shoulder = $('#FFR-myForm-shoulder').value;
                        config.schema.user.profile.chest = $('#FFR-myForm-chest').value;
                        config.schema.user.profile.waist = $('#FFR-myForm-waist').value;
                        config.schema.user.profile.hip = $('#FFR-myForm-hip').value;
                        config.schema.user.profile.thigh = $('#FFR-myForm-thigh').value;
                        config.schema.user.profile.topLength = $('#FFR-myForm-topLength').value;
                        config.schema.user.profile.bottomLength = $('#FFR-myForm-bottomLength').value;

                        FFRNOTIFICATION.toast({
                            type: "success",
                            content: "체형이 정상적으로 변경되었습니다."
                        });

                        setDefaultModel();
                        myForm.on();
                    }
                }).catch(function (err) {
                    console.log(err);
                });
            },
            getStandardForm: function () {
                let inputs = $$("#FFR-myForm-height, #FFR-myForm-weight, #FFR-myForm-age");
                for (let i = 0; i < inputs.length; i++) {
                    myForm.tmpDefaultForm[inputs[i].id.replaceAll(/FFR-myForm-/g, "")] = inputs[i].value;
                }
                $("#FFR-myForm-btnDetailMeasurment").disabled = true;

                ax.get(config.api.url.myFormStandard + '&gender=' + ($("#FFR-myForm-gender").value === "남성" ? 'MALE' : 'FEMALE') + '&height=' + $("#FFR-myForm-height").value + '&weight=' + $("#FFR-myForm-weight").value + '&age=' + $("#FFR-myForm-age").value,
                    {
                        headers: {Authorization: `${JSON.parse(localStorage.getItem("FASHIONADE_FITTING_ROOM_LOGIN"))?.authToken?.token_type} ${isLogin()}`}
                    }).then(function (r) {
                    if (!r?.data?.result?.shoulder) {
                        inputs = $$("#FFR-myForm-bottomLength, #FFR-myForm-chest, #FFR-myForm-hip, #FFR-myForm-shoulder, #FFR-myForm-thigh, #FFR-myForm-topLength, #FFR-myForm-waist");
                        for (let i = 0; i < inputs.length; i++) {
                            const property = inputs[i].id.replaceAll(/FFR-myForm-/g, "");
                            myForm.tmpDetailForm[property] = "0";
                            $("#FFR-myForm-" + property).value = "0";
                        }
                        FFRNOTIFICATION.toast({
                            type: "error",
                            content: "검색된 표준 데이터가 없습니다."
                        });
                    } else {
                        inputs = $$("#FFR-myForm-bottomLength, #FFR-myForm-chest, #FFR-myForm-hip, #FFR-myForm-shoulder, #FFR-myForm-thigh, #FFR-myForm-topLength, #FFR-myForm-waist");
                        for (let i = 0; i < inputs.length; i++) {
                            const property = inputs[i].id.replaceAll(/FFR-myForm-/g, "");
                            myForm.tmpDetailForm[property] = r.data.result[property];
                            $("#FFR-myForm-" + property).value = r.data.result[property];
                        }
                        FFRNOTIFICATION.toast({
                            type: "success",
                            content: "한국 표준 사이즈가 적용되었습니다."
                        });
                    }

                }).catch(function (err) {
                    console.log(err);
                });
            }
        }
    };

    const getStyleFitList = function (tab, category) {
        if ($("#styleFit-tab-recommend")) {
            $("#styleFit-tab-recommend").className = $("#styleFit-tab-recommend").className.replace(/\s*on/g, '');
        }
        if ($("#styleFit-tab-myCloset")) {
            $("#styleFit-tab-myCloset").className = $("#styleFit-tab-myCloset").className.replace(/\s*on/g, '');
        }
        if ($("#styleFit-tab-fitHistory")) {
            $("#styleFit-tab-fitHistory").className = $("#styleFit-tab-fitHistory").className.replace(/\s*on/g, '');
        }
        $$style(
            "#FFR-styleFit-recommend-select-category, #FFR-styleFit-recommend-select-sort," +
            "#FFR-styleFit-myCloset-select-category, #FFR-styleFit-myCloset-select-sort," +
            "#FFR-styleFit-fitHistory-select-category, #FFR-styleFit-fitHistory-select-sort",
            "display", "none");

        //추천상품
        if (tab === 'recommend') {
            if ($("#styleFit-tab-recommend")) {
                $("#styleFit-tab-recommend").className += " on";
            }
            $$style("#FFR-styleFit-recommend-select-category, #FFR-styleFit-recommend-select-sort", "display", "");
            $("#FFR-styleFit-recommend-select-category").value = config.schema.detail.category === 'TOP' ? 'BOTTOM' : config.schema.detail.category === 'BOTTOM' ? 'TOP' : 'NONE';

            if (isLogin()) {
                const _myClosetItemList = [];
                ax.get(config.api.url.myClosetList + "&category=NONE&sort=created,DESC",
                    {
                        headers: {Authorization: `${JSON.parse(localStorage.getItem("FASHIONADE_FITTING_ROOM_LOGIN"))?.authToken?.token_type} ${isLogin()}`}
                    }).then(function (r) {
                    for (var i = 0, items = r.data.result.content, l = items.length; i < l; i++) {
                        _myClosetItemList.push(items[i].itemId);
                    }

                    ax.get(config.api.url.recommendList +
                        '&modelId=' + config.schema.model.id +
                        '&gender=' + config.schema.user.profile.gender.toUpperCase() +
                        "&category=" + (category ? category : (config.schema.detail.category === 'TOP' ? 'BOTTOM' : config.schema.detail.category === 'BOTTOM' ? 'TOP' : 'NONE')) +
                        "&sort=created,DESC"
                    ).then(function (r) {
                        for (var html = '', i = 0, items = r.data.content, l = items.length; i < l; i++) {
                            for (var scrap = false, j = 0, k = _myClosetItemList.length; j < k; j++) {
                                if (_myClosetItemList[j] === items[i].itemId) {
                                    scrap = true;
                                    break;
                                }
                            }

                            html += `${(function () {
                                return FASHIONADE_FITTING_ROOM.config.schema.fit.TOP === items[i].itemId || FASHIONADE_FITTING_ROOM.config.schema.fit.BOTTOM === items[i].itemId
                                    ? `<div class="item on" onclick="FASHIONADE_FITTING_ROOM.styleFit.handler.stripByItem(this, '${items[i]?.category}', '${items[i].itemId}')" data-itemId="${items[i].itemId}" data-category="${items[i].category}">`
                                    : `<div class="item" onclick="FASHIONADE_FITTING_ROOM.styleFit.handler.fitModel(this, '${items[i]?.category}', '${items[i].itemId}')" data-itemId="${items[i].itemId}" data-category="${items[i].category}">`
                            })()}
                                <div class="thumb" style="background-image:url(${items[i].imageUrl})"></div>
                                <strong class="brand">${items[i].siteName}</strong>
                                <p class="name">${items[i].name}</p>
                                ${function () {
                                return scrap
                                    ? `<button class="btn scrap on" onclick="event.stopPropagation();FASHIONADE_FITTING_ROOM.styleFit.handler.noScrap(this, '${items[i].itemId}')">노 스크랩</button>`
                                    : `<button class="btn scrap" onclick="event.stopPropagation();FASHIONADE_FITTING_ROOM.styleFit.handler.scrap(this, '${items[i].itemId}')">스크랩</button>`
                            }()}
                                </div>`;
                        }
                        $("#FFR-styleFit-recommend-select-category").value = category ? category : (config.schema.detail.category === 'TOP' ? 'BOTTOM' : config.schema.detail.category === 'BOTTOM' ? 'TOP' : 'NONE');
                        $("#FFR-styleFit-list").innerHTML = html;
                    }).catch(function (err) {
                        console.log(err);
                    });
                }).catch(function (err) {
                    console.log(err);
                });
            } else {
                ax.get(config.api.url.recommendList +
                    '&modelId=' + config.schema.model.id +
                    '&gender=' + config.schema.user.profile.gender.toUpperCase() +
                    "&category=" + (category ? category : (config.schema.detail.category === 'TOP' ? 'BOTTOM' : config.schema.detail.category === 'BOTTOM' ? 'TOP' : 'NONE')) +
                    "&sort=created,DESC"
                ).then(function (r) {
                    for (var html = '', i = 0, items = r.data.content, l = items.length; i < l; i++) {
                        html += `${(function () {
                            return FASHIONADE_FITTING_ROOM.config.schema.fit.TOP === items[i].itemId || FASHIONADE_FITTING_ROOM.config.schema.fit.BOTTOM === items[i].itemId
                                ? `<div class="item on" onclick="FASHIONADE_FITTING_ROOM.styleFit.handler.stripByItem(this, '${items[i]?.category}', '${items[i].itemId}')" data-itemId="${items[i].itemId}" data-category="${items[i].category}">`
                                : `<div class="item" onclick="FASHIONADE_FITTING_ROOM.styleFit.handler.fitModel(this, '${items[i]?.category}', '${items[i].itemId}')" data-itemId="${items[i].itemId}" data-category="${items[i].category}">`
                        })()}
                            <div class="thumb" style="background-image:url(${items[i].imageUrl})"></div>
                            <strong class="brand">${items[i].siteName}</strong>
                            <p class="name">${items[i].name}</p>
                            ${function () {
                            return isLogin()
                                ? scrap
                                    ? `<button class="btn scrap on" onclick="event.stopPropagation();FASHIONADE_FITTING_ROOM.styleFit.handler.noScrap(this, '${items[i].itemId}')">노 스크랩</button>`
                                    : `<button class="btn scrap" onclick="event.stopPropagation();FASHIONADE_FITTING_ROOM.styleFit.handler.scrap(this, '${items[i].itemId}')">스크랩</button>`
                                : `<button class="btn scrap" onclick="event.stopPropagation();FASHIONADE_FITTING_ROOM.login.on()">스크랩</button>`
                        }()}
                            </div>`;
                    }
                    $("#FFR-styleFit-recommend-select-category").value = category ? category : (config.schema.detail.category === 'TOP' ? 'BOTTOM' : config.schema.detail.category === 'BOTTOM' ? 'TOP' : 'NONE');
                    $("#FFR-styleFit-list").innerHTML = html;
                }).catch(function (err) {
                    console.log(err);
                });
            }

        } else if (tab === 'myCloset') {
            if ($("#styleFit-tab-myCloset")) {
                $("#styleFit-tab-myCloset").className += " on";
            }
            if (category !== undefined) {
                $("#FFR-styleFit-myCloset-select-category").value = category;
            }
            $$style("#FFR-styleFit-myCloset-select-category, #FFR-styleFit-myCloset-select-sort", "display", "");
            if (isLogin()) {
                ax.get(config.api.url.myClosetList + "&category=" + (category || "NONE") + "&sort=created,DESC",
                    {
                        headers: {Authorization: `${JSON.parse(localStorage.getItem("FASHIONADE_FITTING_ROOM_LOGIN"))?.authToken?.token_type} ${isLogin()}`}
                    }).then(function (r) {
                    for (var html = '', i = 0, items = r.data.result.content, l = items.length; i < l; i++) {
                        html += `${(function () {
                            return FASHIONADE_FITTING_ROOM.config.schema.fit.TOP === items[i].itemId || FASHIONADE_FITTING_ROOM.config.schema.fit.BOTTOM === items[i].itemId
                                ? `<div class="item on" onclick="FASHIONADE_FITTING_ROOM.styleFit.handler.stripByItem(this, '${items[i]?.category}', '${items[i].itemId}')" data-itemId="${items[i].itemId}" data-category="${items[i].category}">`
                                : `<div class="item" onclick="FASHIONADE_FITTING_ROOM.styleFit.handler.fitModel(this, '${items[i]?.category}', '${items[i].itemId}')" data-itemId="${items[i].itemId}" data-category="${items[i].category}">`
                        })()}
                                    <div class="thumb" style="background-image:url(${items[i].imageUrl})"></div>
                                    <strong class="brand">${items[i].brand}</strong>
                                    <p class="name">${items[i].name}</p>
                                    <button class="btn scrap on" onclick="event.stopPropagation();FASHIONADE_FITTING_ROOM.styleFit.handler.noScrap(this, '${items[i].itemId}')">노 스크랩</button>
                                </div>`;
                    }
                    // $("#FFR-styleFit-myCloset-select-category").value = 'NONE';
                    $("#FFR-styleFit-list").innerHTML = html;
                }).catch(function (err) {
                    console.log(err);
                });
            } else {
                login.on({to: "styleFit"});
            }
        } else if (tab === 'fitHistory') {
            if ($("#styleFit-tab-fitHistory")) {
                $("#styleFit-tab-fitHistory").className += " on";
            }
            if (category !== undefined) {
                $("#FFR-styleFit-fitHistory-select-category").value = category;
            }
            $$style("#FFR-styleFit-fitHistory-select-category, #FFR-styleFit-fitHistory-select-sort", "display", "");
            if (isLogin()) {
                const _myClosetItemList = [];
                ax.get(config.api.url.myClosetList + "&category=NONE&sort=created,DESC",
                    {
                        headers: {Authorization: `${JSON.parse(localStorage.getItem("FASHIONADE_FITTING_ROOM_LOGIN"))?.authToken?.token_type} ${isLogin()}`}
                    }).then(function (r) {

                    for (var i = 0, items = r.data.result.content, l = items.length; i < l; i++) {
                        _myClosetItemList.push(items[i].itemId);
                    }

                    ax.get(config.api.url.fitHistory + "&page=0&size=12&category=" + (category || "NONE") + "&sort=created,DESC",
                        {headers: {Authorization: `${JSON.parse(localStorage.getItem("FASHIONADE_FITTING_ROOM_LOGIN"))?.authToken?.token_type} ${isLogin()}`}})
                        .then(function (r) {
                            var html = '', scrap = false;
                            for (const date in r.data) {
                                html += `<h5>${date}</h5>`;
                                for (i = 0, items = r.data[date], l = items.length; i < l; i++) {
                                    for (var scrap = false, j = 0, k = _myClosetItemList.length; j < k; j++) {
                                        if (_myClosetItemList[j] === items[i].itemId) {
                                            scrap = true;
                                            break;
                                        }
                                    }

                                    html += `${(function () {
                                        return FASHIONADE_FITTING_ROOM.config.schema.fit.TOP === items[i].itemId || FASHIONADE_FITTING_ROOM.config.schema.fit.BOTTOM === items[i].itemId
                                            ? `<div class="item on" onclick="FASHIONADE_FITTING_ROOM.styleFit.handler.stripByItem(this, '${items[i]?.category}', '${items[i].itemId}')" data-itemId="${items[i].itemId}" data-category="${items[i].category}">`
                                            : `<div class="item" onclick="FASHIONADE_FITTING_ROOM.styleFit.handler.fitModel(this, '${items[i]?.category}', '${items[i].itemId}')" data-itemId="${items[i].itemId}" data-category="${items[i].category}">`
                                    })()}
                                        <div class="thumb" style="background-image:url(${items[i].imageUrl})"></div>
                                        <strong class="brand">${items[i].brand}</strong>
                                        <p class="name">${items[i].name}</p>
                                        ${function () {
                                        return scrap
                                            ? `<button class="btn scrap on" onclick="event.stopPropagation();FASHIONADE_FITTING_ROOM.styleFit.handler.noScrap(this, '${items[i].itemId}')">노 스크랩</button>`
                                            : `<button class="btn scrap" onclick="event.stopPropagation();FASHIONADE_FITTING_ROOM.styleFit.handler.scrap(this, '${items[i].itemId}')">스크랩</button>`
                                    }()}
                                        </div>`;
                                }
                            }

                            // $("#FFR-styleFit-fitHistory-select-category").value = 'NONE';
                            $("#FFR-styleFit-list").innerHTML = html;
                        }).catch(function (err) {
                        console.log(err);
                    });
                }).catch(function (err) {
                    console.log(err);
                });
            } else {
                login.on({to: "styleFit"});
            }
        }
    };

    const fit = function (cb) {
        ax.get(config.api.url.fit +
            `${config.schema.fit.TOP ? `&topId=${config.schema.fit.TOP}` : ''}` +
            `${config.schema.fit.BOTTOM ? `&bottomId=${config.schema.fit.BOTTOM}` : ''}` +
            '&modelId=' + config.schema.model.id
        ).then(function (r) {
            if (r?.data?.imageUrl) {
                config.schema.fit.fittedImage = r.data.imageUrl;
                if ($("#FFR-styleFit-model")) {
                    const _img = new Image();
                    _img.onload = function () {
                        $("#FFR-styleFit-model").style.backgroundImage = `url(${r.data.imageUrl})`;
                    }
                    _img.src = `${r.data.imageUrl}`;
                }
                cb && cb(r);
            }
        }).catch(function (err) {
            console.log(err);
        });
    };

    const styleFit = {
        pre: function (tab) {
            config.schema.fit.TOP = null;
            config.schema.fit.BOTTOM = null;
            if (config.schema.detail.category === 'TOP') {
                config.schema.fit.TOP = config.schema.detail.itemId;
            }
            if (config.schema.detail.category === 'BOTTOM') {
                config.schema.fit.BOTTOM = config.schema.detail.itemId;
            }
            config.schema.fit.fittedImage = null;
            if ($("#FFR-styleFit-model")) {
                $("#FFR-styleFit-model").style.backgroundImage = '';
            }
            if (tab === 'recommend') {
                if ($("#FFR-styleFit-recommend-select-category")) {
                    $("#FFR-styleFit-recommend-select-category").value = config.schema.detail.category === 'TOP' ? 'BOTTOM' : config.schema.detail.category === 'BOTTOM' ? 'TOP' : 'NONE';
                    styleFit.handler.changeSelectRecommend($("#FFR-styleFit-recommend-select-category"));
                }
            }
        },
        on: function (tab) {
            this.pre(tab);
            if (!config.schema.model) {
                setDefaultModel(function (r) {
                    if (!config.schema.fit?.fittedImage) {
                        fit();
                    }
                    // getStyleFitList(tab);
                    styleFit.render(tab);
                });
            } else {
                if (!config.schema.fit?.fittedImage) {
                    fit();
                }
                // getStyleFitList(tab);
                styleFit.render(tab);
            }

        },
        render: function (tab) {
            hideAllPages();
            if (!$("#FFR-styleFit")) {
                const page = document.createElement("div");
                page.id = "FFR-styleFit";
                page.className = "page noscroll on";
                page.innerHTML = `<div class="header">
                <button class="btn exit" onclick="FASHIONADE_FITTING_ROOM.close()">스토어로 돌아가기</button>
                <span id="loginStatsWrap"></span>
                <button class="btn menu" onclick="FASHIONADE_FITTING_ROOM.myCloset.on('styleFit')">메뉴</button>
            </div>
            <div class="content">
                <div class="tab">
                    <button class="styleFit on">스타일핏</button>
                    <button class="sizeFit">사이즈핏</button>
                    <button class="changeModel" onclick="FASHIONADE_FITTING_ROOM.chooseModel.on()">모델변경</button>
                </div>
                <div class="modelWrap">
                    <div class="model" id="FFR-styleFit-model" style="background-image:url(${config.schema.model.imageUrl})"></div>
                    <div class="btnUndress" id="FFR-styleFit-wrapButtons"></div>
                </div>
                <div class="tab2">
                    <div class="menu">
                        <button class="btn recommend" id="styleFit-tab-recommend" onClick="FASHIONADE_FITTING_ROOM.styleFit.handler.getStyleFitList('recommend')">추천 상품</button>
                        <button class="btn mycloset" id="styleFit-tab-myCloset" onClick="FASHIONADE_FITTING_ROOM.styleFit.handler.getStyleFitList('myCloset')">나의 옷장</button>
                        <button class="btn fitted" id="styleFit-tab-fitHistory" onClick="FASHIONADE_FITTING_ROOM.styleFit.handler.getStyleFitList('fitHistory')">피팅 상품</button>
                    </div>
                    <div class="sort">
                        <select id="FFR-styleFit-recommend-select-category" onchange="FASHIONADE_FITTING_ROOM.styleFit.handler.changeSelectRecommend(this)">
                            <option value="NONE">전체</option>
                            <option value="TOP">상의</option>
                            <option value="BOTTOM">하의</option>
                        </select>
                        <select id="FFR-styleFit-recommend-select-sort">
                            <option value="created,DESC">최신순</option>
                        </select>
                        <select id="FFR-styleFit-myCloset-select-category" onchange="FASHIONADE_FITTING_ROOM.styleFit.handler.changeSelectMyCloset(this)">
                            <option value="NONE">전체</option>
                            <option value="TOP">상의</option>
                            <option value="BOTTOM">하의</option>
                        </select>
                        <select id="FFR-styleFit-myCloset-select-sort">
                            <option value="created,DESC">최신순</option>
                        </select>
                        <select id="FFR-styleFit-fitHistory-select-category" onchange="FASHIONADE_FITTING_ROOM.styleFit.handler.changeSelectFitHistory(this)">
                            <option value="NONE">전체</option>
                            <option value="TOP">상의</option>
                            <option value="BOTTOM">하의</option>
                        </select>
                        <select id="FFR-styleFit-fitHistory-select-sort">
                            <option value="created,DESC">최신순</option>
                        </select>
                    </div>
                </div>
                <div class="scroll" id="styleFitScroll">
                    <div class="list" id="FFR-styleFit-list"></div>
<!--                    <div class="scrollDummy"></div>-->
                </div>
            </div>`;
                $("#FFR").appendChild(page);
                $$style('#styleFitScroll', 'height', `${$('html').getBoundingClientRect().height - $('#styleFitScroll').getBoundingClientRect().top + 56}px`)
                // $$style('#FFR-styleFit .modelWrap', 'height', `${document.getElementsByTagName('html')[0].clientHeight * 0.5}px`);
            } else {
                const page = $("#FFR-styleFit");
                page.className = page.className.replace(/\s*on/g, '') + ' on';
            }

            getStyleFitList(tab || 'recommend');

            if (config.schema.detail.category === 'TOP') {
                $("#FFR-styleFit-wrapButtons").innerHTML = `<button class="btn top" onclick="FASHIONADE_FITTING_ROOM.styleFit.handler.strip('TOP')">상의</button>`;
            } else if (config.schema.detail.category === 'BOTTOM') {
                $("#FFR-styleFit-wrapButtons").innerHTML = `<button class="btn bottom" onclick="FASHIONADE_FITTING_ROOM.styleFit.handler.strip('BOTTOM')">하의</button>`;
            } else {
                $("#FFR-styleFit-wrapButtons").innerHTML = `<button class="btn default">기본</button>`;
            }

            $("#FFR-styleFit-model").style.backgroundImage = `url(${config.schema.fit.fittedImage})`;
            $("#loginStatsWrap").innerHTML = (function () {
                return !isLogin() ? '<button class="btn login" onclick="FASHIONADE_FITTING_ROOM.login.on()">로그인</button>' : '';
            })();
            $("#FFR-styleFit-recommend-select-category").value = config.schema.detail.category === 'TOP' ? 'BOTTOM' : 'TOP';
            $("#FFR-styleFit-recommend-select-sort").value = "created,DESC";
        },
        handler: {
            scrap: function (btn, itemId) {
                btn.disabled = true;
                ax.post(config.api.url.scrap,
                    {itemId},
                    {
                        headers: {Authorization: `${JSON.parse(localStorage.getItem("FASHIONADE_FITTING_ROOM_LOGIN"))?.authToken?.token_type} ${isLogin()}`}
                    }).then(function (r) {
                    if (r.data.result) {
                        btn.disabled = false;
                        btn.className += " on";
                        btn.onclick = function (ev) {
                            ev.stopPropagation();
                            styleFit.handler.noScrap(this, itemId);
                        };
                    }
                }).catch(function (err) {
                    console.log(err);
                });
            },
            noScrap: function (btn, itemId) {
                btn.disabled = true;
                ax.delete(config.api.url.noScrap, {
                    headers: {Authorization: `${JSON.parse(localStorage.getItem("FASHIONADE_FITTING_ROOM_LOGIN"))?.authToken?.token_type} ${isLogin()}`},
                    data: {itemIds: [itemId]}
                }).then(function (r) {
                    if (r.data.result) {
                        btn.disabled = false;
                        btn.className = btn.className.replace(/\s*on/g, '');
                        btn.onclick = function (ev) {
                            ev.stopPropagation();
                            styleFit.handler.scrap(this, itemId);
                        };
                    }
                }).catch(function (err) {
                    console.log(err);
                });
            },
            fitModel: function (item, category, itemId) {
                if (category === 'TOP') {
                    config.schema.fit.TOP = itemId;
                }
                if (category === 'BOTTOM') {
                    config.schema.fit.BOTTOM = itemId;
                }

                $$("#FFR-styleFit-list .item").forEach(function (el) {
                    const _itemId = el.getAttribute("data-itemId");
                    if (config.schema.fit.TOP === _itemId || config.schema.fit.BOTTOM === _itemId) {
                        el.onclick = function () {
                            FASHIONADE_FITTING_ROOM.styleFit.handler.stripByItem(el, el.getAttribute("data-category"), _itemId);
                        };
                        el.className = el.className.replace(/\s*on/g, '') + ' on';
                    } else {
                        el.onclick = function () {
                            FASHIONADE_FITTING_ROOM.styleFit.handler.fitModel(el, el.getAttribute("data-category"), _itemId);
                        };
                        el.className = el.className.replace(/\s*on/g, '');
                    }
                });
                item.className = item.className.replace(/\s*on/g, '') + ' on';

                fit(function (r) {
                    if (isLogin()) {
                        styleFit.handler.fitHistory(itemId);
                    }

                    if (config.schema.fit.TOP && config.schema.fit.BOTTOM) {
                        $("#FFR-styleFit-wrapButtons").innerHTML = `
                            <button class="btn top" onclick="FASHIONADE_FITTING_ROOM.styleFit.handler.strip('TOP')">상의</button>
                            <button class="btn bottom" onclick="FASHIONADE_FITTING_ROOM.styleFit.handler.strip('BOTTOM')">하의</button>
                        `;
                    } else if (config.schema.fit.TOP && !config.schema.fit.BOTTOM) {
                        $("#FFR-styleFit-wrapButtons").innerHTML = `<button class="btn top" onclick="FASHIONADE_FITTING_ROOM.styleFit.handler.strip('TOP')">상의</button>`;
                    } else if (!config.schema.fit.TOP && config.schema.fit.BOTTOM) {
                        $("#FFR-styleFit-wrapButtons").innerHTML = `<button class="btn bottom" onclick="FASHIONADE_FITTING_ROOM.styleFit.handler.strip('BOTTOM')">하의</button>`;
                    }

                    item.onclick = function () {
                        FASHIONADE_FITTING_ROOM.styleFit.handler.stripByItem(item, category, itemId);
                    };
                });
            },
            strip: function (category) {
                if (category === 'TOP') {
                    $$("#FFR-styleFit-list .item").forEach(function (el) {
                        if (config.schema.fit.TOP === el.getAttribute("data-itemId")) {
                            el.onclick = function () {
                                FASHIONADE_FITTING_ROOM.styleFit.handler.fitModel(el, el.getAttribute("data-category"), el.getAttribute("data-itemId"));
                            };
                            el.className = el.className.replace(/\s*on/g, '');
                        }
                    });
                    config.schema.fit.TOP = null;
                } else if (category === 'BOTTOM') {
                    $$("#FFR-styleFit-list .item").forEach(function (el) {
                        if (config.schema.fit.BOTTOM === el.getAttribute("data-itemId")) {
                            el.onclick = function () {
                                FASHIONADE_FITTING_ROOM.styleFit.handler.fitModel(el, el.getAttribute("data-category"), el.getAttribute("data-itemId"));
                            };
                            el.className = el.className.replace(/\s*on/g, '');
                        }
                    });
                    config.schema.fit.BOTTOM = null;
                }

                if (config.schema.fit.TOP && !config.schema.fit.BOTTOM) {
                    fit();
                    $("#FFR-styleFit-wrapButtons").innerHTML = `<button class="btn top" onclick="FASHIONADE_FITTING_ROOM.styleFit.handler.strip('TOP')">상의</button>`;
                } else if (!config.schema.fit.TOP && config.schema.fit.BOTTOM) {
                    fit();
                    $("#FFR-styleFit-wrapButtons").innerHTML = `<button class="btn bottom" onclick="FASHIONADE_FITTING_ROOM.styleFit.handler.strip('BOTTOM')">하의</button>`;
                } else if (!config.schema.fit.TOP && !config.schema.fit.BOTTOM) {
                    config.schema.fit.fittedImage = null;
                    $("#FFR-styleFit-model").style.backgroundImage = `url(${config.schema.model.imageUrl})`;
                    $("#FFR-styleFit-wrapButtons").innerHTML = `<button class="btn default">기본</button>`;
                }
            },
            stripByItem: function (item, category, itemId) {
                this.strip(category);
                item.onclick = function () {
                    FASHIONADE_FITTING_ROOM.styleFit.handler.fitModel(item, category, itemId);
                }
            },
            fitHistory: function (itemId) {
                ax.post(config.api.url.fitHistory,
                    {itemId},
                    {
                        headers: {Authorization: `${JSON.parse(localStorage.getItem("FASHIONADE_FITTING_ROOM_LOGIN"))?.authToken?.token_type} ${isLogin()}`}
                    }).then(function (r) {
                    // console.log(r?.data?.result);
                }).catch(function (err) {
                    console.log(err);
                });
            },
            changeSelectRecommend: function () {
                getStyleFitList('recommend', $("#FFR-styleFit-recommend-select-category").value);
            },
            changeSelectMyCloset: function () {
                getStyleFitList('myCloset', $("#FFR-styleFit-myCloset-select-category").value);
            },
            changeSelectFitHistory: function () {
                getStyleFitList('fitHistory', $("#FFR-styleFit-fitHistory-select-category").value);
            }
        }
    };
    styleFit.handler.getStyleFitList = getStyleFitList;

    const chooseModel = {
        models: [],
        centerIndex: 0,
        leftIndex: 0,
        rightIndex: 0,
        pre: function () {
            ax.get(config.api.url.modelList + '&gender=' + config.schema.user.profile.gender.toUpperCase())
                .then(function (r) {
                    chooseModel.models = r.data;
                    chooseModel.render();
                }).catch(function (err) {
                console.log(err);
            });
        },
        on: function () {
            if (this.models.length === 0) {
                this.pre();
            } else {
                this.render();
            }
        },
        render: function (opt) {
            hideAllPages();

            this.centerIndex = 0;
            if (this.centerIndex - 1 <= 0) {
                this.leftIndex = this.models.length - 1;
            } else {
                this.leftIndex = this.centerIndex - 1;
            }
            if (this.centerIndex + 1 >= this.models.length) {
                this.rightIndex = 0;
            } else {
                this.rightIndex = this.centerIndex + 1;
            }


            if (!$("#FFR-chooseModel")) {
                const page = document.createElement("div");
                page.id = "FFR-chooseModel";
                page.className = "page on";
                page.innerHTML = `<div class="header">
                <h3 class="title">모델 변경하기</h3>
                <button class="btn close" onclick="FASHIONADE_FITTING_ROOM.styleFit.on('recommend')">닫기</button>
            </div>
            <div class="content">
                <div class="wrapModels" id="FFR-chooseModel-list">
                    <div class="slide left" id="FFR-chooseModel-list-left" style="background-image:url(${this.models[this.leftIndex].imageUrl})"></div>
                    <div class="slide center" id="FFR-chooseModel-list-center" style="background-image:url(${this.models[this.centerIndex].imageUrl})"></div>
                    <div class="slide right" id="FFR-chooseModel-list-right" style="background-image:url(${this.models[this.rightIndex].imageUrl})"></div>
                </div>
                <button class="btn prev" onclick="FASHIONADE_FITTING_ROOM.chooseModel.handler.left()">이전 모델</button>
                <button class="btn next" onclick="FASHIONADE_FITTING_ROOM.chooseModel.handler.right()">다음 모델</button>
                <div class="wrapModelInfo">
                    <span class="size">Size</span>
                    <span id="FFR-chooseModel-size">${this.models[this.centerIndex].size}</span>
                    <span class="bar">|</span>
                    <span class="tall" id="FFR-chooseModel-tall">${this.models[this.centerIndex].tall}</span>
                    <span>cm</span>
                </div>
            </div>
            <div class="footer"><div>
                <button class="btn" onclick="FASHIONADE_FITTING_ROOM.styleFit.on('recommend')">모델 변경하기</button>
            </div></div>`
                $("#FFR").appendChild(page);
            } else {
                const page = $("#FFR-chooseModel");
                page.className = page.className.replace(/\s*on/g, '') + ' on';
            }
        },
        handler: {
            left: function () {
                chooseModel.models.unshift(chooseModel.models.pop());
                $("#FFR-chooseModel-list-left").style.backgroundImage = `url(${chooseModel.models[chooseModel.leftIndex].imageUrl}`;
                $("#FFR-chooseModel-list-center").style.backgroundImage = `url(${chooseModel.models[chooseModel.centerIndex].imageUrl}`;
                $("#FFR-chooseModel-list-right").style.backgroundImage = `url(${chooseModel.models[chooseModel.rightIndex].imageUrl}`;
                $("#FFR-chooseModel-size").innerText = chooseModel.models[chooseModel.centerIndex].size;
                $("#FFR-chooseModel-tall").innerText = chooseModel.models[chooseModel.centerIndex].tall;
            },
            right: function () {
                chooseModel.models.push(chooseModel.models.shift());
                if (chooseModel.centerIndex + 1 >= chooseModel.models.length) {
                    chooseModel.rightIndex = 0
                } else {
                    chooseModel.rightIndex = chooseModel.centerIndex + 1;
                }
                $("#FFR-chooseModel-list-left").style.backgroundImage = `url(${chooseModel.models[chooseModel.leftIndex].imageUrl}`;
                $("#FFR-chooseModel-list-center").style.backgroundImage = `url(${chooseModel.models[chooseModel.centerIndex].imageUrl}`;
                $("#FFR-chooseModel-list-right").style.backgroundImage = `url(${chooseModel.models[chooseModel.rightIndex].imageUrl}`;
                $("#FFR-chooseModel-size").innerText = chooseModel.models[chooseModel.centerIndex].size;
                $("#FFR-chooseModel-tall").innerText = chooseModel.models[chooseModel.centerIndex].tall;
            }
        }
    };

    const open = function (opt) {
        if (opt.productId) {
            document.getElementsByTagName('html')[0].className += ' noscroll';

            ax.get(config.api.url.productInfo + '&productId=' + opt.productId).then(function (r) {
                config.schema.detail.productId = opt.productId;
                config.schema.detail.itemId = r?.data?.item?.id;
                config.schema.detail.category = r?.data?.item?.category1 === '상의' ? 'TOP' : 'BOTTOM';

                if (config.schema.detail.category === 'TOP') {
                    config.schema.fit.TOP = config.schema.detail.itemId;
                }
                if (config.schema.detail.category === 'BOTTOM') {
                    config.schema.fit.BOTTOM = config.schema.detail.itemId;
                }

                const STORAGE_FASHIONADE_FITTING_ROOM_LOGIN = localStorage.FASHIONADE_FITTING_ROOM_LOGIN && JSON.parse(localStorage?.FASHIONADE_FITTING_ROOM_LOGIN);
                const STORAGE_FASHIONADE_FITTING_ROOM = localStorage.FASHIONADE_FITTING_ROOM && JSON.parse(localStorage?.FASHIONADE_FITTING_ROOM);
                config.schema.user = config.schema?.user || STORAGE_FASHIONADE_FITTING_ROOM_LOGIN?.user || {profile: {}};
                config.schema.user.profile.gender = config.schema?.user?.profile?.gender || STORAGE_FASHIONADE_FITTING_ROOM_LOGIN?.user?.profile?.gender || STORAGE_FASHIONADE_FITTING_ROOM?.profile?.gender;
                config.schema.user.profile.height = config.schema?.user?.profile?.height || STORAGE_FASHIONADE_FITTING_ROOM_LOGIN?.user?.profile?.height || STORAGE_FASHIONADE_FITTING_ROOM?.profile?.height;
                config.schema.user.profile.weight = config.schema?.user?.profile?.weight || STORAGE_FASHIONADE_FITTING_ROOM_LOGIN?.user?.profile?.weight || STORAGE_FASHIONADE_FITTING_ROOM?.profile?.weight;
                config.schema.user.profile.age = config.schema?.user?.profile?.age || STORAGE_FASHIONADE_FITTING_ROOM_LOGIN?.user?.profile?.age || STORAGE_FASHIONADE_FITTING_ROOM?.profile?.age;

                if (STORAGE_FASHIONADE_FITTING_ROOM_LOGIN?.authToken?.access_token || STORAGE_FASHIONADE_FITTING_ROOM?.profile) {
                    styleFit.on('recommend');
                } else {
                    setFit.on();
                }
                $$style("#FFR, #FFR-dimmed", "display", "block");
            }).catch(function (err) {
                console.log(err);
            });
        } else {
            console.log("productId is null.");
        }
    };
    const close = function () {
        document.getElementsByTagName('html')[0].className = document.getElementsByTagName('html')[0].className.replace(/\s* noscroll/g, '');
        $$style("#FFR, #FFR-dimmed", "display", "none");
    };

    const renderSkeleton = function () {
        const wrap = document.createElement("div");
        wrap.id = "FFR";
        wrap.innerHTML = '<div class="notification"></div>';
        document.body.appendChild(wrap);
        const dimmed = document.createElement("div");
        dimmed.id = "FFR-dimmed";
        document.body.appendChild(dimmed);

        FFRNOTIFICATION = new Notification();
    };
    const init = function (extConfig) {
        if (extConfig.apiKey) {
            document.getElementsByTagName('head')[0].appendChild(link);

            config.api.key = extConfig?.apiKey;
            config.api.kakaoKey = extConfig?.kakaoKey;
            for (const key in config.api.url) {
                config.api.url[key] += (config.api.url[key].indexOf("?") > 0) ? "&apiKey=" + config.api.key : "?apiKey=" + config.api.key;
            }
            renderSkeleton();

            window.addEventListener('load', () => {
                $$(".FASHIONADE_FITTING_ROOM_BUTTON").forEach(el => {
                    //productId 가져오기
                    const productId = el.getAttribute('data-productId') || $('meta[property=\'product:productId\']').getAttribute('content');

                    ax.get(`${config.api.url.productInfo}&productId=${productId}`)
                        .then(function (r) {
                            if (r?.data?.valid) {
                                let btn = document.createElement('button');
                                btn.className = 'FFR-show-fittingroom';
                                btn.onclick = () => {
                                    FASHIONADE_FITTING_ROOM.open({productId});
                                };
                                btn.innerHTML = '패션에이드 가상 피팅룸 보기';

                                el.appendChild(btn);
                            }
                        }).catch(function (err) {
                        console.log(err);
                    });
                })
            })
        } else {
            console.log('FASHIONADE FITTING ROOM doesn\'t have an API key.');
        }
    };

    return {
        ax: ax,
        config: config,
        login: login,
        membership: membership,
        passwordReset: passwordReset,
        setFit: setFit,
        myCloset: myCloset,
        myForm: myForm,
        styleFit: styleFit,
        chooseModel: chooseModel,
        init: init,
        open: open,
        close: close,
        logout: function () {
            const tmpProfile = {...config.schema.user.profile};
            config.schema.user = null;
            config.schema.user = {profile: tmpProfile};
            localStorage.removeItem('FASHIONADE_FITTING_ROOM_LOGIN');
            login.on();
        },
    }
})();
