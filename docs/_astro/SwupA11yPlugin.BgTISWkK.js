import { l as f, w as m } from './Swup.BPHaxb0p.js'
import { e as v } from './index.modern.CkIAsQri.js'
import { g } from './_commonjsHelpers.Cpj98o6Y.js'
var d = { exports: {} }
;(function (r) {
  ;(function (t) {
    function n(i) {
      ;(i = i || {}),
        (this.settings = { level: 'polite', parent: 'body', idPrefix: 'live-region-', delay: 0 })
      for (var s in i) i.hasOwnProperty(s) && (this.settings[s] = i[s])
      this.settings.parent = document.querySelector(this.settings.parent)
    }
    ;(n.prototype.say = function (i, s) {
      var o = this.settings.parent.querySelector('[id^="' + this.settings.idPrefix + '"]') || !1
      o && this.settings.parent.removeChild(o),
        (s = s || this.settings.delay),
        (this.currentRegion = document.createElement('span')),
        (this.currentRegion.id = this.settings.idPrefix + Math.floor(Math.random() * 1e4))
      var e = this.settings.level !== 'assertive' ? 'status' : 'alert'
      return (
        this.currentRegion.setAttribute('aria-live', this.settings.level),
        this.currentRegion.setAttribute('role', e),
        this.currentRegion.setAttribute(
          'style',
          'clip: rect(1px, 1px, 1px, 1px); height: 1px; overflow: hidden; position: absolute; white-space: nowrap; width: 1px',
        ),
        this.settings.parent.appendChild(this.currentRegion),
        window.setTimeout(
          function () {
            this.currentRegion.textContent = i
          }.bind(this),
          s,
        ),
        this
      )
    }),
      (r.exports = n)
  })()
})(d)
var y = d.exports
const b = g(y)
;(function () {
  if (!(typeof window > 'u' || typeof document > 'u' || typeof HTMLElement > 'u')) {
    var r = !1
    try {
      var t = document.createElement('div')
      t.addEventListener(
        'focus',
        function (o) {
          o.preventDefault(), o.stopPropagation()
        },
        !0,
      ),
        t.focus(
          Object.defineProperty({}, 'preventScroll', {
            get: function () {
              if (
                navigator &&
                typeof navigator.userAgent < 'u' &&
                navigator.userAgent &&
                navigator.userAgent.match(/Edge\/1[7-8]/)
              )
                return (r = !1)
              r = !0
            },
          }),
        )
    } catch {}
    if (HTMLElement.prototype.nativeFocus === void 0 && !r) {
      HTMLElement.prototype.nativeFocus = HTMLElement.prototype.focus
      var n = function (o) {
          for (
            var e = o.parentNode, a = [], u = document.scrollingElement || document.documentElement;
            e && e !== u;

          )
            (e.offsetHeight < e.scrollHeight || e.offsetWidth < e.scrollWidth) &&
              a.push([e, e.scrollTop, e.scrollLeft]),
              (e = e.parentNode)
          return (e = u), a.push([e, e.scrollTop, e.scrollLeft]), a
        },
        i = function (o) {
          for (var e = 0; e < o.length; e++)
            (o[e][0].scrollTop = o[e][1]), (o[e][0].scrollLeft = o[e][2])
          o = []
        },
        s = function (o) {
          if (o && o.preventScroll) {
            var e = n(this)
            if (typeof setTimeout == 'function') {
              var a = this
              setTimeout(function () {
                a.nativeFocus(), i(e)
              }, 0)
            } else this.nativeFocus(), i(e)
          } else this.nativeFocus()
        }
      HTMLElement.prototype.focus = s
    }
  }
})()
function l() {
  return (
    (l = Object.assign
      ? Object.assign.bind()
      : function (r) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i])
          }
          return r
        }),
    l.apply(this, arguments)
  )
}
class T extends v {
  constructor(t = {}) {
    var n, i
    super(),
      (this.name = 'SwupA11yPlugin'),
      (this.requires = { swup: '>=4' }),
      (this.defaults = {
        contentSelector: 'main',
        headingSelector: 'h1, h2, [role=heading]',
        respectReducedMotion: !1,
        autofocus: !1,
        announcements: { visit: 'Navigated to: {title}', url: 'New page at {url}' },
      }),
      (this.options = void 0),
      (this.liveRegion = void 0),
      (this.announce = (s) => {
        this.liveRegion.say(s)
      }),
      (t.announcements = l(
        {},
        this.defaults.announcements,
        {
          visit:
            (n = t.announcementTemplate) != null ? n : String(this.defaults.announcements.visit),
          url: (i = t.urlTemplate) != null ? i : String(this.defaults.announcements.url),
        },
        t.announcements,
      )),
      (this.options = l({}, this.defaults, t)),
      (this.liveRegion = new b())
  }
  mount() {
    this.swup.hooks.create('content:announce'),
      this.swup.hooks.create('content:focus'),
      this.before('visit:start', this.prepareVisit),
      this.on('visit:start', this.markAsBusy),
      this.on('visit:end', this.unmarkAsBusy),
      this.on('content:replace', this.prepareAnnouncement),
      this.on('content:replace', this.handleNewPageContent),
      this.options.respectReducedMotion &&
        (this.before('visit:start', this.disableTransitionAnimations),
        this.before('visit:start', this.disableScrollAnimations),
        this.before('link:self', this.disableScrollAnimations),
        this.before('link:anchor', this.disableScrollAnimations)),
      (this.swup.announce = this.announce)
  }
  unmount() {
    this.swup.announce = void 0
  }
  markAsBusy() {
    document.documentElement.setAttribute('aria-busy', 'true')
  }
  unmarkAsBusy() {
    document.documentElement.removeAttribute('aria-busy')
  }
  prepareVisit(t) {
    t.a11y = { announce: void 0, focus: this.options.contentSelector }
  }
  prepareAnnouncement(t) {
    if (t.a11y.announce !== void 0) return
    const { contentSelector: n, headingSelector: i, announcements: s } = this.options,
      { href: o, url: e, pathname: a } = f.fromUrl(window.location.href),
      u = s[document.documentElement.lang || '*'] || s['*'] || s
    if (typeof u != 'object') return
    const c = document.querySelector(`${n} ${i}`)
    let h = c?.getAttribute('aria-label') || c?.textContent
    h = h || document.title || this.parseTemplate(u.url, { href: o, url: e, path: a })
    const p = this.parseTemplate(u.visit, { title: h, href: o, url: e, path: a })
    t.a11y.announce = p
  }
  parseTemplate(t, n) {
    return Object.keys(n).reduce((i, s) => i.replace(`{${s}}`, n[s] || ''), t || '')
  }
  handleNewPageContent() {
    var t = this
    m().then(async function () {
      t.swup.hooks.call('content:announce', void 0, void 0, (n) => {
        t.announcePageName(n)
      }),
        t.swup.hooks.call('content:focus', void 0, void 0, (n) => {
          t.focusPageContent(n)
        })
    })
  }
  announcePageName(t) {
    t.a11y.announce && this.liveRegion.say(t.a11y.announce)
  }
  async focusPageContent(t) {
    if (!t.a11y.focus) return
    if (this.options.autofocus) {
      const i = this.getAutofocusElement()
      if (i && i !== document.activeElement)
        return void this.swup.hooks.once('visit:end', (s) => {
          s.id === t.id && i.focus()
        })
    }
    const n = document.querySelector(t.a11y.focus)
    n instanceof HTMLElement &&
      (this.needsTabindex(n) && n.setAttribute('tabindex', '-1'), n.focus({ preventScroll: !0 }))
  }
  getAutofocusElement() {
    const t = document.querySelector('body [autofocus]')
    if (t && !t.closest('inert, [aria-disabled], [aria-hidden="true"]')) return t
  }
  disableTransitionAnimations(t) {
    t.animation.animate = t.animation.animate && this.shouldAnimate()
  }
  disableScrollAnimations(t) {
    t.scroll.animate = t.scroll.animate && this.shouldAnimate()
  }
  shouldAnimate() {
    return !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }
  needsTabindex(t) {
    return !t.matches('a, button, input, textarea, select, details, [tabindex]')
  }
}
export { T as default }
