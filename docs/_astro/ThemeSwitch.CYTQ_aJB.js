import { j as e } from './jsx-runtime.CvXbGX33.js'
import { t as o } from './theme.cvN4Z6g1.js'
import { c as r } from './react.Ds3aoTLk.js'
import './index.BFw_thZa.js'
import './_commonjsHelpers.Cpj98o6Y.js'
import './theme.BxgT0uNq.js'
function x() {
  const [s, t] = r(o),
    i = { light: 4, system: 36, dark: 68 }[s]
  return e.jsxs('div', {
    className: 'relative inline-block',
    children: [
      e.jsx('div', {
        className:
          'absolute -z-1 top-1 size-[32px] rounded-full bg-primary transition-transform shadow',
        style: { transform: `translateX(${i}px)` },
      }),
      e.jsxs('div', {
        className: 'p-[3px] flex rounded-full border border-primary',
        role: 'radiogroup',
        children: [
          e.jsx('button', {
            className: 'size-[32px] flex items-center justify-center',
            type: 'button',
            'aria-label': 'Switch to light theme',
            onClick: () => t('light'),
            children: e.jsx('i', { className: 'iconfont icon-sun' }),
          }),
          e.jsx('button', {
            className: 'size-[32px] flex items-center justify-center',
            type: 'button',
            'aria-label': 'Switch to system theme',
            onClick: () => t('system'),
            children: e.jsx('i', { className: 'iconfont icon-computer' }),
          }),
          e.jsx('button', {
            className: 'size-[32px] flex items-center justify-center',
            type: 'button',
            'aria-label': 'Switch to dark theme',
            onClick: () => t('dark'),
            children: e.jsx('i', { className: 'iconfont icon-moon' }),
          }),
        ],
      }),
    ],
  })
}
export { x as ThemeSwitch }
