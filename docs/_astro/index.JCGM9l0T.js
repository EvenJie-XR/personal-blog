import { r as c, $ as je } from './index.BFw_thZa.js'
import { r as we, $ as Ke } from './index.CiZslDTt.js'
function w() {
  return (
    (w = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }),
    w.apply(this, arguments)
  )
}
function T(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (o) {
    if ((e?.(o), n === !1 || !o.defaultPrevented)) return t?.(o)
  }
}
function Ve(e, t) {
  typeof e == 'function' ? e(t) : e != null && (e.current = t)
}
function Oe(...e) {
  return (t) => e.forEach((n) => Ve(n, t))
}
function M(...e) {
  return c.useCallback(Oe(...e), e)
}
function He(e, t = []) {
  let n = []
  function r(a, s) {
    const i = c.createContext(s),
      d = n.length
    n = [...n, s]
    function f(l) {
      const { scope: p, children: m, ...y } = l,
        u = p?.[e][d] || i,
        h = c.useMemo(() => y, Object.values(y))
      return c.createElement(u.Provider, { value: h }, m)
    }
    function v(l, p) {
      const m = p?.[e][d] || i,
        y = c.useContext(m)
      if (y) return y
      if (s !== void 0) return s
      throw new Error(`\`${l}\` must be used within \`${a}\``)
    }
    return (f.displayName = a + 'Provider'), [f, v]
  }
  const o = () => {
    const a = n.map((s) => c.createContext(s))
    return function (i) {
      const d = i?.[e] || a
      return c.useMemo(() => ({ [`__scope${e}`]: { ...i, [e]: d } }), [i, d])
    }
  }
  return (o.scopeName = e), [r, Xe(o, ...t)]
}
function Xe(...e) {
  const t = e[0]
  if (e.length === 1) return t
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }))
    return function (a) {
      const s = r.reduce((i, { useScope: d, scopeName: f }) => {
        const l = d(a)[`__scope${f}`]
        return { ...i, ...l }
      }, {})
      return c.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s])
    }
  }
  return (n.scopeName = t.scopeName), n
}
const oe = globalThis?.document ? c.useLayoutEffect : () => {},
  Ye = je.useId || (() => {})
let ze = 0
function Z(e) {
  const [t, n] = c.useState(Ye())
  return (
    oe(() => {
      e || n((r) => r ?? String(ze++))
    }, [e]),
    e || (t ? `radix-${t}` : '')
  )
}
function A(e) {
  const t = c.useRef(e)
  return (
    c.useEffect(() => {
      t.current = e
    }),
    c.useMemo(
      () =>
        (...n) => {
          var r
          return (r = t.current) === null || r === void 0 ? void 0 : r.call(t, ...n)
        },
      [],
    )
  )
}
function Ge({ prop: e, defaultProp: t, onChange: n = () => {} }) {
  const [r, o] = Ze({ defaultProp: t, onChange: n }),
    a = e !== void 0,
    s = a ? e : r,
    i = A(n),
    d = c.useCallback(
      (f) => {
        if (a) {
          const l = typeof f == 'function' ? f(e) : f
          l !== e && i(l)
        } else o(f)
      },
      [a, e, o, i],
    )
  return [s, d]
}
function Ze({ defaultProp: e, onChange: t }) {
  const n = c.useState(e),
    [r] = n,
    o = c.useRef(r),
    a = A(t)
  return (
    c.useEffect(() => {
      o.current !== r && (a(r), (o.current = r))
    }, [r, o, a]),
    n
  )
}
const ue = c.forwardRef((e, t) => {
  const { children: n, ...r } = e,
    o = c.Children.toArray(n),
    a = o.find(Qe)
  if (a) {
    const s = a.props.children,
      i = o.map((d) =>
        d === a
          ? c.Children.count(s) > 1
            ? c.Children.only(null)
            : c.isValidElement(s)
              ? s.props.children
              : null
          : d,
      )
    return c.createElement(
      ce,
      w({}, r, { ref: t }),
      c.isValidElement(s) ? c.cloneElement(s, void 0, i) : null,
    )
  }
  return c.createElement(ce, w({}, r, { ref: t }), n)
})
ue.displayName = 'Slot'
const ce = c.forwardRef((e, t) => {
  const { children: n, ...r } = e
  return c.isValidElement(n)
    ? c.cloneElement(n, { ...Je(r, n.props), ref: t ? Oe(t, n.ref) : n.ref })
    : c.Children.count(n) > 1
      ? c.Children.only(null)
      : null
})
ce.displayName = 'SlotClone'
const qe = ({ children: e }) => c.createElement(c.Fragment, null, e)
function Qe(e) {
  return c.isValidElement(e) && e.type === qe
}
function Je(e, t) {
  const n = { ...t }
  for (const r in t) {
    const o = e[r],
      a = t[r]
    ;/^on[A-Z]/.test(r)
      ? o && a
        ? (n[r] = (...i) => {
            a(...i), o(...i)
          })
        : o && (n[r] = o)
      : r === 'style'
        ? (n[r] = { ...o, ...a })
        : r === 'className' && (n[r] = [o, a].filter(Boolean).join(' '))
  }
  return { ...e, ...n }
}
const et = [
    'a',
    'button',
    'div',
    'form',
    'h2',
    'h3',
    'img',
    'input',
    'label',
    'li',
    'nav',
    'ol',
    'p',
    'span',
    'svg',
    'ul',
  ],
  U = et.reduce((e, t) => {
    const n = c.forwardRef((r, o) => {
      const { asChild: a, ...s } = r,
        i = a ? ue : t
      return (
        c.useEffect(() => {
          window[Symbol.for('radix-ui')] = !0
        }, []),
        c.createElement(i, w({}, s, { ref: o }))
      )
    })
    return (n.displayName = `Primitive.${t}`), { ...e, [t]: n }
  }, {})
