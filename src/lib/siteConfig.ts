export interface OrizSiteConfig {
  slug: string
  name: string
  origin: string
  tagline: string
  description?: string
}

export const SITE_CONFIG: OrizSiteConfig = {
  slug: 'arts-blog',
  name: "The Maker's Bench",
  origin: 'https://arts-blog.oriz.in',
  tagline: 'A working log of sketchbooks, hand-lettering, and turning craft into a living',
  description:
    "The Maker's Bench — practical arts and crafts writing: daily drawing, hand-lettering, and earning from what you make.",
}
