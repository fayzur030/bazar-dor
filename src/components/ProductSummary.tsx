import { Product } from '@/types/productTypes'
import { banglaNumber, getUnitName } from '@/utils/unitLabel'
import { Button, Card } from '@heroui/react'
import { Table } from '@heroui/react'
import Link from 'next/link'

interface ProductSummaryProps {
  product: Product | null
}

const ProductSummary = ({ product }: ProductSummaryProps) => {
  const minAmount =
    product?.markets.reduce(
      (min, market) => Math.min(min, market.min),
      Infinity
    ) ?? 0

  const maxAmount =
    product?.markets.reduce(
      (max, market) => Math.max(max, market.max),
      -Infinity
    ) ?? 0
  console.log(minAmount, maxAmount)

  const averageAmmount = Math.floor((minAmount + maxAmount) / 2)
  const tableHeader = ['বাজার', 'বিভাগ', 'সর্বনিম্ন', 'সর্বাধিক', 'গড়']

  return (
    <div>
      <Card className='rounded-lg'>
        <Card.Header className='text-xl font-semibold'>
          দামের সারসংক্ষেপ
        </Card.Header>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
          <ProductSummaryCard
            title='সর্বনিম্ন দাম'
            amount={banglaNumber(Number(minAmount))}
            description='সবচেয়ে কম দামের বাজার'
          />

          <ProductSummaryCard
            title='সর্বাধিক দাম'
            amount={banglaNumber(maxAmount)}
            description='সবচেয়ে বেশি দামের বাজার'
          />

          <ProductSummaryCard
            title='গড় দাম'
            amount={banglaNumber(averageAmmount)}
            description={`প্রতি ${getUnitName(product?.unit as string)} -এর হিসাবে
`}
          />
        </div>
        <Card.Header className='text-xl font-semibold pt-6'>
          বাজারভিত্তিক আজকের দাম
        </Card.Header>
        <Table>
          <Table.ScrollContainer >
            <Table.Content className='min-w-150'>
              <Table.Header>
                {tableHeader.map((header, idx) => (
                  <Table.Column key={idx} isRowHeader className='text-base'>
                    {header}
                  </Table.Column>
                ))}
              </Table.Header>
              <Table.Body >
                {(product?.markets ?? []).map((tableRow, idx) => {
                  const average = (tableRow.max + tableRow.min) / 2
                  const rowColor = idx % 2 === 1 ? 'bg-[#EDF5F1]' : 'bg-white'

                  return (
                    <Table.Row
                      key={idx}
                      className='hover:bg-[#B8E5D8] transition-colors duration-200 '
                    >
                      <Table.Cell className={rowColor}>
                        {tableRow.market}
                      </Table.Cell>
                      <Table.Cell className={rowColor}>
                        {tableRow.division}
                      </Table.Cell>
                      <Table.Cell className={rowColor}>
                        {banglaNumber(tableRow.min)} টাকা
                      </Table.Cell>
                      <Table.Cell className={rowColor}>
                        {banglaNumber(tableRow.max)} টাকা
                      </Table.Cell>
                      <Table.Cell className={rowColor}>
                        {banglaNumber(average)} টাকা
                      </Table.Cell>
                    </Table.Row>
                  )
                })}
              </Table.Body>
            </Table.Content>
          </Table.ScrollContainer>
        </Table>
      </Card>
      <Button className='mt-8 rounded-md' variant='outline'>
        <Link href={`/categories/${product?.category}`}>
          <span>{product?.image} </span>
          সব {<span>{product?.categoryNameBn}</span>}
        </Link>
      </Button>
    </div>
  )
}

export default ProductSummary

const ProductSummaryCard = ({
  title,
  amount,
  description,
}: {
  title: string
  amount: string
  description: string
}) => {
  return (
    <Card className='border' variant='default'>
      <Card.Header className='space-y-2'>
        <Card.Title className='font-normal text-[#5A6762]'>{title}</Card.Title>

        <Card.Description
          className={` text-2xl font-semibold  ${title === 'সর্বাধিক দাম' ? 'text-red-600' : 'text-green-600'}`}
        >
          {amount} <span className='font-normal text-base'>টাকা</span>
        </Card.Description>

        <Card.Description>{description}</Card.Description>
      </Card.Header>
    </Card>
  )
}