function tt(e, t) {
  e && we.flushSync(() => e.dispatchEvent(t))
}
function nt(e, t = globalThis?.document) {
  const n = A(e)
  c.useEffect(() => {
    const r = (o) => {
      o.key === 'Escape' && n(o)
    }
    return t.addEventListener('keydown', r), () => t.removeEventListener('keydown', r)
  }, [n, t])
}
const ae = 'dismissableLayer.update',
  rt = 'dismissableLayer.pointerDownOutside',
  ot = 'dismissableLayer.focusOutside'
let fe
const ct = c.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  at = c.forwardRef((e, t) => {
    var n
    const {
        disableOutsidePointerEvents: r = !1,
        onEscapeKeyDown: o,
        onPointerDownOutside: a,
        onFocusOutside: s,
        onInteractOutside: i,
        onDismiss: d,
        ...f
      } = e,
      v = c.useContext(ct),
      [l, p] = c.useState(null),
      m = (n = l?.ownerDocument) !== null && n !== void 0 ? n : globalThis?.document,
      [, y] = c.useState({}),
      u = M(t, (E) => p(E)),
      h = Array.from(v.layers),
      [b] = [...v.layersWithOutsidePointerEventsDisabled].slice(-1),
      S = h.indexOf(b),
      $ = l ? h.indexOf(l) : -1,
      g = v.layersWithOutsidePointerEventsDisabled.size > 0,
      C = $ >= S,
      F = it((E) => {
        const x = E.target,
          de = [...v.branches].some((G) => G.contains(x))
        !C || de || (a?.(E), i?.(E), E.defaultPrevented || d?.())
      }, m),
      P = st((E) => {
        const x = E.target
        ;[...v.branches].some((G) => G.contains(x)) || (s?.(E), i?.(E), E.defaultPrevented || d?.())
      }, m)
    return (
      nt((E) => {
        $ === v.layers.size - 1 && (o?.(E), !E.defaultPrevented && d && (E.preventDefault(), d()))
      }, m),
      c.useEffect(() => {
        if (l)
          return (
            r &&
              (v.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((fe = m.body.style.pointerEvents), (m.body.style.pointerEvents = 'none')),
              v.layersWithOutsidePointerEventsDisabled.add(l)),
            v.layers.add(l),
            ve(),
            () => {
              r &&
                v.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (m.body.style.pointerEvents = fe)
            }
          )
      }, [l, m, r, v]),
      c.useEffect(
        () => () => {
          l && (v.layers.delete(l), v.layersWithOutsidePointerEventsDisabled.delete(l), ve())
        },
        [l, v],
      ),
      c.useEffect(() => {
        const E = () => y({})
        return document.addEventListener(ae, E), () => document.removeEventListener(ae, E)
      }, []),
      c.createElement(
        U.div,
        w({}, f, {
          ref: u,
          style: { pointerEvents: g ? (C ? 'auto' : 'none') : void 0, ...e.style },
          onFocusCapture: T(e.onFocusCapture, P.onFocusCapture),
          onBlurCapture: T(e.onBlurCapture, P.onBlurCapture),
          onPointerDownCapture: T(e.onPointerDownCapture, F.onPointerDownCapture),
        }),
      )
    )
  })
