import { useHttp } from "./useHttp";

export function useDogApi() {
  const http = useHttp("https://dog.ceo/api/breeds");

  function getRandomDog(amount) {
    return http.get(`/image/random/${amount}`);
  }

  return { getRandomDog };
}
