import { Outlet } from 'react-router-dom'
import { UpperBar, SideBar } from './components'
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { MagnifyingContextProvider } from './context';

const Layout = () => {
    const [magnifyingImage, setMagnifyingImage] = useState([])
    const [editmagnifyingImage, seteditmagnifyingImage] = useState({
        image_100: [],
        image_230: [],
        image_1200: []
    })
    const changeImage = (value) => {
        setMagnifyingImage(value)
    }
    return (
        <MagnifyingContextProvider value={{ changeImage, magnifyingImage, setMagnifyingImage, editmagnifyingImage, seteditmagnifyingImage }}>
            
            <div className='w-full flex flex-col justify-content-between bg-[#fff]'>
                <UpperBar />
                <div className='w-full max-h-[calc(100vh_-_80px)] h-[calc(100vh_-_80px)] flex justify-content-between text-[#747475] '>
                    <SideBar />
                    <div className='w-full max-h-[calc(100vh_-_80px)] h-[calc(100vh_-_80px)] flex justify-center items-start text-[#747475] overflow-y-scroll bg-[#fff]'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </MagnifyingContextProvider>
    ) 
}

export default Layout