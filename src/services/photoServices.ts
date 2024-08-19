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
  const request = await apiClient.get<SearchPhotosAPI>(`/search/photos`, {
    params: {
      query,
      page,
      per_page: 10,
    },
  });
  return request.data;
};

export const fetchSearchPhotosInfinite = async (
  query: string,
  props: { pageParam: number }
) => {
  const request = await apiClient.get<SearchPhotosAPI>("/search/photos", {
    params: {
      query: query,
      page: props.pageParam,
    },
  });
  return request.data;
};
