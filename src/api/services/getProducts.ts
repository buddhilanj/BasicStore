import axios from '@api/client';
import handleResponse from '@api/utils/handleResponse';
import { isProductResponse, ProductResponse } from '@apiModels/productResponse';

async function getProducts(): Promise<ProductResponse> {
  const response = await axios.API.get('/products');
  const responseData: unknown = handleResponse(response);
  if (isProductResponse(responseData)) {
    return responseData;
  }
  throw new Error('The response was not in the expected format');
}

export default getProducts;
