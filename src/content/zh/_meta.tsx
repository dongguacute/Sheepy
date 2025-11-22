import type { MetaRecord } from 'nextra'
import { TitleBadge } from '@/components/TitleBadge'

export default {
  index: {
    type: 'page',
    display: 'hidden',
    theme: {
      copyPage: false,
      timestamp: false,
      layout: 'full',
      toc: false,
    },
  },
  introduction: {
    type: 'page',
    theme: {
      copyPage: false,
      navbar: true,
      toc: false,
    },
  },
  docs: {
    title: '📦 示例代码',
    type: 'page',
  },
} satisfies MetaRecord