function it(e, t = globalThis?.document) {
  const n = A(e),
    r = c.useRef(!1),
    o = c.useRef(() => {})
  return (
    c.useEffect(() => {
      const a = (i) => {
          if (i.target && !r.current) {
            let f = function () {
              Pe(rt, n, d, { discrete: !0 })
            }
            const d = { originalEvent: i }
            i.pointerType === 'touch'
              ? (t.removeEventListener('click', o.current),
                (o.current = f),
                t.addEventListener('click', o.current, { once: !0 }))
              : f()
          } else t.removeEventListener('click', o.current)
          r.current = !1
        },
        s = window.setTimeout(() => {
          t.addEventListener('pointerdown', a)
        }, 0)
      return () => {
        window.clearTimeout(s),
          t.removeEventListener('pointerdown', a),
          t.removeEventListener('click', o.current)
      }
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  )
}
function st(e, t = globalThis?.document) {
  const n = A(e),
    r = c.useRef(!1)
  return (
    c.useEffect(() => {
      const o = (a) => {
        a.target && !r.current && Pe(ot, n, { originalEvent: a }, { discrete: !1 })
      }
      return t.addEventListener('focusin', o), () => t.removeEventListener('focusin', o)
    }, [t, n]),
    { onFocusCapture: () => (r.current = !0), onBlurCapture: () => (r.current = !1) }
  )
}
function ve() {
  const e = new CustomEvent(ae)
  document.dispatchEvent(e)
}
function Pe(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target,
    a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n })
  t && o.addEventListener(e, t, { once: !0 }), r ? tt(o, a) : o.dispatchEvent(a)
}
const q = 'focusScope.autoFocusOnMount',
  Q = 'focusScope.autoFocusOnUnmount',
  me = { bubbles: !1, cancelable: !0 },
  ut = c.forwardRef((e, t) => {
    const { loop: n = !1, trapped: r = !1, onMountAutoFocus: o, onUnmountAutoFocus: a, ...s } = e,
      [i, d] = c.useState(null),
      f = A(o),
      v = A(a),
      l = c.useRef(null),
      p = M(t, (u) => d(u)),
      m = c.useRef({
        paused: !1,
        pause() {
          this.paused = !0
        },
        resume() {
          this.paused = !1
        },
      }).current
    c.useEffect(() => {
      if (r) {
        let u = function ($) {
            if (m.paused || !i) return
            const g = $.target
            i.contains(g) ? (l.current = g) : R(l.current, { select: !0 })
          },
          h = function ($) {
            if (m.paused || !i) return
            const g = $.relatedTarget
            g !== null && (i.contains(g) || R(l.current, { select: !0 }))
          },
          b = function ($) {
            if (document.activeElement === document.body)
              for (const C of $) C.removedNodes.length > 0 && R(i)
          }
        document.addEventListener('focusin', u), document.addEventListener('focusout', h)
        const S = new MutationObserver(b)
        return (
          i && S.observe(i, { childList: !0, subtree: !0 }),
          () => {
            document.removeEventListener('focusin', u),
              document.removeEventListener('focusout', h),
              S.disconnect()
          }
        )
      }
    }, [r, i, m.paused]),
      c.useEffect(() => {
        if (i) {
          he.add(m)
          const u = document.activeElement
          if (!i.contains(u)) {
            const b = new CustomEvent(q, me)
            i.addEventListener(q, f),
              i.dispatchEvent(b),
              b.defaultPrevented ||
                (lt(pt(Re(i)), { select: !0 }), document.activeElement === u && R(i))
          }
          return () => {
            i.removeEventListener(q, f),
              setTimeout(() => {
                const b = new CustomEvent(Q, me)
                i.addEventListener(Q, v),
                  i.dispatchEvent(b),
                  b.defaultPrevented || R(u ?? document.body, { select: !0 }),
                  i.removeEventListener(Q, v),
                  he.remove(m)
              }, 0)
          }
        }
      }, [i, f, v, m])
    const y = c.useCallback(
      (u) => {
        if ((!n && !r) || m.paused) return
        const h = u.key === 'Tab' && !u.altKey && !u.ctrlKey && !u.metaKey,
          b = document.activeElement
        if (h && b) {
          const S = u.currentTarget,
            [$, g] = dt(S)
          $ && g
            ? !u.shiftKey && b === g
              ? (u.preventDefault(), n && R($, { select: !0 }))
              : u.shiftKey && b === $ && (u.preventDefault(), n && R(g, { select: !0 }))
            : b === S && u.preventDefault()
        }
      },
      [n, r, m.paused],
    )
    return c.createElement(U.div, w({ tabIndex: -1 }, s, { ref: p, onKeyDown: y }))
  })
