import { BasicLayout } from '@/layouts/BasicLayout'
import { Button } from '@/components/Button'
import { ReactComponent as GitHubIcon } from '@/img/icons/github.svg'
import Head from 'next/head'
import { ReactComponent as LinkedinIcon } from '@/img/icons/linkedin.svg'
import clsx from 'clsx'
import styles from './index.module.css'

function CardGroup({ children, className }) {
  return (
    <ul className={clsx('grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start', className)}>
      {children}
    </ul>
  )
}

function Card({ title, superTitle, href, color, body, image, button }) {
  return (
    <li className="relative flex flex-col sm:flex-row xl:flex-col items-start">
      <div className="order-1 sm:ml-6 xl:ml-0">
        <h3 className="mb-1 text-slate-900 font-semibold dark:text-slate-200">
          {button ? (
            <>
              <span className={clsx('mb-1 block text-sm leading-6', color)}>{superTitle}</span>
              {title}
            </>
          ) : (
            <a
              href={href}
              className={clsx(
                'before:absolute before:inset-0',
                !button && 'hover:text-slate-600 dark:hover:text-white'
              )}
            >
              <span className={clsx('mb-1 block text-sm leading-6', color)}>{superTitle}</span>
              {title}
            </a>
          )}
        </h3>
        <div className="prose prose-slate prose-sm text-slate-600 dark:prose-dark">{body}</div>
        {button && (
          <Button href={href} className="mt-6">
            {button}
          </Button>
        )}
      </div>
      <img
        src={image}
        alt=""
        className="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full"
        width="1216"
        height="640"
      />
    </li>
  )
}

