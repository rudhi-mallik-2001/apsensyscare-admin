import React, { useState } from 'react'
import Input from '../../../others/Input';

export default function Leftbannerform({ updateBanner, brandsbanner }) {

    return (
        <div className='w-[48%]  p-4  border rounded-md'>
            <Input
                label="Brand Name*"
                placeholder="Enter Your Category"
                type="text"
                onChange={(e) => updateBanner(e.target.value, "brand_name")}
                value={brandsbanner.brand_name}
            />
            <Input
                label="Featured Banner Image*"
                placeholder="Enter category url"
                type="text"
                onChange={(e) => updateBanner(e.target.value, "featured_brand_image")}

            />
            <Input
                label="Featured Brand Link*"
                placeholder="Enter category url"
                type="text"
                onChange={(e) => updateBanner(e.target.value, "featured_brand_link")}

            />

        </div>
    )
}