function lt(e, { select: t = !1 } = {}) {
  const n = document.activeElement
  for (const r of e) if ((R(r, { select: t }), document.activeElement !== n)) return
}
function dt(e) {
  const t = Re(e),
    n = pe(t, e),
    r = pe(t.reverse(), e)
  return [n, r]
}
function Re(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === 'INPUT' && r.type === 'hidden'
        return r.disabled || r.hidden || o
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP
      },
    })
  for (; n.nextNode(); ) t.push(n.currentNode)
  return t
}
function pe(e, t) {
  for (const n of e) if (!ft(n, { upTo: t })) return n
}
function ft(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === 'hidden') return !0
  for (; e; ) {
    if (t !== void 0 && e === t) return !1
    if (getComputedStyle(e).display === 'none') return !0
    e = e.parentElement
  }
  return !1
}
function vt(e) {
  return e instanceof HTMLInputElement && 'select' in e
}
function R(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement
    e.focus({ preventScroll: !0 }), e !== n && vt(e) && t && e.select()
  }
}
const he = mt()
function mt() {
  let e = []
  return {
    add(t) {
      const n = e[0]
      t !== n && n?.pause(), (e = be(e, t)), e.unshift(t)
    },
    remove(t) {
      var n
      ;(e = be(e, t)), (n = e[0]) === null || n === void 0 || n.resume()
    },
  }
}
function be(e, t) {
  const n = [...e],
    r = n.indexOf(t)
  return r !== -1 && n.splice(r, 1), n
}
function pt(e) {
  return e.filter((t) => t.tagName !== 'A')
}
const ht = c.forwardRef((e, t) => {
  var n
  const {
    container: r = globalThis == null || (n = globalThis.document) === null || n === void 0
      ? void 0
      : n.body,
    ...o
  } = e
  return r ? Ke.createPortal(c.createElement(U.div, w({}, o, { ref: t })), r) : null
})
function bt(e, t) {
  return c.useReducer((n, r) => {
    const o = t[n][r]
    return o ?? n
  }, e)
}
const Y = (e) => {
  const { present: t, children: n } = e,
    r = $t(t),
    o = typeof n == 'function' ? n({ present: r.isPresent }) : c.Children.only(n),
    a = M(r.ref, o.ref)
  return typeof n == 'function' || r.isPresent ? c.cloneElement(o, { ref: a }) : null
}
Y.displayName = 'Presence'
function $t(e) {
  const [t, n] = c.useState(),
    r = c.useRef({}),
    o = c.useRef(e),
    a = c.useRef('none'),
    s = e ? 'mounted' : 'unmounted',
    [i, d] = bt(s, {
      mounted: { UNMOUNT: 'unmounted', ANIMATION_OUT: 'unmountSuspended' },
      unmountSuspended: { MOUNT: 'mounted', ANIMATION_END: 'unmounted' },
      unmounted: { MOUNT: 'mounted' },
    })
  return (
    c.useEffect(() => {
      const f = W(r.current)
      a.current = i === 'mounted' ? f : 'none'
    }, [i]),
    oe(() => {
      const f = r.current,
        v = o.current
      if (v !== e) {
        const p = a.current,
          m = W(f)
        e
          ? d('MOUNT')
          : m === 'none' || f?.display === 'none'
            ? d('UNMOUNT')
            : d(v && p !== m ? 'ANIMATION_OUT' : 'UNMOUNT'),
          (o.current = e)
      }
    }, [e, d]),
    oe(() => {
      if (t) {
        const f = (l) => {
            const m = W(r.current).includes(l.animationName)
            l.target === t && m && we.flushSync(() => d('ANIMATION_END'))
          },
          v = (l) => {
            l.target === t && (a.current = W(r.current))
          }
        return (
          t.addEventListener('animationstart', v),
          t.addEventListener('animationcancel', f),
          t.addEventListener('animationend', f),
          () => {
            t.removeEventListener('animationstart', v),
              t.removeEventListener('animationcancel', f),
              t.removeEventListener('animationend', f)
          }
        )
      } else d('ANIMATION_END')
    }, [t, d]),
    {
      isPresent: ['mounted', 'unmountSuspended'].includes(i),
      ref: c.useCallback((f) => {
        f && (r.current = getComputedStyle(f)), n(f)
      }, []),
    }
  )
}
function W(e) {
  return e?.animationName || 'none'
}
let J = 0
function gt() {
  c.useEffect(() => {
    var e, t
    const n = document.querySelectorAll('[data-radix-focus-guard]')
    return (
      document.body.insertAdjacentElement(
        'afterbegin',
        (e = n[0]) !== null && e !== void 0 ? e : $e(),
      ),
      document.body.insertAdjacentElement(
        'beforeend',
        (t = n[1]) !== null && t !== void 0 ? t : $e(),
      ),
      J++,
      () => {
        J === 1 && document.querySelectorAll('[data-radix-focus-guard]').forEach((r) => r.remove()),
          J--
      }
    )
  }, [])
}
function $e() {
  const e = document.createElement('span')
  return (
    e.setAttribute('data-radix-focus-guard', ''),
    (e.tabIndex = 0),
    (e.style.cssText = 'outline: none; opacity: 0; position: fixed; pointer-events: none'),
    e
  )
}
var O = function () {
  return (
    (O =
      Object.assign ||
      function (t) {
        for (var n, r = 1, o = arguments.length; r < o; r++) {
          n = arguments[r]
          for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a])
        }
        return t
      }),
    O.apply(this, arguments)
  )
}
function De(e, t) {
  var n = {}
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r])
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]])
  return n
}
function Et(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, a; r < o; r++)
      (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), (a[r] = t[r]))
  return e.concat(a || Array.prototype.slice.call(t))
}
var H = 'right-scroll-bar-position',
  X = 'width-before-scroll-bar',
  yt = 'with-scroll-bars-hidden',
  Ct = '--removed-body-scroll-bar-size'
function ee(e, t) {
  return typeof e == 'function' ? e(t) : e && (e.current = t), e
}
function St(e, t) {
  var n = c.useState(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value
        },
        set current(r) {
          var o = n.value
          o !== r && ((n.value = r), n.callback(r, o))
        },
      },
    }
  })[0]
  return (n.callback = t), n.facade
}
var wt = typeof window < 'u' ? c.useLayoutEffect : c.useEffect,
  ge = new WeakMap()
function Ot(e, t) {
  var n = St(t || null, function (r) {
    return e.forEach(function (o) {
      return ee(o, r)
    })
  })
  return (
    wt(
      function () {
        var r = ge.get(n)
        if (r) {
          var o = new Set(r),
            a = new Set(e),
            s = n.current
          o.forEach(function (i) {
            a.has(i) || ee(i, null)
          }),
            a.forEach(function (i) {
              o.has(i) || ee(i, s)
            })
        }
        ge.set(n, e)
      },
      [e],
    ),
    n
  )
}
function Pt(e) {
  return e
}
function Rt(e, t) {
  t === void 0 && (t = Pt)
  var n = [],
    r = !1,
    o = {
      read: function () {
        if (r)
          throw new Error(
            'Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.',
          )
        return n.length ? n[n.length - 1] : e
      },
      useMedium: function (a) {
        var s = t(a, r)
        return (
          n.push(s),
          function () {
            n = n.filter(function (i) {
              return i !== s
            })
          }
        )
      },
      assignSyncMedium: function (a) {
        for (r = !0; n.length; ) {
          var s = n
          ;(n = []), s.forEach(a)
        }
        n = {
          push: function (i) {
            return a(i)
          },
          filter: function () {
            return n
          },
        }
      },
      assignMedium: function (a) {
        r = !0
        var s = []
        if (n.length) {
          var i = n
          ;(n = []), i.forEach(a), (s = n)
        }
        var d = function () {
            var v = s
            ;(s = []), v.forEach(a)
          },
          f = function () {
            return Promise.resolve().then(d)
          }
        f(),
          (n = {
            push: function (v) {
              s.push(v), f()
            },
            filter: function (v) {
              return (s = s.filter(v)), n
            },
          })
      },
    }
  return o
}
function Dt(e) {
  e === void 0 && (e = {})
  var t = Rt(null)
  return (t.options = O({ async: !0, ssr: !1 }, e)), t
}
var xe = function (e) {
  var t = e.sideCar,
    n = De(e, ['sideCar'])
  if (!t) throw new Error('Sidecar: please provide `sideCar` property to import the right car')
  var r = t.read()
  if (!r) throw new Error('Sidecar medium not found')
  return c.createElement(r, O({}, n))
}
xe.isSideCarExport = !0
function xt(e, t) {
  return e.useMedium(t), xe
}
var Te = Dt(),
  te = function () {},
  z = c.forwardRef(function (e, t) {
    var n = c.useRef(null),
      r = c.useState({ onScrollCapture: te, onWheelCapture: te, onTouchMoveCapture: te }),
      o = r[0],
      a = r[1],
      s = e.forwardProps,
      i = e.children,
      d = e.className,
      f = e.removeScrollBar,
      v = e.enabled,
      l = e.shards,
      p = e.sideCar,
      m = e.noIsolation,
      y = e.inert,
      u = e.allowPinchZoom,
      h = e.as,
      b = h === void 0 ? 'div' : h,
      S = De(e, [
        'forwardProps',
        'children',
        'className',
        'removeScrollBar',
        'enabled',
        'shards',
        'sideCar',
        'noIsolation',
        'inert',
        'allowPinchZoom',
        'as',
      ]),
      $ = p,
      g = Ot([n, t]),
      C = O(O({}, S), o)
    return c.createElement(
      c.Fragment,
      null,
      v &&
        c.createElement($, {
          sideCar: Te,
          removeScrollBar: f,
          shards: l,
          noIsolation: m,
          inert: y,
          setCallbacks: a,
          allowPinchZoom: !!u,
          lockRef: n,
        }),
      s
        ? c.cloneElement(c.Children.only(i), O(O({}, C), { ref: g }))
        : c.createElement(b, O({}, C, { className: d, ref: g }), i),
    )
  })
