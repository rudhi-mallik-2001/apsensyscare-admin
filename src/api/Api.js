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
        .then((response) => response.data.productdetails)
};  