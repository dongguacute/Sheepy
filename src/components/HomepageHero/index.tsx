'use client'

import { useTheme } from 'nextra-theme-docs'
import { useMemo } from 'react'
import Marquee from 'react-fast-marquee'
import { PanelParticles } from '@/components/PanelParticles'
import ScrollProgressBar from '@/components/ScrollProgressBar'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { useLocale } from '@/hooks'
import { cn } from '@/lib/utils'
import { Section } from './Section'

import { SetupHero } from './Setup'

export const StackItem = ({
  className,
}: {
  className: string
},
) => {
  return (
    <div className={cn(
      'mx-6 size-[50px]',
      'text-neutral-800 dark:text-neutral-100',
      'transition-all duration-300 transform opacity-75',
      'hover:scale-125 hover:opacity-100',
      className,
    )}
    >
    </div>
  )
}

export default function HomepageHero() {
  const { t } = useLocale()

  const sleepGuides = t('sleepGuides')

  const { resolvedTheme } = useTheme()

  const processedSleepGuides = useMemo(() => {
    const icons = [
      '🌙',
      '🛏️',
      '⏰',
      '🧠',
      '🥗',
      '🏃‍♂️',
    ]
    return sleepGuides.map((item, index) => {
      return {
        ...item,
        icon: icons[index] || icons[0],
      }
    })
  }, [sleepGuides])

  return (
    <>
      <SetupHero />
      <div className="relative z-1 pb-10 md:pb-[100px]">
        <Section
          title={t('featuresDesc')}
          description={t('featuresDesc')}
        >
          <div className="flex justify-center w-full max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
              {processedSleepGuides.map((guide, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="text-4xl mb-4">{guide.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{guide.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{guide.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>
      </div>
    </>
  )
}
