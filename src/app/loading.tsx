const Loading = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50'>
      <div className='text-center'>
        <div className='mx-auto w-14 h-14 border-4 border-gray-200 border-t-indigo-600 rounded-full animate-spin' />

        <h2 className='mt-5 text-xl font-semibold text-gray-800'>
          Please wait
        </h2>

        <p className='mt-1 text-sm text-gray-500'>Loading your data...</p>
      </div>
    </div>
  )
}

export default Loading
