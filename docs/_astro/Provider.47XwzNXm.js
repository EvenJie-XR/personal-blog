import { j as f } from './jsx-runtime.CvXbGX33.js'
import { r as v } from './index.BFw_thZa.js'
import { p as C, a as W, b as D, m as F } from './metaInfo.vp8RG1Kd.js'
import { a as m, u as _ } from './react.Ds3aoTLk.js'
import { p as O, a as q } from './scrollInfo.CamQlM5f.js'
import { r as H, t as M, i as w } from './toNumber.DCaU3JdG.js'
import { s as N, a as U, c as y } from './theme.BxgT0uNq.js'
import { t as V } from './theme.cvN4Z6g1.js'
import { i as X } from './viewport.C-PxkPIm.js'
import './_commonjsHelpers.Cpj98o6Y.js'
var S = function () {
    return H.Date.now()
  },
  $ = 'Expected a function',
  z = Math.max,
  Y = Math.min
function B(t, n, e) {
  var r,
    o,
    c,
    s,
    a,
    l,
    d = 0,
    L = !1,
    g = !1,
    T = !0
  if (typeof t != 'function') throw new TypeError($)
  ;(n = M(n) || 0),
    w(e) &&
      ((L = !!e.leading),
      (g = 'maxWait' in e),
      (c = g ? z(M(e.maxWait) || 0, n) : c),
      (T = 'trailing' in e ? !!e.trailing : T))
  function E(i) {
    var u = r,
      h = o
    return (r = o = void 0), (d = i), (s = t.apply(h, u)), s
  }
  function P(i) {
    return (d = i), (a = setTimeout(p, n)), L ? E(i) : s
  }
  function R(i) {
    var u = i - l,
      h = i - d,
      I = n - u
    return g ? Y(I, c - h) : I
  }
  function A(i) {
    var u = i - l,
      h = i - d
    return l === void 0 || u >= n || u < 0 || (g && h >= c)
  }
  function p() {
    var i = S()
    if (A(i)) return b(i)
    a = setTimeout(p, R(i))
  }
  function b(i) {
    return (a = void 0), T && r ? E(i) : ((r = o = void 0), s)
  }
  function j() {
    a !== void 0 && clearTimeout(a), (d = 0), (r = l = o = a = void 0)
  }
  function k() {
    return a === void 0 ? s : b(S())
  }
  function x() {
    var i = S(),
      u = A(i)
    if (((r = arguments), (o = this), (l = i), u)) {
      if (a === void 0) return P(l)
      if (g) return clearTimeout(a), (a = setTimeout(p, n)), E(l)
    }
    return a === void 0 && (a = setTimeout(p, n)), s
  }
  return (x.cancel = j), (x.flush = k), x
}
var G = 'Expected a function'
function J(t, n, e) {
  var r = !0,
    o = !0
  if (typeof t != 'function') throw new TypeError(G)
  return (
    w(e) && ((r = 'leading' in e ? !!e.leading : r), (o = 'trailing' in e ? !!e.trailing : o)),
    B(t, n, { leading: r, maxWait: n, trailing: o })
  )
}
function K({ pathName: t, title: n = '', description: e = '', slug: r = '' }) {
  const o = m(C),
    c = m(W),
    s = m(D),
    a = m(F)
  return (
    v.useEffect(() => {
      o(t !== '/' ? t.replace(/\/$/, '') : t), c(n), s(e), a(r)
    }, [t, n, e, r]),
    null
  )
}
function Q() {
  const t = m(O),
    n = m(q),
    e = v.useRef(0),
    r = J(
      () => {
        let o = document.documentElement.scrollTop
        if (o === 0) {
          const c = document.body.style
          if (c.position === 'fixed') {
            const s = c.top
            o = Math.abs(parseInt(s, 10))
          }
        }
        n(e.current - o > 0 ? 'up' : 'down'), (e.current = o), t(o)
      },
      16,
      { leading: !1 },
    )
  return (
    v.useLayoutEffect(
      () => (
        r(),
        window.addEventListener('scroll', r),
        () => {
          window.removeEventListener('scroll', r)
        }
      ),
      [],
    ),
    null
  )
}
function Z() {
  const t = _(V)
  function n(e) {
    t === 'system' && y(e.matches ? 'dark' : 'light')
  }
  return (
    v.useEffect(() => {
      if ((N(t), t === 'system')) {
        const r = U()
        y(r)
      } else y(t)
      const e = window.matchMedia('(prefers-color-scheme: dark)')
      return (
        e.addEventListener('change', n),
        () => {
          e.removeEventListener('change', n)
        }
      )
    }, [t]),
    null
  )
}
function ee() {
  const t = m(X),
    n = (e) => {
      t(!e.matches)
    }
  return (
    v.useEffect(() => {
      const e = window.matchMedia('(min-width: 768px)')
      return (
        t(!e.matches),
        e.addEventListener('change', n),
        () => {
          e.removeEventListener('change', n)
        }
      )
    }, []),
    null
  )
}
function me(t) {
  return f.jsxs(f.Fragment, {
    children: [f.jsx(K, { ...t }), f.jsx(Q, {}), f.jsx(Z, {}), f.jsx(ee, {})],
  })
}
export { me as Provider }
