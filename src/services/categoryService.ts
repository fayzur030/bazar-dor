import { Category } from '@/types/categoryTypes'

const BASE_URL = 'https://openapi.programming-hero.com/api/bazardor'
export const getCategories = async (): Promise<Category[]> => {
  try {
    const res = await fetch(`${BASE_URL}/categories`)
    if (!res.ok) {
      throw new Error('Failed to fetch category')
    }
    const navItems = await res.json()
    return navItems
  } catch (error) {
    console.log(error)
  }
  return []
}
