import { Product } from '@/types/productTypes'

const BASE_URL = 'https://api.api-store.workers.dev/api/bazardor'
export const getAllProducts = async (): Promise<Product[]> => {
  try {
    const res = await fetch(`${BASE_URL}/products`)
    if (!res.ok) {
      // return notFound()
      throw new Error('fetch to product failed')
    }
    const products = await res.json()
    return products
  } catch (error) {
    console.log(error)
  }
  return []
}
