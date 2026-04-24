const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://rakshit-ai-conditioners-backend.onrender.com/api'
// const API_BASE_URL = 'http://localhost:9000/api'
const API_ORIGIN = import.meta.env.VITE_API_ORIGIN || API_BASE_URL.replace(/\/api$/, '')

export const fetchJSON = async (path, options = {}) => {
  const response = await fetch(`${API_BASE_URL}${path}`, options)
  const payload = await response.json()

  if (!response.ok) {
    throw new Error(payload.error || payload.message || 'API request failed')
  }

  return payload
}

export const getImageUrl = (src) => {
  if (!src) return ''
  if (src.startsWith('http://') || src.startsWith('https://')) return src
  if (src.startsWith('/')) return `${API_ORIGIN}${src}`
  return `${API_ORIGIN}/${src}`
}
