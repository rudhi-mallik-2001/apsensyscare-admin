import React from 'react'
import { Input, updateCategoryById,Image } from '../../index'
import { toast } from 'react-toastify'

function CategoryDetailsEdit({ category, updateCategory }) {
    const handelCategory = (value, key) => {
        console.log('hello')
        updateCategory(value, key)
    }
    const uploadCategory = (value) => {
        // console.log(value)
        updateCategoryById(value).then((res) => {
            console.log(res);
            toast("Update success");
        })
    }
    return (
        <div className='w-[100%] p-2 flex flex-row  gap-2 border rounded-md'>
            <div className='w-[50%]'>
                <Input
                    label="Category Name*"
                    placeholder="Enter Your Product"
                    type="text"
                    value={category.category_name}
                    onChange={(e) => handelCategory(e.target.value, 'category_name')}
                />
                <Input
                    label="category url*"
                    placeholder="Enter category url"
                    type="text"
                    value={category.category_url}
                    onChange={(e) => handelCategory(e.target.value, 'category_url')}
                />

                <Input
                    label="category title*"
                    placeholder="Enter category title"
                    type="text"
                    value={category.category_title}
                    onChange={(e) => handelCategory(e.target.value, 'category_title')}

                />
                <Input
                    label="category url*"
                    placeholder="Enter category url"
                    type="text"
                    value={category.category_url}
                    onChange={(e) => handelCategory(e.target.value, 'category_url')}

                />
                <Input
                    label="category image*"
                    placeholder="Enter category image"
                    type="text"
                    value={category.category_img}
                    onChange={(e) => handelCategory(e.target.value, 'category_img')}

                />
                <Input
                    label="top seller*"
                    placeholder="Enter topsellers"
                    type="text"
                    value={category.topsellers}
                    onChange={(e) => handelCategory(e.target.value, 'topsellers')}

                />
                <Input
                    label="top product*"
                    placeholder="Enter topproduct"
                    type="text"
                    value={category.top_product}
                    onChange={(e) => handelCategory(e.target.value, 'top_product')}

                />
                <Input
                    label="category description*"
                    placeholder="Enter category description "
                    type="text"
                    value={category.category_des}
                    onChange={(e) => handelCategory(e.target.value, 'category_title')}

                />

                <div className='w-full h-[50px] flex  items-center'>
                    <button type='button' className="btn btn-sm btn-success" onClick={() => uploadCategory(category)}>Upload</button>
                </div>
            </div>
            <div className='w-full  flex flex-col  justify-start items-start gap-2 p-6'>
                <div className='border-2 rounded-md'>
                    <img src="https://apsensyscare.com/Image/all_products/stainpro-lemon-dish-wash-gel.png" alt="" srcset="" />
                </div>
                <Image folder="category"/>
            </div>
        </div>
    )
}

export default CategoryDetailsEdit