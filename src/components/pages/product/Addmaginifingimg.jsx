import React, { useState, useEffect } from 'react';
import ImageMagnifying from './ImageMagnifying';
import { Image, Input, imagMagnifing, imageMagnified } from '../../index'
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

function Addmaginifingimg({ magnifyingImage, uploadImage, RemoveImage }) {

    const Addrow = () => {
        uploadImage('', 'smallImg')
        uploadImage('', 'mediumImg')
        uploadImage('', 'largeImg')
    }
    const Deleterow = () => {
        RemoveImage('', 'smallImg')
        RemoveImage('', 'mediumImg')
        RemoveImage('', 'largeImg')
    }
    console.log(magnifyingImage);
    return (
        <div className='w-full flex flex-col border p-2 gap-4'>

            <div className='w-full flex flex-row gap-2'>
                <button className="btn btn-success" onClick={Addrow}>Add Row</button>
                <button className="btn btn-error" onClick={Deleterow}>Remove Row</button>
            </div>
            <h2><strong>Small Image [100px/100px]</strong></h2>
            <div className='w-full flex flex-row gap-2'>

                <div className='w-[40%] flex flex-col gap-2'>
                    {
                        magnifyingImage.smallImg.map((item,index) => {
                            return (

                                <Input onChange={(e)=>uploadImage(e.target.value,'smallImg',index)}/>
                            )
                        })
                    }
                </div>
                <div>
                    <Image />
                </div>
            </div>
            <h2><strong>Medium Image [570px/460px] OR [230px/460px]</strong></h2>
            <div className='w-full flex flex-row gap-2'>

                <div className='w-[40%] flex flex-col gap-2'>
                    {
                        magnifyingImage.mediumImg.map((item,index) => {
                            return (

                                <Input onChange={(e)=>uploadImage(e.target.value,'mediumImg',index)}/>
                            )
                        })
                    }
                </div>
                <div>
                    <Image />
                </div>
            </div>
            <h2><strong>Large Image [1200px/1800px]</strong></h2>
            <div className='w-full flex flex-row gap-2'>

                <div className='w-[40%] flex flex-col gap-2'>
                    {
                        magnifyingImage.largeImg.map((item,index) => {
                            return (

                                <Input onChange={(e)=>uploadImage(e.target.value,'largeImg',index)}/>
                            )
                        })
                    }
                </div>
                <div>
                    <Image />
                </div>
            </div>
        </div>

    )
}

export default Addmaginifingimg