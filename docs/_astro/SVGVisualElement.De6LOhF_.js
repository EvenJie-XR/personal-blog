const us = typeof document < 'u',
  we = (t) => t.replace(/([a-z])([A-Z])/gu, '$1-$2').toLowerCase(),
  cs = 'framerAppearId',
  hs = 'data-' + we(cs),
  fs = { skipAnimations: !1, useManualTiming: !1 }
class Ee {
  constructor() {
    ;(this.order = []), (this.scheduled = new Set())
  }
  add(e) {
    if (!this.scheduled.has(e)) return this.scheduled.add(e), this.order.push(e), !0
  }
  remove(e) {
    const s = this.order.indexOf(e)
    s !== -1 && (this.order.splice(s, 1), this.scheduled.delete(e))
  }
  clear() {
    ;(this.order.length = 0), this.scheduled.clear()
  }
}
function ds(t) {
  let e = new Ee(),
    s = new Ee(),
    n = 0,
    r = !1,
    i = !1
  const o = new WeakSet(),
    a = {
      schedule: (l, c = !1, u = !1) => {
        const h = u && r,
          f = h ? e : s
        return c && o.add(l), f.add(l) && h && r && (n = e.order.length), l
      },
      cancel: (l) => {
        s.remove(l), o.delete(l)
      },
      process: (l) => {
        if (r) {
          i = !0
          return
        }
        if (((r = !0), ([e, s] = [s, e]), s.clear(), (n = e.order.length), n))
          for (let c = 0; c < n; c++) {
            const u = e.order[c]
            o.has(u) && (a.schedule(u), t()), u(l)
          }
        ;(r = !1), i && ((i = !1), a.process(l))
      },
    }
  return a
}
const ee = ['read', 'resolveKeyframes', 'update', 'preRender', 'render', 'postRender'],
  ps = 40
function ms(t, e) {
  let s = !1,
    n = !0
  const r = { delta: 0, timestamp: 0, isProcessing: !1 },
    i = ee.reduce((h, f) => ((h[f] = ds(() => (s = !0))), h), {}),
    o = (h) => {
      i[h].process(r)
    },
    a = () => {
      const h = performance.now()
      ;(s = !1),
        (r.delta = n ? 1e3 / 60 : Math.max(Math.min(h - r.timestamp, ps), 1)),
        (r.timestamp = h),
        (r.isProcessing = !0),
        ee.forEach(o),
        (r.isProcessing = !1),
        s && e && ((n = !1), t(a))
    },
    l = () => {
      ;(s = !0), (n = !0), r.isProcessing || t(a)
    }
  return {
    schedule: ee.reduce((h, f) => {
      const d = i[f]
      return (h[f] = (m, g = !1, b = !1) => (s || l(), d.schedule(m, g, b))), h
    }, {}),
    cancel: (h) => ee.forEach((f) => i[f].cancel(h)),
    state: r,
    steps: i,
  }
}
function gs(t) {
  return t && typeof t == 'object' && Object.prototype.hasOwnProperty.call(t, 'current')
}
function dt(t) {
  return typeof t == 'string' || Array.isArray(t)
}
function ys(t) {
  return t !== null && typeof t == 'object' && typeof t.start == 'function'
}
const vs = ['animate', 'whileInView', 'whileFocus', 'whileHover', 'whileTap', 'whileDrag', 'exit'],
  Se = ['initial', ...vs]
function pt(t) {
  return ys(t.animate) || Se.some((e) => dt(t[e]))
}
function bs(t) {
  return !!(pt(t) || t.variants)
}
const ke = {
    animation: [
      'animate',
      'variants',
      'whileHover',
      'whileTap',
      'exit',
      'whileInView',
      'whileFocus',
      'whileDrag',
    ],
    exit: ['exit'],
    drag: ['drag', 'dragControls'],
    focus: ['whileFocus'],
    hover: ['whileHover', 'onHoverStart', 'onHoverEnd'],
    tap: ['whileTap', 'onTap', 'onTapStart', 'onTapCancel'],
    pan: ['onPan', 'onPanStart', 'onPanSessionStart', 'onPanEnd'],
    inView: ['whileInView', 'onViewportEnter', 'onViewportLeave'],
    layout: ['layout', 'layoutId'],
  },
  Me = {}
for (const t in ke) Me[t] = { isEnabled: (e) => ke[t].some((s) => !!e[s]) }
const mt = {}
function _r(t) {
  Object.assign(mt, t)
}
const q = [
    'transformPerspective',
    'x',
    'y',
    'z',
    'translateX',
    'translateY',
    'translateZ',
    'scale',
    'scaleX',
    'scaleY',
    'rotate',
    'rotateX',
    'rotateY',
    'rotateZ',
    'skew',
    'skewX',
    'skewY',
  ],
  E = new Set(q)
function Ts(t, { layout: e, layoutId: s }) {
  return E.has(t) || t.startsWith('origin') || ((e || s !== void 0) && (!!mt[t] || t === 'opacity'))
}
const S = (t) => !!(t && t.getVelocity),
  Vs = { x: 'translateX', y: 'translateY', z: 'translateZ', transformPerspective: 'perspective' },
  xs = q.length
function ws(t, { enableHardwareAcceleration: e = !0, allowTransformNone: s = !0 }, n, r) {
  let i = ''
  for (let o = 0; o < xs; o++) {
    const a = q[o]
    if (t[a] !== void 0) {
      const l = Vs[a] || a
      i += `${l}(${t[a]}) `
    }
  }
  return (
    e && !t.z && (i += 'translateZ(0)'),
    (i = i.trim()),
    r ? (i = r(t, n ? '' : i)) : s && n && (i = 'none'),
    i
  )
}
const gt = (t) => (e) => typeof e == 'string' && e.startsWith(t),
  yt = gt('--'),
  Ss = gt('var(--'),
  Ae = (t) => (Ss(t) ? Ms.test(t.split('/*')[0].trim()) : !1),
  Ms = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  As = (t, e) => (e && typeof t == 'number' ? e.transform(t) : t),
  _ = (t, e, s) => (s > e ? e : s < t ? t : s),
  U = { test: (t) => typeof t == 'number', parse: parseFloat, transform: (t) => t },
  z = { ...U, transform: (t) => _(0, 1, t) },
  te = { ...U, default: 1 },
  Y = (t) => Math.round(t * 1e5) / 1e5,
  Ce = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
  Cs =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
  Ps =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu
function H(t) {
  return typeof t == 'string'
}
const Z = (t) => ({
    test: (e) => H(e) && e.endsWith(t) && e.split(' ').length === 1,
    parse: parseFloat,
    transform: (e) => `${e}${t}`,
  }),
  F = Z('deg'),
  L = Z('%'),
  p = Z('px'),
  Fs = Z('vh'),
  Rs = Z('vw'),
  Le = { ...L, parse: (t) => L.parse(t) / 100, transform: (t) => L.transform(t * 100) },
  je = { ...U, transform: Math.round },
  vt = {
    borderWidth: p,
    borderTopWidth: p,
    borderRightWidth: p,
    borderBottomWidth: p,
    borderLeftWidth: p,
    borderRadius: p,
    radius: p,
    borderTopLeftRadius: p,
    borderTopRightRadius: p,
    borderBottomRightRadius: p,
    borderBottomLeftRadius: p,
    width: p,
    maxWidth: p,
    height: p,
    maxHeight: p,
    size: p,
    top: p,
    right: p,
    bottom: p,
    left: p,
    padding: p,
    paddingTop: p,
    paddingRight: p,
    paddingBottom: p,
    paddingLeft: p,
    margin: p,
    marginTop: p,
    marginRight: p,
    marginBottom: p,
    marginLeft: p,
    rotate: F,
    rotateX: F,
    rotateY: F,
    rotateZ: F,
    scale: te,
    scaleX: te,
    scaleY: te,
    scaleZ: te,
    skew: F,
    skewX: F,
    skewY: F,
    distance: p,
    translateX: p,
    translateY: p,
    translateZ: p,
    x: p,
    y: p,
    z: p,
    perspective: p,
    transformPerspective: p,
    opacity: z,
    originX: Le,
    originY: Le,
    originZ: p,
    zIndex: je,
    backgroundPositionX: p,
    backgroundPositionY: p,
    fillOpacity: z,
    strokeOpacity: z,
    numOctaves: je,
  }
function bt(t, e, s, n) {
  const { style: r, vars: i, transform: o, transformOrigin: a } = t
  let l = !1,
    c = !1,
    u = !0
  for (const h in e) {
    const f = e[h]
    if (yt(h)) {
      i[h] = f
      continue
    }
    const d = vt[h],
      m = As(f, d)
    if (E.has(h)) {
      if (((l = !0), (o[h] = m), !u)) continue
      f !== (d.default || 0) && (u = !1)
    } else h.startsWith('origin') ? ((c = !0), (a[h] = m)) : (r[h] = m)
  }
  if (
    (e.transform ||
      (l || n ? (r.transform = ws(t.transform, s, u, n)) : r.transform && (r.transform = 'none')),
    c)
  ) {
    const { originX: h = '50%', originY: f = '50%', originZ: d = 0 } = a
    r.transformOrigin = `${h} ${f} ${d}`
  }
}
function _e(t, e, s) {
  return typeof t == 'string' ? t : p.transform(e + s * t)
}
function Os(t, e, s) {
  const n = _e(e, t.x, t.width),
    r = _e(s, t.y, t.height)
  return `${n} ${r}`
}
const Ds = { offset: 'stroke-dashoffset', array: 'stroke-dasharray' },
  Bs = { offset: 'strokeDashoffset', array: 'strokeDasharray' }
