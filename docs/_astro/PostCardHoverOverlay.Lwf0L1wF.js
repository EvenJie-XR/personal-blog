import { j as t } from './jsx-runtime.CvXbGX33.js'
import { r as n } from './index.BFw_thZa.js'
import { A as m } from './index.SJVN7jjm.js'
import { m as d } from './motion.UigYBGvC.js'
import './_commonjsHelpers.Cpj98o6Y.js'
import './SVGVisualElement.De6LOhF_.js'
function h() {
  const s = n.useRef(null),
    [c, r] = n.useState(!1),
    o = () => {
      r(!0)
    },
    a = () => {
      r(!1)
    },
    i = () => {
      r(!0)
    },
    l = () => {
      r(!1)
    }
  return (
    n.useEffect(() => {
      const u = s.current
      if (!u) return
      const e = u.parentElement?.parentElement
      if (e)
        return (
          e.addEventListener('mouseenter', o),
          e.addEventListener('mouseleave', a),
          e.addEventListener('focus', i),
          e.addEventListener('blur', l),
          () => {
            e.removeEventListener('mouseenter', o),
              e.removeEventListener('mouseleave', a),
              e.removeEventListener('focus', i),
              e.removeEventListener('blur', l)
          }
        )
    }, []),
    t.jsxs(t.Fragment, {
      children: [
        t.jsx('div', { ref: s, className: 'hidden' }),
        t.jsx(m, {
          children:
            c &&
            t.jsx(d.div, {
              className: 'absolute inset-y-4 -inset-x-4 -z-1 bg-accent/10 rounded-lg',
              initial: { opacity: 0.2, scale: 0.95 },
              animate: { opacity: 1, scale: 1 },
              exit: { opacity: 0, scale: 0.95 },
              layout: !0,
              layoutId: 'post-card-hover-overlay',
            }),
        }),
      ],
    })
  )
}
export { h as PostCardHoverOverlay }
