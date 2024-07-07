import {
  AUTO_MODE,
  DARK_MODE,
  DEFAULT_THEME,
  LIGHT_MODE,
} from '@constants/constants'

export function getDefaultHue() {
  const fallback = '250'
  const configCarrier = document.getElementById('config-carrier')
  return Number.parseInt(configCarrier?.dataset.hue || fallback)
}

export function getHue() {
  const stored = localStorage.getItem('hue')
  return stored ? Number.parseInt(stored) : getDefaultHue()
}

export function setHue(hue) {
  localStorage.setItem('hue', String(hue))
  const r = document.querySelector(':root')
  if (!r) {
    return
  }
  r.style.setProperty('--hue', hue)
}

export function applyThemeToDocument(theme) {
  switch (theme) {
    case LIGHT_MODE:
      document.documentElement.classList.remove('dark')
      break
    case DARK_MODE:
      document.documentElement.classList.add('dark')
      break
    case AUTO_MODE:
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
      break
  }
}

export function setTheme(theme) {
  localStorage.setItem('theme', theme)
  applyThemeToDocument(theme)
}

export function getStoredTheme() {
  return localStorage.getItem('theme') || DEFAULT_THEME
}