function Is(t, e, s = 1, n = 0, r = !0) {
  t.pathLength = 1
  const i = r ? Ds : Bs
  t[i.offset] = p.transform(-n)
  const o = p.transform(e),
    a = p.transform(s)
  t[i.array] = `${o} ${a}`
}
function Ks(
  t,
  {
    attrX: e,
    attrY: s,
    attrScale: n,
    originX: r,
    originY: i,
    pathLength: o,
    pathSpacing: a = 1,
    pathOffset: l = 0,
    ...c
  },
  u,
  h,
  f,
) {
  if ((bt(t, c, u, f), h)) {
    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox)
    return
  }
  ;(t.attrs = t.style), (t.style = {})
  const { attrs: d, style: m, dimensions: g } = t
  d.transform && (g && (m.transform = d.transform), delete d.transform),
    g &&
      (r !== void 0 || i !== void 0 || m.transform) &&
      (m.transformOrigin = Os(g, r !== void 0 ? r : 0.5, i !== void 0 ? i : 0.5)),
    e !== void 0 && (d.x = e),
    s !== void 0 && (d.y = s),
    n !== void 0 && (d.scale = n),
    o !== void 0 && Is(d, o, a, l, !1)
}
const Ns = (t) => typeof t == 'string' && t.toLowerCase() === 'svg'
function Tt(t, { style: e, vars: s }, n, r) {
  Object.assign(t.style, e, r && r.getProjectionStyles(n))
  for (const i in s) t.style.setProperty(i, s[i])
}
const Vt = new Set([
  'baseFrequency',
  'diffuseConstant',
  'kernelMatrix',
  'kernelUnitLength',
  'keySplines',
  'keyTimes',
  'limitingConeAngle',
  'markerHeight',
  'markerWidth',
  'numOctaves',
  'targetX',
  'targetY',
  'surfaceScale',
  'specularConstant',
  'specularExponent',
  'stdDeviation',
  'tableValues',
  'viewBox',
  'gradientTransform',
  'pathLength',
  'startOffset',
  'textLength',
  'lengthAdjust',
])
function Es(t, e, s, n) {
  Tt(t, e, void 0, n)
  for (const r in e.attrs) t.setAttribute(Vt.has(r) ? r : we(r), e.attrs[r])
}
function xt(t, e, s) {
  var n
  const { style: r } = t,
    i = {}
  for (const o in r)
    (S(r[o]) ||
      (e.style && S(e.style[o])) ||
      Ts(o, t) ||
      ((n = s?.getValue(o)) === null || n === void 0 ? void 0 : n.liveStyle) !== void 0) &&
      (i[o] = r[o])
  return i
}
function ks(t, e, s) {
  const n = xt(t, e, s)
  for (const r in t)
    if (S(t[r]) || S(e[r])) {
      const i = q.indexOf(r) !== -1 ? 'attr' + r.charAt(0).toUpperCase() + r.substring(1) : r
      n[i] = t[r]
    }
  return n
}
function wt(t, e, s, n = {}, r = {}) {
  return (
    typeof e == 'function' && (e = e(s !== void 0 ? s : t.custom, n, r)),
    typeof e == 'string' && (e = t.variants && t.variants[e]),
    typeof e == 'function' && (e = e(s !== void 0 ? s : t.custom, n, r)),
    e
  )
}
const Ls = (t) => Array.isArray(t),
  Wr = (t) => !!(t && typeof t == 'object' && t.mix && t.toValue),
  js = (t) => (Ls(t) ? t[t.length - 1] || 0 : t),
  N = (t) => t,
  {
    schedule: O,
    cancel: pe,
    state: ne,
    steps: Ur,
  } = ms(typeof requestAnimationFrame < 'u' ? requestAnimationFrame : N, !0),
  _s = (t, e) => (s) => e(t(s)),
  Pe = (...t) => t.reduce(_s)
function Ws(t) {
  const e = {}
  return t.values.forEach((s, n) => (e[n] = s.get())), e
}
function Us(t) {
  const e = {}
  return t.values.forEach((s, n) => (e[n] = s.getVelocity())), e
}
function $s(t, e, s) {
  const n = t.getProps()
  return wt(n, e, s !== void 0 ? s : n.custom, Ws(t), Us(t))
}
const I = (t) => t * 1e3,
  R = (t) => t / 1e3,
  Gs = { type: 'spring', stiffness: 500, damping: 25, restSpeed: 10 },
  zs = (t) => ({
    type: 'spring',
    stiffness: 550,
    damping: t === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  Ys = { type: 'keyframes', duration: 0.8 },
  Xs = { type: 'keyframes', ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  qs = (t, { keyframes: e }) =>
    e.length > 2 ? Ys : E.has(t) ? (t.startsWith('scale') ? zs(e[1]) : Gs) : Xs
function Hs({
  when: t,
  delay: e,
  delayChildren: s,
  staggerChildren: n,
  staggerDirection: r,
  repeat: i,
  repeatType: o,
  repeatDelay: a,
  from: l,
  elapsed: c,
  ...u
}) {
  return !!Object.keys(u).length
}
function St(t, e) {
  return t[e] || t.default || t
}
const Zs = (t) => t !== null
function le(t, { repeat: e, repeatType: s = 'loop' }, n) {
  const r = t.filter(Zs),
    i = e && s !== 'loop' && e % 2 === 1 ? 0 : r.length - 1
  return !i || n === void 0 ? r[i] : n
}
let se
function Qs() {
  se = void 0
}
const j = {
    now: () => (
      se === void 0 &&
        j.set(ne.isProcessing || fs.useManualTiming ? ne.timestamp : performance.now()),
      se
    ),
    set: (t) => {
      ;(se = t), queueMicrotask(Qs)
    },
  },
  Mt = (t) => /^0[^.\s]+$/u.test(t)
function Js(t) {
  return typeof t == 'number' ? t === 0 : t !== null ? t === 'none' || t === '0' || Mt(t) : !0
}
let At = N
const Ct = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),
  en = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
function tn(t) {
  const e = en.exec(t)
  if (!e) return [,]
  const [, s, n, r] = e
  return [`--${s ?? n}`, r]
}
function Pt(t, e, s = 1) {
  const [n, r] = tn(t)
  if (!n) return
  const i = window.getComputedStyle(e).getPropertyValue(n)
  if (i) {
    const o = i.trim()
    return Ct(o) ? parseFloat(o) : o
  }
  return Ae(r) ? Pt(r, e, s + 1) : r
}
const sn = new Set([
    'width',
    'height',
    'top',
    'left',
    'right',
    'bottom',
    'x',
    'y',
    'translateX',
    'translateY',
  ]),
  We = (t) => t === U || t === p,
  Ue = (t, e) => parseFloat(t.split(', ')[e]),
  $e =
    (t, e) =>
    (s, { transform: n }) => {
      if (n === 'none' || !n) return 0
      const r = n.match(/^matrix3d\((.+)\)$/u)
      if (r) return Ue(r[1], e)
      {
        const i = n.match(/^matrix\((.+)\)$/u)
        return i ? Ue(i[1], t) : 0
      }
    },
  nn = new Set(['x', 'y', 'z']),
  rn = q.filter((t) => !nn.has(t))
function on(t) {
  const e = []
  return (
    rn.forEach((s) => {
      const n = t.getValue(s)
      n !== void 0 && (e.push([s, n.get()]), n.set(s.startsWith('scale') ? 1 : 0))
    }),
    e
  )
}
const W = {
  width: ({ x: t }, { paddingLeft: e = '0', paddingRight: s = '0' }) =>
    t.max - t.min - parseFloat(e) - parseFloat(s),
  height: ({ y: t }, { paddingTop: e = '0', paddingBottom: s = '0' }) =>
    t.max - t.min - parseFloat(e) - parseFloat(s),
  top: (t, { top: e }) => parseFloat(e),
  left: (t, { left: e }) => parseFloat(e),
  bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
  right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
  x: $e(4, 13),
  y: $e(5, 14),
}
W.translateX = W.x
W.translateY = W.y
const Ft = (t) => (e) => e.test(t),
  an = { test: (t) => t === 'auto', parse: (t) => t },
  Rt = [U, p, L, F, Rs, Fs, an],
  Ge = (t) => Rt.find(Ft(t)),
  K = new Set()
let me = !1,
  ge = !1
function Ot() {
  if (ge) {
    const t = Array.from(K).filter((n) => n.needsMeasurement),
      e = new Set(t.map((n) => n.element)),
      s = new Map()
    e.forEach((n) => {
      const r = on(n)
      r.length && (s.set(n, r), n.render())
    }),
      t.forEach((n) => n.measureInitialState()),
      e.forEach((n) => {
        n.render()
        const r = s.get(n)
        r &&
          r.forEach(([i, o]) => {
            var a
            ;(a = n.getValue(i)) === null || a === void 0 || a.set(o)
          })
      }),
      t.forEach((n) => n.measureEndState()),
      t.forEach((n) => {
        n.suspendedScrollY !== void 0 && window.scrollTo(0, n.suspendedScrollY)
      })
  }
  ;(ge = !1), (me = !1), K.forEach((t) => t.complete()), K.clear()
}
function Dt() {
  K.forEach((t) => {
    t.readKeyframes(), t.needsMeasurement && (ge = !0)
  })
}
function ln() {
  Dt(), Ot()
}
class Fe {
  constructor(e, s, n, r, i, o = !1) {
    ;(this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...e]),
      (this.onComplete = s),
      (this.name = n),
      (this.motionValue = r),
      (this.element = i),
      (this.isAsync = o)
  }
  scheduleResolve() {
    ;(this.isScheduled = !0),
      this.isAsync
        ? (K.add(this), me || ((me = !0), O.read(Dt), O.resolveKeyframes(Ot)))
        : (this.readKeyframes(), this.complete())
  }
  readKeyframes() {
    const { unresolvedKeyframes: e, name: s, element: n, motionValue: r } = this
    for (let i = 0; i < e.length; i++)
      if (e[i] === null)
        if (i === 0) {
          const o = r?.get(),
            a = e[e.length - 1]
          if (o !== void 0) e[0] = o
          else if (n && s) {
            const l = n.readValue(s, a)
            l != null && (e[0] = l)
          }
          e[0] === void 0 && (e[0] = a), r && o === void 0 && r.set(e[0])
        } else e[i] = e[i - 1]
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    ;(this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      K.delete(this)
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), K.delete(this))
  }
  resume() {
    this.isComplete || this.scheduleResolve()
  }
}
const Re = (t, e) => (s) =>
    !!(
      (H(s) && Ps.test(s) && s.startsWith(t)) ||
      (e && Object.prototype.hasOwnProperty.call(s, e))
    ),
  Bt = (t, e, s) => (n) => {
    if (!H(n)) return n
    const [r, i, o, a] = n.match(Ce)
    return {
      [t]: parseFloat(r),
      [e]: parseFloat(i),
      [s]: parseFloat(o),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    }
  },
  un = (t) => _(0, 255, t),
  ue = { ...U, transform: (t) => Math.round(un(t)) },
  B = {
    test: Re('rgb', 'red'),
    parse: Bt('red', 'green', 'blue'),
    transform: ({ red: t, green: e, blue: s, alpha: n = 1 }) =>
      'rgba(' +
      ue.transform(t) +
      ', ' +
      ue.transform(e) +
      ', ' +
      ue.transform(s) +
      ', ' +
      Y(z.transform(n)) +
      ')',
  }
