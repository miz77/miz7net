import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'miz7.net',
  description:
    'Shimizu の個人サイトです。ブログやツールを公開しています。',
  href: 'https://www.miz7.net',
  author: 'Shimizu',
  locale: 'ja-JP',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'blog',
  },
  {
    href: '/authors',
    label: 'authors',
  },
  {
    href: '/about',
    label: 'about',
  },
  {
    href: '/changelog',
    label: 'changelog',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/miz77',
    label: 'GitHub',
  },

  {
    href: 'mailto:i@miz7.net',
    label: 'Email',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
