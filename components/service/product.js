import http from "@/components/service/baseURL";

const productsApi = {
  get: () => http.get("/products?", { params: { page: 1, limit: 10 } }),
};

export default productsApi;
export const getProduct = async (page, limit) => {
  try {
    const response = await http.get(`/products?page=${page}&limit=${limit}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
export const getProductId = async (product_id) => {
  try {
    const response = await http.get(`/product/${product_id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    throw error;
  }
};