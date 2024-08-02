import http from "@/components/service/baseURL";

const productsApi = {
  get: () => http.get("/products?", { params: { page: 1, limit: 10 } }),
};

export default productsApi;