import { apiClient } from "./api-client";
import { Photo } from "../types/Photo";

export const fetchPhotos = async () => {
  return (await apiClient.get<Photo[]>("/photos")).data;
};
