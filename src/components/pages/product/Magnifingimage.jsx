import React, { useState,useEffect } from 'react';
import ImageMagnifying from './ImageMagnifying';
import { imagMagnifing } from '../../index'
import { useParams } from 'react-router-dom';

function Magnifingimage() {
    const { id } = useParams();
    const [magnifyingImage, setMagnifyingImage] = useState({});
    useEffect(() => {
        imagMagnifing(id).then((res) => {
            setMagnifyingImage(res[0]);
        })
    }, [id])
    // const handelclick = (ref) => { 
    //     setClicktab(ref)
    // } 
    return (
        <div className='w-full flex flex-col border p-2'>
            <h2><strong>Small Image</strong></h2>
            <ImageMagnifying image={magnifyingImage?.image_100} path={'carousel-100-100'}/>
            <h2><strong>Medium Image</strong></h2>
            <ImageMagnifying image={magnifyingImage?.image_230} path={'carousel-230-460'}/>

            <h2><strong>Large Image</strong></h2>
            <ImageMagnifying image={magnifyingImage?.image_1200} path={'carousel-1200-1800'}/>

            <button className="btn w-[5%] btn-success" >Save</button>
        </div>
    )
}

export default Magnifingimage