function cn(t) {
  let e = '',
    s = '',
    n = '',
    r = ''
  return (
    t.length > 5
      ? ((e = t.substring(1, 3)),
        (s = t.substring(3, 5)),
        (n = t.substring(5, 7)),
        (r = t.substring(7, 9)))
      : ((e = t.substring(1, 2)),
        (s = t.substring(2, 3)),
        (n = t.substring(3, 4)),
        (r = t.substring(4, 5)),
        (e += e),
        (s += s),
        (n += n),
        (r += r)),
    {
      red: parseInt(e, 16),
      green: parseInt(s, 16),
      blue: parseInt(n, 16),
      alpha: r ? parseInt(r, 16) / 255 : 1,
    }
  )
}
const ye = { test: Re('#'), parse: cn, transform: B.transform },
  k = {
    test: Re('hsl', 'hue'),
    parse: Bt('hue', 'saturation', 'lightness'),
    transform: ({ hue: t, saturation: e, lightness: s, alpha: n = 1 }) =>
      'hsla(' +
      Math.round(t) +
      ', ' +
      L.transform(Y(e)) +
      ', ' +
      L.transform(Y(s)) +
      ', ' +
      Y(z.transform(n)) +
      ')',
  },
  x = {
    test: (t) => B.test(t) || ye.test(t) || k.test(t),
    parse: (t) => (B.test(t) ? B.parse(t) : k.test(t) ? k.parse(t) : ye.parse(t)),
    transform: (t) => (H(t) ? t : t.hasOwnProperty('red') ? B.transform(t) : k.transform(t)),
  }
function hn(t) {
  var e, s
  return (
    isNaN(t) &&
    H(t) &&
    (((e = t.match(Ce)) === null || e === void 0 ? void 0 : e.length) || 0) +
      (((s = t.match(Cs)) === null || s === void 0 ? void 0 : s.length) || 0) >
      0
  )
}
const It = 'number',
  Kt = 'color',
  fn = 'var',
  dn = 'var(',
  ze = '${}',
  pn =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu
function re(t) {
  const e = t.toString(),
    s = [],
    n = { color: [], number: [], var: [] },
    r = []
  let i = 0
  const a = e
    .replace(
      pn,
      (l) => (
        x.test(l)
          ? (n.color.push(i), r.push(Kt), s.push(x.parse(l)))
          : l.startsWith(dn)
            ? (n.var.push(i), r.push(fn), s.push(l))
            : (n.number.push(i), r.push(It), s.push(parseFloat(l))),
        ++i,
        ze
      ),
    )
    .split(ze)
  return { values: s, split: a, indexes: n, types: r }
}
function Nt(t) {
  return re(t).values
}
function Et(t) {
  const { split: e, types: s } = re(t),
    n = e.length
  return (r) => {
    let i = ''
    for (let o = 0; o < n; o++)
      if (((i += e[o]), r[o] !== void 0)) {
        const a = s[o]
        a === It ? (i += Y(r[o])) : a === Kt ? (i += x.transform(r[o])) : (i += r[o])
      }
    return i
  }
}
const mn = (t) => (typeof t == 'number' ? 0 : t)
function gn(t) {
  const e = Nt(t)
  return Et(t)(e.map(mn))
}
const $ = { test: hn, parse: Nt, createTransformer: Et, getAnimatableNone: gn },
  yn = new Set(['brightness', 'contrast', 'saturate', 'opacity'])
function vn(t) {
  const [e, s] = t.slice(0, -1).split('(')
  if (e === 'drop-shadow') return t
  const [n] = s.match(Ce) || []
  if (!n) return t
  const r = s.replace(n, '')
  let i = yn.has(e) ? 1 : 0
  return n !== s && (i *= 100), e + '(' + i + r + ')'
}
const bn = /\b([a-z-]*)\(.*?\)/gu,
  ve = {
    ...$,
    getAnimatableNone: (t) => {
      const e = t.match(bn)
      return e ? e.map(vn).join(' ') : t
    },
  },
  Tn = {
    ...vt,
    color: x,
    backgroundColor: x,
    outlineColor: x,
    fill: x,
    stroke: x,
    borderColor: x,
    borderTopColor: x,
    borderRightColor: x,
    borderBottomColor: x,
    borderLeftColor: x,
    filter: ve,
    WebkitFilter: ve,
  },
  Oe = (t) => Tn[t]
function kt(t, e) {
  let s = Oe(t)
  return s !== ve && (s = $), s.getAnimatableNone ? s.getAnimatableNone(e) : void 0
}
function Vn(t, e, s) {
  let n = 0,
    r
  for (; n < t.length && !r; )
    typeof t[n] == 'string' && t[n] !== 'none' && t[n] !== '0' && (r = t[n]), n++
  if (r && s) for (const i of e) t[i] = kt(s, r)
}
class Lt extends Fe {
  constructor(e, s, n, r) {
    super(e, s, n, r, r?.owner, !0)
  }
  readKeyframes() {
    const { unresolvedKeyframes: e, element: s, name: n } = this
    if (!s.current) return
    super.readKeyframes()
    for (let l = 0; l < e.length; l++) {
      const c = e[l]
      if (typeof c == 'string' && Ae(c)) {
        const u = Pt(c, s.current)
        u !== void 0 && (e[l] = u), l === e.length - 1 && (this.finalKeyframe = c)
      }
    }
    if (!sn.has(n) || e.length !== 2) return this.resolveNoneKeyframes()
    const [r, i] = e,
      o = Ge(r),
      a = Ge(i)
    if (o !== a)
      if (We(o) && We(a))
        for (let l = 0; l < e.length; l++) {
          const c = e[l]
          typeof c == 'string' && (e[l] = parseFloat(c))
        }
      else this.needsMeasurement = !0
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: e, name: s } = this,
      n = []
    for (let r = 0; r < e.length; r++) Js(e[r]) && n.push(r)
    n.length && Vn(e, n, s)
  }
  measureInitialState() {
    const { element: e, unresolvedKeyframes: s, name: n } = this
    if (!e.current) return
    n === 'height' && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = W[n](e.measureViewportBox(), window.getComputedStyle(e.current))),
      (s[0] = this.measuredOrigin)
    const r = s[s.length - 1]
    r !== void 0 && e.getValue(n, r).jump(r, !1)
  }
  measureEndState() {
    var e
    const { element: s, name: n, unresolvedKeyframes: r } = this
    if (!s.current) return
    const i = s.getValue(n)
    i && i.jump(this.measuredOrigin, !1)
    const o = r.length - 1,
      a = r[o]
    ;(r[o] = W[n](s.measureViewportBox(), window.getComputedStyle(s.current))),
      a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a),
      !((e = this.removedTransforms) === null || e === void 0) &&
        e.length &&
        this.removedTransforms.forEach(([l, c]) => {
          s.getValue(l).set(c)
        }),
      this.resolveNoneKeyframes()
  }
}
function xn(t) {
  let e
  return () => (e === void 0 && (e = t()), e)
}
const Ye = (t, e) =>
  e === 'zIndex'
    ? !1
    : !!(
        typeof t == 'number' ||
        Array.isArray(t) ||
        (typeof t == 'string' && ($.test(t) || t === '0') && !t.startsWith('url('))
      )
function wn(t) {
  const e = t[0]
  if (t.length === 1) return !0
  for (let s = 0; s < t.length; s++) if (t[s] !== e) return !0
}
function Sn(t, e, s, n) {
  const r = t[0]
  if (r === null) return !1
  const i = t[t.length - 1],
    o = Ye(r, e),
    a = Ye(i, e)
  return !o || !a ? !1 : wn(t) || (s === 'spring' && n)
}
class jt {
  constructor({
    autoplay: e = !0,
    delay: s = 0,
    type: n = 'keyframes',
    repeat: r = 0,
    repeatDelay: i = 0,
    repeatType: o = 'loop',
    ...a
  }) {
    ;(this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.options = {
        autoplay: e,
        delay: s,
        type: n,
        repeat: r,
        repeatDelay: i,
        repeatType: o,
        ...a,
      }),
      this.updateFinishedPromise()
  }
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && ln(), this._resolved
  }
  onKeyframesResolved(e, s) {
    this.hasAttemptedResolve = !0
    const {
      name: n,
      type: r,
      velocity: i,
      delay: o,
      onComplete: a,
      onUpdate: l,
      isGenerator: c,
    } = this.options
    if (!c && !Sn(e, n, r, i))
      if (o) this.options.duration = 0
      else {
        l?.(le(e, this.options, s)), a?.(), this.resolveFinishedPromise()
        return
      }
    const u = this.initPlayback(e, s)
    u !== !1 && ((this._resolved = { keyframes: e, finalKeyframe: s, ...u }), this.onPostResolved())
  }
  onPostResolved() {}
  then(e, s) {
    return this.currentFinishedPromise.then(e, s)
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((e) => {
      this.resolveFinishedPromise = e
    })
  }
}
function _t(t, e) {
  return e ? t * (1e3 / e) : 0
}
const Mn = 5
function Wt(t, e, s) {
  const n = Math.max(e - Mn, 0)
  return _t(s - t(n), e - n)
}
const ce = 0.001,
  An = 0.01,
  Cn = 10,
  Pn = 0.05,
  Fn = 1
