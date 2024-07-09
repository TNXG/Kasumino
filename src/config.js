import { fetchConfig } from './middleware/getConfig'
import { CacheConfig } from './store'

export const mxConfig = {
  endpoint: 'https://mx.tnxg.top/api/v2',
}


CacheConfig.set(await fetchConfig())

export const themeConfig = CacheConfig.get()

export const siteConfig = themeConfig?.siteConfig

export const navBarConfig = themeConfig?.navBarConfig

export const profileConfig = themeConfig?.profileConfig

export const licenseConfig = themeConfig?.licenseConfig