z.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }
z.classNames = { fullWidth: X, zeroRight: H }
var Tt = function () {
  if (typeof __webpack_nonce__ < 'u') return __webpack_nonce__
}
function At() {
  if (!document) return null
  var e = document.createElement('style')
  e.type = 'text/css'
  var t = Tt()
  return t && e.setAttribute('nonce', t), e
}
function Nt(e, t) {
  e.styleSheet ? (e.styleSheet.cssText = t) : e.appendChild(document.createTextNode(t))
}
function _t(e) {
  var t = document.head || document.getElementsByTagName('head')[0]
  t.appendChild(e)
}
var It = function () {
    var e = 0,
      t = null
    return {
      add: function (n) {
        e == 0 && (t = At()) && (Nt(t, n), _t(t)), e++
      },
      remove: function () {
        e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null))
      },
    }
  },
  Lt = function () {
    var e = It()
    return function (t, n) {
      c.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove()
            }
          )
        },
        [t && n],
      )
    }
  },
  Ae = function () {
    var e = Lt(),
      t = function (n) {
        var r = n.styles,
          o = n.dynamic
        return e(r, o), null
      }
    return t
  },
  Mt = { left: 0, top: 0, right: 0, gap: 0 },
  ne = function (e) {
    return parseInt(e || '', 10) || 0
  },
  Ft = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === 'padding' ? 'paddingLeft' : 'marginLeft'],
      r = t[e === 'padding' ? 'paddingTop' : 'marginTop'],
      o = t[e === 'padding' ? 'paddingRight' : 'marginRight']
    return [ne(n), ne(r), ne(o)]
  },
  kt = function (e) {
    if ((e === void 0 && (e = 'margin'), typeof window > 'u')) return Mt
    var t = Ft(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth
    return { left: t[0], top: t[1], right: t[2], gap: Math.max(0, r - n + t[2] - t[0]) }
  },
  Ut = Ae(),
  L = 'data-scroll-locked',
  Wt = function (e, t, n, r) {
    var o = e.left,
      a = e.top,
      s = e.right,
      i = e.gap
    return (
      n === void 0 && (n = 'margin'),
      `
  .`
        .concat(
          yt,
          ` {
   overflow: hidden `,
        )
        .concat(
          r,
          `;
   padding-right: `,
        )
        .concat(i, 'px ')
        .concat(
          r,
          `;
  }
  body[`,
        )
        .concat(
          L,
          `] {
    overflow: hidden `,
        )
        .concat(
          r,
          `;
    overscroll-behavior: contain;
    `,
        )
        .concat(
          [
            t && 'position: relative '.concat(r, ';'),
            n === 'margin' &&
              `
    padding-left: `
                .concat(
                  o,
                  `px;
    padding-top: `,
                )
                .concat(
                  a,
                  `px;
    padding-right: `,
                )
                .concat(
                  s,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `,
                )
                .concat(i, 'px ')
                .concat(
                  r,
                  `;
    `,
                ),
            n === 'padding' && 'padding-right: '.concat(i, 'px ').concat(r, ';'),
          ]
            .filter(Boolean)
            .join(''),
          `
  }
  
  .`,
        )
        .concat(
          H,
          ` {
    right: `,
        )
        .concat(i, 'px ')
        .concat(
          r,
          `;
  }
  
  .`,
        )
        .concat(
          X,
          ` {
    margin-right: `,
        )
        .concat(i, 'px ')
        .concat(
          r,
          `;
  }
  
  .`,
        )
        .concat(H, ' .')
        .concat(
          H,
          ` {
    right: 0 `,
        )
        .concat(
          r,
          `;
  }
  
  .`,
        )
        .concat(X, ' .')
        .concat(
          X,
          ` {
    margin-right: 0 `,
        )
        .concat(
          r,
          `;
  }
  
  body[`,
        )
        .concat(
          L,
          `] {
    `,
        )
        .concat(Ct, ': ')
        .concat(
          i,
          `px;
  }
`,
        )
    )
  },
  Ee = function () {
    var e = parseInt(document.body.getAttribute(L) || '0', 10)
    return isFinite(e) ? e : 0
  },
  Bt = function () {
    c.useEffect(function () {
      return (
        document.body.setAttribute(L, (Ee() + 1).toString()),
        function () {
          var e = Ee() - 1
          e <= 0 ? document.body.removeAttribute(L) : document.body.setAttribute(L, e.toString())
        }
      )
    }, [])
  },
  jt = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      o = r === void 0 ? 'margin' : r
    Bt()
    var a = c.useMemo(
      function () {
        return kt(o)
      },
      [o],
    )
    return c.createElement(Ut, { styles: Wt(a, !t, o, n ? '' : '!important') })
  },
  ie = !1
if (typeof window < 'u')
  try {
    var B = Object.defineProperty({}, 'passive', {
      get: function () {
        return (ie = !0), !0
      },
    })
    window.addEventListener('test', B, B), window.removeEventListener('test', B, B)
  } catch {
    ie = !1
  }
var N = ie ? { passive: !1 } : !1,
  Kt = function (e) {
    return e.tagName === 'TEXTAREA'
  },
  Ne = function (e, t) {
    var n = window.getComputedStyle(e)
    return n[t] !== 'hidden' && !(n.overflowY === n.overflowX && !Kt(e) && n[t] === 'visible')
  },
  Vt = function (e) {
    return Ne(e, 'overflowY')
  },
  Ht = function (e) {
    return Ne(e, 'overflowX')
  },
  ye = function (e, t) {
    var n = t
    do {
      typeof ShadowRoot < 'u' && n instanceof ShadowRoot && (n = n.host)
      var r = _e(e, n)
      if (r) {
        var o = Ie(e, n),
          a = o[1],
          s = o[2]
        if (a > s) return !0
      }
      n = n.parentNode
    } while (n && n !== document.body)
    return !1
  },
  Xt = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      r = e.clientHeight
    return [t, n, r]
  },
  Yt = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      r = e.clientWidth
    return [t, n, r]
  },
  _e = function (e, t) {
    return e === 'v' ? Vt(t) : Ht(t)
  },
  Ie = function (e, t) {
    return e === 'v' ? Xt(t) : Yt(t)
  },
  zt = function (e, t) {
    return e === 'h' && t === 'rtl' ? -1 : 1
  },
  Gt = function (e, t, n, r, o) {
    var a = zt(e, window.getComputedStyle(t).direction),
      s = a * r,
      i = n.target,
      d = t.contains(i),
      f = !1,
      v = s > 0,
      l = 0,
      p = 0
    do {
      var m = Ie(e, i),
        y = m[0],
        u = m[1],
        h = m[2],
        b = u - h - a * y
      ;(y || b) && _e(e, i) && ((l += b), (p += y)), (i = i.parentNode)
    } while ((!d && i !== document.body) || (d && (t.contains(i) || t === i)))
    return (
      ((v && ((o && l === 0) || (!o && s > l))) || (!v && ((o && p === 0) || (!o && -s > p)))) &&
        (f = !0),
      f
    )
  },
  j = function (e) {
    return 'changedTouches' in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0]
  },
  Ce = function (e) {
    return [e.deltaX, e.deltaY]
  },
  Se = function (e) {
    return e && 'current' in e ? e.current : e
  },
  Zt = function (e, t) {
    return e[0] === t[0] && e[1] === t[1]
  },
  qt = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`,
      )
      .concat(
        e,
        ` {pointer-events: all;}
`,
      )
  },
  Qt = 0,
  _ = []
function Jt(e) {
  var t = c.useRef([]),
    n = c.useRef([0, 0]),
    r = c.useRef(),
    o = c.useState(Qt++)[0],
    a = c.useState(function () {
      return Ae()
    })[0],
    s = c.useRef(e)
  c.useEffect(
    function () {
      s.current = e
    },
    [e],
  ),
    c.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add('block-interactivity-'.concat(o))
          var u = Et([e.lockRef.current], (e.shards || []).map(Se), !0).filter(Boolean)
          return (
            u.forEach(function (h) {
              return h.classList.add('allow-interactivity-'.concat(o))
            }),
            function () {
              document.body.classList.remove('block-interactivity-'.concat(o)),
                u.forEach(function (h) {
                  return h.classList.remove('allow-interactivity-'.concat(o))
                })
            }
          )
        }
      },
      [e.inert, e.lockRef.current, e.shards],
    )
  var i = c.useCallback(function (u, h) {
      if ('touches' in u && u.touches.length === 2) return !s.current.allowPinchZoom
      var b = j(u),
        S = n.current,
        $ = 'deltaX' in u ? u.deltaX : S[0] - b[0],
        g = 'deltaY' in u ? u.deltaY : S[1] - b[1],
        C,
        F = u.target,
        P = Math.abs($) > Math.abs(g) ? 'h' : 'v'
      if ('touches' in u && P === 'h' && F.type === 'range') return !1
      var E = ye(P, F)
      if (!E) return !0
      if ((E ? (C = P) : ((C = P === 'v' ? 'h' : 'v'), (E = ye(P, F))), !E)) return !1
      if ((!r.current && 'changedTouches' in u && ($ || g) && (r.current = C), !C)) return !0
      var x = r.current || C
      return Gt(x, h, u, x === 'h' ? $ : g, !0)
    }, []),
    d = c.useCallback(function (u) {
      var h = u
      if (!(!_.length || _[_.length - 1] !== a)) {
        var b = 'deltaY' in h ? Ce(h) : j(h),
          S = t.current.filter(function (C) {
            return C.name === h.type && C.target === h.target && Zt(C.delta, b)
          })[0]
        if (S && S.should) {
          h.cancelable && h.preventDefault()
          return
        }
        if (!S) {
          var $ = (s.current.shards || [])
              .map(Se)
              .filter(Boolean)
              .filter(function (C) {
                return C.contains(h.target)
              }),
            g = $.length > 0 ? i(h, $[0]) : !s.current.noIsolation
          g && h.cancelable && h.preventDefault()
        }
      }
    }, []),
    f = c.useCallback(function (u, h, b, S) {
      var $ = { name: u, delta: h, target: b, should: S }
      t.current.push($),
        setTimeout(function () {
          t.current = t.current.filter(function (g) {
            return g !== $
          })
        }, 1)
    }, []),
    v = c.useCallback(function (u) {
      ;(n.current = j(u)), (r.current = void 0)
    }, []),
    l = c.useCallback(function (u) {
      f(u.type, Ce(u), u.target, i(u, e.lockRef.current))
    }, []),
    p = c.useCallback(function (u) {
      f(u.type, j(u), u.target, i(u, e.lockRef.current))
    }, [])
  c.useEffect(function () {
    return (
      _.push(a),
      e.setCallbacks({ onScrollCapture: l, onWheelCapture: l, onTouchMoveCapture: p }),
      document.addEventListener('wheel', d, N),
      document.addEventListener('touchmove', d, N),
      document.addEventListener('touchstart', v, N),
      function () {
        ;(_ = _.filter(function (u) {
          return u !== a
        })),
          document.removeEventListener('wheel', d, N),
          document.removeEventListener('touchmove', d, N),
          document.removeEventListener('touchstart', v, N)
      }
    )
  }, [])
  var m = e.removeScrollBar,
    y = e.inert
  return c.createElement(
    c.Fragment,
    null,
    y ? c.createElement(a, { styles: qt(o) }) : null,
    m ? c.createElement(jt, { gapMode: 'margin' }) : null,
  )
}
const en = xt(Te, Jt)
var Le = c.forwardRef(function (e, t) {
  return c.createElement(z, O({}, e, { ref: t, sideCar: en }))
})
Le.classNames = z.classNames
const tn = Le
var nn = function (e) {
    if (typeof document > 'u') return null
    var t = Array.isArray(e) ? e[0] : e
    return t.ownerDocument.body
  },
  I = new WeakMap(),
  K = new WeakMap(),
  V = {},
  re = 0,
  Me = function (e) {
    return e && (e.host || Me(e.parentNode))
  },
  rn = function (e, t) {
    return t
      .map(function (n) {
        if (e.contains(n)) return n
        var r = Me(n)
        return r && e.contains(r)
          ? r
          : (console.error('aria-hidden', n, 'in not contained inside', e, '. Doing nothing'), null)
      })
      .filter(function (n) {
        return !!n
      })
  },
  on = function (e, t, n, r) {
    var o = rn(t, Array.isArray(e) ? e : [e])
    V[n] || (V[n] = new WeakMap())
    var a = V[n],
      s = [],
      i = new Set(),
      d = new Set(o),
      f = function (l) {
        !l || i.has(l) || (i.add(l), f(l.parentNode))
      }
    o.forEach(f)
    var v = function (l) {
      !l ||
        d.has(l) ||
        Array.prototype.forEach.call(l.children, function (p) {
          if (i.has(p)) v(p)
          else
            try {
              var m = p.getAttribute(r),
                y = m !== null && m !== 'false',
                u = (I.get(p) || 0) + 1,
                h = (a.get(p) || 0) + 1
              I.set(p, u),
                a.set(p, h),
                s.push(p),
                u === 1 && y && K.set(p, !0),
                h === 1 && p.setAttribute(n, 'true'),
                y || p.setAttribute(r, 'true')
            } catch (b) {
              console.error('aria-hidden: cannot operate on ', p, b)
            }
        })
    }
    return (
      v(t),
      i.clear(),
      re++,
      function () {
        s.forEach(function (l) {
          var p = I.get(l) - 1,
            m = a.get(l) - 1
          I.set(l, p),
            a.set(l, m),
            p || (K.has(l) || l.removeAttribute(r), K.delete(l)),
            m || l.removeAttribute(n)
        }),
          re--,
          re || ((I = new WeakMap()), (I = new WeakMap()), (K = new WeakMap()), (V = {}))
      }
    )
  },
  cn = function (e, t, n) {
    n === void 0 && (n = 'data-aria-hidden')
    var r = Array.from(Array.isArray(e) ? e : [e]),
      o = t || nn(e)
    return o
      ? (r.push.apply(r, Array.from(o.querySelectorAll('[aria-live]'))), on(r, o, n, 'aria-hidden'))
      : function () {
          return null
        }
  }
