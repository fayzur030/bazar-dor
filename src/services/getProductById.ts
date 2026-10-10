import { Product } from '@/types/productTypes'

const BASE_URL = 'https://openapi.programming-hero.com/api/bazardor'
export const getProductById = async (id: number): Promise<Product | null> => {
  try {
    const res = await fetch(`${BASE_URL}/products/${id}`)
    if (!res.ok) {
      throw new Error('Failed to fetch product')
    }
    const data = await res.json()
    return data
  } catch (error) {
    console.error('Error fetching product:', error)
  }
  return null
}