function Rn({ duration: t = 800, bounce: e = 0.25, velocity: s = 0, mass: n = 1 }) {
  let r,
    i,
    o = 1 - e
  ;(o = _(Pn, Fn, o)),
    (t = _(An, Cn, R(t))),
    o < 1
      ? ((r = (c) => {
          const u = c * o,
            h = u * t,
            f = u - s,
            d = be(c, o),
            m = Math.exp(-h)
          return ce - (f / d) * m
        }),
        (i = (c) => {
          const h = c * o * t,
            f = h * s + s,
            d = Math.pow(o, 2) * Math.pow(c, 2) * t,
            m = Math.exp(-h),
            g = be(Math.pow(c, 2), o)
          return ((-r(c) + ce > 0 ? -1 : 1) * ((f - d) * m)) / g
        }))
      : ((r = (c) => {
          const u = Math.exp(-c * t),
            h = (c - s) * t + 1
          return -ce + u * h
        }),
        (i = (c) => {
          const u = Math.exp(-c * t),
            h = (s - c) * (t * t)
          return u * h
        }))
  const a = 5 / t,
    l = Dn(r, i, a)
  if (((t = I(t)), isNaN(l))) return { stiffness: 100, damping: 10, duration: t }
  {
    const c = Math.pow(l, 2) * n
    return { stiffness: c, damping: o * 2 * Math.sqrt(n * c), duration: t }
  }
}
const On = 12
function Dn(t, e, s) {
  let n = s
  for (let r = 1; r < On; r++) n = n - t(n) / e(n)
  return n
}
function be(t, e) {
  return t * Math.sqrt(1 - e * e)
}
const Bn = ['duration', 'bounce'],
  In = ['stiffness', 'damping', 'mass']
function Xe(t, e) {
  return e.some((s) => t[s] !== void 0)
}
function Kn(t) {
  let e = { velocity: 0, stiffness: 100, damping: 10, mass: 1, isResolvedFromDuration: !1, ...t }
  if (!Xe(t, In) && Xe(t, Bn)) {
    const s = Rn(t)
    ;(e = { ...e, ...s, mass: 1 }), (e.isResolvedFromDuration = !0)
  }
  return e
}
function Ut({ keyframes: t, restDelta: e, restSpeed: s, ...n }) {
  const r = t[0],
    i = t[t.length - 1],
    o = { done: !1, value: r },
    {
      stiffness: a,
      damping: l,
      mass: c,
      duration: u,
      velocity: h,
      isResolvedFromDuration: f,
    } = Kn({ ...n, velocity: -R(n.velocity || 0) }),
    d = h || 0,
    m = l / (2 * Math.sqrt(a * c)),
    g = i - r,
    b = R(Math.sqrt(a / c)),
    w = Math.abs(g) < 5
  s || (s = w ? 0.01 : 2), e || (e = w ? 0.005 : 0.5)
  let M
  if (m < 1) {
    const v = be(b, m)
    M = (V) => {
      const T = Math.exp(-m * b * V)
      return i - T * (((d + m * b * g) / v) * Math.sin(v * V) + g * Math.cos(v * V))
    }
  } else if (m === 1) M = (v) => i - Math.exp(-b * v) * (g + (d + b * g) * v)
  else {
    const v = b * Math.sqrt(m * m - 1)
    M = (V) => {
      const T = Math.exp(-m * b * V),
        A = Math.min(v * V, 300)
      return i - (T * ((d + m * b * g) * Math.sinh(A) + v * g * Math.cosh(A))) / v
    }
  }
  return {
    calculatedDuration: (f && u) || null,
    next: (v) => {
      const V = M(v)
      if (f) o.done = v >= u
      else {
        let T = d
        v !== 0 && (m < 1 ? (T = Wt(M, v, V)) : (T = 0))
        const A = Math.abs(T) <= s,
          D = Math.abs(i - V) <= e
        o.done = A && D
      }
      return (o.value = o.done ? i : V), o
    },
  }
}
function qe({
  keyframes: t,
  velocity: e = 0,
  power: s = 0.8,
  timeConstant: n = 325,
  bounceDamping: r = 10,
  bounceStiffness: i = 500,
  modifyTarget: o,
  min: a,
  max: l,
  restDelta: c = 0.5,
  restSpeed: u,
}) {
  const h = t[0],
    f = { done: !1, value: h },
    d = (y) => (a !== void 0 && y < a) || (l !== void 0 && y > l),
    m = (y) => (a === void 0 ? l : l === void 0 || Math.abs(a - y) < Math.abs(l - y) ? a : l)
  let g = s * e
  const b = h + g,
    w = o === void 0 ? b : o(b)
  w !== b && (g = w - h)
  const M = (y) => -g * Math.exp(-y / n),
    v = (y) => w + M(y),
    V = (y) => {
      const C = M(y),
        P = v(y)
      ;(f.done = Math.abs(C) <= c), (f.value = f.done ? w : P)
    }
  let T, A
  const D = (y) => {
    d(f.value) &&
      ((T = y),
      (A = Ut({
        keyframes: [f.value, m(f.value)],
        velocity: Wt(v, y, f.value),
        damping: r,
        stiffness: i,
        restDelta: c,
        restSpeed: u,
      })))
  }
  return (
    D(0),
    {
      calculatedDuration: null,
      next: (y) => {
        let C = !1
        return (
          !A && T === void 0 && ((C = !0), V(y), D(y)),
          T !== void 0 && y >= T ? A.next(y - T) : (!C && V(y), f)
        )
      },
    }
  )
}
const $t = (t, e, s) => (((1 - 3 * s + 3 * e) * t + (3 * s - 6 * e)) * t + 3 * e) * t,
  Nn = 1e-7,
  En = 12
function kn(t, e, s, n, r) {
  let i,
    o,
    a = 0
  do (o = e + (s - e) / 2), (i = $t(o, n, r) - t), i > 0 ? (s = o) : (e = o)
  while (Math.abs(i) > Nn && ++a < En)
  return o
}
function Q(t, e, s, n) {
  if (t === e && s === n) return N
  const r = (i) => kn(i, 0, 1, t, s)
  return (i) => (i === 0 || i === 1 ? i : $t(r(i), e, n))
}
const Ln = Q(0.42, 0, 1, 1),
  jn = Q(0, 0, 0.58, 1),
  Gt = Q(0.42, 0, 0.58, 1),
  _n = (t) => Array.isArray(t) && typeof t[0] != 'number',
  zt = (t) => (e) => (e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2),
  Yt = (t) => (e) => 1 - t(1 - e),
  De = (t) => 1 - Math.sin(Math.acos(t)),
  Wn = Yt(De),
  Un = zt(De),
  Xt = Q(0.33, 1.53, 0.69, 0.99),
  Be = Yt(Xt),
  $n = zt(Be),
  Gn = (t) => ((t *= 2) < 1 ? 0.5 * Be(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1)))),
  zn = {
    linear: N,
    easeIn: Ln,
    easeInOut: Gt,
    easeOut: jn,
    circIn: De,
    circInOut: Un,
    circOut: Wn,
    backIn: Be,
    backInOut: $n,
    backOut: Xt,
    anticipate: Gn,
  },
  He = (t) => {
    if (Array.isArray(t)) {
      At(t.length === 4)
      const [e, s, n, r] = t
      return Q(e, s, n, r)
    } else if (typeof t == 'string') return zn[t]
    return t
  },
  qt = (t, e, s) => {
    const n = e - t
    return n === 0 ? 1 : (s - t) / n
  },
  J = (t, e, s) => t + (e - t) * s
function he(t, e, s) {
  return (
    s < 0 && (s += 1),
    s > 1 && (s -= 1),
    s < 1 / 6 ? t + (e - t) * 6 * s : s < 1 / 2 ? e : s < 2 / 3 ? t + (e - t) * (2 / 3 - s) * 6 : t
  )
}
function Yn({ hue: t, saturation: e, lightness: s, alpha: n }) {
  ;(t /= 360), (e /= 100), (s /= 100)
  let r = 0,
    i = 0,
    o = 0
  if (!e) r = i = o = s
  else {
    const a = s < 0.5 ? s * (1 + e) : s + e - s * e,
      l = 2 * s - a
    ;(r = he(l, a, t + 1 / 3)), (i = he(l, a, t)), (o = he(l, a, t - 1 / 3))
  }
  return {
    red: Math.round(r * 255),
    green: Math.round(i * 255),
    blue: Math.round(o * 255),
    alpha: n,
  }
}
const fe = (t, e, s) => {
    const n = t * t,
      r = s * (e * e - n) + n
    return r < 0 ? 0 : Math.sqrt(r)
  },
  Xn = [ye, B, k],
  qn = (t) => Xn.find((e) => e.test(t))
