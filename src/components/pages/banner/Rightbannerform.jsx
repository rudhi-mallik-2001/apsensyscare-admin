import React from 'react'
import Input from '../../../others/Input'

export default function Rightbannerform({updateBanner,brandsbanner}) {
  return (

        <div className='w-[48%] p-4 border rounded-md'>
            <Input
                label="Brand Name*"
                placeholder="Enter Your Category"
                type="text"
                onChange={(e)=>updateBanner(e.target.value,"brand_name")}
                value={brandsbanner.brand_name}
                />
            <Input
                label="Top Brand Image*"
                placeholder="Enter category image"
                type="text"
                onChange={(e)=>updateBanner(e.target.value,"top_brand_image")}
            />
            <Input
                label="Top  Brand Link*"
                placeholder="Enter topsellers"
                type="text"
                onChange={(e)=>updateBanner(e.target.value,"top_brand_link")}
            />
            
        </div>
    
  )
}