const Fe = 'Dialog',
  [ke, En] = He(Fe),
  [an, D] = ke(Fe),
  sn = (e) => {
    const {
        __scopeDialog: t,
        children: n,
        open: r,
        defaultOpen: o,
        onOpenChange: a,
        modal: s = !0,
      } = e,
      i = c.useRef(null),
      d = c.useRef(null),
      [f = !1, v] = Ge({ prop: r, defaultProp: o, onChange: a })
    return c.createElement(
      an,
      {
        scope: t,
        triggerRef: i,
        contentRef: d,
        contentId: Z(),
        titleId: Z(),
        descriptionId: Z(),
        open: f,
        onOpenChange: v,
        onOpenToggle: c.useCallback(() => v((l) => !l), [v]),
        modal: s,
      },
      n,
    )
  },
  un = 'DialogTrigger',
  ln = c.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = D(un, n),
      a = M(t, o.triggerRef)
    return c.createElement(
      U.button,
      w(
        {
          type: 'button',
          'aria-haspopup': 'dialog',
          'aria-expanded': o.open,
          'aria-controls': o.contentId,
          'data-state': le(o.open),
        },
        r,
        { ref: a, onClick: T(e.onClick, o.onOpenToggle) },
      ),
    )
  }),
  Ue = 'DialogPortal',
  [dn, We] = ke(Ue, { forceMount: void 0 }),
  fn = (e) => {
    const { __scopeDialog: t, forceMount: n, children: r, container: o } = e,
      a = D(Ue, t)
    return c.createElement(
      dn,
      { scope: t, forceMount: n },
      c.Children.map(r, (s) =>
        c.createElement(
          Y,
          { present: n || a.open },
          c.createElement(ht, { asChild: !0, container: o }, s),
        ),
      ),
    )
  },
  se = 'DialogOverlay',
  vn = c.forwardRef((e, t) => {
    const n = We(se, e.__scopeDialog),
      { forceMount: r = n.forceMount, ...o } = e,
      a = D(se, e.__scopeDialog)
    return a.modal
      ? c.createElement(Y, { present: r || a.open }, c.createElement(mn, w({}, o, { ref: t })))
      : null
  }),
  mn = c.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = D(se, n)
    return c.createElement(
      tn,
      { as: ue, allowPinchZoom: !0, shards: [o.contentRef] },
      c.createElement(
        U.div,
        w({ 'data-state': le(o.open) }, r, {
          ref: t,
          style: { pointerEvents: 'auto', ...r.style },
        }),
      ),
    )
  }),
  k = 'DialogContent',
  pn = c.forwardRef((e, t) => {
    const n = We(k, e.__scopeDialog),
      { forceMount: r = n.forceMount, ...o } = e,
      a = D(k, e.__scopeDialog)
    return c.createElement(
      Y,
      { present: r || a.open },
      a.modal
        ? c.createElement(hn, w({}, o, { ref: t }))
        : c.createElement(bn, w({}, o, { ref: t })),
    )
  }),
  hn = c.forwardRef((e, t) => {
    const n = D(k, e.__scopeDialog),
      r = c.useRef(null),
      o = M(t, n.contentRef, r)
    return (
      c.useEffect(() => {
        const a = r.current
        if (a) return cn(a)
      }, []),
      c.createElement(
        Be,
        w({}, e, {
          ref: o,
          trapFocus: n.open,
          disableOutsidePointerEvents: !0,
          onCloseAutoFocus: T(e.onCloseAutoFocus, (a) => {
            var s
            a.preventDefault(), (s = n.triggerRef.current) === null || s === void 0 || s.focus()
          }),
          onPointerDownOutside: T(e.onPointerDownOutside, (a) => {
            const s = a.detail.originalEvent,
              i = s.button === 0 && s.ctrlKey === !0
            ;(s.button === 2 || i) && a.preventDefault()
          }),
          onFocusOutside: T(e.onFocusOutside, (a) => a.preventDefault()),
        }),
      )
    )
  }),
  bn = c.forwardRef((e, t) => {
    const n = D(k, e.__scopeDialog),
      r = c.useRef(!1),
      o = c.useRef(!1)
    return c.createElement(
      Be,
      w({}, e, {
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (a) => {
          var s
          if (
            ((s = e.onCloseAutoFocus) === null || s === void 0 || s.call(e, a), !a.defaultPrevented)
          ) {
            var i
            r.current || (i = n.triggerRef.current) === null || i === void 0 || i.focus(),
              a.preventDefault()
          }
          ;(r.current = !1), (o.current = !1)
        },
        onInteractOutside: (a) => {
          var s, i
          ;(s = e.onInteractOutside) === null || s === void 0 || s.call(e, a),
            a.defaultPrevented ||
              ((r.current = !0), a.detail.originalEvent.type === 'pointerdown' && (o.current = !0))
          const d = a.target
          ;((i = n.triggerRef.current) === null || i === void 0 ? void 0 : i.contains(d)) &&
            a.preventDefault(),
            a.detail.originalEvent.type === 'focusin' && o.current && a.preventDefault()
        },
      }),
    )
  }),
  Be = c.forwardRef((e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...s } = e,
      i = D(k, n),
      d = c.useRef(null),
      f = M(t, d)
    return (
      gt(),
      c.createElement(
        c.Fragment,
        null,
        c.createElement(
          ut,
          { asChild: !0, loop: !0, trapped: r, onMountAutoFocus: o, onUnmountAutoFocus: a },
          c.createElement(
            at,
            w(
              {
                role: 'dialog',
                id: i.contentId,
                'aria-describedby': i.descriptionId,
                'aria-labelledby': i.titleId,
                'data-state': le(i.open),
              },
              s,
              { ref: f, onDismiss: () => i.onOpenChange(!1) },
            ),
          ),
        ),
        !1,
      )
    )
  })
function le(e) {
  return e ? 'open' : 'closed'
}
const yn = sn,
  Cn = ln,
  Sn = fn,
  wn = vn,
  On = pn
export { yn as $, Sn as a, wn as b, On as c, Cn as d }
