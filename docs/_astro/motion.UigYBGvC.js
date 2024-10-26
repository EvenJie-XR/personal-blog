import { j as mt } from './jsx-runtime.CvXbGX33.js'
import { r as g } from './index.BFw_thZa.js'
import {
  t as ye,
  u as ti,
  w as ei,
  x as $,
  y as ve,
  z as pt,
  A as Mt,
  j as Tt,
  B as ii,
  C as si,
  D as Pe,
  E as xe,
  F as ni,
  G as oi,
  I as St,
  J as ri,
  K as ai,
  f as M,
  L as li,
  M as ci,
  N as H,
  O as j,
  P as At,
  q as Te,
  Q as jt,
  R as Se,
  c as K,
  n as ui,
  e as hi,
  T as C,
  h as S,
  p as gt,
  U as Ae,
  V as T,
  W as fi,
  X as di,
  Y as mi,
  Z as Q,
  _ as pi,
  $ as De,
  a0 as Bt,
  a1 as gi,
  a2 as yi,
  a3 as kt,
  a4 as Ce,
  r as Le,
  a5 as Ve,
  a6 as vi,
  a as Pi,
  a7 as xi,
  a8 as rt,
  a9 as O,
  aa as U,
  ab as Y,
  ac as Ft,
  ad as Ti,
  ae as Si,
  af as Ai,
  ag as G,
  o as Di,
  ah as It,
  S as Ci,
  H as Li,
} from './SVGVisualElement.De6LOhF_.js'
const we = g.createContext({ transformPagePoint: (t) => t, isStatic: !1, reducedMotion: 'never' }),
  et = g.createContext({}),
  Dt = g.createContext(null),
  Vi = ye ? g.useLayoutEffect : g.useEffect,
  Ee = g.createContext({ strict: !1 }),
  { schedule: Ct, cancel: wn } = ti(queueMicrotask, !1)
function wi(t, e, i, s) {
  const { visualElement: o } = g.useContext(et),
    h = g.useContext(Ee),
    n = g.useContext(Dt),
    r = g.useContext(we).reducedMotion,
    a = g.useRef()
  ;(s = s || h.renderer),
    !a.current &&
      s &&
      (a.current = s(t, {
        visualState: e,
        parent: o,
        props: i,
        presenceContext: n,
        blockInitialAnimation: n ? n.initial === !1 : !1,
        reducedMotionConfig: r,
      }))
  const l = a.current
  g.useInsertionEffect(() => {
    l && l.update(i, n)
  })
  const c = g.useRef(!!(i[ei] && !window.HandoffComplete))
  return (
    Vi(() => {
      l &&
        (Ct.postRender(l.render),
        c.current && l.animationState && l.animationState.animateChanges())
    }),
    g.useEffect(() => {
      l &&
        (l.updateFeatures(),
        !c.current && l.animationState && l.animationState.animateChanges(),
        c.current && ((c.current = !1), (window.HandoffComplete = !0)))
    }),
    l
  )
}
function Ei(t, e, i) {
  return g.useCallback(
    (s) => {
      s && t.mount && t.mount(s),
        e && (s ? e.mount(s) : e.unmount()),
        i && (typeof i == 'function' ? i(s) : $(i) && (i.current = s))
    },
    [e],
  )
}
function bi(t, e) {
  if (ve(t)) {
    const { initial: i, animate: s } = t
    return { initial: i === !1 || pt(i) ? i : void 0, animate: pt(s) ? s : void 0 }
  }
  return t.inherit !== !1 ? e : {}
}
function Ri(t) {
  const { initial: e, animate: i } = bi(t, g.useContext(et))
  return g.useMemo(() => ({ initial: e, animate: i }), [Ot(e), Ot(i)])
}
function Ot(t) {
  return Array.isArray(t) ? t.join(' ') : t
}
function Mi(t) {
  for (const e in t) Mt[e] = { ...Mt[e], ...t[e] }
}
const be = g.createContext({}),
  Re = g.createContext({}),
  ji = Symbol.for('motionComponentSymbol')
function Bi({
  preloadedFeatures: t,
  createVisualElement: e,
  useRender: i,
  useVisualState: s,
  Component: o,
}) {
  t && Mi(t)
  function h(r, a) {
    let l
    const c = { ...g.useContext(we), ...r, layoutId: ki(r) },
      { isStatic: u } = c,
      f = Ri(r),
      d = s(r, u)
    if (!u && ye) {
      f.visualElement = wi(o, d, c, e)
      const p = g.useContext(Re),
        m = g.useContext(Ee).strict
      f.visualElement && (l = f.visualElement.loadFeatures(c, m, t, p))
    }
    return mt.jsxs(et.Provider, {
      value: f,
      children: [
        l && f.visualElement ? mt.jsx(l, { visualElement: f.visualElement, ...c }) : null,
        i(o, r, Ei(d, f.visualElement, a), d, u, f.visualElement),
      ],
    })
  }
  const n = g.forwardRef(h)
  return (n[ji] = o), n
}
function ki({ layoutId: t }) {
  const e = g.useContext(be).id
  return e && t !== void 0 ? e + '-' + t : t
}
function Fi(t) {
  function e(s, o = {}) {
    return Bi(t(s, o))
  }
  if (typeof Proxy > 'u') return e
  const i = new Map()
  return new Proxy(e, { get: (s, o) => (i.has(o) || i.set(o, e(o)), i.get(o)) })
}
const Ii = [
  'animate',
  'circle',
  'defs',
  'desc',
  'ellipse',
  'g',
  'image',
  'line',
  'filter',
  'marker',
  'mask',
  'metadata',
  'path',
  'pattern',
  'polygon',
  'polyline',
  'rect',
  'stop',
  'switch',
  'symbol',
  'svg',
  'text',
  'tspan',
  'use',
  'view',
]
function Lt(t) {
  return typeof t != 'string' || t.includes('-') ? !1 : !!(Ii.indexOf(t) > -1 || /[A-Z]/u.test(t))
}
const Vt = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} })
function Me(t, e, i) {
  for (const s in e) !Tt(e[s]) && !ii(s, i) && (t[s] = e[s])
}
function Oi({ transformTemplate: t }, e, i) {
  return g.useMemo(() => {
    const s = Vt()
    return si(s, e, { enableHardwareAcceleration: !i }, t), Object.assign({}, s.vars, s.style)
  }, [e])
}
function Ui(t, e, i) {
  const s = t.style || {},
    o = {}
  return Me(o, s, t), Object.assign(o, Oi(t, e, i)), o
}
function Gi(t, e, i) {
  const s = {},
    o = Ui(t, e, i)
  return (
    t.drag &&
      t.dragListener !== !1 &&
      ((s.draggable = !1),
      (o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = 'none'),
      (o.touchAction = t.drag === !0 ? 'none' : `pan-${t.drag === 'x' ? 'y' : 'x'}`)),
    t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (s.tabIndex = 0),
    (s.style = o),
    s
  )
}
const Hi = new Set([
  'animate',
  'exit',
  'variants',
  'initial',
  'style',
  'values',
  'variants',
  'transition',
  'transformTemplate',
  'custom',
  'inherit',
  'onBeforeLayoutMeasure',
  'onAnimationStart',
  'onAnimationComplete',
  'onUpdate',
  'onDragStart',
  'onDrag',
  'onDragEnd',
  'onMeasureDragConstraints',
  'onDirectionLock',
  'onDragTransitionEnd',
  '_dragX',
  '_dragY',
  'onHoverStart',
  'onHoverEnd',
  'onViewportEnter',
  'onViewportLeave',
  'globalTapTarget',
  'ignoreStrict',
  'viewport',
])
function tt(t) {
  return (
    t.startsWith('while') ||
    (t.startsWith('drag') && t !== 'draggable') ||
    t.startsWith('layout') ||
    t.startsWith('onTap') ||
    t.startsWith('onPan') ||
    t.startsWith('onLayout') ||
    Hi.has(t)
  )
}
let je = (t) => !tt(t)
function Ni(t) {
  t && (je = (e) => (e.startsWith('on') ? !tt(e) : t(e)))
}
try {
  Ni(require('@emotion/is-prop-valid').default)
} catch {}
function Wi(t, e, i) {
  const s = {}
  for (const o in t)
    (o === 'values' && typeof t.values == 'object') ||
      ((je(o) ||
        (i === !0 && tt(o)) ||
        (!e && !tt(o)) ||
        (t.draggable && o.startsWith('onDrag'))) &&
        (s[o] = t[o]))
  return s
}
const Be = () => ({ ...Vt(), attrs: {} })
function $i(t, e, i, s) {
  const o = g.useMemo(() => {
    const h = Be()
    return (
      Pe(h, e, { enableHardwareAcceleration: !1 }, xe(s), t.transformTemplate),
      { ...h.attrs, style: { ...h.style } }
    )
  }, [e])
  if (t.style) {
    const h = {}
    Me(h, t.style, t), (o.style = { ...h, ...o.style })
  }
  return o
}
function zi(t = !1) {
  return (i, s, o, { latestValues: h }, n) => {
    const a = (Lt(i) ? $i : Gi)(s, h, n, i),
      l = Wi(s, typeof i == 'string', t),
      c = i !== g.Fragment ? { ...l, ...a, ref: o } : {},
      { children: u } = s,
      f = g.useMemo(() => (Tt(u) ? u.get() : u), [u])
    return g.createElement(i, { ...c, children: f })
  }
}
function _i(t) {
  const e = g.useRef(null)
  return e.current === null && (e.current = t()), e.current
}
function Z(t) {
  const e = Tt(t) ? t.get() : t
  return ni(e) ? e.toValue() : e
}
function Ki({ scrapeMotionValuesFromProps: t, createRenderState: e, onMount: i }, s, o, h) {
  const n = { latestValues: Xi(s, o, h, t), renderState: e() }
  return i && (n.mount = (r) => i(s, r, n)), n
}
const ke = (t) => (e, i) => {
  const s = g.useContext(et),
    o = g.useContext(Dt),
    h = () => Ki(t, e, s, o)
  return i ? h() : _i(h)
}
function Xi(t, e, i, s) {
  const o = {},
    h = s(t, {})
  for (const f in h) o[f] = Z(h[f])
  let { initial: n, animate: r } = t
  const a = ve(t),
    l = oi(t)
  e &&
    l &&
    !a &&
    t.inherit !== !1 &&
    (n === void 0 && (n = e.initial), r === void 0 && (r = e.animate))
  let c = i ? i.initial === !1 : !1
  c = c || n === !1
  const u = c ? r : n
  return (
    u &&
      typeof u != 'boolean' &&
      !St(u) &&
      (Array.isArray(u) ? u : [u]).forEach((d) => {
        const p = ri(t, d)
        if (!p) return
        const { transitionEnd: m, transition: x, ...v } = p
        for (const P in v) {
          let y = v[P]
          if (Array.isArray(y)) {
            const A = c ? y.length - 1 : 0
            y = y[A]
          }
          y !== null && (o[P] = y)
        }
        for (const P in m) o[P] = m[P]
      }),
    o
  )
}
const Yi = {
    useVisualState: ke({
      scrapeMotionValuesFromProps: ai,
      createRenderState: Be,
      onMount: (t, e, { renderState: i, latestValues: s }) => {
        M.read(() => {
          try {
            i.dimensions = typeof e.getBBox == 'function' ? e.getBBox() : e.getBoundingClientRect()
          } catch {
            i.dimensions = { x: 0, y: 0, width: 0, height: 0 }
          }
        }),
          M.render(() => {
            Pe(i, s, { enableHardwareAcceleration: !1 }, xe(e.tagName), t.transformTemplate),
              li(e, i)
          })
      },
    }),
  },
  qi = { useVisualState: ke({ scrapeMotionValuesFromProps: ci, createRenderState: Vt }) }
