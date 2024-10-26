import { j as wo } from './jsx-runtime.CvXbGX33.js'
import { r as $i } from './index.BFw_thZa.js'
import { c as Qn } from './_commonjsHelpers.Cpj98o6Y.js'
/* empty css                        */ const Nl = { 'Content-Type': 'application/json' },
  At = (e) => `${e.replace(/\/?$/, '/')}api/`,
  Ht = (e, t = '') => {
    if (typeof e == 'object' && e.errno)
      throw new TypeError(`${t} failed with ${e.errno}: ${e.errmsg}`)
    return e
  },
  Bl = ({ serverURL: e, lang: t, paths: n, type: r, signal: i }) =>
    fetch(
      `${At(e)}article?path=${encodeURIComponent(n.join(','))}&type=${encodeURIComponent(r.join(','))}&lang=${t}`,
      { signal: i },
    )
      .then((l) => l.json())
      .then((l) => Ht(l, 'Get counter').data),
  Pr = ({ serverURL: e, lang: t, path: n, type: r, action: i }) =>
    fetch(`${At(e)}article?lang=${t}`, {
      method: 'POST',
      headers: Nl,
      body: JSON.stringify({ path: n, type: r, action: i }),
    })
      .then((l) => l.json())
      .then((l) => Ht(l, 'Update counter').data),
  _o = ({
    serverURL: e,
    lang: t,
    path: n,
    page: r,
    pageSize: i,
    sortBy: l,
    signal: s,
    token: o,
  }) => {
    const a = {}
    return (
      o && (a.Authorization = `Bearer ${o}`),
      fetch(
        `${At(e)}comment?path=${encodeURIComponent(n)}&pageSize=${i}&page=${r}&lang=${t}&sortBy=${l}`,
        { signal: s, headers: a },
      )
        .then((c) => c.json())
        .then((c) => Ht(c, 'Get comment data').data)
    )
  },
  ko = ({ serverURL: e, lang: t, token: n, comment: r }) => {
    const i = { 'Content-Type': 'application/json' }
    return (
      n && (i.Authorization = `Bearer ${n}`),
      fetch(`${At(e)}comment?lang=${t}`, {
        method: 'POST',
        headers: i,
        body: JSON.stringify(r),
      }).then((l) => l.json())
    )
  },
  xo = ({ serverURL: e, lang: t, token: n, objectId: r }) =>
    fetch(`${At(e)}comment/${r}?lang=${t}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${n}` },
    })
      .then((i) => i.json())
      .then((i) => Ht(i, 'Delete comment')),
  Hn = ({ serverURL: e, lang: t, token: n, objectId: r, comment: i }) =>
    fetch(`${At(e)}comment/${r}?lang=${t}`, {
      method: 'PUT',
      headers: { ...Nl, Authorization: `Bearer ${n}` },
      body: JSON.stringify(i),
    })
      .then((l) => l.json())
      .then((l) => Ht(l, 'Update comment')),
  Eo = ({ serverURL: e, lang: t, paths: n, signal: r }) =>
    fetch(`${At(e)}comment?type=count&url=${encodeURIComponent(n.join(','))}&lang=${t}`, {
      signal: r,
    })
      .then((i) => i.json())
      .then((i) => Ht(i, 'Get comment count').data),
  Co = ({ lang: e, serverURL: t }) => {
    const n = (window.innerWidth - 450) / 2,
      r = (window.innerHeight - 450) / 2,
      i = window.open(
        `${t.replace(/\/$/, '')}/ui/login?lng=${encodeURIComponent(e)}`,
        '_blank',
        `width=450,height=450,left=${n},top=${r},scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no`,
      )
    return (
      i?.postMessage({ type: 'TOKEN', data: null }, '*'),
      new Promise((l) => {
        const s = ({ data: o }) => {
          !o ||
            typeof o != 'object' ||
            o.type !== 'userInfo' ||
            (o.data.token && (i?.close(), window.removeEventListener('message', s), l(o.data)))
        }
        window.addEventListener('message', s)
      })
    )
  },
  So = ({ serverURL: e, lang: t, paths: n, signal: r }) =>
    Bl({ serverURL: e, lang: t, paths: n, type: ['time'], signal: r }),
  To = (e) => Pr({ ...e, type: 'time', action: 'inc' })
/**
 * @vue/shared v3.4.26
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ /*! #__NO_SIDE_EFFECTS__ */ function Jr(e, t) {
  const n = new Set(e.split(','))
  return t ? (r) => n.has(r.toLowerCase()) : (r) => n.has(r)
}
const pe = {},
  Pt = [],
  ze = () => {},
  Ro = () => !1,
  ur = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  Xr = (e) => e.startsWith('onUpdate:'),
  ke = Object.assign,
  ei = (e, t) => {
    const n = e.indexOf(t)
    n > -1 && e.splice(n, 1)
  },
  $o = Object.prototype.hasOwnProperty,
  ee = (e, t) => $o.call(e, t),
  F = Array.isArray,
  Mt = (e) => wn(e) === '[object Map]',
  Nt = (e) => wn(e) === '[object Set]',
  Ai = (e) => wn(e) === '[object Date]',
  G = (e) => typeof e == 'function',
  be = (e) => typeof e == 'string',
  it = (e) => typeof e == 'symbol',
  he = (e) => e !== null && typeof e == 'object',
  Wl = (e) => (he(e) || G(e)) && G(e.then) && G(e.catch),
  ql = Object.prototype.toString,
  wn = (e) => ql.call(e),
  Ao = (e) => wn(e).slice(8, -1),
  Kl = (e) => wn(e) === '[object Object]',
  ti = (e) => be(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
  rn = Jr(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted',
  ),
  fr = (e) => {
    const t = Object.create(null)
    return (n) => t[n] || (t[n] = e(n))
  },
  Io = /-(\w)/g,
  Je = fr((e) => e.replace(Io, (t, n) => (n ? n.toUpperCase() : ''))),
  Lo = /\B([A-Z])/g,
  Bt = fr((e) => e.replace(Lo, '-$1').toLowerCase()),
  dr = fr((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  xr = fr((e) => (e ? `on${dr(e)}` : '')),
  pt = (e, t) => !Object.is(e, t),
  Nn = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t)
  },
  Gl = (e, t, n, r = !1) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, writable: r, value: n })
  },
  Yn = (e) => {
    const t = parseFloat(e)
    return isNaN(t) ? e : t
  }
let Ii
const ln = () =>
  Ii ||
  (Ii =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : typeof global < 'u'
            ? global
            : {})
function dn(e) {
  if (F(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) {
      const r = e[n],
        i = be(r) ? zo(r) : dn(r)
      if (i) for (const l in i) t[l] = i[l]
    }
    return t
  } else if (be(e) || he(e)) return e
}
const Oo = /;(?![^(]*\))/g,
  Po = /:([^]+)/,
  Mo = /\/\*[^]*?\*\//g
function zo(e) {
  const t = {}
  return (
    e
      .replace(Mo, '')
      .split(Oo)
      .forEach((n) => {
        if (n) {
          const r = n.split(Po)
          r.length > 1 && (t[r[0].trim()] = r[1].trim())
        }
      }),
    t
  )
}
function ye(e) {
  let t = ''
  if (be(e)) t = e
  else if (F(e))
    for (let n = 0; n < e.length; n++) {
      const r = ye(e[n])
      r && (t += r + ' ')
    }
  else if (he(e)) for (const n in e) e[n] && (t += n + ' ')
  return t.trim()
}
const jo = 'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
  Uo = Jr(jo)
function Zl(e) {
  return !!e || e === ''
}
function Vo(e, t) {
  if (e.length !== t.length) return !1
  let n = !0
  for (let r = 0; n && r < e.length; r++) n = Rt(e[r], t[r])
  return n
}
function Rt(e, t) {
  if (e === t) return !0
  let n = Ai(e),
    r = Ai(t)
  if (n || r) return n && r ? e.getTime() === t.getTime() : !1
  if (((n = it(e)), (r = it(t)), n || r)) return e === t
  if (((n = F(e)), (r = F(t)), n || r)) return n && r ? Vo(e, t) : !1
  if (((n = he(e)), (r = he(t)), n || r)) {
    if (!n || !r) return !1
    const i = Object.keys(e).length,
      l = Object.keys(t).length
    if (i !== l) return !1
    for (const s in e) {
      const o = e.hasOwnProperty(s),
        a = t.hasOwnProperty(s)
      if ((o && !a) || (!o && a) || !Rt(e[s], t[s])) return !1
    }
  }
  return String(e) === String(t)
}
function ni(e, t) {
  return e.findIndex((n) => Rt(n, t))
}
const se = (e) =>
    be(e)
      ? e
      : e == null
        ? ''
        : F(e) || (he(e) && (e.toString === ql || !G(e.toString)))
          ? JSON.stringify(e, Ql, 2)
          : String(e),
  Ql = (e, t) =>
    t && t.__v_isRef
      ? Ql(e, t.value)
      : Mt(t)
        ? {
            [`Map(${t.size})`]: [...t.entries()].reduce(
              (n, [r, i], l) => ((n[Er(r, l) + ' =>'] = i), n),
              {},
            ),
          }
        : Nt(t)
          ? { [`Set(${t.size})`]: [...t.values()].map((n) => Er(n)) }
          : it(t)
            ? Er(t)
            : he(t) && !F(t) && !Kl(t)
              ? String(t)
              : t,
  Er = (e, t = '') => {
    var n
    return it(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  }
/**
 * @vue/reactivity v3.4.26
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let Pe
class Do {
  constructor(t = !1) {
    ;(this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = Pe),
      !t && Pe && (this.index = (Pe.scopes || (Pe.scopes = [])).push(this) - 1)
  }
  get active() {
    return this._active
  }
  run(t) {
    if (this._active) {
      const n = Pe
      try {
        return (Pe = this), t()
      } finally {
        Pe = n
      }
    }
  }
  on() {
    Pe = this
  }
  off() {
    Pe = this.parent
  }
  stop(t) {
    if (this._active) {
      let n, r
      for (n = 0, r = this.effects.length; n < r; n++) this.effects[n].stop()
      for (n = 0, r = this.cleanups.length; n < r; n++) this.cleanups[n]()
      if (this.scopes) for (n = 0, r = this.scopes.length; n < r; n++) this.scopes[n].stop(!0)
      if (!this.detached && this.parent && !t) {
        const i = this.parent.scopes.pop()
        i && i !== this && ((this.parent.scopes[this.index] = i), (i.index = this.index))
      }
      ;(this.parent = void 0), (this._active = !1)
    }
  }
}
function Fo(e, t = Pe) {
  t && t.active && t.effects.push(e)
}
function Yl() {
  return Pe
}
function Ho(e) {
  Pe && Pe.cleanups.push(e)
}
let Ct
class ri {
  constructor(t, n, r, i) {
    ;(this.fn = t),
      (this.trigger = n),
      (this.scheduler = r),
      (this.active = !0),
      (this.deps = []),
      (this._dirtyLevel = 4),
      (this._trackId = 0),
      (this._runnings = 0),
      (this._shouldSchedule = !1),
      (this._depsLength = 0),
      Fo(this, i)
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      ;(this._dirtyLevel = 1), vt()
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t]
        if (n.computed && (No(n.computed), this._dirtyLevel >= 4)) break
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), yt()
    }
    return this._dirtyLevel >= 4
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0
  }
  run() {
    if (((this._dirtyLevel = 0), !this.active)) return this.fn()
    let t = dt,
      n = Ct
    try {
      return (dt = !0), (Ct = this), this._runnings++, Li(this), this.fn()
    } finally {
      Oi(this), this._runnings--, (Ct = n), (dt = t)
    }
  }
  stop() {
    this.active && (Li(this), Oi(this), this.onStop && this.onStop(), (this.active = !1))
  }
}
function No(e) {
  return e.value
}
function Li(e) {
  e._trackId++, (e._depsLength = 0)
}
function Oi(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++) Jl(e.deps[t], e)
    e.deps.length = e._depsLength
  }
}
function Jl(e, t) {
  const n = e.get(t)
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup())
}
let dt = !0,
  Mr = 0
const Xl = []
function vt() {
  Xl.push(dt), (dt = !1)
}
function yt() {
  const e = Xl.pop()
  dt = e === void 0 ? !0 : e
}
function ii() {
  Mr++
}
function li() {
  for (Mr--; !Mr && zr.length; ) zr.shift()()
}
function es(e, t, n) {
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId)
    const r = e.deps[e._depsLength]
    r !== t ? (r && Jl(r, e), (e.deps[e._depsLength++] = t)) : e._depsLength++
  }
}
const zr = []
function ts(e, t, n) {
  ii()
  for (const r of e.keys()) {
    let i
    r._dirtyLevel < t &&
      (i ?? (i = e.get(r) === r._trackId)) &&
      (r._shouldSchedule || (r._shouldSchedule = r._dirtyLevel === 0), (r._dirtyLevel = t)),
      r._shouldSchedule &&
        (i ?? (i = e.get(r) === r._trackId)) &&
        (r.trigger(),
        (!r._runnings || r.allowRecurse) &&
          r._dirtyLevel !== 2 &&
          ((r._shouldSchedule = !1), r.scheduler && zr.push(r.scheduler)))
  }
  li()
}
const ns = (e, t) => {
    const n = new Map()
    return (n.cleanup = e), (n.computed = t), n
  },
  jr = new WeakMap(),
  St = Symbol(''),
  Ur = Symbol('')
function Le(e, t, n) {
  if (dt && Ct) {
    let r = jr.get(e)
    r || jr.set(e, (r = new Map()))
    let i = r.get(n)
    i || r.set(n, (i = ns(() => r.delete(n)))), es(Ct, i)
  }
}
function nt(e, t, n, r, i, l) {
  const s = jr.get(e)
  if (!s) return
  let o = []
  if (t === 'clear') o = [...s.values()]
  else if (n === 'length' && F(e)) {
    const a = Number(r)
    s.forEach((c, f) => {
      ;(f === 'length' || (!it(f) && f >= a)) && o.push(c)
    })
  } else
    switch ((n !== void 0 && o.push(s.get(n)), t)) {
      case 'add':
        F(e) ? ti(n) && o.push(s.get('length')) : (o.push(s.get(St)), Mt(e) && o.push(s.get(Ur)))
        break
      case 'delete':
        F(e) || (o.push(s.get(St)), Mt(e) && o.push(s.get(Ur)))
        break
      case 'set':
        Mt(e) && o.push(s.get(St))
        break
    }
  ii()
  for (const a of o) a && ts(a, 4)
  li()
}
const Bo = Jr('__proto__,__v_isRef,__isVue'),
  rs = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== 'arguments' && e !== 'caller')
      .map((e) => Symbol[e])
      .filter(it),
  ),
  Pi = Wo()
function Wo() {
  const e = {}
  return (
    ['includes', 'indexOf', 'lastIndexOf'].forEach((t) => {
      e[t] = function (...n) {
        const r = re(this)
        for (let l = 0, s = this.length; l < s; l++) Le(r, 'get', l + '')
        const i = r[t](...n)
        return i === -1 || i === !1 ? r[t](...n.map(re)) : i
      }
    }),
    ['push', 'pop', 'shift', 'unshift', 'splice'].forEach((t) => {
      e[t] = function (...n) {
        vt(), ii()
        const r = re(this)[t].apply(this, n)
        return li(), yt(), r
      }
    }),
    e
  )
}
function qo(e) {
  it(e) || (e = String(e))
  const t = re(this)
  return Le(t, 'has', e), t.hasOwnProperty(e)
}
class is {
  constructor(t = !1, n = !1) {
    ;(this._isReadonly = t), (this._isShallow = n)
  }
  get(t, n, r) {
    const i = this._isReadonly,
      l = this._isShallow
    if (n === '__v_isReactive') return !i
    if (n === '__v_isReadonly') return i
    if (n === '__v_isShallow') return l
    if (n === '__v_raw')
      return r === (i ? (l ? la : as) : l ? os : ss).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(r)
        ? t
        : void 0
    const s = F(t)
    if (!i) {
      if (s && ee(Pi, n)) return Reflect.get(Pi, n, r)
      if (n === 'hasOwnProperty') return qo
    }
    const o = Reflect.get(t, n, r)
    return (it(n) ? rs.has(n) : Bo(n)) || (i || Le(t, 'get', n), l)
      ? o
      : Ce(o)
        ? s && ti(n)
          ? o
          : o.value
        : he(o)
          ? i
            ? _n(o)
            : jt(o)
          : o
  }
}
class ls extends is {
  constructor(t = !1) {
    super(!1, t)
  }
  set(t, n, r, i) {
    let l = t[n]
    if (!this._isShallow) {
      const a = hn(l)
      if ((!Jn(r) && !hn(r) && ((l = re(l)), (r = re(r))), !F(t) && Ce(l) && !Ce(r)))
        return a ? !1 : ((l.value = r), !0)
    }
    const s = F(t) && ti(n) ? Number(n) < t.length : ee(t, n),
      o = Reflect.set(t, n, r, i)
    return t === re(i) && (s ? pt(r, l) && nt(t, 'set', n, r) : nt(t, 'add', n, r)), o
  }
  deleteProperty(t, n) {
    const r = ee(t, n)
    t[n]
    const i = Reflect.deleteProperty(t, n)
    return i && r && nt(t, 'delete', n, void 0), i
  }
  has(t, n) {
    const r = Reflect.has(t, n)
    return (!it(n) || !rs.has(n)) && Le(t, 'has', n), r
  }
  ownKeys(t) {
    return Le(t, 'iterate', F(t) ? 'length' : St), Reflect.ownKeys(t)
  }
}
class Ko extends is {
  constructor(t = !1) {
    super(!0, t)
  }
  set(t, n) {
    return !0
  }
  deleteProperty(t, n) {
    return !0
  }
}
const Go = new ls(),
  Zo = new Ko(),
  Qo = new ls(!0)
const si = (e) => e,
  hr = (e) => Reflect.getPrototypeOf(e)
function An(e, t, n = !1, r = !1) {
  e = e.__v_raw
  const i = re(e),
    l = re(t)
  n || (pt(t, l) && Le(i, 'get', t), Le(i, 'get', l))
  const { has: s } = hr(i),
    o = r ? si : n ? ci : pn
  if (s.call(i, t)) return o(e.get(t))
  if (s.call(i, l)) return o(e.get(l))
  e !== i && e.get(t)
}
function In(e, t = !1) {
  const n = this.__v_raw,
    r = re(n),
    i = re(e)
  return (
    t || (pt(e, i) && Le(r, 'has', e), Le(r, 'has', i)), e === i ? n.has(e) : n.has(e) || n.has(i)
  )
}
function Ln(e, t = !1) {
  return (e = e.__v_raw), !t && Le(re(e), 'iterate', St), Reflect.get(e, 'size', e)
}
function Mi(e) {
  e = re(e)
  const t = re(this)
  return hr(t).has.call(t, e) || (t.add(e), nt(t, 'add', e, e)), this
}
function zi(e, t) {
  t = re(t)
  const n = re(this),
    { has: r, get: i } = hr(n)
  let l = r.call(n, e)
  l || ((e = re(e)), (l = r.call(n, e)))
  const s = i.call(n, e)
  return n.set(e, t), l ? pt(t, s) && nt(n, 'set', e, t) : nt(n, 'add', e, t), this
}
function ji(e) {
  const t = re(this),
    { has: n, get: r } = hr(t)
  let i = n.call(t, e)
  i || ((e = re(e)), (i = n.call(t, e))), r && r.call(t, e)
  const l = t.delete(e)
  return i && nt(t, 'delete', e, void 0), l
}
function Ui() {
  const e = re(this),
    t = e.size !== 0,
    n = e.clear()
  return t && nt(e, 'clear', void 0, void 0), n
}
function On(e, t) {
  return function (r, i) {
    const l = this,
      s = l.__v_raw,
      o = re(s),
      a = t ? si : e ? ci : pn
    return !e && Le(o, 'iterate', St), s.forEach((c, f) => r.call(i, a(c), a(f), l))
  }
}
function Pn(e, t, n) {
  return function (...r) {
    const i = this.__v_raw,
      l = re(i),
      s = Mt(l),
      o = e === 'entries' || (e === Symbol.iterator && s),
      a = e === 'keys' && s,
      c = i[e](...r),
      f = n ? si : t ? ci : pn
    return (
      !t && Le(l, 'iterate', a ? Ur : St),
      {
        next() {
          const { value: p, done: h } = c.next()
          return h ? { value: p, done: h } : { value: o ? [f(p[0]), f(p[1])] : f(p), done: h }
        },
        [Symbol.iterator]() {
          return this
        },
      }
    )
  }
}
function ot(e) {
  return function (...t) {
    return e === 'delete' ? !1 : e === 'clear' ? void 0 : this
  }
}
function Yo() {
  const e = {
      get(l) {
        return An(this, l)
      },
      get size() {
        return Ln(this)
      },
      has: In,
      add: Mi,
      set: zi,
      delete: ji,
      clear: Ui,
      forEach: On(!1, !1),
    },
    t = {
      get(l) {
        return An(this, l, !1, !0)
      },
      get size() {
        return Ln(this)
      },
      has: In,
      add: Mi,
      set: zi,
      delete: ji,
      clear: Ui,
      forEach: On(!1, !0),
    },
    n = {
      get(l) {
        return An(this, l, !0)
      },
      get size() {
        return Ln(this, !0)
      },
      has(l) {
        return In.call(this, l, !0)
      },
      add: ot('add'),
      set: ot('set'),
      delete: ot('delete'),
      clear: ot('clear'),
      forEach: On(!0, !1),
    },
    r = {
      get(l) {
        return An(this, l, !0, !0)
      },
      get size() {
        return Ln(this, !0)
      },
      has(l) {
        return In.call(this, l, !0)
      },
      add: ot('add'),
      set: ot('set'),
      delete: ot('delete'),
      clear: ot('clear'),
      forEach: On(!0, !0),
    }
  return (
    ['keys', 'values', 'entries', Symbol.iterator].forEach((l) => {
      ;(e[l] = Pn(l, !1, !1)),
        (n[l] = Pn(l, !0, !1)),
        (t[l] = Pn(l, !1, !0)),
        (r[l] = Pn(l, !0, !0))
    }),
    [e, n, t, r]
  )
}
const [Jo, Xo, ea, ta] = Yo()
function oi(e, t) {
  const n = t ? (e ? ta : ea) : e ? Xo : Jo
  return (r, i, l) =>
    i === '__v_isReactive'
      ? !e
      : i === '__v_isReadonly'
        ? e
        : i === '__v_raw'
          ? r
          : Reflect.get(ee(n, i) && i in r ? n : r, i, l)
}
const na = { get: oi(!1, !1) },
  ra = { get: oi(!1, !0) },
  ia = { get: oi(!0, !1) }
const ss = new WeakMap(),
  os = new WeakMap(),
  as = new WeakMap(),
  la = new WeakMap()
function sa(e) {
  switch (e) {
    case 'Object':
    case 'Array':
      return 1
    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2
    default:
      return 0
  }
}
function oa(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : sa(Ao(e))
}
function jt(e) {
  return hn(e) ? e : ai(e, !1, Go, na, ss)
}
function aa(e) {
  return ai(e, !1, Qo, ra, os)
}
function _n(e) {
  return ai(e, !0, Zo, ia, as)
}
function ai(e, t, n, r, i) {
  if (!he(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e
  const l = i.get(e)
  if (l) return l
  const s = oa(e)
  if (s === 0) return e
  const o = new Proxy(e, s === 2 ? r : n)
  return i.set(e, o), o
}
function sn(e) {
  return hn(e) ? sn(e.__v_raw) : !!(e && e.__v_isReactive)
}
function hn(e) {
  return !!(e && e.__v_isReadonly)
}
function Jn(e) {
  return !!(e && e.__v_isShallow)
}
function cs(e) {
  return e ? !!e.__v_raw : !1
}
function re(e) {
  const t = e && e.__v_raw
  return t ? re(t) : e
}
function ca(e) {
  return Object.isExtensible(e) && Gl(e, '__v_skip', !0), e
}
const pn = (e) => (he(e) ? jt(e) : e),
  ci = (e) => (he(e) ? _n(e) : e)
class us {
  constructor(t, n, r, i) {
    ;(this.getter = t),
      (this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !1),
      (this.effect = new ri(
        () => t(this._value),
        () => Bn(this, this.effect._dirtyLevel === 2 ? 2 : 3),
      )),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !i),
      (this.__v_isReadonly = r)
  }
  get value() {
    const t = re(this)
    return (
      (!t._cacheable || t.effect.dirty) && pt(t._value, (t._value = t.effect.run())) && Bn(t, 4),
      fs(t),
      t.effect._dirtyLevel >= 2 && Bn(t, 2),
      t._value
    )
  }
  set value(t) {
    this._setter(t)
  }
  get _dirty() {
    return this.effect.dirty
  }
  set _dirty(t) {
    this.effect.dirty = t
  }
}
function ua(e, t, n = !1) {
  let r, i
  const l = G(e)
  return l ? ((r = e), (i = ze)) : ((r = e.get), (i = e.set)), new us(r, i, l || !i, n)
}
function fs(e) {
  var t
  dt &&
    Ct &&
    ((e = re(e)),
    es(
      Ct,
      (t = e.dep) != null ? t : (e.dep = ns(() => (e.dep = void 0), e instanceof us ? e : void 0)),
    ))
}
function Bn(e, t = 4, n) {
  e = re(e)
  const r = e.dep
  r && ts(r, t)
}
function Ce(e) {
  return !!(e && e.__v_isRef === !0)
}
function Z(e) {
  return ds(e, !1)
}
function fa(e) {
  return ds(e, !0)
}
function ds(e, t) {
  return Ce(e) ? e : new da(e, t)
}
class da {
  constructor(t, n) {
    ;(this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : re(t)),
      (this._value = n ? t : pn(t))
  }
  get value() {
    return fs(this), this._value
  }
  set value(t) {
    const n = this.__v_isShallow || Jn(t) || hn(t)
    ;(t = n ? t : re(t)),
      pt(t, this._rawValue) && ((this._rawValue = t), (this._value = n ? t : pn(t)), Bn(this, 4))
  }
}
function X(e) {
  return Ce(e) ? e.value : e
}
const ha = {
  get: (e, t, n) => X(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const i = e[t]
    return Ce(i) && !Ce(n) ? ((i.value = n), !0) : Reflect.set(e, t, n, r)
  },
}
function hs(e) {
  return sn(e) ? e : new Proxy(e, ha)
}
/**
 * @vue/runtime-core v3.4.26
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function ht(e, t, n, r) {
  try {
    return r ? e(...r) : e()
  } catch (i) {
    pr(i, t, n)
  }
}
function He(e, t, n, r) {
  if (G(e)) {
    const i = ht(e, t, n, r)
    return (
      i &&
        Wl(i) &&
        i.catch((l) => {
          pr(l, t, n)
        }),
      i
    )
  }
  if (F(e)) {
    const i = []
    for (let l = 0; l < e.length; l++) i.push(He(e[l], t, n, r))
    return i
  }
}
function pr(e, t, n, r = !0) {
  const i = t ? t.vnode : null
  if (t) {
    let l = t.parent
    const s = t.proxy,
      o = `https://vuejs.org/error-reference/#runtime-${n}`
    for (; l; ) {
      const c = l.ec
      if (c) {
        for (let f = 0; f < c.length; f++) if (c[f](e, s, o) === !1) return
      }
      l = l.parent
    }
    const a = t.appContext.config.errorHandler
    if (a) {
      vt(), ht(a, null, 10, [e, s, o]), yt()
      return
    }
  }
  pa(e, n, i, r)
}
function pa(e, t, n, r = !0) {
  console.error(e)
}
let gn = !1,
  Vr = !1
const Ee = []
let Ge = 0
const zt = []
let at = null,
  xt = 0
const ps = Promise.resolve()
let ui = null
function kn(e) {
  const t = ui || ps
  return e ? t.then(this ? e.bind(this) : e) : t
}
function ga(e) {
  let t = Ge + 1,
    n = Ee.length
  for (; t < n; ) {
    const r = (t + n) >>> 1,
      i = Ee[r],
      l = mn(i)
    l < e || (l === e && i.pre) ? (t = r + 1) : (n = r)
  }
  return t
}
function fi(e) {
  ;(!Ee.length || !Ee.includes(e, gn && e.allowRecurse ? Ge + 1 : Ge)) &&
    (e.id == null ? Ee.push(e) : Ee.splice(ga(e.id), 0, e), gs())
}
function gs() {
  !gn && !Vr && ((Vr = !0), (ui = ps.then(vs)))
}
function ma(e) {
  const t = Ee.indexOf(e)
  t > Ge && Ee.splice(t, 1)
}
function va(e) {
  F(e) ? zt.push(...e) : (!at || !at.includes(e, e.allowRecurse ? xt + 1 : xt)) && zt.push(e), gs()
}
function Vi(e, t, n = gn ? Ge + 1 : 0) {
  for (; n < Ee.length; n++) {
    const r = Ee[n]
    if (r && r.pre) {
      if (e && r.id !== e.uid) continue
      Ee.splice(n, 1), n--, r()
    }
  }
}
function ms(e) {
  if (zt.length) {
    const t = [...new Set(zt)].sort((n, r) => mn(n) - mn(r))
    if (((zt.length = 0), at)) {
      at.push(...t)
      return
    }
    for (at = t, xt = 0; xt < at.length; xt++) at[xt]()
    ;(at = null), (xt = 0)
  }
}
const mn = (e) => (e.id == null ? 1 / 0 : e.id),
  ya = (e, t) => {
    const n = mn(e) - mn(t)
    if (n === 0) {
      if (e.pre && !t.pre) return -1
      if (t.pre && !e.pre) return 1
    }
    return n
  }
function vs(e) {
  ;(Vr = !1), (gn = !0), Ee.sort(ya)
  try {
    for (Ge = 0; Ge < Ee.length; Ge++) {
      const t = Ee[Ge]
      t && t.active !== !1 && ht(t, null, 14)
    }
  } finally {
    ;(Ge = 0), (Ee.length = 0), ms(), (gn = !1), (ui = null), (Ee.length || zt.length) && vs()
  }
}
let Ze,
  en = [],
  Dr = !1
function gr(e, ...t) {
  Ze ? Ze.emit(e, ...t) : Dr || en.push({ event: e, args: t })
}
function ys(e, t) {
  var n, r
  ;(Ze = e),
    Ze
      ? ((Ze.enabled = !0), en.forEach(({ event: i, args: l }) => Ze.emit(i, ...l)), (en = []))
      : typeof window < 'u' &&
          window.HTMLElement &&
          !(
            (r = (n = window.navigator) == null ? void 0 : n.userAgent) != null &&
            r.includes('jsdom')
          )
        ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((l) => {
            ys(l, t)
          }),
          setTimeout(() => {
            Ze || ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null), (Dr = !0), (en = []))
          }, 3e3))
        : ((Dr = !0), (en = []))
}
function ba(e, t) {
  gr('app:init', e, t, { Fragment: fe, Text: En, Comment: gt, Static: qn })
}
function wa(e) {
  gr('app:unmount', e)
}
const _a = di('component:added'),
  bs = di('component:updated'),
  ka = di('component:removed'),
  xa = (e) => {
    Ze && typeof Ze.cleanupBuffer == 'function' && !Ze.cleanupBuffer(e) && ka(e)
  }
/*! #__NO_SIDE_EFFECTS__ */ function di(e) {
  return (t) => {
    gr(e, t.appContext.app, t.uid, t.parent ? t.parent.uid : void 0, t)
  }
}
function Ea(e, t, n) {
  gr('component:emit', e.appContext.app, e, t, n)
}
function Ca(e, t, ...n) {
  if (e.isUnmounted) return
  const r = e.vnode.props || pe
  let i = n
  const l = t.startsWith('update:'),
    s = l && t.slice(7)
  if (s && s in r) {
    const f = `${s === 'modelValue' ? 'model' : s}Modifiers`,
      { number: p, trim: h } = r[f] || pe
    h && (i = n.map((m) => (be(m) ? m.trim() : m))), p && (i = n.map(Yn))
  }
  __VUE_PROD_DEVTOOLS__ && Ea(e, t, i)
  let o,
    a = r[(o = xr(t))] || r[(o = xr(Je(t)))]
  !a && l && (a = r[(o = xr(Bt(t)))]), a && He(a, e, 6, i)
  const c = r[o + 'Once']
  if (c) {
    if (!e.emitted) e.emitted = {}
    else if (e.emitted[o]) return
    ;(e.emitted[o] = !0), He(c, e, 6, i)
  }
}
function ws(e, t, n = !1) {
  const r = t.emitsCache,
    i = r.get(e)
  if (i !== void 0) return i
  const l = e.emits
  let s = {},
    o = !1
  if (__VUE_OPTIONS_API__ && !G(e)) {
    const a = (c) => {
      const f = ws(c, t, !0)
      f && ((o = !0), ke(s, f))
    }
    !n && t.mixins.length && t.mixins.forEach(a),
      e.extends && a(e.extends),
      e.mixins && e.mixins.forEach(a)
  }
  return !l && !o
    ? (he(e) && r.set(e, null), null)
    : (F(l) ? l.forEach((a) => (s[a] = null)) : ke(s, l), he(e) && r.set(e, s), s)
}
function mr(e, t) {
  return !e || !ur(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, '')),
      ee(e, t[0].toLowerCase() + t.slice(1)) || ee(e, Bt(t)) || ee(e, t))
}
let Re = null,
  _s = null
