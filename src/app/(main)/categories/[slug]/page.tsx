import PriceCard from '@/components/shared/PriceCard'
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
      <div className='mx-auto mt-10 max-w-7xl'>
        <Card className='w-full items-stretch md:flex-row'>
          <div className='flex items-center justify-center text-4xl'>
            {category?.categoryIcon}
          </div>

          <div className='flex flex-1 flex-col gap-3'>
            <Card.Header className='gap-2'>
              <Card.Title className='text-2xl font-bold'>
                {category?.categoryNameBn}
              </Card.Title>

              <Card.Description>
                {banglaNumber(categoryProducts.length)}টি পণ্যের আজকের দাম ও
                পরিবর্তন
              </Card.Description>
            </Card.Header>
          </div>
        </Card>
      </div>

      <div className='mx-auto mt-6 grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {categoryProducts.map((product) => (
          <PriceCard
            key={product.slug}
            product={product}
            trend={product.change.dir}
          />
        ))}
      </div>
    </div>
  )
}

export default CategoryPage
