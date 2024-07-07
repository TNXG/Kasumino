import { mxConfig } from '../config'

export async function fetchConfig() {
  try {
    const response = await fetch(`${mxConfig.endpoint}/snippets/theme/kasumino`)
    if (response.ok) {
      const data = await response.json()
      return data
    }
    throw new Error('Failed to fetch config')
  } catch (error) {
    console.error('Error fetching config:', error)
    throw error
  }
}
