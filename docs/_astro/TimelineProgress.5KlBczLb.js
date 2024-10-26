import { j as S } from './jsx-runtime.CvXbGX33.js'
import { r as E } from './index.BFw_thZa.js'
import { g as Z, d as $, e as tt, f as et } from './date.Dfx-CKFM.js'
import {
  i as nt,
  f as st,
  c as at,
  m as rt,
  a as it,
  S as ot,
  H as lt,
  v as Y,
  s as ut,
  b as ct,
  d as ft,
  e as mt,
  g as pt,
  h as ht,
  r as gt,
  j as U,
  k as dt,
  l as yt,
  p as At,
  n as St,
  o as W,
  q as vt,
} from './SVGVisualElement.De6LOhF_.js'
import './_commonjsHelpers.Cpj98o6Y.js'
function _(t, e, s) {
  var n
  if (typeof t == 'string') {
    let a = document
    e && (nt(!!e.current), (a = e.current)),
      s
        ? (((n = s[t]) !== null && n !== void 0) || (s[t] = a.querySelectorAll(t)), (t = s[t]))
        : (t = a.querySelectorAll(t))
  } else t instanceof Element && (t = [t])
  return Array.from(t || [])
}
function Et(t, e) {
  let s
  const n = () => {
    const { currentTime: a } = e,
      i = (a === null ? 0 : a.value) / 100
    s !== i && t(i), (s = i)
  }
  return st.update(n, !0), () => at(n)
}
const xt = rt(() => window.ScrollTimeline !== void 0)
class q {
  constructor(e) {
    this.animations = e.filter(Boolean)
  }
  then(e, s) {
    return Promise.all(this.animations).then(e).catch(s)
  }
  getAll(e) {
    return this.animations[0][e]
  }
  setAll(e, s) {
    for (let n = 0; n < this.animations.length; n++) this.animations[n][e] = s
  }
  attachTimeline(e) {
    const s = this.animations.map((n) => {
      if (xt() && n.attachTimeline) n.attachTimeline(e)
      else
        return (
          n.pause(),
          Et((a) => {
            n.time = n.duration * a
          }, e)
        )
    })
    return () => {
      s.forEach((n, a) => {
        n && n(), this.animations[a].stop()
      })
    }
  }
  get time() {
    return this.getAll('time')
  }
  set time(e) {
    this.setAll('time', e)
  }
  get speed() {
    return this.getAll('speed')
  }
  set speed(e) {
    this.setAll('speed', e)
  }
  get duration() {
    let e = 0
    for (let s = 0; s < this.animations.length; s++) e = Math.max(e, this.animations[s].duration)
    return e
  }
  runAll(e) {
    this.animations.forEach((s) => s[e]())
  }
  play() {
    this.runAll('play')
  }
  pause() {
    this.runAll('pause')
  }
  stop() {
    this.runAll('stop')
  }
  cancel() {
    this.runAll('cancel')
  }
  complete() {
    this.runAll('complete')
  }
}
function Tt(t) {
  return typeof t == 'object' && !Array.isArray(t)
}
function Dt(t) {
  const e = {
      presenceContext: null,
      props: {},
      visualState: {
        renderState: { transform: {}, transformOrigin: {}, style: {}, vars: {}, attrs: {} },
        latestValues: {},
      },
    },
    s = it(t)
      ? new ot(e, { enableHardwareAcceleration: !1 })
      : new lt(e, { enableHardwareAcceleration: !0 })
  s.mount(t), Y.set(t, s)
}
function wt(t, e = 100) {
  const s = ut({ keyframes: [0, e], ...t }),
    n = Math.min(ct(s), ft)
  return { type: 'keyframes', ease: (a) => s.next(n * a).value / e, duration: mt(n) }
}
function B(t, e, s, n) {
  var a
  return typeof e == 'number'
    ? e
    : e.startsWith('-') || e.startsWith('+')
      ? Math.max(0, t + parseFloat(e))
      : e === '<'
        ? s
        : (a = n.get(e)) !== null && a !== void 0
          ? a
          : t
}
const Mt = (t, e, s) => {
  const n = e - t
  return ((((s - t) % n) + n) % n) + t
}
function bt(t, e) {
  return pt(t) ? t[Mt(0, t.length, e)] : t
}
function jt(t, e, s) {
  for (let n = 0; n < t.length; n++) {
    const a = t[n]
    a.at > e && a.at < s && (gt(t, a), n--)
  }
}
function Vt(t, e, s, n, a, r) {
  jt(t, a, r)
  for (let i = 0; i < e.length; i++) t.push({ value: e[i], at: ht(a, r, n[i]), easing: bt(s, i) })
}
function Ot(t, e) {
  return t.at === e.at ? (t.value === null ? 1 : e.value === null ? -1 : 0) : t.at - e.at
}
const Yt = 'easeInOut'
function Ft(t, { defaultTransition: e = {}, ...s } = {}, n) {
  const a = e.duration || 0.3,
    r = new Map(),
    i = new Map(),
    f = {},
    o = new Map()
  let u = 0,
    l = 0,
    T = 0
  for (let D = 0; D < t.length; D++) {
    const h = t[D]
    if (typeof h == 'string') {
      o.set(h, l)
      continue
    } else if (!Array.isArray(h)) {
      o.set(h.name, B(l, h.at, u, o))
      continue
    }
    let [x, g, m = {}] = h
    m.at !== void 0 && (l = B(l, m.at, u, o))
    let p = 0
    const w = (d, y, v, b = 0, j = 0) => {
      const c = It(d),
        { delay: V = 0, times: M = dt(c), type: J = 'keyframes', ...Q } = y
      let { ease: F = e.ease || 'easeOut', duration: A } = y
      const I = typeof V == 'function' ? V(b, j) : V,
        N = c.length
      if (N <= 2 && J === 'spring') {
        let k = 100
        if (N === 2 && Kt(c)) {
          const X = c[1] - c[0]
          k = Math.abs(X)
        }
        const H = { ...Q }
        A !== void 0 && (H.duration = St(A))
        const L = wt(H, k)
        ;(F = L.ease), (A = L.duration)
      }
      A ?? (A = a)
      const G = l + I,
        K = G + A
      M.length === 1 && M[0] === 0 && (M[1] = 1)
      const P = M.length - c.length
      P > 0 && yt(M, P),
        c.length === 1 && c.unshift(null),
        Vt(v, c, F, M, G, K),
        (p = Math.max(I + A, p)),
        (T = Math.max(K, T))
    }
    if (U(x)) {
      const d = C(x, i)
      w(g, m, R('default', d))
    } else {
      const d = _(x, n, f),
        y = d.length
      for (let v = 0; v < y; v++) {
        ;(g = g), (m = m)
        const b = d[v],
          j = C(b, i)
        for (const c in g) w(g[c], Nt(m, c), R(c, j), v, y)
      }
    }
    ;(u = l), (l += p)
  }
  return (
    i.forEach((D, h) => {
      for (const x in D) {
        const g = D[x]
        g.sort(Ot)
        const m = [],
          p = [],
          w = []
        for (let y = 0; y < g.length; y++) {
          const { at: v, value: b, easing: j } = g[y]
          m.push(b), p.push(At(0, T, v)), w.push(j || 'easeOut')
        }
        p[0] !== 0 && (p.unshift(0), m.unshift(m[0]), w.unshift(Yt)),
          p[p.length - 1] !== 1 && (p.push(1), m.push(null)),
          r.has(h) || r.set(h, { keyframes: {}, transition: {} })
        const d = r.get(h)
        ;(d.keyframes[x] = m), (d.transition[x] = { ...e, duration: T, ease: w, times: p, ...s })
      }
    }),
    r
  )
}
function C(t, e) {
  return !e.has(t) && e.set(t, {}), e.get(t)
}
function R(t, e) {
  return e[t] || (e[t] = []), e[t]
}
function It(t) {
  return Array.isArray(t) ? t : [t]
}
function Nt(t, e) {
  return t[e] ? { ...t, ...t[e] } : { ...t }
}
const Gt = (t) => typeof t == 'number',
  Kt = (t) => t.every(Gt)
