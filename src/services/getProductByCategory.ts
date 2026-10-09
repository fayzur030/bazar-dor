import { Product } from '@/types/productTypes'
import { notFound } from 'next/navigation'

// const BASE_URL = 'https://api.api-store.workers.dev/api/bazardor'
const BASE_URL = 'https://api.abcz.workers.dev/api/bazardor'
export const getProductByCategory = async (
  slug: string
): Promise<Product[]> => {
  try {
    const res = await fetch(`${BASE_URL}/products?category=${slug}`)
    if (!res.ok) {
      return notFound()
      throw new Error('fetch to categories failed')
    }
    const data = await res.json()
    return data
  } catch (error) {
    console.log(error)
  }
  return []
}
