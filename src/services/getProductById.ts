import { Product } from '@/types/productTypes'
// import { notFound } from 'next/navigation'

// const BASE_URL = 'https://api.api-store.workers.dev/api/bazardor'
const BASE_URL = 'https://api.abcz.workers.dev/api/bazardor'
export const getProductById = async (id: number): Promise<Product | null> => {
  try {
    const res = await fetch(`${BASE_URL}/products/${id}`)
    if (!res.ok) {
      throw new Error(`Product details failed: ${res.status} ${res.statusText}`)
    }
    const data = await res.json()
    return data
  } catch (error) {
    console.log(error)
  }
  return null
}
