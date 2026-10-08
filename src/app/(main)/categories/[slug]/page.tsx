import EmptyMessage from '@/components/EmptyMessage'
import ProductSort from '@/components/ProductSort'
import { getProductByCategory } from '@/services/getProductByCategory'
import { banglaNumber } from '@/utils/unitLabel'
import { Card } from '@heroui/react'

interface ProductCategoryProps {
  params: Promise<{ slug: string }>
}

const CategoryPage = async ({ params }: ProductCategoryProps) => {
  const { slug } = await params
  const categoryProducts = await getProductByCategory(slug)

  const category = categoryProducts[0]

  return (
    <div>
      <div className='mx-auto mt-10 max-w-7xl px-3 lg:px-0'>
        <Card className='w-full items-stretch flex-col md:flex-row'>
          <div className='flex shrink-0 items-center justify-center text-4xl'>
            {category?.categoryIcon}
          </div>

          <div className='flex min-w-0 flex-1 flex-col gap-3'>
            <Card.Header className='gap-2'>
              <Card.Title className='text-xl font-bold sm:text-2xl'>
                {category?.categoryNameBn}
              </Card.Title>

              <Card.Description className='text-sm sm:text-base'>
                {banglaNumber(categoryProducts.length)}টি পণ্যের আজকের দাম ও
                পরিবর্তন
              </Card.Description>
            </Card.Header>
          </div>
        </Card>
      </div>
      <div>
        {categoryProducts.length === 0 ? (
          <EmptyMessage />
        ) : (
          <ProductSort
            allProducts={categoryProducts}
            description={`মোট ${banglaNumber(categoryProducts.length)} টি পণ্য দেখানো হচ্ছে`}
          />
        )}
      </div>
    </div>
  )
}

export default CategoryPage
