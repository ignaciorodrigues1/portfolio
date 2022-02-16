import Link from 'next/link'
import { Logo } from '@/components/Logo'
import { documentationNav } from '@/navs/documentation'

const footerNav = [
  {
    Community: [
      { title: 'GitHub', href: 'https://github.com/IgnacioRodrigues1' },
      { title: 'Twitter', href: 'https://twitter.com/ignacrodrigues' },
      { title: 'Instagram', href: 'https://www.instagram.com/ignaciorodrigues/' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="pb-16 text-sm leading-6">
      <div className="max-w-7xl mx-auto divide-y divide-slate-200 px-4 sm:px-6 md:px-8 dark:divide-slate-700">
        <div className="flex justify-end">
          {footerNav.map((sections) => (
            <div
              key={Object.keys(sections).join(',')}
              className="flex-none space-y-10 sm:space-y-8 lg:flex lg:space-y-0"
            >
              {Object.entries(sections).map(([title, items]) => (
                <div key={title} className="lg:flex-none lg:w-1/2">
                  <h2 className="font-semibold text-slate-900 dark:text-slate-100">{title}</h2>
                  <ul className="mt-3 space-y-2">
                    {items.map((item) => (
                      <li key={item.href}>
                        <Link href={item.href}>
                          <a className="hover:text-slate-900 dark:hover:text-slate-300">
                            {item.title}
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="mt-16 pt-10">
          <Logo className="w-auto h-6" />
        </div>
      </div>
    </footer>
  )
}
