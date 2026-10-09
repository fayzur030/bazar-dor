import ProductDetails from '@/components/ProductDetails'
import { getProductById } from '@/services/getProductById'
import { notFound } from 'next/navigation'

interface ProductsProps {
  params: Promise<{ id: string }>
}

const ProductDetailsPage = async ({ params }: ProductsProps) => {
  const { id } = await params
  const product = await getProductById(Number(id))

  if (!product) {
    notFound()
  }
  return (
    <div>
      <ProductDetails product={product} />
    </div>
  )
}

export default ProductDetailsPage