function z(t, e, s, n) {
  const a = _(t, n),
    r = a.length,
    i = []
  for (let f = 0; f < r; f++) {
    const o = a[f]
    Y.has(o) || Dt(o)
    const u = Y.get(o),
      l = { ...s }
    typeof l.delay == 'function' && (l.delay = l.delay(f, r)),
      i.push(...vt(u, { ...e, transition: l }, {}))
  }
  return new q(i)
}
const Pt = (t) => Array.isArray(t) && Array.isArray(t[0])
function kt(t, e, s) {
  const n = []
  return (
    Ft(t, e, s).forEach(({ keyframes: r, transition: i }, f) => {
      let o
      U(f) ? (o = W(f, r.default, i.default)) : (o = z(f, r, i)), n.push(o)
    }),
    new q(n)
  )
}
const Ht = (t) => {
    function e(s, n, a) {
      let r
      return (
        Pt(s) ? (r = kt(s, n, t)) : Tt(n) ? (r = z(s, n, a, t)) : (r = W(s, n, a)),
        t && t.animations.push(r),
        r
      )
    }
    return e
  },
  Lt = Ht()
function _t() {
  const [t, e] = E.useState(0),
    [s, n] = E.useState(0),
    [a, r] = E.useState(0),
    [i, f] = E.useState(0),
    o = () => {
      const u = new Date()
      e(u.getFullYear())
      const l = Z($(u), u)
      n(l), r((l / tt(u)) * 100)
      const T = u.getTime() - et(u).getTime()
      f((T / 86400 / 1e3) * 100)
    }
  return (
    E.useEffect(() => {
      o()
      const u = setInterval(o, 1e3)
      return () => {
        clearInterval(u)
      }
    }, []),
    S.jsxs(S.Fragment, {
      children: [
        S.jsxs('p', {
          className: 'mt-4',
          children: ['今天是 ', t, ' 年的第 ', S.jsx(O, { to: s, decimals: 0 }), ' 天'],
        }),
        S.jsxs('p', {
          className: 'mt-4',
          children: ['今年已过 ', S.jsx(O, { to: a, decimals: 5 }), '%'],
        }),
        S.jsxs('p', {
          className: 'mt-4',
          children: ['今天已过 ', S.jsx(O, { to: i, decimals: 5 }), '%'],
        }),
      ],
    })
  )
}
function O({ to: t, decimals: e, duration: s = 1 }) {
  const n = E.useRef(null),
    a = E.useRef(0)
  return (
    E.useEffect(() => {
      if (!n.current) return
      const r = Lt(a.current, t, {
        duration: s,
        onUpdate: (i) => {
          n.current.textContent = i.toFixed(e)
        },
      })
      return (
        (a.current = t),
        () => {
          r.stop()
        }
      )
    }, [t, e, s]),
    S.jsx('span', { ref: n })
  )
}
export { _t as TimelineProgress }