function Xn(e) {
  const t = Re
  return (Re = e), (_s = (e && e.type.__scopeId) || null), t
}
function Sa(e, t = Re, n) {
  if (!t || e._n) return e
  const r = (...i) => {
    r._d && Yi(-1)
    const l = Xn(t)
    let s
    try {
      s = e(...i)
    } finally {
      Xn(l), r._d && Yi(1)
    }
    return __VUE_PROD_DEVTOOLS__ && bs(t), s
  }
  return (r._n = !0), (r._c = !0), (r._d = !0), r
}
function Cr(e) {
  const {
      type: t,
      vnode: n,
      proxy: r,
      withProxy: i,
      propsOptions: [l],
      slots: s,
      attrs: o,
      emit: a,
      render: c,
      renderCache: f,
      props: p,
      data: h,
      setupState: m,
      ctx: $,
      inheritAttrs: k,
    } = e,
    S = Xn(e)
  let b, E
  try {
    if (n.shapeFlag & 4) {
      const V = i || r,
        z = V
      ;(b = Ke(c.call(z, V, f, p, m, h, $))), (E = o)
    } else {
      const V = t
      ;(b = Ke(V.length > 1 ? V(p, { attrs: o, slots: s, emit: a }) : V(p, null))),
        (E = t.props ? o : Ta(o))
    }
  } catch (V) {
    ;(cn.length = 0), pr(V, e, 1), (b = ae(gt))
  }
  let j = b
  if (E && k !== !1) {
    const V = Object.keys(E),
      { shapeFlag: z } = j
    V.length && z & 7 && (l && V.some(Xr) && (E = Ra(E, l)), (j = Ut(j, E, !1, !0)))
  }
  return (
    n.dirs && ((j = Ut(j, null, !1, !0)), (j.dirs = j.dirs ? j.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (j.transition = n.transition),
    (b = j),
    Xn(S),
    b
  )
}
const Ta = (e) => {
    let t
    for (const n in e) (n === 'class' || n === 'style' || ur(n)) && ((t || (t = {}))[n] = e[n])
    return t
  },
  Ra = (e, t) => {
    const n = {}
    for (const r in e) (!Xr(r) || !(r.slice(9) in t)) && (n[r] = e[r])
    return n
  }
function $a(e, t, n) {
  const { props: r, children: i, component: l } = e,
    { props: s, children: o, patchFlag: a } = t,
    c = l.emitsOptions
  if (t.dirs || t.transition) return !0
  if (n && a >= 0) {
    if (a & 1024) return !0
    if (a & 16) return r ? Di(r, s, c) : !!s
    if (a & 8) {
      const f = t.dynamicProps
      for (let p = 0; p < f.length; p++) {
        const h = f[p]
        if (s[h] !== r[h] && !mr(c, h)) return !0
      }
    }
  } else
    return (i || o) && (!o || !o.$stable) ? !0 : r === s ? !1 : r ? (s ? Di(r, s, c) : !0) : !!s
  return !1
}
function Di(e, t, n) {
  const r = Object.keys(t)
  if (r.length !== Object.keys(e).length) return !0
  for (let i = 0; i < r.length; i++) {
    const l = r[i]
    if (t[l] !== e[l] && !mr(n, l)) return !0
  }
  return !1
}
function Aa({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const r = t.subTree
    if ((r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e))
      ((e = t.vnode).el = n), (t = t.parent)
    else break
  }
}
const ks = 'components'
function Ia(e, t) {
  return Oa(ks, e, !0, t) || e
}
const La = Symbol.for('v-ndc')
function Oa(e, t, n = !0, r = !1) {
  const i = Re || xe
  if (i) {
    const l = i.type
    if (e === ks) {
      const o = Sc(l, !1)
      if (o && (o === t || o === Je(t) || o === dr(Je(t)))) return l
    }
    const s = Fi(i[e] || l[e], t) || Fi(i.appContext[e], t)
    return !s && r ? l : s
  }
}
function Fi(e, t) {
  return e && (e[t] || e[Je(t)] || e[dr(Je(t))])
}
const Pa = (e) => e.__isSuspense
function Ma(e, t) {
  t && t.pendingBranch ? (F(e) ? t.effects.push(...e) : t.effects.push(e)) : va(e)
}
const za = Symbol.for('v-scx'),
  ja = () => Tt(za)
function Hi(e, t) {
  return hi(e, null, t)
}
const Mn = {}
function $e(e, t, n) {
  return hi(e, t, n)
}
function hi(e, t, { immediate: n, deep: r, flush: i, once: l, onTrack: s, onTrigger: o } = pe) {
  if (t && l) {
    const P = t
    t = (...W) => {
      P(...W), z()
    }
  }
  const a = xe,
    c = (P) => (r === !0 ? P : Et(P, r === !1 ? 1 : void 0))
  let f,
    p = !1,
    h = !1
  if (
    (Ce(e)
      ? ((f = () => e.value), (p = Jn(e)))
      : sn(e)
        ? ((f = () => c(e)), (p = !0))
        : F(e)
          ? ((h = !0),
            (p = e.some((P) => sn(P) || Jn(P))),
            (f = () =>
              e.map((P) => {
                if (Ce(P)) return P.value
                if (sn(P)) return c(P)
                if (G(P)) return ht(P, a, 2)
              })))
          : G(e)
            ? t
              ? (f = () => ht(e, a, 2))
              : (f = () => (m && m(), He(e, a, 3, [$])))
            : (f = ze),
    t && r)
  ) {
    const P = f
    f = () => Et(P())
  }
  let m,
    $ = (P) => {
      m = j.onStop = () => {
        ht(P, a, 4), (m = j.onStop = void 0)
      }
    },
    k
  if (yr)
    if ((($ = ze), t ? n && He(t, a, 3, [f(), h ? [] : void 0, $]) : f(), i === 'sync')) {
      const P = ja()
      k = P.__watcherHandles || (P.__watcherHandles = [])
    } else return ze
  let S = h ? new Array(e.length).fill(Mn) : Mn
  const b = () => {
    if (!(!j.active || !j.dirty))
      if (t) {
        const P = j.run()
        ;(r || p || (h ? P.some((W, N) => pt(W, S[N])) : pt(P, S))) &&
          (m && m(), He(t, a, 3, [P, S === Mn ? void 0 : h && S[0] === Mn ? [] : S, $]), (S = P))
      } else j.run()
  }
  b.allowRecurse = !!t
  let E
  i === 'sync'
    ? (E = b)
    : i === 'post'
      ? (E = () => Ie(b, a && a.suspense))
      : ((b.pre = !0), a && (b.id = a.uid), (E = () => fi(b)))
  const j = new ri(f, ze, E),
    V = Yl(),
    z = () => {
      j.stop(), V && ei(V.effects, j)
    }
  return (
    t ? (n ? b() : (S = j.run())) : i === 'post' ? Ie(j.run.bind(j), a && a.suspense) : j.run(),
    k && k.push(z),
    z
  )
}
function Ua(e, t, n) {
  const r = this.proxy,
    i = be(e) ? (e.includes('.') ? xs(r, e) : () => r[e]) : e.bind(r, r)
  let l
  G(t) ? (l = t) : ((l = t.handler), (n = t))
  const s = Cn(this),
    o = hi(i, l.bind(r), n)
  return s(), o
}
function xs(e, t) {
  const n = t.split('.')
  return () => {
    let r = e
    for (let i = 0; i < n.length && r; i++) r = r[n[i]]
    return r
  }
}
function Et(e, t = 1 / 0, n) {
  if (t <= 0 || !he(e) || e.__v_skip || ((n = n || new Set()), n.has(e))) return e
  if ((n.add(e), t--, Ce(e))) Et(e.value, t, n)
  else if (F(e)) for (let r = 0; r < e.length; r++) Et(e[r], t, n)
  else if (Nt(e) || Mt(e))
    e.forEach((r) => {
      Et(r, t, n)
    })
  else if (Kl(e)) for (const r in e) Et(e[r], t, n)
  return e
}
function zn(e, t) {
  if (Re === null) return e
  const n = br(Re) || Re.proxy,
    r = e.dirs || (e.dirs = [])
  for (let i = 0; i < t.length; i++) {
    let [l, s, o, a = pe] = t[i]
    l &&
      (G(l) && (l = { mounted: l, updated: l }),
      l.deep && Et(s),
      r.push({ dir: l, instance: n, value: s, oldValue: void 0, arg: o, modifiers: a }))
  }
  return e
}
function _t(e, t, n, r) {
  const i = e.dirs,
    l = t && t.dirs
  for (let s = 0; s < i.length; s++) {
    const o = i[s]
    l && (o.oldValue = l[s].value)
    let a = o.dir[r]
    a && (vt(), He(a, n, 8, [e.el, o, e, t]), yt())
  }
}
/*! #__NO_SIDE_EFFECTS__ */ function xn(e, t) {
  return G(e) ? ke({ name: e.name }, t, { setup: e }) : e
}
const Wn = (e) => !!e.type.__asyncLoader,
  Es = (e) => e.type.__isKeepAlive
function Va(e, t) {
  Cs(e, 'a', t)
}
function Da(e, t) {
  Cs(e, 'da', t)
}
function Cs(e, t, n = xe) {
  const r =
    e.__wdc ||
    (e.__wdc = () => {
      let i = n
      for (; i; ) {
        if (i.isDeactivated) return
        i = i.parent
      }
      return e()
    })
  if ((vr(t, r, n), n)) {
    let i = n.parent
    for (; i && i.parent; ) Es(i.parent.vnode) && Fa(r, t, n, i), (i = i.parent)
  }
}
function Fa(e, t, n, r) {
  const i = vr(t, e, r, !0)
  qt(() => {
    ei(r[t], i)
  }, n)
}
function vr(e, t, n = xe, r = !1) {
  if (n) {
    const i = n[e] || (n[e] = []),
      l =
        t.__weh ||
        (t.__weh = (...s) => {
          if (n.isUnmounted) return
          vt()
          const o = Cn(n),
            a = He(t, n, e, s)
          return o(), yt(), a
        })
    return r ? i.unshift(l) : i.push(l), l
  }
}
const st =
    (e) =>
    (t, n = xe) =>
      (!yr || e === 'sp') && vr(e, (...r) => t(...r), n),
  Ha = st('bm'),
  Wt = st('m'),
  Na = st('bu'),
  Ba = st('u'),
  Ss = st('bum'),
  qt = st('um'),
  Wa = st('sp'),
  qa = st('rtg'),
  Ka = st('rtc')
function Ga(e, t = xe) {
  vr('ec', e, t)
}
function Ue(e, t, n, r) {
  let i
  const l = n && n[r]
  if (F(e) || be(e)) {
    i = new Array(e.length)
    for (let s = 0, o = e.length; s < o; s++) i[s] = t(e[s], s, void 0, l && l[s])
  } else if (typeof e == 'number') {
    i = new Array(e)
    for (let s = 0; s < e; s++) i[s] = t(s + 1, s, void 0, l && l[s])
  } else if (he(e))
    if (e[Symbol.iterator]) i = Array.from(e, (s, o) => t(s, o, void 0, l && l[o]))
    else {
      const s = Object.keys(e)
      i = new Array(s.length)
      for (let o = 0, a = s.length; o < a; o++) {
        const c = s[o]
        i[o] = t(e[c], c, o, l && l[o])
      }
    }
  else i = []
  return n && (n[r] = i), i
}
const Fr = (e) => (e ? (Hs(e) ? br(e) || e.proxy : Fr(e.parent)) : null),
  on = ke(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Fr(e.parent),
    $root: (e) => Fr(e.root),
    $emit: (e) => e.emit,
    $options: (e) => (__VUE_OPTIONS_API__ ? pi(e) : e.type),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        ;(e.effect.dirty = !0), fi(e.update)
      }),
    $nextTick: (e) => e.n || (e.n = kn.bind(e.proxy)),
    $watch: (e) => (__VUE_OPTIONS_API__ ? Ua.bind(e) : ze),
  }),
  Sr = (e, t) => e !== pe && !e.__isScriptSetup && ee(e, t),
  Za = {
    get({ _: e }, t) {
      if (t === '__v_skip') return !0
      const { ctx: n, setupState: r, data: i, props: l, accessCache: s, type: o, appContext: a } = e
      let c
      if (t[0] !== '$') {
        const m = s[t]
        if (m !== void 0)
          switch (m) {
            case 1:
              return r[t]
            case 2:
              return i[t]
            case 4:
              return n[t]
            case 3:
              return l[t]
          }
        else {
          if (Sr(r, t)) return (s[t] = 1), r[t]
          if (i !== pe && ee(i, t)) return (s[t] = 2), i[t]
          if ((c = e.propsOptions[0]) && ee(c, t)) return (s[t] = 3), l[t]
          if (n !== pe && ee(n, t)) return (s[t] = 4), n[t]
          ;(!__VUE_OPTIONS_API__ || Hr) && (s[t] = 0)
        }
      }
      const f = on[t]
      let p, h
      if (f) return t === '$attrs' && Le(e.attrs, 'get', ''), f(e)
      if ((p = o.__cssModules) && (p = p[t])) return p
      if (n !== pe && ee(n, t)) return (s[t] = 4), n[t]
      if (((h = a.config.globalProperties), ee(h, t))) return h[t]
    },
    set({ _: e }, t, n) {
      const { data: r, setupState: i, ctx: l } = e
      return Sr(i, t)
        ? ((i[t] = n), !0)
        : r !== pe && ee(r, t)
          ? ((r[t] = n), !0)
          : ee(e.props, t) || (t[0] === '$' && t.slice(1) in e)
            ? !1
            : ((l[t] = n), !0)
    },
    has(
      { _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: i, propsOptions: l } },
      s,
    ) {
      let o
      return (
        !!n[s] ||
        (e !== pe && ee(e, s)) ||
        Sr(t, s) ||
        ((o = l[0]) && ee(o, s)) ||
        ee(r, s) ||
        ee(on, s) ||
        ee(i.config.globalProperties, s)
      )
    },
    defineProperty(e, t, n) {
      return (
        n.get != null ? (e._.accessCache[t] = 0) : ee(n, 'value') && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      )
    },
  }
