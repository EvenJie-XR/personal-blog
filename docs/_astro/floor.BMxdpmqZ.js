import { S as f, a as S, t as g, r as N } from './toNumber.DCaU3JdG.js'
function a(t, r) {
  for (var n = -1, o = t == null ? 0 : t.length, i = Array(o); ++n < o; ) i[n] = r(t[n], n, t)
  return i
}
var c = Array.isArray,
  h = 1 / 0,
  e = f ? f.prototype : void 0,
  s = e ? e.toString : void 0
function y(t) {
  if (typeof t == 'string') return t
  if (c(t)) return a(t, y) + ''
  if (S(t)) return s ? s.call(t) : ''
  var r = t + ''
  return r == '0' && 1 / t == -h ? '-0' : r
}
var u = 1 / 0,
  m = 17976931348623157e292
function A(t) {
  if (!t) return t === 0 ? t : 0
  if (((t = g(t)), t === u || t === -u)) {
    var r = t < 0 ? -1 : 1
    return r * m
  }
  return t === t ? t : 0
}
function F(t) {
  var r = A(t),
    n = r % 1
  return r === r ? (n ? r - n : r) : 0
}
function I(t) {
  return t == null ? '' : y(t)
}
var M = N.isFinite,
  T = Math.min
function l(t) {
  var r = Math[t]
  return function (n, o) {
    if (((n = g(n)), (o = o == null ? 0 : T(F(o), 292)), o && M(n))) {
      var i = (I(n) + 'e').split('e'),
        d = r(i[0] + 'e' + (+i[1] + o))
      return (i = (I(d) + 'e').split('e')), +(i[0] + 'e' + (+i[1] - o))
    }
    return r(n)
  }
}
var x = l('floor')
export { x as f }
