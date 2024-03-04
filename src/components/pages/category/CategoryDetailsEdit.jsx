import React from 'react'
import { Input, updateCategoryById } from '../../index'
import { toast } from 'react-toastify'

function CategoryDetailsEdit({ category,updateCategory }) {
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
                    label="category description*"
                    placeholder="Enter category description "
                    type="text"
                    value={category.category_des}
                    onChange={(e) => handelCategory(e.target.value, 'category_title')}

                />
              
                <div className='w-full h-[50px] flex  items-center'>
                    <button type='button' className="btn btn-sm btn-success" onClick={() =>uploadCategory(category)}>Upload</button>
                </div>
            </div>
           
        </div>
    )
}

export default CategoryDetailsEdit