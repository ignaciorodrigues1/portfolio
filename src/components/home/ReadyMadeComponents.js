import { BigText, Caption, IconContainer, Link, Paragraph, Widont } from '@/components/home/common'

import { GridLockup } from '../GridLockup'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

function AnimatedImage({ animate = false, delay = 0, ...props }) {
  return (
    <motion.img
      initial={false}
      animate={animate ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.5, delay }}
      alt=""
      {...props}
    />
  )
}

const w = 1213
const h = 675

const getStyle = (x, y, width) => ({
  top: `${(y / h) * 100}%`,
  left: `${(x / w) * 100}%`,
  width: `${(width / w) * 100}%`,
})

const images = [
  { src: require('@/img/tailwindui/0.png').default, x: 27, y: 24, width: 236 },
  { src: require('@/img/tailwindui/1.png').default, x: 287, y: 0, width: 567 },
  { src: require('@/img/tailwindui/2.png').default, x: 878, y: 47, width: 308 },
  { src: require('@/img/tailwindui/3.jpg').default, x: 0, y: 289, width: 472 },
  { src: require('@/img/tailwindui/4.jpg').default, x: 496, y: 289, width: 441 },
  { src: require('@/img/tailwindui/5.png').default, x: 961, y: 289, width: 252 },
]

export function ReadyMadeComponents() {
  const { ref: inViewRef, inView } = useInView({ threshold: 0.5, triggerOnce: true })

  return (
    <section id="ready-made-components">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <IconContainer
          className="dark:bg-indigo-500 dark:highlight-white/20"
          light={require('@/img/icons/home/ready-made-components.png').default}
          dark={require('@/img/icons/home/dark/ready-made-components.png').default}
        />
        <Caption className="text-indigo-500">Projects</Caption>
        <BigText>
          <Widont>My portfolio.</Widont>
        </BigText>
        <Paragraph>
        I share with you the collection of projects I've been working on all this time. I hope you like them!
        </Paragraph>
        <Link href="portfolio" color="indigo" darkColor="gray">
          View portfolio
        </Link>
      </div>
      <GridLockup
        className="mt-10"
        beams={0}
        overhang="lg"
        leftProps={{
          style: {
            maskImage: 'linear-gradient(to bottom, white, white, transparent)',
            WebkitMaskImage: 'linear-gradient(to bottom, white, white, transparent)',
          },
        }}
        left={
          <div ref={inViewRef} className="flex justify-center">
            <div className="w-[216%] ml-[28%] flex-none sm:w-[76rem] sm:ml-0">
              <div className="relative" style={{ paddingTop: `${(h / w) * 100}%` }}>
                {images.map(({ src, x, y, width }, index) => (
                  <AnimatedImage
                    key={src}
                    animate={inView}
                    delay={index * 0.2}
                    src={src}
                    className="absolute shadow-xl rounded-lg"
                    style={getStyle(x, y, width)}
                  />
                ))}
              </div>
            </div>
          </div>
        }
      />
    </section>
  )
}
