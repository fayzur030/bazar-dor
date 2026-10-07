import { getCategories } from '@/services/categoryService'
import React from 'react'
import Navbar from './Navbar'

const CategoryNavbar = async () => {
  const navItems = await getCategories()

  return (
    <div>
      <Navbar navItems={navItems} />
    </div>
  )
}

export default CategoryNavbar
