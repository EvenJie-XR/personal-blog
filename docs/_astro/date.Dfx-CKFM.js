function f(t, e = new Date()) {
  const o = Math.floor((e.getTime() - t.getTime()) / 1e3)
  if (o < 0) return null
  const n = Math.floor(o / 60)
  if (n < 10) return '刚刚'
  if (n < 60) return `${n} 分钟前`
  const r = Math.floor(n / 60)
  if (r < 24) return `${r} 小时前`
  const a = Math.floor(r / 24)
  return a < 10 ? `${a} 天前` : null
}
function s(t) {
  const e = t.getFullYear() % 100,
    o = t.getMonth() + 1,
    n = t.getDate(),
    r = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'][t.getDay()]
  return `${e} 年 ${o} 月 ${n} 日 ${r}`
}
function u(t, e = 2) {
  return t.toString().padStart(e, '0')
}
function i(t) {
  const e = t.getFullYear(),
    o = u(t.getMonth() + 1),
    n = u(t.getDate()),
    r = u(t.getHours()),
    a = u(t.getMinutes())
  return `${e} 年 ${o} 月 ${n} 日 ${r}:${a}`
}
function g(t, e = new Date()) {
  return Math.floor((e.getTime() - t.getTime()) / (1e3 * 86400))
}
function c(t) {
  const e = t.getFullYear()
  return (e % 4 === 0 && e % 100 !== 0) || e % 400 === 0 ? 366 : 365
}
function l(t) {
  const e = t.getFullYear()
  return new Date(e, 0, 1)
}
function D(t) {
  return new Date(t.getFullYear(), t.getMonth(), t.getDate())
}
export { s as a, f as b, i as c, l as d, c as e, D as f, g }
