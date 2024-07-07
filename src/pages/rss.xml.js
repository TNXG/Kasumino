import { siteConfig } from '@/config'
import rss from '@astrojs/rss'
import MarkdownIt from 'markdown-it'
import sanitizeHtml from 'sanitize-html'
import { getSortedPosts } from '@/utils/content-utils'

const parser = new MarkdownIt()

export async function GET(context) {
  const blog = await getSortedPosts()
  return rss({
    title: siteConfig.title,
    description: siteConfig.subtitle || 'No description',
    site: context.site,
    items: blog.map(post => ({
      title: post.title,
      pubDate: post.created,
      description: post.summary,
      link: `/posts/${post.slug}/`,
      content: sanitizeHtml(parser.render(post.text), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
      }),
    })),
    customData: `<language>${siteConfig.lang}</language>`,
  })
}
