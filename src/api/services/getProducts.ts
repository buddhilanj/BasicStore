import axios from '@api/client';
import handleResponse from '@api/utils/handleResponse';
import { isProductResponse, ProductResponse } from '@apiModels/productResponse';

async function getProducts(limit: number = 0, skip: number = 0): Promise<ProductResponse> {
  const url = '/products';
  const params = {
    limit,
    skip,
    select: 'id,title,price,description,thumbnail',
  };
  const response = await axios.API.get(url, { params });
  const responseData: unknown = handleResponse(response);
  if (isProductResponse(responseData)) {
    return responseData;
  }
  throw new Error('The response was not in the expected format');
}

export default getProducts;