function Ni(e) {
  return F(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e
}
let Hr = !0
function Qa(e) {
  const t = pi(e),
    n = e.proxy,
    r = e.ctx
  ;(Hr = !1), t.beforeCreate && Bi(t.beforeCreate, e, 'bc')
  const {
    data: i,
    computed: l,
    methods: s,
    watch: o,
    provide: a,
    inject: c,
    created: f,
    beforeMount: p,
    mounted: h,
    beforeUpdate: m,
    updated: $,
    activated: k,
    deactivated: S,
    beforeDestroy: b,
    beforeUnmount: E,
    destroyed: j,
    unmounted: V,
    render: z,
    renderTracked: P,
    renderTriggered: W,
    errorCaptured: N,
    serverPrefetch: Se,
    expose: q,
    inheritAttrs: de,
    components: me,
    directives: K,
    filters: B,
  } = t
  if ((c && Ya(c, r, null), s))
    for (const Q in s) {
      const J = s[Q]
      G(J) && (r[Q] = J.bind(n))
    }
  if (i) {
    const Q = i.call(n, n)
    he(Q) && (e.data = jt(Q))
  }
  if (((Hr = !0), l))
    for (const Q in l) {
      const J = l[Q],
        ve = G(J) ? J.bind(n, n) : G(J.get) ? J.get.bind(n, n) : ze,
        Ne = !G(J) && G(J.set) ? J.set.bind(n) : ze,
        Be = _e({ get: ve, set: Ne })
      Object.defineProperty(r, Q, {
        enumerable: !0,
        configurable: !0,
        get: () => Be.value,
        set: (Ae) => (Be.value = Ae),
      })
    }
  if (o) for (const Q in o) Ts(o[Q], r, n, Q)
  if (a) {
    const Q = G(a) ? a.call(n) : a
    Reflect.ownKeys(Q).forEach((J) => {
      $s(J, Q[J])
    })
  }
  f && Bi(f, e, 'c')
  function ne(Q, J) {
    F(J) ? J.forEach((ve) => Q(ve.bind(n))) : J && Q(J.bind(n))
  }
  if (
    (ne(Ha, p),
    ne(Wt, h),
    ne(Na, m),
    ne(Ba, $),
    ne(Va, k),
    ne(Da, S),
    ne(Ga, N),
    ne(Ka, P),
    ne(qa, W),
    ne(Ss, E),
    ne(qt, V),
    ne(Wa, Se),
    F(q))
  )
    if (q.length) {
      const Q = e.exposed || (e.exposed = {})
      q.forEach((J) => {
        Object.defineProperty(Q, J, { get: () => n[J], set: (ve) => (n[J] = ve) })
      })
    } else e.exposed || (e.exposed = {})
  z && e.render === ze && (e.render = z),
    de != null && (e.inheritAttrs = de),
    me && (e.components = me),
    K && (e.directives = K)
}
function Ya(e, t, n = ze) {
  F(e) && (e = Nr(e))
  for (const r in e) {
    const i = e[r]
    let l
    he(i)
      ? 'default' in i
        ? (l = Tt(i.from || r, i.default, !0))
        : (l = Tt(i.from || r))
      : (l = Tt(i)),
      Ce(l)
        ? Object.defineProperty(t, r, {
            enumerable: !0,
            configurable: !0,
            get: () => l.value,
            set: (s) => (l.value = s),
          })
        : (t[r] = l)
  }
}
function Bi(e, t, n) {
  He(F(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function Ts(e, t, n, r) {
  const i = r.includes('.') ? xs(n, r) : () => n[r]
  if (be(e)) {
    const l = t[e]
    G(l) && $e(i, l)
  } else if (G(e)) $e(i, e.bind(n))
  else if (he(e))
    if (F(e)) e.forEach((l) => Ts(l, t, n, r))
    else {
      const l = G(e.handler) ? e.handler.bind(n) : t[e.handler]
      G(l) && $e(i, l, e)
    }
}
function pi(e) {
  const t = e.type,
    { mixins: n, extends: r } = t,
    {
      mixins: i,
      optionsCache: l,
      config: { optionMergeStrategies: s },
    } = e.appContext,
    o = l.get(t)
  let a
  return (
    o
      ? (a = o)
      : !i.length && !n && !r
        ? (a = t)
        : ((a = {}), i.length && i.forEach((c) => er(a, c, s, !0)), er(a, t, s)),
    he(t) && l.set(t, a),
    a
  )
}
function er(e, t, n, r = !1) {
  const { mixins: i, extends: l } = t
  l && er(e, l, n, !0), i && i.forEach((s) => er(e, s, n, !0))
  for (const s in t)
    if (!(r && s === 'expose')) {
      const o = Ja[s] || (n && n[s])
      e[s] = o ? o(e[s], t[s]) : t[s]
    }
  return e
}
const Ja = {
  data: Wi,
  props: qi,
  emits: qi,
  methods: tn,
  computed: tn,
  beforeCreate: Te,
  created: Te,
  beforeMount: Te,
  mounted: Te,
  beforeUpdate: Te,
  updated: Te,
  beforeDestroy: Te,
  beforeUnmount: Te,
  destroyed: Te,
  unmounted: Te,
  activated: Te,
  deactivated: Te,
  errorCaptured: Te,
  serverPrefetch: Te,
  components: tn,
  directives: tn,
  watch: ec,
  provide: Wi,
  inject: Xa,
}
function Wi(e, t) {
  return t
    ? e
      ? function () {
          return ke(G(e) ? e.call(this, this) : e, G(t) ? t.call(this, this) : t)
        }
      : t
    : e
}
function Xa(e, t) {
  return tn(Nr(e), Nr(t))
}
function Nr(e) {
  if (F(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n]
    return t
  }
  return e
}
function Te(e, t) {
  return e ? [...new Set([].concat(e, t))] : t
}
function tn(e, t) {
  return e ? ke(Object.create(null), e, t) : t
}
function qi(e, t) {
  return e
    ? F(e) && F(t)
      ? [...new Set([...e, ...t])]
      : ke(Object.create(null), Ni(e), Ni(t ?? {}))
    : t
}
function ec(e, t) {
  if (!e) return t
  if (!t) return e
  const n = ke(Object.create(null), e)
  for (const r in t) n[r] = Te(e[r], t[r])
  return n
}
function Rs() {
  return {
    app: null,
    config: {
      isNativeTag: Ro,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  }
}
let tc = 0
function nc(e, t) {
  return function (r, i = null) {
    G(r) || (r = ke({}, r)), i != null && !he(i) && (i = null)
    const l = Rs(),
      s = new WeakSet()
    let o = !1
    const a = (l.app = {
      _uid: tc++,
      _component: r,
      _props: i,
      _container: null,
      _context: l,
      _instance: null,
      version: tl,
      get config() {
        return l.config
      },
      set config(c) {},
      use(c, ...f) {
        return (
          s.has(c) ||
            (c && G(c.install) ? (s.add(c), c.install(a, ...f)) : G(c) && (s.add(c), c(a, ...f))),
          a
        )
      },
      mixin(c) {
        return __VUE_OPTIONS_API__ && (l.mixins.includes(c) || l.mixins.push(c)), a
      },
      component(c, f) {
        return f ? ((l.components[c] = f), a) : l.components[c]
      },
      directive(c, f) {
        return f ? ((l.directives[c] = f), a) : l.directives[c]
      },
      mount(c, f, p) {
        if (!o) {
          const h = ae(r, i)
          return (
            (h.appContext = l),
            p === !0 ? (p = 'svg') : p === !1 && (p = void 0),
            f && t ? t(h, c) : e(h, c, p),
            (o = !0),
            (a._container = c),
            (c.__vue_app__ = a),
            __VUE_PROD_DEVTOOLS__ && ((a._instance = h.component), ba(a, tl)),
            br(h.component) || h.component.proxy
          )
        }
      },
      unmount() {
        o &&
          (e(null, a._container),
          __VUE_PROD_DEVTOOLS__ && ((a._instance = null), wa(a)),
          delete a._container.__vue_app__)
      },
      provide(c, f) {
        return (l.provides[c] = f), a
      },
      runWithContext(c) {
        const f = an
        an = a
        try {
          return c()
        } finally {
          an = f
        }
      },
    })
    return a
  }
}
let an = null
function $s(e, t) {
  if (xe) {
    let n = xe.provides
    const r = xe.parent && xe.parent.provides
    r === n && (n = xe.provides = Object.create(r)), (n[e] = t)
  }
}
function Tt(e, t, n = !1) {
  const r = xe || Re
  if (r || an) {
    const i = r
      ? r.parent == null
        ? r.vnode.appContext && r.vnode.appContext.provides
        : r.parent.provides
      : an._context.provides
    if (i && e in i) return i[e]
    if (arguments.length > 1) return n && G(t) ? t.call(r && r.proxy) : t
  }
}
const As = {},
  Is = () => Object.create(As),
  Ls = (e) => Object.getPrototypeOf(e) === As
function rc(e, t, n, r = !1) {
  const i = {},
    l = Is()
  ;(e.propsDefaults = Object.create(null)), Os(e, t, i, l)
  for (const s in e.propsOptions[0]) s in i || (i[s] = void 0)
  n ? (e.props = r ? i : aa(i)) : e.type.props ? (e.props = i) : (e.props = l), (e.attrs = l)
}
function ic(e, t, n, r) {
  const {
      props: i,
      attrs: l,
      vnode: { patchFlag: s },
    } = e,
    o = re(i),
    [a] = e.propsOptions
  let c = !1
  if ((r || s > 0) && !(s & 16)) {
    if (s & 8) {
      const f = e.vnode.dynamicProps
      for (let p = 0; p < f.length; p++) {
        let h = f[p]
        if (mr(e.emitsOptions, h)) continue
        const m = t[h]
        if (a)
          if (ee(l, h)) m !== l[h] && ((l[h] = m), (c = !0))
          else {
            const $ = Je(h)
            i[$] = Br(a, o, $, m, e, !1)
          }
        else m !== l[h] && ((l[h] = m), (c = !0))
      }
    }
  } else {
    Os(e, t, i, l) && (c = !0)
    let f
    for (const p in o)
      (!t || (!ee(t, p) && ((f = Bt(p)) === p || !ee(t, f)))) &&
        (a
          ? n && (n[p] !== void 0 || n[f] !== void 0) && (i[p] = Br(a, o, p, void 0, e, !0))
          : delete i[p])
    if (l !== o) for (const p in l) (!t || !ee(t, p)) && (delete l[p], (c = !0))
  }
  c && nt(e.attrs, 'set', '')
}
function Os(e, t, n, r) {
  const [i, l] = e.propsOptions
  let s = !1,
    o
  if (t)
    for (let a in t) {
      if (rn(a)) continue
      const c = t[a]
      let f
      i && ee(i, (f = Je(a)))
        ? !l || !l.includes(f)
          ? (n[f] = c)
          : ((o || (o = {}))[f] = c)
        : mr(e.emitsOptions, a) || ((!(a in r) || c !== r[a]) && ((r[a] = c), (s = !0)))
    }
  if (l) {
    const a = re(n),
      c = o || pe
    for (let f = 0; f < l.length; f++) {
      const p = l[f]
      n[p] = Br(i, a, p, c[p], e, !ee(c, p))
    }
  }
  return s
}
function Br(e, t, n, r, i, l) {
  const s = e[n]
  if (s != null) {
    const o = ee(s, 'default')
    if (o && r === void 0) {
      const a = s.default
      if (s.type !== Function && !s.skipFactory && G(a)) {
        const { propsDefaults: c } = i
        if (n in c) r = c[n]
        else {
          const f = Cn(i)
          ;(r = c[n] = a.call(null, t)), f()
        }
      } else r = a
    }
    s[0] && (l && !o ? (r = !1) : s[1] && (r === '' || r === Bt(n)) && (r = !0))
  }
  return r
}
function Ps(e, t, n = !1) {
  const r = t.propsCache,
    i = r.get(e)
  if (i) return i
  const l = e.props,
    s = {},
    o = []
  let a = !1
  if (__VUE_OPTIONS_API__ && !G(e)) {
    const f = (p) => {
      a = !0
      const [h, m] = Ps(p, t, !0)
      ke(s, h), m && o.push(...m)
    }
    !n && t.mixins.length && t.mixins.forEach(f),
      e.extends && f(e.extends),
      e.mixins && e.mixins.forEach(f)
  }
  if (!l && !a) return he(e) && r.set(e, Pt), Pt
  if (F(l))
    for (let f = 0; f < l.length; f++) {
      const p = Je(l[f])
      Ki(p) && (s[p] = pe)
    }
  else if (l)
    for (const f in l) {
      const p = Je(f)
      if (Ki(p)) {
        const h = l[f],
          m = (s[p] = F(h) || G(h) ? { type: h } : ke({}, h))
        if (m) {
          const $ = Qi(Boolean, m.type),
            k = Qi(String, m.type)
          ;(m[0] = $ > -1), (m[1] = k < 0 || $ < k), ($ > -1 || ee(m, 'default')) && o.push(p)
        }
      }
    }
  const c = [s, o]
  return he(e) && r.set(e, c), c
}
function Ki(e) {
  return e[0] !== '$' && !rn(e)
}
function Gi(e) {
  return e === null
    ? 'null'
    : typeof e == 'function'
      ? e.name || ''
      : (typeof e == 'object' && e.constructor && e.constructor.name) || ''
}
function Zi(e, t) {
  return Gi(e) === Gi(t)
}
function Qi(e, t) {
  return F(t) ? t.findIndex((n) => Zi(n, e)) : G(t) && Zi(t, e) ? 0 : -1
}
const Ms = (e) => e[0] === '_' || e === '$stable',
  gi = (e) => (F(e) ? e.map(Ke) : [Ke(e)]),
  lc = (e, t, n) => {
    if (t._n) return t
    const r = Sa((...i) => gi(t(...i)), n)
    return (r._c = !1), r
  },
  zs = (e, t, n) => {
    const r = e._ctx
    for (const i in e) {
      if (Ms(i)) continue
      const l = e[i]
      if (G(l)) t[i] = lc(i, l, r)
      else if (l != null) {
        const s = gi(l)
        t[i] = () => s
      }
    }
  },
  js = (e, t) => {
    const n = gi(t)
    e.slots.default = () => n
  },
  sc = (e, t) => {
    const n = (e.slots = Is())
    if (e.vnode.shapeFlag & 32) {
      const r = t._
      r ? (ke(n, t), Gl(n, '_', r, !0)) : zs(t, n)
    } else t && js(e, t)
  },
  oc = (e, t, n) => {
    const { vnode: r, slots: i } = e
    let l = !0,
      s = pe
    if (r.shapeFlag & 32) {
      const o = t._
      o
        ? n && o === 1
          ? (l = !1)
          : (ke(i, t), !n && o === 1 && delete i._)
        : ((l = !t.$stable), zs(t, i)),
        (s = t)
    } else t && (js(e, t), (s = { default: 1 }))
    if (l) for (const o in i) !Ms(o) && s[o] == null && delete i[o]
  }
function Wr(e, t, n, r, i = !1) {
  if (F(e)) {
    e.forEach((h, m) => Wr(h, t && (F(t) ? t[m] : t), n, r, i))
    return
  }
  if (Wn(r) && !i) return
  const l = r.shapeFlag & 4 ? br(r.component) || r.component.proxy : r.el,
    s = i ? null : l,
    { i: o, r: a } = e,
    c = t && t.r,
    f = o.refs === pe ? (o.refs = {}) : o.refs,
    p = o.setupState
  if (
    (c != null &&
      c !== a &&
      (be(c) ? ((f[c] = null), ee(p, c) && (p[c] = null)) : Ce(c) && (c.value = null)),
    G(a))
  )
    ht(a, o, 12, [s, f])
  else {
    const h = be(a),
      m = Ce(a)
    if (h || m) {
      const $ = () => {
        if (e.f) {
          const k = h ? (ee(p, a) ? p[a] : f[a]) : a.value
          i
            ? F(k) && ei(k, l)
            : F(k)
              ? k.includes(l) || k.push(l)
              : h
                ? ((f[a] = [l]), ee(p, a) && (p[a] = f[a]))
                : ((a.value = [l]), e.k && (f[e.k] = a.value))
        } else h ? ((f[a] = s), ee(p, a) && (p[a] = s)) : m && ((a.value = s), e.k && (f[e.k] = s))
      }
      s ? (($.id = -1), Ie($, n)) : $()
    }
  }
}
function ac() {
  typeof __VUE_OPTIONS_API__ != 'boolean' && (ln().__VUE_OPTIONS_API__ = !0),
    typeof __VUE_PROD_DEVTOOLS__ != 'boolean' && (ln().__VUE_PROD_DEVTOOLS__ = !1),
    typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__ != 'boolean' &&
      (ln().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = !1)
}
const Ie = Ma
function cc(e) {
  return uc(e)
}
function uc(e, t) {
  ac()
  const n = ln()
  ;(n.__VUE__ = !0), __VUE_PROD_DEVTOOLS__ && ys(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n)
  const {
      insert: r,
      remove: i,
      patchProp: l,
      createElement: s,
      createText: o,
      createComment: a,
      setText: c,
      setElementText: f,
      parentNode: p,
      nextSibling: h,
      setScopeId: m = ze,
      insertStaticContent: $,
    } = e,
    k = (u, d, g, v = null, y = null, _ = null, T = void 0, x = null, C = !!d.dynamicChildren) => {
      if (u === d) return
      u && !Yt(u, d) && ((v = wt(u)), Ae(u, y, _, !0), (u = null)),
        d.patchFlag === -2 && ((C = !1), (d.dynamicChildren = null))
      const { type: w, ref: I, shapeFlag: D } = d
      switch (w) {
        case En:
          S(u, d, g, v)
          break
        case gt:
          b(u, d, g, v)
          break
        case qn:
          u == null && E(d, g, v, T)
          break
        case fe:
          me(u, d, g, v, y, _, T, x, C)
          break
        default:
          D & 1
            ? z(u, d, g, v, y, _, T, x, C)
            : D & 6
              ? K(u, d, g, v, y, _, T, x, C)
              : (D & 64 || D & 128) && w.process(u, d, g, v, y, _, T, x, C, Xe)
      }
      I != null && y && Wr(I, u && u.ref, _, d || u, !d)
    },
    S = (u, d, g, v) => {
      if (u == null) r((d.el = o(d.children)), g, v)
      else {
        const y = (d.el = u.el)
        d.children !== u.children && c(y, d.children)
      }
    },
    b = (u, d, g, v) => {
      u == null ? r((d.el = a(d.children || '')), g, v) : (d.el = u.el)
    },
    E = (u, d, g, v) => {
      ;[u.el, u.anchor] = $(u.children, d, g, v, u.el, u.anchor)
    },
    j = ({ el: u, anchor: d }, g, v) => {
      let y
      for (; u && u !== d; ) (y = h(u)), r(u, g, v), (u = y)
      r(d, g, v)
    },
    V = ({ el: u, anchor: d }) => {
      let g
      for (; u && u !== d; ) (g = h(u)), i(u), (u = g)
      i(d)
    },
    z = (u, d, g, v, y, _, T, x, C) => {
      d.type === 'svg' ? (T = 'svg') : d.type === 'math' && (T = 'mathml'),
        u == null ? P(d, g, v, y, _, T, x, C) : Se(u, d, y, _, T, x, C)
    },
    P = (u, d, g, v, y, _, T, x) => {
      let C, w
      const { props: I, shapeFlag: D, transition: R, dirs: H } = u
      if (
        ((C = u.el = s(u.type, _, I && I.is, I)),
        D & 8 ? f(C, u.children) : D & 16 && N(u.children, C, null, v, y, Tr(u, _), T, x),
        H && _t(u, null, v, 'created'),
        W(C, u, u.scopeId, T, v),
        I)
      ) {
        for (const oe in I)
          oe !== 'value' && !rn(oe) && l(C, oe, null, I[oe], _, u.children, v, y, je)
        'value' in I && l(C, 'value', null, I.value, _), (w = I.onVnodeBeforeMount) && qe(w, v, u)
      }
      __VUE_PROD_DEVTOOLS__ &&
        (Object.defineProperty(C, '__vnode', { value: u, enumerable: !1 }),
        Object.defineProperty(C, '__vueParentComponent', { value: v, enumerable: !1 })),
        H && _t(u, null, v, 'beforeMount')
      const Y = fc(y, R)
      Y && R.beforeEnter(C),
        r(C, d, g),
        ((w = I && I.onVnodeMounted) || Y || H) &&
          Ie(() => {
            w && qe(w, v, u), Y && R.enter(C), H && _t(u, null, v, 'mounted')
          }, y)
    },
    W = (u, d, g, v, y) => {
      if ((g && m(u, g), v)) for (let _ = 0; _ < v.length; _++) m(u, v[_])
      if (y) {
        let _ = y.subTree
        if (d === _) {
          const T = y.vnode
          W(u, T, T.scopeId, T.slotScopeIds, y.parent)
        }
      }
    },
    N = (u, d, g, v, y, _, T, x, C = 0) => {
      for (let w = C; w < u.length; w++) {
        const I = (u[w] = x ? ct(u[w]) : Ke(u[w]))
        k(null, I, d, g, v, y, _, T, x)
      }
    },
    Se = (u, d, g, v, y, _, T) => {
      const x = (d.el = u.el)
      let { patchFlag: C, dynamicChildren: w, dirs: I } = d
      C |= u.patchFlag & 16
      const D = u.props || pe,
        R = d.props || pe
      let H
      if (
        (g && kt(g, !1),
        (H = R.onVnodeBeforeUpdate) && qe(H, g, d, u),
        I && _t(d, u, g, 'beforeUpdate'),
        g && kt(g, !0),
        w
          ? q(u.dynamicChildren, w, x, g, v, Tr(d, y), _)
          : T || J(u, d, x, null, g, v, Tr(d, y), _, !1),
        C > 0)
      ) {
        if (C & 16) de(x, d, D, R, g, v, y)
        else if (
          (C & 2 && D.class !== R.class && l(x, 'class', null, R.class, y),
          C & 4 && l(x, 'style', D.style, R.style, y),
          C & 8)
        ) {
          const Y = d.dynamicProps
          for (let oe = 0; oe < Y.length; oe++) {
            const ge = Y[oe],
              we = D[ge],
              De = R[ge]
            ;(De !== we || ge === 'value') && l(x, ge, we, De, y, u.children, g, v, je)
          }
        }
        C & 1 && u.children !== d.children && f(x, d.children)
      } else !T && w == null && de(x, d, D, R, g, v, y)
      ;((H = R.onVnodeUpdated) || I) &&
        Ie(() => {
          H && qe(H, g, d, u), I && _t(d, u, g, 'updated')
        }, v)
    },
    q = (u, d, g, v, y, _, T) => {
      for (let x = 0; x < d.length; x++) {
        const C = u[x],
          w = d[x],
          I = C.el && (C.type === fe || !Yt(C, w) || C.shapeFlag & 70) ? p(C.el) : g
        k(C, w, I, null, v, y, _, T, !0)
      }
    },
    de = (u, d, g, v, y, _, T) => {
      if (g !== v) {
        if (g !== pe)
          for (const x in g) !rn(x) && !(x in v) && l(u, x, g[x], null, T, d.children, y, _, je)
        for (const x in v) {
          if (rn(x)) continue
          const C = v[x],
            w = g[x]
          C !== w && x !== 'value' && l(u, x, w, C, T, d.children, y, _, je)
        }
        'value' in v && l(u, 'value', g.value, v.value, T)
      }
    },
    me = (u, d, g, v, y, _, T, x, C) => {
      const w = (d.el = u ? u.el : o('')),
        I = (d.anchor = u ? u.anchor : o(''))
      let { patchFlag: D, dynamicChildren: R, slotScopeIds: H } = d
      H && (x = x ? x.concat(H) : H),
        u == null
          ? (r(w, g, v), r(I, g, v), N(d.children || [], g, I, y, _, T, x, C))
          : D > 0 && D & 64 && R && u.dynamicChildren
            ? (q(u.dynamicChildren, R, g, y, _, T, x),
              (d.key != null || (y && d === y.subTree)) && Us(u, d, !0))
            : J(u, d, g, I, y, _, T, x, C)
    },
    K = (u, d, g, v, y, _, T, x, C) => {
      ;(d.slotScopeIds = x),
        u == null
          ? d.shapeFlag & 512
            ? y.ctx.activate(d, g, v, T, C)
            : B(d, g, v, y, _, T, C)
          : le(u, d, C)
    },
    B = (u, d, g, v, y, _, T) => {
      const x = (u.component = wc(u, v, y))
      if ((Es(u) && (x.ctx.renderer = Xe), kc(x), x.asyncDep)) {
        if ((y && y.registerDep(x, ne), !u.el)) {
          const C = (x.subTree = ae(gt))
          b(null, C, d, g)
        }
      } else ne(x, u, d, g, y, _, T)
    },
    le = (u, d, g) => {
      const v = (d.component = u.component)
      if ($a(u, d, g))
        if (v.asyncDep && !v.asyncResolved) {
          Q(v, d, g)
          return
        } else (v.next = d), ma(v.update), (v.effect.dirty = !0), v.update()
      else (d.el = u.el), (v.vnode = d)
    },
    ne = (u, d, g, v, y, _, T) => {
      const x = () => {
          if (u.isMounted) {
            let { next: I, bu: D, u: R, parent: H, vnode: Y } = u
            {
              const Ot = Vs(u)
              if (Ot) {
                I && ((I.el = Y.el), Q(u, I, T)),
                  Ot.asyncDep.then(() => {
                    u.isUnmounted || x()
                  })
                return
              }
            }
            let oe = I,
              ge
            kt(u, !1),
              I ? ((I.el = Y.el), Q(u, I, T)) : (I = Y),
              D && Nn(D),
              (ge = I.props && I.props.onVnodeBeforeUpdate) && qe(ge, H, I, Y),
              kt(u, !0)
            const we = Cr(u),
              De = u.subTree
            ;(u.subTree = we),
              k(De, we, p(De.el), wt(De), u, y, _),
              (I.el = we.el),
              oe === null && Aa(u, we.el),
              R && Ie(R, y),
              (ge = I.props && I.props.onVnodeUpdated) && Ie(() => qe(ge, H, I, Y), y),
              __VUE_PROD_DEVTOOLS__ && bs(u)
          } else {
            let I
            const { el: D, props: R } = d,
              { bm: H, m: Y, parent: oe } = u,
              ge = Wn(d)
            if (
              (kt(u, !1),
              H && Nn(H),
              !ge && (I = R && R.onVnodeBeforeMount) && qe(I, oe, d),
              kt(u, !0),
              D && A)
            ) {
              const we = () => {
                ;(u.subTree = Cr(u)), A(D, u.subTree, u, y, null)
              }
              ge ? d.type.__asyncLoader().then(() => !u.isUnmounted && we()) : we()
            } else {
              const we = (u.subTree = Cr(u))
              k(null, we, g, v, u, y, _), (d.el = we.el)
            }
            if ((Y && Ie(Y, y), !ge && (I = R && R.onVnodeMounted))) {
              const we = d
              Ie(() => qe(I, oe, we), y)
            }
            ;(d.shapeFlag & 256 || (oe && Wn(oe.vnode) && oe.vnode.shapeFlag & 256)) &&
              u.a &&
              Ie(u.a, y),
              (u.isMounted = !0),
              __VUE_PROD_DEVTOOLS__ && _a(u),
              (d = g = v = null)
          }
        },
        C = (u.effect = new ri(x, ze, () => fi(w), u.scope)),
        w = (u.update = () => {
          C.dirty && C.run()
        })
      ;(w.id = u.uid), kt(u, !0), w()
    },
    Q = (u, d, g) => {
      d.component = u
      const v = u.vnode.props
      ;(u.vnode = d), (u.next = null), ic(u, d.props, v, g), oc(u, d.children, g), vt(), Vi(u), yt()
    },
    J = (u, d, g, v, y, _, T, x, C = !1) => {
      const w = u && u.children,
        I = u ? u.shapeFlag : 0,
        D = d.children,
        { patchFlag: R, shapeFlag: H } = d
      if (R > 0) {
        if (R & 128) {
          Ne(w, D, g, v, y, _, T, x, C)
          return
        } else if (R & 256) {
          ve(w, D, g, v, y, _, T, x, C)
          return
        }
      }
      H & 8
        ? (I & 16 && je(w, y, _), D !== w && f(g, D))
        : I & 16
          ? H & 16
            ? Ne(w, D, g, v, y, _, T, x, C)
            : je(w, y, _, !0)
          : (I & 8 && f(g, ''), H & 16 && N(D, g, v, y, _, T, x, C))
    },
    ve = (u, d, g, v, y, _, T, x, C) => {
      ;(u = u || Pt), (d = d || Pt)
      const w = u.length,
        I = d.length,
        D = Math.min(w, I)
      let R
      for (R = 0; R < D; R++) {
        const H = (d[R] = C ? ct(d[R]) : Ke(d[R]))
        k(u[R], H, g, null, y, _, T, x, C)
      }
      w > I ? je(u, y, _, !0, !1, D) : N(d, g, v, y, _, T, x, C, D)
    },
    Ne = (u, d, g, v, y, _, T, x, C) => {
      let w = 0
      const I = d.length
      let D = u.length - 1,
        R = I - 1
      for (; w <= D && w <= R; ) {
        const H = u[w],
          Y = (d[w] = C ? ct(d[w]) : Ke(d[w]))
        if (Yt(H, Y)) k(H, Y, g, null, y, _, T, x, C)
        else break
        w++
      }
      for (; w <= D && w <= R; ) {
        const H = u[D],
          Y = (d[R] = C ? ct(d[R]) : Ke(d[R]))
        if (Yt(H, Y)) k(H, Y, g, null, y, _, T, x, C)
        else break
        D--, R--
      }
      if (w > D) {
        if (w <= R) {
          const H = R + 1,
            Y = H < I ? d[H].el : v
          for (; w <= R; ) k(null, (d[w] = C ? ct(d[w]) : Ke(d[w])), g, Y, y, _, T, x, C), w++
        }
      } else if (w > R) for (; w <= D; ) Ae(u[w], y, _, !0), w++
      else {
        const H = w,
          Y = w,
          oe = new Map()
        for (w = Y; w <= R; w++) {
          const Oe = (d[w] = C ? ct(d[w]) : Ke(d[w]))
          Oe.key != null && oe.set(Oe.key, w)
        }
        let ge,
          we = 0
        const De = R - Y + 1
        let Ot = !1,
          Si = 0
        const Qt = new Array(De)
        for (w = 0; w < De; w++) Qt[w] = 0
        for (w = H; w <= D; w++) {
          const Oe = u[w]
          if (we >= De) {
            Ae(Oe, y, _, !0)
            continue
          }
          let We
          if (Oe.key != null) We = oe.get(Oe.key)
          else
            for (ge = Y; ge <= R; ge++)
              if (Qt[ge - Y] === 0 && Yt(Oe, d[ge])) {
                We = ge
                break
              }
          We === void 0
            ? Ae(Oe, y, _, !0)
            : ((Qt[We - Y] = w + 1),
              We >= Si ? (Si = We) : (Ot = !0),
              k(Oe, d[We], g, null, y, _, T, x, C),
              we++)
        }
        const Ti = Ot ? dc(Qt) : Pt
        for (ge = Ti.length - 1, w = De - 1; w >= 0; w--) {
          const Oe = Y + w,
            We = d[Oe],
            Ri = Oe + 1 < I ? d[Oe + 1].el : v
          Qt[w] === 0
            ? k(null, We, g, Ri, y, _, T, x, C)
            : Ot && (ge < 0 || w !== Ti[ge] ? Be(We, g, Ri, 2) : ge--)
        }
      }
    },
    Be = (u, d, g, v, y = null) => {
      const { el: _, type: T, transition: x, children: C, shapeFlag: w } = u
      if (w & 6) {
        Be(u.component.subTree, d, g, v)
        return
      }
      if (w & 128) {
        u.suspense.move(d, g, v)
        return
      }
      if (w & 64) {
        T.move(u, d, g, Xe)
        return
      }
      if (T === fe) {
        r(_, d, g)
        for (let D = 0; D < C.length; D++) Be(C[D], d, g, v)
        r(u.anchor, d, g)
        return
      }
      if (T === qn) {
        j(u, d, g)
        return
      }
      if (v !== 2 && w & 1 && x)
        if (v === 0) x.beforeEnter(_), r(_, d, g), Ie(() => x.enter(_), y)
        else {
          const { leave: D, delayLeave: R, afterLeave: H } = x,
            Y = () => r(_, d, g),
            oe = () => {
              D(_, () => {
                Y(), H && H()
              })
            }
          R ? R(_, Y, oe) : oe()
        }
      else r(_, d, g)
    },
    Ae = (u, d, g, v = !1, y = !1) => {
      const {
        type: _,
        props: T,
        ref: x,
        children: C,
        dynamicChildren: w,
        shapeFlag: I,
        patchFlag: D,
        dirs: R,
      } = u
      if ((x != null && Wr(x, null, g, u, !0), I & 256)) {
        d.ctx.deactivate(u)
        return
      }
      const H = I & 1 && R,
        Y = !Wn(u)
      let oe
      if ((Y && (oe = T && T.onVnodeBeforeUnmount) && qe(oe, d, u), I & 6)) kr(u.component, g, v)
      else {
        if (I & 128) {
          u.suspense.unmount(g, v)
          return
        }
        H && _t(u, null, d, 'beforeUnmount'),
          I & 64
            ? u.type.remove(u, d, g, y, Xe, v)
            : w && (_ !== fe || (D > 0 && D & 64))
              ? je(w, d, g, !1, !0)
              : ((_ === fe && D & 384) || (!y && I & 16)) && je(C, d, g),
          v && Gt(u)
      }
      ;((Y && (oe = T && T.onVnodeUnmounted)) || H) &&
        Ie(() => {
          oe && qe(oe, d, u), H && _t(u, null, d, 'unmounted')
        }, g)
    },
    Gt = (u) => {
      const { type: d, el: g, anchor: v, transition: y } = u
      if (d === fe) {
        _r(g, v)
        return
      }
      if (d === qn) {
        V(u)
        return
      }
      const _ = () => {
        i(g), y && !y.persisted && y.afterLeave && y.afterLeave()
      }
      if (u.shapeFlag & 1 && y && !y.persisted) {
        const { leave: T, delayLeave: x } = y,
          C = () => T(g, _)
        x ? x(u.el, _, C) : C()
      } else _()
    },
    _r = (u, d) => {
      let g
      for (; u !== d; ) (g = h(u)), i(u), (u = g)
      i(d)
    },
    kr = (u, d, g) => {
      const { bum: v, scope: y, update: _, subTree: T, um: x } = u
      v && Nn(v),
        y.stop(),
        _ && ((_.active = !1), Ae(T, u, d, g)),
        x && Ie(x, d),
        Ie(() => {
          u.isUnmounted = !0
        }, d),
        d &&
          d.pendingBranch &&
          !d.isUnmounted &&
          u.asyncDep &&
          !u.asyncResolved &&
          u.suspenseId === d.pendingId &&
          (d.deps--, d.deps === 0 && d.resolve()),
        __VUE_PROD_DEVTOOLS__ && xa(u)
    },
    je = (u, d, g, v = !1, y = !1, _ = 0) => {
      for (let T = _; T < u.length; T++) Ae(u[T], d, g, v, y)
    },
    wt = (u) =>
      u.shapeFlag & 6
        ? wt(u.component.subTree)
        : u.shapeFlag & 128
          ? u.suspense.next()
          : h(u.anchor || u.el)
  let Lt = !1
  const Zt = (u, d, g) => {
      u == null
        ? d._vnode && Ae(d._vnode, null, null, !0)
        : k(d._vnode || null, u, d, null, null, null, g),
        Lt || ((Lt = !0), Vi(), ms(), (Lt = !1)),
        (d._vnode = u)
    },
    Xe = { p: k, um: Ae, m: Be, r: Gt, mt: B, mc: N, pc: J, pbc: q, n: wt, o: e }
  let O, A
  return t && ([O, A] = t(Xe)), { render: Zt, hydrate: O, createApp: nc(Zt, O) }
}
function Tr({ type: e, props: t }, n) {
  return (n === 'svg' && e === 'foreignObject') ||
    (n === 'mathml' && e === 'annotation-xml' && t && t.encoding && t.encoding.includes('html'))
    ? void 0
    : n
}
function kt({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n
}
function fc(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted
}
function Us(e, t, n = !1) {
  const r = e.children,
    i = t.children
  if (F(r) && F(i))
    for (let l = 0; l < r.length; l++) {
      const s = r[l]
      let o = i[l]
      o.shapeFlag & 1 &&
        !o.dynamicChildren &&
        ((o.patchFlag <= 0 || o.patchFlag === 32) && ((o = i[l] = ct(i[l])), (o.el = s.el)),
        n || Us(s, o)),
        o.type === En && (o.el = s.el)
    }
}
function dc(e) {
  const t = e.slice(),
    n = [0]
  let r, i, l, s, o
  const a = e.length
  for (r = 0; r < a; r++) {
    const c = e[r]
    if (c !== 0) {
      if (((i = n[n.length - 1]), e[i] < c)) {
        ;(t[r] = i), n.push(r)
        continue
      }
      for (l = 0, s = n.length - 1; l < s; ) (o = (l + s) >> 1), e[n[o]] < c ? (l = o + 1) : (s = o)
      c < e[n[l]] && (l > 0 && (t[r] = n[l - 1]), (n[l] = r))
    }
  }
  for (l = n.length, s = n[l - 1]; l-- > 0; ) (n[l] = s), (s = t[s])
  return n
}
function Vs(e) {
  const t = e.subTree.component
  if (t) return t.asyncDep && !t.asyncResolved ? t : Vs(t)
}
const hc = (e) => e.__isTeleport,
  fe = Symbol.for('v-fgt'),
  En = Symbol.for('v-txt'),
  gt = Symbol.for('v-cmt'),
  qn = Symbol.for('v-stc'),
  cn = []
let Fe = null
function L(e = !1) {
  cn.push((Fe = e ? null : []))
}
function pc() {
  cn.pop(), (Fe = cn[cn.length - 1] || null)
}
let vn = 1
function Yi(e) {
  vn += e
}
function Ds(e) {
  return (e.dynamicChildren = vn > 0 ? Fe || Pt : null), pc(), vn > 0 && Fe && Fe.push(e), e
}
function M(e, t, n, r, i, l) {
  return Ds(U(e, t, n, r, i, l, !0))
}
function lt(e, t, n, r, i) {
  return Ds(ae(e, t, n, r, i, !0))
}
function qr(e) {
  return e ? e.__v_isVNode === !0 : !1
}
function Yt(e, t) {
  return e.type === t.type && e.key === t.key
}
const Fs = ({ key: e }) => e ?? null,
  Kn = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == 'number' && (e = '' + e),
    e != null ? (be(e) || Ce(e) || G(e) ? { i: Re, r: e, k: t, f: !!n } : e) : null
  )
function U(e, t = null, n = null, r = 0, i = null, l = e === fe ? 0 : 1, s = !1, o = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Fs(t),
    ref: t && Kn(t),
    scopeId: _s,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: l,
    patchFlag: r,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: Re,
  }
  return (
    o ? (mi(a, n), l & 128 && e.normalize(a)) : n && (a.shapeFlag |= be(n) ? 8 : 16),
    vn > 0 && !s && Fe && (a.patchFlag > 0 || l & 6) && a.patchFlag !== 32 && Fe.push(a),
    a
  )
}
const ae = gc
function gc(e, t = null, n = null, r = 0, i = null, l = !1) {
  if (((!e || e === La) && (e = gt), qr(e))) {
    const o = Ut(e, t, !0)
    return (
      n && mi(o, n),
      vn > 0 && !l && Fe && (o.shapeFlag & 6 ? (Fe[Fe.indexOf(e)] = o) : Fe.push(o)),
      (o.patchFlag |= -2),
      o
    )
  }
  if ((Tc(e) && (e = e.__vccOpts), t)) {
    t = mc(t)
    let { class: o, style: a } = t
    o && !be(o) && (t.class = ye(o)),
      he(a) && (cs(a) && !F(a) && (a = ke({}, a)), (t.style = dn(a)))
  }
  const s = be(e) ? 1 : Pa(e) ? 128 : hc(e) ? 64 : he(e) ? 4 : G(e) ? 2 : 0
  return U(e, t, n, r, i, s, l, !0)
}
function mc(e) {
  return e ? (cs(e) || Ls(e) ? ke({}, e) : e) : null
}
function Ut(e, t, n = !1, r = !1) {
  const { props: i, ref: l, patchFlag: s, children: o, transition: a } = e,
    c = t ? vc(i || {}, t) : i,
    f = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: c,
      key: c && Fs(c),
      ref: t && t.ref ? (n && l ? (F(l) ? l.concat(Kn(t)) : [l, Kn(t)]) : Kn(t)) : l,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: o,
      target: e.target,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== fe ? (s === -1 ? 16 : s | 16) : s,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: a,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && Ut(e.ssContent),
      ssFallback: e.ssFallback && Ut(e.ssFallback),
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce,
    }
  return a && r && (f.transition = a.clone(f)), f
}
function tt(e = ' ', t = 0) {
  return ae(En, null, e, t)
}
function te(e = '', t = !1) {
  return t ? (L(), lt(gt, null, e)) : ae(gt, null, e)
}
function Ke(e) {
  return e == null || typeof e == 'boolean'
    ? ae(gt)
    : F(e)
      ? ae(fe, null, e.slice())
      : typeof e == 'object'
        ? ct(e)
        : ae(En, null, String(e))
}
function ct(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : Ut(e)
}
function mi(e, t) {
  let n = 0
  const { shapeFlag: r } = e
  if (t == null) t = null
  else if (F(t)) n = 16
  else if (typeof t == 'object')
    if (r & 65) {
      const i = t.default
      i && (i._c && (i._d = !1), mi(e, i()), i._c && (i._d = !0))
      return
    } else {
      n = 32
      const i = t._
      !i && !Ls(t)
        ? (t._ctx = Re)
        : i === 3 && Re && (Re.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)))
    }
  else
    G(t)
      ? ((t = { default: t, _ctx: Re }), (n = 32))
      : ((t = String(t)), r & 64 ? ((n = 16), (t = [tt(t)])) : (n = 8))
  ;(e.children = t), (e.shapeFlag |= n)
}
function vc(...e) {
  const t = {}
  for (let n = 0; n < e.length; n++) {
    const r = e[n]
    for (const i in r)
      if (i === 'class') t.class !== r.class && (t.class = ye([t.class, r.class]))
      else if (i === 'style') t.style = dn([t.style, r.style])
      else if (ur(i)) {
        const l = t[i],
          s = r[i]
        s && l !== s && !(F(l) && l.includes(s)) && (t[i] = l ? [].concat(l, s) : s)
      } else i !== '' && (t[i] = r[i])
  }
  return t
}
function qe(e, t, n, r = null) {
  He(e, t, 7, [n, r])
}
const yc = Rs()
let bc = 0
function wc(e, t, n) {
  const r = e.type,
    i = (t ? t.appContext : e.appContext) || yc,
    l = {
      uid: bc++,
      vnode: e,
      type: r,
      parent: t,
      appContext: i,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new Do(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(i.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Ps(r, i),
      emitsOptions: ws(r, i),
      emit: null,
      emitted: null,
      propsDefaults: pe,
      inheritAttrs: r.inheritAttrs,
      ctx: pe,
      data: pe,
      props: pe,
      attrs: pe,
      slots: pe,
      refs: pe,
      setupState: pe,
      setupContext: null,
      attrsProxy: null,
      slotsProxy: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    }
  return (
    (l.ctx = { _: l }), (l.root = t ? t.root : l), (l.emit = Ca.bind(null, l)), e.ce && e.ce(l), l
  )
}
let xe = null
const _c = () => xe || Re
let tr, Kr
{
  const e = ln(),
    t = (n, r) => {
      let i
      return (
        (i = e[n]) || (i = e[n] = []),
        i.push(r),
        (l) => {
          i.length > 1 ? i.forEach((s) => s(l)) : i[0](l)
        }
      )
    }
  ;(tr = t('__VUE_INSTANCE_SETTERS__', (n) => (xe = n))),
    (Kr = t('__VUE_SSR_SETTERS__', (n) => (yr = n)))
}
const Cn = (e) => {
    const t = xe
    return (
      tr(e),
      e.scope.on(),
      () => {
        e.scope.off(), tr(t)
      }
    )
  },
  Ji = () => {
    xe && xe.scope.off(), tr(null)
  }
function Hs(e) {
  return e.vnode.shapeFlag & 4
}
let yr = !1
function kc(e, t = !1) {
  t && Kr(t)
  const { props: n, children: r } = e.vnode,
    i = Hs(e)
  rc(e, n, i, t), sc(e, r)
  const l = i ? xc(e, t) : void 0
  return t && Kr(!1), l
}
function xc(e, t) {
  const n = e.type
  ;(e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, Za))
  const { setup: r } = n
  if (r) {
    const i = (e.setupContext = r.length > 1 ? Cc(e) : null),
      l = Cn(e)
    vt()
    const s = ht(r, e, 0, [e.props, i])
    if ((yt(), l(), Wl(s))) {
      if ((s.then(Ji, Ji), t))
        return s
          .then((o) => {
            Xi(e, o, t)
          })
          .catch((o) => {
            pr(o, e, 0)
          })
      e.asyncDep = s
    } else Xi(e, s, t)
  } else Ns(e, t)
}
function Xi(e, t, n) {
  G(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : he(t) && (__VUE_PROD_DEVTOOLS__ && (e.devtoolsRawSetupState = t), (e.setupState = hs(t))),
    Ns(e, n)
}
let el
function Ns(e, t, n) {
  const r = e.type
  if (!e.render) {
    if (!t && el && !r.render) {
      const i = r.template || pi(e).template
      if (i) {
        const { isCustomElement: l, compilerOptions: s } = e.appContext.config,
          { delimiters: o, compilerOptions: a } = r,
          c = ke(ke({ isCustomElement: l, delimiters: o }, s), a)
        r.render = el(i, c)
      }
    }
    e.render = r.render || ze
  }
  if (__VUE_OPTIONS_API__) {
    const i = Cn(e)
    vt()
    try {
      Qa(e)
    } finally {
      yt(), i()
    }
  }
}
const Ec = {
  get(e, t) {
    return Le(e, 'get', ''), e[t]
  },
}
function Cc(e) {
  const t = (n) => {
    e.exposed = n || {}
  }
  return { attrs: new Proxy(e.attrs, Ec), slots: e.slots, emit: e.emit, expose: t }
}
function br(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(hs(ca(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n]
          if (n in on) return on[n](e)
        },
        has(t, n) {
          return n in t || n in on
        },
      }))
    )
}
function Sc(e, t = !0) {
  return G(e) ? e.displayName || e.name : e.name || (t && e.__name)
}
function Tc(e) {
  return G(e) && '__vccOpts' in e
}
const _e = (e, t) => ua(e, t, yr)
function ie(e, t, n) {
  const r = arguments.length
  return r === 2
    ? he(t) && !F(t)
      ? qr(t)
        ? ae(e, null, [t])
        : ae(e, t)
      : ae(e, null, t)
    : (r > 3 ? (n = Array.prototype.slice.call(arguments, 2)) : r === 3 && qr(n) && (n = [n]),
      ae(e, t, n))
}
const tl = '3.4.26'
/**
 * @vue/runtime-dom v3.4.26
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ const Rc = 'http://www.w3.org/2000/svg',
  $c = 'http://www.w3.org/1998/Math/MathML',
  ut = typeof document < 'u' ? document : null,
  nl = ut && ut.createElement('template'),
  Ac = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null)
    },
    remove: (e) => {
      const t = e.parentNode
      t && t.removeChild(e)
    },
    createElement: (e, t, n, r) => {
      const i =
        t === 'svg'
          ? ut.createElementNS(Rc, e)
          : t === 'mathml'
            ? ut.createElementNS($c, e)
            : ut.createElement(e, n ? { is: n } : void 0)
      return e === 'select' && r && r.multiple != null && i.setAttribute('multiple', r.multiple), i
    },
    createText: (e) => ut.createTextNode(e),
    createComment: (e) => ut.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t
    },
    setElementText: (e, t) => {
      e.textContent = t
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => ut.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, '')
    },
    insertStaticContent(e, t, n, r, i, l) {
      const s = n ? n.previousSibling : t.lastChild
      if (i && (i === l || i.nextSibling))
        for (; t.insertBefore(i.cloneNode(!0), n), !(i === l || !(i = i.nextSibling)); );
      else {
        nl.innerHTML = r === 'svg' ? `<svg>${e}</svg>` : r === 'mathml' ? `<math>${e}</math>` : e
        const o = nl.content
        if (r === 'svg' || r === 'mathml') {
          const a = o.firstChild
          for (; a.firstChild; ) o.appendChild(a.firstChild)
          o.removeChild(a)
        }
        t.insertBefore(o, n)
      }
      return [s ? s.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
    },
  },
  Ic = Symbol('_vtc')
function Lc(e, t, n) {
  const r = e[Ic]
  r && (t = (t ? [t, ...r] : [...r]).join(' ')),
    t == null ? e.removeAttribute('class') : n ? e.setAttribute('class', t) : (e.className = t)
}
const nr = Symbol('_vod'),
  Bs = Symbol('_vsh'),
  rl = {
    beforeMount(e, { value: t }, { transition: n }) {
      ;(e[nr] = e.style.display === 'none' ? '' : e.style.display),
        n && t ? n.beforeEnter(e) : Jt(e, t)
    },
    mounted(e, { value: t }, { transition: n }) {
      n && t && n.enter(e)
    },
    updated(e, { value: t, oldValue: n }, { transition: r }) {
      !t != !n &&
        (r
          ? t
            ? (r.beforeEnter(e), Jt(e, !0), r.enter(e))
            : r.leave(e, () => {
                Jt(e, !1)
              })
          : Jt(e, t))
    },
    beforeUnmount(e, { value: t }) {
      Jt(e, t)
    },
  }
function Jt(e, t) {
  ;(e.style.display = t ? e[nr] : 'none'), (e[Bs] = !t)
}
const Oc = Symbol(''),
  Pc = /(^|;)\s*display\s*:/
function Mc(e, t, n) {
  const r = e.style,
    i = be(n)
  let l = !1
  if (n && !i) {
    if (t)
      if (be(t))
        for (const s of t.split(';')) {
          const o = s.slice(0, s.indexOf(':')).trim()
          n[o] == null && Gn(r, o, '')
        }
      else for (const s in t) n[s] == null && Gn(r, s, '')
    for (const s in n) s === 'display' && (l = !0), Gn(r, s, n[s])
  } else if (i) {
    if (t !== n) {
      const s = r[Oc]
      s && (n += ';' + s), (r.cssText = n), (l = Pc.test(n))
    }
  } else t && e.removeAttribute('style')
  nr in e && ((e[nr] = l ? r.display : ''), e[Bs] && (r.display = 'none'))
}
const il = /\s*!important$/
function Gn(e, t, n) {
  if (F(n)) n.forEach((r) => Gn(e, t, r))
  else if ((n == null && (n = ''), t.startsWith('--'))) e.setProperty(t, n)
  else {
    const r = zc(e, t)
    il.test(n) ? e.setProperty(Bt(r), n.replace(il, ''), 'important') : (e[r] = n)
  }
}
const ll = ['Webkit', 'Moz', 'ms'],
  Rr = {}
function zc(e, t) {
  const n = Rr[t]
  if (n) return n
  let r = Je(t)
  if (r !== 'filter' && r in e) return (Rr[t] = r)
  r = dr(r)
  for (let i = 0; i < ll.length; i++) {
    const l = ll[i] + r
    if (l in e) return (Rr[t] = l)
  }
  return t
}
const sl = 'http://www.w3.org/1999/xlink'
function jc(e, t, n, r, i) {
  if (r && t.startsWith('xlink:'))
    n == null ? e.removeAttributeNS(sl, t.slice(6, t.length)) : e.setAttributeNS(sl, t, n)
  else {
    const l = Uo(t)
    n == null || (l && !Zl(n)) ? e.removeAttribute(t) : e.setAttribute(t, l ? '' : n)
  }
}
function Uc(e, t, n, r, i, l, s) {
  if (t === 'innerHTML' || t === 'textContent') {
    r && s(r, i, l), (e[t] = n ?? '')
    return
  }
  const o = e.tagName
  if (t === 'value' && o !== 'PROGRESS' && !o.includes('-')) {
    const c = o === 'OPTION' ? e.getAttribute('value') || '' : e.value,
      f = n ?? ''
    ;(c !== f || !('_value' in e)) && (e.value = f),
      n == null && e.removeAttribute(t),
      (e._value = n)
    return
  }
  let a = !1
  if (n === '' || n == null) {
    const c = typeof e[t]
    c === 'boolean'
      ? (n = Zl(n))
      : n == null && c === 'string'
        ? ((n = ''), (a = !0))
        : c === 'number' && ((n = 0), (a = !0))
  }
  try {
    e[t] = n
  } catch {}
  a && e.removeAttribute(t)
}
function et(e, t, n, r) {
  e.addEventListener(t, n, r)
}
function Vc(e, t, n, r) {
  e.removeEventListener(t, n, r)
}
const ol = Symbol('_vei')
function Dc(e, t, n, r, i = null) {
  const l = e[ol] || (e[ol] = {}),
    s = l[t]
  if (r && s) s.value = r
  else {
    const [o, a] = Fc(t)
    if (r) {
      const c = (l[t] = Bc(r, i))
      et(e, o, c, a)
    } else s && (Vc(e, o, s, a), (l[t] = void 0))
  }
}
const al = /(?:Once|Passive|Capture)$/
function Fc(e) {
  let t
  if (al.test(e)) {
    t = {}
    let r
    for (; (r = e.match(al)); )
      (e = e.slice(0, e.length - r[0].length)), (t[r[0].toLowerCase()] = !0)
  }
  return [e[2] === ':' ? e.slice(3) : Bt(e.slice(2)), t]
}
let $r = 0
const Hc = Promise.resolve(),
  Nc = () => $r || (Hc.then(() => ($r = 0)), ($r = Date.now()))
function Bc(e, t) {
  const n = (r) => {
    if (!r._vts) r._vts = Date.now()
    else if (r._vts <= n.attached) return
    He(Wc(r, n.value), t, 5, [r])
  }
  return (n.value = e), (n.attached = Nc()), n
}
function Wc(e, t) {
  if (F(t)) {
    const n = e.stopImmediatePropagation
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0)
      }),
      t.map((r) => (i) => !i._stopped && r && r(i))
    )
  } else return t
}
const cl = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  qc = (e, t, n, r, i, l, s, o, a) => {
    const c = i === 'svg'
    t === 'class'
      ? Lc(e, r, c)
      : t === 'style'
        ? Mc(e, n, r)
        : ur(t)
          ? Xr(t) || Dc(e, t, n, r, s)
          : (
                t[0] === '.'
                  ? ((t = t.slice(1)), !0)
                  : t[0] === '^'
                    ? ((t = t.slice(1)), !1)
                    : Kc(e, t, r, c)
              )
            ? Uc(e, t, r, l, s, o, a)
            : (t === 'true-value' ? (e._trueValue = r) : t === 'false-value' && (e._falseValue = r),
              jc(e, t, r, c))
  }
function Kc(e, t, n, r) {
  if (r) return !!(t === 'innerHTML' || t === 'textContent' || (t in e && cl(t) && G(n)))
  if (
    t === 'spellcheck' ||
    t === 'draggable' ||
    t === 'translate' ||
    t === 'form' ||
    (t === 'list' && e.tagName === 'INPUT') ||
    (t === 'type' && e.tagName === 'TEXTAREA')
  )
    return !1
  if (t === 'width' || t === 'height') {
    const i = e.tagName
    if (i === 'IMG' || i === 'VIDEO' || i === 'CANVAS' || i === 'SOURCE') return !1
  }
  return cl(t) && be(n) ? !1 : t in e
}
const mt = (e) => {
  const t = e.props['onUpdate:modelValue'] || !1
  return F(t) ? (n) => Nn(t, n) : t
}
function Gc(e) {
  e.target.composing = !0
}
function ul(e) {
  const t = e.target
  t.composing && ((t.composing = !1), t.dispatchEvent(new Event('input')))
}
const Ve = Symbol('_assign'),
  Gr = {
    created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
      e[Ve] = mt(i)
      const l = r || (i.props && i.props.type === 'number')
      et(e, t ? 'change' : 'input', (s) => {
        if (s.target.composing) return
        let o = e.value
        n && (o = o.trim()), l && (o = Yn(o)), e[Ve](o)
      }),
        n &&
          et(e, 'change', () => {
            e.value = e.value.trim()
          }),
        t || (et(e, 'compositionstart', Gc), et(e, 'compositionend', ul), et(e, 'change', ul))
    },
    mounted(e, { value: t }) {
      e.value = t ?? ''
    },
    beforeUpdate(e, { value: t, modifiers: { lazy: n, trim: r, number: i } }, l) {
      if (((e[Ve] = mt(l)), e.composing)) return
      const s = (i || e.type === 'number') && !/^0\d/.test(e.value) ? Yn(e.value) : e.value,
        o = t ?? ''
      s !== o &&
        ((document.activeElement === e &&
          e.type !== 'range' &&
          (n || (r && e.value.trim() === o))) ||
          (e.value = o))
    },
  },
  Zc = {
    deep: !0,
    created(e, t, n) {
      ;(e[Ve] = mt(n)),
        et(e, 'change', () => {
          const r = e._modelValue,
            i = Vt(e),
            l = e.checked,
            s = e[Ve]
          if (F(r)) {
            const o = ni(r, i),
              a = o !== -1
            if (l && !a) s(r.concat(i))
            else if (!l && a) {
              const c = [...r]
              c.splice(o, 1), s(c)
            }
          } else if (Nt(r)) {
            const o = new Set(r)
            l ? o.add(i) : o.delete(i), s(o)
          } else s(Ws(e, l))
        })
    },
    mounted: fl,
    beforeUpdate(e, t, n) {
      ;(e[Ve] = mt(n)), fl(e, t, n)
    },
  }
function fl(e, { value: t, oldValue: n }, r) {
  ;(e._modelValue = t),
    F(t)
      ? (e.checked = ni(t, r.props.value) > -1)
      : Nt(t)
        ? (e.checked = t.has(r.props.value))
        : t !== n && (e.checked = Rt(t, Ws(e, !0)))
}
const Qc = {
    created(e, { value: t }, n) {
      ;(e.checked = Rt(t, n.props.value)),
        (e[Ve] = mt(n)),
        et(e, 'change', () => {
          e[Ve](Vt(e))
        })
    },
    beforeUpdate(e, { value: t, oldValue: n }, r) {
      ;(e[Ve] = mt(r)), t !== n && (e.checked = Rt(t, r.props.value))
    },
  },
  Yc = {
    deep: !0,
    created(e, { value: t, modifiers: { number: n } }, r) {
      const i = Nt(t)
      et(e, 'change', () => {
        const l = Array.prototype.filter
          .call(e.options, (s) => s.selected)
          .map((s) => (n ? Yn(Vt(s)) : Vt(s)))
        e[Ve](e.multiple ? (i ? new Set(l) : l) : l[0]),
          (e._assigning = !0),
          kn(() => {
            e._assigning = !1
          })
      }),
        (e[Ve] = mt(r))
    },
    mounted(e, { value: t, modifiers: { number: n } }) {
      dl(e, t)
    },
    beforeUpdate(e, t, n) {
      e[Ve] = mt(n)
    },
    updated(e, { value: t, modifiers: { number: n } }) {
      e._assigning || dl(e, t)
    },
  }
function dl(e, t, n) {
  const r = e.multiple,
    i = F(t)
  if (!(r && !i && !Nt(t))) {
    for (let l = 0, s = e.options.length; l < s; l++) {
      const o = e.options[l],
        a = Vt(o)
      if (r)
        if (i) {
          const c = typeof a
          c === 'string' || c === 'number'
            ? (o.selected = t.some((f) => String(f) === String(a)))
            : (o.selected = ni(t, a) > -1)
        } else o.selected = t.has(a)
      else if (Rt(Vt(o), t)) {
        e.selectedIndex !== l && (e.selectedIndex = l)
        return
      }
    }
    !r && e.selectedIndex !== -1 && (e.selectedIndex = -1)
  }
}
function Vt(e) {
  return '_value' in e ? e._value : e.value
}
function Ws(e, t) {
  const n = t ? '_trueValue' : '_falseValue'
  return n in e ? e[n] : t
}
const Jc = {
  created(e, t, n) {
    jn(e, t, n, null, 'created')
  },
  mounted(e, t, n) {
    jn(e, t, n, null, 'mounted')
  },
  beforeUpdate(e, t, n, r) {
    jn(e, t, n, r, 'beforeUpdate')
  },
  updated(e, t, n, r) {
    jn(e, t, n, r, 'updated')
  },
}
function Xc(e, t) {
  switch (e) {
    case 'SELECT':
      return Yc
    case 'TEXTAREA':
      return Gr
    default:
      switch (t) {
        case 'checkbox':
          return Zc
        case 'radio':
          return Qc
        default:
          return Gr
      }
  }
}
function jn(e, t, n, r, i) {
  const s = Xc(e.tagName, n.props && n.props.type)[i]
  s && s(e, t, n, r)
}
const eu = ke({ patchProp: qc }, Ac)
let hl
function tu() {
  return hl || (hl = cc(eu))
}
const nu = (...e) => {
  const t = tu().createApp(...e),
    { mount: n } = t
  return (
    (t.mount = (r) => {
      const i = iu(r)
      if (!i) return
      const l = t._component
      !G(l) && !l.render && !l.template && (l.template = i.innerHTML), (i.innerHTML = '')
      const s = n(i, !1, ru(i))
      return (
        i instanceof Element && (i.removeAttribute('v-cloak'), i.setAttribute('data-v-app', '')), s
      )
    }),
    t
  )
}
function ru(e) {
  if (e instanceof SVGElement) return 'svg'
  if (typeof MathMLElement == 'function' && e instanceof MathMLElement) return 'mathml'
}
function iu(e) {
  return be(e) ? document.querySelector(e) : e
}
function yn(e) {
  return Yl() ? (Ho(e), !0) : !1
}
function rt(e) {
  return typeof e == 'function' ? e() : X(e)
}
const rr = typeof window < 'u' && typeof document < 'u'
typeof WorkerGlobalScope < 'u' && globalThis instanceof WorkerGlobalScope
const lu = Object.prototype.toString,
  su = (e) => lu.call(e) === '[object Object]',
  ir = () => {}
function qs(e, t) {
  function n(...r) {
    return new Promise((i, l) => {
      Promise.resolve(e(() => t.apply(this, r), { fn: t, thisArg: this, args: r }))
        .then(i)
        .catch(l)
    })
  }
  return n
}
const Ks = (e) => e()
function ou(e, t = {}) {
  let n,
    r,
    i = ir
  const l = (o) => {
    clearTimeout(o), i(), (i = ir)
  }
  return (o) => {
    const a = rt(e),
      c = rt(t.maxWait)
    return (
      n && l(n),
      a <= 0 || (c !== void 0 && c <= 0)
        ? (r && (l(r), (r = null)), Promise.resolve(o()))
        : new Promise((f, p) => {
            ;(i = t.rejectOnCancel ? p : f),
              c &&
                !r &&
                (r = setTimeout(() => {
                  n && l(n), (r = null), f(o())
                }, c)),
              (n = setTimeout(() => {
                r && l(r), (r = null), f(o())
              }, a))
          })
    )
  }
}
function au(e = Ks) {
  const t = Z(!0)
  function n() {
    t.value = !1
  }
  function r() {
    t.value = !0
  }
  const i = (...l) => {
    t.value && e(...l)
  }
  return { isActive: _n(t), pause: n, resume: r, eventFilter: i }
}
function Gs(e) {
  return e || _c()
}
function cu(e, t = 200, n = {}) {
  return qs(ou(t, n), e)
}
function uu(e, t, n = {}) {
  const { eventFilter: r = Ks, ...i } = n
  return $e(e, qs(r, t), i)
}
function fu(e, t, n = {}) {
  const { eventFilter: r, ...i } = n,
    { eventFilter: l, pause: s, resume: o, isActive: a } = au(r)
  return { stop: uu(e, t, { ...i, eventFilter: l }), pause: s, resume: o, isActive: a }
}
function vi(e, t = !0, n) {
  Gs() ? Wt(e, n) : t ? e() : kn(e)
}
function du(e, t) {
  Gs(t) && qt(e, t)
}
function hu(e, t = 1e3, n = {}) {
  const { immediate: r = !0, immediateCallback: i = !1 } = n
  let l = null
  const s = Z(!1)
  function o() {
    l && (clearInterval(l), (l = null))
  }
  function a() {
    ;(s.value = !1), o()
  }
  function c() {
    const f = rt(t)
    f <= 0 || ((s.value = !0), i && e(), o(), (l = setInterval(e, f)))
  }
  if ((r && rr && c(), Ce(t) || typeof t == 'function')) {
    const f = $e(t, () => {
      s.value && rr && c()
    })
    yn(f)
  }
  return yn(a), { isActive: s, pause: a, resume: c }
}
function pu(e) {
  var t
  const n = rt(e)
  return (t = n?.$el) != null ? t : n
}
const lr = rr ? window : void 0,
  Zs = rr ? window.document : void 0
function pl(...e) {
  let t, n, r, i
  if (
    (typeof e[0] == 'string' || Array.isArray(e[0])
      ? (([n, r, i] = e), (t = lr))
      : ([t, n, r, i] = e),
    !t)
  )
    return ir
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r])
  const l = [],
    s = () => {
      l.forEach((f) => f()), (l.length = 0)
    },
    o = (f, p, h, m) => (f.addEventListener(p, h, m), () => f.removeEventListener(p, h, m)),
    a = $e(
      () => [pu(t), rt(i)],
      ([f, p]) => {
        if ((s(), !f)) return
        const h = su(p) ? { ...p } : p
        l.push(...n.flatMap((m) => r.map(($) => o(f, m, $, h))))
      },
      { immediate: !0, flush: 'post' },
    ),
    c = () => {
      a(), s()
    }
  return yn(c), c
}
function gu(e, t = {}) {
  const { immediate: n = !0, fpsLimit: r = void 0, window: i = lr } = t,
    l = Z(!1),
    s = r ? 1e3 / r : null
  let o = 0,
    a = null
  function c(h) {
    if (!l.value || !i) return
    o || (o = h)
    const m = h - o
    if (s && m < s) {
      a = i.requestAnimationFrame(c)
      return
    }
    ;(o = h), e({ delta: m, timestamp: h }), (a = i.requestAnimationFrame(c))
  }
  function f() {
    !l.value && i && ((l.value = !0), (o = 0), (a = i.requestAnimationFrame(c)))
  }
  function p() {
    ;(l.value = !1), a != null && i && (i.cancelAnimationFrame(a), (a = null))
  }
  return n && f(), yn(p), { isActive: _n(l), pause: p, resume: f }
}
const Un =
    typeof globalThis < 'u'
      ? globalThis
      : typeof window < 'u'
        ? window
        : typeof global < 'u'
          ? global
          : typeof self < 'u'
            ? self
            : {},
  Vn = '__vueuse_ssr_handlers__',
  mu = vu()
function vu() {
  return Vn in Un || (Un[Vn] = Un[Vn] || {}), Un[Vn]
}
function yu(e, t) {
  return mu[e] || t
}
function bu(e) {
  return e == null
    ? 'any'
    : e instanceof Set
      ? 'set'
      : e instanceof Map
        ? 'map'
        : e instanceof Date
          ? 'date'
          : typeof e == 'boolean'
            ? 'boolean'
            : typeof e == 'string'
              ? 'string'
              : typeof e == 'object'
                ? 'object'
                : Number.isNaN(e)
                  ? 'any'
                  : 'number'
}
const wu = {
    boolean: { read: (e) => e === 'true', write: (e) => String(e) },
    object: { read: (e) => JSON.parse(e), write: (e) => JSON.stringify(e) },
    number: { read: (e) => Number.parseFloat(e), write: (e) => String(e) },
    any: { read: (e) => e, write: (e) => String(e) },
    string: { read: (e) => e, write: (e) => String(e) },
    map: {
      read: (e) => new Map(JSON.parse(e)),
      write: (e) => JSON.stringify(Array.from(e.entries())),
    },
    set: { read: (e) => new Set(JSON.parse(e)), write: (e) => JSON.stringify(Array.from(e)) },
    date: { read: (e) => new Date(e), write: (e) => e.toISOString() },
  },
  gl = 'vueuse-storage'
function Kt(e, t, n, r = {}) {
  var i
  const {
      flush: l = 'pre',
      deep: s = !0,
      listenToStorageChanges: o = !0,
      writeDefaults: a = !0,
      mergeDefaults: c = !1,
      shallow: f,
      window: p = lr,
      eventFilter: h,
      onError: m = (q) => {
        console.error(q)
      },
      initOnMounted: $,
    } = r,
    k = (f ? fa : Z)(typeof t == 'function' ? t() : t)
  if (!n)
    try {
      n = yu('getDefaultStorage', () => {
        var q
        return (q = lr) == null ? void 0 : q.localStorage
      })()
    } catch (q) {
      m(q)
    }
  if (!n) return k
  const S = rt(t),
    b = bu(S),
    E = (i = r.serializer) != null ? i : wu[b],
    { pause: j, resume: V } = fu(k, () => P(k.value), { flush: l, deep: s, eventFilter: h })
  p &&
    o &&
    vi(() => {
      pl(p, 'storage', N), pl(p, gl, Se), $ && N()
    }),
    $ || N()
  function z(q, de) {
    p &&
      p.dispatchEvent(
        new CustomEvent(gl, { detail: { key: e, oldValue: q, newValue: de, storageArea: n } }),
      )
  }
  function P(q) {
    try {
      const de = n.getItem(e)
      if (q == null) z(de, null), n.removeItem(e)
      else {
        const me = E.write(q)
        de !== me && (n.setItem(e, me), z(de, me))
      }
    } catch (de) {
      m(de)
    }
  }
  function W(q) {
    const de = q ? q.newValue : n.getItem(e)
    if (de == null) return a && S != null && n.setItem(e, E.write(S)), S
    if (!q && c) {
      const me = E.read(de)
      return typeof c == 'function'
        ? c(me, S)
        : b === 'object' && !Array.isArray(me)
          ? { ...S, ...me }
          : me
    } else return typeof de != 'string' ? de : E.read(de)
  }
  function N(q) {
    if (!(q && q.storageArea !== n)) {
      if (q && q.key == null) {
        k.value = S
        return
      }
      if (!(q && q.key !== e)) {
        j()
        try {
          q?.newValue !== E.write(k.value) && (k.value = W(q))
        } catch (de) {
          m(de)
        } finally {
          q ? kn(V) : V()
        }
      }
    }
  }
  function Se(q) {
    N(q.detail)
  }
  return k
}
function _u(e = {}) {
  const { controls: t = !1, interval: n = 'requestAnimationFrame' } = e,
    r = Z(new Date()),
    i = () => (r.value = new Date()),
    l = n === 'requestAnimationFrame' ? gu(i, { immediate: !0 }) : hu(i, n, { immediate: !0 })
  return t ? { now: r, ...l } : r
}
function ku(e, t = ir, n = {}) {
  const {
      immediate: r = !0,
      manual: i = !1,
      type: l = 'text/javascript',
      async: s = !0,
      crossOrigin: o,
      referrerPolicy: a,
      noModule: c,
      defer: f,
      document: p = Zs,
      attrs: h = {},
    } = n,
    m = Z(null)
  let $ = null
  const k = (E) =>
      new Promise((j, V) => {
        const z = (N) => ((m.value = N), j(N), N)
        if (!p) {
          j(!1)
          return
        }
        let P = !1,
          W = p.querySelector(`script[src="${rt(e)}"]`)
        W
          ? W.hasAttribute('data-loaded') && z(W)
          : ((W = p.createElement('script')),
            (W.type = l),
            (W.async = s),
            (W.src = rt(e)),
            f && (W.defer = f),
            o && (W.crossOrigin = o),
            c && (W.noModule = c),
            a && (W.referrerPolicy = a),
            Object.entries(h).forEach(([N, Se]) => W?.setAttribute(N, Se)),
            (P = !0)),
          W.addEventListener('error', (N) => V(N)),
          W.addEventListener('abort', (N) => V(N)),
          W.addEventListener('load', () => {
            W.setAttribute('data-loaded', 'true'), t(W), z(W)
          }),
          P && (W = p.head.appendChild(W)),
          E || z(W)
      }),
    S = (E = !0) => ($ || ($ = k(E)), $),
    b = () => {
      if (!p) return
      ;($ = null), m.value && (m.value = null)
      const E = p.querySelector(`script[src="${rt(e)}"]`)
      E && p.head.removeChild(E)
    }
  return r && !i && vi(S), i || du(b), { scriptTag: m, load: S, unload: b }
}
let xu = 0
function Eu(e, t = {}) {
  const n = Z(!1),
    { document: r = Zs, immediate: i = !0, manual: l = !1, id: s = `vueuse_styletag_${++xu}` } = t,
    o = Z(e)
  let a = () => {}
  const c = () => {
      if (!r) return
      const p = r.getElementById(s) || r.createElement('style')
      p.isConnected || ((p.id = s), t.media && (p.media = t.media), r.head.appendChild(p)),
        !n.value &&
          ((a = $e(
            o,
            (h) => {
              p.textContent = h
            },
            { immediate: !0 },
          )),
          (n.value = !0))
    },
    f = () => {
      !r || !n.value || (a(), r.head.removeChild(r.getElementById(s)), (n.value = !1))
    }
  return i && !l && vi(c), l || yn(f), { id: s, css: o, unload: f, load: c, isLoaded: _n(n) }
}
var un = new Map()
function Cu(e) {
  var t = un.get(e)
  t && t.destroy()
}
function Su(e) {
  var t = un.get(e)
  t && t.update()
}
var nn = null
typeof window > 'u'
  ? (((nn = function (e) {
      return e
    }).destroy = function (e) {
      return e
    }),
    (nn.update = function (e) {
      return e
    }))
  : (((nn = function (e, t) {
      return (
        e &&
          Array.prototype.forEach.call(e.length ? e : [e], function (n) {
            return (function (r) {
              if (r && r.nodeName && r.nodeName === 'TEXTAREA' && !un.has(r)) {
                var i,
                  l = null,
                  s = window.getComputedStyle(r),
                  o =
                    ((i = r.value),
                    function () {
                      c({
                        testForHeightReduction: i === '' || !r.value.startsWith(i),
                        restoreTextAlign: null,
                      }),
                        (i = r.value)
                    }),
                  a = function (p) {
                    r.removeEventListener('autosize:destroy', a),
                      r.removeEventListener('autosize:update', f),
                      r.removeEventListener('input', o),
                      window.removeEventListener('resize', f),
                      Object.keys(p).forEach(function (h) {
                        return (r.style[h] = p[h])
                      }),
                      un.delete(r)
                  }.bind(r, {
                    height: r.style.height,
                    resize: r.style.resize,
                    textAlign: r.style.textAlign,
                    overflowY: r.style.overflowY,
                    overflowX: r.style.overflowX,
                    wordWrap: r.style.wordWrap,
                  })
                r.addEventListener('autosize:destroy', a),
                  r.addEventListener('autosize:update', f),
                  r.addEventListener('input', o),
                  window.addEventListener('resize', f),
                  (r.style.overflowX = 'hidden'),
                  (r.style.wordWrap = 'break-word'),
                  un.set(r, { destroy: a, update: f }),
                  f()
              }
              function c(p) {
                var h,
                  m,
                  $ = p.restoreTextAlign,
                  k = $ === void 0 ? null : $,
                  S = p.testForHeightReduction,
                  b = S === void 0 || S,
                  E = s.overflowY
                if (
                  r.scrollHeight !== 0 &&
                  (s.resize === 'vertical'
                    ? (r.style.resize = 'none')
                    : s.resize === 'both' && (r.style.resize = 'horizontal'),
                  b &&
                    ((h = (function (V) {
                      for (var z = []; V && V.parentNode && V.parentNode instanceof Element; )
                        V.parentNode.scrollTop && z.push([V.parentNode, V.parentNode.scrollTop]),
                          (V = V.parentNode)
                      return function () {
                        return z.forEach(function (P) {
                          var W = P[0],
                            N = P[1]
                          ;(W.style.scrollBehavior = 'auto'),
                            (W.scrollTop = N),
                            (W.style.scrollBehavior = null)
                        })
                      }
                    })(r)),
                    (r.style.height = '')),
                  (m =
                    s.boxSizing === 'content-box'
                      ? r.scrollHeight - (parseFloat(s.paddingTop) + parseFloat(s.paddingBottom))
                      : r.scrollHeight +
                        parseFloat(s.borderTopWidth) +
                        parseFloat(s.borderBottomWidth)),
                  s.maxHeight !== 'none' && m > parseFloat(s.maxHeight)
                    ? (s.overflowY === 'hidden' && (r.style.overflow = 'scroll'),
                      (m = parseFloat(s.maxHeight)))
                    : s.overflowY !== 'hidden' && (r.style.overflow = 'hidden'),
                  (r.style.height = m + 'px'),
                  k && (r.style.textAlign = k),
                  h && h(),
                  l !== m &&
                    (r.dispatchEvent(new Event('autosize:resized', { bubbles: !0 })), (l = m)),
                  E !== s.overflow && !k)
                ) {
                  var j = s.textAlign
                  s.overflow === 'hidden' && (r.style.textAlign = j === 'start' ? 'end' : 'start'),
                    c({ restoreTextAlign: j, testForHeightReduction: !0 })
                }
              }
              function f() {
                c({ testForHeightReduction: !0, restoreTextAlign: null })
              }
            })(n)
          }),
        e
      )
    }).destroy = function (e) {
      return e && Array.prototype.forEach.call(e.length ? e : [e], Cu), e
    }),
    (nn.update = function (e) {
      return e && Array.prototype.forEach.call(e.length ? e : [e], Su), e
    }))
var ml = nn
function yi() {
  return {
    async: !1,
    breaks: !1,
    extensions: null,
    gfm: !0,
    hooks: null,
    pedantic: !1,
    renderer: null,
    silent: !1,
    tokenizer: null,
    walkTokens: null,
  }
}
let It = yi()
function Qs(e) {
  It = e
}
const Ys = /[&<>"']/,
  Tu = new RegExp(Ys.source, 'g'),
  Js = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
  Ru = new RegExp(Js.source, 'g'),
  $u = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' },
  vl = (e) => $u[e]
function Me(e, t) {
  if (t) {
    if (Ys.test(e)) return e.replace(Tu, vl)
  } else if (Js.test(e)) return e.replace(Ru, vl)
  return e
}
const Au = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi
function Iu(e) {
  return e.replace(
    Au,
    (t, n) => (
      (n = n.toLowerCase()),
      n === 'colon'
        ? ':'
        : n.charAt(0) === '#'
          ? n.charAt(1) === 'x'
            ? String.fromCharCode(parseInt(n.substring(2), 16))
            : String.fromCharCode(+n.substring(1))
          : ''
    ),
  )
}
const Lu = /(^|[^\[])\^/g
function ue(e, t) {
  let n = typeof e == 'string' ? e : e.source
  t = t || ''
  const r = {
    replace: (i, l) => {
      let s = typeof l == 'string' ? l : l.source
      return (s = s.replace(Lu, '$1')), (n = n.replace(i, s)), r
    },
    getRegex: () => new RegExp(n, t),
  }
  return r
}
function yl(e) {
  try {
    e = encodeURI(e).replace(/%25/g, '%')
  } catch {
    return null
  }
  return e
}
const fn = { exec: () => null }
function bl(e, t) {
  const n = e.replace(/\|/g, (l, s, o) => {
      let a = !1,
        c = s
      for (; --c >= 0 && o[c] === '\\'; ) a = !a
      return a ? '|' : ' |'
    }),
    r = n.split(/ \|/)
  let i = 0
  if ((r[0].trim() || r.shift(), r.length > 0 && !r[r.length - 1].trim() && r.pop(), t))
    if (r.length > t) r.splice(t)
    else for (; r.length < t; ) r.push('')
  for (; i < r.length; i++) r[i] = r[i].trim().replace(/\\\|/g, '|')
  return r
}
function Dn(e, t, n) {
  const r = e.length
  if (r === 0) return ''
  let i = 0
  for (; i < r; ) {
    const l = e.charAt(r - i - 1)
    if (l === t && !n) i++
    else if (l !== t && n) i++
    else break
  }
  return e.slice(0, r - i)
}
function Ou(e, t) {
  if (e.indexOf(t[1]) === -1) return -1
  let n = 0
  for (let r = 0; r < e.length; r++)
    if (e[r] === '\\') r++
    else if (e[r] === t[0]) n++
    else if (e[r] === t[1] && (n--, n < 0)) return r
  return -1
}
function wl(e, t, n, r) {
  const i = t.href,
    l = t.title ? Me(t.title) : null,
    s = e[1].replace(/\\([\[\]])/g, '$1')
  if (e[0].charAt(0) !== '!') {
    r.state.inLink = !0
    const o = { type: 'link', raw: n, href: i, title: l, text: s, tokens: r.inlineTokens(s) }
    return (r.state.inLink = !1), o
  }
  return { type: 'image', raw: n, href: i, title: l, text: Me(s) }
}
function Pu(e, t) {
  const n = e.match(/^(\s+)(?:```)/)
  if (n === null) return t
  const r = n[1]
  return t
    .split(
      `
`,
    )
    .map((i) => {
      const l = i.match(/^\s+/)
      if (l === null) return i
      const [s] = l
      return s.length >= r.length ? i.slice(r.length) : i
    }).join(`
`)
}
class sr {
  options
  rules
  lexer
  constructor(t) {
    this.options = t || It
  }
  space(t) {
    const n = this.rules.block.newline.exec(t)
    if (n && n[0].length > 0) return { type: 'space', raw: n[0] }
  }
  code(t) {
    const n = this.rules.block.code.exec(t)
    if (n) {
      const r = n[0].replace(/^ {1,4}/gm, '')
      return {
        type: 'code',
        raw: n[0],
        codeBlockStyle: 'indented',
        text: this.options.pedantic
          ? r
          : Dn(
              r,
              `
`,
            ),
      }
    }
  }
  fences(t) {
    const n = this.rules.block.fences.exec(t)
    if (n) {
      const r = n[0],
        i = Pu(r, n[3] || '')
      return {
        type: 'code',
        raw: r,
        lang: n[2] ? n[2].trim().replace(this.rules.inline.anyPunctuation, '$1') : n[2],
        text: i,
      }
    }
  }
  heading(t) {
    const n = this.rules.block.heading.exec(t)
    if (n) {
      let r = n[2].trim()
      if (/#$/.test(r)) {
        const i = Dn(r, '#')
        ;(this.options.pedantic || !i || / $/.test(i)) && (r = i.trim())
      }
      return {
        type: 'heading',
        raw: n[0],
        depth: n[1].length,
        text: r,
        tokens: this.lexer.inline(r),
      }
    }
  }
  hr(t) {
    const n = this.rules.block.hr.exec(t)
    if (n) return { type: 'hr', raw: n[0] }
  }
  blockquote(t) {
    const n = this.rules.block.blockquote.exec(t)
    if (n) {
      let r = n[0].replace(
        /\n {0,3}((?:=+|-+) *)(?=\n|$)/g,
        `
    $1`,
      )
      r = Dn(
        r.replace(/^ *>[ \t]?/gm, ''),
        `
`,
      )
      const i = this.lexer.state.top
      this.lexer.state.top = !0
      const l = this.lexer.blockTokens(r)
      return (this.lexer.state.top = i), { type: 'blockquote', raw: n[0], tokens: l, text: r }
    }
  }
  list(t) {
    let n = this.rules.block.list.exec(t)
    if (n) {
      let r = n[1].trim()
      const i = r.length > 1,
        l = {
          type: 'list',
          raw: '',
          ordered: i,
          start: i ? +r.slice(0, -1) : '',
          loose: !1,
          items: [],
        }
      ;(r = i ? `\\d{1,9}\\${r.slice(-1)}` : `\\${r}`),
        this.options.pedantic && (r = i ? r : '[*+-]')
      const s = new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`)
      let o = '',
        a = '',
        c = !1
      for (; t; ) {
        let f = !1
        if (!(n = s.exec(t)) || this.rules.block.hr.test(t)) break
        ;(o = n[0]), (t = t.substring(o.length))
        let p = n[2]
            .split(
              `
`,
              1,
            )[0]
            .replace(/^\t+/, (b) => ' '.repeat(3 * b.length)),
          h = t.split(
            `
`,
            1,
          )[0],
          m = 0
        this.options.pedantic
          ? ((m = 2), (a = p.trimStart()))
          : ((m = n[2].search(/[^ ]/)), (m = m > 4 ? 1 : m), (a = p.slice(m)), (m += n[1].length))
        let $ = !1
        if (
          (!p &&
            /^ *$/.test(h) &&
            ((o +=
              h +
              `
`),
            (t = t.substring(h.length + 1)),
            (f = !0)),
          !f)
        ) {
          const b = new RegExp(
              `^ {0,${Math.min(3, m - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`,
            ),
            E = new RegExp(
              `^ {0,${Math.min(3, m - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`,
            ),
            j = new RegExp(`^ {0,${Math.min(3, m - 1)}}(?:\`\`\`|~~~)`),
            V = new RegExp(`^ {0,${Math.min(3, m - 1)}}#`)
          for (; t; ) {
            const z = t.split(
              `
`,
              1,
            )[0]
            if (
              ((h = z),
              this.options.pedantic && (h = h.replace(/^ {1,4}(?=( {4})*[^ ])/g, '  ')),
              j.test(h) || V.test(h) || b.test(h) || E.test(t))
            )
              break
            if (h.search(/[^ ]/) >= m || !h.trim())
              a +=
                `
` + h.slice(m)
            else {
              if ($ || p.search(/[^ ]/) >= 4 || j.test(p) || V.test(p) || E.test(p)) break
              a +=
                `
` + h
            }
            !$ && !h.trim() && ($ = !0),
              (o +=
                z +
                `
`),
              (t = t.substring(z.length + 1)),
              (p = h.slice(m))
          }
        }
        l.loose || (c ? (l.loose = !0) : /\n *\n *$/.test(o) && (c = !0))
        let k = null,
          S
        this.options.gfm &&
          ((k = /^\[[ xX]\] /.exec(a)),
          k && ((S = k[0] !== '[ ] '), (a = a.replace(/^\[[ xX]\] +/, '')))),
          l.items.push({
            type: 'list_item',
            raw: o,
            task: !!k,
            checked: S,
            loose: !1,
            text: a,
            tokens: [],
          }),
          (l.raw += o)
      }
      ;(l.items[l.items.length - 1].raw = o.trimEnd()),
        (l.items[l.items.length - 1].text = a.trimEnd()),
        (l.raw = l.raw.trimEnd())
      for (let f = 0; f < l.items.length; f++)
        if (
          ((this.lexer.state.top = !1),
          (l.items[f].tokens = this.lexer.blockTokens(l.items[f].text, [])),
          !l.loose)
        ) {
          const p = l.items[f].tokens.filter((m) => m.type === 'space'),
            h = p.length > 0 && p.some((m) => /\n.*\n/.test(m.raw))
          l.loose = h
        }
      if (l.loose) for (let f = 0; f < l.items.length; f++) l.items[f].loose = !0
      return l
    }
  }
  html(t) {
    const n = this.rules.block.html.exec(t)
    if (n)
      return {
        type: 'html',
        block: !0,
        raw: n[0],
        pre: n[1] === 'pre' || n[1] === 'script' || n[1] === 'style',
        text: n[0],
      }
  }
  def(t) {
    const n = this.rules.block.def.exec(t)
    if (n) {
      const r = n[1].toLowerCase().replace(/\s+/g, ' '),
        i = n[2]
          ? n[2].replace(/^<(.*)>$/, '$1').replace(this.rules.inline.anyPunctuation, '$1')
          : '',
        l = n[3]
          ? n[3].substring(1, n[3].length - 1).replace(this.rules.inline.anyPunctuation, '$1')
          : n[3]
      return { type: 'def', tag: r, raw: n[0], href: i, title: l }
    }
  }
  table(t) {
    const n = this.rules.block.table.exec(t)
    if (!n || !/[:|]/.test(n[2])) return
    const r = bl(n[1]),
      i = n[2].replace(/^\||\| *$/g, '').split('|'),
      l =
        n[3] && n[3].trim()
          ? n[3].replace(/\n[ \t]*$/, '').split(`
`)
          : [],
      s = { type: 'table', raw: n[0], header: [], align: [], rows: [] }
    if (r.length === i.length) {
      for (const o of i)
        /^ *-+: *$/.test(o)
          ? s.align.push('right')
          : /^ *:-+: *$/.test(o)
            ? s.align.push('center')
            : /^ *:-+ *$/.test(o)
              ? s.align.push('left')
              : s.align.push(null)
      for (const o of r) s.header.push({ text: o, tokens: this.lexer.inline(o) })
      for (const o of l)
        s.rows.push(bl(o, s.header.length).map((a) => ({ text: a, tokens: this.lexer.inline(a) })))
      return s
    }
  }
  lheading(t) {
    const n = this.rules.block.lheading.exec(t)
    if (n)
      return {
        type: 'heading',
        raw: n[0],
        depth: n[2].charAt(0) === '=' ? 1 : 2,
        text: n[1],
        tokens: this.lexer.inline(n[1]),
      }
  }
  paragraph(t) {
    const n = this.rules.block.paragraph.exec(t)
    if (n) {
      const r =
        n[1].charAt(n[1].length - 1) ===
        `
`
          ? n[1].slice(0, -1)
          : n[1]
      return { type: 'paragraph', raw: n[0], text: r, tokens: this.lexer.inline(r) }
    }
  }
  text(t) {
    const n = this.rules.block.text.exec(t)
    if (n) return { type: 'text', raw: n[0], text: n[0], tokens: this.lexer.inline(n[0]) }
  }
  escape(t) {
    const n = this.rules.inline.escape.exec(t)
    if (n) return { type: 'escape', raw: n[0], text: Me(n[1]) }
  }
  tag(t) {
    const n = this.rules.inline.tag.exec(t)
    if (n)
      return (
        !this.lexer.state.inLink && /^<a /i.test(n[0])
          ? (this.lexer.state.inLink = !0)
          : this.lexer.state.inLink && /^<\/a>/i.test(n[0]) && (this.lexer.state.inLink = !1),
        !this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(n[0])
          ? (this.lexer.state.inRawBlock = !0)
          : this.lexer.state.inRawBlock &&
            /^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0]) &&
            (this.lexer.state.inRawBlock = !1),
        {
          type: 'html',
          raw: n[0],
          inLink: this.lexer.state.inLink,
          inRawBlock: this.lexer.state.inRawBlock,
          block: !1,
          text: n[0],
        }
      )
  }
  link(t) {
    const n = this.rules.inline.link.exec(t)
    if (n) {
      const r = n[2].trim()
      if (!this.options.pedantic && /^</.test(r)) {
        if (!/>$/.test(r)) return
        const s = Dn(r.slice(0, -1), '\\')
        if ((r.length - s.length) % 2 === 0) return
      } else {
        const s = Ou(n[2], '()')
        if (s > -1) {
          const a = (n[0].indexOf('!') === 0 ? 5 : 4) + n[1].length + s
          ;(n[2] = n[2].substring(0, s)), (n[0] = n[0].substring(0, a).trim()), (n[3] = '')
        }
      }
      let i = n[2],
        l = ''
      if (this.options.pedantic) {
        const s = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i)
        s && ((i = s[1]), (l = s[3]))
      } else l = n[3] ? n[3].slice(1, -1) : ''
      return (
        (i = i.trim()),
        /^</.test(i) &&
          (this.options.pedantic && !/>$/.test(r) ? (i = i.slice(1)) : (i = i.slice(1, -1))),
        wl(
          n,
          {
            href: i && i.replace(this.rules.inline.anyPunctuation, '$1'),
            title: l && l.replace(this.rules.inline.anyPunctuation, '$1'),
          },
          n[0],
          this.lexer,
        )
      )
    }
  }
  reflink(t, n) {
    let r
    if ((r = this.rules.inline.reflink.exec(t)) || (r = this.rules.inline.nolink.exec(t))) {
      const i = (r[2] || r[1]).replace(/\s+/g, ' '),
        l = n[i.toLowerCase()]
      if (!l) {
        const s = r[0].charAt(0)
        return { type: 'text', raw: s, text: s }
      }
      return wl(r, l, r[0], this.lexer)
    }
  }
  emStrong(t, n, r = '') {
    let i = this.rules.inline.emStrongLDelim.exec(t)
    if (!i || (i[3] && r.match(/[\p{L}\p{N}]/u))) return
    if (!(i[1] || i[2] || '') || !r || this.rules.inline.punctuation.exec(r)) {
      const s = [...i[0]].length - 1
      let o,
        a,
        c = s,
        f = 0
      const p =
        i[0][0] === '*' ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd
      for (p.lastIndex = 0, n = n.slice(-1 * t.length + s); (i = p.exec(n)) != null; ) {
        if (((o = i[1] || i[2] || i[3] || i[4] || i[5] || i[6]), !o)) continue
        if (((a = [...o].length), i[3] || i[4])) {
          c += a
          continue
        } else if ((i[5] || i[6]) && s % 3 && !((s + a) % 3)) {
          f += a
          continue
        }
        if (((c -= a), c > 0)) continue
        a = Math.min(a, a + c + f)
        const h = [...i[0]][0].length,
          m = t.slice(0, s + i.index + h + a)
        if (Math.min(s, a) % 2) {
          const k = m.slice(1, -1)
          return { type: 'em', raw: m, text: k, tokens: this.lexer.inlineTokens(k) }
        }
        const $ = m.slice(2, -2)
        return { type: 'strong', raw: m, text: $, tokens: this.lexer.inlineTokens($) }
      }
    }
  }
  codespan(t) {
    const n = this.rules.inline.code.exec(t)
    if (n) {
      let r = n[2].replace(/\n/g, ' ')
      const i = /[^ ]/.test(r),
        l = /^ /.test(r) && / $/.test(r)
      return (
        i && l && (r = r.substring(1, r.length - 1)),
        (r = Me(r, !0)),
        { type: 'codespan', raw: n[0], text: r }
      )
    }
  }
  br(t) {
    const n = this.rules.inline.br.exec(t)
    if (n) return { type: 'br', raw: n[0] }
  }
  del(t) {
    const n = this.rules.inline.del.exec(t)
    if (n) return { type: 'del', raw: n[0], text: n[2], tokens: this.lexer.inlineTokens(n[2]) }
  }
  autolink(t) {
    const n = this.rules.inline.autolink.exec(t)
    if (n) {
      let r, i
      return (
        n[2] === '@' ? ((r = Me(n[1])), (i = 'mailto:' + r)) : ((r = Me(n[1])), (i = r)),
        { type: 'link', raw: n[0], text: r, href: i, tokens: [{ type: 'text', raw: r, text: r }] }
      )
    }
  }
  url(t) {
    let n
    if ((n = this.rules.inline.url.exec(t))) {
      let r, i
      if (n[2] === '@') (r = Me(n[0])), (i = 'mailto:' + r)
      else {
        let l
        do (l = n[0]), (n[0] = this.rules.inline._backpedal.exec(n[0])?.[0] ?? '')
        while (l !== n[0])
        ;(r = Me(n[0])), n[1] === 'www.' ? (i = 'http://' + n[0]) : (i = n[0])
      }
      return {
        type: 'link',
        raw: n[0],
        text: r,
        href: i,
        tokens: [{ type: 'text', raw: r, text: r }],
      }
    }
  }
  inlineText(t) {
    const n = this.rules.inline.text.exec(t)
    if (n) {
      let r
      return (
        this.lexer.state.inRawBlock ? (r = n[0]) : (r = Me(n[0])),
        { type: 'text', raw: n[0], text: r }
      )
    }
  }
}
const Mu = /^(?: *(?:\n|$))+/,
  zu = /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
  ju =
    /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
  Sn = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
  Uu = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
  Xs = /(?:[*+-]|\d{1,9}[.)])/,
  eo = ue(
    /^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  )
    .replace(/bull/g, Xs)
    .replace(/blockCode/g, / {4}/)
    .replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/)
    .replace(/blockquote/g, / {0,3}>/)
    .replace(/heading/g, / {0,3}#{1,6}/)
    .replace(/html/g, / {0,3}<[^\n>]+>\n/)
    .getRegex(),
  bi = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
  Vu = /^[^\n]+/,
  wi = /(?!\s*\])(?:\\.|[^\[\]\\])+/,
  Du = ue(
    /^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
  )
    .replace('label', wi)
    .replace('title', /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/)
    .getRegex(),
  Fu = ue(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/)
    .replace(/bull/g, Xs)
    .getRegex(),
  wr =
    'address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul',
  _i = /<!--(?:-?>|[\s\S]*?(?:-->|$))/,
  Hu = ue(
    '^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))',
    'i',
  )
    .replace('comment', _i)
    .replace('tag', wr)
    .replace(
      'attribute',
      / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/,
    )
    .getRegex(),
  to = ue(bi)
    .replace('hr', Sn)
    .replace('heading', ' {0,3}#{1,6}(?:\\s|$)')
    .replace('|lheading', '')
    .replace('|table', '')
    .replace('blockquote', ' {0,3}>')
    .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
    .replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
    .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)')
    .replace('tag', wr)
    .getRegex(),
  Nu = ue(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/)
    .replace('paragraph', to)
    .getRegex(),
  ki = {
    blockquote: Nu,
    code: zu,
    def: Du,
    fences: ju,
    heading: Uu,
    hr: Sn,
    html: Hu,
    lheading: eo,
    list: Fu,
    newline: Mu,
    paragraph: to,
    table: fn,
    text: Vu,
  },
  _l = ue(
    '^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)',
  )
    .replace('hr', Sn)
    .replace('heading', ' {0,3}#{1,6}(?:\\s|$)')
    .replace('blockquote', ' {0,3}>')
    .replace('code', ' {4}[^\\n]')
    .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
    .replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
    .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)')
    .replace('tag', wr)
    .getRegex(),
  Bu = {
    ...ki,
    table: _l,
    paragraph: ue(bi)
      .replace('hr', Sn)
      .replace('heading', ' {0,3}#{1,6}(?:\\s|$)')
      .replace('|lheading', '')
      .replace('table', _l)
      .replace('blockquote', ' {0,3}>')
      .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
      .replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
      .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)')
      .replace('tag', wr)
      .getRegex(),
  },
  Wu = {
    ...ki,
    html: ue(
      `^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`,
    )
      .replace('comment', _i)
      .replace(
        /tag/g,
        '(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b',
      )
      .getRegex(),
    def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
    heading: /^(#{1,6})(.*)(?:\n+|$)/,
    fences: fn,
    lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
    paragraph: ue(bi)
      .replace('hr', Sn)
      .replace(
        'heading',
        ` *#{1,6} *[^
]`,
      )
      .replace('lheading', eo)
      .replace('|table', '')
      .replace('blockquote', ' {0,3}>')
      .replace('|fences', '')
      .replace('|list', '')
      .replace('|html', '')
      .replace('|tag', '')
      .getRegex(),
  },
  no = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
  qu = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
  ro = /^( {2,}|\\)\n(?!\s*$)/,
  Ku = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
  Tn = '\\p{P}\\p{S}',
  Gu = ue(/^((?![*_])[\spunctuation])/, 'u')
    .replace(/punctuation/g, Tn)
    .getRegex(),
  Zu = /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,
  Qu = ue(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/, 'u')
    .replace(/punct/g, Tn)
    .getRegex(),
  Yu = ue(
    '^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])',
    'gu',
  )
    .replace(/punct/g, Tn)
    .getRegex(),
  Ju = ue(
    '^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])',
    'gu',
  )
    .replace(/punct/g, Tn)
    .getRegex(),
  Xu = ue(/\\([punct])/, 'gu')
    .replace(/punct/g, Tn)
    .getRegex(),
  ef = ue(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/)
    .replace('scheme', /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/)
    .replace(
      'email',
      /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,
    )
    .getRegex(),
  tf = ue(_i).replace('(?:-->|$)', '-->').getRegex(),
  nf = ue(
    '^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>',
  )
    .replace('comment', tf)
    .replace(
      'attribute',
      /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,
    )
    .getRegex(),
  or = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,
  rf = ue(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/)
    .replace('label', or)
    .replace('href', /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/)
    .replace('title', /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/)
    .getRegex(),
  io = ue(/^!?\[(label)\]\[(ref)\]/)
    .replace('label', or)
    .replace('ref', wi)
    .getRegex(),
  lo = ue(/^!?\[(ref)\](?:\[\])?/)
    .replace('ref', wi)
    .getRegex(),
  lf = ue('reflink|nolink(?!\\()', 'g').replace('reflink', io).replace('nolink', lo).getRegex(),
  xi = {
    _backpedal: fn,
    anyPunctuation: Xu,
    autolink: ef,
    blockSkip: Zu,
    br: ro,
    code: qu,
    del: fn,
    emStrongLDelim: Qu,
    emStrongRDelimAst: Yu,
    emStrongRDelimUnd: Ju,
    escape: no,
    link: rf,
    nolink: lo,
    punctuation: Gu,
    reflink: io,
    reflinkSearch: lf,
    tag: nf,
    text: Ku,
    url: fn,
  },
  sf = {
    ...xi,
    link: ue(/^!?\[(label)\]\((.*?)\)/)
      .replace('label', or)
      .getRegex(),
    reflink: ue(/^!?\[(label)\]\s*\[([^\]]*)\]/)
      .replace('label', or)
      .getRegex(),
  },
  Zr = {
    ...xi,
    escape: ue(no).replace('])', '~|])').getRegex(),
    url: ue(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, 'i')
      .replace('email', /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/)
      .getRegex(),
    _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
    del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
    text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/,
  },
  of = {
    ...Zr,
    br: ue(ro).replace('{2,}', '*').getRegex(),
    text: ue(Zr.text)
      .replace('\\b_', '\\b_| {2,}\\n')
      .replace(/\{2,\}/g, '*')
      .getRegex(),
  },
  Fn = { normal: ki, gfm: Bu, pedantic: Wu },
  Xt = { normal: xi, gfm: Zr, breaks: of, pedantic: sf }
class Qe {
  tokens
  options
  state
  tokenizer
  inlineQueue
  constructor(t) {
    ;(this.tokens = []),
      (this.tokens.links = Object.create(null)),
      (this.options = t || It),
      (this.options.tokenizer = this.options.tokenizer || new sr()),
      (this.tokenizer = this.options.tokenizer),
      (this.tokenizer.options = this.options),
      (this.tokenizer.lexer = this),
      (this.inlineQueue = []),
      (this.state = { inLink: !1, inRawBlock: !1, top: !0 })
    const n = { block: Fn.normal, inline: Xt.normal }
    this.options.pedantic
      ? ((n.block = Fn.pedantic), (n.inline = Xt.pedantic))
      : this.options.gfm &&
        ((n.block = Fn.gfm), this.options.breaks ? (n.inline = Xt.breaks) : (n.inline = Xt.gfm)),
      (this.tokenizer.rules = n)
  }
  static get rules() {
    return { block: Fn, inline: Xt }
  }
  static lex(t, n) {
    return new Qe(n).lex(t)
  }
  static lexInline(t, n) {
    return new Qe(n).inlineTokens(t)
  }
  lex(t) {
    ;(t = t.replace(
      /\r\n|\r/g,
      `
`,
    )),
      this.blockTokens(t, this.tokens)
    for (let n = 0; n < this.inlineQueue.length; n++) {
      const r = this.inlineQueue[n]
      this.inlineTokens(r.src, r.tokens)
    }
    return (this.inlineQueue = []), this.tokens
  }
  blockTokens(t, n = []) {
    this.options.pedantic
      ? (t = t.replace(/\t/g, '    ').replace(/^ +$/gm, ''))
      : (t = t.replace(/^( *)(\t+)/gm, (o, a, c) => a + '    '.repeat(c.length)))
    let r, i, l, s
    for (; t; )
      if (
        !(
          this.options.extensions &&
          this.options.extensions.block &&
          this.options.extensions.block.some((o) =>
            (r = o.call({ lexer: this }, t, n))
              ? ((t = t.substring(r.raw.length)), n.push(r), !0)
              : !1,
          )
        )
      ) {
        if ((r = this.tokenizer.space(t))) {
          ;(t = t.substring(r.raw.length)),
            r.raw.length === 1 && n.length > 0
              ? (n[n.length - 1].raw += `
`)
              : n.push(r)
          continue
        }
        if ((r = this.tokenizer.code(t))) {
          ;(t = t.substring(r.raw.length)),
            (i = n[n.length - 1]),
            i && (i.type === 'paragraph' || i.type === 'text')
              ? ((i.raw +=
                  `
` + r.raw),
                (i.text +=
                  `
` + r.text),
                (this.inlineQueue[this.inlineQueue.length - 1].src = i.text))
              : n.push(r)
          continue
        }
        if ((r = this.tokenizer.fences(t))) {
          ;(t = t.substring(r.raw.length)), n.push(r)
          continue
        }
        if ((r = this.tokenizer.heading(t))) {
          ;(t = t.substring(r.raw.length)), n.push(r)
          continue
        }
        if ((r = this.tokenizer.hr(t))) {
          ;(t = t.substring(r.raw.length)), n.push(r)
          continue
        }
        if ((r = this.tokenizer.blockquote(t))) {
          ;(t = t.substring(r.raw.length)), n.push(r)
          continue
        }
        if ((r = this.tokenizer.list(t))) {
          ;(t = t.substring(r.raw.length)), n.push(r)
          continue
        }
        if ((r = this.tokenizer.html(t))) {
          ;(t = t.substring(r.raw.length)), n.push(r)
          continue
        }
        if ((r = this.tokenizer.def(t))) {
          ;(t = t.substring(r.raw.length)),
            (i = n[n.length - 1]),
            i && (i.type === 'paragraph' || i.type === 'text')
              ? ((i.raw +=
                  `
` + r.raw),
                (i.text +=
                  `
` + r.raw),
                (this.inlineQueue[this.inlineQueue.length - 1].src = i.text))
              : this.tokens.links[r.tag] ||
                (this.tokens.links[r.tag] = { href: r.href, title: r.title })
          continue
        }
        if ((r = this.tokenizer.table(t))) {
          ;(t = t.substring(r.raw.length)), n.push(r)
          continue
        }
        if ((r = this.tokenizer.lheading(t))) {
          ;(t = t.substring(r.raw.length)), n.push(r)
          continue
        }
        if (((l = t), this.options.extensions && this.options.extensions.startBlock)) {
          let o = 1 / 0
          const a = t.slice(1)
          let c
          this.options.extensions.startBlock.forEach((f) => {
            ;(c = f.call({ lexer: this }, a)),
              typeof c == 'number' && c >= 0 && (o = Math.min(o, c))
          }),
            o < 1 / 0 && o >= 0 && (l = t.substring(0, o + 1))
        }
        if (this.state.top && (r = this.tokenizer.paragraph(l))) {
          ;(i = n[n.length - 1]),
            s && i.type === 'paragraph'
              ? ((i.raw +=
                  `
` + r.raw),
                (i.text +=
                  `
` + r.text),
                this.inlineQueue.pop(),
                (this.inlineQueue[this.inlineQueue.length - 1].src = i.text))
              : n.push(r),
            (s = l.length !== t.length),
            (t = t.substring(r.raw.length))
          continue
        }
        if ((r = this.tokenizer.text(t))) {
          ;(t = t.substring(r.raw.length)),
            (i = n[n.length - 1]),
            i && i.type === 'text'
              ? ((i.raw +=
                  `
` + r.raw),
                (i.text +=
                  `
` + r.text),
                this.inlineQueue.pop(),
                (this.inlineQueue[this.inlineQueue.length - 1].src = i.text))
              : n.push(r)
          continue
        }
        if (t) {
          const o = 'Infinite loop on byte: ' + t.charCodeAt(0)
          if (this.options.silent) {
            console.error(o)
            break
          } else throw new Error(o)
        }
      }
    return (this.state.top = !0), n
  }
  inline(t, n = []) {
    return this.inlineQueue.push({ src: t, tokens: n }), n
  }
  inlineTokens(t, n = []) {
    let r,
      i,
      l,
      s = t,
      o,
      a,
      c
    if (this.tokens.links) {
      const f = Object.keys(this.tokens.links)
      if (f.length > 0)
        for (; (o = this.tokenizer.rules.inline.reflinkSearch.exec(s)) != null; )
          f.includes(o[0].slice(o[0].lastIndexOf('[') + 1, -1)) &&
            (s =
              s.slice(0, o.index) +
              '[' +
              'a'.repeat(o[0].length - 2) +
              ']' +
              s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))
    }
    for (; (o = this.tokenizer.rules.inline.blockSkip.exec(s)) != null; )
      s =
        s.slice(0, o.index) +
        '[' +
        'a'.repeat(o[0].length - 2) +
        ']' +
        s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex)
    for (; (o = this.tokenizer.rules.inline.anyPunctuation.exec(s)) != null; )
      s = s.slice(0, o.index) + '++' + s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex)
    for (; t; )
      if (
        (a || (c = ''),
        (a = !1),
        !(
          this.options.extensions &&
          this.options.extensions.inline &&
          this.options.extensions.inline.some((f) =>
            (r = f.call({ lexer: this }, t, n))
              ? ((t = t.substring(r.raw.length)), n.push(r), !0)
              : !1,
          )
        ))
      ) {
        if ((r = this.tokenizer.escape(t))) {
          ;(t = t.substring(r.raw.length)), n.push(r)
          continue
        }
        if ((r = this.tokenizer.tag(t))) {
          ;(t = t.substring(r.raw.length)),
            (i = n[n.length - 1]),
            i && r.type === 'text' && i.type === 'text'
              ? ((i.raw += r.raw), (i.text += r.text))
              : n.push(r)
          continue
        }
        if ((r = this.tokenizer.link(t))) {
          ;(t = t.substring(r.raw.length)), n.push(r)
          continue
        }
        if ((r = this.tokenizer.reflink(t, this.tokens.links))) {
          ;(t = t.substring(r.raw.length)),
            (i = n[n.length - 1]),
            i && r.type === 'text' && i.type === 'text'
              ? ((i.raw += r.raw), (i.text += r.text))
              : n.push(r)
          continue
        }
        if ((r = this.tokenizer.emStrong(t, s, c))) {
          ;(t = t.substring(r.raw.length)), n.push(r)
          continue
        }
        if ((r = this.tokenizer.codespan(t))) {
          ;(t = t.substring(r.raw.length)), n.push(r)
          continue
        }
        if ((r = this.tokenizer.br(t))) {
          ;(t = t.substring(r.raw.length)), n.push(r)
          continue
        }
        if ((r = this.tokenizer.del(t))) {
          ;(t = t.substring(r.raw.length)), n.push(r)
          continue
        }
        if ((r = this.tokenizer.autolink(t))) {
          ;(t = t.substring(r.raw.length)), n.push(r)
          continue
        }
        if (!this.state.inLink && (r = this.tokenizer.url(t))) {
          ;(t = t.substring(r.raw.length)), n.push(r)
          continue
        }
        if (((l = t), this.options.extensions && this.options.extensions.startInline)) {
          let f = 1 / 0
          const p = t.slice(1)
          let h
          this.options.extensions.startInline.forEach((m) => {
            ;(h = m.call({ lexer: this }, p)),
              typeof h == 'number' && h >= 0 && (f = Math.min(f, h))
          }),
            f < 1 / 0 && f >= 0 && (l = t.substring(0, f + 1))
        }
        if ((r = this.tokenizer.inlineText(l))) {
          ;(t = t.substring(r.raw.length)),
            r.raw.slice(-1) !== '_' && (c = r.raw.slice(-1)),
            (a = !0),
            (i = n[n.length - 1]),
            i && i.type === 'text' ? ((i.raw += r.raw), (i.text += r.text)) : n.push(r)
          continue
        }
        if (t) {
          const f = 'Infinite loop on byte: ' + t.charCodeAt(0)
          if (this.options.silent) {
            console.error(f)
            break
          } else throw new Error(f)
        }
      }
    return n
  }
}
class ar {
  options
  constructor(t) {
    this.options = t || It
  }
  code(t, n, r) {
    const i = (n || '').match(/^\S*/)?.[0]
    return (
      (t =
        t.replace(/\n$/, '') +
        `
`),
      i
        ? '<pre><code class="language-' +
          Me(i) +
          '">' +
          (r ? t : Me(t, !0)) +
          `</code></pre>
`
        : '<pre><code>' +
          (r ? t : Me(t, !0)) +
          `</code></pre>
`
    )
  }
  blockquote(t) {
    return `<blockquote>
${t}</blockquote>
`
  }
  html(t, n) {
    return t
  }
  heading(t, n, r) {
    return `<h${n}>${t}</h${n}>
`
  }
  hr() {
    return `<hr>
`
  }
  list(t, n, r) {
    const i = n ? 'ol' : 'ul',
      l = n && r !== 1 ? ' start="' + r + '"' : ''
    return (
      '<' +
      i +
      l +
      `>
` +
      t +
      '</' +
      i +
      `>
`
    )
  }
  listitem(t, n, r) {
    return `<li>${t}</li>
`
  }
  checkbox(t) {
    return '<input ' + (t ? 'checked="" ' : '') + 'disabled="" type="checkbox">'
  }
  paragraph(t) {
    return `<p>${t}</p>
`
  }
  table(t, n) {
    return (
      n && (n = `<tbody>${n}</tbody>`),
      `<table>
<thead>
` +
        t +
        `</thead>
` +
        n +
        `</table>
`
    )
  }
  tablerow(t) {
    return `<tr>
${t}</tr>
`
  }
  tablecell(t, n) {
    const r = n.header ? 'th' : 'td'
    return (
      (n.align ? `<${r} align="${n.align}">` : `<${r}>`) +
      t +
      `</${r}>
`
    )
  }
  strong(t) {
    return `<strong>${t}</strong>`
  }
  em(t) {
    return `<em>${t}</em>`
  }
  codespan(t) {
    return `<code>${t}</code>`
  }
  br() {
    return '<br>'
  }
  del(t) {
    return `<del>${t}</del>`
  }
  link(t, n, r) {
    const i = yl(t)
    if (i === null) return r
    t = i
    let l = '<a href="' + t + '"'
    return n && (l += ' title="' + n + '"'), (l += '>' + r + '</a>'), l
  }
  image(t, n, r) {
    const i = yl(t)
    if (i === null) return r
    t = i
    let l = `<img src="${t}" alt="${r}"`
    return n && (l += ` title="${n}"`), (l += '>'), l
  }
  text(t) {
    return t
  }
}
class Ei {
  strong(t) {
    return t
  }
  em(t) {
    return t
  }
  codespan(t) {
    return t
  }
  del(t) {
    return t
  }
  html(t) {
    return t
  }
  text(t) {
    return t
  }
  link(t, n, r) {
    return '' + r
  }
  image(t, n, r) {
    return '' + r
  }
  br() {
    return ''
  }
}
class Ye {
  options
  renderer
  textRenderer
  constructor(t) {
    ;(this.options = t || It),
      (this.options.renderer = this.options.renderer || new ar()),
      (this.renderer = this.options.renderer),
      (this.renderer.options = this.options),
      (this.textRenderer = new Ei())
  }
  static parse(t, n) {
    return new Ye(n).parse(t)
  }
  static parseInline(t, n) {
    return new Ye(n).parseInline(t)
  }
  parse(t, n = !0) {
    let r = ''
    for (let i = 0; i < t.length; i++) {
      const l = t[i]
      if (
        this.options.extensions &&
        this.options.extensions.renderers &&
        this.options.extensions.renderers[l.type]
      ) {
        const s = l,
          o = this.options.extensions.renderers[s.type].call({ parser: this }, s)
        if (
          o !== !1 ||
          ![
            'space',
            'hr',
            'heading',
            'code',
            'table',
            'blockquote',
            'list',
            'html',
            'paragraph',
            'text',
          ].includes(s.type)
        ) {
          r += o || ''
          continue
        }
      }
      switch (l.type) {
        case 'space':
          continue
        case 'hr': {
          r += this.renderer.hr()
          continue
        }
        case 'heading': {
          const s = l
          r += this.renderer.heading(
            this.parseInline(s.tokens),
            s.depth,
            Iu(this.parseInline(s.tokens, this.textRenderer)),
          )
          continue
        }
        case 'code': {
          const s = l
          r += this.renderer.code(s.text, s.lang, !!s.escaped)
          continue
        }
        case 'table': {
          const s = l
          let o = '',
            a = ''
          for (let f = 0; f < s.header.length; f++)
            a += this.renderer.tablecell(this.parseInline(s.header[f].tokens), {
              header: !0,
              align: s.align[f],
            })
          o += this.renderer.tablerow(a)
          let c = ''
          for (let f = 0; f < s.rows.length; f++) {
            const p = s.rows[f]
            a = ''
            for (let h = 0; h < p.length; h++)
              a += this.renderer.tablecell(this.parseInline(p[h].tokens), {
                header: !1,
                align: s.align[h],
              })
            c += this.renderer.tablerow(a)
          }
          r += this.renderer.table(o, c)
          continue
        }
        case 'blockquote': {
          const s = l,
            o = this.parse(s.tokens)
          r += this.renderer.blockquote(o)
          continue
        }
        case 'list': {
          const s = l,
            o = s.ordered,
            a = s.start,
            c = s.loose
          let f = ''
          for (let p = 0; p < s.items.length; p++) {
            const h = s.items[p],
              m = h.checked,
              $ = h.task
            let k = ''
            if (h.task) {
              const S = this.renderer.checkbox(!!m)
              c
                ? h.tokens.length > 0 && h.tokens[0].type === 'paragraph'
                  ? ((h.tokens[0].text = S + ' ' + h.tokens[0].text),
                    h.tokens[0].tokens &&
                      h.tokens[0].tokens.length > 0 &&
                      h.tokens[0].tokens[0].type === 'text' &&
                      (h.tokens[0].tokens[0].text = S + ' ' + h.tokens[0].tokens[0].text))
                  : h.tokens.unshift({ type: 'text', text: S + ' ' })
                : (k += S + ' ')
            }
            ;(k += this.parse(h.tokens, c)), (f += this.renderer.listitem(k, $, !!m))
          }
          r += this.renderer.list(f, o, a)
          continue
        }
        case 'html': {
          const s = l
          r += this.renderer.html(s.text, s.block)
          continue
        }
        case 'paragraph': {
          const s = l
          r += this.renderer.paragraph(this.parseInline(s.tokens))
          continue
        }
        case 'text': {
          let s = l,
            o = s.tokens ? this.parseInline(s.tokens) : s.text
          for (; i + 1 < t.length && t[i + 1].type === 'text'; )
            (s = t[++i]),
              (o +=
                `
` + (s.tokens ? this.parseInline(s.tokens) : s.text))
          r += n ? this.renderer.paragraph(o) : o
          continue
        }
        default: {
          const s = 'Token with "' + l.type + '" type was not found.'
          if (this.options.silent) return console.error(s), ''
          throw new Error(s)
        }
      }
    }
    return r
  }
  parseInline(t, n) {
    n = n || this.renderer
    let r = ''
    for (let i = 0; i < t.length; i++) {
      const l = t[i]
      if (
        this.options.extensions &&
        this.options.extensions.renderers &&
        this.options.extensions.renderers[l.type]
      ) {
        const s = this.options.extensions.renderers[l.type].call({ parser: this }, l)
        if (
          s !== !1 ||
          ![
            'escape',
            'html',
            'link',
            'image',
            'strong',
            'em',
            'codespan',
            'br',
            'del',
            'text',
          ].includes(l.type)
        ) {
          r += s || ''
          continue
        }
      }
      switch (l.type) {
        case 'escape': {
          const s = l
          r += n.text(s.text)
          break
        }
        case 'html': {
          const s = l
          r += n.html(s.text)
          break
        }
        case 'link': {
          const s = l
          r += n.link(s.href, s.title, this.parseInline(s.tokens, n))
          break
        }
        case 'image': {
          const s = l
          r += n.image(s.href, s.title, s.text)
          break
        }
        case 'strong': {
          const s = l
          r += n.strong(this.parseInline(s.tokens, n))
          break
        }
        case 'em': {
          const s = l
          r += n.em(this.parseInline(s.tokens, n))
          break
        }
        case 'codespan': {
          const s = l
          r += n.codespan(s.text)
          break
        }
        case 'br': {
          r += n.br()
          break
        }
        case 'del': {
          const s = l
          r += n.del(this.parseInline(s.tokens, n))
          break
        }
        case 'text': {
          const s = l
          r += n.text(s.text)
          break
        }
        default: {
          const s = 'Token with "' + l.type + '" type was not found.'
          if (this.options.silent) return console.error(s), ''
          throw new Error(s)
        }
      }
    }
    return r
  }
}
class Zn {
  options
  constructor(t) {
    this.options = t || It
  }
  static passThroughHooks = new Set(['preprocess', 'postprocess', 'processAllTokens'])
  preprocess(t) {
    return t
  }
  postprocess(t) {
    return t
  }
  processAllTokens(t) {
    return t
  }
}
class so {
  defaults = yi()
  options = this.setOptions
  parse = this.#e(Qe.lex, Ye.parse)
  parseInline = this.#e(Qe.lexInline, Ye.parseInline)
  Parser = Ye
  Renderer = ar
  TextRenderer = Ei
  Lexer = Qe
  Tokenizer = sr
  Hooks = Zn
  constructor(...t) {
    this.use(...t)
  }
  walkTokens(t, n) {
    let r = []
    for (const i of t)
      switch (((r = r.concat(n.call(this, i))), i.type)) {
        case 'table': {
          const l = i
          for (const s of l.header) r = r.concat(this.walkTokens(s.tokens, n))
          for (const s of l.rows) for (const o of s) r = r.concat(this.walkTokens(o.tokens, n))
          break
        }
        case 'list': {
          const l = i
          r = r.concat(this.walkTokens(l.items, n))
          break
        }
        default: {
          const l = i
          this.defaults.extensions?.childTokens?.[l.type]
            ? this.defaults.extensions.childTokens[l.type].forEach((s) => {
                const o = l[s].flat(1 / 0)
                r = r.concat(this.walkTokens(o, n))
              })
            : l.tokens && (r = r.concat(this.walkTokens(l.tokens, n)))
        }
      }
    return r
  }
  use(...t) {
    const n = this.defaults.extensions || { renderers: {}, childTokens: {} }
    return (
      t.forEach((r) => {
        const i = { ...r }
        if (
          ((i.async = this.defaults.async || i.async || !1),
          r.extensions &&
            (r.extensions.forEach((l) => {
              if (!l.name) throw new Error('extension name required')
              if ('renderer' in l) {
                const s = n.renderers[l.name]
                s
                  ? (n.renderers[l.name] = function (...o) {
                      let a = l.renderer.apply(this, o)
                      return a === !1 && (a = s.apply(this, o)), a
                    })
                  : (n.renderers[l.name] = l.renderer)
              }
              if ('tokenizer' in l) {
                if (!l.level || (l.level !== 'block' && l.level !== 'inline'))
                  throw new Error("extension level must be 'block' or 'inline'")
                const s = n[l.level]
                s ? s.unshift(l.tokenizer) : (n[l.level] = [l.tokenizer]),
                  l.start &&
                    (l.level === 'block'
                      ? n.startBlock
                        ? n.startBlock.push(l.start)
                        : (n.startBlock = [l.start])
                      : l.level === 'inline' &&
                        (n.startInline ? n.startInline.push(l.start) : (n.startInline = [l.start])))
              }
              'childTokens' in l && l.childTokens && (n.childTokens[l.name] = l.childTokens)
            }),
            (i.extensions = n)),
          r.renderer)
        ) {
          const l = this.defaults.renderer || new ar(this.defaults)
          for (const s in r.renderer) {
            if (!(s in l)) throw new Error(`renderer '${s}' does not exist`)
            if (s === 'options') continue
            const o = s,
              a = r.renderer[o],
              c = l[o]
            l[o] = (...f) => {
              let p = a.apply(l, f)
              return p === !1 && (p = c.apply(l, f)), p || ''
            }
          }
          i.renderer = l
        }
        if (r.tokenizer) {
          const l = this.defaults.tokenizer || new sr(this.defaults)
          for (const s in r.tokenizer) {
            if (!(s in l)) throw new Error(`tokenizer '${s}' does not exist`)
            if (['options', 'rules', 'lexer'].includes(s)) continue
            const o = s,
              a = r.tokenizer[o],
              c = l[o]
            l[o] = (...f) => {
              let p = a.apply(l, f)
              return p === !1 && (p = c.apply(l, f)), p
            }
          }
          i.tokenizer = l
        }
        if (r.hooks) {
          const l = this.defaults.hooks || new Zn()
          for (const s in r.hooks) {
            if (!(s in l)) throw new Error(`hook '${s}' does not exist`)
            if (s === 'options') continue
            const o = s,
              a = r.hooks[o],
              c = l[o]
            Zn.passThroughHooks.has(s)
              ? (l[o] = (f) => {
                  if (this.defaults.async)
                    return Promise.resolve(a.call(l, f)).then((h) => c.call(l, h))
                  const p = a.call(l, f)
                  return c.call(l, p)
                })
              : (l[o] = (...f) => {
                  let p = a.apply(l, f)
                  return p === !1 && (p = c.apply(l, f)), p
                })
          }
          i.hooks = l
        }
        if (r.walkTokens) {
          const l = this.defaults.walkTokens,
            s = r.walkTokens
          i.walkTokens = function (o) {
            let a = []
            return a.push(s.call(this, o)), l && (a = a.concat(l.call(this, o))), a
          }
        }
        this.defaults = { ...this.defaults, ...i }
      }),
      this
    )
  }
  setOptions(t) {
    return (this.defaults = { ...this.defaults, ...t }), this
  }
  lexer(t, n) {
    return Qe.lex(t, n ?? this.defaults)
  }
  parser(t, n) {
    return Ye.parse(t, n ?? this.defaults)
  }
  #e(t, n) {
    return (r, i) => {
      const l = { ...i },
        s = { ...this.defaults, ...l }
      this.defaults.async === !0 &&
        l.async === !1 &&
        (s.silent ||
          console.warn(
            'marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored.',
          ),
        (s.async = !0))
      const o = this.#t(!!s.silent, !!s.async)
      if (typeof r > 'u' || r === null)
        return o(new Error('marked(): input parameter is undefined or null'))
      if (typeof r != 'string')
        return o(
          new Error(
            'marked(): input parameter is of type ' +
              Object.prototype.toString.call(r) +
              ', string expected',
          ),
        )
      if ((s.hooks && (s.hooks.options = s), s.async))
        return Promise.resolve(s.hooks ? s.hooks.preprocess(r) : r)
          .then((a) => t(a, s))
          .then((a) => (s.hooks ? s.hooks.processAllTokens(a) : a))
          .then((a) =>
            s.walkTokens ? Promise.all(this.walkTokens(a, s.walkTokens)).then(() => a) : a,
          )
          .then((a) => n(a, s))
          .then((a) => (s.hooks ? s.hooks.postprocess(a) : a))
          .catch(o)
      try {
        s.hooks && (r = s.hooks.preprocess(r))
        let a = t(r, s)
        s.hooks && (a = s.hooks.processAllTokens(a)),
          s.walkTokens && this.walkTokens(a, s.walkTokens)
        let c = n(a, s)
        return s.hooks && (c = s.hooks.postprocess(c)), c
      } catch (a) {
        return o(a)
      }
    }
  }
  #t(t, n) {
    return (r) => {
      if (
        ((r.message += `
Please report this to https://github.com/markedjs/marked.`),
        t)
      ) {
        const i = '<p>An error occurred:</p><pre>' + Me(r.message + '', !0) + '</pre>'
        return n ? Promise.resolve(i) : i
      }
      if (n) return Promise.reject(r)
      throw r
    }
  }
}
const $t = new so()
function ce(e, t) {
  return $t.parse(e, t)
}
ce.options = ce.setOptions = function (e) {
  return $t.setOptions(e), (ce.defaults = $t.defaults), Qs(ce.defaults), ce
}
ce.getDefaults = yi
ce.defaults = It
ce.use = function (...e) {
  return $t.use(...e), (ce.defaults = $t.defaults), Qs(ce.defaults), ce
}
ce.walkTokens = function (e, t) {
  return $t.walkTokens(e, t)
}
ce.parseInline = $t.parseInline
ce.Parser = Ye
ce.parser = Ye.parse
ce.Renderer = ar
ce.TextRenderer = Ei
ce.Lexer = Qe
ce.lexer = Qe.lex
ce.Tokenizer = sr
ce.Hooks = Zn
ce.parse = ce
ce.options
ce.setOptions
ce.use
ce.walkTokens
ce.parseInline
Ye.parse
Qe.lex
function af(e) {
  if ((typeof e == 'function' && (e = { highlight: e }), !e || typeof e.highlight != 'function'))
    throw new Error('Must provide highlight function')
  return (
    typeof e.langPrefix != 'string' && (e.langPrefix = 'language-'),
    {
      async: !!e.async,
      walkTokens(t) {
        if (t.type !== 'code') return
        const n = kl(t.lang)
        if (e.async) return Promise.resolve(e.highlight(t.text, n, t.lang || '')).then(xl(t))
        const r = e.highlight(t.text, n, t.lang || '')
        if (r instanceof Promise)
          throw new Error(
            'markedHighlight is not set to async but the highlight function is async. Set the async option to true on markedHighlight to await the async highlight function.',
          )
        xl(t)(r)
      },
      renderer: {
        code(t, n, r) {
          const i = kl(n),
            l = i ? ` class="${e.langPrefix}${Cl(i)}"` : ''
          return (
            (t = t.replace(/\n$/, '')),
            `<pre><code${l}>${r ? t : Cl(t, !0)}
</code></pre>`
          )
        },
      },
    }
  )
}
function kl(e) {
  return (e || '').match(/\S*/)[0]
}
function xl(e) {
  return (t) => {
    typeof t == 'string' && t !== e.text && ((e.escaped = !0), (e.text = t))
  }
}
const oo = /[&<>"']/,
  cf = new RegExp(oo.source, 'g'),
  ao = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
  uf = new RegExp(ao.source, 'g'),
  ff = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' },
  El = (e) => ff[e]
function Cl(e, t) {
  if (t) {
    if (oo.test(e)) return e.replace(cf, El)
  } else if (ao.test(e)) return e.replace(uf, El)
  return e
}
var co = {},
  Dt = {},
  Rn = {},
  df =
    (Qn && Qn.__awaiter) ||
    function (e, t, n, r) {
      function i(l) {
        return l instanceof n
          ? l
          : new n(function (s) {
              s(l)
            })
      }
      return new (n || (n = Promise))(function (l, s) {
        function o(f) {
          try {
            c(r.next(f))
          } catch (p) {
            s(p)
          }
        }
        function a(f) {
          try {
            c(r.throw(f))
          } catch (p) {
            s(p)
          }
        }
        function c(f) {
          f.done ? l(f.value) : i(f.value).then(o, a)
        }
        c((r = r.apply(e, t || [])).next())
      })
    },
  hf =
    (Qn && Qn.__generator) ||
    function (e, t) {
      var n = {
          label: 0,
          sent: function () {
            if (l[0] & 1) throw l[1]
            return l[1]
          },
          trys: [],
          ops: [],
        },
        r,
        i,
        l,
        s
      return (
        (s = { next: o(0), throw: o(1), return: o(2) }),
        typeof Symbol == 'function' &&
          (s[Symbol.iterator] = function () {
            return this
          }),
        s
      )
      function o(c) {
        return function (f) {
          return a([c, f])
        }
      }
      function a(c) {
        if (r) throw new TypeError('Generator is already executing.')
        for (; n; )
          try {
            if (
              ((r = 1),
              i &&
                (l =
                  c[0] & 2
                    ? i.return
                    : c[0]
                      ? i.throw || ((l = i.return) && l.call(i), 0)
                      : i.next) &&
                !(l = l.call(i, c[1])).done)
            )
              return l
            switch (((i = 0), l && (c = [c[0] & 2, l.value]), c[0])) {
              case 0:
              case 1:
                l = c
                break
              case 4:
                return n.label++, { value: c[1], done: !1 }
              case 5:
                n.label++, (i = c[1]), (c = [0])
                continue
              case 7:
                ;(c = n.ops.pop()), n.trys.pop()
                continue
              default:
                if (
                  ((l = n.trys),
                  !(l = l.length > 0 && l[l.length - 1]) && (c[0] === 6 || c[0] === 2))
                ) {
                  n = 0
                  continue
                }
                if (c[0] === 3 && (!l || (c[1] > l[0] && c[1] < l[3]))) {
                  n.label = c[1]
                  break
                }
                if (c[0] === 6 && n.label < l[1]) {
                  ;(n.label = l[1]), (l = c)
                  break
                }
                if (l && n.label < l[2]) {
                  ;(n.label = l[2]), n.ops.push(c)
                  break
                }
                l[2] && n.ops.pop(), n.trys.pop()
                continue
            }
            c = t.call(e, n)
          } catch (f) {
            ;(c = [6, f]), (i = 0)
          } finally {
            r = l = 0
          }
        if (c[0] & 5) throw c[1]
        return { value: c[0] ? c[1] : void 0, done: !0 }
      }
    }
Object.defineProperty(Rn, '__esModule', { value: !0 })
Rn.ReCaptchaInstance = void 0
var pf = (function () {
  function e(t, n, r) {
    ;(this.siteKey = t), (this.recaptchaID = n), (this.recaptcha = r), (this.styleContainer = null)
  }
  return (
    (e.prototype.execute = function (t) {
      return df(this, void 0, void 0, function () {
        return hf(this, function (n) {
          return [
            2,
            this.recaptcha.enterprise
              ? this.recaptcha.enterprise.execute(this.recaptchaID, { action: t })
              : this.recaptcha.execute(this.recaptchaID, { action: t }),
          ]
        })
      })
    }),
    (e.prototype.getSiteKey = function () {
      return this.siteKey
    }),
    (e.prototype.hideBadge = function () {
      this.styleContainer === null &&
        ((this.styleContainer = document.createElement('style')),
        (this.styleContainer.innerHTML = '.grecaptcha-badge{visibility:hidden !important;}'),
        document.head.appendChild(this.styleContainer))
    }),
    (e.prototype.showBadge = function () {
      this.styleContainer !== null &&
        (document.head.removeChild(this.styleContainer), (this.styleContainer = null))
    }),
    e
  )
})()
Rn.ReCaptchaInstance = pf
Object.defineProperty(Dt, '__esModule', { value: !0 })
Dt.getInstance = Dt.load = void 0
var gf = Rn,
  ft
;(function (e) {
  ;(e[(e.NOT_LOADED = 0)] = 'NOT_LOADED'),
    (e[(e.LOADING = 1)] = 'LOADING'),
    (e[(e.LOADED = 2)] = 'LOADED')
})(ft || (ft = {}))
var uo = (function () {
  function e() {}
  return (
    (e.load = function (t, n) {
      if ((n === void 0 && (n = {}), typeof document > 'u'))
        return Promise.reject(new Error('This is a library for the browser!'))
      if (e.getLoadingState() === ft.LOADED)
        return e.instance.getSiteKey() === t
          ? Promise.resolve(e.instance)
          : Promise.reject(new Error('reCAPTCHA already loaded with different site key!'))
      if (e.getLoadingState() === ft.LOADING)
        return t !== e.instanceSiteKey
          ? Promise.reject(new Error('reCAPTCHA already loaded with different site key!'))
          : new Promise(function (i, l) {
              e.successfulLoadingConsumers.push(function (s) {
                return i(s)
              }),
                e.errorLoadingRunnable.push(function (s) {
                  return l(s)
                })
            })
      ;(e.instanceSiteKey = t), e.setLoadingState(ft.LOADING)
      var r = new e()
      return new Promise(function (i, l) {
        r.loadScript(
          t,
          n.useRecaptchaNet || !1,
          n.useEnterprise || !1,
          n.renderParameters ? n.renderParameters : {},
          n.customUrl,
        )
          .then(function () {
            e.setLoadingState(ft.LOADED)
            var s = r.doExplicitRender(
                grecaptcha,
                t,
                n.explicitRenderParameters ? n.explicitRenderParameters : {},
                n.useEnterprise || !1,
              ),
              o = new gf.ReCaptchaInstance(t, s, grecaptcha)
            e.successfulLoadingConsumers.forEach(function (a) {
              return a(o)
            }),
              (e.successfulLoadingConsumers = []),
              n.autoHideBadge && o.hideBadge(),
              (e.instance = o),
              i(o)
          })
          .catch(function (s) {
            e.errorLoadingRunnable.forEach(function (o) {
              return o(s)
            }),
              (e.errorLoadingRunnable = []),
              l(s)
          })
      })
    }),
    (e.getInstance = function () {
      return e.instance
    }),
    (e.setLoadingState = function (t) {
      e.loadingState = t
    }),
    (e.getLoadingState = function () {
      return e.loadingState === null ? ft.NOT_LOADED : e.loadingState
    }),
    (e.prototype.loadScript = function (t, n, r, i, l) {
      var s = this
      n === void 0 && (n = !1),
        r === void 0 && (r = !1),
        i === void 0 && (i = {}),
        l === void 0 && (l = '')
      var o = document.createElement('script')
      o.setAttribute('recaptcha-v3-script', '')
      var a = 'https://www.google.com/recaptcha/api.js'
      n &&
        (r
          ? (a = 'https://recaptcha.net/recaptcha/enterprise.js')
          : (a = 'https://recaptcha.net/recaptcha/api.js')),
        r && (a = 'https://www.google.com/recaptcha/enterprise.js'),
        l && (a = l),
        i.render && (i.render = void 0)
      var c = this.buildQueryString(i)
      return (
        (o.src = a + '?render=explicit' + c),
        new Promise(function (f, p) {
          o.addEventListener(
            'load',
            s.waitForScriptToLoad(function () {
              f(o)
            }, r),
            !1,
          ),
            (o.onerror = function (h) {
              e.setLoadingState(ft.NOT_LOADED), p(h)
            }),
            document.head.appendChild(o)
        })
      )
    }),
    (e.prototype.buildQueryString = function (t) {
      var n = Object.keys(t)
      return n.length < 1
        ? ''
        : '&' +
            Object.keys(t)
              .filter(function (r) {
                return !!t[r]
              })
              .map(function (r) {
                return r + '=' + t[r]
              })
              .join('&')
    }),
    (e.prototype.waitForScriptToLoad = function (t, n) {
      var r = this
      return function () {
        window.grecaptcha === void 0
          ? setTimeout(function () {
              r.waitForScriptToLoad(t, n)
            }, e.SCRIPT_LOAD_DELAY)
          : n
            ? window.grecaptcha.enterprise.ready(function () {
                t()
              })
            : window.grecaptcha.ready(function () {
                t()
              })
      }
    }),
    (e.prototype.doExplicitRender = function (t, n, r, i) {
      var l = { sitekey: n, badge: r.badge, size: r.size, tabindex: r.tabindex }
      return r.container
        ? i
          ? t.enterprise.render(r.container, l)
          : t.render(r.container, l)
        : i
          ? t.enterprise.render(l)
          : t.render(l)
    }),
    (e.loadingState = null),
    (e.instance = null),
    (e.instanceSiteKey = null),
    (e.successfulLoadingConsumers = []),
    (e.errorLoadingRunnable = []),
    (e.SCRIPT_LOAD_DELAY = 25),
    e
  )
})()
Dt.load = uo.load
Dt.getInstance = uo.getInstance
;(function (e) {
  Object.defineProperty(e, '__esModule', { value: !0 }),
    (e.ReCaptchaInstance = e.getInstance = e.load = void 0)
  var t = Dt
  Object.defineProperty(e, 'load', {
    enumerable: !0,
    get: function () {
      return t.load
    },
  }),
    Object.defineProperty(e, 'getInstance', {
      enumerable: !0,
      get: function () {
        return t.getInstance
      },
    })
  var n = Rn
  Object.defineProperty(e, 'ReCaptchaInstance', {
    enumerable: !0,
    get: function () {
      return n.ReCaptchaInstance
    },
  })
})(co)
const mf = ['nick', 'mail', 'link'],
  Sl = (e) => e.filter((t) => mf.includes(t)),
  Tl = ['//unpkg.com/@waline/emojis@1.1.0/weibo'],
  vf = [
    '//unpkg.com/@waline/emojis/tieba/tieba_agree.png',
    '//unpkg.com/@waline/emojis/tieba/tieba_look_down.png',
    '//unpkg.com/@waline/emojis/tieba/tieba_sunglasses.png',
    '//unpkg.com/@waline/emojis/tieba/tieba_pick_nose.png',
    '//unpkg.com/@waline/emojis/tieba/tieba_awkward.png',
    '//unpkg.com/@waline/emojis/tieba/tieba_sleep.png',
  ],
  yf = (e) =>
    new Promise((t, n) => {
      if (e.size > 128 * 1e3) return n(new Error('File too large! File size limit 128KB'))
      const r = new FileReader()
      r.readAsDataURL(e),
        (r.onload = () => {
          var i
          return t(((i = r.result) == null ? void 0 : i.toString()) || '')
        }),
        (r.onerror = n)
    }),
  bf = (e) =>
    e === !0
      ? '<p class="wl-tex">TeX is not available in preview</p>'
      : '<span class="wl-tex">TeX is not available in preview</span>',
  wf = (e) => {
    const t = async (n, r = {}) =>
      fetch(
        `https://api.giphy.com/v1/gifs/${n}?${new URLSearchParams({ lang: e, limit: '20', rating: 'g', api_key: '6CIMLkNMMOhRcXPoMCPkFy4Ybk2XUiMp', ...r }).toString()}`,
      )
        .then((i) => i.json())
        .then(({ data: i }) =>
          i.map((l) => ({ title: l.title, src: l.images.downsized_medium.url })),
        )
    return {
      search: (n) => t('search', { q: n, offset: '0' }),
      default: () => t('trending', {}),
      more: (n, r = 0) => t('search', { q: n, offset: r.toString() }),
    }
  },
  _f = /[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af\u0400-\u04FF]+|\w+/,
  kf = /</,
  xf = /(?:^|\s)\/\/(.+?)$/gm,
  Ef = /\/\*([\S\s]*?)\*\//gm,
  Cf = new RegExp(`(${_f.source}|${kf.source})|((?:${xf.source})|(?:${Ef.source}))`, 'gmi'),
  Rl = [
    '23AC69',
    '91C132',
    'F19726',
    'E8552D',
    '1AAB8E',
    'E1147F',
    '2980C1',
    '1BA1E6',
    '9FA0A0',
    'F19726',
    'E30B20',
    'E30B20',
    'A3338B',
  ],
  Ar = {},
  Sf = (e) => {
    let t = 0
    return e.replace(Cf, (n, r, i) => {
      if (i) return `<span style="color: slategray">${i}</span>`
      if (r === '<') return '&lt;'
      let l
      Ar[r] ? (l = Ar[r]) : ((l = Rl[t]), (Ar[r] = l))
      const s = `<span style="color: #${l}">${r}</span>`
      return (t = ++t % Rl.length), s
    })
  },
  Tf = [
    'nick',
    'nickError',
    'mail',
    'mailError',
    'link',
    'optional',
    'placeholder',
    'sofa',
    'submit',
    'like',
    'cancelLike',
    'reply',
    'cancelReply',
    'comment',
    'refresh',
    'more',
    'preview',
    'emoji',
    'uploadImage',
    'seconds',
    'minutes',
    'hours',
    'days',
    'now',
    'uploading',
    'login',
    'logout',
    'admin',
    'sticky',
    'word',
    'wordHint',
    'anonymous',
    'level0',
    'level1',
    'level2',
    'level3',
    'level4',
    'level5',
    'gif',
    'gifSearchPlaceholder',
    'profile',
    'approved',
    'waiting',
    'spam',
    'unsticky',
    'oldest',
    'latest',
    'hottest',
    'reactionTitle',
  ],
  bt = (e) => Object.fromEntries(e.map((t, n) => [Tf[n], t]))
var $l = bt([
    'NickName',
    'NickName cannot be less than 3 bytes.',
    'E-Mail',
    'Please confirm your email address.',
    'Website',
    'Optional',
    'Comment here...',
    'No comment yet.',
    'Submit',
    'Like',
    'Cancel like',
    'Reply',
    'Cancel reply',
    'Comments',
    'Refresh',
    'Load More...',
    'Preview',
    'Emoji',
    'Upload Image',
    'seconds ago',
    'minutes ago',
    'hours ago',
    'days ago',
    'just now',
    'Uploading',
    'Login',
    'logout',
    'Admin',
    'Sticky',
    'Words',
    `Please input comments between $0 and $1 words!
 Current word number: $2`,
    'Anonymous',
    'Dwarves',
    'Hobbits',
    'Ents',
    'Wizards',
    'Elves',
    'Maiar',
    'GIF',
    'Search GIF',
    'Profile',
    'Approved',
    'Waiting',
    'Spam',
    'Unsticky',
    'Oldest',
    'Latest',
    'Hottest',
    'What do you think?',
  ]),
  Al = bt([
    'Pseudo',
    'Le pseudo ne peut pas faire moins de 3 octets.',
    'E-mail',
    'Veuillez confirmer votre adresse e-mail.',
    'Site Web',
    'Optionnel',
    'Commentez ici...',
    "Aucun commentaire pour l'instant.",
    'Envoyer',
    "J'aime",
    "Annuler le j'aime",
    'Répondre',
    'Annuler la réponse',
    'Commentaires',
    'Actualiser',
    'Charger plus...',
    'Aperçu',
    'Emoji',
    'Télécharger une image',
    'Il y a quelques secondes',
    'Il y a quelques minutes',
    'Il y a quelques heures',
    'Il y a quelques jours',
    "À l'instant",
    'Téléchargement en cours',
    'Connexion',
    'Déconnexion',
    'Admin',
    'Épinglé',
    'Mots',
    `Veuillez saisir des commentaires entre $0 et $1 mots !
 Nombre actuel de mots : $2`,
    'Anonyme',
    'Nains',
    'Hobbits',
    'Ents',
    'Mages',
    'Elfes',
    'Maïar',
    'GIF',
    'Rechercher un GIF',
    'Profil',
    'Approuvé',
    'En attente',
    'Indésirable',
    'Détacher',
    'Le plus ancien',
    'Dernier',
    'Le plus populaire',
    "Qu'en pensez-vous ?",
  ]),
  Il = bt([
    'ニックネーム',
    '3バイト以上のニックネームをご入力ください.',
    'メールアドレス',
    'メールアドレスをご確認ください.',
    'サイト',
    'オプション',
    'ここにコメント',
    'コメントしましょう~',
    '提出する',
    'Like',
    'Cancel like',
    '返信する',
    'キャンセル',
    'コメント',
    '更新',
    'さらに読み込む',
    'プレビュー',
    '絵文字',
    '画像をアップロード',
    '秒前',
    '分前',
    '時間前',
    '日前',
    'たっだ今',
    'アップロード',
    'ログインする',
    'ログアウト',
    '管理者',
    'トップに置く',
    'ワード',
    `コメントは $0 から $1 ワードの間でなければなりません!
 現在の単語番号: $2`,
    '匿名',
    'うえにん',
    'なかにん',
    'しもおし',
    '特にしもおし',
    'かげ',
    'なぬし',
    'GIF',
    '探す GIF',
    '個人情報',
    '承認済み',
    '待っている',
    'スパム',
    'べたつかない',
    '逆順',
    '正順',
    '人気順',
    'どう思いますか？',
  ]),
  Rf = bt([
    'Apelido',
    'Apelido não pode ser menor que 3 bytes.',
    'E-Mail',
    'Por favor, confirme seu endereço de e-mail.',
    'Website',
    'Opcional',
    'Comente aqui...',
    'Nenhum comentário, ainda.',
    'Enviar',
    'Like',
    'Cancel like',
    'Responder',
    'Cancelar resposta',
    'Comentários',
    'Refrescar',
    'Carregar Mais...',
    'Visualizar',
    'Emoji',
    'Enviar Imagem',
    'segundos atrás',
    'minutos atrás',
    'horas atrás',
    'dias atrás',
    'agora mesmo',
    'Enviando',
    'Entrar',
    'Sair',
    'Admin',
    'Sticky',
    'Palavras',
    `Favor enviar comentário com $0 a $1 palavras!
 Número de palavras atuais: $2`,
    'Anônimo',
    'Dwarves',
    'Hobbits',
    'Ents',
    'Wizards',
    'Elves',
    'Maiar',
    'GIF',
    'Pesquisar GIF',
    'informação pessoal',
    'Aprovado',
    'Espera',
    'Spam',
    'Unsticky',
    'Mais velho',
    'Mais recentes',
    'Mais quente',
    'O que você acha?',
  ]),
  Ll = bt([
    'Псевдоним',
    'Никнейм не может быть меньше 3 байт.',
    'Эл. адрес',
    'Пожалуйста, подтвердите адрес вашей электронной почты.',
    'Веб-сайт',
    'Необязательный',
    'Комментарий здесь...',
    'Пока нет комментариев.',
    'Отправить',
    'Like',
    'Cancel like',
    'Отвечать',
    'Отменить ответ',
    'Комментарии',
    'Обновить',
    'Загрузи больше...',
    'Превью',
    'эмодзи',
    'Загрузить изображение',
    'секунд назад',
    'несколько минут назад',
    'несколько часов назад',
    'дней назад',
    'прямо сейчас',
    'Загрузка',
    'Авторизоваться',
    'Выход из системы',
    'Админ',
    'Липкий',
    'Слова',
    `Пожалуйста, введите комментарии от $0 до $1 слов!
Номер текущего слова: $2`,
    'Анонимный',
    'Dwarves',
    'Hobbits',
    'Ents',
    'Wizards',
    'Elves',
    'Maiar',
    'GIF',
    'Поиск GIF',
    'Персональные данные',
    'Одобренный',
    'Ожидающий',
    'Спам',
    'Нелипкий',
    'самый старый',
    'последний',
    'самый горячий',
    'Что вы думаете?',
  ]),
  Ol = bt([
    'Tên',
    'Tên không được nhỏ hơn 3 ký tự.',
    'E-Mail',
    'Vui lòng xác nhập địa chỉ email của bạn.',
    'Website',
    'Tùy chọn',
    'Hãy bình luận có văn hoá!',
    'Chưa có bình luận',
    'Gửi',
    'Thích',
    'Bỏ thích',
    'Trả lời',
    'Hủy bỏ',
    'bình luận',
    'Làm mới',
    'Tải thêm...',
    'Xem trước',
    'Emoji',
    'Tải lên hình ảnh',
    'giây trước',
    'phút trước',
    'giờ trước',
    'ngày trước',
    'Vừa xong',
    'Đang tải lên',
    'Đăng nhập',
    'đăng xuất',
    'Quản trị viên',
    'Dính',
    'từ',
    `Bình luận phải có độ dài giữa $0 và $1 từ!
 Số từ hiện tại: $2`,
    'Vô danh',
    'Người lùn',
    'Người tí hon',
    'Thần rừng',
    'Pháp sư',
    'Tiên tộc',
    'Maiar',
    'Ảnh GIF',
    'Tìm kiếm ảnh GIF',
    'thông tin cá nhân',
    'Đã được phê duyệt',
    'Đang chờ đợi',
    'Thư rác',
    'Không dính',
    'lâu đời nhất',
    'muộn nhất',
    'nóng nhất',
    'What do you think?',
  ]),
  Pl = bt([
    '昵称',
    '昵称不能少于3个字符',
    '邮箱',
    '请填写正确的邮件地址',
    '网址',
    '可选',
    '欢迎评论',
    '来发评论吧~',
    '提交',
    '喜欢',
    '取消喜欢',
    '回复',
    '取消回复',
    '评论',
    '刷新',
    '加载更多...',
    '预览',
    '表情',
    '上传图片',
    '秒前',
    '分钟前',
    '小时前',
    '天前',
    '刚刚',
    '正在上传',
    '登录',
    '退出',
    '博主',
    '置顶',
    '字',
    `评论字数应在 $0 到 $1 字之间！
当前字数：$2`,
    '匿名',
    '潜水',
    '冒泡',
    '吐槽',
    '活跃',
    '话痨',
    '传说',
    '表情包',
    '搜索表情包',
    '个人资料',
    '通过',
    '待审核',
    '垃圾',
    '取消置顶',
    '按倒序',
    '按正序',
    '按热度',
    '你认为这篇文章怎么样？',
  ]),
  $f = bt([
    '暱稱',
    '暱稱不能少於3個字元',
    '郵箱',
    '請填寫正確的郵件地址',
    '網址',
    '可選',
    '歡迎留言',
    '來發留言吧~',
    '送出',
    '喜歡',
    '取消喜歡',
    '回覆',
    '取消回覆',
    '留言',
    '重整',
    '載入更多...',
    '預覽',
    '表情',
    '上傳圖片',
    '秒前',
    '分鐘前',
    '小時前',
    '天前',
    '剛剛',
    '正在上傳',
    '登入',
    '登出',
    '管理者',
    '置頂',
    '字',
    `留言字數應在 $0 到 $1 字之間！
目前字數：$2`,
    '匿名',
    '潛水',
    '冒泡',
    '吐槽',
    '活躍',
    '多話',
    '傳說',
    '表情包',
    '搜尋表情包',
    '個人資料',
    '通過',
    '待審核',
    '垃圾',
    '取消置頂',
    '最早',
    '最新',
    '熱門',
    '你認為這篇文章怎麼樣？',
  ])
const fo = 'en-US',
  Qr = {
    zh: Pl,
    'zh-cn': Pl,
    'zh-tw': $f,
    en: $l,
    'en-us': $l,
    fr: Al,
    'fr-fr': Al,
    jp: Il,
    'jp-jp': Il,
    'pt-br': Rf,
    ru: Ll,
    'ru-ru': Ll,
    vi: Ol,
    'vi-vn': Ol,
  },
  Af = (e) => Qr[e.toLowerCase()] || Qr[fo],
  If = (e) => (Object.keys(Qr).includes(e.toLowerCase()) ? e : fo),
  ho = (e) => {
    try {
      e = decodeURI(e)
    } catch {}
    return e
  },
  po = (e = '') => e.replace(/\/$/u, ''),
  go = (e) => /^(https?:)?\/\//.test(e),
  cr = (e) => {
    const t = po(e)
    return go(t) ? t : `https://${t}`
  },
  Lf = (e) => (Array.isArray(e) ? e : e ? [0, e] : !1),
  Ir = (e, t) => (typeof e == 'function' ? e : e === !1 ? !1 : t),
  Of = ({
    serverURL: e,
    path: t = location.pathname,
    lang: n = typeof navigator > 'u' ? 'en-US' : navigator.language,
    locale: r,
    emoji: i = Tl,
    meta: l = ['nick', 'mail', 'link'],
    requiredMeta: s = [],
    dark: o = !1,
    pageSize: a = 10,
    wordLimit: c,
    imageUploader: f,
    highlighter: p,
    texRenderer: h,
    copyright: m = !0,
    login: $ = 'enable',
    search: k,
    reaction: S,
    recaptchaV3Key: b = '',
    turnstileKey: E = '',
    commentSorting: j = 'latest',
    ...V
  }) => ({
    serverURL: cr(e),
    path: ho(t),
    lang: If(n),
    locale: { ...Af(n), ...(typeof r == 'object' ? r : {}) },
    wordLimit: Lf(c),
    meta: Sl(l),
    requiredMeta: Sl(s),
    imageUploader: Ir(f, yf),
    highlighter: Ir(p, Sf),
    texRenderer: Ir(h, bf),
    dark: o,
    emoji: typeof i == 'boolean' ? (i ? Tl : []) : i,
    pageSize: a,
    login: $,
    copyright: m,
    search: k === !1 ? !1 : typeof k == 'object' ? k : wf(n),
    recaptchaV3Key: b,
    turnstileKey: E,
    reaction: Array.isArray(S) ? S : S === !0 ? vf : [],
    commentSorting: j,
    ...V,
  }),
  Ft = (e) => typeof e == 'string',
  Lr =
    '{--waline-white:#000;--waline-light-grey:#666;--waline-dark-grey:#999;--waline-color:#888;--waline-bg-color:#1e1e1e;--waline-bg-color-light:#272727;--waline-bg-color-hover: #444;--waline-border-color:#333;--waline-disable-bg-color:#444;--waline-disable-color:#272727;--waline-bq-color:#272727;--waline-info-bg-color:#272727;--waline-info-color:#666}',
  Pf = (e) =>
    Ft(e)
      ? e === 'auto'
        ? `@media(prefers-color-scheme:dark){body${Lr}}`
        : `${e}${Lr}`
      : e === !0
        ? `:root${Lr}`
        : '',
  Or = (e, t) => {
    let n = e.toString()
    for (; n.length < t; ) n = '0' + n
    return n
  },
  Mf = (e) => {
    const t = Or(e.getDate(), 2),
      n = Or(e.getMonth() + 1, 2)
    return `${Or(e.getFullYear(), 2)}-${n}-${t}`
  },
  zf = (e, t, n) => {
    if (!e) return ''
    const r = Ft(e) ? new Date(e.indexOf(' ') !== -1 ? e.replace(/-/g, '/') : e) : e,
      i = t.getTime() - r.getTime(),
      l = Math.floor(i / (24 * 3600 * 1e3))
    if (l === 0) {
      const s = i % 864e5,
        o = Math.floor(s / (3600 * 1e3))
      if (o === 0) {
        const a = s % 36e5,
          c = Math.floor(a / (60 * 1e3))
        if (c === 0) {
          const f = a % 6e4
          return `${Math.round(f / 1e3)} ${n.seconds}`
        }
        return `${c} ${n.minutes}`
      }
      return `${o} ${n.hours}`
    }
    return l < 0 ? n.now : l < 8 ? `${l} ${n.days}` : Mf(r)
  },
  jf =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
  Uf = (e) => jf.test(e),
  Vf = (e) => !!/@[0-9]+\.[0-9]+\.[0-9]+/.test(e),
  Df = (e) => {
    const t = Kt('WALINE_EMOJI', {}),
      n = Vf(e)
    if (n) {
      const r = t.value[e]
      if (r) return Promise.resolve(r)
    }
    return fetch(`${e}/info.json`)
      .then((r) => r.json())
      .then((r) => {
        const i = { folder: e, ...r }
        return n && (t.value[e] = i), i
      })
  },
  Ml = (e, t = '', n = '', r = '') => `${t ? `${t}/` : ''}${n}${e}${r ? `.${r}` : ''}`,
  Ff = (e) =>
    Promise.all(e.map((t) => (Ft(t) ? Df(po(t)) : Promise.resolve(t)))).then((t) => {
      const n = { tabs: [], map: {} }
      return (
        t.forEach((r) => {
          const { name: i, folder: l, icon: s, prefix: o, type: a, items: c } = r
          n.tabs.push({
            name: i,
            icon: Ml(s, l, o, a),
            items: c.map((f) => {
              const p = `${o || ''}${f}`
              return (n.map[p] = Ml(f, l, o, a)), p
            }),
          })
        }),
        n
      )
    }),
  mo = (e) => {
    e.name !== 'AbortError' && console.error(e.message)
  },
  Hf = (e) => (e instanceof HTMLElement ? e : Ft(e) ? document.querySelector(e) : null),
  Nf = (e) => e.type.includes('image'),
  zl = (e) => {
    const t = Array.from(e).find(Nf)
    return t ? t.getAsFile() : null
  },
  Bf = /\$.*?\$/,
  Wf = /^\$(.*?)\$/,
  qf = /^(?:\s{0,3})\$\$((?:[^\n]|\n[^\n])+?)\n{0,1}\$\$/,
  Kf = (e) => [
    {
      name: 'blockMath',
      level: 'block',
      tokenizer(t) {
        const n = qf.exec(t)
        if (n !== null) return { type: 'html', raw: n[0], text: e(!0, n[1]) }
      },
    },
    {
      name: 'inlineMath',
      level: 'inline',
      start(t) {
        const n = t.search(Bf)
        return n !== -1 ? n : t.length
      },
      tokenizer(t) {
        const n = Wf.exec(t)
        if (n !== null) return { type: 'html', raw: n[0], text: e(!1, n[1]) }
      },
    },
  ],
  vo = (e = '', t = {}) =>
    e.replace(/:(.+?):/g, (n, r) => (t[r] ? `<img class="wl-emoji" src="${t[r]}" alt="${r}">` : n)),
  Gf = (e, { emojiMap: t, highlighter: n, texRenderer: r }) => {
    const i = new so()
    if ((i.setOptions({ breaks: !0 }), n && i.use(af({ highlight: n })), r)) {
      const l = Kf(r)
      i.use({ extensions: l })
    }
    return i.parse(vo(e, t))
  },
  Yr = (e) => e.dataset.path || null,
  Zf = (e) => e.match(/[\w\d\s,.\u00C0-\u024F\u0400-\u04FF]+/giu),
  Qf = (e) => e.match(/[\u4E00-\u9FD5]/gu),
  Yf = (e) => {
    var t, n
    return (
      (((t = Zf(e)) == null
        ? void 0
        : t.reduce(
            (r, i) => r + (['', ',', '.'].includes(i.trim()) ? 0 : i.trim().split(/\s+/u).length),
            0,
          )) || 0) + (((n = Qf(e)) == null ? void 0 : n.length) || 0)
    )
  },
  Jf = async () => {
    if (!navigator) return ''
    const { userAgentData: e } = navigator
    let t = navigator.userAgent
    if (!e || e.platform !== 'Windows') return t
    const { platformVersion: n } = await e.getHighEntropyValues(['platformVersion'])
    return (
      n && parseInt(n.split('.')[0]) >= 13 && (t = t.replace('Windows NT 10.0', 'Windows NT 11.0')),
      t
    )
  },
  Xf = ({
    serverURL: e,
    path: t = window.location.pathname,
    selector: n = '.waline-comment-count',
    lang: r = navigator.language,
  }) => {
    const i = new AbortController(),
      l = document.querySelectorAll(n)
    return (
      l.length &&
        Eo({
          serverURL: cr(e),
          paths: Array.from(l).map((s) => ho(Yr(s) || t)),
          lang: r,
          signal: i.signal,
        })
          .then((s) => {
            l.forEach((o, a) => {
              o.innerText = s[a].toString()
            })
          })
          .catch(mo),
      i.abort.bind(i)
    )
  },
  jl = ({ size: e }) =>
    ie('svg', { class: 'wl-close-icon', viewBox: '0 0 1024 1024', width: e, height: e }, [
      ie('path', {
        d: 'M697.173 85.333h-369.92c-144.64 0-241.92 101.547-241.92 252.587v348.587c0 150.613 97.28 252.16 241.92 252.16h369.92c144.64 0 241.494-101.547 241.494-252.16V337.92c0-151.04-96.854-252.587-241.494-252.587z',
        fill: 'currentColor',
      }),
      ie('path', {
        d: 'm640.683 587.52-75.947-75.861 75.904-75.862a37.29 37.29 0 0 0 0-52.778 37.205 37.205 0 0 0-52.779 0l-75.946 75.818-75.862-75.946a37.419 37.419 0 0 0-52.821 0 37.419 37.419 0 0 0 0 52.821l75.947 75.947-75.776 75.733a37.29 37.29 0 1 0 52.778 52.821l75.776-75.776 75.947 75.947a37.376 37.376 0 0 0 52.779-52.821z',
        fill: '#888',
      }),
    ]),
  ed = () =>
    ie(
      'svg',
      { viewBox: '0 0 1024 1024', width: '24', height: '24' },
      ie('path', {
        d: 'm341.013 394.667 27.755 393.45h271.83l27.733-393.45h64.106l-28.01 397.952a64 64 0 0 1-63.83 59.498H368.768a64 64 0 0 1-63.83-59.52l-28.053-397.93h64.128zm139.307 19.818v298.667h-64V414.485h64zm117.013 0v298.667h-64V414.485h64zM181.333 288h640v64h-640v-64zm453.483-106.667v64h-256v-64h256z',
        fill: 'red',
      }),
    ),
  td = () =>
    ie(
      'svg',
      { viewBox: '0 0 1024 1024', width: '24', height: '24' },
      ie('path', {
        d: 'M563.2 463.3 677 540c1.7 1.2 3.7 1.8 5.8 1.8.7 0 1.4-.1 2-.2 2.7-.5 5.1-2.1 6.6-4.4l25.3-37.8c1.5-2.3 2.1-5.1 1.6-7.8s-2.1-5.1-4.4-6.6l-73.6-49.1 73.6-49.1c2.3-1.5 3.9-3.9 4.4-6.6.5-2.7 0-5.5-1.6-7.8l-25.3-37.8a10.1 10.1 0 0 0-6.6-4.4c-.7-.1-1.3-.2-2-.2-2.1 0-4.1.6-5.8 1.8l-113.8 76.6c-9.2 6.2-14.7 16.4-14.7 27.5.1 11 5.5 21.3 14.7 27.4zM387 348.8h-45.5c-5.7 0-10.4 4.7-10.4 10.4v153.3c0 5.7 4.7 10.4 10.4 10.4H387c5.7 0 10.4-4.7 10.4-10.4V359.2c0-5.7-4.7-10.4-10.4-10.4zm333.8 241.3-41-20a10.3 10.3 0 0 0-8.1-.5c-2.6.9-4.8 2.9-5.9 5.4-30.1 64.9-93.1 109.1-164.4 115.2-5.7.5-9.9 5.5-9.5 11.2l3.9 45.5c.5 5.3 5 9.5 10.3 9.5h.9c94.8-8 178.5-66.5 218.6-152.7 2.4-5 .3-11.2-4.8-13.6zm186-186.1c-11.9-42-30.5-81.4-55.2-117.1-24.1-34.9-53.5-65.6-87.5-91.2-33.9-25.6-71.5-45.5-111.6-59.2-41.2-14-84.1-21.1-127.8-21.1h-1.2c-75.4 0-148.8 21.4-212.5 61.7-63.7 40.3-114.3 97.6-146.5 165.8-32.2 68.1-44.3 143.6-35.1 218.4 9.3 74.8 39.4 145 87.3 203.3.1.2.3.3.4.5l36.2 38.4c1.1 1.2 2.5 2.1 3.9 2.6 73.3 66.7 168.2 103.5 267.5 103.5 73.3 0 145.2-20.3 207.7-58.7 37.3-22.9 70.3-51.5 98.1-85 27.1-32.7 48.7-69.5 64.2-109.1 15.5-39.7 24.4-81.3 26.6-123.8 2.4-43.6-2.5-87-14.5-129zm-60.5 181.1c-8.3 37-22.8 72-43 104-19.7 31.1-44.3 58.6-73.1 81.7-28.8 23.1-61 41-95.7 53.4-35.6 12.7-72.9 19.1-110.9 19.1-82.6 0-161.7-30.6-222.8-86.2l-34.1-35.8c-23.9-29.3-42.4-62.2-55.1-97.7-12.4-34.7-18.8-71-19.2-107.9-.4-36.9 5.4-73.3 17.1-108.2 12-35.8 30-69.2 53.4-99.1 31.7-40.4 71.1-72 117.2-94.1 44.5-21.3 94-32.6 143.4-32.6 49.3 0 97 10.8 141.8 32 34.3 16.3 65.3 38.1 92 64.8 26.1 26 47.5 56 63.6 89.2 16.2 33.2 26.6 68.5 31 105.1 4.6 37.5 2.7 75.3-5.6 112.3z',
        fill: 'currentColor',
      }),
    ),
  nd = () =>
    ie('svg', { viewBox: '0 0 1024 1024', width: '24', height: '24' }, [
      ie('path', {
        d: 'M784 112H240c-88 0-160 72-160 160v480c0 88 72 160 160 160h544c88 0 160-72 160-160V272c0-88-72-160-160-160zm96 640c0 52.8-43.2 96-96 96H240c-52.8 0-96-43.2-96-96V272c0-52.8 43.2-96 96-96h544c52.8 0 96 43.2 96 96v480z',
        fill: 'currentColor',
      }),
      ie('path', {
        d: 'M352 480c52.8 0 96-43.2 96-96s-43.2-96-96-96-96 43.2-96 96 43.2 96 96 96zm0-128c17.6 0 32 14.4 32 32s-14.4 32-32 32-32-14.4-32-32 14.4-32 32-32zm462.4 379.2-3.2-3.2-177.6-177.6c-25.6-25.6-65.6-25.6-91.2 0l-80 80-36.8-36.8c-25.6-25.6-65.6-25.6-91.2 0L200 728c-4.8 6.4-8 14.4-8 24 0 17.6 14.4 32 32 32 9.6 0 16-3.2 22.4-9.6L380.8 640l134.4 134.4c6.4 6.4 14.4 9.6 24 9.6 17.6 0 32-14.4 32-32 0-9.6-4.8-17.6-9.6-24l-52.8-52.8 80-80L769.6 776c6.4 4.8 12.8 8 20.8 8 17.6 0 32-14.4 32-32 0-8-3.2-16-8-20.8z',
        fill: 'currentColor',
      }),
    ]),
  rd = ({ active: e = !1 }) =>
    ie('svg', { viewBox: '0 0 1024 1024', width: '24', height: '24' }, [
      ie('path', {
        d: `M850.654 323.804c-11.042-25.625-26.862-48.532-46.885-68.225-20.022-19.61-43.258-34.936-69.213-45.73-26.78-11.124-55.124-16.727-84.375-16.727-40.622 0-80.256 11.123-114.698 32.135A214.79 214.79 0 0 0 512 241.819a214.79 214.79 0 0 0-23.483-16.562c-34.442-21.012-74.076-32.135-114.698-32.135-29.25 0-57.595 5.603-84.375 16.727-25.872 10.711-49.19 26.12-69.213 45.73-20.105 19.693-35.843 42.6-46.885 68.225-11.453 26.615-17.303 54.877-17.303 83.963 0 27.439 5.603 56.03 16.727 85.117 9.31 24.307 22.659 49.52 39.715 74.981 27.027 40.293 64.188 82.316 110.33 124.915 76.465 70.615 152.189 119.394 155.402 121.371l19.528 12.525c8.652 5.52 19.776 5.52 28.427 0l19.529-12.525c3.213-2.06 78.854-50.756 155.401-121.371 46.143-42.6 83.304-84.622 110.33-124.915 17.057-25.46 30.487-50.674 39.716-74.981 11.124-29.087 16.727-57.678 16.727-85.117.082-29.086-5.768-57.348-17.221-83.963z${e ? '' : 'M512 761.5S218.665 573.55 218.665 407.767c0-83.963 69.461-152.023 155.154-152.023 60.233 0 112.473 33.618 138.181 82.727 25.708-49.109 77.948-82.727 138.18-82.727 85.694 0 155.155 68.06 155.155 152.023C805.335 573.551 512 761.5 512 761.5z'}`,
        fill: e ? 'red' : 'currentColor',
      }),
    ]),
  id = () =>
    ie('svg', { viewBox: '0 0 1024 1024', width: '24', height: '24' }, [
      ie('path', {
        d: 'M710.816 654.301c70.323-96.639 61.084-230.578-23.705-314.843-46.098-46.098-107.183-71.109-172.28-71.109-65.008 0-126.092 25.444-172.28 71.109-45.227 46.098-70.756 107.183-70.756 172.106 0 64.923 25.444 126.007 71.194 172.106 46.099 46.098 107.184 71.109 172.28 71.109 51.414 0 100.648-16.212 142.824-47.404l126.53 126.006c7.058 7.06 16.297 10.979 26.406 10.979 10.105 0 19.343-3.919 26.402-10.979 14.467-14.467 14.467-38.172 0-52.723L710.816 654.301zm-315.107-23.265c-65.88-65.88-65.88-172.54 0-238.42 32.069-32.07 74.245-49.149 119.471-49.149 45.227 0 87.407 17.603 119.472 49.149 65.88 65.879 65.88 172.539 0 238.42-63.612 63.178-175.242 63.178-238.943 0zm0 0',
        fill: 'currentColor',
      }),
      ie('path', {
        d: 'M703.319 121.603H321.03c-109.8 0-199.469 89.146-199.469 199.38v382.034c0 109.796 89.236 199.38 199.469 199.38h207.397c20.653 0 37.384-16.645 37.384-37.299 0-20.649-16.731-37.296-37.384-37.296H321.03c-68.582 0-124.352-55.77-124.352-124.267V321.421c0-68.496 55.77-124.267 124.352-124.267h382.289c68.582 0 124.352 55.771 124.352 124.267V524.72c0 20.654 16.736 37.299 37.385 37.299 20.654 0 37.384-16.645 37.384-37.299V320.549c-.085-109.8-89.321-198.946-199.121-198.946zm0 0',
        fill: 'currentColor',
      }),
    ]),
  ld = () =>
    ie(
      'svg',
      { width: '16', height: '16', ariaHidden: 'true' },
      ie('path', {
        d: 'M14.85 3H1.15C.52 3 0 3.52 0 4.15v7.69C0 12.48.52 13 1.15 13h13.69c.64 0 1.15-.52 1.15-1.15v-7.7C16 3.52 15.48 3 14.85 3zM9 11H7V8L5.5 9.92 4 8v3H2V5h2l1.5 2L7 5h2v6zm2.99.5L9.5 8H11V5h2v3h1.5l-2.51 3.5z',
        fill: 'currentColor',
      }),
    ),
  sd = () =>
    ie(
      'svg',
      { viewBox: '0 0 1024 1024', width: '24', height: '24' },
      ie('path', {
        d: 'M810.667 213.333a64 64 0 0 1 64 64V704a64 64 0 0 1-64 64H478.336l-146.645 96.107a21.333 21.333 0 0 1-33.024-17.856V768h-85.334a64 64 0 0 1-64-64V277.333a64 64 0 0 1 64-64h597.334zm0 64H213.333V704h149.334v63.296L459.243 704h351.424V277.333zm-271.36 213.334v64h-176.64v-64h176.64zm122.026-128v64H362.667v-64h298.666z',
        fill: 'currentColor',
      }),
    ),
  od = () =>
    ie(
      'svg',
      { viewBox: '0 0 1024 1024', width: '24', height: '24' },
      ie('path', {
        d: 'M813.039 318.772L480.53 651.278H360.718V531.463L693.227 198.961C697.904 194.284 704.027 192 710.157 192C716.302 192 722.436 194.284 727.114 198.961L813.039 284.88C817.72 289.561 820 295.684 820 301.825C820 307.95 817.72 314.093 813.039 318.772ZM710.172 261.888L420.624 551.431V591.376H460.561L750.109 301.825L710.172 261.888ZM490.517 291.845H240.906V771.09H720.156V521.479C720.156 504.947 733.559 491.529 750.109 491.529C766.653 491.529 780.063 504.947 780.063 521.479V791.059C780.063 813.118 762.18 831 740.125 831H220.937C198.882 831 181 813.118 181 791.059V271.872C181 249.817 198.882 231.935 220.937 231.935H490.517C507.06 231.935 520.47 245.352 520.47 261.888C520.47 278.424 507.06 291.845 490.517 291.845Z',
        fill: 'currentColor',
      }),
    ),
  ad = () =>
    ie(
      'svg',
      { class: 'verified-icon', viewBox: '0 0 1024 1024', width: '14', height: '14' },
      ie('path', {
        d: 'm894.4 461.56-54.4-63.2c-10.4-12-18.8-34.4-18.8-50.4v-68c0-42.4-34.8-77.2-77.2-77.2h-68c-15.6 0-38.4-8.4-50.4-18.8l-63.2-54.4c-27.6-23.6-72.8-23.6-100.8 0l-62.8 54.8c-12 10-34.8 18.4-50.4 18.4h-69.2c-42.4 0-77.2 34.8-77.2 77.2v68.4c0 15.6-8.4 38-18.4 50l-54 63.6c-23.2 27.6-23.2 72.4 0 100l54 63.6c10 12 18.4 34.4 18.4 50v68.4c0 42.4 34.8 77.2 77.2 77.2h69.2c15.6 0 38.4 8.4 50.4 18.8l63.2 54.4c27.6 23.6 72.8 23.6 100.8 0l63.2-54.4c12-10.4 34.4-18.8 50.4-18.8h68c42.4 0 77.2-34.8 77.2-77.2v-68c0-15.6 8.4-38.4 18.8-50.4l54.4-63.2c23.2-27.6 23.2-73.2-.4-100.8zm-216-25.2-193.2 193.2a30 30 0 0 1-42.4 0l-96.8-96.8a30.16 30.16 0 0 1 0-42.4c11.6-11.6 30.8-11.6 42.4 0l75.6 75.6 172-172c11.6-11.6 30.8-11.6 42.4 0 11.6 11.6 11.6 30.8 0 42.4z',
        fill: '#27ae60',
      }),
    ),
  bn = ({ size: e = 100 }) =>
    ie(
      'svg',
      { width: e, height: e, viewBox: '0 0 100 100', preserveAspectRatio: 'xMidYMid' },
      ie(
        'circle',
        {
          cx: 50,
          cy: 50,
          fill: 'none',
          stroke: 'currentColor',
          strokeWidth: '4',
          r: '40',
          'stroke-dasharray': '85 30',
        },
        ie('animateTransform', {
          attributeName: 'transform',
          type: 'rotate',
          repeatCount: 'indefinite',
          dur: '1s',
          values: '0 50 50;360 50 50',
          keyTimes: '0;1',
        }),
      ),
    ),
  cd = () =>
    ie('svg', { width: 24, height: 24, fill: 'currentcolor', viewBox: '0 0 24 24' }, [
      ie('path', {
        style: 'transform: translateY(0.5px)',
        d: 'M18.968 10.5H15.968V11.484H17.984V12.984H15.968V15H14.468V9H18.968V10.5V10.5ZM8.984 9C9.26533 9 9.49967 9.09367 9.687 9.281C9.87433 9.46833 9.968 9.70267 9.968 9.984V10.5H6.499V13.5H8.468V12H9.968V14.016C9.968 14.2973 9.87433 14.5317 9.687 14.719C9.49967 14.9063 9.26533 15 8.984 15H5.984C5.70267 15 5.46833 14.9063 5.281 14.719C5.09367 14.5317 5 14.2973 5 14.016V9.985C5 9.70367 5.09367 9.46933 5.281 9.282C5.46833 9.09467 5.70267 9.001 5.984 9.001H8.984V9ZM11.468 9H12.968V15H11.468V9V9Z',
      }),
      ie('path', {
        d: 'M18.5 3H5.75C3.6875 3 2 4.6875 2 6.75V18C2 20.0625 3.6875 21.75 5.75 21.75H18.5C20.5625 21.75 22.25 20.0625 22.25 18V6.75C22.25 4.6875 20.5625 3 18.5 3ZM20.75 18C20.75 19.2375 19.7375 20.25 18.5 20.25H5.75C4.5125 20.25 3.5 19.2375 3.5 18V6.75C3.5 5.5125 4.5125 4.5 5.75 4.5H18.5C19.7375 4.5 20.75 5.5125 20.75 6.75V18Z',
      }),
    ]),
  ud = () => Kt('WALINE_USER_META', { nick: '', mail: '', link: '' }),
  fd = () => Kt('WALINE_COMMENT_BOX_EDITOR', ''),
  dd = 'WALINE_LIKE'
let Ul = null
const yo = () => Ul || (Ul = Kt(dd, [])),
  hd = 'WALINE_REACTION'
let Vl = null
const pd = () => Vl ?? (Vl = Kt(hd, {})),
  Dl = {},
  gd = (e) => {
    const t = Dl[e] ?? (Dl[e] = co.load(e, { useRecaptchaNet: !0, autoHideBadge: !0 }))
    return { execute: (n) => t.then((r) => r.execute(n)) }
  },
  md = (e) => ({
    execute: async (t) => {
      const { load: n } = ku('https://challenges.cloudflare.com/turnstile/v0/api.js', void 0, {
        async: !1,
      })
      await n()
      const r = window?.turnstile
      return new Promise((i) => {
        r?.ready(() => {
          r?.render('.wl-captcha-container', {
            sitekey: e,
            action: t,
            size: 'compact',
            callback: i,
          })
        })
      })
    },
  }),
  vd = 'WALINE_USER'
let Fl = null
const Ci = () => Fl ?? (Fl = Kt(vd, {})),
  yd = { key: 0, class: 'wl-reaction' },
  bd = ['textContent'],
  wd = { class: 'wl-reaction-list' },
  _d = ['onClick'],
  kd = { class: 'wl-reaction-img' },
  xd = ['src', 'alt'],
  Ed = ['textContent'],
  Cd = ['textContent']
var Sd = xn({
    __name: 'ArticleReaction',
    setup(e, { expose: t }) {
      t()
      const n = pd(),
        r = Tt('config'),
        i = Z(-1),
        l = Z([]),
        s = _e(() => r.value.locale),
        o = _e(() => r.value.reaction.length > 0),
        a = _e(() => {
          const { reaction: h, path: m } = r.value
          return h.map(($, k) => ({
            icon: $,
            desc: s.value[`reaction${k}`],
            active: n.value[m] === k,
          }))
        })
      let c
      const f = async () => {
          if (!o.value) return
          const { serverURL: h, lang: m, path: $, reaction: k } = r.value,
            S = new AbortController()
          c = S.abort.bind(S)
          const b = await Bl({
            serverURL: h,
            lang: m,
            paths: [$],
            type: k.map((E, j) => `reaction${j}`),
            signal: S.signal,
          })
          l.value = k.map((E, j) => b[0][`reaction${j}`])
        },
        p = async (h) => {
          if (i.value === -1) {
            const { serverURL: m, lang: $, path: k } = r.value,
              S = n.value[k]
            ;(i.value = h),
              S !== void 0 &&
                (await Pr({ serverURL: m, lang: $, path: k, type: `reaction${S}`, action: 'desc' }),
                (l.value[S] = Math.max(l.value[S] - 1, 0))),
              S !== h &&
                (await Pr({ serverURL: m, lang: $, path: k, type: `reaction${h}` }),
                (l.value[h] = (l.value[h] || 0) + 1)),
              S === h ? delete n.value[k] : (n.value[k] = h),
              (i.value = -1)
          }
        }
      return (
        Wt(() => {
          $e(
            () => [r.value.serverURL, r.value.path],
            () => {
              f()
            },
            { immediate: !0 },
          )
        }),
        qt(() => c?.()),
        (h, m) =>
          a.value.length
            ? (L(),
              M('div', yd, [
                U(
                  'div',
                  { class: 'wl-reaction-title', textContent: se(s.value.reactionTitle) },
                  null,
                  8,
                  bd,
                ),
                U('ul', wd, [
                  (L(!0),
                  M(
                    fe,
                    null,
                    Ue(
                      a.value,
                      ({ active: $, icon: k, desc: S }, b) => (
                        L(),
                        M(
                          'li',
                          {
                            key: b,
                            class: ye(['wl-reaction-item', { active: $ }]),
                            onClick: (E) => p(b),
                          },
                          [
                            U('div', kd, [
                              U('img', { src: k, alt: S }, null, 8, xd),
                              i.value === b
                                ? (L(), lt(X(bn), { key: 0, class: 'wl-reaction-loading' }))
                                : (L(),
                                  M(
                                    'div',
                                    {
                                      key: 1,
                                      class: 'wl-reaction-votes',
                                      textContent: se(l.value[b] || 0),
                                    },
                                    null,
                                    8,
                                    Ed,
                                  )),
                            ]),
                            U(
                              'div',
                              { class: 'wl-reaction-text', textContent: se(S) },
                              null,
                              8,
                              Cd,
                            ),
                          ],
                          10,
                          _d,
                        )
                      ),
                    ),
                    128,
                  )),
                ]),
              ]))
            : te('v-if', !0)
      )
    },
  }),
  $n = (e, t) => {
    const n = e.__vccOpts || e
    for (const [r, i] of t) n[r] = i
    return n
  },
  Td = $n(Sd, [['__file', 'ArticleReaction.vue']])
const Rd = ['data-index'],
  $d = ['src', 'title', 'onClick']
var Ad = xn({
    __name: 'ImageWall',
    props: { items: { default: () => [] }, columnWidth: { default: 300 }, gap: { default: 0 } },
    emits: ['insert'],
    setup(e, { expose: t }) {
      const n = e
      t()
      let r = null
      const i = Z(null),
        l = Z({}),
        s = Z([]),
        o = () => {
          const h = Math.floor(
            (i.value.getBoundingClientRect().width + n.gap) / (n.columnWidth + n.gap),
          )
          return h > 0 ? h : 1
        },
        a = (h) => new Array(h).fill(null).map(() => []),
        c = async (h) => {
          var m
          if (h >= n.items.length) return
          await kn()
          const $ = Array.from(((m = i.value) == null ? void 0 : m.children) || []).reduce(
            (k, S) => (S.getBoundingClientRect().height < k.getBoundingClientRect().height ? S : k),
          )
          s.value[Number($.dataset.index)].push(h), await c(h + 1)
        },
        f = async (h = !1) => {
          if (s.value.length === o() && !h) return
          s.value = a(o())
          const m = window.scrollY
          await c(0), window.scrollTo({ top: m })
        },
        p = (h) => {
          l.value[h.target.src] = !0
        }
      return (
        Wt(() => {
          f(!0),
            (r = new ResizeObserver(() => {
              f()
            })),
            r.observe(i.value),
            $e(
              () => [n.items],
              () => {
                ;(l.value = {}), f(!0)
              },
            ),
            $e(
              () => [n.columnWidth, n.gap],
              () => {
                f()
              },
            )
        }),
        Ss(() => r.unobserve(i.value)),
        (h, m) => (
          L(),
          M(
            'div',
            { ref_key: 'wall', ref: i, class: 'wl-gallery', style: dn({ gap: `${h.gap}px` }) },
            [
              (L(!0),
              M(
                fe,
                null,
                Ue(
                  s.value,
                  ($, k) => (
                    L(),
                    M(
                      'div',
                      {
                        key: k,
                        class: 'wl-gallery-column',
                        'data-index': k,
                        style: dn({ gap: `${h.gap}px` }),
                      },
                      [
                        (L(!0),
                        M(
                          fe,
                          null,
                          Ue(
                            $,
                            (S) => (
                              L(),
                              M(
                                fe,
                                { key: S },
                                [
                                  l.value[h.items[S].src]
                                    ? te('v-if', !0)
                                    : (L(),
                                      lt(X(bn), {
                                        key: 0,
                                        size: 36,
                                        style: { margin: '20px auto' },
                                      })),
                                  U(
                                    'img',
                                    {
                                      class: 'wl-gallery-item',
                                      src: h.items[S].src,
                                      title: h.items[S].title,
                                      loading: 'lazy',
                                      onLoad: p,
                                      onClick: (b) => h.$emit('insert', `![](${h.items[S].src})`),
                                    },
                                    null,
                                    40,
                                    $d,
                                  ),
                                ],
                                64,
                              )
                            ),
                          ),
                          128,
                        )),
                      ],
                      12,
                      Rd,
                    )
                  ),
                ),
                128,
              )),
            ],
            4,
          )
        )
      )
    },
  }),
  Id = $n(Ad, [['__file', 'ImageWall.vue']])
const Ld = { class: 'wl-comment' },
  Od = { key: 0, class: 'wl-login-info' },
  Pd = { class: 'wl-avatar' },
  Md = ['title'],
  zd = ['title'],
  jd = ['src'],
  Ud = ['title', 'textContent'],
  Vd = { class: 'wl-panel' },
  Dd = ['for', 'textContent'],
  Fd = ['id', 'onUpdate:modelValue', 'name', 'type'],
  Hd = ['placeholder'],
  Nd = { class: 'wl-preview' },
  Bd = U('hr', null, null, -1),
  Wd = ['innerHTML'],
  qd = { class: 'wl-footer' },
  Kd = { class: 'wl-actions' },
  Gd = {
    href: 'https://guides.github.com/features/mastering-markdown/',
    title: 'Markdown Guide',
    'aria-label': 'Markdown is supported',
    class: 'wl-action',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  Zd = ['title'],
  Qd = ['title'],
  Yd = ['title'],
  Jd = ['title'],
  Xd = { class: 'wl-info' },
  eh = U('div', { class: 'wl-captcha-container' }, null, -1),
  th = { class: 'wl-text-number' },
  nh = { key: 0 },
  rh = ['textContent'],
  ih = ['textContent'],
  lh = ['disabled'],
  sh = ['placeholder'],
  oh = { key: 1, class: 'wl-loading' },
  ah = { key: 0, class: 'wl-tab-wrapper' },
  ch = ['title', 'onClick'],
  uh = ['src', 'alt'],
  fh = { key: 0, class: 'wl-tabs' },
  dh = ['onClick'],
  hh = ['src', 'alt', 'title'],
  ph = ['title']
var gh = xn({
    __name: 'CommentBox',
    props: {
      edit: { default: null },
      rootId: { default: '' },
      replyId: { default: '' },
      replyUser: { default: '' },
    },
    emits: ['log', 'cancelEdit', 'cancelReply', 'submit'],
    setup(e, { expose: t, emit: n }) {
      const r = e,
        i = n
      t()
      const l = Tt('config'),
        s = fd(),
        o = ud(),
        a = Ci(),
        c = Z({}),
        f = Z(null),
        p = Z(null),
        h = Z(null),
        m = Z(null),
        $ = Z(null),
        k = Z(null),
        S = Z(null),
        b = Z({ tabs: [], map: {} }),
        E = Z(0),
        j = Z(!1),
        V = Z(!1),
        z = Z(!1),
        P = Z(''),
        W = Z(0),
        N = jt({ loading: !0, list: [] }),
        Se = Z(0),
        q = Z(!1),
        de = Z(''),
        me = Z(!1),
        K = Z(!1),
        B = _e(() => l.value.locale),
        le = _e(() => {
          var O
          return !!((O = a.value) != null && O.token)
        }),
        ne = _e(() => l.value.imageUploader !== !1),
        Q = (O) => {
          const A = f.value,
            u = A.selectionStart,
            d = A.selectionEnd || 0,
            g = A.scrollTop
          ;(s.value = A.value.substring(0, u) + O + A.value.substring(d, A.value.length)),
            A.focus(),
            (A.selectionStart = u + O.length),
            (A.selectionEnd = u + O.length),
            (A.scrollTop = g)
        },
        J = (O) => {
          const A = O.key
          ;(O.ctrlKey || O.metaKey) && A === 'Enter' && Gt()
        },
        ve = (O) => {
          const A = `![${l.value.locale.uploading} ${O.name}]()`
          return (
            Q(A),
            (me.value = !0),
            Promise.resolve()
              .then(() => l.value.imageUploader(O))
              .then((u) => {
                s.value = s.value.replace(
                  A,
                  `\r
![${O.name}](${u})`,
                )
              })
              .catch((u) => {
                alert(u.message), (s.value = s.value.replace(A, ''))
              })
              .then(() => {
                me.value = !1
              })
          )
        },
        Ne = (O) => {
          var A
          if ((A = O.dataTransfer) != null && A.items) {
            const u = zl(O.dataTransfer.items)
            u && ne.value && (ve(u), O.preventDefault())
          }
        },
        Be = (O) => {
          if (O.clipboardData) {
            const A = zl(O.clipboardData.items)
            A && ne.value && ve(A)
          }
        },
        Ae = () => {
          const O = p.value
          O.files &&
            ne.value &&
            ve(O.files[0]).then(() => {
              O.value = ''
            })
        },
        Gt = async () => {
          var O, A, u, d, g, v
          const {
              serverURL: y,
              lang: _,
              login: T,
              wordLimit: x,
              requiredMeta: C,
              recaptchaV3Key: w,
              turnstileKey: I,
            } = l.value,
            D = await Jf(),
            R = {
              comment: de.value,
              nick: o.value.nick,
              mail: o.value.mail,
              link: o.value.link,
              url: l.value.path,
              ua: D,
            }
          if ((O = a.value) != null && O.token && !r.edit)
            (R.nick = a.value.display_name), (R.mail = a.value.email), (R.link = a.value.url)
          else {
            if (T === 'force') return
            if (C.indexOf('nick') > -1 && !R.nick)
              return (A = c.value.nick) == null || A.focus(), alert(B.value.nickError)
            if ((C.indexOf('mail') > -1 && !R.mail) || (R.mail && !Uf(R.mail)))
              return (u = c.value.mail) == null || u.focus(), alert(B.value.mailError)
            R.nick || (R.nick = B.value.anonymous)
          }
          if (!R.comment) {
            ;(d = f.value) == null || d.focus()
            return
          }
          if (!q.value)
            return alert(
              B.value.wordHint
                .replace('$0', x[0].toString())
                .replace('$1', x[1].toString())
                .replace('$2', W.value.toString()),
            )
          ;(R.comment = vo(R.comment, b.value.map)),
            r.replyId &&
              r.rootId &&
              ((R.pid = r.replyId), (R.rid = r.rootId), (R.at = r.replyUser)),
            (me.value = !0)
          try {
            w && (R.recaptchaV3 = await gd(w).execute('social')),
              I && (R.turnstile = await md(I).execute('social'))
            const H = {
                serverURL: y,
                lang: _,
                token: (g = a.value) == null ? void 0 : g.token,
                comment: R,
              },
              Y = await (r.edit ? Hn({ objectId: r.edit.objectId, ...H }) : ko(H))
            if (((me.value = !1), Y.errmsg)) return alert(Y.errmsg)
            i('submit', Y.data),
              (s.value = ''),
              (P.value = ''),
              r.replyId && i('cancelReply'),
              (v = r.edit) != null && v.objectId && i('cancelEdit')
          } catch (H) {
            ;(me.value = !1), alert(H.message)
          }
        },
        _r = (O) => {
          O.preventDefault()
          const { lang: A, serverURL: u } = l.value
          Co({ serverURL: u, lang: A }).then((d) => {
            ;(a.value = d),
              (d.remember ? localStorage : sessionStorage).setItem(
                'WALINE_USER',
                JSON.stringify(d),
              ),
              i('log')
          })
        },
        kr = () => {
          ;(a.value = {}),
            localStorage.setItem('WALINE_USER', 'null'),
            sessionStorage.setItem('WALINE_USER', 'null'),
            i('log')
        },
        je = (O) => {
          O.preventDefault()
          const { lang: A, serverURL: u } = l.value,
            d = 800,
            g = 800,
            v = (window.innerWidth - d) / 2,
            y = (window.innerHeight - g) / 2,
            _ = new URLSearchParams({ lng: A, token: a.value.token }),
            T = window.open(
              `${u}/ui/profile?${_.toString()}`,
              '_blank',
              `width=${d},height=${g},left=${v},top=${y},scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no`,
            )
          T?.postMessage({ type: 'TOKEN', data: a.value.token }, '*')
        },
        wt = (O) => {
          var A, u, d, g
          !((A = h.value) != null && A.contains(O.target)) &&
            !((u = m.value) != null && u.contains(O.target)) &&
            (j.value = !1),
            !((d = $.value) != null && d.contains(O.target)) &&
              !((g = k.value) != null && g.contains(O.target)) &&
              (V.value = !1)
        },
        Lt = async (O) => {
          var A
          const { scrollTop: u, clientHeight: d, scrollHeight: g } = O.target,
            v = (d + u) / g,
            y = l.value.search,
            _ = ((A = S.value) == null ? void 0 : A.value) || ''
          v < 0.9 ||
            N.loading ||
            K.value ||
            ((N.loading = !0),
            (y.more && N.list.length ? await y.more(_, N.list.length) : await y.search(_)).length
              ? (N.list = [
                  ...N.list,
                  ...(y.more && N.list.length ? await y.more(_, N.list.length) : await y.search(_)),
                ])
              : (K.value = !0),
            (N.loading = !1),
            setTimeout(() => {
              O.target.scrollTop = u
            }, 50))
        },
        Zt = cu((O) => {
          ;(N.list = []), (K.value = !1), Lt(O)
        }, 300)
      $e(
        [l, W],
        ([O, A]) => {
          const { wordLimit: u } = O
          u
            ? A < u[0] && u[0] !== 0
              ? ((Se.value = u[0]), (q.value = !1))
              : A > u[1]
                ? ((Se.value = u[1]), (q.value = !1))
                : ((Se.value = u[1]), (q.value = !0))
            : ((Se.value = 0), (q.value = !0))
        },
        { immediate: !0 },
      )
      const Xe = ({ data: O }) => {
        !O ||
          O.type !== 'profile' ||
          ((a.value = { ...a.value, ...O.data }),
          [localStorage, sessionStorage]
            .filter((A) => A.getItem('WALINE_USER'))
            .forEach((A) => A.setItem('WALINE_USER', JSON.stringify(a))))
      }
      return (
        Wt(() => {
          var O
          document.body.addEventListener('click', wt),
            window.addEventListener('message', Xe),
            (O = r.edit) != null && O.objectId && (s.value = r.edit.orig),
            $e(V, async (A) => {
              if (!A) return
              const u = l.value.search
              S.value && (S.value.value = ''),
                (N.loading = !0),
                (N.list = u.default ? await u.default() : await u.search('')),
                (N.loading = !1)
            }),
            $e(
              () => s.value,
              (A) => {
                const { highlighter: u, texRenderer: d } = l.value
                ;(de.value = A),
                  (P.value = Gf(A, { emojiMap: b.value.map, highlighter: u, texRenderer: d })),
                  (W.value = Yf(A)),
                  A ? ml(f.value) : ml.destroy(f.value)
              },
              { immediate: !0 },
            ),
            $e(
              () => l.value.emoji,
              (A) =>
                Ff(A).then((u) => {
                  b.value = u
                }),
              { immediate: !0 },
            )
        }),
        qt(() => {
          document.body.removeEventListener('click', wt), window.removeEventListener('message', Xe)
        }),
        (O, A) => {
          var u, d
          return (
            L(),
            M('div', Ld, [
              X(l).login !== 'disable' && le.value && !((u = O.edit) != null && u.objectId)
                ? (L(),
                  M('div', Od, [
                    U('div', Pd, [
                      U(
                        'button',
                        {
                          type: 'submit',
                          class: 'wl-logout-btn',
                          title: B.value.logout,
                          onClick: kr,
                        },
                        [ae(X(jl), { size: 14 })],
                        8,
                        Md,
                      ),
                      U(
                        'a',
                        {
                          href: '#',
                          class: 'wl-login-nick',
                          'aria-label': 'Profile',
                          title: B.value.profile,
                          onClick: je,
                        },
                        [U('img', { src: X(a).avatar, alt: 'avatar' }, null, 8, jd)],
                        8,
                        zd,
                      ),
                    ]),
                    U(
                      'a',
                      {
                        href: '#',
                        class: 'wl-login-nick',
                        'aria-label': 'Profile',
                        title: B.value.profile,
                        onClick: je,
                        textContent: se(X(a).display_name),
                      },
                      null,
                      8,
                      Ud,
                    ),
                  ]))
                : te('v-if', !0),
              U('div', Vd, [
                X(l).login !== 'force' && X(l).meta.length && !le.value
                  ? (L(),
                    M(
                      'div',
                      { key: 0, class: ye(['wl-header', `item${X(l).meta.length}`]) },
                      [
                        (L(!0),
                        M(
                          fe,
                          null,
                          Ue(
                            X(l).meta,
                            (g) => (
                              L(),
                              M('div', { key: g, class: 'wl-header-item' }, [
                                U(
                                  'label',
                                  {
                                    for: `wl-${g}`,
                                    textContent: se(
                                      B.value[g] +
                                        (X(l).requiredMeta.includes(g) || !X(l).requiredMeta.length
                                          ? ''
                                          : `(${B.value.optional})`),
                                    ),
                                  },
                                  null,
                                  8,
                                  Dd,
                                ),
                                zn(
                                  U(
                                    'input',
                                    {
                                      id: `wl-${g}`,
                                      ref_for: !0,
                                      ref: (v) => {
                                        v && (c.value[g] = v)
                                      },
                                      'onUpdate:modelValue': (v) => (X(o)[g] = v),
                                      class: ye(['wl-input', `wl-${g}`]),
                                      name: g,
                                      type: g === 'mail' ? 'email' : 'text',
                                    },
                                    null,
                                    10,
                                    Fd,
                                  ),
                                  [[Jc, X(o)[g]]],
                                ),
                              ])
                            ),
                          ),
                          128,
                        )),
                      ],
                      2,
                    ))
                  : te('v-if', !0),
                zn(
                  U(
                    'textarea',
                    {
                      id: 'wl-edit',
                      ref_key: 'editorRef',
                      ref: f,
                      'onUpdate:modelValue': A[0] || (A[0] = (g) => (Ce(s) ? (s.value = g) : null)),
                      class: 'wl-editor',
                      placeholder: O.replyUser ? `@${O.replyUser}` : B.value.placeholder,
                      onKeydown: J,
                      onDrop: Ne,
                      onPaste: Be,
                    },
                    null,
                    40,
                    Hd,
                  ),
                  [[Gr, X(s)]],
                ),
                zn(
                  U(
                    'div',
                    Nd,
                    [
                      Bd,
                      U('h4', null, se(B.value.preview) + ':', 1),
                      U('div', { class: 'wl-content', innerHTML: P.value }, null, 8, Wd),
                    ],
                    512,
                  ),
                  [[rl, z.value]],
                ),
                U('div', qd, [
                  U('div', Kd, [
                    U('a', Gd, [ae(X(ld))]),
                    zn(
                      U(
                        'button',
                        {
                          ref_key: 'emojiButtonRef',
                          ref: h,
                          type: 'button',
                          class: ye(['wl-action', { active: j.value }]),
                          title: B.value.emoji,
                          onClick: A[1] || (A[1] = (g) => (j.value = !j.value)),
                        },
                        [ae(X(td))],
                        10,
                        Zd,
                      ),
                      [[rl, b.value.tabs.length]],
                    ),
                    X(l).search
                      ? (L(),
                        M(
                          'button',
                          {
                            key: 0,
                            ref_key: 'gifButtonRef',
                            ref: $,
                            type: 'button',
                            class: ye(['wl-action', { active: V.value }]),
                            title: B.value.gif,
                            onClick: A[2] || (A[2] = (g) => (V.value = !V.value)),
                          },
                          [ae(X(cd))],
                          10,
                          Qd,
                        ))
                      : te('v-if', !0),
                    U(
                      'input',
                      {
                        id: 'wl-image-upload',
                        ref_key: 'imageUploadRef',
                        ref: p,
                        class: 'upload',
                        type: 'file',
                        accept: '.png,.jpg,.jpeg,.webp,.bmp,.gif',
                        onChange: Ae,
                      },
                      null,
                      544,
                    ),
                    ne.value
                      ? (L(),
                        M(
                          'label',
                          {
                            key: 1,
                            for: 'wl-image-upload',
                            class: 'wl-action',
                            title: B.value.uploadImage,
                          },
                          [ae(X(nd))],
                          8,
                          Yd,
                        ))
                      : te('v-if', !0),
                    U(
                      'button',
                      {
                        type: 'button',
                        class: ye(['wl-action', { active: z.value }]),
                        title: B.value.preview,
                        onClick: A[3] || (A[3] = (g) => (z.value = !z.value)),
                      },
                      [ae(X(id))],
                      10,
                      Jd,
                    ),
                  ]),
                  U('div', Xd, [
                    eh,
                    U('div', th, [
                      tt(se(W.value) + ' ', 1),
                      X(l).wordLimit
                        ? (L(),
                          M('span', nh, [
                            tt('  /  '),
                            U(
                              'span',
                              { class: ye({ illegal: !q.value }), textContent: se(Se.value) },
                              null,
                              10,
                              rh,
                            ),
                          ]))
                        : te('v-if', !0),
                      tt('  ' + se(B.value.word), 1),
                    ]),
                    X(l).login !== 'disable' && !le.value
                      ? (L(),
                        M(
                          'button',
                          {
                            key: 0,
                            type: 'button',
                            class: 'wl-btn',
                            onClick: _r,
                            textContent: se(B.value.login),
                          },
                          null,
                          8,
                          ih,
                        ))
                      : te('v-if', !0),
                    X(l).login !== 'force' || le.value
                      ? (L(),
                        M(
                          'button',
                          {
                            key: 1,
                            type: 'submit',
                            class: 'primary wl-btn',
                            title: 'Cmd|Ctrl + Enter',
                            disabled: me.value,
                            onClick: Gt,
                          },
                          [
                            me.value
                              ? (L(), lt(X(bn), { key: 0, size: 16 }))
                              : (L(), M(fe, { key: 1 }, [tt(se(B.value.submit), 1)], 64)),
                          ],
                          8,
                          lh,
                        ))
                      : te('v-if', !0),
                  ]),
                  U(
                    'div',
                    {
                      ref_key: 'gifPopupRef',
                      ref: k,
                      class: ye(['wl-gif-popup', { display: V.value }]),
                    },
                    [
                      U(
                        'input',
                        {
                          ref_key: 'gifSearchInputRef',
                          ref: S,
                          type: 'text',
                          placeholder: B.value.gifSearchPlaceholder,
                          onInput: A[4] || (A[4] = (...g) => X(Zt) && X(Zt)(...g)),
                        },
                        null,
                        40,
                        sh,
                      ),
                      N.list.length
                        ? (L(),
                          lt(
                            Id,
                            {
                              key: 0,
                              items: N.list,
                              'column-width': 200,
                              gap: 6,
                              onInsert: A[5] || (A[5] = (g) => Q(g)),
                              onScroll: Lt,
                            },
                            null,
                            8,
                            ['items'],
                          ))
                        : te('v-if', !0),
                      N.loading ? (L(), M('div', oh, [ae(X(bn), { size: 30 })])) : te('v-if', !0),
                    ],
                    2,
                  ),
                  U(
                    'div',
                    {
                      ref_key: 'emojiPopupRef',
                      ref: m,
                      class: ye(['wl-emoji-popup', { display: j.value }]),
                    },
                    [
                      (L(!0),
                      M(
                        fe,
                        null,
                        Ue(
                          b.value.tabs,
                          (g, v) => (
                            L(),
                            M(
                              fe,
                              { key: g.name },
                              [
                                v === E.value
                                  ? (L(),
                                    M('div', ah, [
                                      (L(!0),
                                      M(
                                        fe,
                                        null,
                                        Ue(
                                          g.items,
                                          (y) => (
                                            L(),
                                            M(
                                              'button',
                                              {
                                                key: y,
                                                type: 'button',
                                                title: y,
                                                onClick: (_) => Q(`:${y}:`),
                                              },
                                              [
                                                j.value
                                                  ? (L(),
                                                    M(
                                                      'img',
                                                      {
                                                        key: 0,
                                                        class: 'wl-emoji',
                                                        src: b.value.map[y],
                                                        alt: y,
                                                        loading: 'lazy',
                                                        referrerPolicy: 'no-referrer',
                                                      },
                                                      null,
                                                      8,
                                                      uh,
                                                    ))
                                                  : te('v-if', !0),
                                              ],
                                              8,
                                              ch,
                                            )
                                          ),
                                        ),
                                        128,
                                      )),
                                    ]))
                                  : te('v-if', !0),
                              ],
                              64,
                            )
                          ),
                        ),
                        128,
                      )),
                      b.value.tabs.length > 1
                        ? (L(),
                          M('div', fh, [
                            (L(!0),
                            M(
                              fe,
                              null,
                              Ue(
                                b.value.tabs,
                                (g, v) => (
                                  L(),
                                  M(
                                    'button',
                                    {
                                      key: g.name,
                                      type: 'button',
                                      class: ye(['wl-tab', { active: E.value === v }]),
                                      onClick: (y) => (E.value = v),
                                    },
                                    [
                                      U(
                                        'img',
                                        {
                                          class: 'wl-emoji',
                                          src: g.icon,
                                          alt: g.name,
                                          title: g.name,
                                          loading: 'lazy',
                                          referrerPolicy: 'no-referrer',
                                        },
                                        null,
                                        8,
                                        hh,
                                      ),
                                    ],
                                    10,
                                    dh,
                                  )
                                ),
                              ),
                              128,
                            )),
                          ]))
                        : te('v-if', !0),
                    ],
                    2,
                  ),
                ]),
              ]),
              O.replyId || ((d = O.edit) != null && d.objectId)
                ? (L(),
                  M(
                    'button',
                    {
                      key: 1,
                      type: 'button',
                      class: 'wl-close',
                      title: B.value.cancelReply,
                      onClick:
                        A[6] || (A[6] = (g) => O.$emit(O.replyId ? 'cancelReply' : 'cancelEdit')),
                    },
                    [ae(X(jl), { size: 24 })],
                    8,
                    ph,
                  ))
                : te('v-if', !0),
            ])
          )
        }
      )
    },
  }),
  bo = $n(gh, [['__file', 'CommentBox.vue']])
const mh = ['id'],
  vh = { class: 'wl-user', 'aria-hidden': 'true' },
  yh = ['src'],
  bh = { class: 'wl-card' },
  wh = { class: 'wl-head' },
  _h = ['href'],
  kh = { key: 1, class: 'wl-nick' },
  xh = ['textContent'],
  Eh = ['textContent'],
  Ch = ['textContent'],
  Sh = ['textContent'],
  Th = ['textContent'],
  Rh = { class: 'wl-comment-actions' },
  $h = ['title'],
  Ah = ['title'],
  Ih = { class: 'wl-meta', 'aria-hidden': 'true' },
  Lh = ['data-value', 'textContent'],
  Oh = ['innerHTML'],
  Ph = { key: 1, class: 'wl-admin-actions' },
  Mh = { class: 'wl-comment-status' },
  zh = ['disabled', 'onClick', 'textContent'],
  jh = { key: 3, class: 'wl-quote' }
var Uh = xn({
    __name: 'CommentCard',
    props: { comment: {}, edit: { default: null }, rootId: {}, reply: { default: null } },
    emits: ['log', 'submit', 'delete', 'edit', 'like', 'status', 'sticky', 'reply'],
    setup(e, { emit: t }) {
      const n = e,
        r = t,
        i = ['approved', 'waiting', 'spam'],
        l = Tt('config'),
        s = yo(),
        o = _u(),
        a = Ci(),
        c = _e(() => l.value.locale),
        f = _e(() => {
          const { link: b } = n.comment
          return b ? (go(b) ? b : `https://${b}`) : ''
        }),
        p = _e(() => s.value.includes(n.comment.objectId)),
        h = _e(() => zf(new Date(n.comment.time), o.value, c.value)),
        m = _e(() => a.value.type === 'administrator'),
        $ = _e(() => n.comment.user_id && a.value.objectId === n.comment.user_id),
        k = _e(() => {
          var b
          return n.comment.objectId === ((b = n.reply) == null ? void 0 : b.objectId)
        }),
        S = _e(() => {
          var b
          return n.comment.objectId === ((b = n.edit) == null ? void 0 : b.objectId)
        })
      return (b, E) => {
        var j
        const V = Ia('CommentCard', !0)
        return (
          L(),
          M(
            'div',
            { id: b.comment.objectId, class: 'wl-card-item' },
            [
              U('div', vh, [
                b.comment.avatar
                  ? (L(),
                    M(
                      'img',
                      { key: 0, class: 'wl-user-avatar', src: b.comment.avatar },
                      null,
                      8,
                      yh,
                    ))
                  : te('v-if', !0),
                b.comment.type ? (L(), lt(X(ad), { key: 1 })) : te('v-if', !0),
              ]),
              U('div', bh, [
                U('div', wh, [
                  f.value
                    ? (L(),
                      M(
                        'a',
                        {
                          key: 0,
                          class: 'wl-nick',
                          href: f.value,
                          target: '_blank',
                          rel: 'nofollow noopener noreferrer',
                        },
                        se(b.comment.nick),
                        9,
                        _h,
                      ))
                    : (L(), M('span', kh, se(b.comment.nick), 1)),
                  b.comment.type === 'administrator'
                    ? (L(),
                      M(
                        'span',
                        { key: 2, class: 'wl-badge', textContent: se(c.value.admin) },
                        null,
                        8,
                        xh,
                      ))
                    : te('v-if', !0),
                  b.comment.label
                    ? (L(),
                      M(
                        'span',
                        { key: 3, class: 'wl-badge', textContent: se(b.comment.label) },
                        null,
                        8,
                        Eh,
                      ))
                    : te('v-if', !0),
                  b.comment.sticky
                    ? (L(),
                      M(
                        'span',
                        { key: 4, class: 'wl-badge', textContent: se(c.value.sticky) },
                        null,
                        8,
                        Ch,
                      ))
                    : te('v-if', !0),
                  typeof b.comment.level == 'number'
                    ? (L(),
                      M(
                        'span',
                        {
                          key: 5,
                          class: ye(`wl-badge level${b.comment.level}`),
                          textContent: se(
                            c.value[`level${b.comment.level}`] || `Level ${b.comment.level}`,
                          ),
                        },
                        null,
                        10,
                        Sh,
                      ))
                    : te('v-if', !0),
                  U('span', { class: 'wl-time', textContent: se(h.value) }, null, 8, Th),
                  U('div', Rh, [
                    m.value || $.value
                      ? (L(),
                        M(
                          fe,
                          { key: 0 },
                          [
                            U(
                              'button',
                              {
                                type: 'button',
                                class: 'wl-edit',
                                onClick: E[0] || (E[0] = (z) => r('edit', b.comment)),
                              },
                              [ae(X(od))],
                            ),
                            U(
                              'button',
                              {
                                type: 'button',
                                class: 'wl-delete',
                                onClick: E[1] || (E[1] = (z) => r('delete', b.comment)),
                              },
                              [ae(X(ed))],
                            ),
                          ],
                          64,
                        ))
                      : te('v-if', !0),
                    U(
                      'button',
                      {
                        type: 'button',
                        class: 'wl-like',
                        title: p.value ? c.value.cancelLike : c.value.like,
                        onClick: E[2] || (E[2] = (z) => r('like', b.comment)),
                      },
                      [
                        ae(X(rd), { active: p.value }, null, 8, ['active']),
                        tt(' ' + se('like' in b.comment ? b.comment.like : ''), 1),
                      ],
                      8,
                      $h,
                    ),
                    U(
                      'button',
                      {
                        type: 'button',
                        class: ye(['wl-reply', { active: k.value }]),
                        title: k.value ? c.value.cancelReply : c.value.reply,
                        onClick: E[3] || (E[3] = (z) => r('reply', k.value ? null : b.comment)),
                      },
                      [ae(X(sd))],
                      10,
                      Ah,
                    ),
                  ]),
                ]),
                U('div', Ih, [
                  (L(),
                  M(
                    fe,
                    null,
                    Ue(
                      ['addr', 'browser', 'os'],
                      (z) => (
                        L(),
                        M(
                          fe,
                          null,
                          [
                            b.comment[z]
                              ? (L(),
                                M(
                                  'span',
                                  {
                                    key: z,
                                    class: ye(`wl-${z}`),
                                    'data-value': b.comment[z],
                                    textContent: se(b.comment[z]),
                                  },
                                  null,
                                  10,
                                  Lh,
                                ))
                              : te('v-if', !0),
                          ],
                          64,
                        )
                      ),
                    ),
                    64,
                  )),
                ]),
                S.value
                  ? te('v-if', !0)
                  : (L(),
                    M(
                      'div',
                      { key: 0, class: 'wl-content', innerHTML: b.comment.comment },
                      null,
                      8,
                      Oh,
                    )),
                m.value && !S.value
                  ? (L(),
                    M('div', Ph, [
                      U('span', Mh, [
                        (L(),
                        M(
                          fe,
                          null,
                          Ue(i, (z) =>
                            U(
                              'button',
                              {
                                key: z,
                                type: 'submit',
                                class: ye(`wl-btn wl-${z}`),
                                disabled: b.comment.status === z,
                                onClick: (P) => r('status', { status: z, comment: b.comment }),
                                textContent: se(c.value[z]),
                              },
                              null,
                              10,
                              zh,
                            ),
                          ),
                          64,
                        )),
                      ]),
                      m.value && !('rid' in b.comment)
                        ? (L(),
                          M(
                            'button',
                            {
                              key: 0,
                              type: 'submit',
                              class: 'wl-btn wl-sticky',
                              onClick: E[4] || (E[4] = (z) => r('sticky', b.comment)),
                            },
                            se(b.comment.sticky ? c.value.unsticky : c.value.sticky),
                            1,
                          ))
                        : te('v-if', !0),
                    ]))
                  : te('v-if', !0),
                k.value || S.value
                  ? (L(),
                    M(
                      'div',
                      {
                        key: 2,
                        class: ye({ 'wl-reply-wrapper': k.value, 'wl-edit-wrapper': S.value }),
                      },
                      [
                        ae(
                          bo,
                          {
                            edit: b.edit,
                            'reply-id': (j = b.reply) == null ? void 0 : j.objectId,
                            'reply-user': b.comment.nick,
                            'root-id': b.rootId,
                            onLog: E[5] || (E[5] = (z) => r('log')),
                            onCancelReply: E[6] || (E[6] = (z) => r('reply', null)),
                            onCancelEdit: E[7] || (E[7] = (z) => r('edit', null)),
                            onSubmit: E[8] || (E[8] = (z) => r('submit', z)),
                          },
                          null,
                          8,
                          ['edit', 'reply-id', 'reply-user', 'root-id'],
                        ),
                      ],
                      2,
                    ))
                  : te('v-if', !0),
                'children' in b.comment
                  ? (L(),
                    M('div', jh, [
                      (L(!0),
                      M(
                        fe,
                        null,
                        Ue(
                          b.comment.children,
                          (z) => (
                            L(),
                            lt(
                              V,
                              {
                                key: z.objectId,
                                comment: z,
                                reply: b.reply,
                                edit: b.edit,
                                'root-id': b.rootId,
                                onLog: E[9] || (E[9] = (P) => r('log')),
                                onDelete: E[10] || (E[10] = (P) => r('delete', P)),
                                onEdit: E[11] || (E[11] = (P) => r('edit', P)),
                                onLike: E[12] || (E[12] = (P) => r('like', P)),
                                onReply: E[13] || (E[13] = (P) => r('reply', P)),
                                onStatus: E[14] || (E[14] = (P) => r('status', P)),
                                onSticky: E[15] || (E[15] = (P) => r('sticky', P)),
                                onSubmit: E[16] || (E[16] = (P) => r('submit', P)),
                              },
                              null,
                              8,
                              ['comment', 'reply', 'edit', 'root-id'],
                            )
                          ),
                        ),
                        128,
                      )),
                    ]))
                  : te('v-if', !0),
              ]),
            ],
            8,
            mh,
          )
        )
      }
    },
  }),
  Vh = $n(Uh, [['__file', 'CommentCard.vue']])
const Dh = '3.1.3',
  Fh = { 'data-waline': '' },
  Hh = { class: 'wl-meta-head' },
  Nh = { class: 'wl-count' },
  Bh = ['textContent'],
  Wh = { class: 'wl-sort' },
  qh = ['onClick'],
  Kh = { class: 'wl-cards' },
  Gh = { key: 1, class: 'wl-operation' },
  Zh = ['textContent'],
  Qh = { key: 2, class: 'wl-loading' },
  Yh = ['textContent'],
  Jh = { key: 4, class: 'wl-operation' },
  Xh = ['textContent'],
  ep = { key: 5, class: 'wl-power' },
  tp = U(
    'a',
    { href: 'https://github.com/walinejs/waline', target: '_blank', rel: 'noopener noreferrer' },
    ' Waline ',
    -1,
  )
var np = xn({
    __name: 'WalineComment',
    props: [
      'serverURL',
      'path',
      'meta',
      'requiredMeta',
      'dark',
      'commentSorting',
      'lang',
      'locale',
      'pageSize',
      'wordLimit',
      'emoji',
      'login',
      'highlighter',
      'texRenderer',
      'imageUploader',
      'search',
      'copyright',
      'recaptchaV3Key',
      'turnstileKey',
      'reaction',
    ],
    setup(e) {
      const t = e,
        n = { latest: 'insertedAt_desc', oldest: 'insertedAt_asc', hottest: 'like_desc' },
        r = Object.keys(n),
        i = Ci(),
        l = yo(),
        s = Z('loading'),
        o = Z(0),
        a = Z(1),
        c = Z(0),
        f = _e(() => Of(t)),
        p = Z(f.value.commentSorting),
        h = Z([]),
        m = Z(null),
        $ = Z(null),
        k = _e(() => Pf(f.value.dark)),
        S = _e(() => f.value.locale)
      Eu(k, { id: 'waline-darkmode' })
      let b
      const E = (K) => {
          var B
          const { serverURL: le, path: ne, pageSize: Q } = f.value,
            J = new AbortController()
          ;(s.value = 'loading'),
            b?.(),
            _o({
              serverURL: le,
              lang: f.value.lang,
              path: ne,
              pageSize: Q,
              sortBy: n[p.value],
              page: K,
              signal: J.signal,
              token: (B = i.value) == null ? void 0 : B.token,
            })
              .then((ve) => {
                ;(s.value = 'success'),
                  (o.value = ve.count),
                  h.value.push(...ve.data),
                  (a.value = K),
                  (c.value = ve.totalPages)
              })
              .catch((ve) => {
                ve.name !== 'AbortError' && (console.error(ve.message), (s.value = 'error'))
              }),
            (b = J.abort.bind(J))
        },
        j = () => E(a.value + 1),
        V = () => {
          ;(o.value = 0), (h.value = []), E(1)
        },
        z = (K) => {
          p.value !== K && ((p.value = K), V())
        },
        P = (K) => {
          m.value = K
        },
        W = (K) => {
          $.value = K
        },
        N = (K) => {
          if ($.value) ($.value.comment = K.comment), ($.value.orig = K.orig)
          else if ('rid' in K) {
            const B = h.value.find(({ objectId: le }) => le === K.rid)
            if (!B) return
            Array.isArray(B.children) || (B.children = []), B.children.push(K)
          } else h.value.unshift(K), (o.value += 1)
        },
        Se = async ({ comment: K, status: B }) => {
          var le
          if (K.status === B) return
          const { serverURL: ne, lang: Q } = f.value
          await Hn({
            serverURL: ne,
            lang: Q,
            token: (le = i.value) == null ? void 0 : le.token,
            objectId: K.objectId,
            comment: { status: B },
          }),
            (K.status = B)
        },
        q = async (K) => {
          var B
          if ('rid' in K) return
          const { serverURL: le, lang: ne } = f.value
          await Hn({
            serverURL: le,
            lang: ne,
            token: (B = i.value) == null ? void 0 : B.token,
            objectId: K.objectId,
            comment: { sticky: K.sticky ? 0 : 1 },
          }),
            (K.sticky = !K.sticky)
        },
        de = async ({ objectId: K }) => {
          var B
          if (!confirm('Are you sure you want to delete this comment?')) return
          const { serverURL: le, lang: ne } = f.value
          await xo({
            serverURL: le,
            lang: ne,
            token: (B = i.value) == null ? void 0 : B.token,
            objectId: K,
          }),
            h.value.some((Q, J) =>
              Q.objectId === K
                ? ((h.value = h.value.filter((ve, Ne) => Ne !== J)), !0)
                : Q.children.some((ve, Ne) =>
                    ve.objectId === K
                      ? ((h.value[J].children = Q.children.filter((Be, Ae) => Ae !== Ne)), !0)
                      : !1,
                  ),
            )
        },
        me = async (K) => {
          var B
          const { serverURL: le, lang: ne } = f.value,
            { objectId: Q } = K,
            J = l.value.includes(Q)
          await Hn({
            serverURL: le,
            lang: ne,
            objectId: Q,
            token: (B = i.value) == null ? void 0 : B.token,
            comment: { like: !J },
          }),
            J
              ? (l.value = l.value.filter((ve) => ve !== Q))
              : ((l.value = [...l.value, Q]),
                l.value.length > 50 && (l.value = l.value.slice(-50))),
            (K.like = (K.like || 0) + (J ? -1 : 1))
        }
      return (
        $s('config', f),
        Wt(() => {
          $e(
            () => [t.serverURL, t.path],
            () => V(),
            { immediate: !0 },
          )
        }),
        qt(() => b?.()),
        (K, B) => (
          L(),
          M('div', Fh, [
            ae(Td),
            m.value ? te('v-if', !0) : (L(), lt(bo, { key: 0, onLog: V, onSubmit: N })),
            U('div', Hh, [
              U('div', Nh, [
                o.value
                  ? (L(),
                    M('span', { key: 0, class: 'wl-num', textContent: se(o.value) }, null, 8, Bh))
                  : te('v-if', !0),
                tt(' ' + se(S.value.comment), 1),
              ]),
              U('ul', Wh, [
                (L(!0),
                M(
                  fe,
                  null,
                  Ue(
                    X(r),
                    (le) => (
                      L(),
                      M(
                        'li',
                        {
                          key: le,
                          class: ye([le === p.value ? 'active' : '']),
                          onClick: (ne) => z(le),
                        },
                        se(S.value[le]),
                        11,
                        qh,
                      )
                    ),
                  ),
                  128,
                )),
              ]),
            ]),
            U('div', Kh, [
              (L(!0),
              M(
                fe,
                null,
                Ue(
                  h.value,
                  (le) => (
                    L(),
                    lt(
                      Vh,
                      {
                        key: le.objectId,
                        'root-id': le.objectId,
                        comment: le,
                        reply: m.value,
                        edit: $.value,
                        onLog: V,
                        onReply: P,
                        onEdit: W,
                        onSubmit: N,
                        onStatus: Se,
                        onDelete: de,
                        onSticky: q,
                        onLike: me,
                      },
                      null,
                      8,
                      ['root-id', 'comment', 'reply', 'edit'],
                    )
                  ),
                ),
                128,
              )),
            ]),
            s.value === 'error'
              ? (L(),
                M('div', Gh, [
                  U(
                    'button',
                    {
                      type: 'button',
                      class: 'wl-btn',
                      onClick: V,
                      textContent: se(S.value.refresh),
                    },
                    null,
                    8,
                    Zh,
                  ),
                ]))
              : s.value === 'loading'
                ? (L(), M('div', Qh, [ae(X(bn), { size: 30 })]))
                : h.value.length
                  ? a.value < c.value
                    ? (L(),
                      M('div', Jh, [
                        U(
                          'button',
                          {
                            type: 'button',
                            class: 'wl-btn',
                            onClick: j,
                            textContent: se(S.value.more),
                          },
                          null,
                          8,
                          Xh,
                        ),
                      ]))
                    : te('v-if', !0)
                  : (L(),
                    M(
                      'div',
                      { key: 3, class: 'wl-empty', textContent: se(S.value.sofa) },
                      null,
                      8,
                      Yh,
                    )),
            f.value.copyright
              ? (L(), M('div', ep, [tt(' Powered by '), tp, tt(' v' + se(X(Dh)), 1)]))
              : te('v-if', !0),
          ])
        )
      )
    },
  }),
  rp = $n(np, [['__file', 'WalineComment.vue']])
const Hl = (e, t) => {
    t.forEach((n, r) => {
      const i = e[r].time
      typeof i == 'number' && (n.innerText = i.toString())
    })
  },
  ip = ({
    serverURL: e,
    path: t = window.location.pathname,
    selector: n = '.waline-pageview-count',
    update: r = !0,
    lang: i = navigator.language,
  }) => {
    const l = new AbortController(),
      s = Array.from(document.querySelectorAll(n)),
      o = (c) => {
        const f = Yr(c)
        return f !== null && t !== f
      },
      a = (c) =>
        So({ serverURL: cr(e), paths: c.map((f) => Yr(f) || t), lang: i, signal: l.signal })
          .then((f) => Hl(f, c))
          .catch(mo)
    if (r) {
      const c = s.filter((p) => !o(p)),
        f = s.filter(o)
      To({ serverURL: cr(e), path: t, lang: i }).then((p) => Hl(p, c)), f.length && a(f)
    } else a(s)
    return l.abort.bind(l)
  },
  lp = ({
    el: e = '#waline',
    path: t = window.location.pathname,
    comment: n = !1,
    pageview: r = !1,
    ...i
  }) => {
    const l = e ? Hf(e) : null
    if (e && !l) throw new Error("Option 'el' do not match any domElement!")
    if (!i.serverURL) throw new Error("Option 'serverURL' is missing!")
    const s = jt({ ...i }),
      o = jt({ comment: n, pageview: r, path: t }),
      a = () => {
        o.comment &&
          Xf({
            serverURL: s.serverURL,
            path: o.path,
            ...(Ft(o.comment) ? { selector: o.comment } : {}),
          })
      },
      c = () => {
        o.pageview &&
          ip({
            serverURL: s.serverURL,
            path: o.path,
            ...(Ft(o.pageview) ? { selector: o.pageview } : {}),
          })
      },
      f = l ? nu(() => ie(rp, { path: o.path, ...s })) : null
    f && f.mount(l)
    const p = Hi(a),
      h = Hi(c)
    return {
      el: l,
      update: ({ comment: m, pageview: $, path: k = window.location.pathname, ...S } = {}) => {
        Object.entries(S).forEach(([b, E]) => {
          s[b] = E
        }),
          (o.path = k),
          m !== void 0 && (o.comment = m),
          $ !== void 0 && (o.pageview = $)
      },
      destroy: () => {
        f?.unmount(), p(), h()
      },
    }
  }
function up({ serverURL: e }) {
  const t = $i.useRef(null)
  return (
    $i.useEffect(() => {
      const n = lp({
        el: t.current,
        serverURL: e,
        dark: "[data-theme='dark']",
        login: 'force',
        imageUploader: !1,
        search: !1,
        locale: { placeholder: '发条友善的评论吧（支持 Markdown 语法）…' },
        emoji: ['//unpkg.com/@waline/emojis@1.1.0/bilibili'],
      })
      return () => {
        t.current && n?.destroy()
      }
    }, [e]),
    wo.jsx('div', { ref: t })
  )
}
export { up as Waline }