function Ze(t) {
  const e = qn(t)
  let s = e.parse(t)
  return e === k && (s = Yn(s)), s
}
const Qe = (t, e) => {
  const s = Ze(t),
    n = Ze(e),
    r = { ...s }
  return (i) => (
    (r.red = fe(s.red, n.red, i)),
    (r.green = fe(s.green, n.green, i)),
    (r.blue = fe(s.blue, n.blue, i)),
    (r.alpha = J(s.alpha, n.alpha, i)),
    B.transform(r)
  )
}
function Te(t, e) {
  return (s) => (s > 0 ? e : t)
}
function Hn(t, e) {
  return (s) => J(t, e, s)
}
function Ie(t) {
  return typeof t == 'number'
    ? Hn
    : typeof t == 'string'
      ? Ae(t)
        ? Te
        : x.test(t)
          ? Qe
          : Jn
      : Array.isArray(t)
        ? Ht
        : typeof t == 'object'
          ? x.test(t)
            ? Qe
            : Zn
          : Te
}
function Ht(t, e) {
  const s = [...t],
    n = s.length,
    r = t.map((i, o) => Ie(i)(i, e[o]))
  return (i) => {
    for (let o = 0; o < n; o++) s[o] = r[o](i)
    return s
  }
}
function Zn(t, e) {
  const s = { ...t, ...e },
    n = {}
  for (const r in s) t[r] !== void 0 && e[r] !== void 0 && (n[r] = Ie(t[r])(t[r], e[r]))
  return (r) => {
    for (const i in n) s[i] = n[i](r)
    return s
  }
}
function Qn(t, e) {
  var s
  const n = [],
    r = { color: 0, var: 0, number: 0 }
  for (let i = 0; i < e.values.length; i++) {
    const o = e.types[i],
      a = t.indexes[o][r[o]],
      l = (s = t.values[a]) !== null && s !== void 0 ? s : 0
    ;(n[i] = l), r[o]++
  }
  return n
}
const Jn = (t, e) => {
  const s = $.createTransformer(e),
    n = re(t),
    r = re(e)
  return n.indexes.var.length === r.indexes.var.length &&
    n.indexes.color.length === r.indexes.color.length &&
    n.indexes.number.length >= r.indexes.number.length
    ? Pe(Ht(Qn(n, r), r.values), s)
    : Te(t, e)
}
function Zt(t, e, s) {
  return typeof t == 'number' && typeof e == 'number' && typeof s == 'number'
    ? J(t, e, s)
    : Ie(t)(t, e)
}
function er(t, e, s) {
  const n = [],
    r = s || Zt,
    i = t.length - 1
  for (let o = 0; o < i; o++) {
    let a = r(t[o], t[o + 1])
    if (e) {
      const l = Array.isArray(e) ? e[o] || N : e
      a = Pe(l, a)
    }
    n.push(a)
  }
  return n
}
function tr(t, e, { clamp: s = !0, ease: n, mixer: r } = {}) {
  const i = t.length
  if ((At(i === e.length), i === 1)) return () => e[0]
  if (i === 2 && t[0] === t[1]) return () => e[1]
  t[0] > t[i - 1] && ((t = [...t].reverse()), (e = [...e].reverse()))
  const o = er(e, n, r),
    a = o.length,
    l = (c) => {
      let u = 0
      if (a > 1) for (; u < t.length - 2 && !(c < t[u + 1]); u++);
      const h = qt(t[u], t[u + 1], c)
      return o[u](h)
    }
  return s ? (c) => l(_(t[0], t[i - 1], c)) : l
}
function sr(t, e) {
  const s = t[t.length - 1]
  for (let n = 1; n <= e; n++) {
    const r = qt(0, e, n)
    t.push(J(s, 1, r))
  }
}
function nr(t) {
  const e = [0]
  return sr(e, t.length - 1), e
}
function rr(t, e) {
  return t.map((s) => s * e)
}
function ir(t, e) {
  return t.map(() => e || Gt).splice(0, t.length - 1)
}
function ie({ duration: t = 300, keyframes: e, times: s, ease: n = 'easeInOut' }) {
  const r = _n(n) ? n.map(He) : He(n),
    i = { done: !1, value: e[0] },
    o = rr(s && s.length === e.length ? s : nr(e), t),
    a = tr(o, e, { ease: Array.isArray(r) ? r : ir(e, r) })
  return { calculatedDuration: t, next: (l) => ((i.value = a(l)), (i.done = l >= t), i) }
}
const Je = 2e4
function or(t) {
  let e = 0
  const s = 50
  let n = t.next(e)
  for (; !n.done && e < Je; ) (e += s), (n = t.next(e))
  return e >= Je ? 1 / 0 : e
}
const ar = (t) => {
    const e = ({ timestamp: s }) => t(s)
    return {
      start: () => O.update(e, !0),
      stop: () => pe(e),
      now: () => (ne.isProcessing ? ne.timestamp : j.now()),
    }
  },
  lr = { decay: qe, inertia: qe, tween: ie, keyframes: ie, spring: Ut },
  ur = (t) => t / 100
class Ke extends jt {
  constructor({ KeyframeResolver: e = Fe, ...s }) {
    super(s),
      (this.holdTime = null),
      (this.startTime = null),
      (this.cancelTime = null),
      (this.currentTime = 0),
      (this.playbackSpeed = 1),
      (this.pendingPlayState = 'running'),
      (this.state = 'idle')
    const { name: n, motionValue: r, keyframes: i } = this.options,
      o = (a, l) => this.onKeyframesResolved(a, l)
    n && r && r.owner
      ? (this.resolver = r.owner.resolveKeyframes(i, o, n, r))
      : (this.resolver = new e(i, o, n, r)),
      this.resolver.scheduleResolve()
  }
  initPlayback(e) {
    const {
        type: s = 'keyframes',
        repeat: n = 0,
        repeatDelay: r = 0,
        repeatType: i,
        velocity: o = 0,
      } = this.options,
      a = lr[s] || ie
    let l, c
    a !== ie && typeof e[0] != 'number' && ((l = Pe(ur, Zt(e[0], e[1]))), (e = [0, 100]))
    const u = a({ ...this.options, keyframes: e })
    i === 'mirror' && (c = a({ ...this.options, keyframes: [...e].reverse(), velocity: -o })),
      u.calculatedDuration === null && (u.calculatedDuration = or(u))
    const { calculatedDuration: h } = u,
      f = h + r,
      d = f * (n + 1) - r
    return {
      generator: u,
      mirroredGenerator: c,
      mapPercentToKeyframes: l,
      calculatedDuration: h,
      resolvedDuration: f,
      totalDuration: d,
    }
  }
  onPostResolved() {
    const { autoplay: e = !0 } = this.options
    this.play(),
      this.pendingPlayState === 'paused' || !e ? this.pause() : (this.state = this.pendingPlayState)
  }
  tick(e, s = !1) {
    const { resolved: n } = this
    if (!n) {
      const { keyframes: y } = this.options
      return { done: !0, value: y[y.length - 1] }
    }
    const {
      finalKeyframe: r,
      generator: i,
      mirroredGenerator: o,
      mapPercentToKeyframes: a,
      keyframes: l,
      calculatedDuration: c,
      totalDuration: u,
      resolvedDuration: h,
    } = n
    if (this.startTime === null) return i.next(0)
    const { delay: f, repeat: d, repeatType: m, repeatDelay: g, onUpdate: b } = this.options
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, e))
      : this.speed < 0 && (this.startTime = Math.min(e - u / this.speed, this.startTime)),
      s
        ? (this.currentTime = e)
        : this.holdTime !== null
          ? (this.currentTime = this.holdTime)
          : (this.currentTime = Math.round(e - this.startTime) * this.speed)
    const w = this.currentTime - f * (this.speed >= 0 ? 1 : -1),
      M = this.speed >= 0 ? w < 0 : w > u
    ;(this.currentTime = Math.max(w, 0)),
      this.state === 'finished' && this.holdTime === null && (this.currentTime = u)
    let v = this.currentTime,
      V = i
    if (d) {
      const y = Math.min(this.currentTime, u) / h
      let C = Math.floor(y),
        P = y % 1
      !P && y >= 1 && (P = 1),
        P === 1 && C--,
        (C = Math.min(C, d + 1)),
        !!(C % 2) &&
          (m === 'reverse' ? ((P = 1 - P), g && (P -= g / h)) : m === 'mirror' && (V = o)),
        (v = _(0, 1, P) * h)
    }
    const T = M ? { done: !1, value: l[0] } : V.next(v)
    a && (T.value = a(T.value))
    let { done: A } = T
    !M && c !== null && (A = this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0)
    const D =
      this.holdTime === null && (this.state === 'finished' || (this.state === 'running' && A))
    return (
      D && r !== void 0 && (T.value = le(l, this.options, r)),
      b && b(T.value),
      D && this.finish(),
      T
    )
  }
  get duration() {
    const { resolved: e } = this
    return e ? R(e.calculatedDuration) : 0
  }
  get time() {
    return R(this.currentTime)
  }
  set time(e) {
    ;(e = I(e)),
      (this.currentTime = e),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = e)
        : this.driver && (this.startTime = this.driver.now() - e / this.speed)
  }
  get speed() {
    return this.playbackSpeed
  }
  set speed(e) {
    const s = this.playbackSpeed !== e
    ;(this.playbackSpeed = e), s && (this.time = R(this.currentTime))
  }
  play() {
    if ((this.resolver.isScheduled || this.resolver.resume(), !this._resolved)) {
      this.pendingPlayState = 'running'
      return
    }
    if (this.isStopped) return
    const { driver: e = ar, onPlay: s } = this.options
    this.driver || (this.driver = e((r) => this.tick(r))), s && s()
    const n = this.driver.now()
    this.holdTime !== null
      ? (this.startTime = n - this.holdTime)
      : (!this.startTime || this.state === 'finished') && (this.startTime = n),
      this.state === 'finished' && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = 'running'),
      this.driver.start()
  }
  pause() {
    var e
    if (!this._resolved) {
      this.pendingPlayState = 'paused'
      return
    }
    ;(this.state = 'paused'),
      (this.holdTime = (e = this.currentTime) !== null && e !== void 0 ? e : 0)
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === 'idle')) return
    this.teardown()
    const { onStop: e } = this.options
    e && e()
  }
  complete() {
    this.state !== 'running' && this.play(),
      (this.pendingPlayState = this.state = 'finished'),
      (this.holdTime = null)
  }
  finish() {
    this.teardown(), (this.state = 'finished')
    const { onComplete: e } = this.options
    e && e()
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime),
      this.teardown(),
      this.updateFinishedPromise()
  }
  teardown() {
    ;(this.state = 'idle'),
      this.stopDriver(),
      this.resolveFinishedPromise(),
      this.updateFinishedPromise(),
      (this.startTime = this.cancelTime = null),
      this.resolver.cancel()
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0))
  }
  sample(e) {
    return (this.startTime = 0), this.tick(e, !0)
  }
}
const Qt = (t) => Array.isArray(t) && typeof t[0] == 'number'
function Jt(t) {
  return !!(!t || (typeof t == 'string' && t in Ne) || Qt(t) || (Array.isArray(t) && t.every(Jt)))
}
const G = ([t, e, s, n]) => `cubic-bezier(${t}, ${e}, ${s}, ${n})`,
  Ne = {
    linear: 'linear',
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
    circIn: G([0, 0.65, 0.55, 1]),
    circOut: G([0.55, 0, 1, 0.45]),
    backIn: G([0.31, 0.01, 0.66, -0.59]),
    backOut: G([0.33, 1.53, 0.69, 0.99]),
  }
