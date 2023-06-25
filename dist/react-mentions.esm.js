var _r = Object.defineProperty;
var xr = (t, n, e) => n in t ? _r(t, n, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[n] = e;
var I = (t, n, e) => (xr(t, typeof n != "symbol" ? n + "" : n, e), e);
import * as _e from "react";
import Te, { Children as ze, createContext as wr, useContext as jr, useMemo as Ir, createElement as Pt, useState as Mr, useEffect as $r } from "react";
import Br from "react-dom";
function Jt(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var ot = { exports: {} }, xe = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rt;
function Lr() {
  if (Rt)
    return xe;
  Rt = 1;
  var t = Te, n = Symbol.for("react.element"), e = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, u = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(i, l, c) {
    var f, g = {}, h = null, C = null;
    c !== void 0 && (h = "" + c), l.key !== void 0 && (h = "" + l.key), l.ref !== void 0 && (C = l.ref);
    for (f in l)
      r.call(l, f) && !o.hasOwnProperty(f) && (g[f] = l[f]);
    if (i && i.defaultProps)
      for (f in l = i.defaultProps, l)
        g[f] === void 0 && (g[f] = l[f]);
    return { $$typeof: n, type: i, key: h, ref: C, props: g, _owner: u.current };
  }
  return xe.Fragment = e, xe.jsx = a, xe.jsxs = a, xe;
}
var we = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _t;
function kr() {
  return _t || (_t = 1, process.env.NODE_ENV !== "production" && function() {
    var t = Te, n = Symbol.for("react.element"), e = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), i = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), C = Symbol.for("react.offscreen"), S = Symbol.iterator, m = "@@iterator";
    function D(s) {
      if (s === null || typeof s != "object")
        return null;
      var d = S && s[S] || s[m];
      return typeof d == "function" ? d : null;
    }
    var B = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function M(s) {
      {
        for (var d = arguments.length, v = new Array(d > 1 ? d - 1 : 0), F = 1; F < d; F++)
          v[F - 1] = arguments[F];
        O("error", s, v);
      }
    }
    function O(s, d, v) {
      {
        var F = B.ReactDebugCurrentFrame, W = F.getStackAddendum();
        W !== "" && (d += "%s", v = v.concat([W]));
        var V = v.map(function(k) {
          return String(k);
        });
        V.unshift("Warning: " + d), Function.prototype.apply.call(console[s], console, V);
      }
    }
    var U = !1, E = !1, J = !1, ee = !1, oe = !1, ie;
    ie = Symbol.for("react.module.reference");
    function fe(s) {
      return !!(typeof s == "string" || typeof s == "function" || s === r || s === o || oe || s === u || s === c || s === f || ee || s === C || U || E || J || typeof s == "object" && s !== null && (s.$$typeof === h || s.$$typeof === g || s.$$typeof === a || s.$$typeof === i || s.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      s.$$typeof === ie || s.getModuleId !== void 0));
    }
    function q(s, d, v) {
      var F = s.displayName;
      if (F)
        return F;
      var W = d.displayName || d.name || "";
      return W !== "" ? v + "(" + W + ")" : v;
    }
    function Q(s) {
      return s.displayName || "Context";
    }
    function z(s) {
      if (s == null)
        return null;
      if (typeof s.tag == "number" && M("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof s == "function")
        return s.displayName || s.name || null;
      if (typeof s == "string")
        return s;
      switch (s) {
        case r:
          return "Fragment";
        case e:
          return "Portal";
        case o:
          return "Profiler";
        case u:
          return "StrictMode";
        case c:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof s == "object")
        switch (s.$$typeof) {
          case i:
            var d = s;
            return Q(d) + ".Consumer";
          case a:
            var v = s;
            return Q(v._context) + ".Provider";
          case l:
            return q(s, s.render, "ForwardRef");
          case g:
            var F = s.displayName || null;
            return F !== null ? F : z(s.type) || "Memo";
          case h: {
            var W = s, V = W._payload, k = W._init;
            try {
              return z(k(V));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var G = Object.assign, ue = 0, te, ae, Ee, me, p, b, x;
    function _() {
    }
    _.__reactDisabledLog = !0;
    function T() {
      {
        if (ue === 0) {
          te = console.log, ae = console.info, Ee = console.warn, me = console.error, p = console.group, b = console.groupCollapsed, x = console.groupEnd;
          var s = {
            configurable: !0,
            enumerable: !0,
            value: _,
            writable: !0
          };
          Object.defineProperties(console, {
            info: s,
            log: s,
            warn: s,
            error: s,
            group: s,
            groupCollapsed: s,
            groupEnd: s
          });
        }
        ue++;
      }
    }
    function L() {
      {
        if (ue--, ue === 0) {
          var s = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: G({}, s, {
              value: te
            }),
            info: G({}, s, {
              value: ae
            }),
            warn: G({}, s, {
              value: Ee
            }),
            error: G({}, s, {
              value: me
            }),
            group: G({}, s, {
              value: p
            }),
            groupCollapsed: G({}, s, {
              value: b
            }),
            groupEnd: G({}, s, {
              value: x
            })
          });
        }
        ue < 0 && M("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var P = B.ReactCurrentDispatcher, R;
    function w(s, d, v) {
      {
        if (R === void 0)
          try {
            throw Error();
          } catch (W) {
            var F = W.stack.trim().match(/\n( *(at )?)/);
            R = F && F[1] || "";
          }
        return `
` + R + s;
      }
    }
    var N = !1, j;
    {
      var re = typeof WeakMap == "function" ? WeakMap : Map;
      j = new re();
    }
    function y(s, d) {
      if (!s || N)
        return "";
      {
        var v = j.get(s);
        if (v !== void 0)
          return v;
      }
      var F;
      N = !0;
      var W = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var V;
      V = P.current, P.current = null, T();
      try {
        if (d) {
          var k = function() {
            throw Error();
          };
          if (Object.defineProperty(k.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(k, []);
            } catch (pe) {
              F = pe;
            }
            Reflect.construct(s, [], k);
          } else {
            try {
              k.call();
            } catch (pe) {
              F = pe;
            }
            s.call(k.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (pe) {
            F = pe;
          }
          s();
        }
      } catch (pe) {
        if (pe && F && typeof pe.stack == "string") {
          for (var $ = pe.stack.split(`
`), ne = F.stack.split(`
`), X = $.length - 1, Z = ne.length - 1; X >= 1 && Z >= 0 && $[X] !== ne[Z]; )
            Z--;
          for (; X >= 1 && Z >= 0; X--, Z--)
            if ($[X] !== ne[Z]) {
              if (X !== 1 || Z !== 1)
                do
                  if (X--, Z--, Z < 0 || $[X] !== ne[Z]) {
                    var ce = `
` + $[X].replace(" at new ", " at ");
                    return s.displayName && ce.includes("<anonymous>") && (ce = ce.replace("<anonymous>", s.displayName)), typeof s == "function" && j.set(s, ce), ce;
                  }
                while (X >= 1 && Z >= 0);
              break;
            }
        }
      } finally {
        N = !1, P.current = V, L(), Error.prepareStackTrace = W;
      }
      var Se = s ? s.displayName || s.name : "", Dt = Se ? w(Se) : "";
      return typeof s == "function" && j.set(s, Dt), Dt;
    }
    function le(s, d, v) {
      return y(s, !1);
    }
    function be(s) {
      var d = s.prototype;
      return !!(d && d.isReactComponent);
    }
    function ve(s, d, v) {
      if (s == null)
        return "";
      if (typeof s == "function")
        return y(s, be(s));
      if (typeof s == "string")
        return w(s);
      switch (s) {
        case c:
          return w("Suspense");
        case f:
          return w("SuspenseList");
      }
      if (typeof s == "object")
        switch (s.$$typeof) {
          case l:
            return le(s.render);
          case g:
            return ve(s.type, d, v);
          case h: {
            var F = s, W = F._payload, V = F._init;
            try {
              return ve(V(W), d, v);
            } catch {
            }
          }
        }
      return "";
    }
    var ke = Object.prototype.hasOwnProperty, ht = {}, Et = B.ReactDebugCurrentFrame;
    function Ne(s) {
      if (s) {
        var d = s._owner, v = ve(s.type, s._source, d ? d.type : null);
        Et.setExtraStackFrame(v);
      } else
        Et.setExtraStackFrame(null);
    }
    function cr(s, d, v, F, W) {
      {
        var V = Function.call.bind(ke);
        for (var k in s)
          if (V(s, k)) {
            var $ = void 0;
            try {
              if (typeof s[k] != "function") {
                var ne = Error((F || "React class") + ": " + v + " type `" + k + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[k] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ne.name = "Invariant Violation", ne;
              }
              $ = s[k](d, k, F, v, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (X) {
              $ = X;
            }
            $ && !($ instanceof Error) && (Ne(W), M("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", F || "React class", v, k, typeof $), Ne(null)), $ instanceof Error && !($.message in ht) && (ht[$.message] = !0, Ne(W), M("Failed %s type: %s", v, $.message), Ne(null));
          }
      }
    }
    var fr = Array.isArray;
    function Ke(s) {
      return fr(s);
    }
    function dr(s) {
      {
        var d = typeof Symbol == "function" && Symbol.toStringTag, v = d && s[Symbol.toStringTag] || s.constructor.name || "Object";
        return v;
      }
    }
    function pr(s) {
      try {
        return vt(s), !1;
      } catch {
        return !0;
      }
    }
    function vt(s) {
      return "" + s;
    }
    function yt(s) {
      if (pr(s))
        return M("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", dr(s)), vt(s);
    }
    var Re = B.ReactCurrentOwner, gr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, mt, bt, Je;
    Je = {};
    function hr(s) {
      if (ke.call(s, "ref")) {
        var d = Object.getOwnPropertyDescriptor(s, "ref").get;
        if (d && d.isReactWarning)
          return !1;
      }
      return s.ref !== void 0;
    }
    function Er(s) {
      if (ke.call(s, "key")) {
        var d = Object.getOwnPropertyDescriptor(s, "key").get;
        if (d && d.isReactWarning)
          return !1;
      }
      return s.key !== void 0;
    }
    function vr(s, d) {
      if (typeof s.ref == "string" && Re.current && d && Re.current.stateNode !== d) {
        var v = z(Re.current.type);
        Je[v] || (M('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', z(Re.current.type), s.ref), Je[v] = !0);
      }
    }
    function yr(s, d) {
      {
        var v = function() {
          mt || (mt = !0, M("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", d));
        };
        v.isReactWarning = !0, Object.defineProperty(s, "key", {
          get: v,
          configurable: !0
        });
      }
    }
    function mr(s, d) {
      {
        var v = function() {
          bt || (bt = !0, M("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", d));
        };
        v.isReactWarning = !0, Object.defineProperty(s, "ref", {
          get: v,
          configurable: !0
        });
      }
    }
    var br = function(s, d, v, F, W, V, k) {
      var $ = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: s,
        key: d,
        ref: v,
        props: k,
        // Record the component responsible for creating this element.
        _owner: V
      };
      return $._store = {}, Object.defineProperty($._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty($, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: F
      }), Object.defineProperty($, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: W
      }), Object.freeze && (Object.freeze($.props), Object.freeze($)), $;
    };
    function Cr(s, d, v, F, W) {
      {
        var V, k = {}, $ = null, ne = null;
        v !== void 0 && (yt(v), $ = "" + v), Er(d) && (yt(d.key), $ = "" + d.key), hr(d) && (ne = d.ref, vr(d, W));
        for (V in d)
          ke.call(d, V) && !gr.hasOwnProperty(V) && (k[V] = d[V]);
        if (s && s.defaultProps) {
          var X = s.defaultProps;
          for (V in X)
            k[V] === void 0 && (k[V] = X[V]);
        }
        if ($ || ne) {
          var Z = typeof s == "function" ? s.displayName || s.name || "Unknown" : s;
          $ && yr(k, Z), ne && mr(k, Z);
        }
        return br(s, $, ne, W, F, Re.current, k);
      }
    }
    var Ge = B.ReactCurrentOwner, Ct = B.ReactDebugCurrentFrame;
    function Ce(s) {
      if (s) {
        var d = s._owner, v = ve(s.type, s._source, d ? d.type : null);
        Ct.setExtraStackFrame(v);
      } else
        Ct.setExtraStackFrame(null);
    }
    var Xe;
    Xe = !1;
    function Qe(s) {
      return typeof s == "object" && s !== null && s.$$typeof === n;
    }
    function St() {
      {
        if (Ge.current) {
          var s = z(Ge.current.type);
          if (s)
            return `

Check the render method of \`` + s + "`.";
        }
        return "";
      }
    }
    function Sr(s) {
      {
        if (s !== void 0) {
          var d = s.fileName.replace(/^.*[\\\/]/, ""), v = s.lineNumber;
          return `

Check your code at ` + d + ":" + v + ".";
        }
        return "";
      }
    }
    var At = {};
    function Ar(s) {
      {
        var d = St();
        if (!d) {
          var v = typeof s == "string" ? s : s.displayName || s.name;
          v && (d = `

Check the top-level render call using <` + v + ">.");
        }
        return d;
      }
    }
    function Ot(s, d) {
      {
        if (!s._store || s._store.validated || s.key != null)
          return;
        s._store.validated = !0;
        var v = Ar(d);
        if (At[v])
          return;
        At[v] = !0;
        var F = "";
        s && s._owner && s._owner !== Ge.current && (F = " It was passed a child from " + z(s._owner.type) + "."), Ce(s), M('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', v, F), Ce(null);
      }
    }
    function Ft(s, d) {
      {
        if (typeof s != "object")
          return;
        if (Ke(s))
          for (var v = 0; v < s.length; v++) {
            var F = s[v];
            Qe(F) && Ot(F, d);
          }
        else if (Qe(s))
          s._store && (s._store.validated = !0);
        else if (s) {
          var W = D(s);
          if (typeof W == "function" && W !== s.entries)
            for (var V = W.call(s), k; !(k = V.next()).done; )
              Qe(k.value) && Ot(k.value, d);
        }
      }
    }
    function Or(s) {
      {
        var d = s.type;
        if (d == null || typeof d == "string")
          return;
        var v;
        if (typeof d == "function")
          v = d.propTypes;
        else if (typeof d == "object" && (d.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        d.$$typeof === g))
          v = d.propTypes;
        else
          return;
        if (v) {
          var F = z(d);
          cr(v, s.props, "prop", F, s);
        } else if (d.PropTypes !== void 0 && !Xe) {
          Xe = !0;
          var W = z(d);
          M("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", W || "Unknown");
        }
        typeof d.getDefaultProps == "function" && !d.getDefaultProps.isReactClassApproved && M("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Fr(s) {
      {
        for (var d = Object.keys(s.props), v = 0; v < d.length; v++) {
          var F = d[v];
          if (F !== "children" && F !== "key") {
            Ce(s), M("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", F), Ce(null);
            break;
          }
        }
        s.ref !== null && (Ce(s), M("Invalid attribute `ref` supplied to `React.Fragment`."), Ce(null));
      }
    }
    function Tt(s, d, v, F, W, V) {
      {
        var k = fe(s);
        if (!k) {
          var $ = "";
          (s === void 0 || typeof s == "object" && s !== null && Object.keys(s).length === 0) && ($ += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ne = Sr(W);
          ne ? $ += ne : $ += St();
          var X;
          s === null ? X = "null" : Ke(s) ? X = "array" : s !== void 0 && s.$$typeof === n ? (X = "<" + (z(s.type) || "Unknown") + " />", $ = " Did you accidentally export a JSX literal instead of a component?") : X = typeof s, M("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", X, $);
        }
        var Z = Cr(s, d, v, W, V);
        if (Z == null)
          return Z;
        if (k) {
          var ce = d.children;
          if (ce !== void 0)
            if (F)
              if (Ke(ce)) {
                for (var Se = 0; Se < ce.length; Se++)
                  Ft(ce[Se], s);
                Object.freeze && Object.freeze(ce);
              } else
                M("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ft(ce, s);
        }
        return s === r ? Fr(Z) : Or(Z), Z;
      }
    }
    function Tr(s, d, v) {
      return Tt(s, d, v, !0);
    }
    function Dr(s, d, v) {
      return Tt(s, d, v, !1);
    }
    var Pr = Dr, Rr = Tr;
    we.Fragment = r, we.jsx = Pr, we.jsxs = Rr;
  }()), we;
}
process.env.NODE_ENV === "production" ? ot.exports = Lr() : ot.exports = kr();
var K = ot.exports, Nr = function(t, n, e, r, u, o, a, i) {
  if (process.env.NODE_ENV !== "production" && n === void 0)
    throw new Error("invariant requires an error message argument");
  if (!t) {
    var l;
    if (n === void 0)
      l = new Error(
        "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
      );
    else {
      var c = [e, r, u, o, a, i], f = 0;
      l = new Error(
        n.replace(/%s/g, function() {
          return c[f++];
        })
      ), l.name = "Invariant Violation";
    }
    throw l.framesToPop = 1, l;
  }
}, Wr = Nr;
const De = /* @__PURE__ */ Jt(Wr), Yr = (t) => {
  const n = /^\/(.+)\/(\w+)?$/;
  return new RegExp(
    t.map((e) => {
      const [, r, u] = n.exec(
        e.toString()
      );
      return De(
        !u,
        `RegExp flags are not supported. Change /${r}/${u} into /${r}/`
      ), `(${r})`;
    }).join("|"),
    "g"
  );
}, Gt = (t) => {
  let n = 0;
  return t.indexOf("__id__") >= 0 && n++, t.indexOf("__display__") >= 0 && n++, n;
}, Ue = (t) => t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), de = {
  id: "__id__",
  display: "__display__"
}, xt = (t, n) => {
  De(
    n === "id" || n === "display",
    `Second arg must be either "id" or "display", got: "${n}"`
  );
  let e = t.indexOf(de.display), r = t.indexOf(de.id);
  return e < 0 && (e = null), r < 0 && (r = null), De(
    e !== null || r !== null,
    `The markup '${t}' does not contain either of the placeholders '__id__' or '__display__'`
  ), e !== null && r !== null ? n === "id" && r <= e || n === "display" && e <= r ? 0 : 1 : 0;
}, Hr = (t, n, e) => t.replace(de.id, n).replace(de.display, e), Ur = (t) => {
  const n = Ue(t), e = t[t.indexOf(de.display) + de.display.length], r = t[t.indexOf(de.id) + de.id.length];
  return new RegExp(
    n.replace(
      de.display,
      `([^${Ue(e || "")}]+?)`
    ).replace(de.id, `([^${Ue(r || "")}]+?)`)
  );
}, he = (t) => ze.toArray(t).map(
  ({ props: { markup: n, regex: e, displayTransform: r } }) => ({
    markup: n,
    regex: e ? qr(e, n) : Ur(n),
    displayTransform: r || ((u, o) => o || u)
  })
), qr = (t, n) => {
  var u;
  const e = ((u = new RegExp(t.toString() + "|").exec("")) == null ? void 0 : u.length) - 1, r = Gt(n);
  return De(
    e === r,
    `Number of capturing groups in RegExp ${t.toString()} (${e}) does not match the number of placeholders in the markup '${n}' (${r})`
  ), t;
}, Me = (t, n, e, r) => t.substring(0, n) + r + t.substring(e), zr = ({
  caretElement: t,
  position: n,
  setPosition: e,
  onCaretPositionChange: r
}) => {
  if (!t)
    return;
  const { offsetLeft: u, offsetTop: o } = t;
  if (n.left === u && n.top === o)
    return;
  const a = { left: u, top: o };
  e(a), r(a);
}, Vr = () => {
}, Le = (t, n, e, r = Vr) => {
  const u = Yr(n.map((f) => f.regex));
  let o = 2;
  const a = n.map(({ markup: f }) => {
    const g = o;
    return o += Gt(f) + 1, g;
  });
  let i, l = 0, c = 0;
  for (; (i = u.exec(t)) !== null; ) {
    const f = a.find((O) => !!i[O]), g = a.indexOf(f), { markup: h, displayTransform: C } = n[g], S = f + xt(h, "id"), m = f + xt(h, "display"), D = i[S], B = C(D, i[m]);
    let M = t.substring(l, i.index);
    r(M, l, c), c += M.length, e(
      i[0],
      i.index,
      c,
      D,
      B,
      g,
      l
    ), c += B.length, l = u.lastIndex;
  }
  console.log("asdf"), l < t.length && r(t.substring(l), l, c);
}, ye = (t, n) => {
  let e = "";
  return Le(
    t,
    n,
    (r, u, o, a, i) => {
      e += i;
    },
    (r) => {
      e += r;
    }
  ), e;
}, se = (t, n, e, r = "START") => {
  if (typeof e != "number")
    return e;
  let u;
  return Le(t, n, (i, l, c, f, g, h, C) => {
    u === void 0 && c + g.length > e && (r === "NULL" ? u = null : u = l + (r === "END" ? i.length : 0));
  }, (i, l, c) => {
    u === void 0 && c + i.length >= e && (u = l + e - c);
  }), u === void 0 ? t.length : u;
}, Kr = (t, n, { selectionStartBefore: e, selectionEndBefore: r, selectionEndAfter: u }, o) => {
  let a = ye(t, o), i = a.length - n.length;
  e === "undefined" && (e = u + i), r === "undefined" && (r = e), e === r && r === u && a.length === n.length && (e = e - 1);
  let l = n.slice(e, u), c = Math.min(e, u), f = r;
  e === u && (f = Math.max(r, e + i));
  let g = se(t, o, c, "START"), h = se(t, o, f, "END"), C = se(t, o, c, "NULL"), S = se(t, o, f, "NULL"), m = C === null || S === null, D = Me(t, g, h, l);
  if (!m) {
    let B = ye(D, o);
    if (B !== n) {
      for (c = 0; n[c] === B[c]; )
        c++;
      l = n.slice(c, u), f = a.lastIndexOf(
        n.substring(u)
      ), g = se(t, o, c, "START"), h = se(t, o, f, "END"), D = Me(t, g, h, l);
    }
  }
  return D;
}, wt = (t, n, e) => {
  let r = e, u = !1;
  if (Le(t, n, (a, i, l, c, f, g, h) => {
    l <= e && l + f.length > e && (r = l, u = !0);
  }), u)
    return r;
}, Ie = (t, n) => {
  const e = [];
  return Le(
    t,
    n,
    (r, u, o, a, i, l, c) => {
      e.push({
        id: a,
        display: i,
        childIndex: l,
        index: u,
        plainTextIndex: o
      });
    }
  ), e;
}, Xt = (t, n) => `${t}-${n}`, We = (t) => Object.values(t).reduce(
  (n, { results: e }) => n + e.length,
  0
), Jr = (t, n) => {
  const e = Ie(t, n), r = e[e.length - 1];
  return r ? r.plainTextIndex + r.display.length : 0;
}, Gr = [
  {
    base: "A",
    letters: /(&#65;|&#9398;|&#65313;|&#192;|&#193;|&#194;|&#7846;|&#7844;|&#7850;|&#7848;|&#195;|&#256;|&#258;|&#7856;|&#7854;|&#7860;|&#7858;|&#550;|&#480;|&#196;|&#478;|&#7842;|&#197;|&#506;|&#461;|&#512;|&#514;|&#7840;|&#7852;|&#7862;|&#7680;|&#260;|&#570;|&#11375;|[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F])/g
  },
  {
    base: "AA",
    letters: /(&#42802;|[\uA732])/g
  },
  {
    base: "AE",
    letters: /(&#198;|&#508;|&#482;|[\u00C6\u01FC\u01E2])/g
  },
  {
    base: "AO",
    letters: /(&#42804;|[\uA734])/g
  },
  {
    base: "AU",
    letters: /(&#42806;|[\uA736])/g
  },
  {
    base: "AV",
    letters: /(&#42808;|&#42810;|[\uA738\uA73A])/g
  },
  {
    base: "AY",
    letters: /(&#42812;|[\uA73C])/g
  },
  {
    base: "B",
    letters: /(&#66;|&#9399;|&#65314;|&#7682;|&#7684;|&#7686;|&#579;|&#386;|&#385;|[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181])/g
  },
  {
    base: "C",
    letters: /(&#67;|&#9400;|&#65315;|&#262;|&#264;|&#266;|&#268;|&#199;|&#7688;|&#391;|&#571;|&#42814;|[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E])/g
  },
  {
    base: "D",
    letters: /(&#68;|&#9401;|&#65316;|&#7690;|&#270;|&#7692;|&#7696;|&#7698;|&#7694;|&#272;|&#395;|&#394;|&#393;|&#42873;|&#208;|[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779\u00D0])/g
  },
  {
    base: "DZ",
    letters: /(&#497;|&#452;|[\u01F1\u01C4])/g
  },
  {
    base: "Dz",
    letters: /(&#498;|&#453;|[\u01F2\u01C5])/g
  },
  {
    base: "E",
    letters: /(&#69;|&#9402;|&#65317;|&#200;|&#201;|&#202;|&#7872;|&#7870;|&#7876;|&#7874;|&#7868;|&#274;|&#7700;|&#7702;|&#276;|&#278;|&#203;|&#7866;|&#282;|&#516;|&#518;|&#7864;|&#7878;|&#552;|&#7708;|&#280;|&#7704;|&#7706;|&#400;|&#398;|[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E])/g
  },
  {
    base: "F",
    letters: /(&#70;|&#9403;|&#65318;|&#7710;|&#401;|&#42875;|[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B])/g
  },
  {
    base: "G",
    letters: /(&#71;|&#9404;|&#65319;|&#500;|&#284;|&#7712;|&#286;|&#288;|&#486;|&#290;|&#484;|&#403;|&#42912;|&#42877;|&#42878;|[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E])/g
  },
  {
    base: "H",
    letters: /(&#72;|&#9405;|&#65320;|&#292;|&#7714;|&#7718;|&#542;|&#7716;|&#7720;|&#7722;|&#294;|&#11367;|&#11381;|&#42893;|[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D])/g
  },
  {
    base: "I",
    letters: /(&#73;|&#9406;|&#65321;|&#204;|&#205;|&#206;|&#296;|&#298;|&#300;|&#304;|&#207;|&#7726;|&#7880;|&#463;|&#520;|&#522;|&#7882;|&#302;|&#7724;|&#407;|[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197])/g
  },
  {
    base: "J",
    letters: /(&#74;|&#9407;|&#65322;|&#308;|&#584;|[\u004A\u24BF\uFF2A\u0134\u0248])/g
  },
  {
    base: "K",
    letters: /(&#75;|&#9408;|&#65323;|&#7728;|&#488;|&#7730;|&#310;|&#7732;|&#408;|&#11369;|&#42816;|&#42818;|&#42820;|&#42914;|[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2])/g
  },
  {
    base: "L",
    letters: /(&#76;|&#9409;|&#65324;|&#319;|&#313;|&#317;|&#7734;|&#7736;|&#315;|&#7740;|&#7738;|&#321;|&#573;|&#11362;|&#11360;|&#42824;|&#42822;|&#42880;|[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780])/g
  },
  {
    base: "LJ",
    letters: /(&#455;|[\u01C7])/g
  },
  {
    base: "Lj",
    letters: /(&#456;|[\u01C8])/g
  },
  {
    base: "M",
    letters: /(&#77;|&#9410;|&#65325;|&#7742;|&#7744;|&#7746;|&#11374;|&#412;|[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C])/g
  },
  {
    base: "N",
    letters: /(&#78;|&#9411;|&#65326;|&#504;|&#323;|&#209;|&#7748;|&#327;|&#7750;|&#325;|&#7754;|&#7752;|&#544;|&#413;|&#42896;|&#42916;|&#330;|[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4\u014A])/g
  },
  {
    base: "NJ",
    letters: /(&#458;|[\u01CA])/g
  },
  {
    base: "Nj",
    letters: /(&#459;|[\u01CB])/g
  },
  {
    base: "O",
    letters: /(&#79;|&#9412;|&#65327;|&#210;|&#211;|&#212;|&#7890;|&#7888;|&#7894;|&#7892;|&#213;|&#7756;|&#556;|&#7758;|&#332;|&#7760;|&#7762;|&#334;|&#558;|&#560;|&#214;|&#554;|&#7886;|&#336;|&#465;|&#524;|&#526;|&#416;|&#7900;|&#7898;|&#7904;|&#7902;|&#7906;|&#7884;|&#7896;|&#490;|&#492;|&#216;|&#510;|&#390;|&#415;|&#42826;|&#42828;|[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C])/g
  },
  {
    base: "OE",
    letters: /(&#338;|[\u0152])/g
  },
  {
    base: "OI",
    letters: /(&#418;|[\u01A2])/g
  },
  {
    base: "OO",
    letters: /(&#42830;|[\uA74E])/g
  },
  {
    base: "OU",
    letters: /(&#546;|[\u0222])/g
  },
  {
    base: "P",
    letters: /(&#80;|&#9413;|&#65328;|&#7764;|&#7766;|&#420;|&#11363;|&#42832;|&#42834;|&#42836;|[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754])/g
  },
  {
    base: "Q",
    letters: /(&#81;|&#9414;|&#65329;|&#42838;|&#42840;|&#586;|[\u0051\u24C6\uFF31\uA756\uA758\u024A])/g
  },
  {
    base: "R",
    letters: /(&#82;|&#9415;|&#65330;|&#340;|&#7768;|&#344;|&#528;|&#530;|&#7770;|&#7772;|&#342;|&#7774;|&#588;|&#11364;|&#42842;|&#42918;|&#42882;|[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782])/g
  },
  {
    base: "S",
    letters: /(&#83;|&#9416;|&#65331;|&#7838;|&#346;|&#7780;|&#348;|&#7776;|&#352;|&#7782;|&#7778;|&#7784;|&#536;|&#350;|&#11390;|&#42920;|&#42884;|[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784])/g
  },
  {
    base: "T",
    letters: /(&#84;|&#9417;|&#65332;|&#7786;|&#356;|&#7788;|&#538;|&#354;|&#7792;|&#7790;|&#358;|&#428;|&#430;|&#574;|&#42886;|[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786])/g
  },
  {
    base: "TH",
    letters: /(&#222;|[\u00DE])/g
  },
  {
    base: "TZ",
    letters: /(&#42792;|[\uA728])/g
  },
  {
    base: "U",
    letters: /(&#85;|&#9418;|&#65333;|&#217;|&#218;|&#219;|&#360;|&#7800;|&#362;|&#7802;|&#364;|&#220;|&#475;|&#471;|&#469;|&#473;|&#7910;|&#366;|&#368;|&#467;|&#532;|&#534;|&#431;|&#7914;|&#7912;|&#7918;|&#7916;|&#7920;|&#7908;|&#7794;|&#370;|&#7798;|&#7796;|&#580;|[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244])/g
  },
  {
    base: "V",
    letters: /(&#86;|&#9419;|&#65334;|&#7804;|&#7806;|&#434;|&#42846;|&#581;|[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245])/g
  },
  {
    base: "VY",
    letters: /(&#42848;|[\uA760])/g
  },
  {
    base: "W",
    letters: /(&#87;|&#9420;|&#65335;|&#7808;|&#7810;|&#372;|&#7814;|&#7812;|&#7816;|&#11378;|[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72])/g
  },
  {
    base: "X",
    letters: /(&#88;|&#9421;|&#65336;|&#7818;|&#7820;|[\u0058\u24CD\uFF38\u1E8A\u1E8C])/g
  },
  {
    base: "Y",
    letters: /(&#89;|&#9422;|&#65337;|&#7922;|&#221;|&#374;|&#7928;|&#562;|&#7822;|&#376;|&#7926;|&#7924;|&#435;|&#590;|&#7934;|[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE])/g
  },
  {
    base: "Z",
    letters: /(&#90;|&#9423;|&#65338;|&#377;|&#7824;|&#379;|&#381;|&#7826;|&#7828;|&#437;|&#548;|&#11391;|&#11371;|&#42850;|[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762])/g
  },
  {
    base: "a",
    letters: /(&#97;|&#9424;|&#65345;|&#7834;|&#224;|&#225;|&#226;|&#7847;|&#7845;|&#7851;|&#7849;|&#227;|&#257;|&#259;|&#7857;|&#7855;|&#7861;|&#7859;|&#551;|&#481;|&#228;|&#479;|&#7843;|&#229;|&#507;|&#462;|&#513;|&#515;|&#7841;|&#7853;|&#7863;|&#7681;|&#261;|&#11365;|&#592;|[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250])/g
  },
  {
    base: "aa",
    letters: /(&#42803;|[\uA733])/g
  },
  {
    base: "ae",
    letters: /(&#230;|&#509;|&#483;|[\u00E6\u01FD\u01E3])/g
  },
  {
    base: "ao",
    letters: /(&#42805;|[\uA735])/g
  },
  {
    base: "au",
    letters: /(&#42807;|[\uA737])/g
  },
  {
    base: "av",
    letters: /(&#42809;|&#42811;|[\uA739\uA73B])/g
  },
  {
    base: "ay",
    letters: /(&#42813;|[\uA73D])/g
  },
  {
    base: "b",
    letters: /(&#98;|&#9425;|&#65346;|&#7683;|&#7685;|&#7687;|&#384;|&#387;|&#595;|[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253])/g
  },
  {
    base: "c",
    letters: /(&#99;|&#9426;|&#65347;|&#263;|&#265;|&#267;|&#269;|&#231;|&#7689;|&#392;|&#572;|&#42815;|&#8580;|[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184])/g
  },
  {
    base: "d",
    letters: /(&#100;|&#9427;|&#65348;|&#7691;|&#271;|&#7693;|&#7697;|&#7699;|&#7695;|&#273;|&#396;|&#598;|&#599;|&#42874;|&#240;|[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A\u00F0])/g
  },
  {
    base: "dz",
    letters: /(&#499;|&#454;|[\u01F3\u01C6])/g
  },
  {
    base: "e",
    letters: /(&#101;|&#9428;|&#65349;|&#232;|&#233;|&#234;|&#7873;|&#7871;|&#7877;|&#7875;|&#7869;|&#275;|&#7701;|&#7703;|&#277;|&#279;|&#235;|&#7867;|&#283;|&#517;|&#519;|&#7865;|&#7879;|&#553;|&#7709;|&#281;|&#7705;|&#7707;|&#583;|&#603;|&#477;|[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD])/g
  },
  {
    base: "f",
    letters: /(&#102;|&#9429;|&#65350;|&#7711;|&#402;|&#42876;|[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C])/g
  },
  {
    base: "g",
    letters: /(&#103;|&#9430;|&#65351;|&#501;|&#285;|&#7713;|&#287;|&#289;|&#487;|&#291;|&#485;|&#608;|&#42913;|&#7545;|&#42879;|[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F])/g
  },
  {
    base: "h",
    letters: /(&#104;|&#9431;|&#65352;|&#293;|&#7715;|&#7719;|&#543;|&#7717;|&#7721;|&#7723;|&#7830;|&#295;|&#11368;|&#11382;|&#613;|[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265])/g
  },
  {
    base: "hv",
    letters: /(&#405;|[\u0195])/g
  },
  {
    base: "i",
    letters: /(&#105;|&#9432;|&#65353;|&#236;|&#237;|&#238;|&#297;|&#299;|&#301;|&#239;|&#7727;|&#7881;|&#464;|&#521;|&#523;|&#7883;|&#303;|&#7725;|&#616;|&#305;|[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131])/g
  },
  {
    base: "ij",
    letters: /(&#307;|[\u0133])/g
  },
  {
    base: "j",
    letters: /(&#106;|&#9433;|&#65354;|&#309;|&#496;|&#585;|[\u006A\u24D9\uFF4A\u0135\u01F0\u0249])/g
  },
  {
    base: "k",
    letters: /(&#107;|&#9434;|&#65355;|&#7729;|&#489;|&#7731;|&#311;|&#7733;|&#409;|&#11370;|&#42817;|&#42819;|&#42821;|&#42915;|[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3])/g
  },
  {
    base: "l",
    letters: /(&#108;|&#9435;|&#65356;|&#320;|&#314;|&#318;|&#7735;|&#7737;|&#316;|&#7741;|&#7739;|&#322;|&#410;|&#619;|&#11361;|&#42825;|&#42881;|&#42823;|[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u0142\u019A\u026B\u2C61\uA749\uA781\uA747])/g
  },
  {
    base: "lj",
    letters: /(&#457;|[\u01C9])/g
  },
  {
    base: "m",
    letters: /(&#109;|&#9436;|&#65357;|&#7743;|&#7745;|&#7747;|&#625;|&#623;|[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F])/g
  },
  {
    base: "n",
    letters: /(&#110;|&#9437;|&#65358;|&#505;|&#324;|&#241;|&#7749;|&#328;|&#7751;|&#326;|&#7755;|&#7753;|&#414;|&#626;|&#329;|&#42897;|&#42917;|&#331;|[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5\u014B])/g
  },
  {
    base: "nj",
    letters: /(&#460;|[\u01CC])/g
  },
  {
    base: "o",
    letters: /(&#111;|&#9438;|&#65359;|&#242;|&#243;|&#244;|&#7891;|&#7889;|&#7895;|&#7893;|&#245;|&#7757;|&#557;|&#7759;|&#333;|&#7761;|&#7763;|&#335;|&#559;|&#561;|&#246;|&#555;|&#7887;|&#337;|&#466;|&#525;|&#527;|&#417;|&#7901;|&#7899;|&#7905;|&#7903;|&#7907;|&#7885;|&#7897;|&#491;|&#493;|&#248;|&#511;|&#596;|&#42827;|&#42829;|&#629;|[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275])/g
  },
  {
    base: "oe",
    letters: /(&#339;|[\u0153])/g
  },
  {
    base: "oi",
    letters: /(&#419;|[\u01A3])/g
  },
  {
    base: "ou",
    letters: /(&#547;|[\u0223])/g
  },
  {
    base: "oo",
    letters: /(&#42831;|[\uA74F])/g
  },
  {
    base: "p",
    letters: /(&#112;|&#9439;|&#65360;|&#7765;|&#7767;|&#421;|&#7549;|&#42833;|&#42835;|&#42837;|[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755])/g
  },
  {
    base: "q",
    letters: /(&#113;|&#9440;|&#65361;|&#587;|&#42839;|&#42841;|[\u0071\u24E0\uFF51\u024B\uA757\uA759])/g
  },
  {
    base: "r",
    letters: /(&#114;|&#9441;|&#65362;|&#341;|&#7769;|&#345;|&#529;|&#531;|&#7771;|&#7773;|&#343;|&#7775;|&#589;|&#637;|&#42843;|&#42919;|&#42883;|[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783])/g
  },
  {
    base: "s",
    letters: /(&#115;|&#9442;|&#65363;|&#347;|&#7781;|&#349;|&#7777;|&#353;|&#7783;|&#7779;|&#7785;|&#537;|&#351;|&#575;|&#42921;|&#42885;|&#7835;|&#383;|[\u0073\u24E2\uFF53\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B\u017F])/g
  },
  {
    base: "ss",
    letters: /(&#223;|[\u00DF])/g
  },
  {
    base: "t",
    letters: /(&#116;|&#9443;|&#65364;|&#7787;|&#7831;|&#357;|&#7789;|&#539;|&#355;|&#7793;|&#7791;|&#359;|&#429;|&#648;|&#11366;|&#42887;|[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787])/g
  },
  {
    base: "th",
    letters: /(&#254;|[\u00FE])/g
  },
  {
    base: "tz",
    letters: /(&#42793;|[\uA729])/g
  },
  {
    base: "u",
    letters: /(&#117;|&#9444;|&#65365;|&#249;|&#250;|&#251;|&#361;|&#7801;|&#363;|&#7803;|&#365;|&#252;|&#476;|&#472;|&#470;|&#474;|&#7911;|&#367;|&#369;|&#468;|&#533;|&#535;|&#432;|&#7915;|&#7913;|&#7919;|&#7917;|&#7921;|&#7909;|&#7795;|&#371;|&#7799;|&#7797;|&#649;|[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289])/g
  },
  {
    base: "v",
    letters: /(&#118;|&#9445;|&#65366;|&#7805;|&#7807;|&#651;|&#42847;|&#652;|[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C])/g
  },
  {
    base: "vy",
    letters: /(&#42849;|[\uA761])/g
  },
  {
    base: "w",
    letters: /(&#119;|&#9446;|&#65367;|&#7809;|&#7811;|&#373;|&#7815;|&#7813;|&#7832;|&#7817;|&#11379;|[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73])/g
  },
  {
    base: "x",
    letters: /(&#120;|&#9447;|&#65368;|&#7819;|&#7821;|[\u0078\u24E7\uFF58\u1E8B\u1E8D])/g
  },
  {
    base: "y",
    letters: /(&#121;|&#9448;|&#65369;|&#7923;|&#253;|&#375;|&#7929;|&#563;|&#7823;|&#255;|&#7927;|&#7833;|&#7925;|&#436;|&#591;|&#7935;|[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF])/g
  },
  {
    base: "z",
    letters: /(&#122;|&#9449;|&#65370;|&#378;|&#7825;|&#380;|&#382;|&#7827;|&#7829;|&#438;|&#549;|&#576;|&#11372;|&#42851;|[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763])/g
  }
], Xr = (t) => {
  let n = t;
  return Gr.forEach((e) => {
    n = n.replace(
      e.letters,
      e.base
    );
  }), n;
}, jt = (t) => Xr(t).toLowerCase(), Qt = (t, n, e) => e ? jt(t).indexOf(jt(n)) : t.toLowerCase().indexOf(n.toLowerCase()), Qr = () => !!document.documentMode, it = (t) => typeof t == "number", Zr = (t) => t === Object(t) ? Object.keys(t) : [], en = (t, ...n) => {
  const e = [].concat(...n);
  return Object.keys(t).reduce((r, u) => (t.hasOwnProperty(u) && !e.includes(u) && t[u] !== void 0 && (r[u] = t[u]), r), {});
};
function $e(t) {
  "@babel/helpers - typeof";
  return $e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, $e(t);
}
function tn(t, n) {
  if ($e(t) !== "object" || t === null)
    return t;
  var e = t[Symbol.toPrimitive];
  if (e !== void 0) {
    var r = e.call(t, n || "default");
    if ($e(r) !== "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(t);
}
function rn(t) {
  var n = tn(t, "string");
  return $e(n) === "symbol" ? n : String(n);
}
function Be(t, n, e) {
  return n = rn(n), n in t ? Object.defineProperty(t, n, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[n] = e, t;
}
function at(t, n) {
  (n == null || n > t.length) && (n = t.length);
  for (var e = 0, r = new Array(n); e < n; e++)
    r[e] = t[e];
  return r;
}
function nn(t) {
  if (Array.isArray(t))
    return at(t);
}
function sn(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
    return Array.from(t);
}
function un(t, n) {
  if (t) {
    if (typeof t == "string")
      return at(t, n);
    var e = Object.prototype.toString.call(t).slice(8, -1);
    if (e === "Object" && t.constructor && (e = t.constructor.name), e === "Map" || e === "Set")
      return Array.from(t);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
      return at(t, n);
  }
}
function on() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ge(t) {
  return nn(t) || sn(t) || un(t) || on();
}
var Pe = function(n) {
  return n === Object(n) ? Object.keys(n) : [];
}, Zt = function(n) {
  return n === Object(n) ? Object.values(n) : [];
};
function er(t, n) {
  var e = Object.assign({}, t);
  return qe(t) && qe(n) && Pe(n).forEach(function(r) {
    qe(n[r]) ? r in t ? e[r] = er(t[r], n[r]) : Object.assign(e, Be({}, r, n[r])) : Object.assign(e, Be({}, r, n[r]));
  }), e;
}
var lt = function(n) {
  for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), u = 1; u < e; u++)
    r[u - 1] = arguments[u];
  return r.reduce(function(o, a) {
    return er(o, a);
  }, n);
}, an = function(n, e) {
  var r = Object.assign({}, n);
  if (e)
    for (var u = 0; u < e.length; u++)
      delete r[e[u]];
  return r;
}, qe = function(n) {
  return n === Object(n) && !(n instanceof Date) && !Array.isArray(n);
}, ln = function(n) {
  return (n || []).filter(Boolean);
}, dt = function(n) {
  return n[0] === "&";
}, cn = function(n) {
  return !dt(n);
}, It = function(n) {
  return n.replace(/-(\w)/g, function(e, r) {
    return r.toUpperCase();
  });
}, fn = function(n) {
  for (var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r = Pe(n), u = {}, o = 0, a = r.length; o < a; o += 1) {
    var i = r[o], l = Object.prototype.toString.call(n[i]) !== "[object Object]" || // style defs
    i[0] === ":" || // pseudo selectors
    i[0] === "@" || // @media / @keyframes / @supports / @font-face
    e.indexOf(i) >= 0;
    l && (u[i] = n[i]);
  }
  return u;
}, tr = function(n, e) {
  for (var r = e.map(It), u = Pe(n), o = {}, a = 0, i = u.length; a < i; a += 1) {
    var l = u[a];
    (e.indexOf(l) >= 0 || r.indexOf(It(l)) >= 0) && (o[l] = n[l]);
  }
  return o;
}, dn = function t(n, e) {
  for (var r = lt.apply(void 0, [{}, an(n, e)].concat(ge(Zt(tr(n, e))))), u = Pe(r).filter(dt), o = 0, a = u.length; o < a; o += 1) {
    var i = u[o], l = t(r[i], e);
    e.indexOf(i) >= 0 ? (delete r[i], r = lt({}, r, l)) : r[i] = l;
  }
  return r;
};
function Mt(t, n) {
  var e = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    n && (r = r.filter(function(u) {
      return Object.getOwnPropertyDescriptor(t, u).enumerable;
    })), e.push.apply(e, r);
  }
  return e;
}
function $t(t) {
  for (var n = 1; n < arguments.length; n++) {
    var e = arguments[n] != null ? arguments[n] : {};
    n % 2 ? Mt(Object(e), !0).forEach(function(r) {
      Be(t, r, e[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : Mt(Object(e)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
    });
  }
  return t;
}
var pn = ["animationName"], gn = function(n) {
  var e = n.style, r = n.className;
  return $t($t({}, e ? {
    style: fn(e, pn)
  } : {}), r ? {
    className: r
  } : {});
};
const rr = gn;
var nr = /* @__PURE__ */ wr(rr);
nr.Provider;
var hn = function(n) {
  if (n) {
    if (typeof n == "string")
      return [n];
    if (!Array.isArray(n)) {
      var e = n;
      return Pe(n).reduce(function(r, u) {
        return r.concat(e[u] ? [u] : []);
      }, []);
    }
  } else
    return [];
  return n;
};
const sr = hn;
var En = {}, vn = function(n) {
  return function(e, r) {
    var u = r || En;
    n.memoize = n.memoize || /* @__PURE__ */ new WeakMap();
    var o;
    n.memoize.has(u) ? o = n.memoize.get(u) : (o = {}, n.memoize.set(u, o));
    var a = sr(e).join(" ");
    return a in o ? o[a] : o[a] = n(e || [], r);
  };
};
const yn = vn;
function Bt(t, n) {
  var e = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    n && (r = r.filter(function(u) {
      return Object.getOwnPropertyDescriptor(t, u).enumerable;
    })), e.push.apply(e, r);
  }
  return e;
}
function Ae(t) {
  for (var n = 1; n < arguments.length; n++) {
    var e = arguments[n] != null ? arguments[n] : {};
    n % 2 ? Bt(Object(e), !0).forEach(function(r) {
      Be(t, r, e[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : Bt(Object(e)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
    });
  }
  return t;
}
var mn = function(n) {
  var e = n && Pe(n)[0];
  return e && e.split("__")[0].split("--")[0];
}, bn = function(n, e, r) {
  if (n) {
    var u = n.split(" ")[0], o = [].concat(ge(e.length === 0 ? r.map(function(a) {
      return "".concat(u, "--").concat(a.substring(1));
    }) : []), ge(e.map(function(a) {
      return "".concat(u, "__").concat(a);
    })));
    return e.length === 0 ? [n].concat(ge(o)) : o;
  }
};
function ur(t) {
  var n = t.style, e = t.className, r = t.classNames, u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : rr, o = e || mn(r) || (n == null ? void 0 : n.className), a = typeof n == "function" ? n : yn(function(g, h) {
    var C = sr(g);
    De(Array.isArray(C), "First parameter must be a string, an array of strings, a plain object with boolean values, or a falsy value."), De(!h || qe(h), "Optional second parameter must be a plain object.");
    var S = C.filter(dt), m = C.filter(cn), D = m.length > 0 ? function(O) {
      return Zt(tr(O, m));
    } : function(O) {
      return [O];
    }, B = function() {
      var U = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return D(dn(U, S));
    }, M = bn(o, m, S);
    return ur(Ae(Ae(Ae({}, (n || h) && {
      style: lt.apply(void 0, [{}].concat(ge(B(h)), ge(B(n))))
    }), M && {
      className: M.join(" ")
    }), r && {
      classNames: r
    }), u);
  }), i = Ae({}, typeof n == "function" ? n : {
    style: n
  }), l = ge(new Set([].concat(ge(i.className ? i.className.split(" ") : []), ge(o ? o.split(" ") : [])))), c = r ? ln(l.map(function(g) {
    return r[g];
  })) : l, f = u(Ae(Ae({}, i), c.length > 0 ? {
    className: c.join(" ")
  } : {}));
  return Object.assign(a, f), a;
}
function Lt(t, n) {
  var e = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    n && (r = r.filter(function(u) {
      return Object.getOwnPropertyDescriptor(t, u).enumerable;
    })), e.push.apply(e, r);
  }
  return e;
}
function je(t) {
  for (var n = 1; n < arguments.length; n++) {
    var e = arguments[n] != null ? arguments[n] : {};
    n % 2 ? Lt(Object(e), !0).forEach(function(r) {
      Be(t, r, e[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : Lt(Object(e)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
    });
  }
  return t;
}
var Cn = function() {
  for (var n = arguments.length, e = new Array(n), r = 0; r < n; r++)
    e[r] = arguments[r];
  return e.reduce(function(u, o) {
    return je(je(je({}, u), typeof o == "function" ? o : {}), {}, {
      style: je(je({}, u.style), typeof o == "function" ? o.style : o)
    });
  }, {});
};
const Sn = Cn;
var An = function(n, e, r) {
  var u = e.style, o = e.className, a = e.classNames, i = jr(nr), l = Ir(function() {
    return ur({
      style: u,
      className: o,
      classNames: a
    }, i);
  }, [u, o, a, i]);
  return l(r, n);
};
const pt = An;
function Ve(t, n) {
  return (r) => {
    const u = ({
      style: a,
      className: i,
      classNames: l,
      ...c
    }) => {
      const f = n ? n(c) : void 0, g = pt(
        t,
        { style: a, className: i, classNames: l },
        f
      );
      return /* @__PURE__ */ K.jsx(r, { ...c, style: g });
    }, o = r.displayName || r.name || "Component";
    return u.displayName = `defaultStyle(${o})`, Te.forwardRef((a, i) => u({ ...a, ref: i }));
  };
}
const On = (t, n) => (t.hasOwnProperty(n) ? t[n]++ : t[n] = 0, n + "_" + t[n]);
function Fn({
  selectionStart: t,
  selectionEnd: n,
  value: e = "",
  onCaretPositionChange: r,
  containerRef: u,
  children: o,
  style: a
}) {
  const [i, l] = _e.useState({
    left: void 0,
    top: void 0
  }), [c, f] = _e.useState();
  _e.useEffect(() => {
    zr({
      caretElement: c,
      position: i,
      setPosition: l,
      onCaretPositionChange: r
    });
  });
  const g = he(o);
  let h;
  n === t && (h = se(
    e,
    g,
    t,
    "START"
  ));
  const C = [], S = {};
  let m = C, D = 0;
  const B = (J, ee) => {
    if (it(h) && h >= ee && h <= ee + J.length) {
      const oe = h - ee;
      m.push(
        O(J.substring(0, oe), D)
      ), m = [
        O(J.substring(oe), D)
      ];
    } else
      m.push(O(J, D));
    D++;
  }, M = (J, ee, oe, ie, fe, q, Q) => {
    const z = On(S, ie);
    m.push(
      U(ie, fe, q, z)
    );
  }, O = (J, ee) => /* @__PURE__ */ Pt("span", { ...a("substring"), key: ee }, J), U = (J, ee, oe, ie) => {
    const fe = { id: J, display: ee, key: ie }, q = _e.Children.toArray(o)[oe];
    return _e.cloneElement(q, fe);
  }, E = (J) => /* @__PURE__ */ Pt("span", { ...a("caret"), ref: f, key: "caret" }, J);
  return Le(e, g, M, B), m.push(" "), m !== C && C.push(E(m)), /* @__PURE__ */ K.jsx("div", { ...a, ref: u, children: C });
}
const Tn = Ve(
  {
    position: "relative",
    boxSizing: "border-box",
    width: "100%",
    color: "transparent",
    overflow: "hidden",
    whiteSpace: "pre-wrap",
    wordWrap: "break-word",
    border: "1px solid transparent",
    textAlign: "start",
    "&singleLine": {
      whiteSpace: "pre",
      wordWrap: null
    },
    substring: {
      visibility: "hidden"
    }
  },
  (t) => ({
    "&singleLine": t.singleLine
  })
), Dn = Tn(Fn);
var ct = { exports: {} }, Ye = { exports: {} }, Y = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kt;
function Pn() {
  if (kt)
    return Y;
  kt = 1;
  var t = typeof Symbol == "function" && Symbol.for, n = t ? Symbol.for("react.element") : 60103, e = t ? Symbol.for("react.portal") : 60106, r = t ? Symbol.for("react.fragment") : 60107, u = t ? Symbol.for("react.strict_mode") : 60108, o = t ? Symbol.for("react.profiler") : 60114, a = t ? Symbol.for("react.provider") : 60109, i = t ? Symbol.for("react.context") : 60110, l = t ? Symbol.for("react.async_mode") : 60111, c = t ? Symbol.for("react.concurrent_mode") : 60111, f = t ? Symbol.for("react.forward_ref") : 60112, g = t ? Symbol.for("react.suspense") : 60113, h = t ? Symbol.for("react.suspense_list") : 60120, C = t ? Symbol.for("react.memo") : 60115, S = t ? Symbol.for("react.lazy") : 60116, m = t ? Symbol.for("react.block") : 60121, D = t ? Symbol.for("react.fundamental") : 60117, B = t ? Symbol.for("react.responder") : 60118, M = t ? Symbol.for("react.scope") : 60119;
  function O(E) {
    if (typeof E == "object" && E !== null) {
      var J = E.$$typeof;
      switch (J) {
        case n:
          switch (E = E.type, E) {
            case l:
            case c:
            case r:
            case o:
            case u:
            case g:
              return E;
            default:
              switch (E = E && E.$$typeof, E) {
                case i:
                case f:
                case S:
                case C:
                case a:
                  return E;
                default:
                  return J;
              }
          }
        case e:
          return J;
      }
    }
  }
  function U(E) {
    return O(E) === c;
  }
  return Y.AsyncMode = l, Y.ConcurrentMode = c, Y.ContextConsumer = i, Y.ContextProvider = a, Y.Element = n, Y.ForwardRef = f, Y.Fragment = r, Y.Lazy = S, Y.Memo = C, Y.Portal = e, Y.Profiler = o, Y.StrictMode = u, Y.Suspense = g, Y.isAsyncMode = function(E) {
    return U(E) || O(E) === l;
  }, Y.isConcurrentMode = U, Y.isContextConsumer = function(E) {
    return O(E) === i;
  }, Y.isContextProvider = function(E) {
    return O(E) === a;
  }, Y.isElement = function(E) {
    return typeof E == "object" && E !== null && E.$$typeof === n;
  }, Y.isForwardRef = function(E) {
    return O(E) === f;
  }, Y.isFragment = function(E) {
    return O(E) === r;
  }, Y.isLazy = function(E) {
    return O(E) === S;
  }, Y.isMemo = function(E) {
    return O(E) === C;
  }, Y.isPortal = function(E) {
    return O(E) === e;
  }, Y.isProfiler = function(E) {
    return O(E) === o;
  }, Y.isStrictMode = function(E) {
    return O(E) === u;
  }, Y.isSuspense = function(E) {
    return O(E) === g;
  }, Y.isValidElementType = function(E) {
    return typeof E == "string" || typeof E == "function" || E === r || E === c || E === o || E === u || E === g || E === h || typeof E == "object" && E !== null && (E.$$typeof === S || E.$$typeof === C || E.$$typeof === a || E.$$typeof === i || E.$$typeof === f || E.$$typeof === D || E.$$typeof === B || E.$$typeof === M || E.$$typeof === m);
  }, Y.typeOf = O, Y;
}
var H = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nt;
function Rn() {
  return Nt || (Nt = 1, process.env.NODE_ENV !== "production" && function() {
    var t = typeof Symbol == "function" && Symbol.for, n = t ? Symbol.for("react.element") : 60103, e = t ? Symbol.for("react.portal") : 60106, r = t ? Symbol.for("react.fragment") : 60107, u = t ? Symbol.for("react.strict_mode") : 60108, o = t ? Symbol.for("react.profiler") : 60114, a = t ? Symbol.for("react.provider") : 60109, i = t ? Symbol.for("react.context") : 60110, l = t ? Symbol.for("react.async_mode") : 60111, c = t ? Symbol.for("react.concurrent_mode") : 60111, f = t ? Symbol.for("react.forward_ref") : 60112, g = t ? Symbol.for("react.suspense") : 60113, h = t ? Symbol.for("react.suspense_list") : 60120, C = t ? Symbol.for("react.memo") : 60115, S = t ? Symbol.for("react.lazy") : 60116, m = t ? Symbol.for("react.block") : 60121, D = t ? Symbol.for("react.fundamental") : 60117, B = t ? Symbol.for("react.responder") : 60118, M = t ? Symbol.for("react.scope") : 60119;
    function O(y) {
      return typeof y == "string" || typeof y == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      y === r || y === c || y === o || y === u || y === g || y === h || typeof y == "object" && y !== null && (y.$$typeof === S || y.$$typeof === C || y.$$typeof === a || y.$$typeof === i || y.$$typeof === f || y.$$typeof === D || y.$$typeof === B || y.$$typeof === M || y.$$typeof === m);
    }
    function U(y) {
      if (typeof y == "object" && y !== null) {
        var le = y.$$typeof;
        switch (le) {
          case n:
            var be = y.type;
            switch (be) {
              case l:
              case c:
              case r:
              case o:
              case u:
              case g:
                return be;
              default:
                var ve = be && be.$$typeof;
                switch (ve) {
                  case i:
                  case f:
                  case S:
                  case C:
                  case a:
                    return ve;
                  default:
                    return le;
                }
            }
          case e:
            return le;
        }
      }
    }
    var E = l, J = c, ee = i, oe = a, ie = n, fe = f, q = r, Q = S, z = C, G = e, ue = o, te = u, ae = g, Ee = !1;
    function me(y) {
      return Ee || (Ee = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), p(y) || U(y) === l;
    }
    function p(y) {
      return U(y) === c;
    }
    function b(y) {
      return U(y) === i;
    }
    function x(y) {
      return U(y) === a;
    }
    function _(y) {
      return typeof y == "object" && y !== null && y.$$typeof === n;
    }
    function T(y) {
      return U(y) === f;
    }
    function L(y) {
      return U(y) === r;
    }
    function P(y) {
      return U(y) === S;
    }
    function R(y) {
      return U(y) === C;
    }
    function w(y) {
      return U(y) === e;
    }
    function N(y) {
      return U(y) === o;
    }
    function j(y) {
      return U(y) === u;
    }
    function re(y) {
      return U(y) === g;
    }
    H.AsyncMode = E, H.ConcurrentMode = J, H.ContextConsumer = ee, H.ContextProvider = oe, H.Element = ie, H.ForwardRef = fe, H.Fragment = q, H.Lazy = Q, H.Memo = z, H.Portal = G, H.Profiler = ue, H.StrictMode = te, H.Suspense = ae, H.isAsyncMode = me, H.isConcurrentMode = p, H.isContextConsumer = b, H.isContextProvider = x, H.isElement = _, H.isForwardRef = T, H.isFragment = L, H.isLazy = P, H.isMemo = R, H.isPortal = w, H.isProfiler = N, H.isStrictMode = j, H.isSuspense = re, H.isValidElementType = O, H.typeOf = U;
  }()), H;
}
var Wt;
function or() {
  return Wt || (Wt = 1, process.env.NODE_ENV === "production" ? Ye.exports = Pn() : Ye.exports = Rn()), Ye.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Ze, Yt;
function _n() {
  if (Yt)
    return Ze;
  Yt = 1;
  var t = Object.getOwnPropertySymbols, n = Object.prototype.hasOwnProperty, e = Object.prototype.propertyIsEnumerable;
  function r(o) {
    if (o == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(o);
  }
  function u() {
    try {
      if (!Object.assign)
        return !1;
      var o = new String("abc");
      if (o[5] = "de", Object.getOwnPropertyNames(o)[0] === "5")
        return !1;
      for (var a = {}, i = 0; i < 10; i++)
        a["_" + String.fromCharCode(i)] = i;
      var l = Object.getOwnPropertyNames(a).map(function(f) {
        return a[f];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var c = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(f) {
        c[f] = f;
      }), Object.keys(Object.assign({}, c)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Ze = u() ? Object.assign : function(o, a) {
    for (var i, l = r(o), c, f = 1; f < arguments.length; f++) {
      i = Object(arguments[f]);
      for (var g in i)
        n.call(i, g) && (l[g] = i[g]);
      if (t) {
        c = t(i);
        for (var h = 0; h < c.length; h++)
          e.call(i, c[h]) && (l[c[h]] = i[c[h]]);
      }
    }
    return l;
  }, Ze;
}
var et, Ht;
function gt() {
  if (Ht)
    return et;
  Ht = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return et = t, et;
}
var tt, Ut;
function ir() {
  return Ut || (Ut = 1, tt = Function.call.bind(Object.prototype.hasOwnProperty)), tt;
}
var rt, qt;
function xn() {
  if (qt)
    return rt;
  qt = 1;
  var t = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var n = gt(), e = {}, r = ir();
    t = function(o) {
      var a = "Warning: " + o;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function u(o, a, i, l, c) {
    if (process.env.NODE_ENV !== "production") {
      for (var f in o)
        if (r(o, f)) {
          var g;
          try {
            if (typeof o[f] != "function") {
              var h = Error(
                (l || "React class") + ": " + i + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw h.name = "Invariant Violation", h;
            }
            g = o[f](a, f, l, i, null, n);
          } catch (S) {
            g = S;
          }
          if (g && !(g instanceof Error) && t(
            (l || "React class") + ": type specification of " + i + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof g + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), g instanceof Error && !(g.message in e)) {
            e[g.message] = !0;
            var C = c ? c() : "";
            t(
              "Failed " + i + " type: " + g.message + (C ?? "")
            );
          }
        }
    }
  }
  return u.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (e = {});
  }, rt = u, rt;
}
var nt, zt;
function wn() {
  if (zt)
    return nt;
  zt = 1;
  var t = or(), n = _n(), e = gt(), r = ir(), u = xn(), o = function() {
  };
  process.env.NODE_ENV !== "production" && (o = function(i) {
    var l = "Warning: " + i;
    typeof console < "u" && console.error(l);
    try {
      throw new Error(l);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return nt = function(i, l) {
    var c = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function g(p) {
      var b = p && (c && p[c] || p[f]);
      if (typeof b == "function")
        return b;
    }
    var h = "<<anonymous>>", C = {
      array: B("array"),
      bigint: B("bigint"),
      bool: B("boolean"),
      func: B("function"),
      number: B("number"),
      object: B("object"),
      string: B("string"),
      symbol: B("symbol"),
      any: M(),
      arrayOf: O,
      element: U(),
      elementType: E(),
      instanceOf: J,
      node: fe(),
      objectOf: oe,
      oneOf: ee,
      oneOfType: ie,
      shape: Q,
      exact: z
    };
    function S(p, b) {
      return p === b ? p !== 0 || 1 / p === 1 / b : p !== p && b !== b;
    }
    function m(p, b) {
      this.message = p, this.data = b && typeof b == "object" ? b : {}, this.stack = "";
    }
    m.prototype = Error.prototype;
    function D(p) {
      if (process.env.NODE_ENV !== "production")
        var b = {}, x = 0;
      function _(L, P, R, w, N, j, re) {
        if (w = w || h, j = j || R, re !== e) {
          if (l) {
            var y = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw y.name = "Invariant Violation", y;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var le = w + ":" + R;
            !b[le] && // Avoid spamming the console because they are often not actionable except for lib authors
            x < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + j + "` prop on `" + w + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), b[le] = !0, x++);
          }
        }
        return P[R] == null ? L ? P[R] === null ? new m("The " + N + " `" + j + "` is marked as required " + ("in `" + w + "`, but its value is `null`.")) : new m("The " + N + " `" + j + "` is marked as required in " + ("`" + w + "`, but its value is `undefined`.")) : null : p(P, R, w, N, j);
      }
      var T = _.bind(null, !1);
      return T.isRequired = _.bind(null, !0), T;
    }
    function B(p) {
      function b(x, _, T, L, P, R) {
        var w = x[_], N = te(w);
        if (N !== p) {
          var j = ae(w);
          return new m(
            "Invalid " + L + " `" + P + "` of type " + ("`" + j + "` supplied to `" + T + "`, expected ") + ("`" + p + "`."),
            { expectedType: p }
          );
        }
        return null;
      }
      return D(b);
    }
    function M() {
      return D(a);
    }
    function O(p) {
      function b(x, _, T, L, P) {
        if (typeof p != "function")
          return new m("Property `" + P + "` of component `" + T + "` has invalid PropType notation inside arrayOf.");
        var R = x[_];
        if (!Array.isArray(R)) {
          var w = te(R);
          return new m("Invalid " + L + " `" + P + "` of type " + ("`" + w + "` supplied to `" + T + "`, expected an array."));
        }
        for (var N = 0; N < R.length; N++) {
          var j = p(R, N, T, L, P + "[" + N + "]", e);
          if (j instanceof Error)
            return j;
        }
        return null;
      }
      return D(b);
    }
    function U() {
      function p(b, x, _, T, L) {
        var P = b[x];
        if (!i(P)) {
          var R = te(P);
          return new m("Invalid " + T + " `" + L + "` of type " + ("`" + R + "` supplied to `" + _ + "`, expected a single ReactElement."));
        }
        return null;
      }
      return D(p);
    }
    function E() {
      function p(b, x, _, T, L) {
        var P = b[x];
        if (!t.isValidElementType(P)) {
          var R = te(P);
          return new m("Invalid " + T + " `" + L + "` of type " + ("`" + R + "` supplied to `" + _ + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return D(p);
    }
    function J(p) {
      function b(x, _, T, L, P) {
        if (!(x[_] instanceof p)) {
          var R = p.name || h, w = me(x[_]);
          return new m("Invalid " + L + " `" + P + "` of type " + ("`" + w + "` supplied to `" + T + "`, expected ") + ("instance of `" + R + "`."));
        }
        return null;
      }
      return D(b);
    }
    function ee(p) {
      if (!Array.isArray(p))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), a;
      function b(x, _, T, L, P) {
        for (var R = x[_], w = 0; w < p.length; w++)
          if (S(R, p[w]))
            return null;
        var N = JSON.stringify(p, function(re, y) {
          var le = ae(y);
          return le === "symbol" ? String(y) : y;
        });
        return new m("Invalid " + L + " `" + P + "` of value `" + String(R) + "` " + ("supplied to `" + T + "`, expected one of " + N + "."));
      }
      return D(b);
    }
    function oe(p) {
      function b(x, _, T, L, P) {
        if (typeof p != "function")
          return new m("Property `" + P + "` of component `" + T + "` has invalid PropType notation inside objectOf.");
        var R = x[_], w = te(R);
        if (w !== "object")
          return new m("Invalid " + L + " `" + P + "` of type " + ("`" + w + "` supplied to `" + T + "`, expected an object."));
        for (var N in R)
          if (r(R, N)) {
            var j = p(R, N, T, L, P + "." + N, e);
            if (j instanceof Error)
              return j;
          }
        return null;
      }
      return D(b);
    }
    function ie(p) {
      if (!Array.isArray(p))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var b = 0; b < p.length; b++) {
        var x = p[b];
        if (typeof x != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + Ee(x) + " at index " + b + "."
          ), a;
      }
      function _(T, L, P, R, w) {
        for (var N = [], j = 0; j < p.length; j++) {
          var re = p[j], y = re(T, L, P, R, w, e);
          if (y == null)
            return null;
          y.data && r(y.data, "expectedType") && N.push(y.data.expectedType);
        }
        var le = N.length > 0 ? ", expected one of type [" + N.join(", ") + "]" : "";
        return new m("Invalid " + R + " `" + w + "` supplied to " + ("`" + P + "`" + le + "."));
      }
      return D(_);
    }
    function fe() {
      function p(b, x, _, T, L) {
        return G(b[x]) ? null : new m("Invalid " + T + " `" + L + "` supplied to " + ("`" + _ + "`, expected a ReactNode."));
      }
      return D(p);
    }
    function q(p, b, x, _, T) {
      return new m(
        (p || "React class") + ": " + b + " type `" + x + "." + _ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + T + "`."
      );
    }
    function Q(p) {
      function b(x, _, T, L, P) {
        var R = x[_], w = te(R);
        if (w !== "object")
          return new m("Invalid " + L + " `" + P + "` of type `" + w + "` " + ("supplied to `" + T + "`, expected `object`."));
        for (var N in p) {
          var j = p[N];
          if (typeof j != "function")
            return q(T, L, P, N, ae(j));
          var re = j(R, N, T, L, P + "." + N, e);
          if (re)
            return re;
        }
        return null;
      }
      return D(b);
    }
    function z(p) {
      function b(x, _, T, L, P) {
        var R = x[_], w = te(R);
        if (w !== "object")
          return new m("Invalid " + L + " `" + P + "` of type `" + w + "` " + ("supplied to `" + T + "`, expected `object`."));
        var N = n({}, x[_], p);
        for (var j in N) {
          var re = p[j];
          if (r(p, j) && typeof re != "function")
            return q(T, L, P, j, ae(re));
          if (!re)
            return new m(
              "Invalid " + L + " `" + P + "` key `" + j + "` supplied to `" + T + "`.\nBad object: " + JSON.stringify(x[_], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(p), null, "  ")
            );
          var y = re(R, j, T, L, P + "." + j, e);
          if (y)
            return y;
        }
        return null;
      }
      return D(b);
    }
    function G(p) {
      switch (typeof p) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !p;
        case "object":
          if (Array.isArray(p))
            return p.every(G);
          if (p === null || i(p))
            return !0;
          var b = g(p);
          if (b) {
            var x = b.call(p), _;
            if (b !== p.entries) {
              for (; !(_ = x.next()).done; )
                if (!G(_.value))
                  return !1;
            } else
              for (; !(_ = x.next()).done; ) {
                var T = _.value;
                if (T && !G(T[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ue(p, b) {
      return p === "symbol" ? !0 : b ? b["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && b instanceof Symbol : !1;
    }
    function te(p) {
      var b = typeof p;
      return Array.isArray(p) ? "array" : p instanceof RegExp ? "object" : ue(b, p) ? "symbol" : b;
    }
    function ae(p) {
      if (typeof p > "u" || p === null)
        return "" + p;
      var b = te(p);
      if (b === "object") {
        if (p instanceof Date)
          return "date";
        if (p instanceof RegExp)
          return "regexp";
      }
      return b;
    }
    function Ee(p) {
      var b = ae(p);
      switch (b) {
        case "array":
        case "object":
          return "an " + b;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + b;
        default:
          return b;
      }
    }
    function me(p) {
      return !p.constructor || !p.constructor.name ? h : p.constructor.name;
    }
    return C.checkPropTypes = u, C.resetWarningCache = u.resetWarningCache, C.PropTypes = C, C;
  }, nt;
}
var st, Vt;
function jn() {
  if (Vt)
    return st;
  Vt = 1;
  var t = gt();
  function n() {
  }
  function e() {
  }
  return e.resetWarningCache = n, st = function() {
    function r(a, i, l, c, f, g) {
      if (g !== t) {
        var h = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw h.name = "Invariant Violation", h;
      }
    }
    r.isRequired = r;
    function u() {
      return r;
    }
    var o = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: u,
      element: r,
      elementType: r,
      instanceOf: u,
      node: r,
      objectOf: u,
      oneOf: u,
      oneOfType: u,
      shape: u,
      exact: u,
      checkPropTypes: e,
      resetWarningCache: n
    };
    return o.PropTypes = o, o;
  }, st;
}
if (process.env.NODE_ENV !== "production") {
  var In = or(), Mn = !0;
  ct.exports = wn()(In.isElement, Mn);
} else
  ct.exports = jn()();
var $n = ct.exports;
const A = /* @__PURE__ */ Jt($n);
function ar({
  id: t,
  focused: n,
  ignoreAccents: e,
  index: r,
  onClick: u,
  onMouseEnter: o,
  query: a,
  renderSuggestion: i,
  suggestion: l,
  style: c
}) {
  const f = { onClick: u, onMouseEnter: o }, g = () => {
    let S = h(), m = C(S);
    return i ? i(
      l,
      a,
      m,
      r,
      n
    ) : m;
  }, h = () => {
    if (typeof l == "string")
      return l;
    let { id: S, display: m } = l;
    return S === void 0 || !m ? S : m;
  }, C = (S) => {
    let m = Qt(S, a, e);
    return m === -1 ? /* @__PURE__ */ K.jsx("span", { ...c("display"), children: S }) : /* @__PURE__ */ K.jsxs("span", { ...c("display"), children: [
      S.substring(0, m),
      /* @__PURE__ */ K.jsx("b", { ...c("highlight"), children: S.substring(m, m + a.length) }),
      S.substring(m + a.length)
    ] });
  };
  return /* @__PURE__ */ K.jsx("li", { id: t, role: "option", "aria-selected": n, ...f, ...c, children: g() });
}
ar.propTypes = {
  id: A.string.isRequired,
  query: A.string.isRequired,
  index: A.number.isRequired,
  ignoreAccents: A.bool,
  suggestion: A.oneOfType([
    A.string,
    A.shape({
      id: A.oneOfType([A.string, A.number]).isRequired,
      display: A.string
    })
  ]).isRequired,
  renderSuggestion: A.func,
  focused: A.bool
};
const Bn = Ve(
  {
    cursor: "pointer"
  },
  (t) => ({ "&focused": t.focused })
), Ln = Bn(ar), Oe = {
  borderRadius: "1.25rem",
  height: "0.5rem",
  marginBottom: "0.5rem",
  background: "linear-gradient(to right, #99A0A3 0%, #707679 20%, #464A4D 40%, #464A4D 60%, #707679 80% , #99A0A3 100%)",
  backgroundSize: "1000px",
  animation: "placeholderShimmer 1.2s infinite linear",
  amimationFillMode: "forwards"
};
function kn() {
  return /* @__PURE__ */ K.jsxs(
    "div",
    {
      style: {
        display: "flex",
        padding: "1rem",
        alignItems: "center"
      },
      children: [
        /* @__PURE__ */ K.jsx(
          "div",
          {
            style: {
              background: Oe.background,
              backgroundSize: Oe.backgroundSize,
              width: "2rem",
              height: "2rem",
              borderRadius: "50%",
              animation: Oe.animation
            }
          }
        ),
        /* @__PURE__ */ K.jsxs(
          "div",
          {
            style: {
              display: "block",
              alignItems: "center",
              marginLeft: "0.5rem"
            },
            children: [
              /* @__PURE__ */ K.jsx("div", { style: { ...Oe, width: "12rem" } }),
              /* @__PURE__ */ K.jsx("div", { style: { ...Oe, width: "10rem" } }),
              /* @__PURE__ */ K.jsx("div", { style: { ...Oe, width: "8rem" } })
            ]
          }
        )
      ]
    }
  );
}
function Nn({
  style: t,
  className: n,
  classNames: e
}) {
  const r = pt(Wn, { style: t, className: n, classNames: e }), u = r("spinner");
  return /* @__PURE__ */ K.jsx("div", { style: { borderRadius: "0.5rem" }, ...r, children: /* @__PURE__ */ K.jsx("div", { ...u, children: [...Array(4)].map((o) => /* @__PURE__ */ K.jsx(kn, {}, o)) }) });
}
const Wn = {};
function lr({
  id: t,
  suggestions: n = {},
  a11ySuggestionsListLabel: e,
  focusIndex: r,
  position: u,
  left: o,
  right: a,
  top: i,
  scrollFocusedIntoView: l,
  isLoading: c,
  isOpened: f,
  onSelect: g = () => null,
  ignoreAccents: h,
  containerRef: C,
  children: S,
  style: m,
  customSuggestionsContainer: D,
  onMouseDown: B,
  onMouseEnter: M
}) {
  const [O, U] = Mr(void 0);
  $r(() => {
    if (!O || O.offsetHeight >= O.scrollHeight || !l)
      return;
    const q = O.scrollTop;
    let { top: Q, bottom: z } = O.children[r].getBoundingClientRect();
    const { top: G } = O.getBoundingClientRect();
    Q = Q - G + q, z = z - G + q, Q < q ? O.scrollTop = Q : z > O.offsetHeight && (O.scrollTop = z - O.offsetHeight);
  }, [r, l, O]);
  const E = () => {
    const q = /* @__PURE__ */ K.jsx(
      "ul",
      {
        ref: U,
        id: t,
        role: "listbox",
        "aria-label": e,
        ...m("list"),
        children: Object.values(n).reduce(
          (Q, { results: z, queryInfo: G }) => [
            ...Q,
            ...z.map(
              (ue, te) => J(ue, G, Q.length + te)
            )
          ],
          []
        )
      }
    );
    return D ? D(q) : q;
  }, J = (q, Q, z) => {
    const G = z === r, { childIndex: ue, query: te } = Q, { renderSuggestion: ae } = ze.toArray(S)[ue].props;
    return /* @__PURE__ */ K.jsx(
      Ln,
      {
        style: m("item"),
        id: Xt(t, z),
        query: te,
        index: z,
        ignoreAccents: h,
        renderSuggestion: ae,
        suggestion: q,
        focused: G,
        onClick: () => ie(q, Q),
        onMouseEnter: () => oe(z)
      },
      `${ue}-${fe(q)}`
    );
  }, ee = () => {
    if (c)
      return /* @__PURE__ */ K.jsx(Nn, { style: m("loadingIndicator") });
  }, oe = (q) => {
    M && M(q);
  }, ie = (q, Q) => {
    g(q, Q);
  }, fe = (q) => typeof q == "string" ? q : q.id;
  return f ? /* @__PURE__ */ K.jsxs(
    "div",
    {
      ...Sn({ position: u || "absolute", left: o, right: a, top: i }, m),
      onMouseDown: B,
      ref: C,
      children: [
        E(),
        ee()
      ]
    }
  ) : null;
}
lr.propTypes = {
  id: A.string.isRequired,
  suggestions: A.object.isRequired,
  a11ySuggestionsListLabel: A.string,
  focusIndex: A.number,
  position: A.string,
  left: A.number,
  right: A.number,
  top: A.number,
  scrollFocusedIntoView: A.bool,
  isLoading: A.bool,
  isOpened: A.bool.isRequired,
  onSelect: A.func,
  ignoreAccents: A.bool,
  customSuggestionsContainer: A.func,
  containerRef: A.oneOfType([
    A.func,
    A.shape({
      current: typeof Element > "u" ? A.any : A.instanceOf(Element)
    })
  ])
};
const Yn = Ve({
  zIndex: 1,
  backgroundColor: "white",
  marginTop: 14,
  minWidth: 100,
  list: {
    margin: 0,
    padding: 0,
    listStyleType: "none"
  }
}), Hn = Yn(lr), Un = function(t, n = {}) {
  if (t instanceof RegExp)
    return t;
  {
    const { allowSpaceInQuery: e } = n, r = Ue(t);
    return new RegExp(
      `(?:^|\\s)(${r}([^${e ? "" : "\\s"}${r}]*))$`
    );
  }
}, qn = function(t, n) {
  return t instanceof Array ? function(e, r) {
    const u = [];
    for (let o = 0, a = t.length; o < a; ++o) {
      const i = t[o].display || t[o].id;
      Qt(i, e, n) >= 0 && u.push(t[o]);
    }
    return u;
  } : t;
}, Fe = { TAB: 9, RETURN: 13, ESC: 27, UP: 38, DOWN: 40 };
let He = !1;
const Kt = {
  /**
   * If set to `true` a regular text input element will be rendered
   * instead of a textarea
   */
  singleLine: A.bool,
  allowSpaceInQuery: A.bool,
  allowSuggestionsAboveCursor: A.bool,
  forceSuggestionsAboveCursor: A.bool,
  ignoreAccents: A.bool,
  a11ySuggestionsListLabel: A.string,
  value: A.string,
  onKeyDown: A.func,
  customSuggestionsContainer: A.func,
  onSelect: A.func,
  onBlur: A.func,
  onChange: A.func,
  suggestionsPortalHost: typeof Element > "u" ? A.any : A.PropTypes.instanceOf(Element),
  inputRef: A.oneOfType([
    A.func,
    A.shape({
      current: typeof Element > "u" ? A.any : A.instanceOf(Element)
    })
  ]),
  children: A.oneOfType([
    A.element,
    A.arrayOf(A.element)
  ]).isRequired
};
class ft extends Te.Component {
  constructor(e) {
    super(e);
    I(this, "setContainerElement", (e) => {
      this.containerElement = e;
    });
    I(this, "getInputProps", () => {
      let { readOnly: e, disabled: r, style: u } = this.props;
      return {
        ...en(
          this.props,
          ["style", "classNames", "className"],
          // substyle props
          Zr(Kt)
        ),
        ...u("input"),
        value: this.getPlainText(),
        onScroll: this.updateHighlighterScroll,
        ...!e && !r && {
          onChange: this.handleChange,
          onSelect: this.handleSelect,
          onKeyDown: this.handleKeyDown,
          onBlur: this.handleBlur,
          onCompositionStart: this.handleCompositionStart,
          onCompositionEnd: this.handleCompositionEnd
        },
        ...this.isOpened() && {
          role: "combobox",
          "aria-controls": this.uuidSuggestionsOverlay,
          "aria-expanded": !0,
          "aria-autocomplete": "list",
          "aria-haspopup": "listbox",
          "aria-activedescendant": Xt(
            this.uuidSuggestionsOverlay,
            this.state.focusIndex
          )
        }
      };
    });
    I(this, "renderControl", () => {
      let { singleLine: e, style: r } = this.props, u = this.getInputProps();
      return /* @__PURE__ */ K.jsxs("div", { ...r("control"), children: [
        this.renderHighlighter(),
        e ? this.renderInput(u) : this.renderTextarea(u)
      ] });
    });
    I(this, "renderInput", (e) => /* @__PURE__ */ K.jsx("input", { type: "text", ref: this.setInputRef, ...e }));
    I(this, "renderTextarea", (e) => /* @__PURE__ */ K.jsx("textarea", { autoFocus: !0, ref: this.setInputRef, ...e }));
    I(this, "setInputRef", (e) => {
      this.inputElement = e;
      const { inputRef: r } = this.props;
      typeof r == "function" ? r(e) : r && (r.current = e);
    });
    I(this, "setSuggestionsElement", (e) => {
      this.suggestionsElement = e;
    });
    I(this, "renderSuggestionsOverlay", () => {
      if (!it(this.state.selectionStart))
        return null;
      const { position: e, left: r, top: u, right: o } = this.state.suggestionsPosition, a = /* @__PURE__ */ K.jsx(
        Hn,
        {
          id: this.uuidSuggestionsOverlay,
          style: this.props.style("suggestions"),
          position: e,
          left: r,
          top: u,
          right: o,
          focusIndex: this.state.focusIndex,
          scrollFocusedIntoView: this.state.scrollFocusedIntoView,
          containerRef: this.setSuggestionsElement,
          suggestions: this.state.suggestions,
          customSuggestionsContainer: this.props.customSuggestionsContainer,
          onSelect: this.addMention,
          onMouseDown: this.handleSuggestionsMouseDown,
          onMouseEnter: this.handleSuggestionsMouseEnter,
          isLoading: this.isLoading(),
          isOpened: this.isOpened(),
          ignoreAccents: this.props.ignoreAccents,
          a11ySuggestionsListLabel: this.props.a11ySuggestionsListLabel,
          children: this.props.children
        }
      );
      return this.props.suggestionsPortalHost ? Br.createPortal(
        a,
        this.props.suggestionsPortalHost
      ) : a;
    });
    I(this, "renderHighlighter", () => {
      const { selectionStart: e, selectionEnd: r } = this.state, { singleLine: u, children: o, value: a, style: i } = this.props;
      return /* @__PURE__ */ K.jsx(
        Dn,
        {
          containerRef: this.setHighlighterElement,
          style: i("highlighter"),
          value: a,
          singleLine: u,
          selectionStart: e,
          selectionEnd: r,
          onCaretPositionChange: this.handleCaretPositionChange,
          children: o
        }
      );
    });
    I(this, "setHighlighterElement", (e) => {
      this.highlighterElement = e;
    });
    I(this, "handleCaretPositionChange", (e) => {
      this.setState({ caretPosition: e });
    });
    // Returns the text to set as the value of the textarea with all markups removed
    I(this, "getPlainText", () => ye(
      this.props.value || "",
      he(this.props.children)
    ));
    I(this, "executeOnChange", (e, ...r) => {
      if (this.props.onChange)
        return this.props.onChange(e, ...r);
      if (this.props.valueLink)
        return this.props.valueLink.requestChange(e.target.value, ...r);
    });
    // Handle input element's change event
    I(this, "handleChange", (e) => {
      if (He = !1, Qr() && (document.activeElement && document.activeElement.contentDocument || document).activeElement !== e.target)
        return;
      const r = this.props.value || "", u = he(this.props.children);
      let o = e.target.value, a = Kr(
        r,
        o,
        {
          selectionStartBefore: this.state.selectionStart,
          selectionEndBefore: this.state.selectionEnd,
          selectionEndAfter: e.target.selectionEnd
        },
        u
      );
      o = ye(a, u);
      let i = e.target.selectionStart, l = e.target.selectionEnd, c = !1, f = wt(
        r,
        u,
        i
      );
      f !== void 0 && this.state.selectionEnd > f && (i = f + (e.nativeEvent.data ? e.nativeEvent.data.length : 0), l = i, c = !0), this.setState({
        selectionStart: i,
        selectionEnd: l,
        setSelectionAfterMentionChange: c
      });
      let g = Ie(a, u), h = { target: { value: a } };
      this.executeOnChange(h, a, o, g);
    });
    // Handle input element's select event
    I(this, "handleSelect", (e) => {
      if (this.setState({
        selectionStart: e.target.selectionStart,
        selectionEnd: e.target.selectionEnd
      }), He)
        return;
      const r = this.inputElement;
      e.target.selectionStart === e.target.selectionEnd ? this.updateMentionsQueries(r.value, e.target.selectionStart) : this.clearSuggestions(), this.updateHighlighterScroll(), this.props.onSelect(e);
    });
    I(this, "handleKeyDown", (e) => {
      if (We(this.state.suggestions) === 0 || !this.suggestionsElement) {
        this.props.onKeyDown(e);
        return;
      }
      switch (Object.values(Fe).indexOf(e.keyCode) >= 0 && (e.preventDefault(), e.stopPropagation()), e.keyCode) {
        case Fe.ESC: {
          this.clearSuggestions();
          return;
        }
        case Fe.DOWN: {
          this.shiftFocus(1);
          return;
        }
        case Fe.UP: {
          this.shiftFocus(-1);
          return;
        }
        case Fe.RETURN: {
          this.selectFocused();
          return;
        }
        case Fe.TAB: {
          this.selectFocused();
          return;
        }
        default:
          return;
      }
    });
    I(this, "shiftFocus", (e) => {
      const r = We(this.state.suggestions);
      this.setState({
        focusIndex: (r + this.state.focusIndex + e) % r,
        scrollFocusedIntoView: !0
      });
    });
    I(this, "selectFocused", () => {
      const { suggestions: e, focusIndex: r } = this.state, { result: u, queryInfo: o } = Object.values(e).reduce(
        (a, { results: i, queryInfo: l }) => [
          ...a,
          ...i.map((c) => ({ result: c, queryInfo: l }))
        ],
        []
      )[r];
      this.addMention(u, o), this.setState({
        focusIndex: 0
      });
    });
    I(this, "handleBlur", (e) => {
      const r = this._suggestionsMouseDown;
      this._suggestionsMouseDown = !1, r || this.setState({
        selectionStart: null,
        selectionEnd: null
      }), window.setTimeout(() => {
        this.updateHighlighterScroll();
      }, 1), this.props.onBlur(e, r);
    });
    I(this, "handleSuggestionsMouseDown", (e) => {
      this._suggestionsMouseDown = !0;
    });
    I(this, "handleSuggestionsMouseEnter", (e) => {
      this.setState({
        focusIndex: e,
        scrollFocusedIntoView: !1
      });
    });
    I(this, "updateSuggestionsPosition", () => {
      let { caretPosition: e } = this.state;
      const {
        suggestionsPortalHost: r,
        allowSuggestionsAboveCursor: u,
        forceSuggestionsAboveCursor: o
      } = this.props;
      if (!e || !this.suggestionsElement)
        return;
      let a = this.suggestionsElement, i = this.highlighterElement;
      const l = i.getBoundingClientRect(), c = ut(i, "font-size"), f = {
        left: l.left + e.left,
        top: l.top + e.top + c
      }, g = Math.max(
        document.documentElement.clientHeight,
        window.innerHeight || 0
      );
      if (!a)
        return;
      let h = {};
      if (r) {
        h.position = "fixed";
        let C = f.left, S = f.top;
        C -= ut(a, "margin-left"), S -= ut(a, "margin-top"), C -= i.scrollLeft, S -= i.scrollTop;
        const m = Math.max(
          document.documentElement.clientWidth,
          window.innerWidth || 0
        );
        C + a.offsetWidth > m ? h.left = Math.max(0, m - a.offsetWidth) : h.left = C, u && S + a.offsetHeight > g && a.offsetHeight < S - c || o ? h.top = Math.max(0, S - a.offsetHeight - c) : h.top = S;
      } else {
        let C = e.left - i.scrollLeft, S = e.top - i.scrollTop;
        C + a.offsetWidth > this.containerElement.offsetWidth ? h.right = 0 : h.left = C, u && f.top - i.scrollTop + a.offsetHeight > g && a.offsetHeight < l.top - c - i.scrollTop || o ? h.top = S - a.offsetHeight - c : h.top = S;
      }
      h.left === this.state.suggestionsPosition.left && h.top === this.state.suggestionsPosition.top && h.position === this.state.suggestionsPosition.position || this.setState({
        suggestionsPosition: h
      });
    });
    I(this, "updateHighlighterScroll", () => {
      const e = this.inputElement, r = this.highlighterElement;
      !e || !r || (r.scrollLeft = e.scrollLeft, r.scrollTop = e.scrollTop, r.height = e.height);
    });
    I(this, "handleCompositionStart", () => {
      He = !0;
    });
    I(this, "handleCompositionEnd", () => {
      He = !1;
    });
    I(this, "setSelection", (e, r) => {
      if (e === null || r === null)
        return;
      const u = this.inputElement;
      if (u.setSelectionRange)
        u.setSelectionRange(e, r);
      else if (u.createTextRange) {
        const o = u.createTextRange();
        o.collapse(!0), o.moveEnd("character", r), o.moveStart("character", e), o.select();
      }
    });
    I(this, "updateMentionsQueries", (e, r) => {
      this._queryId++, this.suggestions = {}, this.setState({
        suggestions: {}
      });
      const u = this.props.value || "", { children: o } = this.props, a = he(o), i = se(
        u,
        a,
        r,
        "NULL"
      );
      if (i === null)
        return;
      const l = Jr(
        u.substring(0, i),
        a
      ), c = e.substring(
        l,
        r
      );
      Te.Children.forEach(o, (f, g) => {
        if (!f)
          return;
        const h = Un(f.props.trigger, this.props), C = c.match(h);
        if (C) {
          const S = l + c.indexOf(C[1], C.index);
          this.queryData(
            C[2],
            g,
            S,
            S + C[1].length,
            e
          );
        }
      });
    });
    I(this, "clearSuggestions", () => {
      this._queryId++, this.suggestions = {}, this.setState({
        suggestions: {},
        focusIndex: 0
      });
    });
    I(this, "queryData", (e, r, u, o, a) => {
      const { children: i, ignoreAccents: l } = this.props, c = ze.toArray(i)[r], g = qn(c.props.data, l)(
        e,
        this.updateSuggestions.bind(
          null,
          this._queryId,
          r,
          e,
          u,
          o,
          a
        )
      );
      g instanceof Array && this.updateSuggestions(
        this._queryId,
        r,
        e,
        u,
        o,
        a,
        g
      );
    });
    I(this, "updateSuggestions", (e, r, u, o, a, i, l) => {
      if (e !== this._queryId)
        return;
      this.suggestions = {
        ...this.suggestions,
        [r]: {
          queryInfo: {
            childIndex: r,
            query: u,
            querySequenceStart: o,
            querySequenceEnd: a,
            plainTextValue: i
          },
          results: l
        }
      };
      const { focusIndex: c } = this.state, f = We(this.suggestions);
      this.setState({
        suggestions: this.suggestions,
        focusIndex: c >= f ? Math.max(f - 1, 0) : c
      });
    });
    I(this, "addMention", ({ id: e, display: r }, { childIndex: u, querySequenceStart: o, querySequenceEnd: a, plainTextValue: i }) => {
      const l = this.props.value || "", c = he(this.props.children), f = ze.toArray(this.props.children)[u], {
        markup: g,
        displayTransform: h,
        appendSpaceOnAdd: C,
        onAdd: S
      } = f.props, m = se(l, c, o, "START"), D = m + a - o;
      let B = Hr(g, e, r);
      C && (B += " ");
      const M = Me(l, m, D, B);
      this.inputElement.focus();
      let O = h(e, r);
      C && (O += " ");
      const U = o + O.length;
      this.setState({
        selectionStart: U,
        selectionEnd: U,
        setSelectionAfterMentionChange: !0
      });
      const E = { target: { value: M } }, J = Ie(M, c), ee = Me(
        i,
        o,
        a,
        O
      );
      this.executeOnChange(E, M, ee, J), S && S(e, r, m, D), this.clearSuggestions();
    });
    I(this, "isLoading", () => {
      let e = !1;
      return Te.Children.forEach(this.props.children, function(r) {
        e = e || r && r.props.isLoading;
      }), e;
    });
    I(this, "isOpened", () => it(this.state.selectionStart) && (We(this.state.suggestions) !== 0 || this.isLoading()));
    I(this, "_queryId", 0);
    this.suggestions = {}, this.uuidSuggestionsOverlay = Math.random().toString(16).substring(2), this.handleCopy = this.handleCopy.bind(this), this.handleCut = this.handleCut.bind(this), this.handlePaste = this.handlePaste.bind(this), this.state = {
      focusIndex: 0,
      selectionStart: null,
      selectionEnd: null,
      suggestions: {},
      caretPosition: null,
      suggestionsPosition: {},
      setSelectionAfterHandlePaste: !1
    };
  }
  componentDidMount() {
    document.addEventListener("copy", this.handleCopy), document.addEventListener("cut", this.handleCut), document.addEventListener("paste", this.handlePaste), this.updateSuggestionsPosition();
  }
  componentDidUpdate(e, r) {
    r.suggestionsPosition === this.state.suggestionsPosition && this.updateSuggestionsPosition(), this.state.setSelectionAfterMentionChange && (this.setState({ setSelectionAfterMentionChange: !1 }), this.setSelection(this.state.selectionStart, this.state.selectionEnd)), this.state.setSelectionAfterHandlePaste && (this.setState({ setSelectionAfterHandlePaste: !1 }), this.setSelection(this.state.selectionStart, this.state.selectionEnd));
  }
  componentWillUnmount() {
    document.removeEventListener("copy", this.handleCopy), document.removeEventListener("cut", this.handleCut), document.removeEventListener("paste", this.handlePaste);
  }
  render() {
    return /* @__PURE__ */ K.jsxs("div", { ref: this.setContainerElement, ...this.props.style, children: [
      this.renderControl(),
      this.renderSuggestionsOverlay()
    ] });
  }
  handlePaste(e) {
    if (e.target !== this.inputElement || !this.supportsClipboardActions(e))
      return;
    e.preventDefault();
    const { selectionStart: r, selectionEnd: u } = this.state, { value: o, children: a } = this.props, i = he(a), l = se(
      o,
      i,
      r,
      "START"
    ), c = se(o, i, u, "END"), f = e.clipboardData.getData("text/react-mentions"), g = e.clipboardData.getData("text/plain"), h = Me(
      o,
      l,
      c,
      f || g
    ).replace(/\r/g, ""), C = ye(h, i), S = { target: { ...e.target, value: h } };
    this.executeOnChange(
      S,
      h,
      C,
      Ie(h, i)
    );
    const D = (wt(
      o,
      i,
      r
    ) || r) + ye(f || g, i).length;
    this.setState({
      selectionStart: D,
      selectionEnd: D,
      setSelectionAfterHandlePaste: !0
    });
  }
  saveSelectionToClipboard(e) {
    const r = this.inputElement.selectionStart, u = this.inputElement.selectionEnd, { children: o, value: a } = this.props, i = he(o), l = se(
      a,
      i,
      r,
      "START"
    ), c = se(a, i, u, "END");
    e.clipboardData.setData(
      "text/plain",
      e.target.value.slice(r, u)
    ), e.clipboardData.setData(
      "text/react-mentions",
      a.slice(l, c)
    );
  }
  supportsClipboardActions(e) {
    return !!e.clipboardData;
  }
  handleCopy(e) {
    e.target === this.inputElement && this.supportsClipboardActions(e) && (e.preventDefault(), this.saveSelectionToClipboard(e));
  }
  handleCut(e) {
    if (e.target !== this.inputElement || !this.supportsClipboardActions(e))
      return;
    e.preventDefault(), this.saveSelectionToClipboard(e);
    const { selectionStart: r, selectionEnd: u } = this.state, { children: o, value: a } = this.props, i = he(o), l = se(
      a,
      i,
      r,
      "START"
    ), c = se(a, i, u, "END"), f = [
      a.slice(0, l),
      a.slice(c)
    ].join(""), g = ye(f, i), h = {
      target: { ...e.target, value: g }
    };
    this.executeOnChange(
      h,
      f,
      g,
      Ie(a, i)
    );
  }
}
I(ft, "propTypes", Kt), I(ft, "defaultProps", {
  ignoreAccents: !1,
  singleLine: !1,
  allowSuggestionsAboveCursor: !1,
  onKeyDown: () => null,
  onSelect: () => null,
  onBlur: () => null
});
const ut = (t, n) => {
  const e = parseFloat(
    window.getComputedStyle(t, null).getPropertyValue(n)
  );
  return isFinite(e) ? e : 0;
}, zn = typeof navigator < "u" && /iPhone|iPad|iPod/i.test(navigator.userAgent), Vn = Ve(
  {
    position: "relative",
    overflowY: "visible",
    input: {
      display: "block",
      width: "100%",
      position: "absolute",
      margin: 0,
      top: 0,
      left: 0,
      boxSizing: "border-box",
      backgroundColor: "transparent",
      fontFamily: "inherit",
      fontSize: "inherit",
      letterSpacing: "inherit"
    },
    "&multiLine": {
      input: {
        height: "100%",
        bottom: 0,
        overflow: "hidden",
        resize: "none",
        // fix weird textarea padding in mobile Safari (see: http://stackoverflow.com/questions/6890149/remove-3-pixels-in-ios-webkit-textarea)
        ...zn ? {
          marginTop: 1,
          marginLeft: -3
        } : null
      }
    }
  },
  ({ singleLine: t }) => ({
    "&singleLine": t,
    "&multiLine": !t
  })
), Zn = Vn(ft), Kn = {
  fontWeight: "inherit"
}, Jn = ({
  display: t,
  style: n,
  className: e,
  classNames: r
}) => {
  const u = pt(Kn, { style: n, className: e, classNames: r });
  return /* @__PURE__ */ K.jsx("strong", { ...u, children: t });
};
Jn.defaultProps = {
  trigger: "@",
  markup: "@[__display__](__id__)",
  displayTransform: function(t, n) {
    return n || t;
  },
  onAdd: () => null,
  onRemove: () => null,
  renderSuggestion: null,
  isLoading: !1,
  appendSpaceOnAdd: !1
};
export {
  Jn as Mention,
  Zn as MentionsInput
};
