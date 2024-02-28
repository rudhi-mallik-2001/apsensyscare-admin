import { Outlet } from 'react-router-dom'
import { UpperBar, SideBar } from './components'
import { FilterProvider } from './context/categoryFilterContext.js'
import { useState } from 'react'

const Layout = () => {
    const [filteredItem, setfilteredItem] = useState('')
    const changeFilter = (item) => {
        setfilteredItem(item)
    }
    return (
        <FilterProvider value={{ filteredItem, changeFilter }}>
            <div className='w-full flex flex-col justify-content-between '>
                <UpperBar />
                <div className='w-full flex justify-content-between text-[#747475] '>
                    <SideBar />
                    <Outlet />
                </div>
            </div>
        </FilterProvider>
    )
}

export default Layout