function Zi(t, { forwardMotionProps: e = !1 }, i, s) {
  return {
    ...(Lt(t) ? Yi : qi),
    preloadedFeatures: i,
    useRender: zi(e),
    createVisualElement: s,
    Component: t,
  }
}
function R(t, e, i, s = { passive: !0 }) {
  return t.addEventListener(e, i, s), () => t.removeEventListener(e, i)
}
const Fe = (t) =>
  t.pointerType === 'mouse' ? typeof t.button != 'number' || t.button <= 0 : t.isPrimary !== !1
function it(t, e = 'page') {
  return { point: { x: t[`${e}X`], y: t[`${e}Y`] } }
}
const Ji = (t) => (e) => Fe(e) && t(e, it(e))
function B(t, e, i, s) {
  return R(t, e, Ji(i), s)
}
function Ie(t) {
  let e = null
  return () => {
    const i = () => {
      e = null
    }
    return e === null ? ((e = t), i) : !1
  }
}
const Ut = Ie('dragHorizontal'),
  Gt = Ie('dragVertical')
function Oe(t) {
  let e = !1
  if (t === 'y') e = Gt()
  else if (t === 'x') e = Ut()
  else {
    const i = Ut(),
      s = Gt()
    i && s
      ? (e = () => {
          i(), s()
        })
      : (i && i(), s && s())
  }
  return e
}
function Ue() {
  const t = Oe(!0)
  return t ? (t(), !1) : !0
}
class k {
  constructor(e) {
    ;(this.isMounted = !1), (this.node = e)
  }
  update() {}
}
function Ht(t, e) {
  const i = e ? 'pointerenter' : 'pointerleave',
    s = e ? 'onHoverStart' : 'onHoverEnd',
    o = (h, n) => {
      if (h.pointerType === 'touch' || Ue()) return
      const r = t.getProps()
      t.animationState && r.whileHover && t.animationState.setActive('whileHover', e)
      const a = r[s]
      a && a(h, n)
    }
  return B(t.current, i, o, { passive: !t.getProps()[s] })
}
class Qi extends k {
  mount() {
    this.unmount = H(Ht(this.node, !0), Ht(this.node, !1))
  }
  unmount() {}
}
class ts extends k {
  constructor() {
    super(...arguments), (this.isActive = !1)
  }
  onFocus() {
    let e = !1
    try {
      e = this.node.current.matches(':focus-visible')
    } catch {
      e = !0
    }
    !e ||
      !this.node.animationState ||
      (this.node.animationState.setActive('whileFocus', !0), (this.isActive = !0))
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive('whileFocus', !1), (this.isActive = !1))
  }
  mount() {
    this.unmount = H(
      R(this.node.current, 'focus', () => this.onFocus()),
      R(this.node.current, 'blur', () => this.onBlur()),
    )
  }
  unmount() {}
}
const Ge = (t, e) => (e ? (t === e ? !0 : Ge(t, e.parentElement)) : !1)
function at(t, e) {
  if (!e) return
  const i = new PointerEvent('pointer' + t)
  e(i, it(i))
}
class es extends k {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = j),
      (this.removeEndListeners = j),
      (this.removeAccessibleListeners = j),
      (this.startPointerPress = (e, i) => {
        if (this.isPressing) return
        this.removeEndListeners()
        const s = this.node.getProps(),
          h = B(
            window,
            'pointerup',
            (r, a) => {
              if (!this.checkPressEnd()) return
              const { onTap: l, onTapCancel: c, globalTapTarget: u } = this.node.getProps()
              !u && !Ge(this.node.current, r.target) ? c && c(r, a) : l && l(r, a)
            },
            { passive: !(s.onTap || s.onPointerUp) },
          ),
          n = B(window, 'pointercancel', (r, a) => this.cancelPress(r, a), {
            passive: !(s.onTapCancel || s.onPointerCancel),
          })
        ;(this.removeEndListeners = H(h, n)), this.startPress(e, i)
      }),
      (this.startAccessiblePress = () => {
        const e = (h) => {
            if (h.key !== 'Enter' || this.isPressing) return
            const n = (r) => {
              r.key !== 'Enter' ||
                !this.checkPressEnd() ||
                at('up', (a, l) => {
                  const { onTap: c } = this.node.getProps()
                  c && c(a, l)
                })
            }
            this.removeEndListeners(),
              (this.removeEndListeners = R(this.node.current, 'keyup', n)),
              at('down', (r, a) => {
                this.startPress(r, a)
              })
          },
          i = R(this.node.current, 'keydown', e),
          s = () => {
            this.isPressing && at('cancel', (h, n) => this.cancelPress(h, n))
          },
          o = R(this.node.current, 'blur', s)
        this.removeAccessibleListeners = H(i, o)
      })
  }
  startPress(e, i) {
    this.isPressing = !0
    const { onTapStart: s, whileTap: o } = this.node.getProps()
    o && this.node.animationState && this.node.animationState.setActive('whileTap', !0),
      s && s(e, i)
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive('whileTap', !1),
      !Ue()
    )
  }
  cancelPress(e, i) {
    if (!this.checkPressEnd()) return
    const { onTapCancel: s } = this.node.getProps()
    s && s(e, i)
  }
  mount() {
    const e = this.node.getProps(),
      i = B(e.globalTapTarget ? window : this.node.current, 'pointerdown', this.startPointerPress, {
        passive: !(e.onTapStart || e.onPointerStart),
      }),
      s = R(this.node.current, 'focus', this.startAccessiblePress)
    this.removeStartListeners = H(i, s)
  }
  unmount() {
    this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners()
  }
}
const yt = new WeakMap(),
  lt = new WeakMap(),
  is = (t) => {
    const e = yt.get(t.target)
    e && e(t)
  },
  ss = (t) => {
    t.forEach(is)
  }
function ns({ root: t, ...e }) {
  const i = t || document
  lt.has(i) || lt.set(i, {})
  const s = lt.get(i),
    o = JSON.stringify(e)
  return s[o] || (s[o] = new IntersectionObserver(ss, { root: t, ...e })), s[o]
}
function os(t, e, i) {
  const s = ns(e)
  return (
    yt.set(t, i),
    s.observe(t),
    () => {
      yt.delete(t), s.unobserve(t)
    }
  )
}
const rs = { some: 0, all: 1 }
class as extends k {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1)
  }
  startObserver() {
    this.unmount()
    const { viewport: e = {} } = this.node.getProps(),
      { root: i, margin: s, amount: o = 'some', once: h } = e,
      n = {
        root: i ? i.current : void 0,
        rootMargin: s,
        threshold: typeof o == 'number' ? o : rs[o],
      },
      r = (a) => {
        const { isIntersecting: l } = a
        if (this.isInView === l || ((this.isInView = l), h && !l && this.hasEnteredView)) return
        l && (this.hasEnteredView = !0),
          this.node.animationState && this.node.animationState.setActive('whileInView', l)
        const { onViewportEnter: c, onViewportLeave: u } = this.node.getProps(),
          f = l ? c : u
        f && f(a)
      }
    return os(this.node.current, n, r)
  }
  mount() {
    this.startObserver()
  }
  update() {
    if (typeof IntersectionObserver > 'u') return
    const { props: e, prevProps: i } = this.node
    ;['amount', 'margin', 'root'].some(ls(e, i)) && this.startObserver()
  }
  unmount() {}
}
function ls({ viewport: t = {} }, { viewport: e = {} } = {}) {
  return (i) => t[i] !== e[i]
}
const cs = {
  inView: { Feature: as },
  tap: { Feature: es },
  focus: { Feature: ts },
  hover: { Feature: Qi },
}
function He(t, e) {
  if (!Array.isArray(e)) return !1
  const i = e.length
  if (i !== t.length) return !1
  for (let s = 0; s < i; s++) if (e[s] !== t[s]) return !1
  return !0
}
function vt(t, e, i = {}) {
  var s
  const o = At(
    t,
    e,
    i.type === 'exit'
      ? (s = t.presenceContext) === null || s === void 0
        ? void 0
        : s.custom
      : void 0,
  )
  let { transition: h = t.getDefaultTransition() || {} } = o || {}
  i.transitionOverride && (h = i.transitionOverride)
  const n = o ? () => Promise.all(Te(t, o, i)) : () => Promise.resolve(),
    r =
      t.variantChildren && t.variantChildren.size
        ? (l = 0) => {
            const { delayChildren: c = 0, staggerChildren: u, staggerDirection: f } = h
            return us(t, e, c + l, u, f, i)
          }
        : () => Promise.resolve(),
    { when: a } = h
  if (a) {
    const [l, c] = a === 'beforeChildren' ? [n, r] : [r, n]
    return l().then(() => c())
  } else return Promise.all([n(), r(i.delay)])
}
function us(t, e, i = 0, s = 0, o = 1, h) {
  const n = [],
    r = (t.variantChildren.size - 1) * s,
    a = o === 1 ? (l = 0) => l * s : (l = 0) => r - l * s
  return (
    Array.from(t.variantChildren)
      .sort(hs)
      .forEach((l, c) => {
        l.notify('AnimationStart', e),
          n.push(vt(l, e, { ...h, delay: i + a(c) }).then(() => l.notify('AnimationComplete', e)))
      }),
    Promise.all(n)
  )
}
function hs(t, e) {
  return t.sortNodePosition(e)
}
function fs(t, e, i = {}) {
  t.notify('AnimationStart', e)
  let s
  if (Array.isArray(e)) {
    const o = e.map((h) => vt(t, h, i))
    s = Promise.all(o)
  } else if (typeof e == 'string') s = vt(t, e, i)
  else {
    const o = typeof e == 'function' ? At(t, e, i.custom) : e
    s = Promise.all(Te(t, o, i))
  }
  return s.then(() => {
    M.postRender(() => {
      t.notify('AnimationComplete', e)
    })
  })
}
const ds = [...Se].reverse(),
  ms = Se.length
