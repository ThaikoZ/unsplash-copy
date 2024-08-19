import { apiClient } from "./api-client";
import { Photo } from "../types/Photo";

interface SearchPhotosAPI {
  total: number;
  total_pages: number;
  results: Photo[];
}

interface InfiniteQueryParams {
  pageParam?: number;
}

export const fetchPhotos = async (props: InfiniteQueryParams) => {
  const request = await apiClient.get<Photo[]>("/photos", {
    params: {
      page: props.pageParam,
    },
  });
  return request.data;
};

export const fetchSearchPhotos = async (query: string, page: number = 1) => {
  return apiClient.get<SearchPhotosAPI>(`/search/photos`, {
    params: {
      query,
      page,
      per_page: 10,
    },
  });
};

export const fetchSearchPhotosInfinite = async (
  query: string,
  props: { pageParam: number }
) => {
  return apiClient.get<SearchPhotosAPI>("/search/photos", {
    params: {
      query: query,
      page: props.pageParam,
    },
  });
};
