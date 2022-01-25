import Link from 'next/link'
import clsx from 'clsx'

export function Footer({ children, previous, next }) {
  return (
    <footer className={clsx('text-sm leading-6', previous || next ? 'mt-12' : 'mt-16')}>
     
      <div className="pt-10 pb-28 border-t border-slate-200 sm:flex justify-between text-slate-500 dark:border-slate-200/5">
        <div className="mb-6 sm:mb-0 sm:flex">
          <p>Copyright &copy; {new Date().getFullYear()} Ignacio Rodrigues.</p>
        </div>
        {children ? (children) : ('') }
      </div>
    </footer>
  )
}
