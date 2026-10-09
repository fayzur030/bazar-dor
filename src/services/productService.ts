import { Product } from '@/types/productTypes'
import { notFound } from 'next/navigation'

// const BASE_URL = 'https://api.api-store.workers.dev/api/bazardor'
const BASE_URL = 'https://api.abcz.workers.dev/api/bazardor'
export const getAllProducts = async (): Promise<Product[]> => {
  try {
    const res = await fetch(`${BASE_URL}/products`)
    if (!res.ok) {
      return notFound()
    }
    const products = await res.json()
    return products
  } catch (error) {
    console.log(error)
  }
  return []
}
