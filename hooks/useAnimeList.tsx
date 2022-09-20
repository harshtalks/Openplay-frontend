import useSWR from "swr";
import Fetcher from "../utils/Fetcher";

function useAnimeList() {
  const { data, error } = useSWR("/", Fetcher);

  return {
    list: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default useAnimeList;
