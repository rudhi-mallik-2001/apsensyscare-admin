import React, { useState } from 'react'
import {uploadImage} from '../api/Api'
import { toast } from 'react-toastify'

const Image = ({folder,current=false,path,handelImage=()=>{}}) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [uploadedImage, SetuploadedImage] = useState('');
    
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setSelectedImage(file);
    };
    const handleUpload = (e) => {
        e.preventDefault()
        if (!selectedImage) {
            alert("Please select an image before uploading.");
            return;
        }

        const formdata = new FormData();
        formdata.append('fileToUpload', selectedImage);
        formdata.append('folder', folder);
        uploadImage(formdata).then((res) => {
            if (res.status === 'success') {
                // console.log('hello')
                SetuploadedImage(res.name)
                navigator.clipboard.writeText(res.name);
                toast("Image Name coppied");
                if(current){
                    handelImage(res.name,path)
                    console.log(res.name)
                }
            }
        })
    }
    return (
        <div className='w-full flex flex-col gap-2'>
            <div className="w-full">
                <label className="form-control w-full max-w-md">
                    <input type="text" placeholder="No Image selected" className="input input-bordered w-full max-w-md" value={uploadedImage} readOnly />
                </label>
            </div>
            <form encType="multipart/form-data" onSubmit={handleUpload} className="w-full">
                <input
                    type="file"
                    className="file-input file-input-bordered w-full max-w-md"
                    placeholder="Daisy"
                    accept="image/*"
                    onChange={handleImageChange}
                    name="fileToUpload"
                /><input
                    type="text"
                    className="hidden"
                    placeholder="Daisy"
                    accept="image/*"
                    value={''}
                    name="fileToUpload"
                />
                <button type='submit' className="w-[30%] border flex flex-row justify-around cursor-pointer rounded-md hover:bg-[#ffb356] hover:text-[#fff] py-1 mt-2" >Upload</button>
            </form>
        </div>

    )
}

export default Image