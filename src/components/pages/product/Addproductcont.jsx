import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import AddProductDetailsEdit from './AddProductDetailsEdit';
// import Magnifingimage from './Magnifingimage';
import Addmaginifingimg from './Addmaginifingimg';
import { Addproduct } from '../../../api/Api';
import { toast } from 'react-toastify';


export default function Addproductcont() { 

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
        product_image: "",
        stock_qty: "",
        
    }

    const image={
        smallImg:["","",""],
        mediumImg:["","",""],
        largeImg:["","",""]
    }

    const [magnifyingImage, setMagnifyingImage] = useState(image)

    const [tabclick, setTabclick] = useState('2');

    const [productdetails, setProductdetails] = useState(productkey)

    const handelclick = (ref) => {
        setTabclick(ref)
    }

    const uploadImage = (value='', key,index=null) => {
        const currentValue=magnifyingImage[key]
        if (index!=null) {
            currentValue[index]=value
        }else{
            currentValue.push(value)
        }
        console.log(currentValue);
        setMagnifyingImage((prev) => { return { ...prev, [key]: currentValue } });
    }
    const RemoveImage = (value='', key) => {
        const currentValue=magnifyingImage[key]
        currentValue.pop(value)
        console.log(currentValue);
        setMagnifyingImage((prev) => { return { ...prev, [key]: currentValue } });
    }

    const updateDetails = (value, key) => {
        setProductdetails((prev) => { return { ...prev, [key]: value } });
    }

    const productclick = () => {
        const Imagedetails={
            smallImg:magnifyingImage.smallImg.join("@@@"),
            mediumImg:magnifyingImage.mediumImg.join("@@@"),
            largeImg:magnifyingImage.largeImg.join("@@@")
        }
        Addproduct(productdetails,Imagedetails).then(() => {
            // console.log("clicking");
            toast.success('Product added  Successfully')
            setProductdetails(productkey)
        })
        console.log("submitted", productdetails);
    }
    return (
        <div className='w-[calc(100vw_-_200px)] flex flex-col justify-start px-3'>
            <div className='w-[100%] border rounded-md p-2 flex justify-end  gap-y-2 mb-2'>
                <Link class="w-[10%] border flex flex-row justify-around cursor-pointer rounded-md hover:bg-[#ffb356] hover:text-[#fff] py-1" to={'/add-product'}>Add Product</Link>
            </div>
            {/* <div className='w-[100%] border rounded-md p-2 flex justify-end  gap-y-2 mb-2'>
                <Link class="w-[10%] border flex flex-row justify-around cursor-pointer rounded-md hover:bg-[#ffb356] hover:text-[#fff] py-1" to={'/add-size'}>Add size</Link>
            </div> */}
            <div className='w-full flex flex-col justify-start' action="" method="post">
                <div role="tablist" className="tabs tabs-lifted " >


                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Details"
                        readOnly
                        checked={tabclick === '2' ? true : false}
                        onClick={() => handelclick('2')}
                    />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box rounded-b-[0px] p-6">
                        <div className='w-full flex flex-row flex-wrap justify-start items-start gap-2'>
                            <AddProductDetailsEdit updateDetails={updateDetails} />
                        </div>
                    </div>
                    <input type="radio" name="my_tabs_2" role="tab" className="tab !w-max" aria-label="Magnifying Images"
                        readOnly
                        checked={tabclick === '4' ? true : false}
                        onClick={() => handelclick('4')}
                    />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box rounded-b-[0px] p-6">
                        {/* <Magnifingimage /> */}
                        <Addmaginifingimg uploadImage={uploadImage} RemoveImage={RemoveImage} magnifyingImage={magnifyingImage}/>
                    </div>
                </div>
                <div className='flex flex-row justify-between bg-[#d9d9d9] px-6 py-3 rounded-b-[10px]'>
                    {/* <button className="btn btn-sm btn-success">Success</button> */}
                    <button type='button' className="btn btn-sm btn-success" onClick={productclick}>Add Product </button>
                </div>
            </div>
        </div>
    )
}
