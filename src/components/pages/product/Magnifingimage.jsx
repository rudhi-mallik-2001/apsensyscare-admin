import React, { useState, useEffect } from 'react';
import ImageMagnifying from './ImageMagnifying';
import { imagMagnifing } from '../../index'
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useMagnifyingContext } from '../../../context/categoryFilterContext';

function Magnifingimage() {
    const { id } = useParams();
    const { changeImage, magnifyingImage, setMagnifyingImage, editmagnifyingImage, seteditmagnifyingImage } = useMagnifyingContext()
    // const [magnifyingImage, setMagnifyingImage] = useState({});
    const [clickitem, setclickitem] = useState('');
    useEffect(() => {
        imagMagnifing(id).then((res) => {
            changeImage(res[0]);
        })
    }, [id])
    const handelclick = (name, path) => {
        if (path == 'carousel-100-100') {

            setMagnifyingImage((prev) => ({ ...prev, image_100: magnifyingImage.image_100.replace(`${name}`, '') }))
            console.log(name, path)
        } else if (path === 'carousel-230-460') {
            setMagnifyingImage((prev) => ({ ...prev, image_230: magnifyingImage.image_230.replace(`${name}`, '') }))
            console.log(name, path)
        } else {

            setMagnifyingImage((prev) => ({ ...prev, image_1200: magnifyingImage.image_1200.replace(`${name}`, '') }))
            console.log(name, path)
        }
        // setClicktab(name)
    }
    const UploadNewImage = (key, image) => {
        // const item=editmagnifyingImage[key]
        // item.push(image)
        // seteditmagnifyingImage((prev)=>({...prev,[key]:item}))
        console.log(editmagnifyingImage)
    }
    const updateMagnifiedImage=()=>{
        if(editmagnifyingImage.image_100.length===editmagnifyingImage.image_1200.length===editmagnifyingImage.image_230.length){
            const image_100=editmagnifyingImage.image_100.join('@@@')
            const image_230=editmagnifyingImage.image_230.join('@@@')
            const image_1200=editmagnifyingImage.image_1200.join('@@@')
        }
    }
    return (
        <div className='w-full flex flex-col border p-2'>
            <h2><strong>Small Image [100px/100px]</strong></h2>
            <ImageMagnifying image={magnifyingImage?.image_100} path={'carousel-100-100'} handelclick={handelclick} UploadNewImage={UploadNewImage} imagesize="image_100" />
            <h2><strong>Medium Image [570px/460px] OR [230px/460px]</strong></h2>
            <ImageMagnifying image={magnifyingImage?.image_230} path={'carousel-230-460'} handelclick={handelclick} UploadNewImage={UploadNewImage} imagesize="image_230" />

            <h2><strong>Large Image [1200px/1800px]</strong></h2>
            <ImageMagnifying image={magnifyingImage?.image_1200} path={'carousel-1200-1800'} handelclick={handelclick} UploadNewImage={UploadNewImage} imagesize="image_1200" />

            <button className="btn w-[5%] btn-success" onClick={updateMagnifiedImage} >Save</button>
        </div>
    )
}

export default Magnifingimage