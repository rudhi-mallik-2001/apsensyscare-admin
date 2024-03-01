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