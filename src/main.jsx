import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Categories, ProductsCont, ProductEdit, CategoryEdit, SignIn, Commands, SingelOrder, Coustemers } from './components/index.js'
import Addcategorycont from './components/pages/category/Addcategorycont.jsx'
import Addproductcont from './components/pages/product/Addproductcont.jsx'
import { checkTokenLoader } from './utils/utils.js'
import Addproductsize from './components/pages/category/Addproductsize.jsx'
import Customerform from './components/pages/coustemers/Customerform.jsx'
import { ToastContainer } from 'react-toastify'
import Bannerform from './components/pages/banner/Bannerform.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Layout />} loader={checkTokenLoader}> 
        <Route path='' element={<App />} />
        <Route path='products' element={<ProductsCont />} />
        <Route path='products/:id' element={<ProductsCont />} />
        <Route path='category' element={<Categories />} />
        <Route path='orders' element={<Categories />} />
        <Route path='customers' element={<Coustemers />} />
        <Route path='banners' element={<Bannerform/>} />
        <Route path='products/edit/:id' element={<ProductEdit />} />
        <Route path='category/edit/:id' element={<CategoryEdit />} />
        <Route path='add-category' element={<Addcategorycont />} />
        <Route path='add-product' element={<Addproductcont />} />
        <Route path='add-size' element={<Addproductsize />} />
        <Route path='commands' element={<Commands />} />
        <Route path='commands/orders/:id' element={<SingelOrder />} />
        <Route path='customers/:userid' element={<Customerform />} />
      </Route>
      <Route path='sign-in' element={<SignIn />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainer position="top-left" />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
