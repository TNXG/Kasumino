import { siteConfig } from '@/config'
import rss from '@astrojs/rss'
import { getSortedPosts } from '@/utils/content-utils'
import { getPostUrlBySlug } from '@/utils/url-utils'

export const GET = async ({ url }) => {
    const blog = await getSortedPosts()
    const items = blog.map(post => ({
        title: post.title,
        updatedAt: post.modified,
        link: new URL(getPostUrlBySlug(post.category.slug, post.slug), url).href,
        pubDate: post.created,
    })).filter(item => item.title && item.pubDate);

    return rss({
        title: siteConfig.title,
        description: siteConfig.subtitle || 'No description',
        site: url,
        items: items,
        customData: `<language>${siteConfig.lang}</language>`,
    })
}