function ps(t) {
  return (e) => Promise.all(e.map(({ animation: i, options: s }) => fs(t, i, s)))
}
function gs(t) {
  let e = ps(t)
  const i = vs()
  let s = !0
  const o = (a) => (l, c) => {
    var u
    const f = At(
      t,
      c,
      a === 'exit'
        ? (u = t.presenceContext) === null || u === void 0
          ? void 0
          : u.custom
        : void 0,
    )
    if (f) {
      const { transition: d, transitionEnd: p, ...m } = f
      l = { ...l, ...m, ...p }
    }
    return l
  }
  function h(a) {
    e = a(t)
  }
  function n(a) {
    const l = t.getProps(),
      c = t.getVariantContext(!0) || {},
      u = [],
      f = new Set()
    let d = {},
      p = 1 / 0
    for (let x = 0; x < ms; x++) {
      const v = ds[x],
        P = i[v],
        y = l[v] !== void 0 ? l[v] : c[v],
        A = pt(y),
        E = v === a ? P.isActive : null
      E === !1 && (p = x)
      let X = y === c[v] && y !== l[v] && A
      if (
        (X && s && t.manuallyAnimateOnMount && (X = !1),
        (P.protectedKeys = { ...d }),
        (!P.isActive && E === null) || (!y && !P.prevProp) || St(y) || typeof y == 'boolean')
      )
        continue
      let st = ys(P.prevProp, y) || (v === a && P.isActive && !X && A) || (x > p && A),
        wt = !1
      const Et = Array.isArray(y) ? y : [y]
      let N = Et.reduce(o(v), {})
      E === !1 && (N = {})
      const { prevResolvedValues: bt = {} } = P,
        Qe = { ...bt, ...N },
        Rt = (D) => {
          ;(st = !0), f.has(D) && ((wt = !0), f.delete(D)), (P.needsAnimating[D] = !0)
          const b = t.getValue(D)
          b && (b.liveStyle = !1)
        }
      for (const D in Qe) {
        const b = N[D],
          nt = bt[D]
        if (d.hasOwnProperty(D)) continue
        let ot = !1
        jt(b) && jt(nt) ? (ot = !He(b, nt)) : (ot = b !== nt),
          ot
            ? b != null
              ? Rt(D)
              : f.add(D)
            : b !== void 0 && f.has(D)
              ? Rt(D)
              : (P.protectedKeys[D] = !0)
      }
      ;(P.prevProp = y),
        (P.prevResolvedValues = N),
        P.isActive && (d = { ...d, ...N }),
        s && t.blockInitialAnimation && (st = !1),
        st && (!X || wt) && u.push(...Et.map((D) => ({ animation: D, options: { type: v } })))
    }
    if (f.size) {
      const x = {}
      f.forEach((v) => {
        const P = t.getBaseTarget(v),
          y = t.getValue(v)
        y && (y.liveStyle = !0), (x[v] = P ?? null)
      }),
        u.push({ animation: x })
    }
    let m = !!u.length
    return (
      s && (l.initial === !1 || l.initial === l.animate) && !t.manuallyAnimateOnMount && (m = !1),
      (s = !1),
      m ? e(u) : Promise.resolve()
    )
  }
  function r(a, l) {
    var c
    if (i[a].isActive === l) return Promise.resolve()
    ;(c = t.variantChildren) === null ||
      c === void 0 ||
      c.forEach((f) => {
        var d
        return (d = f.animationState) === null || d === void 0 ? void 0 : d.setActive(a, l)
      }),
      (i[a].isActive = l)
    const u = n(a)
    for (const f in i) i[f].protectedKeys = {}
    return u
  }
  return { animateChanges: n, setActive: r, setAnimateFunction: h, getState: () => i }
}
function ys(t, e) {
  return typeof e == 'string' ? e !== t : Array.isArray(e) ? !He(e, t) : !1
}
function F(t = !1) {
  return { isActive: t, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} }
}
function vs() {
  return {
    animate: F(!0),
    whileInView: F(),
    whileHover: F(),
    whileTap: F(),
    whileDrag: F(),
    whileFocus: F(),
    exit: F(),
  }
}
class Ps extends k {
  constructor(e) {
    super(e), e.animationState || (e.animationState = gs(e))
  }
  updateAnimationControlsSubscription() {
    const { animate: e } = this.node.getProps()
    this.unmount(), St(e) && (this.unmount = e.subscribe(this.node))
  }
  mount() {
    this.updateAnimationControlsSubscription()
  }
  update() {
    const { animate: e } = this.node.getProps(),
      { animate: i } = this.node.prevProps || {}
    e !== i && this.updateAnimationControlsSubscription()
  }
  unmount() {}
}
let xs = 0
class Ts extends k {
  constructor() {
    super(...arguments), (this.id = xs++)
  }
  update() {
    if (!this.node.presenceContext) return
    const { isPresent: e, onExitComplete: i } = this.node.presenceContext,
      { isPresent: s } = this.node.prevPresenceContext || {}
    if (!this.node.animationState || e === s) return
    const o = this.node.animationState.setActive('exit', !e)
    i && !e && o.then(() => i(this.id))
  }
  mount() {
    const { register: e } = this.node.presenceContext || {}
    e && (this.unmount = e(this.id))
  }
  unmount() {}
}
const Ss = { animation: { Feature: Ps }, exit: { Feature: Ts } },
  Nt = (t, e) => Math.abs(t - e)
