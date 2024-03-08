import axios from "axios"
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
        .post("http://apsensyscare.com/backend_api/productdetailsbyid",id)
        .then((response) => response.data.productdetails)
};  
export const updateProductsById = async (details) => {
    return await axios
        .post("http://apsensyscare.com/backend_api/updateproducts",details)
        .then((response) => response.data)
};  
export const updateCategoryById = async (details) => {
    return await axios
        .post("http://apsensyscare.com/backend_api/updateCategory",details) 
        .then((response) => response.data)
};
export const fetchCategoryById = async (id) => {
    return await axios
        .post("http://apsensyscare.com/backend_api/categorydetailsbyid",id)
        .then((response) => response.data.categorydetails)
};   
export const Addcategory = async (category) => { 
    return await axios
        .post("http://apsensyscare.com/backend_api/addcategory",category)
        .then((response) => response.data)
}; 
export const Addproduct = async (product) => {
    return await axios
        .post("http://apsensyscare.com/backend_api/addproduct",product)
        .then((response) => response.data)
};

export const uploadImage = async (data) => {
    return await axios
        .post("http://apsensyscare.com/backend_api/i-upload",data)
        .then((response) => response.data)
};
export const getProductSizes = async (id) => {
    return await axios
        .post("http://apsensyscare.com/backend_api/productsizes",id)
        .then((response) => response.data.productsizes)
};
export const fetchSize = async () => {
    return await axios
        .post("http://apsensyscare.com/backend_api/size")
        .then((response) => response.data.size)
};
export const addvarity = async (data) => {
    return await axios
        .post("http://apsensyscare.com/backend_api/addproductvarities",data)
        .then((response) => response.data)
};
// export const addproduct = async (data) => {
//     return await axios
//         .post("http://apsensyscare.com/backend_api/addproduct",data)
//         .then((response) => response.data)
// };
export const imagMagnifing = async (data) => {
    return await axios
        .post("http://apsensyscare.com/backend_api/magnifying",data)
        .then((response) => response.data.images)
};
export const deleteproductvarity = async (data) => {
    return await axios
        .post("http://apsensyscare.com/backend_api/deleteproductvarity",data)
        .then((response) => response.data.images)
};
 
