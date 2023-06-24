var wr = Object.defineProperty;
var _r = (t, n, e) => n in t ? wr(t, n, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[n] = e;
var $ = (t, n, e) => (_r(t, typeof n != "symbol" ? n + "" : n, e), e);
import me, { Children as Me, createContext as jr, useContext as Ir, useMemo as Mr, useState as st, useEffect as Kt, createElement as Dt } from "react";
import $r from "react-dom";
function Jt(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var ut = { exports: {} }, xe = {};
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
function Br() {
  if (Rt)
    return xe;
  Rt = 1;
  var t = me, n = Symbol.for("react.element"), e = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, u = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(o, l, c) {
    var f, g = {}, E = null, C = null;
    c !== void 0 && (E = "" + c), l.key !== void 0 && (E = "" + l.key), l.ref !== void 0 && (C = l.ref);
    for (f in l)
      r.call(l, f) && !i.hasOwnProperty(f) && (g[f] = l[f]);
    if (o && o.defaultProps)
      for (f in l = o.defaultProps, l)
        g[f] === void 0 && (g[f] = l[f]);
    return { $$typeof: n, type: o, key: E, ref: C, props: g, _owner: u.current };
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
var Pt;
function Lr() {
  return Pt || (Pt = 1, process.env.NODE_ENV !== "production" && function() {
    var t = me, n = Symbol.for("react.element"), e = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), o = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), C = Symbol.for("react.offscreen"), O = Symbol.iterator, A = "@@iterator";
    function F(s) {
      if (s === null || typeof s != "object")
        return null;
      var d = O && s[O] || s[A];
      return typeof d == "function" ? d : null;
    }
    var S = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(s) {
      {
        for (var d = arguments.length, v = new Array(d > 1 ? d - 1 : 0), T = 1; T < d; T++)
          v[T - 1] = arguments[T];
        D("error", s, v);
      }
    }
    function D(s, d, v) {
      {
        var T = S.ReactDebugCurrentFrame, Y = T.getStackAddendum();
        Y !== "" && (d += "%s", v = v.concat([Y]));
        var K = v.map(function(k) {
          return String(k);
        });
        K.unshift("Warning: " + d), Function.prototype.apply.call(console[s], console, K);
      }
    }
    var U = !1, h = !1, se = !1, fe = !1, G = !1, Z;
    Z = Symbol.for("react.module.reference");
    function oe(s) {
      return !!(typeof s == "string" || typeof s == "function" || s === r || s === i || G || s === u || s === c || s === f || fe || s === C || U || h || se || typeof s == "object" && s !== null && (s.$$typeof === E || s.$$typeof === g || s.$$typeof === a || s.$$typeof === o || s.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      s.$$typeof === Z || s.getModuleId !== void 0));
    }
    function N(s, d, v) {
      var T = s.displayName;
      if (T)
        return T;
      var Y = d.displayName || d.name || "";
      return Y !== "" ? v + "(" + Y + ")" : v;
    }
    function J(s) {
      return s.displayName || "Context";
    }
    function z(s) {
      if (s == null)
        return null;
      if (typeof s.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof s == "function")
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
        case f:
          return "SuspenseList";
      }
      if (typeof s == "object")
        switch (s.$$typeof) {
          case o:
            var d = s;
            return J(d) + ".Consumer";
          case a:
            var v = s;
            return J(v._context) + ".Provider";
          case l:
            return N(s, s.render, "ForwardRef");
          case g:
            var T = s.displayName || null;
            return T !== null ? T : z(s.type) || "Memo";
          case E: {
            var Y = s, K = Y._payload, k = Y._init;
            try {
              return z(k(K));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var X = Object.assign, re = 0, te, ae, Ee, be, p, b, j;
    function _() {
    }
    _.__reactDisabledLog = !0;
    function R() {
      {
        if (re === 0) {
          te = console.log, ae = console.info, Ee = console.warn, be = console.error, p = console.group, b = console.groupCollapsed, j = console.groupEnd;
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
        re++;
      }
    }
    function L() {
      {
        if (re--, re === 0) {
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
              value: be
            }),
            group: X({}, s, {
              value: p
            }),
            groupCollapsed: X({}, s, {
              value: b
            }),
            groupEnd: X({}, s, {
              value: j
            })
          });
        }
        re < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var P = S.ReactCurrentDispatcher, x;
    function I(s, d, v) {
      {
        if (x === void 0)
          try {
            throw Error();
          } catch (Y) {
            var T = Y.stack.trim().match(/\n( *(at )?)/);
            x = T && T[1] || "";
          }
        return `
` + x + s;
      }
    }
    var W = !1, M;
    {
      var ne = typeof WeakMap == "function" ? WeakMap : Map;
      M = new ne();
    }
    function y(s, d) {
      if (!s || W)
        return "";
      {
        var v = M.get(s);
        if (v !== void 0)
          return v;
      }
      var T;
      W = !0;
      var Y = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var K;
      K = P.current, P.current = null, R();
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
              T = pe;
            }
            Reflect.construct(s, [], k);
          } else {
            try {
              k.call();
            } catch (pe) {
              T = pe;
            }
            s.call(k.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (pe) {
            T = pe;
          }
          s();
        }
      } catch (pe) {
        if (pe && T && typeof pe.stack == "string") {
          for (var B = pe.stack.split(`
`), ue = T.stack.split(`
`), Q = B.length - 1, ee = ue.length - 1; Q >= 1 && ee >= 0 && B[Q] !== ue[ee]; )
            ee--;
          for (; Q >= 1 && ee >= 0; Q--, ee--)
            if (B[Q] !== ue[ee]) {
              if (Q !== 1 || ee !== 1)
                do
                  if (Q--, ee--, ee < 0 || B[Q] !== ue[ee]) {
                    var ce = `
` + B[Q].replace(" at new ", " at ");
                    return s.displayName && ce.includes("<anonymous>") && (ce = ce.replace("<anonymous>", s.displayName)), typeof s == "function" && M.set(s, ce), ce;
                  }
                while (Q >= 1 && ee >= 0);
              break;
            }
        }
      } finally {
        W = !1, P.current = K, L(), Error.prepareStackTrace = Y;
      }
      var Ae = s ? s.displayName || s.name : "", Tt = Ae ? I(Ae) : "";
      return typeof s == "function" && M.set(s, Tt), Tt;
    }
    function le(s, d, v) {
      return y(s, !1);
    }
    function Ce(s) {
      var d = s.prototype;
      return !!(d && d.isReactComponent);
    }
    function ve(s, d, v) {
      if (s == null)
        return "";
      if (typeof s == "function")
        return y(s, Ce(s));
      if (typeof s == "string")
        return I(s);
      switch (s) {
        case c:
          return I("Suspense");
        case f:
          return I("SuspenseList");
      }
      if (typeof s == "object")
        switch (s.$$typeof) {
          case l:
            return le(s.render);
          case g:
            return ve(s.type, d, v);
          case E: {
            var T = s, Y = T._payload, K = T._init;
            try {
              return ve(K(Y), d, v);
            } catch {
            }
          }
        }
      return "";
    }
    var Le = Object.prototype.hasOwnProperty, gt = {}, ht = S.ReactDebugCurrentFrame;
    function ke(s) {
      if (s) {
        var d = s._owner, v = ve(s.type, s._source, d ? d.type : null);
        ht.setExtraStackFrame(v);
      } else
        ht.setExtraStackFrame(null);
    }
    function fr(s, d, v, T, Y) {
      {
        var K = Function.call.bind(Le);
        for (var k in s)
          if (K(s, k)) {
            var B = void 0;
            try {
              if (typeof s[k] != "function") {
                var ue = Error((T || "React class") + ": " + v + " type `" + k + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[k] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ue.name = "Invariant Violation", ue;
              }
              B = s[k](d, k, T, v, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Q) {
              B = Q;
            }
            B && !(B instanceof Error) && (ke(Y), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", T || "React class", v, k, typeof B), ke(null)), B instanceof Error && !(B.message in gt) && (gt[B.message] = !0, ke(Y), w("Failed %s type: %s", v, B.message), ke(null));
          }
      }
    }
    var dr = Array.isArray;
    function ze(s) {
      return dr(s);
    }
    function pr(s) {
      {
        var d = typeof Symbol == "function" && Symbol.toStringTag, v = d && s[Symbol.toStringTag] || s.constructor.name || "Object";
        return v;
      }
    }
    function gr(s) {
      try {
        return Et(s), !1;
      } catch {
        return !0;
      }
    }
    function Et(s) {
      return "" + s;
    }
    function vt(s) {
      if (gr(s))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", pr(s)), Et(s);
    }
    var Pe = S.ReactCurrentOwner, hr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, yt, mt, Ve;
    Ve = {};
    function Er(s) {
      if (Le.call(s, "ref")) {
        var d = Object.getOwnPropertyDescriptor(s, "ref").get;
        if (d && d.isReactWarning)
          return !1;
      }
      return s.ref !== void 0;
    }
    function vr(s) {
      if (Le.call(s, "key")) {
        var d = Object.getOwnPropertyDescriptor(s, "key").get;
        if (d && d.isReactWarning)
          return !1;
      }
      return s.key !== void 0;
    }
    function yr(s, d) {
      if (typeof s.ref == "string" && Pe.current && d && Pe.current.stateNode !== d) {
        var v = z(Pe.current.type);
        Ve[v] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', z(Pe.current.type), s.ref), Ve[v] = !0);
      }
    }
    function mr(s, d) {
      {
        var v = function() {
          yt || (yt = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", d));
        };
        v.isReactWarning = !0, Object.defineProperty(s, "key", {
          get: v,
          configurable: !0
        });
      }
    }
    function br(s, d) {
      {
        var v = function() {
          mt || (mt = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", d));
        };
        v.isReactWarning = !0, Object.defineProperty(s, "ref", {
          get: v,
          configurable: !0
        });
      }
    }
    var Cr = function(s, d, v, T, Y, K, k) {
      var B = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: s,
        key: d,
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
        value: T
      }), Object.defineProperty(B, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Y
      }), Object.freeze && (Object.freeze(B.props), Object.freeze(B)), B;
    };
    function Sr(s, d, v, T, Y) {
      {
        var K, k = {}, B = null, ue = null;
        v !== void 0 && (vt(v), B = "" + v), vr(d) && (vt(d.key), B = "" + d.key), Er(d) && (ue = d.ref, yr(d, Y));
        for (K in d)
          Le.call(d, K) && !hr.hasOwnProperty(K) && (k[K] = d[K]);
        if (s && s.defaultProps) {
          var Q = s.defaultProps;
          for (K in Q)
            k[K] === void 0 && (k[K] = Q[K]);
        }
        if (B || ue) {
          var ee = typeof s == "function" ? s.displayName || s.name || "Unknown" : s;
          B && mr(k, ee), ue && br(k, ee);
        }
        return Cr(s, B, ue, Y, T, Pe.current, k);
      }
    }
    var Ke = S.ReactCurrentOwner, bt = S.ReactDebugCurrentFrame;
    function Se(s) {
      if (s) {
        var d = s._owner, v = ve(s.type, s._source, d ? d.type : null);
        bt.setExtraStackFrame(v);
      } else
        bt.setExtraStackFrame(null);
    }
    var Je;
    Je = !1;
    function Ge(s) {
      return typeof s == "object" && s !== null && s.$$typeof === n;
    }
    function Ct() {
      {
        if (Ke.current) {
          var s = z(Ke.current.type);
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
          var d = s.fileName.replace(/^.*[\\\/]/, ""), v = s.lineNumber;
          return `

Check your code at ` + d + ":" + v + ".";
        }
        return "";
      }
    }
    var St = {};
    function Or(s) {
      {
        var d = Ct();
        if (!d) {
          var v = typeof s == "string" ? s : s.displayName || s.name;
          v && (d = `

Check the top-level render call using <` + v + ">.");
        }
        return d;
      }
    }
    function At(s, d) {
      {
        if (!s._store || s._store.validated || s.key != null)
          return;
        s._store.validated = !0;
        var v = Or(d);
        if (St[v])
          return;
        St[v] = !0;
        var T = "";
        s && s._owner && s._owner !== Ke.current && (T = " It was passed a child from " + z(s._owner.type) + "."), Se(s), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', v, T), Se(null);
      }
    }
    function Ot(s, d) {
      {
        if (typeof s != "object")
          return;
        if (ze(s))
          for (var v = 0; v < s.length; v++) {
            var T = s[v];
            Ge(T) && At(T, d);
          }
        else if (Ge(s))
          s._store && (s._store.validated = !0);
        else if (s) {
          var Y = F(s);
          if (typeof Y == "function" && Y !== s.entries)
            for (var K = Y.call(s), k; !(k = K.next()).done; )
              Ge(k.value) && At(k.value, d);
        }
      }
    }
    function Fr(s) {
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
          var T = z(d);
          fr(v, s.props, "prop", T, s);
        } else if (d.PropTypes !== void 0 && !Je) {
          Je = !0;
          var Y = z(d);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Y || "Unknown");
        }
        typeof d.getDefaultProps == "function" && !d.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Tr(s) {
      {
        for (var d = Object.keys(s.props), v = 0; v < d.length; v++) {
          var T = d[v];
          if (T !== "children" && T !== "key") {
            Se(s), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", T), Se(null);
            break;
          }
        }
        s.ref !== null && (Se(s), w("Invalid attribute `ref` supplied to `React.Fragment`."), Se(null));
      }
    }
    function Ft(s, d, v, T, Y, K) {
      {
        var k = oe(s);
        if (!k) {
          var B = "";
          (s === void 0 || typeof s == "object" && s !== null && Object.keys(s).length === 0) && (B += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ue = Ar(Y);
          ue ? B += ue : B += Ct();
          var Q;
          s === null ? Q = "null" : ze(s) ? Q = "array" : s !== void 0 && s.$$typeof === n ? (Q = "<" + (z(s.type) || "Unknown") + " />", B = " Did you accidentally export a JSX literal instead of a component?") : Q = typeof s, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Q, B);
        }
        var ee = Sr(s, d, v, Y, K);
        if (ee == null)
          return ee;
        if (k) {
          var ce = d.children;
          if (ce !== void 0)
            if (T)
              if (ze(ce)) {
                for (var Ae = 0; Ae < ce.length; Ae++)
                  Ot(ce[Ae], s);
                Object.freeze && Object.freeze(ce);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ot(ce, s);
        }
        return s === r ? Tr(ee) : Fr(ee), ee;
      }
    }
    function Dr(s, d, v) {
      return Ft(s, d, v, !0);
    }
    function Rr(s, d, v) {
      return Ft(s, d, v, !1);
    }
    var Pr = Rr, xr = Dr;
    we.Fragment = r, we.jsx = Pr, we.jsxs = xr;
  }()), we;
}
process.env.NODE_ENV === "production" ? ut.exports = Br() : ut.exports = Lr();
var V = ut.exports;
const qe = (t) => t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
var kr = function(t, n, e, r, u, i, a, o) {
  if (process.env.NODE_ENV !== "production" && n === void 0)
    throw new Error("invariant requires an error message argument");
  if (!t) {
    var l;
    if (n === void 0)
      l = new Error(
        "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
      );
    else {
      var c = [e, r, u, i, a, o], f = 0;
      l = new Error(
        n.replace(/%s/g, function() {
          return c[f++];
        })
      ), l.name = "Invariant Violation";
    }
    throw l.framesToPop = 1, l;
  }
}, Nr = kr;
const De = /* @__PURE__ */ Jt(Nr), de = {
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
}, Wr = (t) => {
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
}, Yr = () => {
}, Be = (t, n, e, r = Yr) => {
  const u = Wr(n.map((f) => f.regex));
  let i = 2;
  const a = n.map(({ markup: f }) => {
    const g = i;
    return i += Gt(f) + 1, g;
  });
  let o, l = 0, c = 0;
  for (; (o = u.exec(t)) !== null; ) {
    const f = a.find((D) => !!o[D]), g = a.indexOf(f), { markup: E, displayTransform: C } = n[g], O = f + xt(E, "id"), A = f + xt(E, "display"), F = o[O], S = C(F, o[A]);
    let w = t.substring(l, o.index);
    r(w, l, c), c += w.length, e(
      o[0],
      o.index,
      c,
      F,
      S,
      g,
      l
    ), c += S.length, l = u.lastIndex;
  }
  l < t.length && r(t.substring(l), l, c);
}, ye = (t, n) => {
  let e = "";
  return Be(
    t,
    n,
    (r, u, i, a, o) => {
      e += o;
    },
    (r) => {
      e += r;
    }
  ), e;
}, ie = (t, n, e, r = "START") => {
  if (typeof e != "number")
    return e;
  let u;
  return Be(t, n, (o, l, c, f, g, E, C) => {
    u === void 0 && c + g.length > e && (r === "NULL" ? u = null : u = l + (r === "END" ? o.length : 0));
  }, (o, l, c) => {
    u === void 0 && c + o.length >= e && (u = l + e - c);
  }), u === void 0 ? t.length : u;
}, Ie = (t, n, e, r) => t.substring(0, n) + r + t.substring(e), qr = (t, n, { selectionStartBefore: e, selectionEndBefore: r, selectionEndAfter: u }, i) => {
  let a = ye(t, i), o = a.length - n.length;
  e === "undefined" && (e = u + o), r === "undefined" && (r = e), e === r && r === u && a.length === n.length && (e = e - 1);
  let l = n.slice(e, u), c = Math.min(e, u), f = r;
  e === u && (f = Math.max(r, e + o));
  let g = ie(t, i, c, "START"), E = ie(t, i, f, "END"), C = ie(t, i, c, "NULL"), O = ie(t, i, f, "NULL"), A = C === null || O === null, F = Ie(t, g, E, l);
  if (!A) {
    let S = ye(F, i);
    if (S !== n) {
      for (c = 0; n[c] === S[c]; )
        c++;
      l = n.slice(c, u), f = a.lastIndexOf(
        n.substring(u)
      ), g = ie(t, i, c, "START"), E = ie(t, i, f, "END"), F = Ie(t, g, E, l);
    }
  }
  return F;
}, wt = (t, n, e) => {
  let r = e, u = !1;
  if (Be(t, n, (a, o, l, c, f, g, E) => {
    l <= e && l + f.length > e && (r = l, u = !0);
  }), u)
    return r;
}, je = (t, n) => {
  const e = [];
  return Be(
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
}, Xt = (t, n) => `${t}-${n}`, Ne = (t) => Object.values(t).reduce(
  (n, { results: e }) => n + e.length,
  0
), Hr = (t, n) => {
  const e = je(t, n), r = e[e.length - 1];
  return r ? r.plainTextIndex + r.display.length : 0;
}, Ur = (t) => {
  const n = qe(t), e = t[t.indexOf(de.display) + de.display.length], r = t[t.indexOf(de.id) + de.id.length];
  return new RegExp(
    n.replace(
      de.display,
      `([^${qe(e || "")}]+?)`
    ).replace(de.id, `([^${qe(r || "")}]+?)`)
  );
}, he = (t) => Me.toArray(t).map(
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
}, Vr = (t, n, e) => t.replace(de.id, n).replace(de.display, e), Kr = [
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
], Jr = (t) => {
  let n = t;
  return Kr.forEach((e) => {
    n = n.replace(
      e.letters,
      e.base
    );
  }), n;
}, _t = (t) => Jr(t).toLowerCase(), Qt = (t, n, e) => e ? _t(t).indexOf(_t(n)) : t.toLowerCase().indexOf(n.toLowerCase()), Gr = () => !!document.documentMode, it = (t) => typeof t == "number", Xr = (t) => t === Object(t) ? Object.keys(t) : [], Qr = (t, ...n) => {
  const e = [].concat(...n);
  return Object.keys(t).reduce((r, u) => (t.hasOwnProperty(u) && !e.includes(u) && t[u] !== void 0 && (r[u] = t[u]), r), {});
};
function $e(t, n, e) {
  return n in t ? Object.defineProperty(t, n, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[n] = e, t;
}
function ot(t, n) {
  (n == null || n > t.length) && (n = t.length);
  for (var e = 0, r = new Array(n); e < n; e++)
    r[e] = t[e];
  return r;
}
function Zr(t) {
  if (Array.isArray(t))
    return ot(t);
}
function en(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
    return Array.from(t);
}
function tn(t, n) {
  if (t) {
    if (typeof t == "string")
      return ot(t, n);
    var e = Object.prototype.toString.call(t).slice(8, -1);
    if (e === "Object" && t.constructor && (e = t.constructor.name), e === "Map" || e === "Set")
      return Array.from(t);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
      return ot(t, n);
  }
}
function rn() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ge(t) {
  return Zr(t) || en(t) || tn(t) || rn();
}
var Re = function(n) {
  return n === Object(n) ? Object.keys(n) : [];
}, Zt = function(n) {
  return n === Object(n) ? Object.values(n) : [];
};
function er(t, n) {
  var e = Object.assign({}, t);
  return He(t) && He(n) && Re(n).forEach(function(r) {
    He(n[r]) ? r in t ? e[r] = er(t[r], n[r]) : Object.assign(e, $e({}, r, n[r])) : Object.assign(e, $e({}, r, n[r]));
  }), e;
}
var at = function(n) {
  for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), u = 1; u < e; u++)
    r[u - 1] = arguments[u];
  return r.reduce(function(i, a) {
    return er(i, a);
  }, n);
}, nn = function(n, e) {
  var r = Object.assign({}, n);
  if (e)
    for (var u = 0; u < e.length; u++)
      delete r[e[u]];
  return r;
}, He = function(n) {
  return n === Object(n) && !(n instanceof Date) && !Array.isArray(n);
}, sn = function(n) {
  return (n || []).filter(Boolean);
}, ft = function(n) {
  return n[0] === "&";
}, un = function(n) {
  return !ft(n);
}, jt = function(n) {
  return n.replace(/-(\w)/g, function(e, r) {
    return r.toUpperCase();
  });
}, on = function(n) {
  for (var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r = Re(n), u = {}, i = 0, a = r.length; i < a; i += 1) {
    var o = r[i], l = Object.prototype.toString.call(n[o]) !== "[object Object]" || // style defs
    o[0] === ":" || // pseudo selectors
    o[0] === "@" || // @media / @keyframes / @supports / @font-face
    e.indexOf(o) >= 0;
    l && (u[o] = n[o]);
  }
  return u;
}, tr = function(n, e) {
  for (var r = e.map(jt), u = Re(n), i = {}, a = 0, o = u.length; a < o; a += 1) {
    var l = u[a];
    (e.indexOf(l) >= 0 || r.indexOf(jt(l)) >= 0) && (i[l] = n[l]);
  }
  return i;
}, an = function t(n, e) {
  for (var r = at.apply(void 0, [{}, nn(n, e)].concat(ge(Zt(tr(n, e))))), u = Re(r).filter(ft), i = 0, a = u.length; i < a; i += 1) {
    var o = u[i], l = t(r[o], e);
    e.indexOf(o) >= 0 ? (delete r[o], r = at({}, r, l)) : r[o] = l;
  }
  return r;
};
function It(t, n) {
  var e = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    n && (r = r.filter(function(u) {
      return Object.getOwnPropertyDescriptor(t, u).enumerable;
    })), e.push.apply(e, r);
  }
  return e;
}
function Mt(t) {
  for (var n = 1; n < arguments.length; n++) {
    var e = arguments[n] != null ? arguments[n] : {};
    n % 2 ? It(Object(e), !0).forEach(function(r) {
      $e(t, r, e[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : It(Object(e)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
    });
  }
  return t;
}
var ln = ["animationName"], cn = function(n) {
  var e = n.style, r = n.className;
  return Mt(Mt({}, e ? {
    style: on(e, ln)
  } : {}), r ? {
    className: r
  } : {});
};
const rr = cn;
var nr = /* @__PURE__ */ jr(rr);
nr.Provider;
var fn = function(n) {
  if (n) {
    if (typeof n == "string")
      return [n];
    if (!Array.isArray(n)) {
      var e = n;
      return Re(n).reduce(function(r, u) {
        return r.concat(e[u] ? [u] : []);
      }, []);
    }
  } else
    return [];
  return n;
};
const sr = fn;
var dn = {}, pn = function(n) {
  return function(e, r) {
    var u = r || dn;
    n.memoize = n.memoize || /* @__PURE__ */ new WeakMap();
    var i;
    n.memoize.has(u) ? i = n.memoize.get(u) : (i = {}, n.memoize.set(u, i));
    var a = sr(e).join(" ");
    return a in i ? i[a] : i[a] = n(e || [], r);
  };
};
const gn = pn;
function $t(t, n) {
  var e = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    n && (r = r.filter(function(u) {
      return Object.getOwnPropertyDescriptor(t, u).enumerable;
    })), e.push.apply(e, r);
  }
  return e;
}
function Oe(t) {
  for (var n = 1; n < arguments.length; n++) {
    var e = arguments[n] != null ? arguments[n] : {};
    n % 2 ? $t(Object(e), !0).forEach(function(r) {
      $e(t, r, e[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : $t(Object(e)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
    });
  }
  return t;
}
var hn = function(n) {
  var e = n && Re(n)[0];
  return e && e.split("__")[0].split("--")[0];
}, En = function(n, e, r) {
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
  var n = t.style, e = t.className, r = t.classNames, u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : rr, i = e || hn(r) || (n == null ? void 0 : n.className), a = typeof n == "function" ? n : gn(function(g, E) {
    var C = sr(g);
    De(Array.isArray(C), "First parameter must be a string, an array of strings, a plain object with boolean values, or a falsy value."), De(!E || He(E), "Optional second parameter must be a plain object.");
    var O = C.filter(ft), A = C.filter(un), F = A.length > 0 ? function(D) {
      return Zt(tr(D, A));
    } : function(D) {
      return [D];
    }, S = function() {
      var U = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return F(an(U, O));
    }, w = En(i, A, O);
    return ur(Oe(Oe(Oe({}, (n || E) && {
      style: at.apply(void 0, [{}].concat(ge(S(E)), ge(S(n))))
    }), w && {
      className: w.join(" ")
    }), r && {
      classNames: r
    }), u);
  }), o = Oe({}, typeof n == "function" ? n : {
    style: n
  }), l = ge(new Set([].concat(ge(o.className ? o.className.split(" ") : []), ge(i ? i.split(" ") : [])))), c = r ? sn(l.map(function(g) {
    return r[g];
  })) : l, f = u(Oe(Oe({}, o), c.length > 0 ? {
    className: c.join(" ")
  } : {}));
  return Object.assign(a, f), a;
}
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
function _e(t) {
  for (var n = 1; n < arguments.length; n++) {
    var e = arguments[n] != null ? arguments[n] : {};
    n % 2 ? Bt(Object(e), !0).forEach(function(r) {
      $e(t, r, e[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : Bt(Object(e)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
    });
  }
  return t;
}
var vn = function() {
  for (var n = arguments.length, e = new Array(n), r = 0; r < n; r++)
    e[r] = arguments[r];
  return e.reduce(function(u, i) {
    return _e(_e(_e({}, u), typeof i == "function" ? i : {}), {}, {
      style: _e(_e({}, u.style), typeof i == "function" ? i.style : i)
    });
  }, {});
};
const yn = vn;
var mn = function(n, e, r) {
  var u = e.style, i = e.className, a = e.classNames, o = Ir(nr), l = Mr(function() {
    return ur({
      style: u,
      className: i,
      classNames: a
    }, o);
  }, [u, i, a, o]);
  return l(r, n);
};
const dt = mn;
function Ue(t, n) {
  return (r) => {
    const u = ({
      style: a,
      className: o,
      classNames: l,
      ...c
    }) => {
      const f = n ? n(c) : void 0, g = dt(
        t,
        { style: a, className: o, classNames: l },
        f
      );
      return /* @__PURE__ */ V.jsx(r, { ...c, style: g });
    }, i = r.displayName || r.name || "Component";
    return u.displayName = `defaultStyle(${i})`, me.forwardRef((a, o) => u({ ...a, ref: o }));
  };
}
var lt = { exports: {} }, We = { exports: {} }, q = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lt;
function bn() {
  if (Lt)
    return q;
  Lt = 1;
  var t = typeof Symbol == "function" && Symbol.for, n = t ? Symbol.for("react.element") : 60103, e = t ? Symbol.for("react.portal") : 60106, r = t ? Symbol.for("react.fragment") : 60107, u = t ? Symbol.for("react.strict_mode") : 60108, i = t ? Symbol.for("react.profiler") : 60114, a = t ? Symbol.for("react.provider") : 60109, o = t ? Symbol.for("react.context") : 60110, l = t ? Symbol.for("react.async_mode") : 60111, c = t ? Symbol.for("react.concurrent_mode") : 60111, f = t ? Symbol.for("react.forward_ref") : 60112, g = t ? Symbol.for("react.suspense") : 60113, E = t ? Symbol.for("react.suspense_list") : 60120, C = t ? Symbol.for("react.memo") : 60115, O = t ? Symbol.for("react.lazy") : 60116, A = t ? Symbol.for("react.block") : 60121, F = t ? Symbol.for("react.fundamental") : 60117, S = t ? Symbol.for("react.responder") : 60118, w = t ? Symbol.for("react.scope") : 60119;
  function D(h) {
    if (typeof h == "object" && h !== null) {
      var se = h.$$typeof;
      switch (se) {
        case n:
          switch (h = h.type, h) {
            case l:
            case c:
            case r:
            case i:
            case u:
            case g:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case o:
                case f:
                case O:
                case C:
                case a:
                  return h;
                default:
                  return se;
              }
          }
        case e:
          return se;
      }
    }
  }
  function U(h) {
    return D(h) === c;
  }
  return q.AsyncMode = l, q.ConcurrentMode = c, q.ContextConsumer = o, q.ContextProvider = a, q.Element = n, q.ForwardRef = f, q.Fragment = r, q.Lazy = O, q.Memo = C, q.Portal = e, q.Profiler = i, q.StrictMode = u, q.Suspense = g, q.isAsyncMode = function(h) {
    return U(h) || D(h) === l;
  }, q.isConcurrentMode = U, q.isContextConsumer = function(h) {
    return D(h) === o;
  }, q.isContextProvider = function(h) {
    return D(h) === a;
  }, q.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === n;
  }, q.isForwardRef = function(h) {
    return D(h) === f;
  }, q.isFragment = function(h) {
    return D(h) === r;
  }, q.isLazy = function(h) {
    return D(h) === O;
  }, q.isMemo = function(h) {
    return D(h) === C;
  }, q.isPortal = function(h) {
    return D(h) === e;
  }, q.isProfiler = function(h) {
    return D(h) === i;
  }, q.isStrictMode = function(h) {
    return D(h) === u;
  }, q.isSuspense = function(h) {
    return D(h) === g;
  }, q.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === r || h === c || h === i || h === u || h === g || h === E || typeof h == "object" && h !== null && (h.$$typeof === O || h.$$typeof === C || h.$$typeof === a || h.$$typeof === o || h.$$typeof === f || h.$$typeof === F || h.$$typeof === S || h.$$typeof === w || h.$$typeof === A);
  }, q.typeOf = D, q;
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
var kt;
function Cn() {
  return kt || (kt = 1, process.env.NODE_ENV !== "production" && function() {
    var t = typeof Symbol == "function" && Symbol.for, n = t ? Symbol.for("react.element") : 60103, e = t ? Symbol.for("react.portal") : 60106, r = t ? Symbol.for("react.fragment") : 60107, u = t ? Symbol.for("react.strict_mode") : 60108, i = t ? Symbol.for("react.profiler") : 60114, a = t ? Symbol.for("react.provider") : 60109, o = t ? Symbol.for("react.context") : 60110, l = t ? Symbol.for("react.async_mode") : 60111, c = t ? Symbol.for("react.concurrent_mode") : 60111, f = t ? Symbol.for("react.forward_ref") : 60112, g = t ? Symbol.for("react.suspense") : 60113, E = t ? Symbol.for("react.suspense_list") : 60120, C = t ? Symbol.for("react.memo") : 60115, O = t ? Symbol.for("react.lazy") : 60116, A = t ? Symbol.for("react.block") : 60121, F = t ? Symbol.for("react.fundamental") : 60117, S = t ? Symbol.for("react.responder") : 60118, w = t ? Symbol.for("react.scope") : 60119;
    function D(y) {
      return typeof y == "string" || typeof y == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      y === r || y === c || y === i || y === u || y === g || y === E || typeof y == "object" && y !== null && (y.$$typeof === O || y.$$typeof === C || y.$$typeof === a || y.$$typeof === o || y.$$typeof === f || y.$$typeof === F || y.$$typeof === S || y.$$typeof === w || y.$$typeof === A);
    }
    function U(y) {
      if (typeof y == "object" && y !== null) {
        var le = y.$$typeof;
        switch (le) {
          case n:
            var Ce = y.type;
            switch (Ce) {
              case l:
              case c:
              case r:
              case i:
              case u:
              case g:
                return Ce;
              default:
                var ve = Ce && Ce.$$typeof;
                switch (ve) {
                  case o:
                  case f:
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
    var h = l, se = c, fe = o, G = a, Z = n, oe = f, N = r, J = O, z = C, X = e, re = i, te = u, ae = g, Ee = !1;
    function be(y) {
      return Ee || (Ee = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), p(y) || U(y) === l;
    }
    function p(y) {
      return U(y) === c;
    }
    function b(y) {
      return U(y) === o;
    }
    function j(y) {
      return U(y) === a;
    }
    function _(y) {
      return typeof y == "object" && y !== null && y.$$typeof === n;
    }
    function R(y) {
      return U(y) === f;
    }
    function L(y) {
      return U(y) === r;
    }
    function P(y) {
      return U(y) === O;
    }
    function x(y) {
      return U(y) === C;
    }
    function I(y) {
      return U(y) === e;
    }
    function W(y) {
      return U(y) === i;
    }
    function M(y) {
      return U(y) === u;
    }
    function ne(y) {
      return U(y) === g;
    }
    H.AsyncMode = h, H.ConcurrentMode = se, H.ContextConsumer = fe, H.ContextProvider = G, H.Element = Z, H.ForwardRef = oe, H.Fragment = N, H.Lazy = J, H.Memo = z, H.Portal = X, H.Profiler = re, H.StrictMode = te, H.Suspense = ae, H.isAsyncMode = be, H.isConcurrentMode = p, H.isContextConsumer = b, H.isContextProvider = j, H.isElement = _, H.isForwardRef = R, H.isFragment = L, H.isLazy = P, H.isMemo = x, H.isPortal = I, H.isProfiler = W, H.isStrictMode = M, H.isSuspense = ne, H.isValidElementType = D, H.typeOf = U;
  }()), H;
}
var Nt;
function ir() {
  return Nt || (Nt = 1, process.env.NODE_ENV === "production" ? We.exports = bn() : We.exports = Cn()), We.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Xe, Wt;
function Sn() {
  if (Wt)
    return Xe;
  Wt = 1;
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
  return Xe = u() ? Object.assign : function(i, a) {
    for (var o, l = r(i), c, f = 1; f < arguments.length; f++) {
      o = Object(arguments[f]);
      for (var g in o)
        n.call(o, g) && (l[g] = o[g]);
      if (t) {
        c = t(o);
        for (var E = 0; E < c.length; E++)
          e.call(o, c[E]) && (l[c[E]] = o[c[E]]);
      }
    }
    return l;
  }, Xe;
}
var Qe, Yt;
function pt() {
  if (Yt)
    return Qe;
  Yt = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Qe = t, Qe;
}
var Ze, qt;
function or() {
  return qt || (qt = 1, Ze = Function.call.bind(Object.prototype.hasOwnProperty)), Ze;
}
var et, Ht;
function An() {
  if (Ht)
    return et;
  Ht = 1;
  var t = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var n = pt(), e = {}, r = or();
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
      for (var f in i)
        if (r(i, f)) {
          var g;
          try {
            if (typeof i[f] != "function") {
              var E = Error(
                (l || "React class") + ": " + o + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw E.name = "Invariant Violation", E;
            }
            g = i[f](a, f, l, o, null, n);
          } catch (O) {
            g = O;
          }
          if (g && !(g instanceof Error) && t(
            (l || "React class") + ": type specification of " + o + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof g + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
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
  }, et = u, et;
}
var tt, Ut;
function On() {
  if (Ut)
    return tt;
  Ut = 1;
  var t = ir(), n = Sn(), e = pt(), r = or(), u = An(), i = function() {
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
  return tt = function(o, l) {
    var c = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function g(p) {
      var b = p && (c && p[c] || p[f]);
      if (typeof b == "function")
        return b;
    }
    var E = "<<anonymous>>", C = {
      array: S("array"),
      bigint: S("bigint"),
      bool: S("boolean"),
      func: S("function"),
      number: S("number"),
      object: S("object"),
      string: S("string"),
      symbol: S("symbol"),
      any: w(),
      arrayOf: D,
      element: U(),
      elementType: h(),
      instanceOf: se,
      node: oe(),
      objectOf: G,
      oneOf: fe,
      oneOfType: Z,
      shape: J,
      exact: z
    };
    function O(p, b) {
      return p === b ? p !== 0 || 1 / p === 1 / b : p !== p && b !== b;
    }
    function A(p, b) {
      this.message = p, this.data = b && typeof b == "object" ? b : {}, this.stack = "";
    }
    A.prototype = Error.prototype;
    function F(p) {
      if (process.env.NODE_ENV !== "production")
        var b = {}, j = 0;
      function _(L, P, x, I, W, M, ne) {
        if (I = I || E, M = M || x, ne !== e) {
          if (l) {
            var y = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw y.name = "Invariant Violation", y;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var le = I + ":" + x;
            !b[le] && // Avoid spamming the console because they are often not actionable except for lib authors
            j < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + M + "` prop on `" + I + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), b[le] = !0, j++);
          }
        }
        return P[x] == null ? L ? P[x] === null ? new A("The " + W + " `" + M + "` is marked as required " + ("in `" + I + "`, but its value is `null`.")) : new A("The " + W + " `" + M + "` is marked as required in " + ("`" + I + "`, but its value is `undefined`.")) : null : p(P, x, I, W, M);
      }
      var R = _.bind(null, !1);
      return R.isRequired = _.bind(null, !0), R;
    }
    function S(p) {
      function b(j, _, R, L, P, x) {
        var I = j[_], W = te(I);
        if (W !== p) {
          var M = ae(I);
          return new A(
            "Invalid " + L + " `" + P + "` of type " + ("`" + M + "` supplied to `" + R + "`, expected ") + ("`" + p + "`."),
            { expectedType: p }
          );
        }
        return null;
      }
      return F(b);
    }
    function w() {
      return F(a);
    }
    function D(p) {
      function b(j, _, R, L, P) {
        if (typeof p != "function")
          return new A("Property `" + P + "` of component `" + R + "` has invalid PropType notation inside arrayOf.");
        var x = j[_];
        if (!Array.isArray(x)) {
          var I = te(x);
          return new A("Invalid " + L + " `" + P + "` of type " + ("`" + I + "` supplied to `" + R + "`, expected an array."));
        }
        for (var W = 0; W < x.length; W++) {
          var M = p(x, W, R, L, P + "[" + W + "]", e);
          if (M instanceof Error)
            return M;
        }
        return null;
      }
      return F(b);
    }
    function U() {
      function p(b, j, _, R, L) {
        var P = b[j];
        if (!o(P)) {
          var x = te(P);
          return new A("Invalid " + R + " `" + L + "` of type " + ("`" + x + "` supplied to `" + _ + "`, expected a single ReactElement."));
        }
        return null;
      }
      return F(p);
    }
    function h() {
      function p(b, j, _, R, L) {
        var P = b[j];
        if (!t.isValidElementType(P)) {
          var x = te(P);
          return new A("Invalid " + R + " `" + L + "` of type " + ("`" + x + "` supplied to `" + _ + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return F(p);
    }
    function se(p) {
      function b(j, _, R, L, P) {
        if (!(j[_] instanceof p)) {
          var x = p.name || E, I = be(j[_]);
          return new A("Invalid " + L + " `" + P + "` of type " + ("`" + I + "` supplied to `" + R + "`, expected ") + ("instance of `" + x + "`."));
        }
        return null;
      }
      return F(b);
    }
    function fe(p) {
      if (!Array.isArray(p))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), a;
      function b(j, _, R, L, P) {
        for (var x = j[_], I = 0; I < p.length; I++)
          if (O(x, p[I]))
            return null;
        var W = JSON.stringify(p, function(ne, y) {
          var le = ae(y);
          return le === "symbol" ? String(y) : y;
        });
        return new A("Invalid " + L + " `" + P + "` of value `" + String(x) + "` " + ("supplied to `" + R + "`, expected one of " + W + "."));
      }
      return F(b);
    }
    function G(p) {
      function b(j, _, R, L, P) {
        if (typeof p != "function")
          return new A("Property `" + P + "` of component `" + R + "` has invalid PropType notation inside objectOf.");
        var x = j[_], I = te(x);
        if (I !== "object")
          return new A("Invalid " + L + " `" + P + "` of type " + ("`" + I + "` supplied to `" + R + "`, expected an object."));
        for (var W in x)
          if (r(x, W)) {
            var M = p(x, W, R, L, P + "." + W, e);
            if (M instanceof Error)
              return M;
          }
        return null;
      }
      return F(b);
    }
    function Z(p) {
      if (!Array.isArray(p))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var b = 0; b < p.length; b++) {
        var j = p[b];
        if (typeof j != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + Ee(j) + " at index " + b + "."
          ), a;
      }
      function _(R, L, P, x, I) {
        for (var W = [], M = 0; M < p.length; M++) {
          var ne = p[M], y = ne(R, L, P, x, I, e);
          if (y == null)
            return null;
          y.data && r(y.data, "expectedType") && W.push(y.data.expectedType);
        }
        var le = W.length > 0 ? ", expected one of type [" + W.join(", ") + "]" : "";
        return new A("Invalid " + x + " `" + I + "` supplied to " + ("`" + P + "`" + le + "."));
      }
      return F(_);
    }
    function oe() {
      function p(b, j, _, R, L) {
        return X(b[j]) ? null : new A("Invalid " + R + " `" + L + "` supplied to " + ("`" + _ + "`, expected a ReactNode."));
      }
      return F(p);
    }
    function N(p, b, j, _, R) {
      return new A(
        (p || "React class") + ": " + b + " type `" + j + "." + _ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + R + "`."
      );
    }
    function J(p) {
      function b(j, _, R, L, P) {
        var x = j[_], I = te(x);
        if (I !== "object")
          return new A("Invalid " + L + " `" + P + "` of type `" + I + "` " + ("supplied to `" + R + "`, expected `object`."));
        for (var W in p) {
          var M = p[W];
          if (typeof M != "function")
            return N(R, L, P, W, ae(M));
          var ne = M(x, W, R, L, P + "." + W, e);
          if (ne)
            return ne;
        }
        return null;
      }
      return F(b);
    }
    function z(p) {
      function b(j, _, R, L, P) {
        var x = j[_], I = te(x);
        if (I !== "object")
          return new A("Invalid " + L + " `" + P + "` of type `" + I + "` " + ("supplied to `" + R + "`, expected `object`."));
        var W = n({}, j[_], p);
        for (var M in W) {
          var ne = p[M];
          if (r(p, M) && typeof ne != "function")
            return N(R, L, P, M, ae(ne));
          if (!ne)
            return new A(
              "Invalid " + L + " `" + P + "` key `" + M + "` supplied to `" + R + "`.\nBad object: " + JSON.stringify(j[_], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(p), null, "  ")
            );
          var y = ne(x, M, R, L, P + "." + M, e);
          if (y)
            return y;
        }
        return null;
      }
      return F(b);
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
            var j = b.call(p), _;
            if (b !== p.entries) {
              for (; !(_ = j.next()).done; )
                if (!X(_.value))
                  return !1;
            } else
              for (; !(_ = j.next()).done; ) {
                var R = _.value;
                if (R && !X(R[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function re(p, b) {
      return p === "symbol" ? !0 : b ? b["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && b instanceof Symbol : !1;
    }
    function te(p) {
      var b = typeof p;
      return Array.isArray(p) ? "array" : p instanceof RegExp ? "object" : re(b, p) ? "symbol" : b;
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
    function be(p) {
      return !p.constructor || !p.constructor.name ? E : p.constructor.name;
    }
    return C.checkPropTypes = u, C.resetWarningCache = u.resetWarningCache, C.PropTypes = C, C;
  }, tt;
}
var rt, zt;
function Fn() {
  if (zt)
    return rt;
  zt = 1;
  var t = pt();
  function n() {
  }
  function e() {
  }
  return e.resetWarningCache = n, rt = function() {
    function r(a, o, l, c, f, g) {
      if (g !== t) {
        var E = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw E.name = "Invariant Violation", E;
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
  }, rt;
}
if (process.env.NODE_ENV !== "production") {
  var Tn = ir(), Dn = !0;
  lt.exports = On()(Tn.isElement, Dn);
} else
  lt.exports = Fn()();
var Rn = lt.exports;
const m = /* @__PURE__ */ Jt(Rn), Pn = (t, n) => (t.hasOwnProperty(n) ? t[n]++ : t[n] = 0, n + "_" + t[n]);
function ar({
  selectionStart: t,
  selectionEnd: n,
  value: e = "",
  onCaretPositionChange: r,
  containerRef: u,
  children: i,
  singleLine: a,
  style: o
}) {
  const [l, c] = st({
    left: void 0,
    top: void 0
  }), [f, g] = st();
  Kt(() => {
    E();
  });
  const E = () => {
    if (!f)
      return;
    const { offsetLeft: G, offsetTop: Z } = f;
    if (l.left === G && l.top === Z)
      return;
    const oe = { left: G, top: Z };
    c(oe), r(oe);
  }, C = he(i);
  let O;
  n === t && (O = ie(
    e,
    C,
    t,
    "START"
  ));
  const A = [], F = {};
  let S = A, w = 0;
  const D = (G, Z, oe) => {
    if (it(O) && O >= Z && O <= Z + G.length) {
      const N = O - Z;
      S.push(
        h(G.substring(0, N), w)
      ), S = [
        h(G.substring(N), w)
      ];
    } else
      S.push(h(G, w));
    w++;
  }, U = (G, Z, oe, N, J, z, X) => {
    const re = Pn(F, N);
    S.push(
      se(N, J, z, re)
    );
  }, h = (G, Z) => /* @__PURE__ */ Dt("span", { ...o("substring"), key: Z }, G), se = (G, Z, oe, N) => {
    const J = { id: G, display: Z, key: N }, z = Me.toArray(i)[oe];
    return me.cloneElement(z, J);
  }, fe = (G) => /* @__PURE__ */ Dt("span", { ...o("caret"), ref: g, key: "caret" }, G);
  return Be(e, C, U, D), S.push(" "), S !== A && A.push(fe(S)), /* @__PURE__ */ V.jsx("div", { ...o, ref: u, children: A });
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
const xn = Ue(
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
), wn = xn(ar);
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
  className: f,
  classNames: g
}) {
  const E = { onClick: u, onMouseEnter: i }, C = () => {
    let F = O(), S = A(F);
    return o ? o(
      l,
      a,
      S,
      r,
      n
    ) : S;
  }, O = () => {
    if (typeof l == "string")
      return l;
    let { id: F, display: S } = l;
    return F === void 0 || !S ? F : S;
  }, A = (F) => {
    let S = Qt(F, a, e);
    return S === -1 ? /* @__PURE__ */ V.jsx("span", { ...c("display"), children: F }) : /* @__PURE__ */ V.jsxs("span", { ...c("display"), children: [
      F.substring(0, S),
      /* @__PURE__ */ V.jsx("b", { ...c("highlight"), children: F.substring(S, S + a.length) }),
      F.substring(S + a.length)
    ] });
  };
  return /* @__PURE__ */ V.jsx("li", { id: t, role: "option", "aria-selected": n, ...E, ...c, children: C() });
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
const _n = Ue(
  {
    cursor: "pointer"
  },
  (t) => ({ "&focused": t.focused })
), jn = _n(lr), Fe = {
  borderRadius: "1.25rem",
  height: "0.5rem",
  marginBottom: "0.5rem",
  background: "linear-gradient(to right, #99A0A3 0%, #707679 20%, #464A4D 40%, #464A4D 60%, #707679 80% , #99A0A3 100%)",
  backgroundSize: "1000px",
  animation: "placeholderShimmer 1.2s infinite linear",
  amimationFillMode: "forwards"
};
function In() {
  return /* @__PURE__ */ V.jsxs(
    "div",
    {
      style: {
        display: "flex",
        padding: "1rem",
        alignItems: "center"
      },
      children: [
        /* @__PURE__ */ V.jsx(
          "div",
          {
            style: {
              background: Fe.background,
              backgroundSize: Fe.backgroundSize,
              width: "2rem",
              height: "2rem",
              borderRadius: "50%",
              animation: Fe.animation
            }
          }
        ),
        /* @__PURE__ */ V.jsxs(
          "div",
          {
            style: {
              display: "block",
              alignItems: "center",
              marginLeft: "0.5rem"
            },
            children: [
              /* @__PURE__ */ V.jsx("div", { style: { ...Fe, width: "12rem" } }),
              /* @__PURE__ */ V.jsx("div", { style: { ...Fe, width: "10rem" } }),
              /* @__PURE__ */ V.jsx("div", { style: { ...Fe, width: "8rem" } })
            ]
          }
        )
      ]
    }
  );
}
function Mn({
  style: t,
  className: n,
  classNames: e
}) {
  const r = dt($n, { style: t, className: n, classNames: e }), u = r("spinner");
  return /* @__PURE__ */ V.jsx("div", { ...r, children: /* @__PURE__ */ V.jsx("div", { ...u, children: /* @__PURE__ */ V.jsx(V.Fragment, { children: [...Array(4)].map((i) => /* @__PURE__ */ V.jsx(In, {}, i)) }) }) });
}
const $n = {};
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
  isOpened: f,
  onSelect: g = () => null,
  ignoreAccents: E,
  containerRef: C,
  children: O,
  style: A,
  customSuggestionsContainer: F,
  onMouseDown: S,
  onMouseEnter: w
}) {
  const [D, U] = st(void 0);
  Kt(() => {
    if (!D || D.offsetHeight >= D.scrollHeight || !l)
      return;
    const N = D.scrollTop;
    let { top: J, bottom: z } = D.children[r].getBoundingClientRect();
    const { top: X } = D.getBoundingClientRect();
    J = J - X + N, z = z - X + N, J < N ? D.scrollTop = J : z > D.offsetHeight && (D.scrollTop = z - D.offsetHeight);
  }, [r, l, D]);
  const h = () => {
    const N = /* @__PURE__ */ V.jsx(
      "ul",
      {
        ref: U,
        id: t,
        role: "listbox",
        "aria-label": e,
        ...A("list"),
        children: Object.values(n).reduce(
          (J, { results: z, queryInfo: X }) => [
            ...J,
            ...z.map(
              (re, te) => se(re, X, J.length + te)
            )
          ],
          []
        )
      }
    );
    return F ? F(N) : N;
  }, se = (N, J, z) => {
    const X = z === r, { childIndex: re, query: te } = J, { renderSuggestion: ae } = Me.toArray(O)[re].props;
    return /* @__PURE__ */ V.jsx(
      jn,
      {
        style: A("item"),
        id: Xt(t, z),
        query: te,
        index: z,
        ignoreAccents: E,
        renderSuggestion: ae,
        suggestion: N,
        focused: X,
        onClick: () => Z(N, J),
        onMouseEnter: () => G(z)
      },
      `${re}-${oe(N)}`
    );
  }, fe = () => {
    if (c)
      return /* @__PURE__ */ V.jsx(Mn, { style: A("loadingIndicator") });
  }, G = (N, J) => {
    w && w(N);
  }, Z = (N, J) => {
    g(N, J);
  }, oe = (N) => typeof N == "string" ? N : N.id;
  return f ? /* @__PURE__ */ V.jsxs(
    "div",
    {
      ...yn({ position: u || "absolute", left: i, right: a, top: o }, A),
      onMouseDown: S,
      ref: C,
      children: [
        h(),
        fe()
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
const Bn = Ue({
  zIndex: 1,
  backgroundColor: "white",
  marginTop: 14,
  minWidth: 100,
  list: {
    margin: 0,
    padding: 0,
    listStyleType: "none"
  }
}), Ln = Bn(cr), kn = function(t, n = {}) {
  if (t instanceof RegExp)
    return t;
  {
    const { allowSpaceInQuery: e } = n, r = qe(t);
    return new RegExp(
      `(?:^|\\s)(${r}([^${e ? "" : "\\s"}${r}]*))$`
    );
  }
}, Nn = function(t, n) {
  return t instanceof Array ? function(e, r) {
    const u = [];
    for (let i = 0, a = t.length; i < a; ++i) {
      const o = t[i].display || t[i].id;
      Qt(o, e, n) >= 0 && u.push(t[i]);
    }
    return u;
  } : t;
}, Te = { TAB: 9, RETURN: 13, ESC: 27, UP: 38, DOWN: 40 };
let Ye = !1;
const Vt = {
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
class ct extends me.Component {
  constructor(e) {
    super(e);
    $(this, "setContainerElement", (e) => {
      this.containerElement = e;
    });
    $(this, "getInputProps", () => {
      let { readOnly: e, disabled: r, style: u } = this.props;
      return {
        ...Qr(
          this.props,
          ["style", "classNames", "className"],
          // substyle props
          Xr(Vt)
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
    $(this, "renderControl", () => {
      let { singleLine: e, style: r } = this.props, u = this.getInputProps();
      return /* @__PURE__ */ V.jsxs("div", { ...r("control"), children: [
        this.renderHighlighter(),
        e ? this.renderInput(u) : this.renderTextarea(u)
      ] });
    });
    $(this, "renderInput", (e) => /* @__PURE__ */ V.jsx("input", { type: "text", ref: this.setInputRef, ...e }));
    $(this, "renderTextarea", (e) => /* @__PURE__ */ V.jsx("textarea", { autoFocus: !0, ref: this.setInputRef, ...e }));
    $(this, "setInputRef", (e) => {
      this.inputElement = e;
      const { inputRef: r } = this.props;
      typeof r == "function" ? r(e) : r && (r.current = e);
    });
    $(this, "setSuggestionsElement", (e) => {
      this.suggestionsElement = e;
    });
    $(this, "renderSuggestionsOverlay", () => {
      if (!it(this.state.selectionStart))
        return null;
      const { position: e, left: r, top: u, right: i } = this.state.suggestionsPosition, a = /* @__PURE__ */ V.jsx(
        Ln,
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
      return this.props.suggestionsPortalHost ? $r.createPortal(
        a,
        this.props.suggestionsPortalHost
      ) : a;
    });
    $(this, "renderHighlighter", () => {
      const { selectionStart: e, selectionEnd: r } = this.state, { singleLine: u, children: i, value: a, style: o } = this.props;
      return /* @__PURE__ */ V.jsx(
        wn,
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
    $(this, "setHighlighterElement", (e) => {
      this.highlighterElement = e;
    });
    $(this, "handleCaretPositionChange", (e) => {
      this.setState({ caretPosition: e });
    });
    // Returns the text to set as the value of the textarea with all markups removed
    $(this, "getPlainText", () => ye(
      this.props.value || "",
      he(this.props.children)
    ));
    $(this, "executeOnChange", (e, ...r) => {
      if (this.props.onChange)
        return this.props.onChange(e, ...r);
      if (this.props.valueLink)
        return this.props.valueLink.requestChange(e.target.value, ...r);
    });
    // Handle input element's change event
    $(this, "handleChange", (e) => {
      if (Ye = !1, Gr() && (document.activeElement && document.activeElement.contentDocument || document).activeElement !== e.target)
        return;
      const r = this.props.value || "", u = he(this.props.children);
      let i = e.target.value, a = qr(
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
      let o = e.target.selectionStart, l = e.target.selectionEnd, c = !1, f = wt(
        r,
        u,
        o
      );
      f !== void 0 && this.state.selectionEnd > f && (o = f + (e.nativeEvent.data ? e.nativeEvent.data.length : 0), l = o, c = !0), this.setState({
        selectionStart: o,
        selectionEnd: l,
        setSelectionAfterMentionChange: c
      });
      let g = je(a, u), E = { target: { value: a } };
      this.executeOnChange(E, a, i, g);
    });
    // Handle input element's select event
    $(this, "handleSelect", (e) => {
      if (this.setState({
        selectionStart: e.target.selectionStart,
        selectionEnd: e.target.selectionEnd
      }), Ye)
        return;
      const r = this.inputElement;
      e.target.selectionStart === e.target.selectionEnd ? this.updateMentionsQueries(r.value, e.target.selectionStart) : this.clearSuggestions(), this.updateHighlighterScroll(), this.props.onSelect(e);
    });
    $(this, "handleKeyDown", (e) => {
      if (Ne(this.state.suggestions) === 0 || !this.suggestionsElement) {
        this.props.onKeyDown(e);
        return;
      }
      switch (Object.values(Te).indexOf(e.keyCode) >= 0 && (e.preventDefault(), e.stopPropagation()), e.keyCode) {
        case Te.ESC: {
          this.clearSuggestions();
          return;
        }
        case Te.DOWN: {
          this.shiftFocus(1);
          return;
        }
        case Te.UP: {
          this.shiftFocus(-1);
          return;
        }
        case Te.RETURN: {
          this.selectFocused();
          return;
        }
        case Te.TAB: {
          this.selectFocused();
          return;
        }
        default:
          return;
      }
    });
    $(this, "shiftFocus", (e) => {
      const r = Ne(this.state.suggestions);
      this.setState({
        focusIndex: (r + this.state.focusIndex + e) % r,
        scrollFocusedIntoView: !0
      });
    });
    $(this, "selectFocused", () => {
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
    $(this, "handleBlur", (e) => {
      const r = this._suggestionsMouseDown;
      this._suggestionsMouseDown = !1, r || this.setState({
        selectionStart: null,
        selectionEnd: null
      }), window.setTimeout(() => {
        this.updateHighlighterScroll();
      }, 1), this.props.onBlur(e, r);
    });
    $(this, "handleSuggestionsMouseDown", (e) => {
      this._suggestionsMouseDown = !0;
    });
    $(this, "handleSuggestionsMouseEnter", (e) => {
      this.setState({
        focusIndex: e,
        scrollFocusedIntoView: !1
      });
    });
    $(this, "updateSuggestionsPosition", () => {
      let { caretPosition: e } = this.state;
      const {
        suggestionsPortalHost: r,
        allowSuggestionsAboveCursor: u,
        forceSuggestionsAboveCursor: i
      } = this.props;
      if (!e || !this.suggestionsElement)
        return;
      let a = this.suggestionsElement, o = this.highlighterElement;
      const l = o.getBoundingClientRect(), c = nt(o, "font-size"), f = {
        left: l.left + e.left,
        top: l.top + e.top + c
      }, g = Math.max(
        document.documentElement.clientHeight,
        window.innerHeight || 0
      );
      if (!a)
        return;
      let E = {};
      if (r) {
        E.position = "fixed";
        let C = f.left, O = f.top;
        C -= nt(a, "margin-left"), O -= nt(a, "margin-top"), C -= o.scrollLeft, O -= o.scrollTop;
        const A = Math.max(
          document.documentElement.clientWidth,
          window.innerWidth || 0
        );
        C + a.offsetWidth > A ? E.left = Math.max(0, A - a.offsetWidth) : E.left = C, u && O + a.offsetHeight > g && a.offsetHeight < O - c || i ? E.top = Math.max(0, O - a.offsetHeight - c) : E.top = O;
      } else {
        let C = e.left - o.scrollLeft, O = e.top - o.scrollTop;
        C + a.offsetWidth > this.containerElement.offsetWidth ? E.right = 0 : E.left = C, u && f.top - o.scrollTop + a.offsetHeight > g && a.offsetHeight < l.top - c - o.scrollTop || i ? E.top = O - a.offsetHeight - c : E.top = O;
      }
      E.left === this.state.suggestionsPosition.left && E.top === this.state.suggestionsPosition.top && E.position === this.state.suggestionsPosition.position || this.setState({
        suggestionsPosition: E
      });
    });
    $(this, "updateHighlighterScroll", () => {
      const e = this.inputElement, r = this.highlighterElement;
      !e || !r || (r.scrollLeft = e.scrollLeft, r.scrollTop = e.scrollTop, r.height = e.height);
    });
    $(this, "handleCompositionStart", () => {
      Ye = !0;
    });
    $(this, "handleCompositionEnd", () => {
      Ye = !1;
    });
    $(this, "setSelection", (e, r) => {
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
    $(this, "updateMentionsQueries", (e, r) => {
      this._queryId++, this.suggestions = {}, this.setState({
        suggestions: {}
      });
      const u = this.props.value || "", { children: i } = this.props, a = he(i), o = ie(
        u,
        a,
        r,
        "NULL"
      );
      if (o === null)
        return;
      const l = Hr(
        u.substring(0, o),
        a
      ), c = e.substring(
        l,
        r
      );
      me.Children.forEach(i, (f, g) => {
        if (!f)
          return;
        const E = kn(f.props.trigger, this.props), C = c.match(E);
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
    $(this, "clearSuggestions", () => {
      this._queryId++, this.suggestions = {}, this.setState({
        suggestions: {},
        focusIndex: 0
      });
    });
    $(this, "queryData", (e, r, u, i, a) => {
      const { children: o, ignoreAccents: l } = this.props, c = Me.toArray(o)[r], g = Nn(c.props.data, l)(
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
    $(this, "updateSuggestions", (e, r, u, i, a, o, l) => {
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
      const { focusIndex: c } = this.state, f = Ne(this.suggestions);
      this.setState({
        suggestions: this.suggestions,
        focusIndex: c >= f ? Math.max(f - 1, 0) : c
      });
    });
    $(this, "addMention", ({ id: e, display: r }, { childIndex: u, querySequenceStart: i, querySequenceEnd: a, plainTextValue: o }) => {
      const l = this.props.value || "", c = he(this.props.children), f = Me.toArray(this.props.children)[u], {
        markup: g,
        displayTransform: E,
        appendSpaceOnAdd: C,
        onAdd: O
      } = f.props, A = ie(l, c, i, "START"), F = A + a - i;
      let S = Vr(g, e, r);
      C && (S += " ");
      const w = Ie(l, A, F, S);
      this.inputElement.focus();
      let D = E(e, r);
      C && (D += " ");
      const U = i + D.length;
      this.setState({
        selectionStart: U,
        selectionEnd: U,
        setSelectionAfterMentionChange: !0
      });
      const h = { target: { value: w } }, se = je(w, c), fe = Ie(
        o,
        i,
        a,
        D
      );
      this.executeOnChange(h, w, fe, se), O && O(e, r, A, F), this.clearSuggestions();
    });
    $(this, "isLoading", () => {
      let e = !1;
      return me.Children.forEach(this.props.children, function(r) {
        e = e || r && r.props.isLoading;
      }), e;
    });
    $(this, "isOpened", () => it(this.state.selectionStart) && (Ne(this.state.suggestions) !== 0 || this.isLoading()));
    $(this, "_queryId", 0);
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
    return /* @__PURE__ */ V.jsxs("div", { ref: this.setContainerElement, ...this.props.style, children: [
      this.renderControl(),
      this.renderSuggestionsOverlay()
    ] });
  }
  handlePaste(e) {
    if (e.target !== this.inputElement || !this.supportsClipboardActions(e))
      return;
    e.preventDefault();
    const { selectionStart: r, selectionEnd: u } = this.state, { value: i, children: a } = this.props, o = he(a), l = ie(
      i,
      o,
      r,
      "START"
    ), c = ie(i, o, u, "END"), f = e.clipboardData.getData("text/react-mentions"), g = e.clipboardData.getData("text/plain"), E = Ie(
      i,
      l,
      c,
      f || g
    ).replace(/\r/g, ""), C = ye(E, o), O = { target: { ...e.target, value: E } };
    this.executeOnChange(
      O,
      E,
      C,
      je(E, o)
    );
    const F = (wt(
      i,
      o,
      r
    ) || r) + ye(f || g, o).length;
    this.setState({
      selectionStart: F,
      selectionEnd: F,
      setSelectionAfterHandlePaste: !0
    });
  }
  saveSelectionToClipboard(e) {
    const r = this.inputElement.selectionStart, u = this.inputElement.selectionEnd, { children: i, value: a } = this.props, o = he(i), l = ie(
      a,
      o,
      r,
      "START"
    ), c = ie(a, o, u, "END");
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
    const { selectionStart: r, selectionEnd: u } = this.state, { children: i, value: a } = this.props, o = he(i), l = ie(
      a,
      o,
      r,
      "START"
    ), c = ie(a, o, u, "END"), f = [
      a.slice(0, l),
      a.slice(c)
    ].join(""), g = ye(f, o), E = {
      target: { ...e.target, value: g }
    };
    this.executeOnChange(
      E,
      f,
      g,
      je(a, o)
    );
  }
}
$(ct, "propTypes", Vt), $(ct, "defaultProps", {
  ignoreAccents: !1,
  singleLine: !1,
  allowSuggestionsAboveCursor: !1,
  onKeyDown: () => null,
  onSelect: () => null,
  onBlur: () => null
});
const nt = (t, n) => {
  const e = parseFloat(
    window.getComputedStyle(t, null).getPropertyValue(n)
  );
  return isFinite(e) ? e : 0;
}, Wn = typeof navigator < "u" && /iPhone|iPad|iPod/i.test(navigator.userAgent), Yn = Ue(
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
        ...Wn ? {
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
), Kn = Yn(ct), qn = {
  fontWeight: "inherit"
}, Hn = ({
  display: t,
  style: n,
  className: e,
  classNames: r
}) => {
  const u = dt(qn, { style: n, className: e, classNames: r });
  return /* @__PURE__ */ V.jsx("strong", { ...u, children: t });
};
Hn.defaultProps = {
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
  Hn as Mention,
  Kn as MentionsInput
};