function cr(t) {
  return es(t) || Ne.easeOut
}
function es(t) {
  if (t) return Qt(t) ? G(t) : Array.isArray(t) ? t.map(cr) : Ne[t]
}
function hr(
  t,
  e,
  s,
  {
    delay: n = 0,
    duration: r = 300,
    repeat: i = 0,
    repeatType: o = 'loop',
    ease: a,
    times: l,
  } = {},
) {
  const c = { [e]: s }
  l && (c.offset = l)
  const u = es(a)
  return (
    Array.isArray(u) && (c.easing = u),
    t.animate(c, {
      delay: n,
      duration: r,
      easing: Array.isArray(u) ? 'linear' : u,
      fill: 'both',
      iterations: i + 1,
      direction: o === 'reverse' ? 'alternate' : 'normal',
    })
  )
}
const fr = xn(() => Object.hasOwnProperty.call(Element.prototype, 'animate')),
  dr = new Set(['opacity', 'clipPath', 'filter', 'transform']),
  oe = 10,
  pr = 2e4
function mr(t) {
  return t.type === 'spring' || t.name === 'backgroundColor' || !Jt(t.ease)
}
function gr(t, e) {
  const s = new Ke({ ...e, keyframes: t, repeat: 0, delay: 0, isGenerator: !0 })
  let n = { done: !1, value: t[0] }
  const r = []
  let i = 0
  for (; !n.done && i < pr; ) (n = s.sample(i)), r.push(n.value), (i += oe)
  return { times: void 0, keyframes: r, duration: i - oe, ease: 'linear' }
}
class et extends jt {
  constructor(e) {
    super(e)
    const { name: s, motionValue: n, keyframes: r } = this.options
    ;(this.resolver = new Lt(r, (i, o) => this.onKeyframesResolved(i, o), s, n)),
      this.resolver.scheduleResolve()
  }
  initPlayback(e, s) {
    var n
    let { duration: r = 300, times: i, ease: o, type: a, motionValue: l, name: c } = this.options
    if (!(!((n = l.owner) === null || n === void 0) && n.current)) return !1
    if (mr(this.options)) {
      const { onComplete: h, onUpdate: f, motionValue: d, ...m } = this.options,
        g = gr(e, m)
      ;(e = g.keyframes),
        e.length === 1 && (e[1] = e[0]),
        (r = g.duration),
        (i = g.times),
        (o = g.ease),
        (a = 'keyframes')
    }
    const u = hr(l.owner.current, c, e, { ...this.options, duration: r, times: i, ease: o })
    return (
      (u.startTime = j.now()),
      this.pendingTimeline
        ? ((u.timeline = this.pendingTimeline), (this.pendingTimeline = void 0))
        : (u.onfinish = () => {
            const { onComplete: h } = this.options
            l.set(le(e, this.options, s)), h && h(), this.cancel(), this.resolveFinishedPromise()
          }),
      { animation: u, duration: r, times: i, type: a, ease: o, keyframes: e }
    )
  }
  get duration() {
    const { resolved: e } = this
    if (!e) return 0
    const { duration: s } = e
    return R(s)
  }
  get time() {
    const { resolved: e } = this
    if (!e) return 0
    const { animation: s } = e
    return R(s.currentTime || 0)
  }
  set time(e) {
    const { resolved: s } = this
    if (!s) return
    const { animation: n } = s
    n.currentTime = I(e)
  }
  get speed() {
    const { resolved: e } = this
    if (!e) return 1
    const { animation: s } = e
    return s.playbackRate
  }
  set speed(e) {
    const { resolved: s } = this
    if (!s) return
    const { animation: n } = s
    n.playbackRate = e
  }
  get state() {
    const { resolved: e } = this
    if (!e) return 'idle'
    const { animation: s } = e
    return s.playState
  }
  attachTimeline(e) {
    if (!this._resolved) this.pendingTimeline = e
    else {
      const { resolved: s } = this
      if (!s) return N
      const { animation: n } = s
      ;(n.timeline = e), (n.onfinish = null)
    }
    return N
  }
  play() {
    if (this.isStopped) return
    const { resolved: e } = this
    if (!e) return
    const { animation: s } = e
    s.playState === 'finished' && this.updateFinishedPromise(), s.play()
  }
  pause() {
    const { resolved: e } = this
    if (!e) return
    const { animation: s } = e
    s.pause()
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === 'idle')) return
    const { resolved: e } = this
    if (!e) return
    const { animation: s, keyframes: n, duration: r, type: i, ease: o, times: a } = e
    if (!(s.playState === 'idle' || s.playState === 'finished')) {
      if (this.time) {
        const { motionValue: l, onUpdate: c, onComplete: u, ...h } = this.options,
          f = new Ke({
            ...h,
            keyframes: n,
            duration: r,
            type: i,
            ease: o,
            times: a,
            isGenerator: !0,
          }),
          d = I(this.time)
        l.setWithVelocity(f.sample(d - oe).value, f.sample(d).value, oe)
      }
      this.cancel()
    }
  }
  complete() {
    const { resolved: e } = this
    e && e.animation.finish()
  }
  cancel() {
    const { resolved: e } = this
    e && e.animation.cancel()
  }
  static supports(e) {
    const { motionValue: s, name: n, repeatDelay: r, repeatType: i, damping: o, type: a } = e
    return (
      fr() &&
      n &&
      dr.has(n) &&
      s &&
      s.owner &&
      s.owner.current instanceof HTMLElement &&
      !s.owner.getProps().onUpdate &&
      !r &&
      i !== 'mirror' &&
      o !== 0 &&
      a !== 'inertia'
    )
  }
}
const ts =
  (t, e, s, n = {}, r, i) =>
  (o) => {
    const a = St(n, t) || {},
      l = a.delay || n.delay || 0
    let { elapsed: c = 0 } = n
    c = c - I(l)
    let u = {
      keyframes: Array.isArray(s) ? s : [null, s],
      ease: 'easeOut',
      velocity: e.getVelocity(),
      ...a,
      delay: -c,
      onUpdate: (f) => {
        e.set(f), a.onUpdate && a.onUpdate(f)
      },
      onComplete: () => {
        o(), a.onComplete && a.onComplete()
      },
      name: t,
      motionValue: e,
      element: i ? void 0 : r,
    }
    Hs(a) || (u = { ...u, ...qs(t, u) }),
      u.duration && (u.duration = I(u.duration)),
      u.repeatDelay && (u.repeatDelay = I(u.repeatDelay)),
      u.from !== void 0 && (u.keyframes[0] = u.from)
    let h = !1
    if (
      ((u.type === !1 || (u.duration === 0 && !u.repeatDelay)) &&
        ((u.duration = 0), u.delay === 0 && (h = !0)),
      h && !i && e.get() !== void 0)
    ) {
      const f = le(u.keyframes, a)
      if (f !== void 0) {
        O.update(() => {
          u.onUpdate(f), u.onComplete()
        })
        return
      }
    }
    return !i && et.supports(u) ? new et(u) : new Ke(u)
  }
function ae(t) {
  return !!(S(t) && t.add)
}
function yr(t, e) {
  t.indexOf(e) === -1 && t.push(e)
}
function vr(t, e) {
  const s = t.indexOf(e)
  s > -1 && t.splice(s, 1)
}
class ss {
  constructor() {
    this.subscriptions = []
  }
  add(e) {
    return yr(this.subscriptions, e), () => vr(this.subscriptions, e)
  }
  notify(e, s, n) {
    const r = this.subscriptions.length
    if (r)
      if (r === 1) this.subscriptions[0](e, s, n)
      else
        for (let i = 0; i < r; i++) {
          const o = this.subscriptions[i]
          o && o(e, s, n)
        }
  }
  getSize() {
    return this.subscriptions.length
  }
  clear() {
    this.subscriptions.length = 0
  }
}
const tt = 30,
  br = (t) => !isNaN(parseFloat(t))
