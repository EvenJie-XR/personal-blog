import { j as t } from './jsx-runtime.CvXbGX33.js'
import { c as r } from './clsx.B-dksMZM.js'
import { h as n } from './config.-o55578i.js'
import { m as i } from './motion.UigYBGvC.js'
import './index.BFw_thZa.js'
import './_commonjsHelpers.Cpj98o6Y.js'
import './SVGVisualElement.De6LOhF_.js'
const a = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }
function u({ className: s }) {
  return t.jsx(i.ul, {
    className: r('flex gap-4 flex-wrap items-center justify-center lg:justify-start', s),
    initial: 'hidden',
    animate: 'visible',
    transition: { staggerChildren: 0.1 },
    children: n.socials.map((e) =>
      t.jsx(
        i.li,
        {
          variants: a,
          children: t.jsxs('a', {
            className: 'relative size-9 text-white text-xl flex justify-center items-center group',
            href: e.url,
            title: e.name,
            target: '_blank',
            rel: 'noopener noreferrer',
            children: [
              t.jsx('span', {
                className: 'absolute inset-0 -z-1 rounded-full group-hover:scale-105 transition',
                style: { backgroundColor: e.color },
              }),
              t.jsx('i', { className: r('iconfont', e.icon) }),
            ],
          }),
        },
        e.name,
      ),
    ),
  })
}
export { u as SocialList }
