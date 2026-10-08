import { Skeleton } from '@heroui/react'

const Loading = () => {
  return (
    <div className='mx-auto w-full max-w-7xl h-screen space-y-6 px-4 py-6'>
      {/* Large Card */}
      <div className='space-y-5 rounded-xl p-4 shadow-panel'>
        <Skeleton className='h-64 w-full shrink-0 animate-pulse rounded-lg' />
      </div>

      {/* 3 Column Grid */}
      <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
        {[1, 2, 3].map((item) => (
          <div key={item} className='space-y-4 rounded-xl p-4 shadow-panel'>
            {/* Image + Heading */}
            <div className='flex gap-4'>
              <Skeleton className='h-24 w-24 shrink-0 rounded-lg' />

              <div className='flex-1 space-y-3'>
                <Skeleton className='h-4 w-3/4 rounded-lg' />
                <Skeleton className='h-4 w-1/2 rounded-lg' />
              </div>
            </div>

            {/* Description */}
            <div className='space-y-2'>
              <Skeleton className='h-3 w-full rounded-lg' />
              <Skeleton className='h-3 w-5/6 rounded-lg' />
              <Skeleton className='h-3 w-2/3 rounded-lg' />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Loading
