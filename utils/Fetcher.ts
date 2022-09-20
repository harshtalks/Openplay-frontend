import { RemoteAnimeData } from "../types/remoteDataTypes";

const Fetcher = async (url: string) => {
  try {
    const result = await fetch(
      `https://anime-facts-rest-api.herokuapp.com/api/v1${url}`
    );

    const data: any = await result.json();

    if (!data.success) {
      throw new Error("Something went wrong.");
    }
    console.log(data);
    return data;
  } catch (el) {
    return el;
  }
};

export default Fetcher;
