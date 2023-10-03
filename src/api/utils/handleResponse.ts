import { AxiosResponse } from 'axios';

export default function handleResponse(response: AxiosResponse): unknown {
  const { status } = response;
  if (status === 200) {
    return response.data;
  }
  throw new Error('The request was not successful');
}
