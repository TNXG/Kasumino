import { siteConfig } from '@/config'
import rss from '@astrojs/rss'
import MarkdownIt from 'markdown-it'
import sanitizeHtml from 'sanitize-html'
import { getSortedPosts } from '@/utils/content-utils'
import { getPostUrlBySlug } from '@/utils/url-utils'

const parser = new MarkdownIt()

export const GET = async ({ url }) => {
  const blog = await getSortedPosts()
  const items = blog.map(post => ({
    title: post.title,
    pubDate: post.created,
    updatedAt: post.modified,
    description: post.summary || 'No description available', // 确保总是有一个描述
    link: new URL(getPostUrlBySlug(post.category.slug, post.slug), url).href,
    content: sanitizeHtml(parser.render(post.text || ''), { // 确保 text 不是 undefined
      allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
    }),
  })).filter(item => item.title || item.description); // 确保每个项至少有标题或描述

  return rss({
    title: siteConfig.title,
    description: siteConfig.subtitle || 'No description',
    site: url,
    items: items,
    customData: `<language>${siteConfig.lang}</language>`,
  })
}