function Icon({ children, className }) {
  return (
    <div
      className={clsx(
        'relative pt-full rounded-full ring-1 ring-inset ring-slate-900/5',
        className
      )}
    >
      <div className="absolute inset-0 flex items-center justify-center">{children}</div>
    </div>
  )
}

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
          <div
            className={clsx(
              'absolute inset-0', styles.wireframes
            )}
          />
        </div>
        <div className="relative max-w-5xl mx-auto h-screen flex flex-col items-start justify-center">
          <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-left dark:text-white">
            Portfolio.
          </h1>
          <p className="mt-6 text-lg text-slate-600 text-left dark:text-slate-400">
            A selection of my experience working in software development. <br/> I have expectation that you will like it.
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
      <div className="space-y-20 overflow-hidden">
        <Header />

        <div className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8'>
          <BasicLayout>
            <header className="mb-20 max-w-xl">
              <p className="mb-4 text-sm leading-6 font-semibold text-sky-500 dark:text-sky-400">
                All work
              </p>
              <h1 className="mb-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-200">
                A Featured selection the latest work of the last years.
              </h1>
              <p className="text-lg text-slate-700 dark:text-slate-400">
                Multidisciplinary developer, I'm passionate about create awesome websites, webapps and digital experiences. I like the animations, transitions, UI, UX, and more.
              </p>
            </header>

            <div className="space-y-16">
              <section>
                <ul className="sm:space-y-6">
                  {[
                    {
                      title: 'Black iD',
                      description: 'Black iD',
                      images: [
                        require('@/img/resources/blackid-small@75.png').default,
                        require('@/img/resources/blackid@75.png').default,
                      ],
                      color: 'text-gray-500',
                      href: 'https://care26.com',
                      body: (
                        <>
                          <p>
                            Website, Backoffice, Mobile App. Frontend Developer.
                          </p>
                        </>
                      ),
                    },
                    {
                      title: 'Boehringer Ingelheim',
                      description: 'A su lado',
                      images: [
                        require('@/img/resources/bohering-small@75.png').default,
                        require('@/img/resources/bohering@75.png').default,
                      ],
                      color: 'text-orange-500',
                      href: '',
                      body: (
                        <>
                          <p>
                            Webapp. Education platform. FullStack developer.
                          </p>
                        </>
                      ),
                    },
                    {
                      title: 'Andromeda Latam',
                      description: 'Sobio',
                      images: [
                        require('@/img/resources/sobio-small@75.png').default,
                        require('@/img/resources/sobio@75.png').default,
                      ],
                      color: 'text-blue-500',
                      href: 'https://care26.com',
                      body: (
                        <>
                          <p>
                            Design Webapp, UI developer.
                          </p>
                        </>
                      ),
                    },
                    {
                      title: 'Making Sense',
                      description: 'Care26 Website',
                      images: [
                        require('@/img/resources/care26-small@75.png').default,
                        require('@/img/resources/care26@75.png').default,
                      ],
                      color: 'text-green-500',
                      href: 'https://care26.com',
                      body: (
                        <>
                          <p>
                            Website. UI/UX Developer.
                          </p>
                        </>
                      ),
                    },
                    {
                      title: 'Doppler',
                      description: 'Doppler Website',
                      images: [
                        require('@/img/resources/doppler-small@75.png').default,
                        require('@/img/resources/doppler@75.png').default,
                      ],
                      color: 'text-yellow-500',
                      href: 'https://fromdoppler.com',
                      body: (
                        <>
                          <p>
                            website. UI Developer.
                          </p>
                        </>
                      ),
                    },
                    {
                      title: 'Doppler',
                      description: 'Doppler Academy',
                      images: [
                        require('@/img/resources/academy-small@75.png').default,
                        require('@/img/resources/academy@75.png').default,
                      ],
                      color: 'text-yellow-500',
                      href: 'https://fromdoppler.com',
                      body: (
                        <>
                          <p>
                            Educational platform. UI Developer.
                          </p>
                        </>
                      ),
                    },
                    {
                      title: 'Doppler',
                      description: 'EMMS 2017-2018-2019-2020',
                      images: [
                        require('@/img/resources/emms-small@75.png').default,
                        require('@/img/resources/emms@75.png').default,
                      ],
                      color: 'text-yellow-500',
                      href: 'https://goemms.com',
                      body: (
                        <>
                          <p>
                           Websitapp. UI Developer.
                          </p>
                        </>
                      ),
                    },
                    {
                      title: 'Embalajes Santa Catalina',
                      description: 'Embalajes Santa Catalina',
                      images: [
                        require('@/img/resources/embalajes-small@75.png').default,
                        require('@/img/resources/embalajes@75.png').default,
                      ],
                      color: 'text-red-500',
                      href: 'https://fromdoppler.com',
                      body: (
                        <>
                          <p>
                            Website. Wordpress Developer.
                          </p>
                        </>
                      ),
                    },
                    {
                      title: 'Pasalto',
                      description: 'Pasalto',
                      images: [
                        require('@/img/resources/pasalto-small@75.png').default,
                        require('@/img/resources/pasalto@75.png').default,
                      ],
                      color: 'text-blue-500',
                      href: 'https://fromdoppler.com',
                      body: (
                        <>
                          <p>
                            Website. Wordpress Developer.
                          </p>
                        </>
                      ),
                    },
                  ].map(({ title, description, images, color, body, href }) => (
                    <li
                      key={title}
                      className="-mx-4 p-4 pb-10 bg-slate-50 flex flex-col-reverse items-start sm:mx-0 sm:p-10 sm:rounded-2xl xl:flex-row dark:bg-slate-800/50"
                    >
                      <div className="flex-auto">
                        <h3 className={clsx('mb-4 text-sm leading-6 font-semibold', color)}>{title}</h3>
                        <p className="mb-2 text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-200">
                          {description}
                        </p>
                        <div className="mb-6 text-sm leading-6 text-slate-600 space-y-4 dark:text-slate-400">
                          {body}
                        </div>
                        <Button
                          href={href}
                          color={[
                            'bg-slate-700 text-white hover:bg-slate-800 focus:ring-offset-2 focus:ring-offset-slate-50 focus:ring-slate-400 dark:focus:ring-offset-0',
                            'text-slate-300 group-hover:text-slate-200',
                          ]}
                          darkColor="gray"
                        >
                          View project<span className="sr-only">, {title}</span>
                        </Button>
                      </div>
                      <div className="w-full flex-none mb-10 xl:mb-0 xl:ml-8 xl:w-[29rem]">
                        <div className="aspect-w-[1216] aspect-h-[606] sm:aspect-w-[1376] sm:aspect-h-[664] shadow-lg rounded-lg bg-slate-100 overflow-hidden dark:bg-slate-800">
                          <picture>
                            <source type="image/jpeg" srcSet={images[1]} media="(min-width: 640px)" />
                            <img src={images[0]} alt="" />
                          </picture>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
              
              <section className="border-t border-slate-100 pt-16 dark:border-slate-200/5">
                <h2 className="mb-2 text-xl tracking-tight text-slate-900 font-bold dark:text-slate-200">
                  Let's develop together
                </h2>
                <div className="mb-10 prose prose-slate text-slate-600 max-w-3xl dark:prose-dark">
                  <p>
                    Whether you're a beginner or an advanced user, getting involved in the Tailwind
                    community is a great way to connect with like-minded folks who are building awesome
                    things with the framework.
                  </p>
                </div>

                <ul className="grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2">
                  {[
                    {
                      title: 'Contact me',
                      href: 'https://www.linkedin.com/in/ignaciorodrigues/',
                      description:
                      "Let's talk!",
                      icon: (
                        <Icon className="bg-[#0E76A8]/[0.15] dark:bg-blue-700">
                          <LinkedinIcon className="w-6 h-auto dark:fill-blue-200" />
                        </Icon>
                      ),
                      className:
                        'ring-1 ring-slate-900/10 dark:bg-blue-500 dark:ring-0 dark:highlight-white/20',
                    },
                    {
                      title: 'GitHub Profile',
                      href: 'https://github.com/IgnacioRodrigues1/',
                      description:
                        'My projects',
                      icon: (
                        <Icon className="bg-slate-100 dark:bg-slate-800">
                          <GitHubIcon className="w-7 h-auto dark:fill-slate-400" />
                        </Icon>
                      ),
                      className:
                        'ring-1 ring-slate-900/10 dark:bg-slate-600 dark:ring-0 dark:highlight-white/20',
                    },
                  ].map(({ title, href, description, icon, className }) => (
                    <li key={title} className="relative flex flex-row-reverse">
                      <div className="peer group flex-auto ml-6">
                        <h3 className="mb-2 font-semibold text-slate-900 dark:text-slate-200">
                          <a
                            href={href}
                            className="before:absolute before:-inset-3 before:rounded-2xl sm:before:-inset-4"
                          >
                            {title}
                            <svg
                              viewBox="0 0 3 6"
                              className="ml-3 w-auto h-1.5 overflow-visible inline -mt-px text-slate-400 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100"
                            >
                              <path
                                d="M0 0L3 3L0 6"
                                fill="none"
                                strokeWidth="2"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </a>
                        </h3>
                        <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
                          {description}
                        </p>
                      </div>
                      <div
                        className={clsx(
                          'flex-none w-16 h-16 p-[0.1875rem] rounded-full shadow overflow-hidden pointer-events-none',
                          className
                        )}
                      >
                        {icon}
                      </div>
                      <div className="absolute -z-10 -inset-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 opacity-0 peer-hover:opacity-100 sm:-inset-4" />
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </BasicLayout>
        </div>
      </div>
    </>
  )
}
