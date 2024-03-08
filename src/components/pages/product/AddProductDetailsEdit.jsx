import React,{useState} from 'react'
import { Input, Image } from '../../index'

export default function AddProductDetailsEdit() {
    const productkey = {
        brand_name: "",
        category_id: "",
        name: "",
        short_name: "",
        search_keywords: "",
        product_url: "",
        default_price: "",
        default_size: "",
        description: "",
        long_description: "",
        product_image: ""
    }
    const [addproduct, setAddproduct] = useState(productkey)

    const handleProduct=(val,key)=>{
        setAddproduct((prev)=>({...prev,[key]:val}))
    }
    const productclick=()=>{
        console.log("submitted",addproduct);
    }
    return (
        <div className='w-[98%] p-2 flex flex-row  gap-2 border rounded-md'>
            <div className='w-[50%]'>
                <Input
                    label="Enter the brand Name*"
                    placeholder="Enter Your Product"
                    type="text"
                onChange={(e) => handleProduct(e.target.value, 'brand_name')}

                />
                <Input
                    label="Enter the Name*"
                    placeholder="Enter Your Name"
                    type="text"
                onChange={(e) => handleProduct(e.target.value, 'name')}

                />
                <Input
                    label="Enter the short Name*"
                    placeholder="Enter short Name Product"
                    type="text"
                onChange={(e) => handleProduct(e.target.value, 'short_name')}

                />
                <Input
                    label="Enter the search keyword*"
                    placeholder="Enter search keyword of Product"
                    type="text"
                onChange={(e) => handleProduct(e.target.value, 'search_keywords')}

                />
                <Input
                    label="Enter  url*"
                    placeholder="Enter product url"
                    type="text"
                onChange={(e) => handleProduct(e.target.value, 'product_url')}
                />

                <Input
                    label="Enter default price*"
                    placeholder="Enter price"
                    type="text"
                onChange={(e) => handleProduct(e.target.value, 'default_price')}

                />

                <Input
                    label="Enter default size*"
                    placeholder="Enter default size"
                    type="text"
                onChange={(e) => handleProduct(e.target.value, 'default_size')}
                />


                <Input
                    label="Product description*"
                    placeholder="Enter Product description "
                    type="text"
                onChange={(e) => handleProduct(e.target.value, 'description')}
                />
                <Input
                    label="Long description*"
                    placeholder="Enter Long description"
                    type="text"
                onChange={(e) => handleProduct(e.target.value, 'long_description')}
                />
                <Input
                    label="Product Image*"
                    placeholder="Enter Product Image"
                    type="text"
                onChange={(e) => handleProduct(e.target.value, 'product_image')}
                />
                <div className='w-full h-[50px] flex  items-center'>
                    <button type='button' className="btn btn-sm btn-success" onClick={productclick}>Add Category </button>
                </div>
            </div>
            <div className='w-full  flex flex-col  justify-start items-start gap-2 p-6'>
                <div className='border-2 rounded-md'>
                    <img src="https://apsensyscare.com/Image/all_products/stainpro-lemon-dish-wash-gel.png" alt="" srcset="" />
                </div>
                <Image />
            </div>
        </div>
    )
}
