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
    <header className="relative">
      <div className="px-4 sm:px-6 md:px-8">
        <div
          className={clsx(
            'absolute inset-0 bottom-10 bg-bottom bg-no-repeat bg-slate-50 dark:bg-[#0B1120]',
            styles.beams
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
        <div className="relative pt-6 lg:pt-8 flex items-center justify-between text-slate-700 font-semibold text-sm leading-6 dark:text-slate-200">
          <Logo className="text-xl font-sans" />
          <div className="flex items-center">
            <SearchButton className="text-slate-500 hover:text-slate-600 w-8 h-8 -my-1 flex items-center justify-center md:hidden dark:hover:text-slate-300">
              <span className="sr-only">Search</span>
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m19 19-3.5-3.5" />
                <circle cx="11" cy="11" r="6" />
              </svg>
            </SearchButton>
            <NavPopover className="-my-1 ml-2 -mr-1" display="md:hidden" />
            <div className="hidden md:flex items-center">
              <nav>
                <ul className="flex items-center space-x-8">
                  <NavItems />
                </ul>
              </nav>
              <div className="flex items-center border-l border-slate-200 ml-6 pl-6 dark:border-slate-800">
                <ThemeToggle />
                <a
                  href="https://github.com/IgnacioRodrigues"
                  className="ml-6 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
                >
                  <span className="sr-only">Ignacio Rodrigues on GitHub</span>
                  <svg
                    viewBox="0 0 16 16"
                    className="w-5 h-5"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32">
          <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white">
            Hi, I'm Ignacio Rodrigues and this is my professional portfolio.
          </h1>
          <p className="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">
            My passion is creating interfaces with a great user experience and <code className="font-mono font-medium text-sky-500 dark:text-sky-400">pixel-perfect</code> for high-impact brands. Entrepreneur, always exploring new technologies and pushing them to the limit, runner, traveler and I like read a lot.
          </p>
          
        </div>
      </div>
      <Hero />
    </header>
  )
}

export default function Home() {
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
        <section className="text-center px-8">
          <h2 className="text-slate-900 text-4xl tracking-tight font-extrabold sm:text-5xl dark:text-white">
            “The best place <span className="text-slate-900 text-xl tracking-tight font-light italic sm:text-xl dark:text-white">is the one where you can show your full potential”.</span>
          </h2>
          <figure>
            <blockquote>
              <p className="mt-6 max-w-3xl mx-auto text-lg">
                This is somewhat trite, but no less important, a good place to work is important to grow others and oneself. I like to create that relaxed but focused work environment, where everyone can get the best of themselves and achieve great work together.
              </p>
            </blockquote>
            <figcaption className="mt-6 flex items-center justify-center space-x-4 text-left">
              <img
                src={require('@/img/authors/irodrigues.png').default}
                alt=""
                className="w-14 h-14 rounded-full"
                loading="lazy"
              />
              <div>
                <div className="text-slate-900 font-semibold dark:text-white">Ignacio Rodrigues</div>
                <div className="mt-0.5 text-sm leading-6">Professional Frontend Developer</div>
              </div>
            </figcaption>
          </figure>
        </section>
      </div>
      {/*<Testimonials />*/}
      <div className="pt-20 mb-20 space-y-20 overflow-hidden sm:pt-32 sm:mb-32 sm:space-y-32 md:mb-40 md:space-y-40">
        <ConstraintBased />
        <BuildAnything />
        <Performance />
        <MobileFirst />
        <StateVariants />
        <ComponentDriven />
        <DarkMode />
        <Customization />
        <ModernFeatures />
        {/*<EditorTools />*/}
        <ReadyMadeComponents />
      </div>
      <Footer />
    </>
  )
}
