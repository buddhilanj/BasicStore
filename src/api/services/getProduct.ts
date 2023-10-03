import axios from '@api/client';
import handleResponse from '@api/utils/handleResponse';
import { isProductDetails, ProductDetail } from '@models/ProductDetail';

async function getProduct(id: number): Promise<ProductDetail> {
  const response = await axios.API.get(`/products/${id}`);
  const responseData: unknown = handleResponse(response);
  if (isProductDetails(responseData)) {
    return responseData;
  }
  throw new Error('The response was not in the expected format');
}

export default getProduct;
