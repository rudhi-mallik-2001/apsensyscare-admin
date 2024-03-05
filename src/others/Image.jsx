import React from 'react'

const Image = () => {
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
        uploadImage(formdata).then((res) => {
            if (res.status === 'success') {
                console.log('hello')
                SetuploadedImage(res.name)
            }
        })
    }
    return (
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
    )
}

export default Image