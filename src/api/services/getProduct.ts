import axios from '@api/client';
import handleResponse from '@api/utils/handleResponse';
import { isProductDetails, ProductDetail } from '@models/ProductDetail';
import { getMockColors } from 'src/util/mock/getColors';
import getMockSizes from 'src/util/mock/getSizes';

async function getProduct(id: number): Promise<ProductDetail> {
  const response = await axios.API.get(`/products/${id}`);
  const responseData: unknown = handleResponse(response);
  if (isProductDetails(responseData)) {
    responseData.variations = { color: getMockColors(), size: getMockSizes() };
    return responseData;
  }
  throw new Error('The response was not in the expected format');
}

export default getProduct;
