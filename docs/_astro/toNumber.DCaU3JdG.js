var y = typeof global == 'object' && global && global.Object === Object && global,
  g = typeof self == 'object' && self && self.Object === Object && self,
  j = y || g || Function('return this')(),
  o = j.Symbol,
  a = Object.prototype,
  p = a.hasOwnProperty,
  d = a.toString,
  e = o ? o.toStringTag : void 0
function l(t) {
  var r = p.call(t, e),
    n = t[e]
  try {
    t[e] = void 0
    var b = !0
  } catch {}
  var s = d.call(t)
  return b && (r ? (t[e] = n) : delete t[e]), s
}
var O = Object.prototype,
  S = O.toString
function T(t) {
  return S.call(t)
}
var m = '[object Null]',
  u = '[object Undefined]',
  i = o ? o.toStringTag : void 0
function $(t) {
  return t == null ? (t === void 0 ? u : m) : i && i in Object(t) ? l(t) : T(t)
}
function h(t) {
  return t != null && typeof t == 'object'
}
var I = '[object Symbol]'
function w(t) {
  return typeof t == 'symbol' || (h(t) && $(t) == I)
}
var x = /\s/
function P(t) {
  for (var r = t.length; r-- && x.test(t.charAt(r)); );
  return r
}
var N = /^\s+/
function B(t) {
  return t && t.slice(0, P(t) + 1).replace(N, '')
}
function c(t) {
  var r = typeof t
  return t != null && (r == 'object' || r == 'function')
}
var f = NaN,
  A = /^[-+]0x[0-9a-f]+$/i,
  G = /^0b[01]+$/i,
  k = /^0o[0-7]+$/i,
  E = parseInt
function H(t) {
  if (typeof t == 'number') return t
  if (w(t)) return f
  if (c(t)) {
    var r = typeof t.valueOf == 'function' ? t.valueOf() : t
    t = c(r) ? r + '' : r
  }
  if (typeof t != 'string') return t === 0 ? t : +t
  t = B(t)
  var n = G.test(t)
  return n || k.test(t) ? E(t.slice(2), n ? 2 : 8) : A.test(t) ? f : +t
}
export { o as S, w as a, c as i, j as r, H as t }