function As(t, e) {
  const i = Nt(t.x, e.x),
    s = Nt(t.y, e.y)
  return Math.sqrt(i ** 2 + s ** 2)
}
class Ne {
  constructor(e, i, { transformPagePoint: s, contextWindow: o, dragSnapToOrigin: h = !1 } = {}) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return
        const u = ut(this.lastMoveEventInfo, this.history),
          f = this.startEvent !== null,
          d = As(u.offset, { x: 0, y: 0 }) >= 3
        if (!f && !d) return
        const { point: p } = u,
          { timestamp: m } = C
        this.history.push({ ...p, timestamp: m })
        const { onStart: x, onMove: v } = this.handlers
        f || (x && x(this.lastMoveEvent, u), (this.startEvent = this.lastMoveEvent)),
          v && v(this.lastMoveEvent, u)
      }),
      (this.handlePointerMove = (u, f) => {
        ;(this.lastMoveEvent = u),
          (this.lastMoveEventInfo = ct(f, this.transformPagePoint)),
          M.update(this.updatePoint, !0)
      }),
      (this.handlePointerUp = (u, f) => {
        this.end()
        const { onEnd: d, onSessionEnd: p, resumeAnimation: m } = this.handlers
        if ((this.dragSnapToOrigin && m && m(), !(this.lastMoveEvent && this.lastMoveEventInfo)))
          return
        const x = ut(
          u.type === 'pointercancel' ? this.lastMoveEventInfo : ct(f, this.transformPagePoint),
          this.history,
        )
        this.startEvent && d && d(u, x), p && p(u, x)
      }),
      !Fe(e))
    )
      return
    ;(this.dragSnapToOrigin = h),
      (this.handlers = i),
      (this.transformPagePoint = s),
      (this.contextWindow = o || window)
    const n = it(e),
      r = ct(n, this.transformPagePoint),
      { point: a } = r,
      { timestamp: l } = C
    this.history = [{ ...a, timestamp: l }]
    const { onSessionStart: c } = i
    c && c(e, ut(r, this.history)),
      (this.removeListeners = H(
        B(this.contextWindow, 'pointermove', this.handlePointerMove),
        B(this.contextWindow, 'pointerup', this.handlePointerUp),
        B(this.contextWindow, 'pointercancel', this.handlePointerUp),
      ))
  }
  updateHandlers(e) {
    this.handlers = e
  }
  end() {
    this.removeListeners && this.removeListeners(), K(this.updatePoint)
  }
}
function ct(t, e) {
  return e ? { point: e(t.point) } : t
}
function Wt(t, e) {
  return { x: t.x - e.x, y: t.y - e.y }
}
function ut({ point: t }, e) {
  return { point: t, delta: Wt(t, We(e)), offset: Wt(t, Ds(e)), velocity: Cs(e, 0.1) }
}
function Ds(t) {
  return t[0]
}
function We(t) {
  return t[t.length - 1]
}
function Cs(t, e) {
  if (t.length < 2) return { x: 0, y: 0 }
  let i = t.length - 1,
    s = null
  const o = We(t)
  for (; i >= 0 && ((s = t[i]), !(o.timestamp - s.timestamp > ui(e))); ) i--
  if (!s) return { x: 0, y: 0 }
  const h = hi(o.timestamp - s.timestamp)
  if (h === 0) return { x: 0, y: 0 }
  const n = { x: (o.x - s.x) / h, y: (o.y - s.y) / h }
  return n.x === 1 / 0 && (n.x = 0), n.y === 1 / 0 && (n.y = 0), n
}
function L(t) {
  return t.max - t.min
}
function Pt(t, e = 0, i = 0.01) {
  return Math.abs(t - e) <= i
}
function $t(t, e, i, s = 0.5) {
  ;(t.origin = s),
    (t.originPoint = S(e.min, e.max, t.origin)),
    (t.scale = L(i) / L(e)),
    (Pt(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1),
    (t.translate = S(i.min, i.max, t.origin) - t.originPoint),
    (Pt(t.translate) || isNaN(t.translate)) && (t.translate = 0)
}
function z(t, e, i, s) {
  $t(t.x, e.x, i.x, s ? s.originX : void 0), $t(t.y, e.y, i.y, s ? s.originY : void 0)
}
function zt(t, e, i) {
  ;(t.min = i.min + e.min), (t.max = t.min + L(e))
}
function Ls(t, e, i) {
  zt(t.x, e.x, i.x), zt(t.y, e.y, i.y)
}
function _t(t, e, i) {
  ;(t.min = e.min - i.min), (t.max = t.min + L(e))
}
function _(t, e, i) {
  _t(t.x, e.x, i.x), _t(t.y, e.y, i.y)
}
function Vs(t, { min: e, max: i }, s) {
  return (
    e !== void 0 && t < e
      ? (t = s ? S(e, t, s.min) : Math.max(t, e))
      : i !== void 0 && t > i && (t = s ? S(i, t, s.max) : Math.min(t, i)),
    t
  )
}
function Kt(t, e, i) {
  return {
    min: e !== void 0 ? t.min + e : void 0,
    max: i !== void 0 ? t.max + i - (t.max - t.min) : void 0,
  }
}
function ws(t, { top: e, left: i, bottom: s, right: o }) {
  return { x: Kt(t.x, i, o), y: Kt(t.y, e, s) }
}
function Xt(t, e) {
  let i = e.min - t.min,
    s = e.max - t.max
  return e.max - e.min < t.max - t.min && ([i, s] = [s, i]), { min: i, max: s }
}
function Es(t, e) {
  return { x: Xt(t.x, e.x), y: Xt(t.y, e.y) }
}
function bs(t, e) {
  let i = 0.5
  const s = L(t),
    o = L(e)
  return (
    o > s ? (i = gt(e.min, e.max - s, t.min)) : s > o && (i = gt(t.min, t.max - o, e.min)),
    Ae(0, 1, i)
  )
}
function Rs(t, e) {
  const i = {}
  return e.min !== void 0 && (i.min = e.min - t.min), e.max !== void 0 && (i.max = e.max - t.min), i
}
const xt = 0.35
function Ms(t = xt) {
  return (
    t === !1 ? (t = 0) : t === !0 && (t = xt),
    { x: Yt(t, 'left', 'right'), y: Yt(t, 'top', 'bottom') }
  )
}
function Yt(t, e, i) {
  return { min: qt(t, e), max: qt(t, i) }
}
function qt(t, e) {
  return typeof t == 'number' ? t : t[e] || 0
}
function w(t) {
  return [t('x'), t('y')]
}
const $e = ({ current: t }) => (t ? t.ownerDocument.defaultView : null),
  js = new WeakMap()
class Bs {
  constructor(e) {
    ;(this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = T()),
      (this.visualElement = e)
  }
  start(e, { snapToCursor: i = !1 } = {}) {
    const { presenceContext: s } = this.visualElement
    if (s && s.isPresent === !1) return
    const o = (c) => {
        const { dragSnapToOrigin: u } = this.getProps()
        u ? this.pauseAnimation() : this.stopAnimation(),
          i && this.snapToCursor(it(c, 'page').point)
      },
      h = (c, u) => {
        const { drag: f, dragPropagation: d, onDragStart: p } = this.getProps()
        if (
          f &&
          !d &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = Oe(f)),
          !this.openGlobalLock)
        )
          return
        ;(this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          w((x) => {
            let v = this.getAxisMotionValue(x).get() || 0
            if (Q.test(v)) {
              const { projection: P } = this.visualElement
              if (P && P.layout) {
                const y = P.layout.layoutBox[x]
                y && (v = L(y) * (parseFloat(v) / 100))
              }
            }
            this.originPoint[x] = v
          }),
          p && p(c, u)
        const { animationState: m } = this.visualElement
        m && m.setActive('whileDrag', !0)
      },
      n = (c, u) => {
        const {
          dragPropagation: f,
          dragDirectionLock: d,
          onDirectionLock: p,
          onDrag: m,
        } = this.getProps()
        if (!f && !this.openGlobalLock) return
        const { offset: x } = u
        if (d && this.currentDirection === null) {
          ;(this.currentDirection = ks(x)),
            this.currentDirection !== null && p && p(this.currentDirection)
          return
        }
        this.updateAxis('x', u.point, x),
          this.updateAxis('y', u.point, x),
          this.visualElement.render(),
          m && m(c, u)
      },
      r = (c, u) => this.stop(c, u),
      a = () =>
        w((c) => {
          var u
          return (
            this.getAnimationState(c) === 'paused' &&
            ((u = this.getAxisMotionValue(c).animation) === null || u === void 0
              ? void 0
              : u.play())
          )
        }),
      { dragSnapToOrigin: l } = this.getProps()
    this.panSession = new Ne(
      e,
      { onSessionStart: o, onStart: h, onMove: n, onSessionEnd: r, resumeAnimation: a },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: l,
        contextWindow: $e(this.visualElement),
      },
    )
  }
  stop(e, i) {
    const s = this.isDragging
    if ((this.cancel(), !s)) return
    const { velocity: o } = i
    this.startAnimation(o)
    const { onDragEnd: h } = this.getProps()
    h && h(e, i)
  }
  cancel() {
    this.isDragging = !1
    const { projection: e, animationState: i } = this.visualElement
    e && (e.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0)
    const { dragPropagation: s } = this.getProps()
    !s && this.openGlobalLock && (this.openGlobalLock(), (this.openGlobalLock = null)),
      i && i.setActive('whileDrag', !1)
  }
  updateAxis(e, i, s) {
    const { drag: o } = this.getProps()
    if (!s || !q(e, o, this.currentDirection)) return
    const h = this.getAxisMotionValue(e)
    let n = this.originPoint[e] + s[e]
    this.constraints && this.constraints[e] && (n = Vs(n, this.constraints[e], this.elastic[e])),
      h.set(n)
  }
  resolveConstraints() {
    var e
    const { dragConstraints: i, dragElastic: s } = this.getProps(),
      o =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (e = this.visualElement.projection) === null || e === void 0
            ? void 0
            : e.layout,
      h = this.constraints
    i && $(i)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : i && o
        ? (this.constraints = ws(o.layoutBox, i))
        : (this.constraints = !1),
      (this.elastic = Ms(s)),
      h !== this.constraints &&
        o &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        w((n) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(n) &&
            (this.constraints[n] = Rs(o.layoutBox[n], this.constraints[n]))
        })
  }
  resolveRefConstraints() {
    const { dragConstraints: e, onMeasureDragConstraints: i } = this.getProps()
    if (!e || !$(e)) return !1
    const s = e.current,
      { projection: o } = this.visualElement
    if (!o || !o.layout) return !1
    const h = fi(s, o.root, this.visualElement.getTransformPagePoint())
    let n = Es(o.layout.layoutBox, h)
    if (i) {
      const r = i(di(n))
      ;(this.hasMutatedConstraints = !!r), r && (n = pi(r))
    }
    return n
  }
  startAnimation(e) {
    const {
        drag: i,
        dragMomentum: s,
        dragElastic: o,
        dragTransition: h,
        dragSnapToOrigin: n,
        onDragTransitionEnd: r,
      } = this.getProps(),
      a = this.constraints || {},
      l = w((c) => {
        if (!q(c, i, this.currentDirection)) return
        let u = (a && a[c]) || {}
        n && (u = { min: 0, max: 0 })
        const f = o ? 200 : 1e6,
          d = o ? 40 : 1e7,
          p = {
            type: 'inertia',
            velocity: s ? e[c] : 0,
            bounceStiffness: f,
            bounceDamping: d,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...h,
            ...u,
          }
        return this.startAxisValueAnimation(c, p)
      })
    return Promise.all(l).then(r)
  }
  startAxisValueAnimation(e, i) {
    const s = this.getAxisMotionValue(e)
    return s.start(mi(e, s, 0, i, this.visualElement))
  }
  stopAnimation() {
    w((e) => this.getAxisMotionValue(e).stop())
  }
  pauseAnimation() {
    w((e) => {
      var i
      return (i = this.getAxisMotionValue(e).animation) === null || i === void 0
        ? void 0
        : i.pause()
    })
  }
  getAnimationState(e) {
    var i
    return (i = this.getAxisMotionValue(e).animation) === null || i === void 0 ? void 0 : i.state
  }
  getAxisMotionValue(e) {
    const i = `_drag${e.toUpperCase()}`,
      s = this.visualElement.getProps(),
      o = s[i]
    return o || this.visualElement.getValue(e, (s.initial ? s.initial[e] : void 0) || 0)
  }
  snapToCursor(e) {
    w((i) => {
      const { drag: s } = this.getProps()
      if (!q(i, s, this.currentDirection)) return
      const { projection: o } = this.visualElement,
        h = this.getAxisMotionValue(i)
      if (o && o.layout) {
        const { min: n, max: r } = o.layout.layoutBox[i]
        h.set(e[i] - S(n, r, 0.5))
      }
    })
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return
    const { drag: e, dragConstraints: i } = this.getProps(),
      { projection: s } = this.visualElement
    if (!$(i) || !s || !this.constraints) return
    this.stopAnimation()
    const o = { x: 0, y: 0 }
    w((n) => {
      const r = this.getAxisMotionValue(n)
      if (r && this.constraints !== !1) {
        const a = r.get()
        o[n] = bs({ min: a, max: a }, this.constraints[n])
      }
    })
    const { transformTemplate: h } = this.visualElement.getProps()
    ;(this.visualElement.current.style.transform = h ? h({}, '') : 'none'),
      s.root && s.root.updateScroll(),
      s.updateLayout(),
      this.resolveConstraints(),
      w((n) => {
        if (!q(n, e, null)) return
        const r = this.getAxisMotionValue(n),
          { min: a, max: l } = this.constraints[n]
        r.set(S(a, l, o[n]))
      })
  }
  addListeners() {
    if (!this.visualElement.current) return
    js.set(this.visualElement, this)
    const e = this.visualElement.current,
      i = B(e, 'pointerdown', (a) => {
        const { drag: l, dragListener: c = !0 } = this.getProps()
        l && c && this.start(a)
      }),
      s = () => {
        const { dragConstraints: a } = this.getProps()
        $(a) && (this.constraints = this.resolveRefConstraints())
      },
      { projection: o } = this.visualElement,
      h = o.addEventListener('measure', s)
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), s()
    const n = R(window, 'resize', () => this.scalePositionWithinConstraints()),
      r = o.addEventListener('didUpdate', ({ delta: a, hasLayoutChanged: l }) => {
        this.isDragging &&
          l &&
          (w((c) => {
            const u = this.getAxisMotionValue(c)
            u && ((this.originPoint[c] += a[c].translate), u.set(u.get() + a[c].translate))
          }),
          this.visualElement.render())
      })
    return () => {
      n(), i(), h(), r && r()
    }
  }
  getProps() {
    const e = this.visualElement.getProps(),
      {
        drag: i = !1,
        dragDirectionLock: s = !1,
        dragPropagation: o = !1,
        dragConstraints: h = !1,
        dragElastic: n = xt,
        dragMomentum: r = !0,
      } = e
    return {
      ...e,
      drag: i,
      dragDirectionLock: s,
      dragPropagation: o,
      dragConstraints: h,
      dragElastic: n,
      dragMomentum: r,
    }
  }
}
function q(t, e, i) {
  return (e === !0 || e === t) && (i === null || i === t)
}
function ks(t, e = 10) {
  let i = null
  return Math.abs(t.y) > e ? (i = 'y') : Math.abs(t.x) > e && (i = 'x'), i
}
class Fs extends k {
  constructor(e) {
    super(e),
      (this.removeGroupControls = j),
      (this.removeListeners = j),
      (this.controls = new Bs(e))
  }
  mount() {
    const { dragControls: e } = this.node.getProps()
    e && (this.removeGroupControls = e.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || j)
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners()
  }
}
const Zt = (t) => (e, i) => {
  t && t(e, i)
}
class Is extends k {
  constructor() {
    super(...arguments), (this.removePointerDownListener = j)
  }
  onPointerDown(e) {
    this.session = new Ne(e, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: $e(this.node),
    })
  }
  createPanHandlers() {
    const { onPanSessionStart: e, onPanStart: i, onPan: s, onPanEnd: o } = this.node.getProps()
    return {
      onSessionStart: Zt(e),
      onStart: Zt(i),
      onMove: s,
      onEnd: (h, n) => {
        delete this.session, o && o(h, n)
      },
    }
  }
  mount() {
    this.removePointerDownListener = B(this.node.current, 'pointerdown', (e) =>
      this.onPointerDown(e),
    )
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers())
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end()
  }
}
function Os() {
  const t = g.useContext(Dt)
  if (t === null) return [!0, null]
  const { isPresent: e, onExitComplete: i, register: s } = t,
    o = g.useId()
  return g.useEffect(() => s(o), []), !e && i ? [!1, () => i && i(o)] : [!0]
}
const J = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 }
function Jt(t, e) {
  return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100
}
const W = {
    correct: (t, e) => {
      if (!e.target) return t
      if (typeof t == 'string')
        if (De.test(t)) t = parseFloat(t)
        else return t
      const i = Jt(t, e.target.x),
        s = Jt(t, e.target.y)
      return `${i}% ${s}%`
    },
  },
  Us = {
    correct: (t, { treeScale: e, projectionDelta: i }) => {
      const s = t,
        o = Bt.parse(t)
      if (o.length > 5) return s
      const h = Bt.createTransformer(t),
        n = typeof o[0] != 'number' ? 1 : 0,
        r = i.x.scale * e.x,
        a = i.y.scale * e.y
      ;(o[0 + n] /= r), (o[1 + n] /= a)
      const l = S(r, a, 0.5)
      return (
        typeof o[2 + n] == 'number' && (o[2 + n] /= l),
        typeof o[3 + n] == 'number' && (o[3 + n] /= l),
        h(o)
      )
    },
  }
