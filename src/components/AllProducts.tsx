import { getAllProducts } from '@/services/productService'
import ProductSort from './ProductSort'

const AllProducts = async () => {
  const allProducts = await getAllProducts()
  return (
    <div>
      <ProductSort allProducts={allProducts} title='সব পণ্য' />
    </div>
  )
}

export default AllProducts
