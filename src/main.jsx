import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Categories, ProductsCont,ProductEdit,CategoryEdit } from './components/index.js'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<App />} />
      <Route path='products' element={<ProductsCont />} />
      <Route path='products/:id' element={<ProductsCont />} />
      <Route path='category' element={<Categories />} />
      <Route path='/products/edit/:id' element={<ProductEdit />} />
      <Route path='/category/edit/:id' element={<CategoryEdit />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