class Gs extends g.Component {
  componentDidMount() {
    const { visualElement: e, layoutGroup: i, switchLayoutGroup: s, layoutId: o } = this.props,
      { projection: h } = e
    gi(Hs),
      h &&
        (i.group && i.group.add(h),
        s && s.register && o && s.register(h),
        h.root.didUpdate(),
        h.addEventListener('animationComplete', () => {
          this.safeToRemove()
        }),
        h.setOptions({ ...h.options, onExitComplete: () => this.safeToRemove() })),
      (J.hasEverUpdated = !0)
  }
  getSnapshotBeforeUpdate(e) {
    const { layoutDependency: i, visualElement: s, drag: o, isPresent: h } = this.props,
      n = s.projection
    return (
      n &&
        ((n.isPresent = h),
        o || e.layoutDependency !== i || i === void 0 ? n.willUpdate() : this.safeToRemove(),
        e.isPresent !== h &&
          (h
            ? n.promote()
            : n.relegate() ||
              M.postRender(() => {
                const r = n.getStack()
                ;(!r || !r.members.length) && this.safeToRemove()
              }))),
      null
    )
  }
  componentDidUpdate() {
    const { projection: e } = this.props.visualElement
    e &&
      (e.root.didUpdate(),
      Ct.postRender(() => {
        !e.currentAnimation && e.isLead() && this.safeToRemove()
      }))
  }
  componentWillUnmount() {
    const { visualElement: e, layoutGroup: i, switchLayoutGroup: s } = this.props,
      { projection: o } = e
    o &&
      (o.scheduleCheckAfterUnmount(),
      i && i.group && i.group.remove(o),
      s && s.deregister && s.deregister(o))
  }
  safeToRemove() {
    const { safeToRemove: e } = this.props
    e && e()
  }
  render() {
    return null
  }
}
function ze(t) {
  const [e, i] = Os(),
    s = g.useContext(be)
  return mt.jsx(Gs, {
    ...t,
    layoutGroup: s,
    switchLayoutGroup: g.useContext(Re),
    isPresent: e,
    safeToRemove: i,
  })
}
const Hs = {
    borderRadius: {
      ...W,
      applyTo: [
        'borderTopLeftRadius',
        'borderTopRightRadius',
        'borderBottomLeftRadius',
        'borderBottomRightRadius',
      ],
    },
    borderTopLeftRadius: W,
    borderTopRightRadius: W,
    borderBottomLeftRadius: W,
    borderBottomRightRadius: W,
    boxShadow: Us,
  },
  _e = ['TopLeft', 'TopRight', 'BottomLeft', 'BottomRight'],
  Ns = _e.length,
  Qt = (t) => (typeof t == 'string' ? parseFloat(t) : t),
  te = (t) => typeof t == 'number' || De.test(t)
function Ws(t, e, i, s, o, h) {
  o
    ? ((t.opacity = S(0, i.opacity !== void 0 ? i.opacity : 1, $s(s))),
      (t.opacityExit = S(e.opacity !== void 0 ? e.opacity : 1, 0, zs(s))))
    : h &&
      (t.opacity = S(e.opacity !== void 0 ? e.opacity : 1, i.opacity !== void 0 ? i.opacity : 1, s))
  for (let n = 0; n < Ns; n++) {
    const r = `border${_e[n]}Radius`
    let a = ee(e, r),
      l = ee(i, r)
    if (a === void 0 && l === void 0) continue
    a || (a = 0),
      l || (l = 0),
      a === 0 || l === 0 || te(a) === te(l)
        ? ((t[r] = Math.max(S(Qt(a), Qt(l), s), 0)), (Q.test(l) || Q.test(a)) && (t[r] += '%'))
        : (t[r] = l)
  }
  ;(e.rotate || i.rotate) && (t.rotate = S(e.rotate || 0, i.rotate || 0, s))
}
function ee(t, e) {
  return t[e] !== void 0 ? t[e] : t.borderRadius
}
const $s = Ke(0, 0.5, yi),
  zs = Ke(0.5, 0.95, j)
function Ke(t, e, i) {
  return (s) => (s < t ? 0 : s > e ? 1 : i(gt(t, e, s)))
}
function ie(t, e) {
  ;(t.min = e.min), (t.max = e.max)
}
function V(t, e) {
  ie(t.x, e.x), ie(t.y, e.y)
}
function se(t, e, i, s, o) {
  return (t -= e), (t = kt(t, 1 / i, s)), o !== void 0 && (t = kt(t, 1 / o, s)), t
}
function _s(t, e = 0, i = 1, s = 0.5, o, h = t, n = t) {
  if (
    (Q.test(e) && ((e = parseFloat(e)), (e = S(n.min, n.max, e / 100) - n.min)),
    typeof e != 'number')
  )
    return
  let r = S(h.min, h.max, s)
  t === h && (r -= e), (t.min = se(t.min, e, i, r, o)), (t.max = se(t.max, e, i, r, o))
}
function ne(t, e, [i, s, o], h, n) {
  _s(t, e[i], e[s], e[o], e.scale, h, n)
}
const Ks = ['x', 'scaleX', 'originX'],
  Xs = ['y', 'scaleY', 'originY']
