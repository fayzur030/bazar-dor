import { Product } from '@/types/productTypes'

const BASE_URL = 'https://openapi.programming-hero.com/api/bazardor'
export const getAllProducts = async (): Promise<Product[]> => {
  try {
    const res = await fetch(`${BASE_URL}/products`)
    if (!res.ok) {
      throw new Error('Failed to fetch products')
    }
    const products = await res.json()
    return products
  } catch (error) {
    console.error('Error fetching products:', error)
  }
  return []
}
