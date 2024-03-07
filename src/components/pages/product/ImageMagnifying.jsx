import React, { useState, useEffect } from 'react'

function ImageMagnifying({ image = '' ,path=''}) {
    const [magimage, setMagimage] = useState([])
    const imagesArray = image.split('@@@');
    useEffect(() => {
        setMagimage(imagesArray)

    }, [image])

    return (
        <div className='w-full flex flex-row justify-start items-start flex-wrap gap-2 '>
            <div className='w-[50%] flex flex-row justify-start items-start flex-wrap gap-2 p-4  relative'>
                {
                    magimage.map((image) => {
                        return (
                            <div className="w-24 relative border-2">
                                <img src={`https://apsensyscare.com/Image/all_products/${path}/${image}`} className="rounded-xl" />
                                <div className="absolute top-1 right-1 cursor-pointer opacity-0 hover:opacity-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
                                    </svg>
                                </div>
                            </div>
                        )
                    })
                }

            </div>

            <button type="submit" class="w-[15%] border flex flex-row justify-around cursor-pointer rounded-md hover:bg-[#ffb356] hover:text-[#fff] py-1 mt-2">Upload</button>
        </div>
    )
}

export default ImageMagnifying