import { e as u } from './index.modern.CkIAsQri.js'
function o() {
  return (
    (o = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var t = 1; t < arguments.length; t++) {
            var e = arguments[t]
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r])
          }
          return n
        }),
    o.apply(this, arguments)
  )
}
class p extends u {
  constructor(t = {}) {
    super(),
      (this.name = 'SwupScriptsPlugin'),
      (this.requires = { swup: '>=4' }),
      (this.defaults = { head: !0, body: !0, optin: !1 }),
      (this.options = void 0),
      (this.options = o({}, this.defaults, t))
  }
  mount() {
    this.on('content:replace', this.runScripts)
  }
  runScripts() {
    const { head: t, body: e, optin: r } = this.options,
      s = this.getScope({ head: t, body: e })
    if (!s) return
    const i = Array.from(
      s.querySelectorAll(
        r ? 'script[data-swup-reload-script]' : 'script:not([data-swup-ignore-script])',
      ),
    )
    i.forEach((c) => this.runScript(c)), this.swup.log(`Executed ${i.length} scripts.`)
  }
  runScript(t) {
    const e = document.createElement('script')
    for (const { name: r, value: s } of t.attributes) e.setAttribute(r, s)
    return (e.textContent = t.textContent), t.replaceWith(e), e
  }
  getScope({ head: t, body: e }) {
    return t && e ? document : t ? document.head : e ? document.body : null
  }
}
export { p as default }
