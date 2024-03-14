import React, { useState, useEffect } from 'react'
import Image from '../../../others/Image';
import Input from '../../../others/Input';
import { useMagnifyingContext } from '../../../context/categoryFilterContext';

function ImageMagnifying({ image = '', path = '', handelclick = () => { }, imagesize = '' }) {
    const { editmagnifyingImage, seteditmagnifyingImage } = useMagnifyingContext()
    const [magimage, setMagimage] = useState([])
    const imagesArray = image.split('@@@');
    // console.log(imagesArray)
    useEffect(() => {
        setMagimage(imagesArray)

        seteditmagnifyingImage((prev) => ({ ...prev, [imagesize]: imagesArray }))
    }, [image])
    const handelImage = (image, imagesize,index) => {
        // if (path == 'carousel-100-100') {
        //     UploadNewImage('image_100', image)
        // } else if (path === 'carousel-230-460') {
        //     UploadNewImage('image_230', image)
        // } else {
        //     UploadNewImage('image_1200', image)
        // }
        console.log(image)
        const item=editmagnifyingImage[imagesize]
        item[index]=image;
        seteditmagnifyingImage((prev) => ({ ...prev, [imagesize]: item }))
        console.log(image, path)
    }
    return (
        <div className='w-full flex flex-row justify-start items-start flex-wrap gap-2 '>
            <div className='w-fit flex flex-row justify-start items-start flex-wrap gap-2 p-4  relative'>
                {
                   magimage.map((image) => {
                        if (image != '')
                            return (
                                <div className="w-24 relative border-2">
                                    <img src={`https://apsensyscare.com/Image/all_products/${path}/${image}`} className="rounded-xl" />
                                    <div className="absolute top-1 right-1 cursor-pointer opacity-0 hover:opacity-100" onClick={() => handelclick(image, path)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
                                        </svg>
                                    </div>
                                </div>
                            )
                    }) 
                }
            </div>
            <div className='w-[300px] flex flex-col gap-1'>
                <Input value={magimage[0] !== undefined ? magimage[0] : editmagnifyingImage[imagesize][0]} onChange={(e) => handelImage(e.target.value, imagesize,0)} />
                <Input value={magimage[1] !== undefined ? magimage[1] : editmagnifyingImage[imagesize][1]} onChange={(e) => handelImage(e.target.value, imagesize,1)} />
                <Input value={magimage[2] !== undefined ? magimage[2] : editmagnifyingImage[imagesize][2]} onChange={(e) => handelImage(e.target.value, imagesize,2)} />
            </div>
            <div>
                <Image folder={`all_products/${path}`} path={path} />
            </div>
        </div>
    )
}

export default ImageMagnifying