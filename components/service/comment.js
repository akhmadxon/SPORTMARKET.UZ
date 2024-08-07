import http from "@/components/service/baseURL";

export const getComment = async (page, limit, product_id) => {
  try {
    const response = await http.get(`/product-comments?page=${page}&limit=${limit}&id=${product_id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const addComment = async (product_id, commentText) => {
  try {
    const response = await http.post('/comment', { product_id, commentText });
    return response.data;
  } catch (error) {
    console.error('Error adding comment:', error);
    throw error;
  }
};
