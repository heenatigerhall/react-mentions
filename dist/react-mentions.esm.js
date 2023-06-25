var xr = Object.defineProperty;
var wr = (t, n, e) => n in t ? xr(t, n, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[n] = e;
var M = (t, n, e) => (wr(t, typeof n != "symbol" ? n + "" : n, e), e);
import * as _e from "react";
import Te, { Children as ze, createContext as jr, useContext as Ir, useMemo as Mr, createElement as Pt, useState as $r, useEffect as Br } from "react";
import Lr from "react-dom";
import "typescript";
function Jt(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var it = { exports: {} }, xe = {};
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
function kr() {
  if (Rt)
    return xe;
  Rt = 1;
  var t = Te, n = Symbol.for("react.element"), e = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, u = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(o, l, c) {
    var d, g = {}, h = null, C = null;
    c !== void 0 && (h = "" + c), l.key !== void 0 && (h = "" + l.key), l.ref !== void 0 && (C = l.ref);
    for (d in l)
      r.call(l, d) && !i.hasOwnProperty(d) && (g[d] = l[d]);
    if (o && o.defaultProps)
      for (d in l = o.defaultProps, l)
        g[d] === void 0 && (g[d] = l[d]);
    return { $$typeof: n, type: o, key: h, ref: C, props: g, _owner: u.current };
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
function Nr() {
  return _t || (_t = 1, process.env.NODE_ENV !== "production" && function() {
    var t = Te, n = Symbol.for("react.element"), e = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), o = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), C = Symbol.for("react.offscreen"), O = Symbol.iterator, S = "@@iterator";
    function A(s) {
      if (s === null || typeof s != "object")
        return null;
      var f = O && s[O] || s[S];
      return typeof f == "function" ? f : null;
    }
    var F = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function $(s) {
      {
        for (var f = arguments.length, v = new Array(f > 1 ? f - 1 : 0), D = 1; D < f; D++)
          v[D - 1] = arguments[D];
        T("error", s, v);
      }
    }
    function T(s, f, v) {
      {
        var D = F.ReactDebugCurrentFrame, W = D.getStackAddendum();
        W !== "" && (f += "%s", v = v.concat([W]));
        var K = v.map(function(k) {
          return String(k);
        });
        K.unshift("Warning: " + f), Function.prototype.apply.call(console[s], console, K);
      }
    }
    var H = !1, E = !1, J = !1, ee = !1, ie = !1, oe;
    oe = Symbol.for("react.module.reference");
    function fe(s) {
      return !!(typeof s == "string" || typeof s == "function" || s === r || s === i || ie || s === u || s === c || s === d || ee || s === C || H || E || J || typeof s == "object" && s !== null && (s.$$typeof === h || s.$$typeof === g || s.$$typeof === a || s.$$typeof === o || s.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      s.$$typeof === oe || s.getModuleId !== void 0));
    }
    function U(s, f, v) {
      var D = s.displayName;
      if (D)
        return D;
      var W = f.displayName || f.name || "";
      return W !== "" ? v + "(" + W + ")" : v;
    }
    function G(s) {
      return s.displayName || "Context";
    }
    function V(s) {
      if (s == null)
        return null;
      if (typeof s.tag == "number" && $("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof s == "function")
        return s.displayName || s.name || null;
      if (typeof s == "string")
        return s;
      switch (s) {
        case r:
          return "Fragment";
        case e:
          return "Portal";
        case i:
          return "Profiler";
        case u:
          return "StrictMode";
        case c:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof s == "object")
        switch (s.$$typeof) {
          case o:
            var f = s;
            return G(f) + ".Consumer";
          case a:
            var v = s;
            return G(v._context) + ".Provider";
          case l:
            return U(s, s.render, "ForwardRef");
          case g:
            var D = s.displayName || null;
            return D !== null ? D : V(s.type) || "Memo";
          case h: {
            var W = s, K = W._payload, k = W._init;
            try {
              return V(k(K));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var X = Object.assign, ue = 0, te, ae, Ee, me, p, b, w;
    function x() {
    }
    x.__reactDisabledLog = !0;
    function P() {
      {
        if (ue === 0) {
          te = console.log, ae = console.info, Ee = console.warn, me = console.error, p = console.group, b = console.groupCollapsed, w = console.groupEnd;
          var s = {
            configurable: !0,
            enumerable: !0,
            value: x,
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
            log: X({}, s, {
              value: te
            }),
            info: X({}, s, {
              value: ae
            }),
            warn: X({}, s, {
              value: Ee
            }),
            error: X({}, s, {
              value: me
            }),
            group: X({}, s, {
              value: p
            }),
            groupCollapsed: X({}, s, {
              value: b
            }),
            groupEnd: X({}, s, {
              value: w
            })
          });
        }
        ue < 0 && $("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var R = F.ReactCurrentDispatcher, _;
    function j(s, f, v) {
      {
        if (_ === void 0)
          try {
            throw Error();
          } catch (W) {
            var D = W.stack.trim().match(/\n( *(at )?)/);
            _ = D && D[1] || "";
          }
        return `
` + _ + s;
      }
    }
    var N = !1, I;
    {
      var re = typeof WeakMap == "function" ? WeakMap : Map;
      I = new re();
    }
    function y(s, f) {
      if (!s || N)
        return "";
      {
        var v = I.get(s);
        if (v !== void 0)
          return v;
      }
      var D;
      N = !0;
      var W = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var K;
      K = R.current, R.current = null, P();
      try {
        if (f) {
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
              D = pe;
            }
            Reflect.construct(s, [], k);
          } else {
            try {
              k.call();
            } catch (pe) {
              D = pe;
            }
            s.call(k.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (pe) {
            D = pe;
          }
          s();
        }
      } catch (pe) {
        if (pe && D && typeof pe.stack == "string") {
          for (var B = pe.stack.split(`
`), ne = D.stack.split(`
`), Q = B.length - 1, Z = ne.length - 1; Q >= 1 && Z >= 0 && B[Q] !== ne[Z]; )
            Z--;
          for (; Q >= 1 && Z >= 0; Q--, Z--)
            if (B[Q] !== ne[Z]) {
              if (Q !== 1 || Z !== 1)
                do
                  if (Q--, Z--, Z < 0 || B[Q] !== ne[Z]) {
                    var ce = `
` + B[Q].replace(" at new ", " at ");
                    return s.displayName && ce.includes("<anonymous>") && (ce = ce.replace("<anonymous>", s.displayName)), typeof s == "function" && I.set(s, ce), ce;
                  }
                while (Q >= 1 && Z >= 0);
              break;
            }
        }
      } finally {
        N = !1, R.current = K, L(), Error.prepareStackTrace = W;
      }
      var Se = s ? s.displayName || s.name : "", Dt = Se ? j(Se) : "";
      return typeof s == "function" && I.set(s, Dt), Dt;
    }
    function le(s, f, v) {
      return y(s, !1);
    }
    function be(s) {
      var f = s.prototype;
      return !!(f && f.isReactComponent);
    }
    function ve(s, f, v) {
      if (s == null)
        return "";
      if (typeof s == "function")
        return y(s, be(s));
      if (typeof s == "string")
        return j(s);
      switch (s) {
        case c:
          return j("Suspense");
        case d:
          return j("SuspenseList");
      }
      if (typeof s == "object")
        switch (s.$$typeof) {
          case l:
            return le(s.render);
          case g:
            return ve(s.type, f, v);
          case h: {
            var D = s, W = D._payload, K = D._init;
            try {
              return ve(K(W), f, v);
            } catch {
            }
          }
        }
      return "";
    }
    var ke = Object.prototype.hasOwnProperty, ht = {}, Et = F.ReactDebugCurrentFrame;
    function Ne(s) {
      if (s) {
        var f = s._owner, v = ve(s.type, s._source, f ? f.type : null);
        Et.setExtraStackFrame(v);
      } else
        Et.setExtraStackFrame(null);
    }
    function fr(s, f, v, D, W) {
      {
        var K = Function.call.bind(ke);
        for (var k in s)
          if (K(s, k)) {
            var B = void 0;
            try {
              if (typeof s[k] != "function") {
                var ne = Error((D || "React class") + ": " + v + " type `" + k + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[k] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ne.name = "Invariant Violation", ne;
              }
              B = s[k](f, k, D, v, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Q) {
              B = Q;
            }
            B && !(B instanceof Error) && (Ne(W), $("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", D || "React class", v, k, typeof B), Ne(null)), B instanceof Error && !(B.message in ht) && (ht[B.message] = !0, Ne(W), $("Failed %s type: %s", v, B.message), Ne(null));
          }
      }
    }
    var dr = Array.isArray;
    function Ke(s) {
      return dr(s);
    }
    function pr(s) {
      {
        var f = typeof Symbol == "function" && Symbol.toStringTag, v = f && s[Symbol.toStringTag] || s.constructor.name || "Object";
        return v;
      }
    }
    function gr(s) {
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
      if (gr(s))
        return $("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", pr(s)), vt(s);
    }
    var Re = F.ReactCurrentOwner, hr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, mt, bt, Je;
    Je = {};
    function Er(s) {
      if (ke.call(s, "ref")) {
        var f = Object.getOwnPropertyDescriptor(s, "ref").get;
        if (f && f.isReactWarning)
          return !1;
      }
      return s.ref !== void 0;
    }
    function vr(s) {
      if (ke.call(s, "key")) {
        var f = Object.getOwnPropertyDescriptor(s, "key").get;
        if (f && f.isReactWarning)
          return !1;
      }
      return s.key !== void 0;
    }
    function yr(s, f) {
      if (typeof s.ref == "string" && Re.current && f && Re.current.stateNode !== f) {
        var v = V(Re.current.type);
        Je[v] || ($('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', V(Re.current.type), s.ref), Je[v] = !0);
      }
    }
    function mr(s, f) {
      {
        var v = function() {
          mt || (mt = !0, $("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", f));
        };
        v.isReactWarning = !0, Object.defineProperty(s, "key", {
          get: v,
          configurable: !0
        });
      }
    }
    function br(s, f) {
      {
        var v = function() {
          bt || (bt = !0, $("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", f));
        };
        v.isReactWarning = !0, Object.defineProperty(s, "ref", {
          get: v,
          configurable: !0
        });
      }
    }
    var Cr = function(s, f, v, D, W, K, k) {
      var B = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: s,
        key: f,
        ref: v,
        props: k,
        // Record the component responsible for creating this element.
        _owner: K
      };
      return B._store = {}, Object.defineProperty(B._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(B, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: D
      }), Object.defineProperty(B, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: W
      }), Object.freeze && (Object.freeze(B.props), Object.freeze(B)), B;
    };
    function Sr(s, f, v, D, W) {
      {
        var K, k = {}, B = null, ne = null;
        v !== void 0 && (yt(v), B = "" + v), vr(f) && (yt(f.key), B = "" + f.key), Er(f) && (ne = f.ref, yr(f, W));
        for (K in f)
          ke.call(f, K) && !hr.hasOwnProperty(K) && (k[K] = f[K]);
        if (s && s.defaultProps) {
          var Q = s.defaultProps;
          for (K in Q)
            k[K] === void 0 && (k[K] = Q[K]);
        }
        if (B || ne) {
          var Z = typeof s == "function" ? s.displayName || s.name || "Unknown" : s;
          B && mr(k, Z), ne && br(k, Z);
        }
        return Cr(s, B, ne, W, D, Re.current, k);
      }
    }
    var Ge = F.ReactCurrentOwner, Ct = F.ReactDebugCurrentFrame;
    function Ce(s) {
      if (s) {
        var f = s._owner, v = ve(s.type, s._source, f ? f.type : null);
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
          var s = V(Ge.current.type);
          if (s)
            return `

Check the render method of \`` + s + "`.";
        }
        return "";
      }
    }
    function Ar(s) {
      {
        if (s !== void 0) {
          var f = s.fileName.replace(/^.*[\\\/]/, ""), v = s.lineNumber;
          return `

Check your code at ` + f + ":" + v + ".";
        }
        return "";
      }
    }
    var At = {};
    function Or(s) {
      {
        var f = St();
        if (!f) {
          var v = typeof s == "string" ? s : s.displayName || s.name;
          v && (f = `

Check the top-level render call using <` + v + ">.");
        }
        return f;
      }
    }
    function Ot(s, f) {
      {
        if (!s._store || s._store.validated || s.key != null)
          return;
        s._store.validated = !0;
        var v = Or(f);
        if (At[v])
          return;
        At[v] = !0;
        var D = "";
        s && s._owner && s._owner !== Ge.current && (D = " It was passed a child from " + V(s._owner.type) + "."), Ce(s), $('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', v, D), Ce(null);
      }
    }
    function Ft(s, f) {
      {
        if (typeof s != "object")
          return;
        if (Ke(s))
          for (var v = 0; v < s.length; v++) {
            var D = s[v];
            Qe(D) && Ot(D, f);
          }
        else if (Qe(s))
          s._store && (s._store.validated = !0);
        else if (s) {
          var W = A(s);
          if (typeof W == "function" && W !== s.entries)
            for (var K = W.call(s), k; !(k = K.next()).done; )
              Qe(k.value) && Ot(k.value, f);
        }
      }
    }
    function Fr(s) {
      {
        var f = s.type;
        if (f == null || typeof f == "string")
          return;
        var v;
        if (typeof f == "function")
          v = f.propTypes;
        else if (typeof f == "object" && (f.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        f.$$typeof === g))
          v = f.propTypes;
        else
          return;
        if (v) {
          var D = V(f);
          fr(v, s.props, "prop", D, s);
        } else if (f.PropTypes !== void 0 && !Xe) {
          Xe = !0;
          var W = V(f);
          $("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", W || "Unknown");
        }
        typeof f.getDefaultProps == "function" && !f.getDefaultProps.isReactClassApproved && $("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Tr(s) {
      {
        for (var f = Object.keys(s.props), v = 0; v < f.length; v++) {
          var D = f[v];
          if (D !== "children" && D !== "key") {
            Ce(s), $("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", D), Ce(null);
            break;
          }
        }
        s.ref !== null && (Ce(s), $("Invalid attribute `ref` supplied to `React.Fragment`."), Ce(null));
      }
    }
    function Tt(s, f, v, D, W, K) {
      {
        var k = fe(s);
        if (!k) {
          var B = "";
          (s === void 0 || typeof s == "object" && s !== null && Object.keys(s).length === 0) && (B += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ne = Ar(W);
          ne ? B += ne : B += St();
          var Q;
          s === null ? Q = "null" : Ke(s) ? Q = "array" : s !== void 0 && s.$$typeof === n ? (Q = "<" + (V(s.type) || "Unknown") + " />", B = " Did you accidentally export a JSX literal instead of a component?") : Q = typeof s, $("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Q, B);
        }
        var Z = Sr(s, f, v, W, K);
        if (Z == null)
          return Z;
        if (k) {
          var ce = f.children;
          if (ce !== void 0)
            if (D)
              if (Ke(ce)) {
                for (var Se = 0; Se < ce.length; Se++)
                  Ft(ce[Se], s);
                Object.freeze && Object.freeze(ce);
              } else
                $("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ft(ce, s);
        }
        return s === r ? Tr(Z) : Fr(Z), Z;
      }
    }
    function Dr(s, f, v) {
      return Tt(s, f, v, !0);
    }
    function Pr(s, f, v) {
      return Tt(s, f, v, !1);
    }
    var Rr = Pr, _r = Dr;
    we.Fragment = r, we.jsx = Rr, we.jsxs = _r;
  }()), we;
}
process.env.NODE_ENV === "production" ? it.exports = kr() : it.exports = Nr();
var z = it.exports, Wr = function(t, n, e, r, u, i, a, o) {
  if (process.env.NODE_ENV !== "production" && n === void 0)
    throw new Error("invariant requires an error message argument");
  if (!t) {
    var l;
    if (n === void 0)
      l = new Error(
        "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
      );
    else {
      var c = [e, r, u, i, a, o], d = 0;
      l = new Error(
        n.replace(/%s/g, function() {
          return c[d++];
        })
      ), l.name = "Invariant Violation";
    }
    throw l.framesToPop = 1, l;
  }
}, Yr = Wr;
const De = /* @__PURE__ */ Jt(Yr), qr = (t) => {
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
}, He = (t) => t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), de = {
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
  const n = He(t), e = t[t.indexOf(de.display) + de.display.length], r = t[t.indexOf(de.id) + de.id.length];
  return new RegExp(
    n.replace(
      de.display,
      `([^${He(e || "")}]+?)`
    ).replace(de.id, `([^${He(r || "")}]+?)`)
  );
}, he = (t) => ze.toArray(t).map(
  ({ props: { markup: n, regex: e, displayTransform: r } }) => ({
    markup: n,
    regex: e ? zr(e, n) : Ur(n),
    displayTransform: r || ((u, i) => i || u)
  })
), zr = (t, n) => {
  var u;
  const e = ((u = new RegExp(t.toString() + "|").exec("")) == null ? void 0 : u.length) - 1, r = Gt(n);
  return De(
    e === r,
    `Number of capturing groups in RegExp ${t.toString()} (${e}) does not match the number of placeholders in the markup '${n}' (${r})`
  ), t;
}, Me = (t, n, e, r) => t.substring(0, n) + r + t.substring(e), Vr = ({
  caretElement: t,
  position: n,
  setPosition: e,
  onCaretPositionChange: r
}) => {
  if (!t)
    return;
  const { offsetLeft: u, offsetTop: i } = t;
  if (n.left === u && n.top === i)
    return;
  const a = { left: u, top: i };
  e(a), r(a);
}, Kr = () => {
}, Le = (t, n, e, r = Kr) => {
  const u = qr(n.map((d) => d.regex));
  let i = 2;
  const a = n.map(({ markup: d }) => {
    const g = i;
    return i += Gt(d) + 1, g;
  });
  let o, l = 0, c = 0;
  for (; (o = u.exec(t)) !== null; ) {
    const d = a.find((T) => !!o[T]), g = a.indexOf(d), { markup: h, displayTransform: C } = n[g], O = d + xt(h, "id"), S = d + xt(h, "display"), A = o[O], F = C(A, o[S]);
    let $ = t.substring(l, o.index);
    r($, l, c), c += $.length, e(
      o[0],
      o.index,
      c,
      A,
      F,
      g,
      l
    ), c += F.length, l = u.lastIndex;
  }
  console.log("asdf"), l < t.length && r(t.substring(l), l, c);
}, ye = (t, n) => {
  let e = "";
  return Le(
    t,
    n,
    (r, u, i, a, o) => {
      e += o;
    },
    (r) => {
      e += r;
    }
  ), e;
}, se = (t, n, e, r = "START") => {
  if (typeof e != "number")
    return e;
  let u;
  return Le(t, n, (o, l, c, d, g, h, C) => {
    u === void 0 && c + g.length > e && (r === "NULL" ? u = null : u = l + (r === "END" ? o.length : 0));
  }, (o, l, c) => {
    u === void 0 && c + o.length >= e && (u = l + e - c);
  }), u === void 0 ? t.length : u;
}, Jr = (t, n, { selectionStartBefore: e, selectionEndBefore: r, selectionEndAfter: u }, i) => {
  let a = ye(t, i), o = a.length - n.length;
  e === "undefined" && (e = u + o), r === "undefined" && (r = e), e === r && r === u && a.length === n.length && (e = e - 1);
  let l = n.slice(e, u), c = Math.min(e, u), d = r;
  e === u && (d = Math.max(r, e + o));
  let g = se(t, i, c, "START"), h = se(t, i, d, "END"), C = se(t, i, c, "NULL"), O = se(t, i, d, "NULL"), S = C === null || O === null, A = Me(t, g, h, l);
  if (!S) {
    let F = ye(A, i);
    if (F !== n) {
      for (c = 0; n[c] === F[c]; )
        c++;
      l = n.slice(c, u), d = a.lastIndexOf(
        n.substring(u)
      ), g = se(t, i, c, "START"), h = se(t, i, d, "END"), A = Me(t, g, h, l);
    }
  }
  return A;
}, wt = (t, n, e) => {
  let r = e, u = !1;
  if (Le(t, n, (a, o, l, c, d, g, h) => {
    l <= e && l + d.length > e && (r = l, u = !0);
  }), u)
    return r;
}, Ie = (t, n) => {
  const e = [];
  return Le(
    t,
    n,
    (r, u, i, a, o, l, c) => {
      e.push({
        id: a,
        display: o,
        childIndex: l,
        index: u,
        plainTextIndex: i
      });
    }
  ), e;
}, Xt = (t, n) => `${t}-${n}`, We = (t) => Object.values(t).reduce(
  (n, { results: e }) => n + e.length,
  0
), Gr = (t, n) => {
  const e = Ie(t, n), r = e[e.length - 1];
  return r ? r.plainTextIndex + r.display.length : 0;
}, Xr = [
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
], Qr = (t) => {
  let n = t;
  return Xr.forEach((e) => {
    n = n.replace(
      e.letters,
      e.base
    );
  }), n;
}, jt = (t) => Qr(t).toLowerCase(), Qt = (t, n, e) => e ? jt(t).indexOf(jt(n)) : t.toLowerCase().indexOf(n.toLowerCase()), Zr = () => !!document.documentMode, ot = (t) => typeof t == "number", en = (t) => t === Object(t) ? Object.keys(t) : [], tn = (t, ...n) => {
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
function rn(t, n) {
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
function nn(t) {
  var n = rn(t, "string");
  return $e(n) === "symbol" ? n : String(n);
}
function Be(t, n, e) {
  return n = nn(n), n in t ? Object.defineProperty(t, n, {
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
function sn(t) {
  if (Array.isArray(t))
    return at(t);
}
function un(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
    return Array.from(t);
}
function on(t, n) {
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
function an() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ge(t) {
  return sn(t) || un(t) || on(t) || an();
}
var Pe = function(n) {
  return n === Object(n) ? Object.keys(n) : [];
}, Zt = function(n) {
  return n === Object(n) ? Object.values(n) : [];
};
function er(t, n) {
  var e = Object.assign({}, t);
  return Ue(t) && Ue(n) && Pe(n).forEach(function(r) {
    Ue(n[r]) ? r in t ? e[r] = er(t[r], n[r]) : Object.assign(e, Be({}, r, n[r])) : Object.assign(e, Be({}, r, n[r]));
  }), e;
}
var lt = function(n) {
  for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), u = 1; u < e; u++)
    r[u - 1] = arguments[u];
  return r.reduce(function(i, a) {
    return er(i, a);
  }, n);
}, ln = function(n, e) {
  var r = Object.assign({}, n);
  if (e)
    for (var u = 0; u < e.length; u++)
      delete r[e[u]];
  return r;
}, Ue = function(n) {
  return n === Object(n) && !(n instanceof Date) && !Array.isArray(n);
}, cn = function(n) {
  return (n || []).filter(Boolean);
}, dt = function(n) {
  return n[0] === "&";
}, fn = function(n) {
  return !dt(n);
}, It = function(n) {
  return n.replace(/-(\w)/g, function(e, r) {
    return r.toUpperCase();
  });
}, dn = function(n) {
  for (var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r = Pe(n), u = {}, i = 0, a = r.length; i < a; i += 1) {
    var o = r[i], l = Object.prototype.toString.call(n[o]) !== "[object Object]" || // style defs
    o[0] === ":" || // pseudo selectors
    o[0] === "@" || // @media / @keyframes / @supports / @font-face
    e.indexOf(o) >= 0;
    l && (u[o] = n[o]);
  }
  return u;
}, tr = function(n, e) {
  for (var r = e.map(It), u = Pe(n), i = {}, a = 0, o = u.length; a < o; a += 1) {
    var l = u[a];
    (e.indexOf(l) >= 0 || r.indexOf(It(l)) >= 0) && (i[l] = n[l]);
  }
  return i;
}, pn = function t(n, e) {
  for (var r = lt.apply(void 0, [{}, ln(n, e)].concat(ge(Zt(tr(n, e))))), u = Pe(r).filter(dt), i = 0, a = u.length; i < a; i += 1) {
    var o = u[i], l = t(r[o], e);
    e.indexOf(o) >= 0 ? (delete r[o], r = lt({}, r, l)) : r[o] = l;
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
var gn = ["animationName"], hn = function(n) {
  var e = n.style, r = n.className;
  return $t($t({}, e ? {
    style: dn(e, gn)
  } : {}), r ? {
    className: r
  } : {});
};
const rr = hn;
var nr = /* @__PURE__ */ jr(rr);
nr.Provider;
var En = function(n) {
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
const sr = En;
var vn = {}, yn = function(n) {
  return function(e, r) {
    var u = r || vn;
    n.memoize = n.memoize || /* @__PURE__ */ new WeakMap();
    var i;
    n.memoize.has(u) ? i = n.memoize.get(u) : (i = {}, n.memoize.set(u, i));
    var a = sr(e).join(" ");
    return a in i ? i[a] : i[a] = n(e || [], r);
  };
};
const mn = yn;
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
var bn = function(n) {
  var e = n && Pe(n)[0];
  return e && e.split("__")[0].split("--")[0];
}, Cn = function(n, e, r) {
  if (n) {
    var u = n.split(" ")[0], i = [].concat(ge(e.length === 0 ? r.map(function(a) {
      return "".concat(u, "--").concat(a.substring(1));
    }) : []), ge(e.map(function(a) {
      return "".concat(u, "__").concat(a);
    })));
    return e.length === 0 ? [n].concat(ge(i)) : i;
  }
};
function ur(t) {
  var n = t.style, e = t.className, r = t.classNames, u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : rr, i = e || bn(r) || (n == null ? void 0 : n.className), a = typeof n == "function" ? n : mn(function(g, h) {
    var C = sr(g);
    De(Array.isArray(C), "First parameter must be a string, an array of strings, a plain object with boolean values, or a falsy value."), De(!h || Ue(h), "Optional second parameter must be a plain object.");
    var O = C.filter(dt), S = C.filter(fn), A = S.length > 0 ? function(T) {
      return Zt(tr(T, S));
    } : function(T) {
      return [T];
    }, F = function() {
      var H = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return A(pn(H, O));
    }, $ = Cn(i, S, O);
    return ur(Ae(Ae(Ae({}, (n || h) && {
      style: lt.apply(void 0, [{}].concat(ge(F(h)), ge(F(n))))
    }), $ && {
      className: $.join(" ")
    }), r && {
      classNames: r
    }), u);
  }), o = Ae({}, typeof n == "function" ? n : {
    style: n
  }), l = ge(new Set([].concat(ge(o.className ? o.className.split(" ") : []), ge(i ? i.split(" ") : [])))), c = r ? cn(l.map(function(g) {
    return r[g];
  })) : l, d = u(Ae(Ae({}, o), c.length > 0 ? {
    className: c.join(" ")
  } : {}));
  return Object.assign(a, d), a;
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
var Sn = function() {
  for (var n = arguments.length, e = new Array(n), r = 0; r < n; r++)
    e[r] = arguments[r];
  return e.reduce(function(u, i) {
    return je(je(je({}, u), typeof i == "function" ? i : {}), {}, {
      style: je(je({}, u.style), typeof i == "function" ? i.style : i)
    });
  }, {});
};
const An = Sn;
var On = function(n, e, r) {
  var u = e.style, i = e.className, a = e.classNames, o = Ir(nr), l = Mr(function() {
    return ur({
      style: u,
      className: i,
      classNames: a
    }, o);
  }, [u, i, a, o]);
  return l(r, n);
};
const pt = On;
function Ve(t, n) {
  return (r) => {
    const u = ({
      style: a,
      className: o,
      classNames: l,
      ...c
    }) => {
      const d = n ? n(c) : void 0, g = pt(
        t,
        { style: a, className: o, classNames: l },
        d
      );
      return /* @__PURE__ */ z.jsx(r, { ...c, style: g });
    }, i = r.displayName || r.name || "Component";
    return u.displayName = `defaultStyle(${i})`, Te.forwardRef((a, o) => u({ ...a, ref: o }));
  };
}
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
function Fn() {
  if (kt)
    return Y;
  kt = 1;
  var t = typeof Symbol == "function" && Symbol.for, n = t ? Symbol.for("react.element") : 60103, e = t ? Symbol.for("react.portal") : 60106, r = t ? Symbol.for("react.fragment") : 60107, u = t ? Symbol.for("react.strict_mode") : 60108, i = t ? Symbol.for("react.profiler") : 60114, a = t ? Symbol.for("react.provider") : 60109, o = t ? Symbol.for("react.context") : 60110, l = t ? Symbol.for("react.async_mode") : 60111, c = t ? Symbol.for("react.concurrent_mode") : 60111, d = t ? Symbol.for("react.forward_ref") : 60112, g = t ? Symbol.for("react.suspense") : 60113, h = t ? Symbol.for("react.suspense_list") : 60120, C = t ? Symbol.for("react.memo") : 60115, O = t ? Symbol.for("react.lazy") : 60116, S = t ? Symbol.for("react.block") : 60121, A = t ? Symbol.for("react.fundamental") : 60117, F = t ? Symbol.for("react.responder") : 60118, $ = t ? Symbol.for("react.scope") : 60119;
  function T(E) {
    if (typeof E == "object" && E !== null) {
      var J = E.$$typeof;
      switch (J) {
        case n:
          switch (E = E.type, E) {
            case l:
            case c:
            case r:
            case i:
            case u:
            case g:
              return E;
            default:
              switch (E = E && E.$$typeof, E) {
                case o:
                case d:
                case O:
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
  function H(E) {
    return T(E) === c;
  }
  return Y.AsyncMode = l, Y.ConcurrentMode = c, Y.ContextConsumer = o, Y.ContextProvider = a, Y.Element = n, Y.ForwardRef = d, Y.Fragment = r, Y.Lazy = O, Y.Memo = C, Y.Portal = e, Y.Profiler = i, Y.StrictMode = u, Y.Suspense = g, Y.isAsyncMode = function(E) {
    return H(E) || T(E) === l;
  }, Y.isConcurrentMode = H, Y.isContextConsumer = function(E) {
    return T(E) === o;
  }, Y.isContextProvider = function(E) {
    return T(E) === a;
  }, Y.isElement = function(E) {
    return typeof E == "object" && E !== null && E.$$typeof === n;
  }, Y.isForwardRef = function(E) {
    return T(E) === d;
  }, Y.isFragment = function(E) {
    return T(E) === r;
  }, Y.isLazy = function(E) {
    return T(E) === O;
  }, Y.isMemo = function(E) {
    return T(E) === C;
  }, Y.isPortal = function(E) {
    return T(E) === e;
  }, Y.isProfiler = function(E) {
    return T(E) === i;
  }, Y.isStrictMode = function(E) {
    return T(E) === u;
  }, Y.isSuspense = function(E) {
    return T(E) === g;
  }, Y.isValidElementType = function(E) {
    return typeof E == "string" || typeof E == "function" || E === r || E === c || E === i || E === u || E === g || E === h || typeof E == "object" && E !== null && (E.$$typeof === O || E.$$typeof === C || E.$$typeof === a || E.$$typeof === o || E.$$typeof === d || E.$$typeof === A || E.$$typeof === F || E.$$typeof === $ || E.$$typeof === S);
  }, Y.typeOf = T, Y;
}
var q = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nt;
function Tn() {
  return Nt || (Nt = 1, process.env.NODE_ENV !== "production" && function() {
    var t = typeof Symbol == "function" && Symbol.for, n = t ? Symbol.for("react.element") : 60103, e = t ? Symbol.for("react.portal") : 60106, r = t ? Symbol.for("react.fragment") : 60107, u = t ? Symbol.for("react.strict_mode") : 60108, i = t ? Symbol.for("react.profiler") : 60114, a = t ? Symbol.for("react.provider") : 60109, o = t ? Symbol.for("react.context") : 60110, l = t ? Symbol.for("react.async_mode") : 60111, c = t ? Symbol.for("react.concurrent_mode") : 60111, d = t ? Symbol.for("react.forward_ref") : 60112, g = t ? Symbol.for("react.suspense") : 60113, h = t ? Symbol.for("react.suspense_list") : 60120, C = t ? Symbol.for("react.memo") : 60115, O = t ? Symbol.for("react.lazy") : 60116, S = t ? Symbol.for("react.block") : 60121, A = t ? Symbol.for("react.fundamental") : 60117, F = t ? Symbol.for("react.responder") : 60118, $ = t ? Symbol.for("react.scope") : 60119;
    function T(y) {
      return typeof y == "string" || typeof y == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      y === r || y === c || y === i || y === u || y === g || y === h || typeof y == "object" && y !== null && (y.$$typeof === O || y.$$typeof === C || y.$$typeof === a || y.$$typeof === o || y.$$typeof === d || y.$$typeof === A || y.$$typeof === F || y.$$typeof === $ || y.$$typeof === S);
    }
    function H(y) {
      if (typeof y == "object" && y !== null) {
        var le = y.$$typeof;
        switch (le) {
          case n:
            var be = y.type;
            switch (be) {
              case l:
              case c:
              case r:
              case i:
              case u:
              case g:
                return be;
              default:
                var ve = be && be.$$typeof;
                switch (ve) {
                  case o:
                  case d:
                  case O:
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
    var E = l, J = c, ee = o, ie = a, oe = n, fe = d, U = r, G = O, V = C, X = e, ue = i, te = u, ae = g, Ee = !1;
    function me(y) {
      return Ee || (Ee = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), p(y) || H(y) === l;
    }
    function p(y) {
      return H(y) === c;
    }
    function b(y) {
      return H(y) === o;
    }
    function w(y) {
      return H(y) === a;
    }
    function x(y) {
      return typeof y == "object" && y !== null && y.$$typeof === n;
    }
    function P(y) {
      return H(y) === d;
    }
    function L(y) {
      return H(y) === r;
    }
    function R(y) {
      return H(y) === O;
    }
    function _(y) {
      return H(y) === C;
    }
    function j(y) {
      return H(y) === e;
    }
    function N(y) {
      return H(y) === i;
    }
    function I(y) {
      return H(y) === u;
    }
    function re(y) {
      return H(y) === g;
    }
    q.AsyncMode = E, q.ConcurrentMode = J, q.ContextConsumer = ee, q.ContextProvider = ie, q.Element = oe, q.ForwardRef = fe, q.Fragment = U, q.Lazy = G, q.Memo = V, q.Portal = X, q.Profiler = ue, q.StrictMode = te, q.Suspense = ae, q.isAsyncMode = me, q.isConcurrentMode = p, q.isContextConsumer = b, q.isContextProvider = w, q.isElement = x, q.isForwardRef = P, q.isFragment = L, q.isLazy = R, q.isMemo = _, q.isPortal = j, q.isProfiler = N, q.isStrictMode = I, q.isSuspense = re, q.isValidElementType = T, q.typeOf = H;
  }()), q;
}
var Wt;
function ir() {
  return Wt || (Wt = 1, process.env.NODE_ENV === "production" ? Ye.exports = Fn() : Ye.exports = Tn()), Ye.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Ze, Yt;
function Dn() {
  if (Yt)
    return Ze;
  Yt = 1;
  var t = Object.getOwnPropertySymbols, n = Object.prototype.hasOwnProperty, e = Object.prototype.propertyIsEnumerable;
  function r(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function u() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var a = {}, o = 0; o < 10; o++)
        a["_" + String.fromCharCode(o)] = o;
      var l = Object.getOwnPropertyNames(a).map(function(d) {
        return a[d];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var c = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(d) {
        c[d] = d;
      }), Object.keys(Object.assign({}, c)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Ze = u() ? Object.assign : function(i, a) {
    for (var o, l = r(i), c, d = 1; d < arguments.length; d++) {
      o = Object(arguments[d]);
      for (var g in o)
        n.call(o, g) && (l[g] = o[g]);
      if (t) {
        c = t(o);
        for (var h = 0; h < c.length; h++)
          e.call(o, c[h]) && (l[c[h]] = o[c[h]]);
      }
    }
    return l;
  }, Ze;
}
var et, qt;
function gt() {
  if (qt)
    return et;
  qt = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return et = t, et;
}
var tt, Ht;
function or() {
  return Ht || (Ht = 1, tt = Function.call.bind(Object.prototype.hasOwnProperty)), tt;
}
var rt, Ut;
function Pn() {
  if (Ut)
    return rt;
  Ut = 1;
  var t = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var n = gt(), e = {}, r = or();
    t = function(i) {
      var a = "Warning: " + i;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function u(i, a, o, l, c) {
    if (process.env.NODE_ENV !== "production") {
      for (var d in i)
        if (r(i, d)) {
          var g;
          try {
            if (typeof i[d] != "function") {
              var h = Error(
                (l || "React class") + ": " + o + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw h.name = "Invariant Violation", h;
            }
            g = i[d](a, d, l, o, null, n);
          } catch (O) {
            g = O;
          }
          if (g && !(g instanceof Error) && t(
            (l || "React class") + ": type specification of " + o + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof g + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), g instanceof Error && !(g.message in e)) {
            e[g.message] = !0;
            var C = c ? c() : "";
            t(
              "Failed " + o + " type: " + g.message + (C ?? "")
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
function Rn() {
  if (zt)
    return nt;
  zt = 1;
  var t = ir(), n = Dn(), e = gt(), r = or(), u = Pn(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(o) {
    var l = "Warning: " + o;
    typeof console < "u" && console.error(l);
    try {
      throw new Error(l);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return nt = function(o, l) {
    var c = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function g(p) {
      var b = p && (c && p[c] || p[d]);
      if (typeof b == "function")
        return b;
    }
    var h = "<<anonymous>>", C = {
      array: F("array"),
      bigint: F("bigint"),
      bool: F("boolean"),
      func: F("function"),
      number: F("number"),
      object: F("object"),
      string: F("string"),
      symbol: F("symbol"),
      any: $(),
      arrayOf: T,
      element: H(),
      elementType: E(),
      instanceOf: J,
      node: fe(),
      objectOf: ie,
      oneOf: ee,
      oneOfType: oe,
      shape: G,
      exact: V
    };
    function O(p, b) {
      return p === b ? p !== 0 || 1 / p === 1 / b : p !== p && b !== b;
    }
    function S(p, b) {
      this.message = p, this.data = b && typeof b == "object" ? b : {}, this.stack = "";
    }
    S.prototype = Error.prototype;
    function A(p) {
      if (process.env.NODE_ENV !== "production")
        var b = {}, w = 0;
      function x(L, R, _, j, N, I, re) {
        if (j = j || h, I = I || _, re !== e) {
          if (l) {
            var y = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw y.name = "Invariant Violation", y;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var le = j + ":" + _;
            !b[le] && // Avoid spamming the console because they are often not actionable except for lib authors
            w < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + I + "` prop on `" + j + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), b[le] = !0, w++);
          }
        }
        return R[_] == null ? L ? R[_] === null ? new S("The " + N + " `" + I + "` is marked as required " + ("in `" + j + "`, but its value is `null`.")) : new S("The " + N + " `" + I + "` is marked as required in " + ("`" + j + "`, but its value is `undefined`.")) : null : p(R, _, j, N, I);
      }
      var P = x.bind(null, !1);
      return P.isRequired = x.bind(null, !0), P;
    }
    function F(p) {
      function b(w, x, P, L, R, _) {
        var j = w[x], N = te(j);
        if (N !== p) {
          var I = ae(j);
          return new S(
            "Invalid " + L + " `" + R + "` of type " + ("`" + I + "` supplied to `" + P + "`, expected ") + ("`" + p + "`."),
            { expectedType: p }
          );
        }
        return null;
      }
      return A(b);
    }
    function $() {
      return A(a);
    }
    function T(p) {
      function b(w, x, P, L, R) {
        if (typeof p != "function")
          return new S("Property `" + R + "` of component `" + P + "` has invalid PropType notation inside arrayOf.");
        var _ = w[x];
        if (!Array.isArray(_)) {
          var j = te(_);
          return new S("Invalid " + L + " `" + R + "` of type " + ("`" + j + "` supplied to `" + P + "`, expected an array."));
        }
        for (var N = 0; N < _.length; N++) {
          var I = p(_, N, P, L, R + "[" + N + "]", e);
          if (I instanceof Error)
            return I;
        }
        return null;
      }
      return A(b);
    }
    function H() {
      function p(b, w, x, P, L) {
        var R = b[w];
        if (!o(R)) {
          var _ = te(R);
          return new S("Invalid " + P + " `" + L + "` of type " + ("`" + _ + "` supplied to `" + x + "`, expected a single ReactElement."));
        }
        return null;
      }
      return A(p);
    }
    function E() {
      function p(b, w, x, P, L) {
        var R = b[w];
        if (!t.isValidElementType(R)) {
          var _ = te(R);
          return new S("Invalid " + P + " `" + L + "` of type " + ("`" + _ + "` supplied to `" + x + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return A(p);
    }
    function J(p) {
      function b(w, x, P, L, R) {
        if (!(w[x] instanceof p)) {
          var _ = p.name || h, j = me(w[x]);
          return new S("Invalid " + L + " `" + R + "` of type " + ("`" + j + "` supplied to `" + P + "`, expected ") + ("instance of `" + _ + "`."));
        }
        return null;
      }
      return A(b);
    }
    function ee(p) {
      if (!Array.isArray(p))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), a;
      function b(w, x, P, L, R) {
        for (var _ = w[x], j = 0; j < p.length; j++)
          if (O(_, p[j]))
            return null;
        var N = JSON.stringify(p, function(re, y) {
          var le = ae(y);
          return le === "symbol" ? String(y) : y;
        });
        return new S("Invalid " + L + " `" + R + "` of value `" + String(_) + "` " + ("supplied to `" + P + "`, expected one of " + N + "."));
      }
      return A(b);
    }
    function ie(p) {
      function b(w, x, P, L, R) {
        if (typeof p != "function")
          return new S("Property `" + R + "` of component `" + P + "` has invalid PropType notation inside objectOf.");
        var _ = w[x], j = te(_);
        if (j !== "object")
          return new S("Invalid " + L + " `" + R + "` of type " + ("`" + j + "` supplied to `" + P + "`, expected an object."));
        for (var N in _)
          if (r(_, N)) {
            var I = p(_, N, P, L, R + "." + N, e);
            if (I instanceof Error)
              return I;
          }
        return null;
      }
      return A(b);
    }
    function oe(p) {
      if (!Array.isArray(p))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var b = 0; b < p.length; b++) {
        var w = p[b];
        if (typeof w != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + Ee(w) + " at index " + b + "."
          ), a;
      }
      function x(P, L, R, _, j) {
        for (var N = [], I = 0; I < p.length; I++) {
          var re = p[I], y = re(P, L, R, _, j, e);
          if (y == null)
            return null;
          y.data && r(y.data, "expectedType") && N.push(y.data.expectedType);
        }
        var le = N.length > 0 ? ", expected one of type [" + N.join(", ") + "]" : "";
        return new S("Invalid " + _ + " `" + j + "` supplied to " + ("`" + R + "`" + le + "."));
      }
      return A(x);
    }
    function fe() {
      function p(b, w, x, P, L) {
        return X(b[w]) ? null : new S("Invalid " + P + " `" + L + "` supplied to " + ("`" + x + "`, expected a ReactNode."));
      }
      return A(p);
    }
    function U(p, b, w, x, P) {
      return new S(
        (p || "React class") + ": " + b + " type `" + w + "." + x + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + P + "`."
      );
    }
    function G(p) {
      function b(w, x, P, L, R) {
        var _ = w[x], j = te(_);
        if (j !== "object")
          return new S("Invalid " + L + " `" + R + "` of type `" + j + "` " + ("supplied to `" + P + "`, expected `object`."));
        for (var N in p) {
          var I = p[N];
          if (typeof I != "function")
            return U(P, L, R, N, ae(I));
          var re = I(_, N, P, L, R + "." + N, e);
          if (re)
            return re;
        }
        return null;
      }
      return A(b);
    }
    function V(p) {
      function b(w, x, P, L, R) {
        var _ = w[x], j = te(_);
        if (j !== "object")
          return new S("Invalid " + L + " `" + R + "` of type `" + j + "` " + ("supplied to `" + P + "`, expected `object`."));
        var N = n({}, w[x], p);
        for (var I in N) {
          var re = p[I];
          if (r(p, I) && typeof re != "function")
            return U(P, L, R, I, ae(re));
          if (!re)
            return new S(
              "Invalid " + L + " `" + R + "` key `" + I + "` supplied to `" + P + "`.\nBad object: " + JSON.stringify(w[x], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(p), null, "  ")
            );
          var y = re(_, I, P, L, R + "." + I, e);
          if (y)
            return y;
        }
        return null;
      }
      return A(b);
    }
    function X(p) {
      switch (typeof p) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !p;
        case "object":
          if (Array.isArray(p))
            return p.every(X);
          if (p === null || o(p))
            return !0;
          var b = g(p);
          if (b) {
            var w = b.call(p), x;
            if (b !== p.entries) {
              for (; !(x = w.next()).done; )
                if (!X(x.value))
                  return !1;
            } else
              for (; !(x = w.next()).done; ) {
                var P = x.value;
                if (P && !X(P[1]))
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
function _n() {
  if (Vt)
    return st;
  Vt = 1;
  var t = gt();
  function n() {
  }
  function e() {
  }
  return e.resetWarningCache = n, st = function() {
    function r(a, o, l, c, d, g) {
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
    var i = {
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
    return i.PropTypes = i, i;
  }, st;
}
if (process.env.NODE_ENV !== "production") {
  var xn = ir(), wn = !0;
  ct.exports = Rn()(xn.isElement, wn);
} else
  ct.exports = _n()();
var jn = ct.exports;
const m = /* @__PURE__ */ Jt(jn), In = (t, n) => (t.hasOwnProperty(n) ? t[n]++ : t[n] = 0, n + "_" + t[n]);
function ar({
  selectionStart: t,
  selectionEnd: n,
  value: e = "",
  onCaretPositionChange: r,
  containerRef: u,
  children: i,
  style: a
}) {
  const [o, l] = _e.useState({
    left: void 0,
    top: void 0
  }), [c, d] = _e.useState();
  _e.useEffect(() => {
    Vr({ caretElement: c, position: o, setPosition: l, onCaretPositionChange: r });
  });
  const g = he(i);
  let h;
  n === t && (h = se(
    e,
    g,
    t,
    "START"
  ));
  const C = [], O = {};
  let S = C, A = 0;
  const F = (J, ee) => {
    if (ot(h) && h >= ee && h <= ee + J.length) {
      const ie = h - ee;
      S.push(
        T(J.substring(0, ie), A)
      ), S = [
        T(J.substring(ie), A)
      ];
    } else
      S.push(T(J, A));
    A++;
  }, $ = (J, ee, ie, oe, fe, U, G) => {
    const V = In(O, oe);
    S.push(
      H(oe, fe, U, V)
    );
  }, T = (J, ee) => /* @__PURE__ */ Pt("span", { ...a("substring"), key: ee }, J), H = (J, ee, ie, oe) => {
    const fe = { id: J, display: ee, key: oe }, U = _e.Children.toArray(i)[ie];
    return _e.cloneElement(U, fe);
  }, E = (J) => /* @__PURE__ */ Pt("span", { ...a("caret"), ref: d, key: "caret" }, J);
  return Le(e, g, $, F), S.push(" "), S !== C && C.push(E(S)), /* @__PURE__ */ z.jsx("div", { ...a, ref: u, children: C });
}
ar.propTypes = {
  selectionStart: m.number,
  selectionEnd: m.number,
  value: m.string.isRequired,
  onCaretPositionChange: m.func.isRequired,
  containerRef: m.oneOfType([
    m.func,
    m.shape({
      current: typeof Element > "u" ? m.any : m.instanceOf(Element)
    })
  ]),
  children: m.oneOfType([
    m.element,
    m.arrayOf(m.element)
  ]).isRequired
};
const Mn = Ve(
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
), $n = Mn(ar);
function lr({
  id: t,
  focused: n,
  ignoreAccents: e,
  index: r,
  onClick: u,
  onMouseEnter: i,
  query: a,
  renderSuggestion: o,
  suggestion: l,
  style: c,
  className: d,
  classNames: g
}) {
  const h = { onClick: u, onMouseEnter: i }, C = () => {
    let A = O(), F = S(A);
    return o ? o(
      l,
      a,
      F,
      r,
      n
    ) : F;
  }, O = () => {
    if (typeof l == "string")
      return l;
    let { id: A, display: F } = l;
    return A === void 0 || !F ? A : F;
  }, S = (A) => {
    let F = Qt(A, a, e);
    return F === -1 ? /* @__PURE__ */ z.jsx("span", { ...c("display"), children: A }) : /* @__PURE__ */ z.jsxs("span", { ...c("display"), children: [
      A.substring(0, F),
      /* @__PURE__ */ z.jsx("b", { ...c("highlight"), children: A.substring(F, F + a.length) }),
      A.substring(F + a.length)
    ] });
  };
  return /* @__PURE__ */ z.jsx("li", { id: t, role: "option", "aria-selected": n, ...h, ...c, children: C() });
}
lr.propTypes = {
  id: m.string.isRequired,
  query: m.string.isRequired,
  index: m.number.isRequired,
  ignoreAccents: m.bool,
  suggestion: m.oneOfType([
    m.string,
    m.shape({
      id: m.oneOfType([m.string, m.number]).isRequired,
      display: m.string
    })
  ]).isRequired,
  renderSuggestion: m.func,
  focused: m.bool
};
const Bn = Ve(
  {
    cursor: "pointer"
  },
  (t) => ({ "&focused": t.focused })
), Ln = Bn(lr), Oe = {
  borderRadius: "1.25rem",
  height: "0.5rem",
  marginBottom: "0.5rem",
  background: "linear-gradient(to right, #99A0A3 0%, #707679 20%, #464A4D 40%, #464A4D 60%, #707679 80% , #99A0A3 100%)",
  backgroundSize: "1000px",
  animation: "placeholderShimmer 1.2s infinite linear",
  amimationFillMode: "forwards"
};
function kn() {
  return /* @__PURE__ */ z.jsxs(
    "div",
    {
      style: {
        display: "flex",
        padding: "1rem",
        alignItems: "center"
      },
      children: [
        /* @__PURE__ */ z.jsx(
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
        /* @__PURE__ */ z.jsxs(
          "div",
          {
            style: {
              display: "block",
              alignItems: "center",
              marginLeft: "0.5rem"
            },
            children: [
              /* @__PURE__ */ z.jsx("div", { style: { ...Oe, width: "12rem" } }),
              /* @__PURE__ */ z.jsx("div", { style: { ...Oe, width: "10rem" } }),
              /* @__PURE__ */ z.jsx("div", { style: { ...Oe, width: "8rem" } })
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
  return /* @__PURE__ */ z.jsx("div", { ...r, children: /* @__PURE__ */ z.jsx("div", { ...u, children: /* @__PURE__ */ z.jsx(z.Fragment, { children: [...Array(4)].map((i) => /* @__PURE__ */ z.jsx(kn, {}, i)) }) }) });
}
const Wn = {};
function cr({
  id: t,
  suggestions: n = {},
  a11ySuggestionsListLabel: e,
  focusIndex: r,
  position: u,
  left: i,
  right: a,
  top: o,
  scrollFocusedIntoView: l,
  isLoading: c,
  isOpened: d,
  onSelect: g = () => null,
  ignoreAccents: h,
  containerRef: C,
  children: O,
  style: S,
  customSuggestionsContainer: A,
  onMouseDown: F,
  onMouseEnter: $
}) {
  const [T, H] = $r(void 0);
  Br(() => {
    if (!T || T.offsetHeight >= T.scrollHeight || !l)
      return;
    const U = T.scrollTop;
    let { top: G, bottom: V } = T.children[r].getBoundingClientRect();
    const { top: X } = T.getBoundingClientRect();
    G = G - X + U, V = V - X + U, G < U ? T.scrollTop = G : V > T.offsetHeight && (T.scrollTop = V - T.offsetHeight);
  }, [r, l, T]);
  const E = () => {
    const U = /* @__PURE__ */ z.jsx(
      "ul",
      {
        ref: H,
        id: t,
        role: "listbox",
        "aria-label": e,
        ...S("list"),
        children: Object.values(n).reduce(
          (G, { results: V, queryInfo: X }) => [
            ...G,
            ...V.map(
              (ue, te) => J(ue, X, G.length + te)
            )
          ],
          []
        )
      }
    );
    return A ? A(U) : U;
  }, J = (U, G, V) => {
    const X = V === r, { childIndex: ue, query: te } = G, { renderSuggestion: ae } = ze.toArray(O)[ue].props;
    return /* @__PURE__ */ z.jsx(
      Ln,
      {
        style: S("item"),
        id: Xt(t, V),
        query: te,
        index: V,
        ignoreAccents: h,
        renderSuggestion: ae,
        suggestion: U,
        focused: X,
        onClick: () => oe(U, G),
        onMouseEnter: () => ie(V)
      },
      `${ue}-${fe(U)}`
    );
  }, ee = () => {
    if (c)
      return /* @__PURE__ */ z.jsx(Nn, { style: S("loadingIndicator") });
  }, ie = (U, G) => {
    $ && $(U);
  }, oe = (U, G) => {
    g(U, G);
  }, fe = (U) => typeof U == "string" ? U : U.id;
  return d ? /* @__PURE__ */ z.jsxs(
    "div",
    {
      ...An({ position: u || "absolute", left: i, right: a, top: o }, S),
      onMouseDown: F,
      ref: C,
      children: [
        E(),
        ee()
      ]
    }
  ) : null;
}
cr.propTypes = {
  id: m.string.isRequired,
  suggestions: m.object.isRequired,
  a11ySuggestionsListLabel: m.string,
  focusIndex: m.number,
  position: m.string,
  left: m.number,
  right: m.number,
  top: m.number,
  scrollFocusedIntoView: m.bool,
  isLoading: m.bool,
  isOpened: m.bool.isRequired,
  onSelect: m.func,
  ignoreAccents: m.bool,
  customSuggestionsContainer: m.func,
  containerRef: m.oneOfType([
    m.func,
    m.shape({
      current: typeof Element > "u" ? m.any : m.instanceOf(Element)
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
}), qn = Yn(cr), Hn = function(t, n = {}) {
  if (t instanceof RegExp)
    return t;
  {
    const { allowSpaceInQuery: e } = n, r = He(t);
    return new RegExp(
      `(?:^|\\s)(${r}([^${e ? "" : "\\s"}${r}]*))$`
    );
  }
}, Un = function(t, n) {
  return t instanceof Array ? function(e, r) {
    const u = [];
    for (let i = 0, a = t.length; i < a; ++i) {
      const o = t[i].display || t[i].id;
      Qt(o, e, n) >= 0 && u.push(t[i]);
    }
    return u;
  } : t;
}, Fe = { TAB: 9, RETURN: 13, ESC: 27, UP: 38, DOWN: 40 };
let qe = !1;
const Kt = {
  /**
   * If set to `true` a regular text input element will be rendered
   * instead of a textarea
   */
  singleLine: m.bool,
  allowSpaceInQuery: m.bool,
  allowSuggestionsAboveCursor: m.bool,
  forceSuggestionsAboveCursor: m.bool,
  ignoreAccents: m.bool,
  a11ySuggestionsListLabel: m.string,
  value: m.string,
  onKeyDown: m.func,
  customSuggestionsContainer: m.func,
  onSelect: m.func,
  onBlur: m.func,
  onChange: m.func,
  suggestionsPortalHost: typeof Element > "u" ? m.any : m.PropTypes.instanceOf(Element),
  inputRef: m.oneOfType([
    m.func,
    m.shape({
      current: typeof Element > "u" ? m.any : m.instanceOf(Element)
    })
  ]),
  children: m.oneOfType([
    m.element,
    m.arrayOf(m.element)
  ]).isRequired
};
class ft extends Te.Component {
  constructor(e) {
    super(e);
    M(this, "setContainerElement", (e) => {
      this.containerElement = e;
    });
    M(this, "getInputProps", () => {
      let { readOnly: e, disabled: r, style: u } = this.props;
      return {
        ...tn(
          this.props,
          ["style", "classNames", "className"],
          // substyle props
          en(Kt)
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
    M(this, "renderControl", () => {
      let { singleLine: e, style: r } = this.props, u = this.getInputProps();
      return /* @__PURE__ */ z.jsxs("div", { ...r("control"), children: [
        this.renderHighlighter(),
        e ? this.renderInput(u) : this.renderTextarea(u)
      ] });
    });
    M(this, "renderInput", (e) => /* @__PURE__ */ z.jsx("input", { type: "text", ref: this.setInputRef, ...e }));
    M(this, "renderTextarea", (e) => /* @__PURE__ */ z.jsx("textarea", { autoFocus: !0, ref: this.setInputRef, ...e }));
    M(this, "setInputRef", (e) => {
      this.inputElement = e;
      const { inputRef: r } = this.props;
      typeof r == "function" ? r(e) : r && (r.current = e);
    });
    M(this, "setSuggestionsElement", (e) => {
      this.suggestionsElement = e;
    });
    M(this, "renderSuggestionsOverlay", () => {
      if (!ot(this.state.selectionStart))
        return null;
      const { position: e, left: r, top: u, right: i } = this.state.suggestionsPosition, a = /* @__PURE__ */ z.jsx(
        qn,
        {
          id: this.uuidSuggestionsOverlay,
          style: this.props.style("suggestions"),
          position: e,
          left: r,
          top: u,
          right: i,
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
      return this.props.suggestionsPortalHost ? Lr.createPortal(
        a,
        this.props.suggestionsPortalHost
      ) : a;
    });
    M(this, "renderHighlighter", () => {
      const { selectionStart: e, selectionEnd: r } = this.state, { singleLine: u, children: i, value: a, style: o } = this.props;
      return /* @__PURE__ */ z.jsx(
        $n,
        {
          containerRef: this.setHighlighterElement,
          style: o("highlighter"),
          value: a,
          singleLine: u,
          selectionStart: e,
          selectionEnd: r,
          onCaretPositionChange: this.handleCaretPositionChange,
          children: i
        }
      );
    });
    M(this, "setHighlighterElement", (e) => {
      this.highlighterElement = e;
    });
    M(this, "handleCaretPositionChange", (e) => {
      this.setState({ caretPosition: e });
    });
    // Returns the text to set as the value of the textarea with all markups removed
    M(this, "getPlainText", () => ye(
      this.props.value || "",
      he(this.props.children)
    ));
    M(this, "executeOnChange", (e, ...r) => {
      if (this.props.onChange)
        return this.props.onChange(e, ...r);
      if (this.props.valueLink)
        return this.props.valueLink.requestChange(e.target.value, ...r);
    });
    // Handle input element's change event
    M(this, "handleChange", (e) => {
      if (qe = !1, Zr() && (document.activeElement && document.activeElement.contentDocument || document).activeElement !== e.target)
        return;
      const r = this.props.value || "", u = he(this.props.children);
      let i = e.target.value, a = Jr(
        r,
        i,
        {
          selectionStartBefore: this.state.selectionStart,
          selectionEndBefore: this.state.selectionEnd,
          selectionEndAfter: e.target.selectionEnd
        },
        u
      );
      i = ye(a, u);
      let o = e.target.selectionStart, l = e.target.selectionEnd, c = !1, d = wt(
        r,
        u,
        o
      );
      d !== void 0 && this.state.selectionEnd > d && (o = d + (e.nativeEvent.data ? e.nativeEvent.data.length : 0), l = o, c = !0), this.setState({
        selectionStart: o,
        selectionEnd: l,
        setSelectionAfterMentionChange: c
      });
      let g = Ie(a, u), h = { target: { value: a } };
      this.executeOnChange(h, a, i, g);
    });
    // Handle input element's select event
    M(this, "handleSelect", (e) => {
      if (this.setState({
        selectionStart: e.target.selectionStart,
        selectionEnd: e.target.selectionEnd
      }), qe)
        return;
      const r = this.inputElement;
      e.target.selectionStart === e.target.selectionEnd ? this.updateMentionsQueries(r.value, e.target.selectionStart) : this.clearSuggestions(), this.updateHighlighterScroll(), this.props.onSelect(e);
    });
    M(this, "handleKeyDown", (e) => {
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
    M(this, "shiftFocus", (e) => {
      const r = We(this.state.suggestions);
      this.setState({
        focusIndex: (r + this.state.focusIndex + e) % r,
        scrollFocusedIntoView: !0
      });
    });
    M(this, "selectFocused", () => {
      const { suggestions: e, focusIndex: r } = this.state, { result: u, queryInfo: i } = Object.values(e).reduce(
        (a, { results: o, queryInfo: l }) => [
          ...a,
          ...o.map((c) => ({ result: c, queryInfo: l }))
        ],
        []
      )[r];
      this.addMention(u, i), this.setState({
        focusIndex: 0
      });
    });
    M(this, "handleBlur", (e) => {
      const r = this._suggestionsMouseDown;
      this._suggestionsMouseDown = !1, r || this.setState({
        selectionStart: null,
        selectionEnd: null
      }), window.setTimeout(() => {
        this.updateHighlighterScroll();
      }, 1), this.props.onBlur(e, r);
    });
    M(this, "handleSuggestionsMouseDown", (e) => {
      this._suggestionsMouseDown = !0;
    });
    M(this, "handleSuggestionsMouseEnter", (e) => {
      this.setState({
        focusIndex: e,
        scrollFocusedIntoView: !1
      });
    });
    M(this, "updateSuggestionsPosition", () => {
      let { caretPosition: e } = this.state;
      const {
        suggestionsPortalHost: r,
        allowSuggestionsAboveCursor: u,
        forceSuggestionsAboveCursor: i
      } = this.props;
      if (!e || !this.suggestionsElement)
        return;
      let a = this.suggestionsElement, o = this.highlighterElement;
      const l = o.getBoundingClientRect(), c = ut(o, "font-size"), d = {
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
        let C = d.left, O = d.top;
        C -= ut(a, "margin-left"), O -= ut(a, "margin-top"), C -= o.scrollLeft, O -= o.scrollTop;
        const S = Math.max(
          document.documentElement.clientWidth,
          window.innerWidth || 0
        );
        C + a.offsetWidth > S ? h.left = Math.max(0, S - a.offsetWidth) : h.left = C, u && O + a.offsetHeight > g && a.offsetHeight < O - c || i ? h.top = Math.max(0, O - a.offsetHeight - c) : h.top = O;
      } else {
        let C = e.left - o.scrollLeft, O = e.top - o.scrollTop;
        C + a.offsetWidth > this.containerElement.offsetWidth ? h.right = 0 : h.left = C, u && d.top - o.scrollTop + a.offsetHeight > g && a.offsetHeight < l.top - c - o.scrollTop || i ? h.top = O - a.offsetHeight - c : h.top = O;
      }
      h.left === this.state.suggestionsPosition.left && h.top === this.state.suggestionsPosition.top && h.position === this.state.suggestionsPosition.position || this.setState({
        suggestionsPosition: h
      });
    });
    M(this, "updateHighlighterScroll", () => {
      const e = this.inputElement, r = this.highlighterElement;
      !e || !r || (r.scrollLeft = e.scrollLeft, r.scrollTop = e.scrollTop, r.height = e.height);
    });
    M(this, "handleCompositionStart", () => {
      qe = !0;
    });
    M(this, "handleCompositionEnd", () => {
      qe = !1;
    });
    M(this, "setSelection", (e, r) => {
      if (e === null || r === null)
        return;
      const u = this.inputElement;
      if (u.setSelectionRange)
        u.setSelectionRange(e, r);
      else if (u.createTextRange) {
        const i = u.createTextRange();
        i.collapse(!0), i.moveEnd("character", r), i.moveStart("character", e), i.select();
      }
    });
    M(this, "updateMentionsQueries", (e, r) => {
      this._queryId++, this.suggestions = {}, this.setState({
        suggestions: {}
      });
      const u = this.props.value || "", { children: i } = this.props, a = he(i), o = se(
        u,
        a,
        r,
        "NULL"
      );
      if (o === null)
        return;
      const l = Gr(
        u.substring(0, o),
        a
      ), c = e.substring(
        l,
        r
      );
      Te.Children.forEach(i, (d, g) => {
        if (!d)
          return;
        const h = Hn(d.props.trigger, this.props), C = c.match(h);
        if (C) {
          const O = l + c.indexOf(C[1], C.index);
          this.queryData(
            C[2],
            g,
            O,
            O + C[1].length,
            e
          );
        }
      });
    });
    M(this, "clearSuggestions", () => {
      this._queryId++, this.suggestions = {}, this.setState({
        suggestions: {},
        focusIndex: 0
      });
    });
    M(this, "queryData", (e, r, u, i, a) => {
      const { children: o, ignoreAccents: l } = this.props, c = ze.toArray(o)[r], g = Un(c.props.data, l)(
        e,
        this.updateSuggestions.bind(
          null,
          this._queryId,
          r,
          e,
          u,
          i,
          a
        )
      );
      g instanceof Array && this.updateSuggestions(
        this._queryId,
        r,
        e,
        u,
        i,
        a,
        g
      );
    });
    M(this, "updateSuggestions", (e, r, u, i, a, o, l) => {
      if (e !== this._queryId)
        return;
      this.suggestions = {
        ...this.suggestions,
        [r]: {
          queryInfo: {
            childIndex: r,
            query: u,
            querySequenceStart: i,
            querySequenceEnd: a,
            plainTextValue: o
          },
          results: l
        }
      };
      const { focusIndex: c } = this.state, d = We(this.suggestions);
      this.setState({
        suggestions: this.suggestions,
        focusIndex: c >= d ? Math.max(d - 1, 0) : c
      });
    });
    M(this, "addMention", ({ id: e, display: r }, { childIndex: u, querySequenceStart: i, querySequenceEnd: a, plainTextValue: o }) => {
      const l = this.props.value || "", c = he(this.props.children), d = ze.toArray(this.props.children)[u], {
        markup: g,
        displayTransform: h,
        appendSpaceOnAdd: C,
        onAdd: O
      } = d.props, S = se(l, c, i, "START"), A = S + a - i;
      let F = Hr(g, e, r);
      C && (F += " ");
      const $ = Me(l, S, A, F);
      this.inputElement.focus();
      let T = h(e, r);
      C && (T += " ");
      const H = i + T.length;
      this.setState({
        selectionStart: H,
        selectionEnd: H,
        setSelectionAfterMentionChange: !0
      });
      const E = { target: { value: $ } }, J = Ie($, c), ee = Me(
        o,
        i,
        a,
        T
      );
      this.executeOnChange(E, $, ee, J), O && O(e, r, S, A), this.clearSuggestions();
    });
    M(this, "isLoading", () => {
      let e = !1;
      return Te.Children.forEach(this.props.children, function(r) {
        e = e || r && r.props.isLoading;
      }), e;
    });
    M(this, "isOpened", () => ot(this.state.selectionStart) && (We(this.state.suggestions) !== 0 || this.isLoading()));
    M(this, "_queryId", 0);
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
    return /* @__PURE__ */ z.jsxs("div", { ref: this.setContainerElement, ...this.props.style, children: [
      this.renderControl(),
      this.renderSuggestionsOverlay()
    ] });
  }
  handlePaste(e) {
    if (e.target !== this.inputElement || !this.supportsClipboardActions(e))
      return;
    e.preventDefault();
    const { selectionStart: r, selectionEnd: u } = this.state, { value: i, children: a } = this.props, o = he(a), l = se(
      i,
      o,
      r,
      "START"
    ), c = se(i, o, u, "END"), d = e.clipboardData.getData("text/react-mentions"), g = e.clipboardData.getData("text/plain"), h = Me(
      i,
      l,
      c,
      d || g
    ).replace(/\r/g, ""), C = ye(h, o), O = { target: { ...e.target, value: h } };
    this.executeOnChange(
      O,
      h,
      C,
      Ie(h, o)
    );
    const A = (wt(
      i,
      o,
      r
    ) || r) + ye(d || g, o).length;
    this.setState({
      selectionStart: A,
      selectionEnd: A,
      setSelectionAfterHandlePaste: !0
    });
  }
  saveSelectionToClipboard(e) {
    const r = this.inputElement.selectionStart, u = this.inputElement.selectionEnd, { children: i, value: a } = this.props, o = he(i), l = se(
      a,
      o,
      r,
      "START"
    ), c = se(a, o, u, "END");
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
    const { selectionStart: r, selectionEnd: u } = this.state, { children: i, value: a } = this.props, o = he(i), l = se(
      a,
      o,
      r,
      "START"
    ), c = se(a, o, u, "END"), d = [
      a.slice(0, l),
      a.slice(c)
    ].join(""), g = ye(d, o), h = {
      target: { ...e.target, value: g }
    };
    this.executeOnChange(
      h,
      d,
      g,
      Ie(a, o)
    );
  }
}
M(ft, "propTypes", Kt), M(ft, "defaultProps", {
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
), es = Vn(ft), Kn = {
  fontWeight: "inherit"
}, Jn = ({
  display: t,
  style: n,
  className: e,
  classNames: r
}) => {
  const u = pt(Kn, { style: n, className: e, classNames: r });
  return /* @__PURE__ */ z.jsx("strong", { ...u, children: t });
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
  es as MentionsInput
};
