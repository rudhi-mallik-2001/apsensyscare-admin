import React, { useState } from 'react'
import ProductFilter from './ProductFilter'
import Products from './Products'
const ProductsCont = () => {
  const [filterItem,setfilteredItem]=useState()
  const handelFilter=(id)=>{
    setfilteredItem(id);
  }
  return (
    <div className='w-[calc(100%_-_200px)] flex flex-row gap-2 p-3'>
      <ProductFilter handelFilter={handelFilter} filterItem={filterItem}/>
      <Products filterItem={filterItem}/>
    </div>
  )
}

export default ProductsCont