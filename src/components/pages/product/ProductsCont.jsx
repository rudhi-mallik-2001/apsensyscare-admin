import React, { useEffect, useState } from 'react'
import ProductFilter from './ProductFilter'
import Products from './Products'
import { useParams } from 'react-router-dom';
const ProductsCont = () => {
  let { id } = useParams();
  console.log(id)
  const [filterItem, setfilteredItem] = useState(id)

  const handelFilter = (id) => {
    setfilteredItem(id);
  }
  useEffect(() => {
    handelFilter(id)
  },[id])
  return (
    <div className='w-full flex flex-row gap-2 px-3'>
      <ProductFilter handelFilter={handelFilter} filterItem={filterItem} />

      <Products filterItem={filterItem} />
    </div>
  )
}

export default ProductsCont 