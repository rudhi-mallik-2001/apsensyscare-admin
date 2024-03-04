import UpperBar from './layouts/UpperBar.jsx'
import SideBar from './layouts/SideBar.jsx'
import ProductsCont from './pages/product/ProductsCont.jsx'
import ProductEdit from './pages/product/ProductEdit.jsx'
import Categories from './pages/category/Categories.jsx'
import CategoryEdit from './pages/category/CategoryEdit.jsx'
import Input from '../others/Input.jsx'
import ProductDetailsEdit from './pages/product/ProductDetailsEdit.jsx'
import CategoryDetailsEdit from './pages/category/CategoryDetailsEdit.jsx'
import { fetchProducts, fetchAllProducts, fetchAllCategory,fetchProductdetailsById,updateProductsById,updateCategoryById,fetchCategoryById ,uploadImage} from '../api/Api'




export { UpperBar, SideBar, ProductsCont, Categories, ProductEdit,CategoryEdit, fetchProducts, fetchAllProducts, fetchAllCategory,fetchProductdetailsById,Input,ProductDetailsEdit,updateProductsById,CategoryDetailsEdit,updateCategoryById,fetchCategoryById,uploadImage}  