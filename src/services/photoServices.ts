import { apiClient } from "./api-client";
import { Photo } from "../types/Photo";

interface SearchPhotosAPI {
  total: number;
  total_pages: number;
  results: Photo[];
}

export const fetchPhotos = async () => {
  return apiClient.get<Photo[]>("/photos");
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
