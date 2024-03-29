import axios from "axios"
import { toast } from "react-toastify";
export const fetchProducts = async (id) => {
    return await axios
        .post("http://apsensyscare.com/backend_api/categoryproducts", id)
        .then((response) => response.data)
};
export const fetchAllProducts = async () => {
    return await axios
        .post("http://apsensyscare.com/backend_api/products")
        .then((response) => response.data)
};
export const fetchAllCategory = async () => {
    return await axios
        .post("http://apsensyscare.com/backend_api/fatch_category")
        .then((response) => response.data.category)
};

export const fetchProductdetailsById = async (id) => {
    return await axios
        .post("http://apsensyscare.com/backend_api/productdetailsbyid", id)
        .then((response) => response.data.productdetails)
};
export const updateProductsById = async (details) => {
    return await axios 
        .post("http://apsensyscare.com/backend_api/updateproducts", details)
        .then((response) => response.data)
};
export const updateCategoryById = async (details) => {
    return await axios
        .post("http://apsensyscare.com/backend_api/updateCategory", details)
        .then((response) => response.data)
};
export const fetchCategoryById = async (id) => {
    return await axios
        .post("http://apsensyscare.com/backend_api/categorydetailsbyid", id)
        .then((response) => response.data.categorydetails)
};
export const Addcategory = async (category) => {
    return await axios
        .post("http://apsensyscare.com/backend_api/addcategory", category)
        .then((response) => response.data)
};
export const Addproduct = async (product,Image) => {
    const temp={
        product,Image
    }
    return await axios
        .post("http://apsensyscare.com/backend_api/addproduct", temp)
        .then((response) => response.data)
};

export const uploadImage = async (data) => {
    return await axios
        .post("http://apsensyscare.com/backend_api/i-upload", data)
        .then((response) => response.data)
};
export const getProductSizes = async (id) => {
    return await axios
        .post("http://apsensyscare.com/backend_api/productsizes", id)
        .then((response) => response.data.productsizes)
};
export const fetchSize = async () => {
    return await axios
        .post("http://apsensyscare.com/backend_api/size")
        .then((response) => response.data.size)
};
export const addvarity = async (data) => {
    return await axios
        .post("http://apsensyscare.com/backend_api/addproductvarities", data)
        .then((response) => response.data)
};
// export const addproduct = async (data) => {
//     return await axios
//         .post("http://apsensyscare.com/backend_api/addproduct",data)
//         .then((response) => response.data)
// };
export const imagMagnifing = async (data) => {
    return await axios
        .post("http://apsensyscare.com/backend_api/magnifying", data)
        .then((response) => response.data.images)
};
export const deleteproductvarity = async (data) => {
    return await axios
        .post("http://apsensyscare.com/backend_api/deleteproductvarity", data)
        .then((response) => response.data.images)
};

// dashboard........


export const fetchorderDetails = async (id) => {
    return await axios
        .post("http://apsensyscare.com/backend_api/orderDetails", id)
        .then((response) => response.data)
}
export const fetchUser = async (data) => {
    return await axios
        .post("http://apsensyscare.com/backend_api/admin-login", data)
        .then((response) => response.data)
        .catch((error)=> error.response.data)
};
export const orderCommand = async (data) => {
    return await axios
        .post("http://apsensyscare.com/backend_api/commands", data)
        .then((response) => response.data.orderdata)
};
export const Updatestatus = async (data) => {
    return await axios
        .post("http://apsensyscare.com/backend_api/statusupdate", data)
        .then((response) => response.data)
};
export const Addsize = async (data) => {
    return await axios
        .post("http://apsensyscare.com/backend_api/Addsize", data)
        .then((response) => response.data)
};
export const customerfetch = async () => {
    return await axios
        .post("http://apsensyscare.com/backend_api/customer")
        .then((response) => response.data.Customer_order_details)
};
export const revenueHistory = async () => {
    return await axios
        .post("http://apsensyscare.com/backend_api/revenuehistory")
        .then((response) => response.data.RevenueHistory)
};


export const customerbyId = async (id) => {
    return await axios
        .post("http://apsensyscare.com/backend_api/customeredit", id)
        .then((response) => response.data.CustomerEdit)
};
export const updatePassword = async (id) => {
    return await axios
        .post("http://apsensyscare.com/backend_api/updatepaswword", id)
        .then((response) => response.data.CustomerEdit)
};
export const Deleteuser = async (id) => {
    return await axios
        .post("http://apsensyscare.com/backend_api/deleteuser", id)
        .then((response) => response.data)
};
export const imageMagnified = async (data) => {
    return await axios
        .post("http://apsensyscare.com/backend_api/imagemagnified", data)
        .then((response) => response.data)
};
export const AddBanners = async (data) => {
    return await axios
        .post("http://apsensyscare.com/backend_api/addbanners", data)
        .then((response) => response.data)
};
export const deleteProduct = async (data) => {
    return await axios
        .post("http://apsensyscare.com/backend_api/productdelete", data)
        .then((response) => response.data)
};

