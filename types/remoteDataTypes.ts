export type SingularData = {
  anime_id: string;
  anime_img: string;
  anime_name: string;
};

export type AnimeList = Array<SingularData>;

export type RemoteAnimeData = {
  data: AnimeList;
  success: boolean;
};

export type FactType = {
  fact_id: string;
  fact: string;
};

export type Facts = Array<FactType>;

export type FactListType = {
  success: boolean;
  data: Facts;
  img: string;
  total_facts: number;
};
