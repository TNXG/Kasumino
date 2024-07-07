import { siteConfig } from '../config'
import { en } from './languages/en'
import { ja } from './languages/ja'
import { zh_CN } from './languages/zh_CN'
import { zh_TW } from './languages/zh_TW'

const defaultTranslation = en

const map = {
  en: en,
  en_us: en,
  en_gb: en,
  en_au: en,
  zh_cn: zh_CN,
  zh_tw: zh_TW,
  ja: ja,
  ja_jp: ja,
}

function getTranslation(lang) {
  return map[lang.toLowerCase()] || defaultTranslation
}

function i18n(key) {
  const lang = siteConfig.lang || 'en'
  return getTranslation(lang)[key]
}

export { getTranslation, i18n }
