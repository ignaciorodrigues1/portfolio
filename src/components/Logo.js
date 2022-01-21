import clsx from 'clsx'

export function Logo({ className, ...props }) {
  return (
    <p className={clsx('text-slate-900 dark:text-white', className)}>Ignacio Rodrigues</p>
  )
}
