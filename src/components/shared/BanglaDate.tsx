'use client'

import { useEffect, useState } from 'react'

const BanglaDate = () => {
  const [currentDate, setCurrentDate] = useState('')

  useEffect(() => {
    const date = new Intl.DateTimeFormat('bn-BD', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      timeZone: 'Asia/Dhaka',
    }).format(new Date())

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurrentDate(date)
  }, [])

  return <div className='text-xs md:text-sm text-[#384641]'>{currentDate}</div>
}

export default BanglaDate
