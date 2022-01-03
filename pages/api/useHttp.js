import { useAxios } from "./useAxios";

export function useHttp(baseURL, headers) {
  const axios = useAxios(baseURL, headers);

  async function get(url) {
    const response = await axios.get(url);
    return response.data;
  }

  return {
    get,
  };
}