class Tr {
  constructor(e, s = {}) {
    ;(this.version = '11.1.5'),
      (this.canTrackVelocity = !1),
      (this.events = {}),
      (this.updateAndNotify = (n, r = !0) => {
        const i = j.now()
        this.updatedAt !== i && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(n),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          r && this.events.renderRequest && this.events.renderRequest.notify(this.current)
      }),
      (this.hasAnimated = !1),
      this.setCurrent(e),
      (this.canTrackVelocity = br(this.current)),
      (this.owner = s.owner)
  }
  setCurrent(e) {
    ;(this.current = e), (this.updatedAt = j.now())
  }
  setPrevFrameValue(e = this.current) {
    ;(this.prevFrameValue = e), (this.prevUpdatedAt = this.updatedAt)
  }
  onChange(e) {
    return this.on('change', e)
  }
  on(e, s) {
    this.events[e] || (this.events[e] = new ss())
    const n = this.events[e].add(s)
    return e === 'change'
      ? () => {
          n(),
            O.read(() => {
              this.events.change.getSize() || this.stop()
            })
        }
      : n
  }
  clearListeners() {
    for (const e in this.events) this.events[e].clear()
  }
  attach(e, s) {
    ;(this.passiveEffect = e), (this.stopPassiveEffect = s)
  }
  set(e, s = !0) {
    !s || !this.passiveEffect
      ? this.updateAndNotify(e, s)
      : this.passiveEffect(e, this.updateAndNotify)
  }
  setWithVelocity(e, s, n) {
    this.set(s),
      (this.prev = void 0),
      (this.prevFrameValue = e),
      (this.prevUpdatedAt = this.updatedAt - n)
  }
  jump(e, s = !0) {
    this.updateAndNotify(e),
      (this.prev = e),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      s && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect()
  }
  get() {
    return this.current
  }
  getPrevious() {
    return this.prev
  }
  getVelocity() {
    const e = j.now()
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > tt)
      return 0
    const s = Math.min(this.updatedAt - this.prevUpdatedAt, tt)
    return _t(parseFloat(this.current) - parseFloat(this.prevFrameValue), s)
  }
  start(e) {
    return (
      this.stop(),
      new Promise((s) => {
        ;(this.hasAnimated = !0),
          (this.animation = e(s)),
          this.events.animationStart && this.events.animationStart.notify()
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation()
      })
    )
  }
  stop() {
    this.animation &&
      (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation()
  }
  isAnimating() {
    return !!this.animation
  }
  clearAnimation() {
    delete this.animation
  }
  destroy() {
    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
  }
}
function X(t, e) {
  return new Tr(t, e)
}
function Vr(t, e, s) {
  t.hasValue(e) ? t.getValue(e).set(s) : t.addValue(e, X(s))
}
function xr(t, e) {
  const s = $s(t, e)
  let { transitionEnd: n = {}, transition: r = {}, ...i } = s || {}
  i = { ...i, ...n }
  for (const o in i) {
    const a = js(i[o])
    Vr(t, o, a)
  }
}
function wr({ protectedKeys: t, needsAnimating: e }, s) {
  const n = t.hasOwnProperty(s) && e[s] !== !0
  return (e[s] = !1), n
}
function $r(t, e, { delay: s = 0, transitionOverride: n, type: r } = {}) {
  var i
  let { transition: o = t.getDefaultTransition(), transitionEnd: a, ...l } = e
  const c = t.getValue('willChange')
  n && (o = n)
  const u = [],
    h = r && t.animationState && t.animationState.getState()[r]
  for (const f in l) {
    const d = t.getValue(f, (i = t.latestValues[f]) !== null && i !== void 0 ? i : null),
      m = l[f]
    if (m === void 0 || (h && wr(h, f))) continue
    const g = { delay: s, elapsed: 0, ...St(o || {}, f) }
    let b = !1
    if (window.HandoffAppearAnimations) {
      const v = t.getProps()[hs]
      if (v) {
        const V = window.HandoffAppearAnimations(v, f)
        V !== null && ((g.elapsed = V), (b = !0))
      }
    }
    d.start(ts(f, d, m, t.shouldReduceMotion && E.has(f) ? { type: !1 } : g, t, b))
    const w = d.animation
    w && (ae(c) && (c.add(f), w.then(() => c.remove(f))), u.push(w))
  }
  return (
    a &&
      Promise.all(u).then(() => {
        O.update(() => {
          a && xr(t, a)
        })
      }),
    u
  )
}
const st = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Gr = () => ({ x: st(), y: st() }),
  nt = () => ({ min: 0, max: 0 }),
  ns = () => ({ x: nt(), y: nt() })
