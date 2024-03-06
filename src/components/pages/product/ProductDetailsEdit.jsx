import React, { useState } from 'react'
import { Input, updateProductsById, uploadImage,Image } from '../../index'
import { toast } from 'react-toastify'

function ProductDetailsEdit({ product, updateDetails }) {
    
    const handelInputs = (value, key) => {
        updateDetails(value, key)
    }
    const updateproduct = (value) => {
        updateProductsById(value).then((res) => {
            toast("Update success");
        })
    }
    
    return (
        <div className='w-[100%] p-2 flex flex-row  gap-2 '>
            <div className='w-[100%] flex flex-col  gap-2'>
                <Input
                    label="Brand Name*"
                    placeholder="Enter Your Product"
                    type="text"
                    value={product.brand_name}
                    onChange={(e) => handelInputs(e.target.value, 'brand_name')}
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
                    value={product.name}
                    onChange={(e) => handelInputs(e.target.value, 'name')}
                />
                <Input
                    label="Short Name*"
                    placeholder="Enter short Name"
                    type="text"
                    value={product.short_name}
                    onChange={(e) => handelInputs(e.target.value, 'short_name')}
                />
                <Input
                    label="Search keyword*"
                    placeholder="Enter Search keyword"
                    type="text"
                    value={product.search_keywords}
                    onChange={(e) => handelInputs(e.target.value, 'search_keywords')}

                />
                <Input
                    label="Product Url*"
                    placeholder="Enter Product Url"
                    type="text"
                    value={product.product_url}
                    onChange={(e) => handelInputs(e.target.value, 'product_url')}
                />
                <Input
                    label="Product Default Price*"
                    placeholder="Enter price of your Product "
                    type="text"
                    value={product.default_price}
                    onChange={(e) => handelInputs(e.target.value, 'default_price')}
                />
                <Input
                    label="Product Description*"
                    placeholder="Enter description of your Product "
                    type="text"
                    value={product.description}
                    onChange={(e) => handelInputs(e.target.value, 'description')}
                />
                <Input
                    label="Product Long Description*"
                    placeholder="Enter longdescription of your Product "
                    type="text"
                    value={product.long_description}
                    onChange={(e) => handelInputs(e.target.value, 'long_description')}
                />
                <div className='w-full h-[50px] flex  items-center'>
                    <button type='button' className="btn btn-sm btn-success" onClick={() => updateproduct(product)}>Upload</button>
                </div>
            </div>
            <div className='w-full  flex flex-col justify-start items-start gap-2 p-6'>
                <div className='border-2 rounded-md'>
                    <img src={`https://apsensyscare.com/Image/all_products/${product.product_image}`} alt="" srcSet="" />
                </div>
                
                <Image/>
            </div>
        </div>
    )
}

export default ProductDetailsEdit