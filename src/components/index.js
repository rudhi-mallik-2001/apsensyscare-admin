import UpperBar from './layouts/UpperBar.jsx'
import SideBar from './layouts/SideBar.jsx'
import ProductsCont from './pages/product/ProductsCont.jsx'
import ProductEdit from './pages/product/ProductEdit.jsx'
import Categories from './pages/category/Categories.jsx'
import CategoryEdit from './pages/category/CategoryEdit.jsx'
import Input from '../others/Input.jsx'
import Image from '../others/Image.jsx'
import ProductDetailsEdit from './pages/product/ProductDetailsEdit.jsx'
import Addproductvarities from './pages/product/Addproductvarities.jsx'
import CategoryDetailsEdit from './pages/category/CategoryDetailsEdit.jsx'
import Addcategorycont from './pages/category/CategoryDetailsEdit.jsx'

import { fetchProducts, fetchAllProducts, fetchAllCategory,fetchProductdetailsById,updateProductsById,updateCategoryById,fetchCategoryById,Addcategory,uploadImage,getProductSizes,fetchSize,addvarity,imagMagnifing,deleteproductvarity,Addproduct} from '../api/Api'

 

 
export { UpperBar, SideBar, ProductsCont, Categories, ProductEdit,CategoryEdit, fetchProducts, fetchAllProducts, fetchAllCategory,fetchProductdetailsById,Input,ProductDetailsEdit,updateProductsById,CategoryDetailsEdit,updateCategoryById,fetchCategoryById,uploadImage,Addcategory,Addcategorycont,Image,getProductSizes,fetchSize,Addproductvarities,addvarity,imagMagnifing,deleteproductvarity,Addproduct}  
  