function Sr({ top: t, left: e, right: s, bottom: n }) {
  return { x: { min: e, max: s }, y: { min: t, max: n } }
}
function zr({ x: t, y: e }) {
  return { top: e.min, right: t.max, bottom: e.max, left: t.min }
}
function Mr(t, e) {
  if (!e) return t
  const s = e({ x: t.left, y: t.top }),
    n = e({ x: t.right, y: t.bottom })
  return { top: s.y, left: s.x, bottom: n.y, right: n.x }
}
function de(t) {
  return t === void 0 || t === 1
}
function Ar({ scale: t, scaleX: e, scaleY: s }) {
  return !de(t) || !de(e) || !de(s)
}
function Cr(t) {
  return Ar(t) || Pr(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY
}
function Pr(t) {
  return rt(t.x) || rt(t.y)
}
function rt(t) {
  return t && t !== '0%'
}
function it(t, e, s) {
  const n = t - s,
    r = e * n
  return s + r
}
function ot(t, e, s, n, r) {
  return r !== void 0 && (t = it(t, r, n)), it(t, s, n) + e
}
function Ve(t, e = 0, s = 1, n, r) {
  ;(t.min = ot(t.min, e, s, n, r)), (t.max = ot(t.max, e, s, n, r))
}
function Fr(t, { x: e, y: s }) {
  Ve(t.x, e.translate, e.scale, e.originPoint), Ve(t.y, s.translate, s.scale, s.originPoint)
}
function Yr(t, e, s, n = !1) {
  const r = s.length
  if (!r) return
  e.x = e.y = 1
  let i, o
  for (let a = 0; a < r; a++) {
    ;(i = s[a]), (o = i.projectionDelta)
    const l = i.instance
    ;(l && l.style && l.style.display === 'contents') ||
      (n &&
        i.options.layoutScroll &&
        i.scroll &&
        i !== i.root &&
        ct(t, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
      o && ((e.x *= o.x.scale), (e.y *= o.y.scale), Fr(t, o)),
      n && Cr(i.latestValues) && ct(t, i.latestValues))
  }
  ;(e.x = at(e.x)), (e.y = at(e.y))
}
function at(t) {
  return Number.isInteger(t) || t > 1.0000000000001 || t < 0.999999999999 ? t : 1
}
function lt(t, e) {
  ;(t.min = t.min + e), (t.max = t.max + e)
}
function ut(t, e, [s, n, r]) {
  const i = e[r] !== void 0 ? e[r] : 0.5,
    o = J(t.min, t.max, i)
  Ve(t, e[s], e[n], o, e.scale)
}
const Rr = ['x', 'scaleX', 'originX'],
  Or = ['y', 'scaleY', 'originY']
function ct(t, e) {
  ut(t.x, e, Rr), ut(t.y, e, Or)
}
function rs(t, e) {
  return Sr(Mr(t.getBoundingClientRect(), e))
}
function Xr(t, e, s) {
  const n = rs(t, s),
    { scroll: r } = e
  return r && (lt(n.x, r.offset.x), lt(n.y, r.offset.y)), n
}
function qr(t) {
  return t instanceof SVGElement && t.tagName !== 'svg'
}
function Hr(t, e, s) {
  const n = S(t) ? t : X(t)
  return n.start(ts('', n, e, s)), n.animation
}
const xe = { current: null },
  is = { current: !1 }
function Dr() {
  if (((is.current = !0), !!us))
    if (window.matchMedia) {
      const t = window.matchMedia('(prefers-reduced-motion)'),
        e = () => (xe.current = t.matches)
      t.addListener(e), e()
    } else xe.current = !1
}
function Br(t, e, s) {
  const { willChange: n } = e
  for (const r in e) {
    const i = e[r],
      o = s[r]
    if (S(i)) t.addValue(r, i), ae(n) && n.add(r)
    else if (S(o)) t.addValue(r, X(i, { owner: t })), ae(n) && n.remove(r)
    else if (o !== i)
      if (t.hasValue(r)) {
        const a = t.getValue(r)
        a.liveStyle === !0 ? a.jump(i) : a.hasAnimated || a.set(i)
      } else {
        const a = t.getStaticValue(r)
        t.addValue(r, X(a !== void 0 ? a : i, { owner: t }))
      }
  }
  for (const r in s) e[r] === void 0 && t.removeValue(r)
  return e
}
const ht = new WeakMap(),
  Ir = [...Rt, x, $],
  Kr = (t) => Ir.find(Ft(t)),
  os = Object.keys(Me),
  Nr = os.length,
  ft = [
    'AnimationStart',
    'AnimationComplete',
    'Update',
    'BeforeLayoutMeasure',
    'LayoutMeasure',
    'LayoutAnimationStart',
    'LayoutAnimationComplete',
  ],
  Er = Se.length
function as(t) {
  if (t) return t.options.allowProjection !== !1 ? t.projection : as(t.parent)
}
class kr {
  scrapeMotionValuesFromProps(e, s, n) {
    return {}
  }
  constructor(
    {
      parent: e,
      props: s,
      presenceContext: n,
      reducedMotionConfig: r,
      blockInitialAnimation: i,
      visualState: o,
    },
    a = {},
  ) {
    ;(this.resolveKeyframes = (f, d, m, g) => new this.KeyframeResolver(f, d, m, g, this)),
      (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = Fe),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify('Update', this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
      }),
      (this.scheduleRender = () => O.render(this.render, !1, !0))
    const { latestValues: l, renderState: c } = o
    ;(this.latestValues = l),
      (this.baseTarget = { ...l }),
      (this.initialValues = s.initial ? { ...l } : {}),
      (this.renderState = c),
      (this.parent = e),
      (this.props = s),
      (this.presenceContext = n),
      (this.depth = e ? e.depth + 1 : 0),
      (this.reducedMotionConfig = r),
      (this.options = a),
      (this.blockInitialAnimation = !!i),
      (this.isControllingVariants = pt(s)),
      (this.isVariantNode = bs(s)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(e && e.current))
    const { willChange: u, ...h } = this.scrapeMotionValuesFromProps(s, {}, this)
    for (const f in h) {
      const d = h[f]
      l[f] !== void 0 && S(d) && (d.set(l[f], !1), ae(u) && u.add(f))
    }
  }
  mount(e) {
    ;(this.current = e),
      ht.set(e, this),
      this.projection && !this.projection.instance && this.projection.mount(e),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((s, n) => this.bindToMotionValue(n, s)),
      is.current || Dr(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === 'never'
          ? !1
          : this.reducedMotionConfig === 'always'
            ? !0
            : xe.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext)
  }
  unmount() {
    var e
    ht.delete(this.current),
      this.projection && this.projection.unmount(),
      pe(this.notifyUpdate),
      pe(this.render),
      this.valueSubscriptions.forEach((s) => s()),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this)
    for (const s in this.events) this.events[s].clear()
    for (const s in this.features) (e = this.features[s]) === null || e === void 0 || e.unmount()
    this.current = null
  }
  bindToMotionValue(e, s) {
    const n = E.has(e),
      r = s.on('change', (o) => {
        ;(this.latestValues[e] = o),
          this.props.onUpdate && O.preRender(this.notifyUpdate),
          n && this.projection && (this.projection.isTransformDirty = !0)
      }),
      i = s.on('renderRequest', this.scheduleRender)
    this.valueSubscriptions.set(e, () => {
      r(), i(), s.owner && s.stop()
    })
  }
  sortNodePosition(e) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== e.type
      ? 0
      : this.sortInstanceNodePosition(this.current, e.current)
  }
  loadFeatures({ children: e, ...s }, n, r, i) {
    let o, a
    for (let l = 0; l < Nr; l++) {
      const c = os[l],
        { isEnabled: u, Feature: h, ProjectionNode: f, MeasureLayout: d } = Me[c]
      f && (o = f),
        u(s) && (!this.features[c] && h && (this.features[c] = new h(this)), d && (a = d))
    }
    if ((this.type === 'html' || this.type === 'svg') && !this.projection && o) {
      this.projection = new o(this.latestValues, as(this.parent))
      const {
        layoutId: l,
        layout: c,
        drag: u,
        dragConstraints: h,
        layoutScroll: f,
        layoutRoot: d,
      } = s
      this.projection.setOptions({
        layoutId: l,
        layout: c,
        alwaysMeasureLayout: !!u || (h && gs(h)),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        animationType: typeof c == 'string' ? c : 'both',
        initialPromotionConfig: i,
        layoutScroll: f,
        layoutRoot: d,
      })
    }
    return a
  }
  updateFeatures() {
    for (const e in this.features) {
      const s = this.features[e]
      s.isMounted ? s.update() : (s.mount(), (s.isMounted = !0))
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props)
  }
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : ns()
  }
  getStaticValue(e) {
    return this.latestValues[e]
  }
  setStaticValue(e, s) {
    this.latestValues[e] = s
  }
  update(e, s) {
    ;(e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = e),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = s)
    for (let n = 0; n < ft.length; n++) {
      const r = ft[n]
      this.propEventSubscriptions[r] &&
        (this.propEventSubscriptions[r](), delete this.propEventSubscriptions[r])
      const i = 'on' + r,
        o = e[i]
      o && (this.propEventSubscriptions[r] = this.on(r, o))
    }
    ;(this.prevMotionValues = Br(
      this,
      this.scrapeMotionValuesFromProps(e, this.prevProps, this),
      this.prevMotionValues,
    )),
      this.handleChildMotionValue && this.handleChildMotionValue()
  }
  getProps() {
    return this.props
  }
  getVariant(e) {
    return this.props.variants ? this.props.variants[e] : void 0
  }
  getDefaultTransition() {
    return this.props.transition
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
  }
  getVariantContext(e = !1) {
    if (e) return this.parent ? this.parent.getVariantContext() : void 0
    if (!this.isControllingVariants) {
      const n = this.parent ? this.parent.getVariantContext() || {} : {}
      return this.props.initial !== void 0 && (n.initial = this.props.initial), n
    }
    const s = {}
    for (let n = 0; n < Er; n++) {
      const r = Se[n],
        i = this.props[r]
      ;(dt(i) || i === !1) && (s[r] = i)
    }
    return s
  }
  addVariantChild(e) {
    const s = this.getClosestVariantNode()
    if (s) return s.variantChildren && s.variantChildren.add(e), () => s.variantChildren.delete(e)
  }
  addValue(e, s) {
    const n = this.values.get(e)
    s !== n &&
      (n && this.removeValue(e),
      this.bindToMotionValue(e, s),
      this.values.set(e, s),
      (this.latestValues[e] = s.get()))
  }
  removeValue(e) {
    this.values.delete(e)
    const s = this.valueSubscriptions.get(e)
    s && (s(), this.valueSubscriptions.delete(e)),
      delete this.latestValues[e],
      this.removeValueFromRenderState(e, this.renderState)
  }
  hasValue(e) {
    return this.values.has(e)
  }
  getValue(e, s) {
    if (this.props.values && this.props.values[e]) return this.props.values[e]
    let n = this.values.get(e)
    return (
      n === void 0 &&
        s !== void 0 &&
        ((n = X(s === null ? void 0 : s, { owner: this })), this.addValue(e, n)),
      n
    )
  }
  readValue(e, s) {
    var n
    let r =
      this.latestValues[e] !== void 0 || !this.current
        ? this.latestValues[e]
        : (n = this.getBaseTargetFromProps(this.props, e)) !== null && n !== void 0
          ? n
          : this.readValueFromInstance(this.current, e, this.options)
    return (
      r != null &&
        (typeof r == 'string' && (Ct(r) || Mt(r))
          ? (r = parseFloat(r))
          : !Kr(r) && $.test(s) && (r = kt(e, s)),
        this.setBaseTarget(e, S(r) ? r.get() : r)),
      S(r) ? r.get() : r
    )
  }
  setBaseTarget(e, s) {
    this.baseTarget[e] = s
  }
  getBaseTarget(e) {
    var s
    const { initial: n } = this.props
    let r
    if (typeof n == 'string' || typeof n == 'object') {
      const o = wt(
        this.props,
        n,
        (s = this.presenceContext) === null || s === void 0 ? void 0 : s.custom,
      )
      o && (r = o[e])
    }
    if (n && r !== void 0) return r
    const i = this.getBaseTargetFromProps(this.props, e)
    return i !== void 0 && !S(i)
      ? i
      : this.initialValues[e] !== void 0 && r === void 0
        ? void 0
        : this.baseTarget[e]
  }
  on(e, s) {
    return this.events[e] || (this.events[e] = new ss()), this.events[e].add(s)
  }
  notify(e, ...s) {
    this.events[e] && this.events[e].notify(...s)
  }
}
class ls extends kr {
  constructor() {
    super(...arguments), (this.KeyframeResolver = Lt)
  }
  sortInstanceNodePosition(e, s) {
    return e.compareDocumentPosition(s) & 2 ? 1 : -1
  }
  getBaseTargetFromProps(e, s) {
    return e.style ? e.style[s] : void 0
  }
  removeValueFromRenderState(e, { vars: s, style: n }) {
    delete s[e], delete n[e]
  }
}
function Lr(t) {
  return window.getComputedStyle(t)
}
class Zr extends ls {
  constructor() {
    super(...arguments), (this.type = 'html')
  }
  readValueFromInstance(e, s) {
    if (E.has(s)) {
      const n = Oe(s)
      return (n && n.default) || 0
    } else {
      const n = Lr(e),
        r = (yt(s) ? n.getPropertyValue(s) : n[s]) || 0
      return typeof r == 'string' ? r.trim() : r
    }
  }
  measureInstanceViewportBox(e, { transformPagePoint: s }) {
    return rs(e, s)
  }
  build(e, s, n, r) {
    bt(e, s, n, r.transformTemplate)
  }
  scrapeMotionValuesFromProps(e, s, n) {
    return xt(e, s, n)
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription)
    const { children: e } = this.props
    S(e) &&
      (this.childSubscription = e.on('change', (s) => {
        this.current && (this.current.textContent = `${s}`)
      }))
  }
  renderInstance(e, s, n, r) {
    Tt(e, s, n, r)
  }
}
class Qr extends ls {
  constructor() {
    super(...arguments), (this.type = 'svg'), (this.isSVGTag = !1)
  }
  getBaseTargetFromProps(e, s) {
    return e[s]
  }
  readValueFromInstance(e, s) {
    if (E.has(s)) {
      const n = Oe(s)
      return (n && n.default) || 0
    }
    return (s = Vt.has(s) ? s : we(s)), e.getAttribute(s)
  }
  measureInstanceViewportBox() {
    return ns()
  }
  scrapeMotionValuesFromProps(e, s, n) {
    return ks(e, s, n)
  }
  build(e, s, n, r) {
    Ks(e, s, n, this.isSVGTag, r.transformTemplate)
  }
  renderInstance(e, s, n, r) {
    Es(e, s, n, r)
  }
  mount(e) {
    ;(this.isSVGTag = Ns(e.tagName)), super.mount(e)
  }
}
export {
  p as $,
  Me as A,
  Ts as B,
  bt as C,
  Ks as D,
  Ns as E,
  Wr as F,
  bs as G,
  Zr as H,
  ys as I,
  wt as J,
  ks as K,
  Es as L,
  xt as M,
  Pe as N,
  N as O,
  $s as P,
  Ls as Q,
  vs as R,
  Qr as S,
  ne as T,
  _ as U,
  ns as V,
  Xr as W,
  zr as X,
  ts as Y,
  L as Z,
  Sr as _,
  qr as a,
  $ as a0,
  _r as a1,
  Wn as a2,
  it as a3,
  yr as a4,
  j as a5,
  ss as a6,
  St as a7,
  Ur as a8,
  Cr as a9,
  lt as aa,
  ct as ab,
  Ar as ac,
  Fr as ad,
  Pr as ae,
  Yr as af,
  Gr as ag,
  mt as ah,
  or as b,
  pe as c,
  Je as d,
  R as e,
  O as f,
  _n as g,
  J as h,
  At as i,
  S as j,
  nr as k,
  sr as l,
  xn as m,
  I as n,
  Hr as o,
  qt as p,
  $r as q,
  vr as r,
  Ut as s,
  us as t,
  ms as u,
  ht as v,
  hs as w,
  gs as x,
  pt as y,
  dt as z,
}
