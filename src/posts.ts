/** Blog index. Bodies are deliberate placeholders - see /blog for the notice. */
export type Post = { slug: string; title: string; standfirst: string; rail: string }

export const POSTS: Post[] = [
  {
    slug: 'reading-a-certificate-of-analysis',
    title: 'How to read a certificate of analysis',
    standfirst:
      'What the assay, the trace-element profile and the lot number actually tell you before you qualify a supplier.',
    rail: 'Quality',
  },
  {
    slug: 'choosing-an-emm-grade',
    title: 'Choosing between flake, powder and briquette',
    standfirst:
      'Physical form is process-specific. A short guide to matching the grade to how the manganese enters your melt.',
    rail: 'Grades',
  },
  {
    slug: 'why-selenium-free-matters',
    title: 'Why selenium-free matters downstream',
    standfirst:
      'Where a residual process additive shows up later — in battery chemistry, vacuum melting and precision welding.',
    rail: 'Process',
  },
]
