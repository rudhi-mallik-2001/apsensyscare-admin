import { Outlet } from 'react-router-dom'
import { UpperBar, SideBar } from './components'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {

    return (
        <>
            <ToastContainer position="top-left" />
            <div className='w-full flex flex-col justify-content-between '>
                <UpperBar />
                <div className='w-full max-h-[calc(100vh_-_66px)] flex justify-content-between text-[#747475] '>
                    <SideBar />
                    <div className='w-full max-h-[calc(100vh_-_66px)] flex justify-center items-start text-[#747475] overflow-y-scroll bg-[#fff]'>
                        
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout