import i18nKey from '@i18n/i18nKey'
import { i18n } from '@i18n/translation'

export function pathsEqual(path1, path2) {
  const normalizedPath1 = path1.replace(/^\/|\/$/g, '').toLowerCase()
  const normalizedPath2 = path2.replace(/^\/|\/$/g, '').toLowerCase()
  return normalizedPath1 === normalizedPath2
}

export function joinUrl(...parts) {
  const joined = parts.join('/')
  return joined.replace(/\/+/g, '/')
}

export function getPostUrlBySlug(category, slug) {
  return `/posts/${category}/${slug}`;
}

export function getCategoryUrl(category) {
  if (!category) return null
  if (category === i18n(i18nKey.uncategorized))
    return url('/archive/category/uncategorized/')
  return url(`/archive/category/${category}/`)
}

export function getDir(path) {
  const lastSlashIndex = path.lastIndexOf('/')
  if (lastSlashIndex < 0) {
    return '/'
  }
  return path.substring(0, lastSlashIndex + 1)
}

export function url(path) {
  // Replace `import.meta.env.BASE_URL` with `process.env.BASE_URL` or a hardcoded value as needed
  const baseUrl = import.meta.env.BASE_URL || '/' // Example hardcoded fallback
  return joinUrl('', baseUrl, path)
}
