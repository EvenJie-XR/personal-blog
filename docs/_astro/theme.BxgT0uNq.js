function o(e) {
  document.documentElement.setAttribute('data-theme', e)
}
function c() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}
const t = 'gyoza-theme'
function s() {
  const e = localStorage.getItem(t)
  return e === 'dark' || e === 'light' ? e : (a('system'), 'system')
}
function a(e) {
  localStorage.setItem(t, e)
}
export { c as a, o as c, s as g, a as s }
