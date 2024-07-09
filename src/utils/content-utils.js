import { apiClient } from '@/middleware/apiClient'
import { siteConfig } from '@/config'

export async function getSortedPosts() {
  const postsList = await apiClient.post.getList()
  const allBlogPosts = await postsList.data

  const sorted = allBlogPosts.sort((a, b) => {
    const dateA = new Date(a.created)
    const dateB = new Date(b.created)
    return dateA > dateB ? -1 : 1
  })
  // 为每个帖子添加指向下一个帖子的slug和title
  for (let i = 1; i < sorted.length; i++) {
    sorted[i].nextSlug = sorted[i - 1].slug
    sorted[i].nextTitle = sorted[i - 1].title
  }
  // 为每个帖子添加指向上一个帖子的slug和title
  for (let i = 0; i < sorted.length - 1; i++) {
    sorted[i].prevSlug = sorted[i + 1].slug
    sorted[i].prevTitle = sorted[i + 1].title
  }

  // 计算每一个文章的字数
  for (let i = 0; i < sorted.length; i++) {
    let cleanedText = sorted[i].text.replace(/https?:\/\/\S+/g, '');
    sorted[i].wordCount = cleanedText.length;
    sorted[i].readTime = (sorted[i].wordCount / parseInt(siteConfig.readspeed)).toFixed(2)
  }
  return sorted
}

export async function getTagList() {
  const response = await apiClient.category.getAllTags();
  return response.data.sort((a, b) => a.name.localeCompare(b.name));
}

export async function getCategoryList() {
  const response = await apiClient.category.getAllCategories();
  return response.data.sort((a, b) => a.name.localeCompare(b.name));
}

export async function getSortedPages() {
  const pagesList = await apiClient.page.getList()
  const pages = await pagesList.data
  for (let i = 0; i < pages.length; i++) {
    let cleanedText = pages[i].text.replace(/https?:\/\/\S+/g, '');
    pages[i].wordCount = cleanedText.length;
    pages[i].readTime = (pages[i].wordCount / parseInt(siteConfig.readspeed)).toFixed(2)
  }
  return pages
}

export async function getPageBySlug(slug) {
  const pagesList = await apiClient.page.getBySlug(slug)
  const pages = await pagesList.data
  for (let i = 0; i < pages.length; i++) {
    let cleanedText = pages[i].text.replace(/https?:\/\/\S+/g, '');
    pages[i].wordCount = cleanedText.length;
    pages[i].readTime = (pages[i].wordCount / parseInt(siteConfig.readspeed)).toFixed(2)
  }
  return pages
}