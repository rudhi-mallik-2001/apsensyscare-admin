import React from 'react'
import { Input } from '../../index'
function CategoryDetailsEdit() {
   
  return (
    <div className='w-[100%] p-2 flex flex-row  gap-2 border rounded-md'>
    <div className='w-[100%]'>
        <Input
            label="Brand Name*"
            placeholder="Enter Your Product"
            type="text"            
        />
        {/* <Input
        label="Category Id*"
        placeholder="Enter Category id"
        type="text"
        value={product.category_id}
        onChange={(e)=>handelInputs(e.target.value,'brand_name')}
    /> */}
        <Input
            label="Product Name*"
            placeholder="Enter Name of Product"
            type="text"
        />
        <Input
            label="Short Name*"
            placeholder="Enter short Name"
            type="text"
        />
        <Input
            label="Search keyword*"
            placeholder="Enter Search keyword"
            type="text"

        />
        <Input
            label="Product Url*"
            placeholder="Enter Product Url"
            type="text"
        />
        <Input
            label="Product Default Price*"
            placeholder="Enter price of your Product "
            type="text"
        />
        <Input
            label="Product Description*"
            placeholder="Enter description of your Product "
            type="text"
        />
        <Input
            label="Product Long Description*"
            placeholder="Enter longdescription of your Product "
            type="text"
        />
        <div className='w-full h-[50px] flex  items-center'>
            <button type='button' className="btn btn-sm btn-success">Upload</button>
        </div>
    </div>
    <div className='w-full  flex flex-col justify-start items-start gap-2 p-6'>
        <div className='border-2 rounded-md'>
            <img src={`https://apsensyscare.com/Image/all_products/${product.product_image}`} alt="" srcset="" />
        </div>
        <div>
            <input type="file" className="file-input file-input-bordered w-full max-w-xs" placeholder="Daisy" />
        </div>
        <a class="w-[30%] border flex flex-row justify-around cursor-pointer rounded-md hover:bg-[#ffb356] hover:text-[#fff] py-1" href="/products/1">Upload</a>
    </div>
</div>
  )
}

export default CategoryDetailsEdit