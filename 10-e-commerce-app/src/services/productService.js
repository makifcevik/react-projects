import { API } from "./apiConfig";

export async function getProducts(productId = '') {
    const endpoint = productId ? `/products/${productId}` :  "/products";
    const response = await API.get(endpoint);
    return response.data;
}