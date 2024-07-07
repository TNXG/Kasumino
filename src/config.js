import { fetchConfig } from './middleware/getConfig'

export const mxConfig = {
  endpoint: 'https://mx.tnxg.top/api/v2',
}

const themeConfig = await fetchConfig()

export const siteConfig = themeConfig?.siteConfig

export const navBarConfig = themeConfig?.navBarConfig

export const profileConfig = themeConfig?.profileConfig

export const licenseConfig = themeConfig?.licenseConfig

