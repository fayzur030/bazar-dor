import { Product } from '@/types/productTypes'

const BASE_URL = 'https://openapi.programming-hero.com/api/bazardor'
export const getProductByCategory = async (
  slug: string
): Promise<Product[]> => {
  try {
    const res = await fetch(`${BASE_URL}/products?category=${slug}`)
    if (!res.ok) {
      throw new Error('Failed to fetch category products')
    }
    const data = await res.json()
    return data
  } catch (error) {
    console.log(error)
  }
  return []
}
