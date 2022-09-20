import { Identity } from "@mui/base";
import useSWR from "swr";
import Fetcher from "../utils/Fetcher";

function useAnimeFacts({ id }: { id: any }) {
  const { data, error } = useSWR(`/${id}`, Fetcher);

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default useAnimeFacts;