function oe(t, e, i, s) {
  ne(t.x, e, Ks, i ? i.x : void 0, s ? s.x : void 0),
    ne(t.y, e, Xs, i ? i.y : void 0, s ? s.y : void 0)
}
function re(t) {
  return t.translate === 0 && t.scale === 1
}
function Xe(t) {
  return re(t.x) && re(t.y)
}
function Ys(t, e) {
  return t.x.min === e.x.min && t.x.max === e.x.max && t.y.min === e.y.min && t.y.max === e.y.max
}
function Ye(t, e) {
  return (
    Math.round(t.x.min) === Math.round(e.x.min) &&
    Math.round(t.x.max) === Math.round(e.x.max) &&
    Math.round(t.y.min) === Math.round(e.y.min) &&
    Math.round(t.y.max) === Math.round(e.y.max)
  )
}
function ae(t) {
  return L(t.x) / L(t.y)
}
class qs {
  constructor() {
    this.members = []
  }
  add(e) {
    Ce(this.members, e), e.scheduleRender()
  }
  remove(e) {
    if ((Le(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead)) {
      const i = this.members[this.members.length - 1]
      i && this.promote(i)
    }
  }
  relegate(e) {
    const i = this.members.findIndex((o) => e === o)
    if (i === 0) return !1
    let s
    for (let o = i; o >= 0; o--) {
      const h = this.members[o]
      if (h.isPresent !== !1) {
        s = h
        break
      }
    }
    return s ? (this.promote(s), !0) : !1
  }
  promote(e, i) {
    const s = this.lead
    if (e !== s && ((this.prevLead = s), (this.lead = e), e.show(), s)) {
      s.instance && s.scheduleRender(),
        e.scheduleRender(),
        (e.resumeFrom = s),
        i && (e.resumeFrom.preserveOpacity = !0),
        s.snapshot &&
          ((e.snapshot = s.snapshot),
          (e.snapshot.latestValues = s.animationValues || s.latestValues)),
        e.root && e.root.isUpdating && (e.isLayoutDirty = !0)
      const { crossfade: o } = e.options
      o === !1 && s.hide()
    }
  }
  exitAnimationComplete() {
    this.members.forEach((e) => {
      const { options: i, resumingFrom: s } = e
      i.onExitComplete && i.onExitComplete(),
        s && s.options.onExitComplete && s.options.onExitComplete()
    })
  }
  scheduleRender() {
    this.members.forEach((e) => {
      e.instance && e.scheduleRender(!1)
    })
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
  }
}
function le(t, e, i) {
  let s = ''
  const o = t.x.translate / e.x,
    h = t.y.translate / e.y,
    n = i?.z || 0
  if (
    ((o || h || n) && (s = `translate3d(${o}px, ${h}px, ${n}px) `),
    (e.x !== 1 || e.y !== 1) && (s += `scale(${1 / e.x}, ${1 / e.y}) `),
    i)
  ) {
    const { transformPerspective: l, rotate: c, rotateX: u, rotateY: f, skewX: d, skewY: p } = i
    l && (s = `perspective(${l}px) ${s}`),
      c && (s += `rotate(${c}deg) `),
      u && (s += `rotateX(${u}deg) `),
      f && (s += `rotateY(${f}deg) `),
      d && (s += `skewX(${d}deg) `),
      p && (s += `skewY(${p}deg) `)
  }
  const r = t.x.scale * e.x,
    a = t.y.scale * e.y
  return (r !== 1 || a !== 1) && (s += `scale(${r}, ${a})`), s || 'none'
}
const Zs = (t, e) => t.depth - e.depth
class Js {
  constructor() {
    ;(this.children = []), (this.isDirty = !1)
  }
  add(e) {
    Ce(this.children, e), (this.isDirty = !0)
  }
  remove(e) {
    Le(this.children, e), (this.isDirty = !0)
  }
  forEach(e) {
    this.isDirty && this.children.sort(Zs), (this.isDirty = !1), this.children.forEach(e)
  }
}
function Qs(t, e) {
  const i = Ve.now(),
    s = ({ timestamp: o }) => {
      const h = o - i
      h >= e && (K(s), t(h - e))
    }
  return M.read(s, !0), () => K(s)
}
function tn(t) {
  window.MotionDebug && window.MotionDebug.record(t)
}
const ht = ['', 'X', 'Y', 'Z'],
  en = { visibility: 'hidden' },
  ce = 1e3
let sn = 0
const I = {
  type: 'projectionFrame',
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0,
}
function ft(t, e, i, s) {
  const { latestValues: o } = e
  o[t] && ((i[t] = o[t]), e.setStaticValue(t, 0), s && (s[t] = 0))
}
function qe({
  attachResizeListener: t,
  defaultParent: e,
  measureScroll: i,
  checkIsScrollRoot: s,
  resetTransform: o,
}) {
  return class {
    constructor(n = {}, r = e?.()) {
      ;(this.id = sn++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots())
        }),
        (this.updateProjection = () => {
          ;(this.projectionUpdateScheduled = !1),
            (I.totalNodes = I.resolvedTargetDeltas = I.recalculatedProjection = 0),
            this.nodes.forEach(rn),
            this.nodes.forEach(hn),
            this.nodes.forEach(fn),
            this.nodes.forEach(an),
            tn(I)
        }),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = n),
        (this.root = r ? r.root || r : this),
        (this.path = r ? [...r.path, r] : []),
        (this.parent = r),
        (this.depth = r ? r.depth + 1 : 0)
      for (let a = 0; a < this.path.length; a++) this.path[a].shouldResetTransform = !0
      this.root === this && (this.nodes = new Js())
    }
    addEventListener(n, r) {
      return (
        this.eventHandlers.has(n) || this.eventHandlers.set(n, new vi()),
        this.eventHandlers.get(n).add(r)
      )
    }
    notifyListeners(n, ...r) {
      const a = this.eventHandlers.get(n)
      a && a.notify(...r)
    }
    hasListeners(n) {
      return this.eventHandlers.has(n)
    }
    mount(n, r = this.root.hasTreeAnimated) {
      if (this.instance) return
      ;(this.isSVG = Pi(n)), (this.instance = n)
      const { layoutId: a, layout: l, visualElement: c } = this.options
      if (
        (c && !c.current && c.mount(n),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        r && (l || a) && (this.isLayoutDirty = !0),
        t)
      ) {
        let u
        const f = () => (this.root.updateBlockedByResize = !1)
        t(n, () => {
          ;(this.root.updateBlockedByResize = !0),
            u && u(),
            (u = Qs(f, 250)),
            J.hasAnimatedSinceResize && ((J.hasAnimatedSinceResize = !1), this.nodes.forEach(he))
        })
      }
      a && this.root.registerSharedNode(a, this),
        this.options.animate !== !1 &&
          c &&
          (a || l) &&
          this.addEventListener(
            'didUpdate',
            ({ delta: u, hasLayoutChanged: f, hasRelativeTargetChanged: d, layout: p }) => {
              if (this.isTreeAnimationBlocked()) {
                ;(this.target = void 0), (this.relativeTarget = void 0)
                return
              }
              const m = this.options.transition || c.getDefaultTransition() || yn,
                { onLayoutAnimationStart: x, onLayoutAnimationComplete: v } = c.getProps(),
                P = !this.targetLayout || !Ye(this.targetLayout, p) || d,
                y = !f && d
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                y ||
                (f && (P || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(u, y)
                const A = { ...xi(m, 'layout'), onPlay: x, onComplete: v }
                ;(c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((A.delay = 0), (A.type = !1)),
                  this.startAnimation(A)
              } else
                f || he(this),
                  this.isLead() && this.options.onExitComplete && this.options.onExitComplete()
              this.targetLayout = p
            },
          )
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this)
      const n = this.getStack()
      n && n.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        K(this.updateProjection)
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || (this.parent && this.parent.isTreeAnimationBlocked()) || !1
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0), this.nodes && this.nodes.forEach(dn), this.animationId++)
    }
    getTransformTemplate() {
      const { visualElement: n } = this.options
      return n && n.getProps().transformTemplate
    }
    willUpdate(n = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete()
        return
      }
      if ((!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)) return
      this.isLayoutDirty = !0
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c]
        ;(u.shouldResetTransform = !0),
          u.updateScroll('snapshot'),
          u.options.layoutRoot && u.willUpdate(!1)
      }
      const { layoutId: r, layout: a } = this.options
      if (r === void 0 && !a) return
      const l = this.getTransformTemplate()
      ;(this.prevTransformTemplateValue = l ? l(this.latestValues, '') : void 0),
        this.updateSnapshot(),
        n && this.notifyListeners('willUpdate')
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(ue)
        return
      }
      this.isUpdating || this.nodes.forEach(cn),
        (this.isUpdating = !1),
        window.HandoffCancelAllAnimations && window.HandoffCancelAllAnimations(),
        this.nodes.forEach(un),
        this.nodes.forEach(nn),
        this.nodes.forEach(on),
        this.clearAllSnapshots()
      const r = Ve.now()
      ;(C.delta = Ae(0, 1e3 / 60, r - C.timestamp)),
        (C.timestamp = r),
        (C.isProcessing = !0),
        rt.update.process(C),
        rt.preRender.process(C),
        rt.render.process(C),
        (C.isProcessing = !1)
    }
    didUpdate() {
      this.updateScheduled || ((this.updateScheduled = !0), Ct.read(() => this.update()))
    }
    clearAllSnapshots() {
      this.nodes.forEach(ln), this.sharedNodes.forEach(mn)
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0), M.preRender(this.updateProjection, !1, !0))
    }
    scheduleCheckAfterUnmount() {
      M.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
      })
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure())
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)
      )
        return
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let a = 0; a < this.path.length; a++) this.path[a].updateScroll()
      const n = this.layout
      ;(this.layout = this.measure(!1)),
        (this.layoutCorrected = T()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners('measure', this.layout.layoutBox)
      const { visualElement: r } = this.options
      r && r.notify('LayoutMeasure', this.layout.layoutBox, n ? n.layoutBox : void 0)
    }
    updateScroll(n = 'measure') {
      let r = !!(this.options.layoutScroll && this.instance)
      this.scroll &&
        this.scroll.animationId === this.root.animationId &&
        this.scroll.phase === n &&
        (r = !1),
        r &&
          (this.scroll = {
            animationId: this.root.animationId,
            phase: n,
            isRoot: s(this.instance),
            offset: i(this.instance),
          })
    }
    resetTransform() {
      if (!o) return
      const n = this.isLayoutDirty || this.shouldResetTransform,
        r = this.projectionDelta && !Xe(this.projectionDelta),
        a = this.getTransformTemplate(),
        l = a ? a(this.latestValues, '') : void 0,
        c = l !== this.prevTransformTemplateValue
      n &&
        (r || O(this.latestValues) || c) &&
        (o(this.instance, l), (this.shouldResetTransform = !1), this.scheduleRender())
    }
    measure(n = !0) {
      const r = this.measurePageBox()
      let a = this.removeElementScroll(r)
      return (
        n && (a = this.removeTransform(a)),
        vn(a),
        {
          animationId: this.root.animationId,
          measuredBox: r,
          layoutBox: a,
          latestValues: {},
          source: this.id,
        }
      )
    }
    measurePageBox() {
      const { visualElement: n } = this.options
      if (!n) return T()
      const r = n.measureViewportBox(),
        { scroll: a } = this.root
      return a && (U(r.x, a.offset.x), U(r.y, a.offset.y)), r
    }
    removeElementScroll(n) {
      const r = T()
      V(r, n)
      for (let a = 0; a < this.path.length; a++) {
        const l = this.path[a],
          { scroll: c, options: u } = l
        if (l !== this.root && c && u.layoutScroll) {
          if (c.isRoot) {
            V(r, n)
            const { scroll: f } = this.root
            f && (U(r.x, -f.offset.x), U(r.y, -f.offset.y))
          }
          U(r.x, c.offset.x), U(r.y, c.offset.y)
        }
      }
      return r
    }
    applyTransform(n, r = !1) {
      const a = T()
      V(a, n)
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l]
        !r &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          Y(a, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          O(c.latestValues) && Y(a, c.latestValues)
      }
      return O(this.latestValues) && Y(a, this.latestValues), a
    }
    removeTransform(n) {
      const r = T()
      V(r, n)
      for (let a = 0; a < this.path.length; a++) {
        const l = this.path[a]
        if (!l.instance || !O(l.latestValues)) continue
        Ft(l.latestValues) && l.updateSnapshot()
        const c = T(),
          u = l.measurePageBox()
        V(c, u), oe(r, l.latestValues, l.snapshot ? l.snapshot.layoutBox : void 0, c)
      }
      return O(this.latestValues) && oe(r, this.latestValues), r
    }
    setTargetDelta(n) {
      ;(this.targetDelta = n), this.root.scheduleUpdateProjection(), (this.isProjectionDirty = !0)
    }
    setOptions(n) {
      this.options = { ...this.options, ...n, crossfade: n.crossfade !== void 0 ? n.crossfade : !0 }
    }
    clearMeasurements() {
      ;(this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1)
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== C.timestamp &&
        this.relativeParent.resolveTargetDelta(!0)
    }
    resolveTargetDelta(n = !1) {
      var r
      const a = this.getLead()
      this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
        this.isSharedProjectionDirty || (this.isSharedProjectionDirty = a.isSharedProjectionDirty)
      const l = !!this.resumingFrom || this !== a
      if (
        !(
          n ||
          (l && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((r = this.parent) === null || r === void 0) && r.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget
        )
      )
        return
      const { layout: u, layoutId: f } = this.options
      if (!(!this.layout || !(u || f))) {
        if (
          ((this.resolvedRelativeTargetAt = C.timestamp), !this.targetDelta && !this.relativeTarget)
        ) {
          const d = this.getClosestProjectingParent()
          d && d.layout && this.animationProgress !== 1
            ? ((this.relativeParent = d),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = T()),
              (this.relativeTargetOrigin = T()),
              _(this.relativeTargetOrigin, this.layout.layoutBox, d.layout.layoutBox),
              V(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0)
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target || ((this.target = T()), (this.targetWithTransforms = T())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                Ls(this.target, this.relativeTarget, this.relativeParent.target))
              : this.targetDelta
                ? (this.resumingFrom
                    ? (this.target = this.applyTransform(this.layout.layoutBox))
                    : V(this.target, this.layout.layoutBox),
                  Ti(this.target, this.targetDelta))
                : V(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1
            const d = this.getClosestProjectingParent()
            d &&
            !!d.resumingFrom == !!this.resumingFrom &&
            !d.options.layoutScroll &&
            d.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = d),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = T()),
                (this.relativeTargetOrigin = T()),
                _(this.relativeTargetOrigin, this.target, d.target),
                V(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0)
          }
          I.resolvedTargetDeltas++
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Ft(this.parent.latestValues) || Si(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
    }
    calcProjection() {
      var n
      const r = this.getLead(),
        a = !!this.resumingFrom || this !== r
      let l = !0
      if (
        ((this.isProjectionDirty ||
          (!((n = this.parent) === null || n === void 0) && n.isProjectionDirty)) &&
          (l = !1),
        a && (this.isSharedProjectionDirty || this.isTransformDirty) && (l = !1),
        this.resolvedRelativeTargetAt === C.timestamp && (l = !1),
        l)
      )
        return
      const { layout: c, layoutId: u } = this.options
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || u))
      )
        return
      V(this.layoutCorrected, this.layout.layoutBox)
      const f = this.treeScale.x,
        d = this.treeScale.y
      Ai(this.layoutCorrected, this.treeScale, this.path, a),
        r.layout &&
          !r.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((r.target = r.layout.layoutBox), (r.targetWithTransforms = T()))
      const { target: p } = r
      if (!p) {
        this.projectionTransform &&
          ((this.projectionDelta = G()), (this.projectionTransform = 'none'), this.scheduleRender())
        return
      }
      this.projectionDelta ||
        ((this.projectionDelta = G()), (this.projectionDeltaWithTransform = G()))
      const m = this.projectionTransform
      z(this.projectionDelta, this.layoutCorrected, p, this.latestValues),
        (this.projectionTransform = le(this.projectionDelta, this.treeScale)),
        (this.projectionTransform !== m || this.treeScale.x !== f || this.treeScale.y !== d) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners('projectionUpdate', p)),
        I.recalculatedProjection++
    }
    hide() {
      this.isVisible = !1
    }
    show() {
      this.isVisible = !0
    }
    scheduleRender(n = !0) {
      if ((this.options.scheduleRender && this.options.scheduleRender(), n)) {
        const r = this.getStack()
        r && r.scheduleRender()
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
    }
    setAnimationOrigin(n, r = !1) {
      const a = this.snapshot,
        l = a ? a.latestValues : {},
        c = { ...this.latestValues },
        u = G()
      ;(!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !r)
      const f = T(),
        d = a ? a.source : void 0,
        p = this.layout ? this.layout.source : void 0,
        m = d !== p,
        x = this.getStack(),
        v = !x || x.members.length <= 1,
        P = !!(m && !v && this.options.crossfade === !0 && !this.path.some(gn))
      this.animationProgress = 0
      let y
      ;(this.mixTargetDelta = (A) => {
        const E = A / 1e3
        fe(u.x, n.x, E),
          fe(u.y, n.y, E),
          this.setTargetDelta(u),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (_(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            pn(this.relativeTarget, this.relativeTargetOrigin, f, E),
            y && Ys(this.relativeTarget, y) && (this.isProjectionDirty = !1),
            y || (y = T()),
            V(y, this.relativeTarget)),
          m && ((this.animationValues = c), Ws(c, l, this.latestValues, E, P, v)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = E)
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
    }
    startAnimation(n) {
      this.notifyListeners('animationStart'),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation && (K(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = M.update(() => {
          ;(J.hasAnimatedSinceResize = !0),
            (this.currentAnimation = Di(0, ce, {
              ...n,
              onUpdate: (r) => {
                this.mixTargetDelta(r), n.onUpdate && n.onUpdate(r)
              },
              onComplete: () => {
                n.onComplete && n.onComplete(), this.completeAnimation()
              },
            })),
            this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0)
        }))
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0))
      const n = this.getStack()
      n && n.exitAnimationComplete(),
        (this.resumingFrom = this.currentAnimation = this.animationValues = void 0),
        this.notifyListeners('animationComplete')
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(ce), this.currentAnimation.stop()),
        this.completeAnimation()
    }
    applyTransformsToTarget() {
      const n = this.getLead()
      let { targetWithTransforms: r, target: a, layout: l, latestValues: c } = n
      if (!(!r || !a || !l)) {
        if (
          this !== n &&
          this.layout &&
          l &&
          Ze(this.options.animationType, this.layout.layoutBox, l.layoutBox)
        ) {
          a = this.target || T()
          const u = L(this.layout.layoutBox.x)
          ;(a.x.min = n.target.x.min), (a.x.max = a.x.min + u)
          const f = L(this.layout.layoutBox.y)
          ;(a.y.min = n.target.y.min), (a.y.max = a.y.min + f)
        }
        V(r, a), Y(r, c), z(this.projectionDeltaWithTransform, this.layoutCorrected, r, c)
      }
    }
    registerSharedNode(n, r) {
      this.sharedNodes.has(n) || this.sharedNodes.set(n, new qs()), this.sharedNodes.get(n).add(r)
      const l = r.options.initialPromotionConfig
      r.promote({
        transition: l ? l.transition : void 0,
        preserveFollowOpacity:
          l && l.shouldPreserveFollowOpacity ? l.shouldPreserveFollowOpacity(r) : void 0,
      })
    }
    isLead() {
      const n = this.getStack()
      return n ? n.lead === this : !0
    }
    getLead() {
      var n
      const { layoutId: r } = this.options
      return r ? ((n = this.getStack()) === null || n === void 0 ? void 0 : n.lead) || this : this
    }
    getPrevLead() {
      var n
      const { layoutId: r } = this.options
      return r ? ((n = this.getStack()) === null || n === void 0 ? void 0 : n.prevLead) : void 0
    }
    getStack() {
      const { layoutId: n } = this.options
      if (n) return this.root.sharedNodes.get(n)
    }
    promote({ needsReset: n, transition: r, preserveFollowOpacity: a } = {}) {
      const l = this.getStack()
      l && l.promote(this, a),
        n && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        r && this.setOptions({ transition: r })
    }
    relegate() {
      const n = this.getStack()
      return n ? n.relegate(this) : !1
    }
    resetSkewAndRotation() {
      const { visualElement: n } = this.options
      if (!n) return
      let r = !1
      const { latestValues: a } = n
      if (
        ((a.z || a.rotate || a.rotateX || a.rotateY || a.rotateZ || a.skewX || a.skewY) && (r = !0),
        !r)
      )
        return
      const l = {}
      a.z && ft('z', n, l, this.animationValues)
      for (let c = 0; c < ht.length; c++)
        ft(`rotate${ht[c]}`, n, l, this.animationValues),
          ft(`skew${ht[c]}`, n, l, this.animationValues)
      n.render()
      for (const c in l)
        n.setStaticValue(c, l[c]), this.animationValues && (this.animationValues[c] = l[c])
      n.scheduleRender()
    }
    getProjectionStyles(n) {
      var r, a
      if (!this.instance || this.isSVG) return
      if (!this.isVisible) return en
      const l = { visibility: '' },
        c = this.getTransformTemplate()
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (l.opacity = ''),
          (l.pointerEvents = Z(n?.pointerEvents) || ''),
          (l.transform = c ? c(this.latestValues, '') : 'none'),
          l
        )
      const u = this.getLead()
      if (!this.projectionDelta || !this.layout || !u.target) {
        const m = {}
        return (
          this.options.layoutId &&
            ((m.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1),
            (m.pointerEvents = Z(n?.pointerEvents) || '')),
          this.hasProjected &&
            !O(this.latestValues) &&
            ((m.transform = c ? c({}, '') : 'none'), (this.hasProjected = !1)),
          m
        )
      }
      const f = u.animationValues || u.latestValues
      this.applyTransformsToTarget(),
        (l.transform = le(this.projectionDeltaWithTransform, this.treeScale, f)),
        c && (l.transform = c(f, l.transform))
      const { x: d, y: p } = this.projectionDelta
      ;(l.transformOrigin = `${d.origin * 100}% ${p.origin * 100}% 0`),
        u.animationValues
          ? (l.opacity =
              u === this
                ? (a = (r = f.opacity) !== null && r !== void 0 ? r : this.latestValues.opacity) !==
                    null && a !== void 0
                  ? a
                  : 1
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : f.opacityExit)
          : (l.opacity =
              u === this
                ? f.opacity !== void 0
                  ? f.opacity
                  : ''
                : f.opacityExit !== void 0
                  ? f.opacityExit
                  : 0)
      for (const m in It) {
        if (f[m] === void 0) continue
        const { correct: x, applyTo: v } = It[m],
          P = l.transform === 'none' ? f[m] : x(f[m], u)
        if (v) {
          const y = v.length
          for (let A = 0; A < y; A++) l[v[A]] = P
        } else l[m] = P
      }
      return (
        this.options.layoutId &&
          (l.pointerEvents = u === this ? Z(n?.pointerEvents) || '' : 'none'),
        l
      )
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0
    }
    resetTree() {
      this.root.nodes.forEach((n) => {
        var r
        return (r = n.currentAnimation) === null || r === void 0 ? void 0 : r.stop()
      }),
        this.root.nodes.forEach(ue),
        this.root.sharedNodes.clear()
    }
  }
}
function nn(t) {
  t.updateLayout()
}
function on(t) {
  var e
  const i = ((e = t.resumeFrom) === null || e === void 0 ? void 0 : e.snapshot) || t.snapshot
  if (t.isLead() && t.layout && i && t.hasListeners('didUpdate')) {
    const { layoutBox: s, measuredBox: o } = t.layout,
      { animationType: h } = t.options,
      n = i.source !== t.layout.source
    h === 'size'
      ? w((u) => {
          const f = n ? i.measuredBox[u] : i.layoutBox[u],
            d = L(f)
          ;(f.min = s[u].min), (f.max = f.min + d)
        })
      : Ze(h, i.layoutBox, s) &&
        w((u) => {
          const f = n ? i.measuredBox[u] : i.layoutBox[u],
            d = L(s[u])
          ;(f.max = f.min + d),
            t.relativeTarget &&
              !t.currentAnimation &&
              ((t.isProjectionDirty = !0), (t.relativeTarget[u].max = t.relativeTarget[u].min + d))
        })
    const r = G()
    z(r, s, i.layoutBox)
    const a = G()
    n ? z(a, t.applyTransform(o, !0), i.measuredBox) : z(a, s, i.layoutBox)
    const l = !Xe(r)
    let c = !1
    if (!t.resumeFrom) {
      const u = t.getClosestProjectingParent()
      if (u && !u.resumeFrom) {
        const { snapshot: f, layout: d } = u
        if (f && d) {
          const p = T()
          _(p, i.layoutBox, f.layoutBox)
          const m = T()
          _(m, s, d.layoutBox),
            Ye(p, m) || (c = !0),
            u.options.layoutRoot &&
              ((t.relativeTarget = m), (t.relativeTargetOrigin = p), (t.relativeParent = u))
        }
      }
    }
    t.notifyListeners('didUpdate', {
      layout: s,
      snapshot: i,
      delta: a,
      layoutDelta: r,
      hasLayoutChanged: l,
      hasRelativeTargetChanged: c,
    })
  } else if (t.isLead()) {
    const { onExitComplete: s } = t.options
    s && s()
  }
  t.options.transition = void 0
}
function rn(t) {
  I.totalNodes++,
    t.parent &&
      (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty),
      t.isSharedProjectionDirty ||
        (t.isSharedProjectionDirty = !!(
          t.isProjectionDirty ||
          t.parent.isProjectionDirty ||
          t.parent.isSharedProjectionDirty
        )),
      t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
}
function an(t) {
  t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
}
function ln(t) {
  t.clearSnapshot()
}
function ue(t) {
  t.clearMeasurements()
}
function cn(t) {
  t.isLayoutDirty = !1
}
function un(t) {
  const { visualElement: e } = t.options
  e && e.getProps().onBeforeLayoutMeasure && e.notify('BeforeLayoutMeasure'), t.resetTransform()
}
function he(t) {
  t.finishAnimation(),
    (t.targetDelta = t.relativeTarget = t.target = void 0),
    (t.isProjectionDirty = !0)
}
function hn(t) {
  t.resolveTargetDelta()
}
function fn(t) {
  t.calcProjection()
}
function dn(t) {
  t.resetSkewAndRotation()
}
function mn(t) {
  t.removeLeadSnapshot()
}
function fe(t, e, i) {
  ;(t.translate = S(e.translate, 0, i)),
    (t.scale = S(e.scale, 1, i)),
    (t.origin = e.origin),
    (t.originPoint = e.originPoint)
}
function de(t, e, i, s) {
  ;(t.min = S(e.min, i.min, s)), (t.max = S(e.max, i.max, s))
}
function pn(t, e, i, s) {
  de(t.x, e.x, i.x, s), de(t.y, e.y, i.y, s)
}
function gn(t) {
  return t.animationValues && t.animationValues.opacityExit !== void 0
}
const yn = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  me = (t) =>
    typeof navigator < 'u' && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t),
  pe = me('applewebkit/') && !me('chrome/') ? Math.round : j
