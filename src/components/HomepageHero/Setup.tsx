'use client'

import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/components/HomepageHero/SetupHero.module.css'
import { MotionWrapperFlash } from '@/components/MotionWrapper/Flash'
import { Button } from '@/components/ui/button'
import { FlipWords } from '@/components/ui/flip-words'
import { LinkPreview } from '@/components/ui/link-preview'
import { useLocale } from '@/hooks'

interface Props {
}
export function SetupHero(props: Props) {
  const { t, currentLocale } = useLocale()

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* Large logo in center */}
        <div className="flex justify-center mb-12">
          <MotionWrapperFlash disabledAnimation={false}>
            <Image
              src="/img/logo.png"
              alt="Sheepy Logo"
              width={250}
              height={250}
              className="rounded-2xl shadow-2xl"
            />
          </MotionWrapperFlash>
        </div>

        <h1 className={clsx(styles.headline, 'text-center')}>
          <div className="flex items-center justify-center mb-4">
            <span className="icon-[emojione-v1--sleeping-face] text-4xl mr-2"></span>
            <span className="text-black dark:text-white">安心睡觉</span>
          </div>
          <br />
          <span className="text-xl font-light text-neutral-600 dark:text-neutral-400">
            Sleep Peacefully
          </span>
        </h1>

        <div className={clsx([
          styles.subtitle,
          'text-neutral-500 dark:text-neutral-300 text-center max-w-2xl mx-auto',
        ])}
        >
          享受
          {' '}
          <FlipWords
            words={[
              '宁静',
              '舒适',
              '放松',
              '安眠',
            ]}
          />
          {' '}
          的睡眠体验
        </div>

        <div className="flex justify-center pt-8">
          <div className="max-w-[500px] flex flex-wrap gap-[20px] max-sm:justify-center">
            <Button
              asChild
              size="lg"
              className="font-bold group max-sm:w-[100%]"
            >
              <Link
                href={`/${currentLocale}/introduction`}
              >
                开始体验
                <span className="w-[20px] translate-x-[6px] transition-all group-hover:translate-x-[10px] icon-[mingcute--arrow-right-fill]"></span>
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="font-bold group max-sm:w-[100%]"
            >
              <Link
                href="https://github.com/dongguacute/Sheepy"
                target="_blank"
              >
                查看源码
                <span className="ml-[6px] icon-[mingcute--github-line]"></span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
