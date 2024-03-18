import React, { useState } from 'react'
import Rightbannerform from './Rightbannerform'
import Leftbannerform from './Leftbrandsform'
import Image from '../../../others/Image'
import { AddBanners } from '../../index'
const keys={
    brand_name:"",
    featured_brand_link:"",
    featured_brand_image:"",
    top_brand_link:"",
    top_brand_image:""

    
}
export default function Bannerform() {
    const [brandsbanner, setBrandsbanners] = useState(keys)
    const Addbrands=()=>{
        AddBanners(brandsbanner).then((res)=>{
            console.log(res);
            toast("Insert success");
        })
        console.log("Submitted:", brandsbanner);
        
    }
    const updateBanner = (value, key) => {
        setBrandsbanners((prev) => { return { ...prev, [key]: value } });
    }
    return (
        <div className='w-[90%] flex flex-col  gap-4'>
            <h1><strong>Banners</strong></h1>
            <div className='w-full flex flex-row gap-2'>
                <Leftbannerform updateBanner={updateBanner} brandsbanner={brandsbanner}/>
                <Rightbannerform updateBanner={updateBanner} brandsbanner={brandsbanner}/>
            </div>
            <Image />
            <div className='w-full flex justify-center'>
            <button className="btn btn-success" onClick={Addbrands}>Save</button>
            </div>
        </div>
    )
}