function ge(t) {
  ;(t.min = pe(t.min)), (t.max = pe(t.max))
}
function vn(t) {
  ge(t.x), ge(t.y)
}
function Ze(t, e, i) {
  return t === 'position' || (t === 'preserve-aspect' && !Pt(ae(e), ae(i), 0.2))
}
const Pn = qe({
    attachResizeListener: (t, e) => R(t, 'resize', e),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  dt = { current: void 0 },
  Je = qe({
    measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
    defaultParent: () => {
      if (!dt.current) {
        const t = new Pn({})
        t.mount(window), t.setOptions({ layoutScroll: !0 }), (dt.current = t)
      }
      return dt.current
    },
    resetTransform: (t, e) => {
      t.style.transform = e !== void 0 ? e : 'none'
    },
    checkIsScrollRoot: (t) => window.getComputedStyle(t).position === 'fixed',
  }),
  xn = { pan: { Feature: Is }, drag: { Feature: Fs, ProjectionNode: Je, MeasureLayout: ze } },
  Tn = (t, e) =>
    Lt(t)
      ? new Ci(e, { enableHardwareAcceleration: !1 })
      : new Li(e, { allowProjection: t !== g.Fragment, enableHardwareAcceleration: !0 }),
  Sn = { layout: { ProjectionNode: Je, MeasureLayout: ze } },
  An = { ...Ss, ...cs, ...xn, ...Sn },
  bn = Fi((t, e) => Zi(t, e, An, Tn))
export { be as L, we as M, Dt as P, _i as a, bn as m, Vi as u }