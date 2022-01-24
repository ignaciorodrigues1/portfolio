import { NavItems, NavPopover } from '@/components/Header'

import { BuildAnything } from '@/components/home/BuildAnything'
import { ComponentDriven } from '@/components/home/ComponentDriven'
import { ConstraintBased } from '@/components/home/ConstraintBased'
import { Customization } from '@/components/home/Customization'
import { DarkMode } from '@/components/home/DarkMode'
import { EditorTools } from '@/components/home/EditorTools'
import { Footer } from '@/components/home/Footer'
import Head from 'next/head'
import { Hero } from '@/components/home/Hero'
import { Logo } from '@/components/Logo'
import { MobileFirst } from '@/components/home/MobileFirst'
import { ModernFeatures } from '@/components/home/ModernFeatures'
import NextLink from 'next/link'
import { Performance } from '@/components/home/Performance'
import { ReadyMadeComponents } from '@/components/home/ReadyMadeComponents'
import { SearchButton } from '@/components/Search'
import { StateVariants } from '@/components/home/StateVariants'
import { Testimonials } from '@/components/Testimonials'
import { ThemeToggle } from '@/components/ThemeToggle'
import clsx from 'clsx'
import styles from './index.module.css'

function Header() {
  return (
    <header className="relative ">
      <div className="px-4 sm:px-6 md:px-8">
        <div
          className={clsx(
            'absolute inset-0 bottom-10 bg-bottom bg-no-repeat bg-slate-50 dark:bg-[#0B1120]',
            styles.tiny
          )}
        >
          <div
            className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-bottom dark:border-b dark:border-slate-100/5"
            style={{
              maskImage: 'linear-gradient(to bottom, transparent, black)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent, black)',
            }}
          />
        </div>
        <div className="relative max-w-5xl mx-auto h-screen flex flex-col items-center justify-center">
          <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white">
            My portfolio.
          </h1>
          <p className="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">
            A featured selection the lastest work of the last years.
          </p>
        </div>
        
      </div>
    </header>
  )
}

export default function Portfolio() {
  return (
    <>
      <Head>
        <meta
          key="twitter:title"
          name="twitter:title"
          content="Rodrigues Ignacio - Professional portfolio"
        />
        <meta
          key="og:title"
          property="og:title"
          content="Rodrigues Ignacio - Professional portfolio"
        />
        <title>Rodrigues Ignacio - Professional portfolio</title>
      </Head>
      <div className="mb-20 space-y-20 overflow-hidden sm:mb-32 sm:space-y-32 md:mb-40 md:space-y-40">
        <Header />
      </div>
    </>
  )
}
