import { Category } from '@/types/categoryTypes'
// import { notFound } from 'next/navigation'

// const BASE_URL = 'https://api.api-store.workers.dev/api/bazardor'
const BASE_URL = 'https://api.abcz.workers.dev/api/bazardor' // alternative api
export const getCategories = async (): Promise<Category[]> => {
  try {
    const res = await fetch(`${BASE_URL}/categories`)
    if (!res.ok) {
      // return notFound()
      throw new Error('fetch to categories failed')
    }
    const navItems = await res.json()
    return navItems
  } catch (error) {
    console.log(error)
  }
  return []
}
