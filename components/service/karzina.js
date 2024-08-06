import http from "@/components/service/baseURL";

const karzina = {
  get: () => http.get(`/user-baskets`),
  basketPost: (product) => http.post(`/basket`, product),
  basketdel: (productId) => http.post(`/basket`, { productId }),
};

export default karzina;