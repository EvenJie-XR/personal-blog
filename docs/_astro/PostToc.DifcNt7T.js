import { j as s } from './jsx-runtime.CvXbGX33.js'
import { p as T, a as y } from './scrollInfo.CamQlM5f.js'
import { c as h } from './clsx.B-dksMZM.js'
import { r as a } from './index.BFw_thZa.js'
import { u as x } from './react.Ds3aoTLk.js'
import './_commonjsHelpers.Cpj98o6Y.js'
function v() {
  const [i, l] = a.useState(''),
    t = x(T)
  return (
    a.useEffect(() => {
      const o = document.querySelector('#markdown-wrapper')
      if (!o) return
      const r = Array.from(o.querySelectorAll('h1,h2,h3,h4,h5,h6'))
      for (let c = 0; c < r.length; c++) {
        const n = r[c],
          e = r[c + 1],
          p = n.getBoundingClientRect().top,
          m = e ? e.getBoundingClientRect().top : 1e4
        if (p <= 80 && m > 80) {
          a.startTransition(() => {
            l(n.id)
          })
          break
        }
      }
    }, [t]),
    i
  )
}
function E({ headings: i }) {
  const l = v()
  return s.jsx('ul', {
    className: 'relative overflow-y-auto space-y-2 group text-sm',
    style: { maxHeight: 'min(380px, calc(100vh - 250px))', scrollbarWidth: 'none' },
    children: i.map((t) =>
      s.jsx(j, { slug: t.slug, text: t.text, depth: t.depth, isActive: t.slug === l }, t.slug),
    ),
  })
}
function j({ slug: i, text: l, depth: t, isActive: o }) {
  const r = a.useRef(null),
    c = x(y)
  return (
    a.useEffect(() => {
      if (!o) return
      const n = r.current
      if (!n) return
      const e = n.parentElement
      if (!e) return
      const p = e.clientHeight,
        m = n.clientHeight,
        u = n.offsetTop,
        g = e.scrollTop,
        f = u - g,
        d = f + m
      ;(f < 0 || d > p) && (c === 'up' ? (e.scrollTop = u - p + m) : (e.scrollTop = u))
    }, [o]),
    s.jsxs('li', {
      className: 'relative',
      ref: r,
      children: [
        s.jsx('span', {
          className: h(
            'absolute left-0 top-2 h-1 rounded-full',
            o ? 'bg-accent' : 'bg-zinc-300 dark:bg-zinc-700',
          ),
          style: { width: `${4 * (7 - t)}px` },
        }),
        s.jsx('a', {
          className: h(
            'inline-block pl-8 opacity-0 transition-opacity duration-300',
            o
              ? 'opacity-100'
              : 'group-hover:opacity-100 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100',
          ),
          href: `#${i}`,
          children: s.jsx('span', { children: l }),
        }),
      ],
    })
  )
}
export { E as PostToc }
